import React from 'react';

export default function TopBar({ imageName, canUndo, canRedo, onUndo, onRedo, onReset, onExport, onOpen }) {
  return (
    <div style={{
      height: 52,
      background: '#0d0d0d',
      borderBottom: '1px solid #1e1e1e',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      gap: 12,
      flexShrink: 0,
      zIndex: 10,
    }}>
      {/* Wordmark */}
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 18,
        color: '#c9a84c',
        letterSpacing: '-0.01em',
        flexShrink: 0,
        userSelect: 'none',
      }}>
        LUMINARY
      </div>

      <div style={{ width: 1, height: 24, background: '#222', flexShrink: 0 }} />

      {imageName && (
        <div style={{
          fontSize: 11,
          color: '#555',
          letterSpacing: '0.05em',
          fontWeight: 300,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: 200,
        }}>
          {imageName}
        </div>
      )}

      <div style={{ flex: 1 }} />

      {imageName && (
        <>
          {/* Undo */}
          <button
            onClick={onUndo}
            disabled={!canUndo}
            title="Undo (Ctrl+Z)"
            style={iconBtnStyle(!canUndo)}
          >
            ↺
          </button>

          {/* Redo */}
          <button
            onClick={onRedo}
            disabled={!canRedo}
            title="Redo (Ctrl+Shift+Z)"
            style={iconBtnStyle(!canRedo)}
          >
            ↻
          </button>

          <button onClick={onReset} style={textBtnStyle}>
            RESET
          </button>

          <div style={{ width: 1, height: 24, background: '#222' }} />

          <button
            onClick={onExport}
            style={{
              background: 'linear-gradient(135deg, #c9a84c 0%, #a8892f 100%)',
              border: 'none',
              color: '#080808',
              borderRadius: 8,
              padding: '7px 18px',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.08em',
              cursor: 'pointer',
              fontFamily: "'DM Sans', system-ui",
              transition: 'box-shadow 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(201,168,76,0.4)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            EXPORT
          </button>
        </>
      )}

      <button onClick={onOpen} style={textBtnStyle}>
        + OPEN
      </button>
    </div>
  );
}

const iconBtnStyle = (disabled) => ({
  background: '#1a1a1a',
  border: '1px solid #282828',
  color: disabled ? '#333' : '#888',
  borderRadius: 8,
  padding: '6px 12px',
  fontSize: 14,
  cursor: disabled ? 'not-allowed' : 'pointer',
  transition: 'all 0.2s',
  fontFamily: "'DM Sans', system-ui",
  lineHeight: 1,
});

const textBtnStyle = {
  background: '#1a1a1a',
  border: '1px solid #282828',
  color: '#888',
  borderRadius: 8,
  padding: '6px 14px',
  fontSize: 11,
  cursor: 'pointer',
  fontFamily: "'DM Sans', system-ui",
  fontWeight: 500,
  letterSpacing: '0.06em',
  transition: 'all 0.2s',
};
