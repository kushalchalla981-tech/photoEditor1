import React, { useState } from 'react';
import AdjustPanel    from './AdjustPanel.jsx';
import FilterPanel    from './FilterPanel.jsx';
import TransformPanel from './TransformPanel.jsx';
import AIPanel        from './AIPanel.jsx';

const TABS = [
  { id: 'adjust',    label: 'Adjust'    },
  { id: 'transform', label: 'Transform' },
  { id: 'filter',    label: 'Filter'    },
  { id: 'ai',        label: '✦ AI'      },
];

export default function RightPanel({
  image,
  adjustments, onAdjust, onAdjustEnd,
  rotation, flipH, flipV, imageInfo,
  onRotate, onFlipH, onFlipV, onAngleChange,
  activeFilter, onApplyFilter, onRemoveFilter,
  aiLoading, aiResult, aiError, aiApplied,
  onAIAnalyze, onAIApply,
  historyLength, historyPointer,
  activeFilterName,
}) {
  const [tab, setTab] = useState('adjust');

  return (
    <div style={{
      width: 280,
      background: '#0d0d0d',
      borderLeft: '1px solid #1a1a1a',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      {/* Tab bar */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid #1a1a1a',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        flexShrink: 0,
      }}>
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: `2px solid ${tab === t.id ? '#c9a84c' : 'transparent'}`,
              color: tab === t.id ? '#c9a84c' : '#555',
              cursor: 'pointer',
              fontFamily: "'DM Sans', system-ui",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '10px 14px',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Panel content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        {tab === 'adjust' && (
          <AdjustPanel
            adjustments={adjustments}
            onChange={onAdjust}
            onChangeEnd={onAdjustEnd}
          />
        )}
        {tab === 'transform' && (
          <TransformPanel
            rotation={rotation}
            flipH={flipH}
            flipV={flipV}
            imageInfo={imageInfo}
            onRotate={onRotate}
            onFlipH={onFlipH}
            onFlipV={onFlipV}
            onAngleChange={onAngleChange}
          />
        )}
        {tab === 'filter' && (
          <FilterPanel
            image={image}
            activeFilter={activeFilter}
            onApply={onApplyFilter}
            onRemove={onRemoveFilter}
          />
        )}
        {tab === 'ai' && (
          <AIPanel
            onAnalyze={onAIAnalyze}
            loading={aiLoading}
            result={aiResult}
            error={aiError}
            applied={aiApplied}
            onApply={onAIApply}
          />
        )}
      </div>

      {/* Status bar */}
      <div style={{
        borderTop: '1px solid #1a1a1a',
        padding: '7px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0,
      }}>
        <span style={{ fontSize: 10, color: '#333', letterSpacing: '0.05em' }}>
          {historyLength} {historyLength === 1 ? 'state' : 'states'} · step {historyPointer + 1}
        </span>
        <span style={{ fontSize: 10, color: '#333' }}>
          {activeFilterName ? activeFilterName : 'Manual'}
        </span>
      </div>
    </div>
  );
}
