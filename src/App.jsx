import React, { useState, useRef, useCallback, useEffect } from 'react';
import TopBar       from './components/TopBar.jsx';
import Canvas       from './components/Canvas.jsx';
import RightPanel   from './components/RightPanel.jsx';
import { useHistory }    from './hooks/useHistory.js';
import { useAIEnhance }  from './hooks/useAIEnhance.js';
import { buildFilterString, exportImage, formatFileSize, isValidImageFile } from './utils/imageUtils.js';
import { DEFAULT_ADJUSTMENTS } from './utils/constants.js';

export default function App() {
  // ── Image State ──────────────────────────────────────────────────────────────
  const [image,      setImage]     = useState(null);
  const [imageName,  setImageName] = useState('');
  const [imageInfo,  setImageInfo] = useState(null);
  const imgRef     = useRef(null);
  const fileRef    = useRef(null);

  // ── Adjustments (with history) ───────────────────────────────────────────────
  const {
    state:      adjustments,
    set:        setAdjustments,
    undo, redo, reset: resetHistory,
    canUndo, canRedo,
    historyLength, pointer: historyPointer,
  } = useHistory({ ...DEFAULT_ADJUSTMENTS });

  // ── Transform State ───────────────────────────────────────────────────────────
  const [rotation, setRotation] = useState(0);
  const [flipH,    setFlipH]    = useState(false);
  const [flipV,    setFlipV]    = useState(false);
  const [zoom,     setZoom]     = useState(1);

  // ── Filter State ──────────────────────────────────────────────────────────────
  const [activeFilter, setActiveFilter] = useState(null);

  // ── AI Enhance ────────────────────────────────────────────────────────────────
  const { analyze, loading: aiLoading, result: aiResult, error: aiError, applied: aiApplied, markApplied, clear: clearAI } = useAIEnhance();

  // ── Load Image ────────────────────────────────────────────────────────────────
  const loadImage = useCallback((file) => {
    if (!file || !isValidImageFile(file)) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        imgRef.current = img;
        setImage(e.target.result);
        setImageName(file.name);
        setImageInfo({
          width:  img.naturalWidth,
          height: img.naturalHeight,
          format: file.name.split('.').pop()?.toUpperCase() ?? '—',
          size:   formatFileSize(file.size),
        });
        resetHistory({ ...DEFAULT_ADJUSTMENTS });
        setRotation(0);
        setFlipH(false);
        setFlipV(false);
        setZoom(1);
        setActiveFilter(null);
        clearAI();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }, [resetHistory, clearAI]);

  // ── Keyboard Shortcuts ────────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      const mod = e.ctrlKey || e.metaKey;
      if (mod && !e.shiftKey && e.key === 'z') { e.preventDefault(); undo(); }
      if (mod &&  e.shiftKey && e.key === 'z') { e.preventDefault(); redo(); }
      if (mod && e.key === 'y')                { e.preventDefault(); redo(); }
      if (mod && e.key === 'o')                { e.preventDefault(); fileRef.current?.click(); }
      if (mod && e.key === 's')                { e.preventDefault(); handleExport(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [undo, redo]); // eslint-disable-line

  // ── Adjustment Handlers ────────────────────────────────────────────────────────
  const handleAdjust = useCallback((key, val) => {
    // Optimistic update without pushing history (called on input change)
    setAdjustments((prev) => ({ ...prev, [key]: val }));
    setActiveFilter(null);
  }, [setAdjustments]);

  const handleAdjustEnd = useCallback(() => {
    // Push to history when slider interaction ends
    setAdjustments((prev) => ({ ...prev }));
  }, [setAdjustments]);

  // ── Filter Handlers ────────────────────────────────────────────────────────────
  const handleApplyFilter = useCallback((f) => {
    setActiveFilter(f.name);
    setAdjustments({ ...DEFAULT_ADJUSTMENTS, ...f.filters });
  }, [setAdjustments]);

  const handleRemoveFilter = useCallback(() => {
    setActiveFilter(null);
    setAdjustments({ ...DEFAULT_ADJUSTMENTS });
  }, [setAdjustments]);

  // ── Transform Handlers ─────────────────────────────────────────────────────────
  const handleRotate      = (delta) => setRotation((r) => r + delta);
  const handleAngleChange = (angle) => setRotation(angle);

  // ── AI Handlers ────────────────────────────────────────────────────────────────
  const handleAIAnalyze = () => analyze(image);
  const handleAIApply   = () => {
    if (!aiResult?.enhancements) return;
    setAdjustments({ ...DEFAULT_ADJUSTMENTS, ...aiResult.enhancements });
    markApplied();
  };

  // ── Reset ──────────────────────────────────────────────────────────────────────
  const handleReset = () => {
    resetHistory({ ...DEFAULT_ADJUSTMENTS });
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
    setActiveFilter(null);
    clearAI();
  };

  // ── Export ─────────────────────────────────────────────────────────────────────
  const handleExport = () => {
    exportImage({
      imgEl:       imgRef.current,
      adjustments,
      rotation,
      flipH,
      flipV,
      filename:    imageName,
    });
  };

  // ── Derived Values ─────────────────────────────────────────────────────────────
  const filterStr = buildFilterString(adjustments);
  const cssTransform = `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1}) scale(${zoom})`;

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: '#080808',
    }}>
      <TopBar
        imageName={imageName}
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={undo}
        onRedo={redo}
        onReset={handleReset}
        onExport={handleExport}
        onOpen={() => fileRef.current?.click()}
      />

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <Canvas
          image={image}
          filterStr={filterStr}
          transform={cssTransform}
          aiApplied={aiApplied}
          zoom={zoom}
          onZoomIn={()    => setZoom((z) => Math.min(8, +(z + 0.1).toFixed(1)))}
          onZoomOut={()   => setZoom((z) => Math.max(0.1, +(z - 0.1).toFixed(1)))}
          onZoomReset={()  => setZoom(1)}
          onFile={loadImage}
        />

        {image && (
          <RightPanel
            image={image}
            adjustments={adjustments}
            onAdjust={handleAdjust}
            onAdjustEnd={handleAdjustEnd}
            rotation={rotation}
            flipH={flipH}
            flipV={flipV}
            imageInfo={imageInfo}
            onRotate={handleRotate}
            onFlipH={() => setFlipH((f) => !f)}
            onFlipV={() => setFlipV((f) => !f)}
            onAngleChange={handleAngleChange}
            activeFilter={activeFilter}
            onApplyFilter={handleApplyFilter}
            onRemoveFilter={handleRemoveFilter}
            aiLoading={aiLoading}
            aiResult={aiResult}
            aiError={aiError}
            aiApplied={aiApplied}
            onAIAnalyze={handleAIAnalyze}
            onAIApply={handleAIApply}
            historyLength={historyLength}
            historyPointer={historyPointer}
            activeFilterName={activeFilter}
          />
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => loadImage(e.target.files[0])}
      />
    </div>
  );
}
