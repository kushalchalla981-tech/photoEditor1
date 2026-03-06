// ─── Default Adjustments ──────────────────────────────────────────────────────
export const DEFAULT_ADJUSTMENTS = {
  brightness: 100,
  contrast:   100,
  saturation: 100,
  hue:        0,
  blur:       0,
  sepia:      0,
  grayscale:  0,
  opacity:    100,
};

// ─── Preset Filters ───────────────────────────────────────────────────────────
export const PRESET_FILTERS = [
  {
    name: 'Vivid',
    emoji: '🌈',
    filters: { brightness: 110, contrast: 115, saturation: 130, hue: 0,   blur: 0, sepia: 0,  grayscale: 0 },
  },
  {
    name: 'Cool',
    emoji: '❄️',
    filters: { brightness: 100, contrast: 105, saturation: 90,  hue: 195, blur: 0, sepia: 0,  grayscale: 0 },
  },
  {
    name: 'Warm',
    emoji: '🌅',
    filters: { brightness: 105, contrast: 100, saturation: 110, hue: 20,  blur: 0, sepia: 15, grayscale: 0 },
  },
  {
    name: 'Noir',
    emoji: '🎞',
    filters: { brightness: 95,  contrast: 130, saturation: 0,   hue: 0,   blur: 0, sepia: 0,  grayscale: 100 },
  },
  {
    name: 'Fade',
    emoji: '🌫',
    filters: { brightness: 115, contrast: 80,  saturation: 70,  hue: 0,   blur: 0, sepia: 20, grayscale: 0 },
  },
  {
    name: 'Chrome',
    emoji: '✨',
    filters: { brightness: 108, contrast: 120, saturation: 130, hue: 5,   blur: 0, sepia: 0,  grayscale: 0 },
  },
  {
    name: 'Velvet',
    emoji: '🌸',
    filters: { brightness: 90,  contrast: 110, saturation: 80,  hue: 280, blur: 0, sepia: 10, grayscale: 0 },
  },
  {
    name: 'Golden',
    emoji: '🌻',
    filters: { brightness: 105, contrast: 105, saturation: 120, hue: 35,  blur: 0, sepia: 35, grayscale: 0 },
  },
  {
    name: 'Matte',
    emoji: '🎨',
    filters: { brightness: 108, contrast: 90,  saturation: 85,  hue: 10,  blur: 0, sepia: 12, grayscale: 5 },
  },
  {
    name: 'Ice',
    emoji: '💎',
    filters: { brightness: 112, contrast: 108, saturation: 75,  hue: 210, blur: 0, sepia: 0,  grayscale: 0 },
  },
];

// ─── Adjustment Sliders Config ────────────────────────────────────────────────
export const SLIDERS = [
  { key: 'brightness', label: 'Brightness', min: 50,   max: 150,  default: 100, icon: '☀',  unit: '' },
  { key: 'contrast',   label: 'Contrast',   min: 50,   max: 200,  default: 100, icon: '◑',  unit: '' },
  { key: 'saturation', label: 'Saturation', min: 0,    max: 200,  default: 100, icon: '⬡',  unit: '' },
  { key: 'hue',        label: 'Hue Shift',  min: -180, max: 180,  default: 0,   icon: '⊕',  unit: '°' },
  { key: 'sepia',      label: 'Warmth',     min: 0,    max: 100,  default: 0,   icon: '✦',  unit: '' },
  { key: 'blur',       label: 'Blur',       min: 0,    max: 20,   default: 0,   icon: '◎',  unit: '' },
  { key: 'grayscale',  label: 'Grayscale',  min: 0,    max: 100,  default: 0,   icon: '▣',  unit: '' },
  { key: 'opacity',    label: 'Opacity',    min: 10,   max: 100,  default: 100, icon: '◌',  unit: '%' },
];

// ─── Accepted Image MIME Types ─────────────────────────────────────────────────
export const ACCEPTED_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/bmp',
  'image/tiff',
  'image/heic',
  'image/avif',
  'image/svg+xml',
];
