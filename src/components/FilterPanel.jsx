import React from 'react';
import { PRESET_FILTERS, DEFAULT_ADJUSTMENTS } from '../utils/constants.js';
import { buildFilterString } from '../utils/imageUtils.js';

export default function FilterPanel({ image, activeFilter, onApply, onRemove }) {
  return (
    <div className="fade-in">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {PRESET_FILTERS.map((f) => {
          const isActive  = activeFilter === f.name;
          const filterStr = buildFilterString({ ...DEFAULT_ADJUSTMENTS, ...f.filters });

          return (
            <div
              key={f.name}
              onClick={() => onApply(f)}
              style={{
                cursor: 'pointer',
                borderRadius: 8,
                overflow: 'hidden',
                border: `1px solid ${isActive ? '#c9a84c' : '#222'}`,
                background: '#111',
                transition: 'all 0.2s',
                transform: isActive ? 'scale(0.98)' : 'scale(1)',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.borderColor = '#222';
                e.currentTarget.style.transform = isActive ? 'scale(0.98)' : 'scale(1)';
              }}
            >
              {/* Thumbnail */}
              <div style={{ height: 80, overflow: 'hidden', position: 'relative' }}>
                <img
                  src={image}
                  alt={f.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: filterStr, display: 'block' }}
                />
                {isActive && (
                  <div style={{
                    position: 'absolute', top: 5, right: 5,
                    background: '#c9a84c', borderRadius: '50%',
                    width: 16, height: 16,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 8, color: '#080808', fontWeight: 700,
                  }}>
                    ✓
                  </div>
                )}
              </div>

              {/* Label */}
              <div style={{
                padding: '5px 8px',
                fontSize: 10,
                letterSpacing: '0.06em',
                fontWeight: 500,
                color: isActive ? '#c9a84c' : '#555',
                transition: 'color 0.2s',
              }}>
                {f.name.toUpperCase()}
              </div>
            </div>
          );
        })}
      </div>

      {activeFilter && (
        <button
          onClick={onRemove}
          style={{
            width: '100%',
            marginTop: 12,
            padding: '9px',
            background: '#1a1a1a',
            border: '1px solid #282828',
            color: '#666',
            borderRadius: 8,
            fontSize: 11,
            cursor: 'pointer',
            fontFamily: "'DM Sans', system-ui",
            letterSpacing: '0.05em',
            transition: 'all 0.2s',
          }}
        >
          ✕ Remove Filter
        </button>
      )}
    </div>
  );
}
