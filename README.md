# Elementum Agency Landing Page

A pixel-perfect, highly polished, and responsive landing page mimicking the modern creative agency **Elementum**. This project features rich fluid typography, organic decorative SVG layouts, customizable floating avatar animations, and interactive client-side feedback.

Built entirely using **React (Vite) and Plain CSS** (conforming to strict design specifications with no utility frameworks), this codebase is optimized for fast load times, accessibility, and high scores in design-focused internship submissions.

---

## 🎨 Visual Identity & Key Features

- **Minimalist Creative Aesthetic**: Styled on a light gray neutral backdrop (`#F4F4F4`), framing typographic compositions with generous padding and negative space.
- **Dynamic Text Highlights**: Elegant gold-orange accent lines combined with custom pastel pink (`#FFE1EE`) and pastel green (`#D4F4E4`) pill-shaped backgrounds highlighting primary keywords.
- **Organic Floating Avatars**: An array of overlapping, circular-cropped portrait photos positioned in a stagger arch with responsive hover lifts.
- **Asynchronous Customer Bobbing**: Testimonials are surrounded by customer avatars that drift up and down at different cycle periods using custom CSS keyframe systems.
- **Fluid Connecting Paths**: Stitched sections together using interactive hand-drawn SVG lines and accent triangles.
- **Interactive Forms & Navigation**: Smooth navigation scrolling offsets, a sticky menu, and a newsletter form displaying real-time email verification feedback.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx             # Sticky header with blurred backdrop & hamburger menu
│   ├── Hero.tsx               # Big brand headline, decorative shapes, and teammate avatars
│   ├── About.tsx              # "Tomorrow..." overview text and a zoomable team circle image
│   ├── BusinessSection.tsx    # "See how..." metrics, layout and red decorative triangles
│   ├── Services.tsx           # Full-width services table with hover-shifts and badge overlays
│   ├── Testimonials.tsx       # Center pastel quote card surrounded by 7 floating avatars
│   ├── Newsletter.tsx         # Newsletter signup card with local validation
│   └── Footer.tsx             # Typographic contact column deck and legal links
├── styles.css                 # Master plain CSS stylesheet (variables, responsive, animations)
├── index.css                  # CSS entrypoint importing styles.css
├── App.tsx                    # Main app assembler with scroll anchors
└── main.tsx                   # React root mount instance
```

---

## 🚀 Setup & Installation Instructions

Follow these instructions to run the project locally or compile it for production:

### 1. Prerequisites
Verify that you have [Node.js](https://nodejs.org/) (v16.14.0 or above) and [npm](https://www.npmjs.com/) installed.

### 2. Standard Installation steps
Clone or download the project folder, open your terminal in the root, and execute:

```bash
# Clean install of all packages listed in package.json
npm install
```

### 3. Running the Development Server
Launch the hot-reloading development server to preview the site:

```bash
# Boots Vite dev on port 3000
npm run dev
```

### 4. Compiling the Production Build
Bundle and minify the source code into optimized assets within the `dist/` folder:

```bash
# Compiles React components and raw CSS assets
npm run build
```

---

## 🌌 Deployment Instructions (Vercel)

You can easily deploy this frontend landing page to **Vercel** within minutes:

### Option A: Using the Vercel Dashboard (Recommended)
1. Sign in to [Vercel](https://vercel.com).
2. Click **Add New** > **Project** on your team dashboard.
3. Import your project's GitHub repository.
4. On the configuration card, verify the following defaults:
   - **Framework Preset**: `Vite` (Vercel will auto-detect Vite).
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Vercel will bundle and serve the app on a fast global edge network.

### Option B: Using the Vercel CLI
If you prefer deploying directly from the command line:

```bash
# Install the Vercel CLI globally (if not already installed)
npm install -g vercel

# Initiate deployment in the project root
vercel
```

Follow the prompts to associate the project, then push it to production:

```bash
# Build and release production URL
vercel --prod
```

---

## 🐙 Deployment Instructions (GitHub Pages)

You can easily deploy this Vite-powered web application to **GitHub Pages** using two straightforward approaches:

### Option A: Via GitHub Actions (Highly Recommended & Automatic)
This is the most modern and fully automated setup. You don't need to install any packages locally.

1. Ensure the project is pushed to a **GitHub repository**.
2. Go to the repository settings tab, select **Pages** from the left vertical menu.
3. Under **Build and deployment** > **Source**, switch the dropdown from `Deploy from a branch` to **`GitHub Actions`**.
4. Create a folder structure in your project: `.github/workflows/deploy.yml`.
5. Put the following configuration in `deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ] # or master

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: 'pages'
     cancel-in-progress: true

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Set up Node
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: npm
         - name: Install dependencies
           run: npm ci
         - name: Build static site
           run: npm run build
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```
6. Commit and push this file. GitHub Actions will build and deploy your landing page straight to your sandbox link automatically on every single push!

---

### Option B: Via `gh-pages` NPM Script (Quick & Manual command)
If you prefer a fast, terminal-driven CLI utility to publish from your local workspace:

1. Install the deployment helper utility as a dev dependency:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Open your `package.json` file and append the following two helper commands to your `"scripts"` block:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run the deployment sequence directly in your terminal:
   ```bash
   npm run deploy
   ```
   *(This script automatically triggers Vite compilation first, captures the generated static files inside `dist/`, and publishes them safely onto a `gh-pages` deployment branch on GitHub.)*

---

## 💻 Technical Implementation Notes

- **Intersection Observer API**: Handled active scrolling viewport checks in vanilla React hooks (`useEffect`) without importing heavy third-party trigger libraries.
- **Zero-Dependency Styling**: Leveraged vanilla CSS custom properties (variables) to permit easy design tweaks without introducing PostCSS processor overhead.
- **Responsive Fluidity**: Employed a responsive desktop-first layout strategy, naturally stacking columns on tablets (`<= 1024px`) and restructuring spacing models on mobile screens (`<= 768px`) for readability.
