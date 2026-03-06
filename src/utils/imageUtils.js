/**
 * Builds a CSS filter string from an adjustments object.
 * @param {Object} adj - Adjustment values
 * @returns {string} CSS filter string
 */
export function buildFilterString(adj) {
  return [
    `brightness(${adj.brightness}%)`,
    `contrast(${adj.contrast}%)`,
    `saturate(${adj.saturation}%)`,
    `hue-rotate(${adj.hue}deg)`,
    `blur(${(adj.blur * 0.5).toFixed(1)}px)`,
    `sepia(${adj.sepia}%)`,
    `grayscale(${adj.grayscale}%)`,
    `opacity(${adj.opacity}%)`,
  ].join(' ');
}

/**
 * Exports the edited image to a PNG file and triggers download.
 * @param {HTMLImageElement} imgEl - Source image element
 * @param {Object} adjustments  - Current adjustment values
 * @param {number} rotation     - Rotation in degrees
 * @param {boolean} flipH       - Horizontal flip
 * @param {boolean} flipV       - Vertical flip
 * @param {string} filename     - Output filename
 */
export function exportImage({ imgEl, adjustments, rotation, flipH, flipV, filename }) {
  if (!imgEl) return;

  const canvas = document.createElement('canvas');
  const rad = (rotation * Math.PI) / 180;
  const cos = Math.abs(Math.cos(rad));
  const sin = Math.abs(Math.sin(rad));

  canvas.width  = Math.round(imgEl.naturalWidth  * cos + imgEl.naturalHeight * sin);
  canvas.height = Math.round(imgEl.naturalWidth  * sin + imgEl.naturalHeight * cos);

  const ctx = canvas.getContext('2d');
  ctx.filter = buildFilterString(adjustments);
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(rad);
  ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
  ctx.drawImage(imgEl, -imgEl.naturalWidth / 2, -imgEl.naturalHeight / 2);

  const link = document.createElement('a');
  link.download = `luminary_${filename || 'photo.png'}`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

/**
 * Formats file size from bytes to a human-readable string.
 * @param {number} bytes
 * @returns {string}
 */
export function formatFileSize(bytes) {
  if (bytes < 1024)       return `${bytes} B`;
  if (bytes < 1048576)    return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

/**
 * Checks if a file is a supported image type.
 * @param {File} file
 * @returns {boolean}
 */
export function isValidImageFile(file) {
  return file && file.type.startsWith('image/');
}
