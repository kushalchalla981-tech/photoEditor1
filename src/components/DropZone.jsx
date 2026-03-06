import React, { useState } from 'react';

export default function DropZone({ onFile }) {
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) onFile(file);
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      style={{
        width: 480,
        height: 340,
        borderRadius: 20,
        border: `2px dashed ${dragging ? '#c9a84c' : '#2a2a2a'}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        cursor: 'pointer',
        transition: 'all 0.3s',
        background: dragging ? 'rgba(201,168,76,0.04)' : 'transparent',
        boxShadow: dragging ? '0 0 40px rgba(201,168,76,0.1)' : 'none',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      {/* Icon */}
      <div style={{
        width: 72,
        height: 72,
        borderRadius: 18,
        background: '#141414',
        border: '1px solid #242424',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        transition: 'transform 0.3s',
        transform: dragging ? 'scale(1.1)' : 'scale(1)',
      }}>
        🖼
      </div>

      {/* Text */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 24,
          color: '#e0d5c5',
          marginBottom: 8,
          transition: 'color 0.3s',
        }}>
          {dragging ? 'Release to open' : 'Drop your photo here'}
        </div>
        <div style={{ fontSize: 12, color: '#555', letterSpacing: '0.03em', fontWeight: 300 }}>
          JPG · PNG · WebP · GIF · BMP · TIFF · AVIF
        </div>
      </div>

      <div style={{
        fontSize: 10,
        color: '#3a3a3a',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        fontWeight: 500,
        marginTop: -8,
      }}>
        or click Open in the toolbar
      </div>

      {/* Corner accents */}
      {['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].map((corner) => {
        const isTop   = corner.includes('top');
        const isLeft  = corner.includes('Left');
        return (
          <div
            key={corner}
            style={{
              position: 'absolute',
              top:    isTop    ? 16 : undefined,
              bottom: !isTop   ? 16 : undefined,
              left:   isLeft   ? 16 : undefined,
              right:  !isLeft  ? 16 : undefined,
              width: 16, height: 16,
              borderTop:    isTop    ? `1px solid ${dragging ? '#c9a84c44' : '#2a2a2a'}` : undefined,
              borderBottom: !isTop   ? `1px solid ${dragging ? '#c9a84c44' : '#2a2a2a'}` : undefined,
              borderLeft:   isLeft   ? `1px solid ${dragging ? '#c9a84c44' : '#2a2a2a'}` : undefined,
              borderRight:  !isLeft  ? `1px solid ${dragging ? '#c9a84c44' : '#2a2a2a'}` : undefined,
              transition: 'border-color 0.3s',
            }}
          />
        );
      })}
    </div>
  );
}
