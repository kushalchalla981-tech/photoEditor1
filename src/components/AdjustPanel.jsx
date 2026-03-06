import React from 'react';
import { SLIDERS } from '../utils/constants.js';

export default function AdjustPanel({ adjustments, onChange, onChangeEnd }) {
  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {SLIDERS.map((s) => {
        const value  = adjustments[s.key];
        const isDef  = value === s.default;
        const pct    = ((value - s.min) / (s.max - s.min)) * 100;

        return (
          <div key={s.key}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: '#888', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ fontSize: 14, opacity: 0.8 }}>{s.icon}</span>
                {s.label}
              </span>
              <span style={{
                fontSize: 11,
                fontWeight: 500,
                minWidth: 36,
                textAlign: 'right',
                color: isDef ? '#3a3a3a' : '#c9a84c',
                transition: 'color 0.2s',
              }}>
                {value}{s.unit}
              </span>
            </div>

            <input
              type="range"
              min={s.min}
              max={s.max}
              value={value}
              style={{ '--range-progress': `${pct}%` }}
              onChange={(e) => onChange(s.key, Number(e.target.value))}
              onMouseUp={onChangeEnd}
              onTouchEnd={onChangeEnd}
            />
          </div>
        );
      })}
    </div>
  );
}
