<div align="center">

```
██╗     ██╗   ██╗███╗   ███╗██╗███╗   ██╗ █████╗ ██████╗ ██╗   ██╗
██║     ██║   ██║████╗ ████║██║████╗  ██║██╔══██╗██╔══██╗╚██╗ ██╔╝
██║     ██║   ██║██╔████╔██║██║██╔██╗ ██║███████║██████╔╝ ╚████╔╝ 
██║     ██║   ██║██║╚██╔╝██║██║██║╚██╗██║██╔══██║██╔══██╗  ╚██╔╝  
███████╗╚██████╔╝██║ ╚═╝ ██║██║██║ ╚████║██║  ██║██║  ██║   ██║   
╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝  
```

### ✦ &nbsp; AI-Powered Photo Editor &nbsp; ✦

<br/>

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Claude AI](https://img.shields.io/badge/Claude-AI-D4A843?style=for-the-badge&logo=anthropic&logoColor=black)](https://anthropic.com)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)
[![Node](https://img.shields.io/badge/Node-%E2%89%A518-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Live on Vercel](https://img.shields.io/badge/▲%20Live%20Demo-photoeditor--blue.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://photoeditor-blue.vercel.app/)

<br/>

### 🌐 &nbsp; [→ Open the Live App — photoeditor-blue.vercel.app](https://photoeditor-blue.vercel.app/)

<br/>

> **Drop a photo. Tweak every pixel. Let AI do the heavy lifting.**
>
> Luminary is a fast, beautiful, browser-based photo editor with real-time filters,
> precision controls, and Claude AI analysis — zero installs beyond Node, zero cloud uploads.

<br/>

![Luminary Screenshot](https://placehold.co/900x480/080808/c9a84c?text=✦+Drop+a+photo+and+start+editing&font=playfair-display)

</div>

---

## 🎬 &nbsp; What Can It Do?

<table>
<tr>
<td width="50%">

### 🎛️ &nbsp; Precision Adjustments
Real-time sliders with live preview. Every change is instant.

| Slider | What it does |
|--------|-------------|
| ☀ Brightness | Lift or crush exposure |
| ◑ Contrast | Pop the tonal range |
| ⬡ Saturation | Vivid → Desaturated |
| ⊕ Hue Shift | Spin the color wheel |
| ✦ Warmth | Golden-hour glow |
| ◎ Blur | Dreamy softening |
| ▣ Grayscale | Film-noir mode |
| ◌ Opacity | Layer & composite |

</td>
<td width="50%">

### 🎨 &nbsp; 10 Cinematic Filters
Each filter shows a live thumbnail of **your own photo** before applying.

```
🌈 Vivid    ❄️ Cool     🌅 Warm
🎞  Noir     🌫 Fade     ✨ Chrome
🌸 Velvet   🌻 Golden   🎨 Matte
💎 Ice
```

### 🔄 &nbsp; Transform Tools
- Rotate 90° steps or a free-drag angle dial
- Flip horizontal & vertical independently
- Custom angle slider (−180° → +180°)

</td>
</tr>
<tr>
<td>

### ✦ &nbsp; AI Enhancement (Claude-Powered)
Claude **looks at your photo** and tells you exactly what to fix.

- 🔍 Scene description + mood label
- ⚠️ Issues detected (underexposure, color cast…)
- 🎯 Precise recommended values for every slider
- 💡 Three actionable pro tips from a virtual colorist
- ⚡ One-click "Apply All" to instantly transform your shot

</td>
<td>

### 🕒 &nbsp; Non-Destructive & Safe
Your original is never touched.

- ↺ Unlimited undo / redo history
- 🔄 Reset to original at any time
- 📤 Export full-resolution PNG via Canvas API
- ⌨️ Full keyboard shortcut support
- 🖱️ Drag-and-drop any image format

</td>
</tr>
</table>

---

## 🌐 &nbsp; Using the Live App

> **No installs. No setup. Just open the link and start editing.**
>
> 🔗 **[photoeditor-blue.vercel.app](https://photoeditor-blue.vercel.app/)**

---

### Step 1 — Load Your Photo

Two ways to get an image into the editor:

- **Drag & Drop** — drag any image file from your computer directly onto the canvas area
- **Click to Browse** — click the upload zone to open a file picker

Supported formats: JPG, PNG, WebP, GIF, BMP, TIFF, AVIF, SVG

---

### Step 2 — Adjust with Sliders

The right panel has 8 real-time adjustment sliders. Every change previews instantly — nothing is permanent until you export.

| Slider | What it controls |
|--------|-----------------|
| ☀ **Brightness** | Overall exposure — right to lift, left to darken |
| ◑ **Contrast** | Difference between lights and darks |
| ⬡ **Saturation** | Color intensity — drag left for black & white |
| ⊕ **Hue Shift** | Rotates all colors around the color wheel |
| ✦ **Warmth** | Pushes tones warm (golden) or cool (blue) |
| ◎ **Blur** | Softens the image |
| ▣ **Grayscale** | Desaturates toward film-noir black & white |
| ◌ **Opacity** | Overall transparency of the image layer |

---

### Step 3 — Apply a Filter *(optional)*

Click the **Filters** tab. You'll see 10 presets — each shows a live thumbnail of *your own photo* before you commit.

```
  Vivid   →  boosted saturation and punch
  Cool    →  shifts tones into the blue range
  Warm    →  golden-hour glow
  Noir    →  high-contrast black & white
  Fade    →  muted, washed-out film look
  Chrome  →  high-key with lifted blacks
  Velvet  →  soft pinks and magentas
  Golden  →  rich amber tones
  Matte   →  flat contrast, faded blacks
  Ice     →  crisp, cold, desaturated
```

Click any filter to apply it. Click again to remove it.

---

### Step 4 — Transform *(optional)*

Click the **Transform** tab to:

- **Rotate** — 90° buttons or a free angle slider (−180° to +180°)
- **Flip Horizontal** — mirror left-to-right
- **Flip Vertical** — flip upside down

---

### Step 5 — AI Enhancement *(optional)*

Click the **AI** tab and hit **Analyse Photo**. Claude reads your image and returns:

- A scene description and mood label
- Issues detected (flat exposure, colour cast, low contrast…)
- Precise recommended values for every slider
- Three pro tips from a virtual colorist
- An **Apply All Suggestions** button that sets every slider in one click

> ⚠️ Requires an Anthropic API key. See the **Enabling AI Enhancement** section below for setup.

---

### Step 6 — Undo / Redo / Reset

| Action | Shortcut |
|--------|----------|
| Undo | `Ctrl+Z` / `⌘Z` |
| Redo | `Ctrl+Shift+Z` |
| Reset to original | **Reset** button in the top bar |

---

### Step 7 — Export

Click **Export** in the top bar or press `Ctrl+S`. The editor renders your full-resolution image with every effect baked in and downloads it as a PNG. Your original file is never modified.

---

## 🚀 &nbsp; Run It in 4 Steps

> **No account needed. No sign-up. Just Node.js on your machine.**

<br/>

### &nbsp; 〔 1 〕 &nbsp; Get the code

```bash
git clone https://github.com/kushalchalla981-tech/photoEditor1.git
cd photoEditor1
```

> 💡 **Don't have Git?** Click the green **`< > Code`** button at the top of this page → **Download ZIP** → unzip it → open a terminal inside that folder.

<br/>

### &nbsp; 〔 2 〕 &nbsp; Install dependencies

```bash
npm install
```

npm will download all the packages. Takes about 30 seconds. You'll see a progress bar.

> ⚠️ **Getting an error here?** Make sure Node.js ≥ 18 is installed.
> Check with: `node --version`
> Download from: **[nodejs.org](https://nodejs.org)** — pick the **LTS** version.

<br/>

### &nbsp; 〔 3 〕 &nbsp; Start the dev server

```bash
npm run dev
```

Your terminal will show:

```
  VITE v5.x.x  ready in ~400ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

<br/>

### &nbsp; 〔 4 〕 &nbsp; Open your browser

```
http://localhost:3000
```

🎉 **Luminary is running!** Drop any photo onto the canvas and start editing.

---

## ✦ &nbsp; Enabling AI Enhancement

The AI feature sends your photo to **Claude** (Anthropic) for analysis. Here's how to wire it up:

<br/>

**① Get a free API key**

1. Go to **[console.anthropic.com](https://console.anthropic.com)**
2. Sign up — free tier is available
3. Click **API Keys** in the sidebar → **Create Key**
4. Copy it — it looks like: `sk-ant-api03-xxxxxxx`

<br/>

**② Create a `.env` file in the project root**

```bash
# Run this in the photoEditor1/ folder:
echo "VITE_ANTHROPIC_KEY=sk-ant-api03-your-key-here" > .env
```

Or manually create a file called `.env` and paste:

```env
VITE_ANTHROPIC_KEY=sk-ant-api03-your-key-here
```

<br/>

**③ Wire it into the hook**

Open `src/hooks/useAIEnhance.js` and update the fetch headers:

```js
headers: {
  'Content-Type':      'application/json',
  'x-api-key':         import.meta.env.VITE_ANTHROPIC_KEY,
  'anthropic-version': '2023-06-01',
},
```

> 🔒 `.env` is already in `.gitignore` — your key will **never** be accidentally committed.

---

## ⌨️ &nbsp; Keyboard Shortcuts

| Keys | Action |
|------|--------|
| `Ctrl / ⌘` + `Z` | ↺ Undo |
| `Ctrl / ⌘` + `Shift` + `Z` | ↻ Redo |
| `Ctrl / ⌘` + `Y` | ↻ Redo (alternate) |
| `Ctrl / ⌘` + `O` | 📂 Open file browser |
| `Ctrl / ⌘` + `S` | 📤 Export / Download |

---

## 📁 &nbsp; Project Structure

```
photoEditor1/
│
├── 📄 index.html                ← App entry point (fonts, meta, root div)
├── 📦 package.json              ← All dependencies & npm scripts
├── ⚡ vite.config.js            ← Dev server + build settings
├── 🔧 .eslintrc.cjs             ← ESLint rules for React
├── 🚫 .gitignore                ← Keeps node_modules & .env out of git
│
├── 📂 public/
│   └── 🌟 favicon.svg           ← Gold ✦ favicon
│
└── 📂 src/
    ├── 🏠 App.jsx               ← Root component — all state lives here
    ├── 🎨 index.css             ← Global styles, range sliders, animations
    ├── 🚪 main.jsx              ← React DOM entry
    │
    ├── 📂 components/
    │   ├── TopBar.jsx           ← Title bar: undo, redo, reset, export
    │   ├── Canvas.jsx           ← Photo preview area + zoom controls
    │   ├── DropZone.jsx         ← Drag-and-drop upload interface
    │   ├── RightPanel.jsx       ← Tab switcher for all panels
    │   ├── AdjustPanel.jsx      ← All 8 adjustment sliders
    │   ├── FilterPanel.jsx      ← 10 preset filters + live thumbnails
    │   ├── TransformPanel.jsx   ← Rotate, flip, angle slider
    │   └── AIPanel.jsx          ← Claude AI integration UI
    │
    ├── 📂 hooks/
    │   ├── useHistory.js        ← Generic undo/redo state engine
    │   └── useAIEnhance.js      ← Claude API fetch + response parsing
    │
    └── 📂 utils/
        ├── constants.js         ← Filter presets, slider config, defaults
        └── imageUtils.js        ← CSS filter builder + canvas PNG export
```

---

## 🖼️ &nbsp; Supported Image Formats

| Format | Extension | Notes |
|--------|-----------|-------|
| JPEG | `.jpg` `.jpeg` | Most common — great for photos |
| PNG | `.png` | Lossless, supports transparency |
| WebP | `.webp` | Modern web format, small size |
| GIF | `.gif` | Animated GIFs work too! |
| BMP | `.bmp` | Windows bitmap |
| TIFF | `.tiff` | High quality / print use |
| AVIF | `.avif` | Next-gen compression |
| HEIC | `.heic` | iPhone photos (Safari / iOS) |
| SVG | `.svg` | Vector graphics |

---

## 🛠️ &nbsp; Scripts

```bash
npm run dev       # 🔥 Start dev server → localhost:3000
npm run build     # 📦 Production build → dist/
npm run preview   # 👀 Preview production build locally
npm run lint      # 🔍 Check all source files for issues
```

---

## 🌐 &nbsp; Deploy Live (Free)

### ▲ &nbsp; Vercel &nbsp;*(this project is already live here)*

🔗 **[photoeditor-blue.vercel.app](https://photoeditor-blue.vercel.app/)**

To deploy your own fork:

```bash
npm i -g vercel
vercel
```

Follow the CLI prompts. Your app will be live at a `*.vercel.app` URL.

### ◈ &nbsp; Netlify &nbsp;*(drag and drop)*

```bash
npm run build
# Then drag the dist/ folder to: netlify.com/drop
```

### 🐙 &nbsp; GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json` → `"scripts"`:
```json
"deploy": "gh-pages -d dist"
```

```bash
npm run build && npm run deploy
```

---

## 🐛 &nbsp; Troubleshooting

<details>
<summary><b>❌ "npm: command not found"</b></summary>
<br/>

Node.js isn't installed. Download it from **[nodejs.org](https://nodejs.org)** — pick the **LTS** version. npm is bundled with it.

After installing, close and reopen your terminal, then try `npm install` again.
</details>

<details>
<summary><b>❌ "Port 3000 is already in use"</b></summary>
<br/>

Something else is on port 3000. Change it in `vite.config.js`:

```js
server: {
  port: 3001,   // ← pick any free port
  open: true,
}
```
</details>

<details>
<summary><b>❌ AI button does nothing / shows an error</b></summary>
<br/>

The AI feature needs an Anthropic API key. See the **Enabling AI Enhancement** section above.

Without a key, all other editing features (sliders, filters, transform, export) work perfectly fine.
</details>

<details>
<summary><b>❌ Image won't load</b></summary>
<br/>

- Make sure the file is actually an image (not a .pdf or .heif)
- HEIC format only works natively in Safari. On Chrome/Firefox, convert to JPEG first.
- Very large images (>20MB) may be slow — try resizing first.
</details>

<details>
<summary><b>❌ Exported image looks wrong</b></summary>
<br/>

The export uses the browser's Canvas API at native resolution. For best results, use **Chrome** or **Edge**. Very large images (>8000px) may differ slightly in filter rendering across browsers.
</details>

---

## 🧰 &nbsp; Tech Stack

| Technology | Why it's here |
|-----------|--------------|
| [React 18](https://react.dev) | Component UI + hooks-based state management |
| [Vite 5](https://vitejs.dev) | Instant dev server, fast production builds |
| [Claude API](https://docs.anthropic.com) | AI photo scene analysis & enhancement |
| [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) | Full-resolution export with all effects baked in |
| [CSS Filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) | GPU-accelerated real-time non-destructive editing |
| [Google Fonts](https://fonts.google.com) | Playfair Display (display) + DM Sans (UI) |

---

## 🎨 &nbsp; Design Tokens

```
★ Gold        #c9a84c   →  Accents, active states, wordmark
★ Gold Dark   #a8892f   →  Hovers, gradient ends
★ Background  #080808   →  App canvas
★ Surface     #0d0d0d   →  Panels & sidebars
★ Surface 2   #141414   →  Cards & inset sections
★ Border      #1e1e1e   →  Dividers
★ Text        #e0d5c5   →  Primary (warm white)
★ Muted       #555555   →  Labels & placeholders
```

---

## 📄 &nbsp; License

**MIT** — use it, fork it, ship it, learn from it. Credit appreciated but not required.

---

<div align="center">

**Built with ✦ and a lot of dark mode**

<br/>

If Luminary made your photos look better, leave a ⭐ — it genuinely helps!

[![Star this repo](https://img.shields.io/github/stars/kushalchalla981-tech/photoEditor1?style=social)](https://github.com/kushalchalla981-tech/photoEditor1)

</div>
