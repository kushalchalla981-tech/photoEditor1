import React from 'react';

export default function TransformPanel({ rotation, flipH, flipV, imageInfo, onRotate, onFlipH, onFlipV, onAngleChange }) {
  const angle = ((rotation % 360) + 360) % 360;
  const displayAngle = rotation % 360;

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* Rotation Buttons */}
      <div>
        <div style={sectionLabel}>Rotation</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 8 }}>
          {[
            { label: '↺  −90°', action: () => onRotate(-90) },
            { label: '↻  +90°', action: () => onRotate(+90) },
          ].map((btn, i) => (
            <button key={i} onClick={btn.action} style={toolBtn(false)}>
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Angle */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 11, color: '#888' }}>Custom Angle</span>
          <span style={{ fontSize: 11, color: displayAngle !== 0 ? '#c9a84c' : '#3a3a3a', fontWeight: 500 }}>
            {displayAngle}°
          </span>
        </div>
        <input
          type="range"
          min={-180}
          max={180}
          value={displayAngle}
          style={{ '--range-progress': `${(displayAngle + 180) / 360 * 100}%` }}
          onChange={(e) => onAngleChange(Number(e.target.value))}
        />
      </div>

      {/* Flip Buttons */}
      <div>
        <div style={sectionLabel}>Flip</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 8 }}>
          <button onClick={onFlipH} style={toolBtn(flipH)}>↔ Horizontal</button>
          <button onClick={onFlipV} style={toolBtn(flipV)}>↕ Vertical</button>
        </div>
      </div>

      {/* Image Info */}
      {imageInfo && (
        <div>
          <div style={sectionLabel}>Image Info</div>
          <div style={{
            background: '#141414',
            border: '1px solid #1e1e1e',
            borderRadius: 10,
            padding: 14,
            marginTop: 8,
            fontSize: 11,
            color: '#666',
            lineHeight: 2,
          }}>
            <div>Width <span style={{ color: '#aaa', float: 'right' }}>{imageInfo.width}px</span></div>
            <div>Height <span style={{ color: '#aaa', float: 'right' }}>{imageInfo.height}px</span></div>
            <div>Format <span style={{ color: '#aaa', float: 'right' }}>{imageInfo.format}</span></div>
            <div>Size <span style={{ color: '#aaa', float: 'right' }}>{imageInfo.size}</span></div>
          </div>
        </div>
      )}
    </div>
  );
}

const sectionLabel = {
  fontSize: 10,
  color: '#444',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  fontWeight: 500,
};

const toolBtn = (active) => ({
  background: active ? 'rgba(201,168,76,0.1)' : '#1a1a1a',
  border: `1px solid ${active ? '#c9a84c' : '#282828'}`,
  color: active ? '#c9a84c' : '#888',
  borderRadius: 8,
  cursor: 'pointer',
  padding: '10px 8px',
  fontSize: 11,
  fontFamily: "'DM Sans', system-ui",
  fontWeight: 500,
  letterSpacing: '0.03em',
  transition: 'all 0.2s',
});
