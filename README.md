# ✦ Luminary — AI-Powered Photo Editor

> A sleek, dark-luxury photo editor built with React and Vite. Edit photos in real time, apply cinematic filters, and let Claude AI intelligently enhance your shots.

![Luminary Preview](https://placehold.co/1200x600/080808/c9a84c?text=Luminary+Photo+Editor&font=playfair-display)

---

## ✨ Features

### 🎛 Real-Time Adjustments
- **Brightness** — Lift or darken the overall exposure
- **Contrast** — Punch up or flatten tonal range
- **Saturation** — Boost vivid colors or go fully desaturated
- **Hue Shift** — Rotate the color wheel across the entire photo
- **Warmth (Sepia)** — Add a golden-hour glow or cool film tone
- **Blur** — Gentle Gaussian softening
- **Grayscale** — Fully variable black-and-white conversion
- **Opacity** — Composite and layer effects

### 🎨 10 Cinematic Preset Filters
Each filter shows a live thumbnail preview of your own photo before you apply it:
`Vivid · Cool · Warm · Noir · Fade · Chrome · Velvet · Golden · Matte · Ice`

### 🔄 Transform Tools
- Rotate 90° clockwise or counter-clockwise
- Drag a custom angle dial (−180° to +180°)
- Flip horizontal and vertical independently
- Image info: native width × height, format, file size

### ✦ AI Enhancement (Claude-Powered)
1. Upload any photo
2. Click **Analyze & Enhance**
3. Claude AI analyzes lighting, color, and composition
4. Receive:
   - Scene description and mood label
   - Detected issues (underexposure, color cast, etc.)
   - Exact recommended adjustment values
   - Three actionable pro tips
5. Apply all enhancements with one click, then fine-tune manually

### 🕒 History & Non-Destructive Editing
- Full undo/redo stack — navigate your entire edit history
- Keyboard shortcuts: `Ctrl/⌘ + Z` · `Ctrl/⌘ + Shift + Z`
- Reset to original at any time

### 📤 Full-Resolution Export
- Canvas-based rendering bakes all adjustments, rotation, and flips at native resolution
- Exports as PNG, preserving maximum quality
- Keyboard shortcut: `Ctrl/⌘ + S`

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/luminary-photo-editor.git
cd luminary-photo-editor

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 AI Enhancement Setup

The AI Enhancement feature uses the [Anthropic Claude API](https://docs.anthropic.com/). To enable it:

1. Get an API key from [console.anthropic.com](https://console.anthropic.com/)
2. The app calls `https://api.anthropic.com/v1/messages` from the browser

> **Note:** In production, you should proxy API calls through your own backend to keep your API key secret. Never commit your API key to source control.

### Secure Backend Proxy (Recommended for Production)

Create a simple Express endpoint:

```js
// server.js
import express from 'express'
import fetch   from 'node-fetch'

const app = express()
app.use(express.json({ limit: '10mb' }))

app.post('/api/enhance', async (req, res) => {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type':      'application/json',
      'x-api-key':         process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(req.body),
  })
  const data = await response.json()
  res.json(data)
})

app.listen(4000)
```

Then update `src/hooks/useAIEnhance.js` to call `/api/enhance` instead of the Anthropic URL directly.

---

## 📦 Scripts

| Command         | Description                          |
|-----------------|--------------------------------------|
| `npm run dev`   | Start dev server on port 3000        |
| `npm run build` | Production build to `dist/`          |
| `npm run preview` | Preview production build locally   |
| `npm run lint`  | Run ESLint across all source files   |

---

## 🗂 Project Structure

```
luminary-photo-editor/
├── index.html                    # HTML entry point
├── vite.config.js                # Vite configuration
├── package.json
├── .gitignore
├── .eslintrc.cjs
├── public/
│   └── favicon.svg               # ✦ Gold star favicon
└── src/
    ├── main.jsx                  # React DOM entry
    ├── App.jsx                   # Root component — all state lives here
    ├── index.css                 # Global styles, range input, animations
    ├── components/
    │   ├── TopBar.jsx            # Title bar, undo/redo, export
    │   ├── Canvas.jsx            # Photo preview + zoom controls
    │   ├── DropZone.jsx          # Drag-and-drop upload area
    │   ├── RightPanel.jsx        # Tab container for all editing panels
    │   ├── AdjustPanel.jsx       # Brightness, contrast, saturation…
    │   ├── FilterPanel.jsx       # Preset filters with live thumbnails
    │   ├── TransformPanel.jsx    # Rotate, flip, angle, image info
    │   └── AIPanel.jsx           # Claude AI analysis and enhancement
    ├── hooks/
    │   ├── useHistory.js         # Generic undo/redo state hook
    │   └── useAIEnhance.js       # Claude API integration hook
    └── utils/
        ├── constants.js          # Filters, sliders, default values
        └── imageUtils.js         # CSS filter builder, canvas export, helpers
```

---

## 🖼 Supported Formats

Luminary accepts any image format your browser supports:

| Format | Extension |
|--------|-----------|
| JPEG   | `.jpg`, `.jpeg` |
| PNG    | `.png`    |
| WebP   | `.webp`   |
| GIF    | `.gif`    |
| BMP    | `.bmp`    |
| TIFF   | `.tiff`   |
| AVIF   | `.avif`   |
| HEIC   | `.heic` *(Safari / iOS)* |
| SVG    | `.svg`    |

---

## ⌨️ Keyboard Shortcuts

| Shortcut                 | Action               |
|--------------------------|----------------------|
| `Ctrl/⌘ + Z`             | Undo                 |
| `Ctrl/⌘ + Shift + Z`     | Redo                 |
| `Ctrl/⌘ + Y`             | Redo (alternate)     |
| `Ctrl/⌘ + O`             | Open file browser    |
| `Ctrl/⌘ + S`             | Export / Download    |

---

## 🎨 Design System

| Token          | Value       | Usage                    |
|----------------|-------------|--------------------------|
| `--gold`       | `#c9a84c`   | Accents, active states   |
| `--gold-dim`   | `#a8892f`   | Hover, gradient end      |
| `--bg`         | `#080808`   | App background           |
| `--surface`    | `#0d0d0d`   | Panel background         |
| `--surface-2`  | `#141414`   | Card background          |
| `--border`     | `#1e1e1e`   | Dividers                 |
| `--text`       | `#e0d5c5`   | Primary text (warm white)|
| `--muted`      | `#555`      | Secondary text           |

**Typefaces:**
- Display: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) — wordmark, headings
- Body: [DM Sans](https://fonts.google.com/specimen/DM+Sans) — UI labels, controls

---

## 🚢 Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
#   "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 18](https://react.dev) | UI framework |
| [Vite 5](https://vitejs.dev)  | Build tool & dev server |
| [Anthropic Claude API](https://docs.anthropic.com) | AI photo analysis |
| [Web Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) | Full-res image export |
| [CSS Filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) | Real-time non-destructive editing |

---

## 📄 License

MIT — free to use, modify, and distribute.

---

## 🙏 Acknowledgements

- AI photo analysis powered by [Anthropic Claude](https://anthropic.com)
- Typography by [Google Fonts](https://fonts.google.com)

---

<p align="center">
  Made with ✦ by Luminary
</p>
