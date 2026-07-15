# Breathing Style: Memory Match (Demon Slayer Card Game) 🌸

A premium, highly interactive **Memory Card Matching Game** themed around the anime *Demon Slayer (Kimetsu no Yaiba)*. The web application features a responsive **6x6 grid (18 pairs)** with a pastel **glassmorphic** aesthetic, smooth 3D card flipping animations, and dynamic performance rankings written in a quirky, humorous tone.

To ensure fast page load speeds and prevent external URL decay, the game features **18 custom-designed, high-fidelity inline SVG emblems** representing the iconic haori patterns, guards, and weapons of the characters.

---

## ✨ Features

- 🧠 **6x6 Grid (18 Unique Pairs)**: Features 18 distinct Demon Slayer characters (Tanjiro, Nezuko, Hashiras, Muzan, and more).
- 🕒 **Concentration Timer**: Starts automatically on the first card flip and stops instantly on victory.
- ⚔️ **Sword Slashes Counter**: Counts the number of pairs flipped (moves).
- 🥋 **Breathing Form Progress**: A live percentage progress bar showing how close you are to finishing the training.
- 💬 **Quirky Character Commentary**: Humorous, dynamic feedback that updates based on your progress (e.g., *Inosuke shouting "PIG ASSAULT!"* or *Muzan laughing at you*).
- 🏆 **Final Rank Assessment**: A victory overlay that calculates your rank from *Absolute Sun Hashira* down to *Murata-Level Recruit* based on your move count.
- 💫 **Interactive UI / Glassmorphism**: Stunning floating light blobs, hover card-lift states, and click locks to prevent rapid clicking from breaking the match logic.
- 📱 **Mobile & Desktop Responsive**: Fits comfortably on all screen sizes, scaling from small viewports up to large monitors.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: Built-in React Hooks (`useState`, `useEffect`, `useCallback`, `useRef`)
- **Compilation**: WebAssembly SWC Fallback (`@next/swc-wasm-nodejs`)

---

## 🚀 How to Run Locally

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or newer is recommended).

### 2. Setup & Installation
Clone or copy the directory, then navigate into the project and install dependencies:
```bash
# Install dependencies skipping React 19 minor peer checks
npm install --legacy-peer-deps
```

### 3. Run the Development Server
Launch the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to play the game!

### 4. Build for Production
To build the application and compile page components:
```bash
npm run build
```

---

## 🌎 Deployment Guide

### Option A: GitHub Import to Vercel (Recommended)
This approach connects your repository directly to Vercel, triggering automatic deployments every time you push code.

1. **Create a GitHub Repository**: Create a new repository on [GitHub](https://github.com/).
2. **Push your code** to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initialize Demon Slayer Memory Matching Game"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```
3. **Import to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New** > **Project**.
   - Connect your GitHub account, find the repository, and click **Import**.
   - Leave the build settings as default (Next.js preset) and click **Deploy**.

### Option B: Deploy via Vercel CLI (Manual)
If you prefer deploying directly from your local terminal:

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
2. **Login to Vercel**:
   ```bash
   vercel login
   ```
3. **Deploy the Project**:
   Run this command in the project root folder:
   ```bash
   vercel
   ```
   - Follow the prompts to set up and deploy a preview project.
   - Deploy to production with:
     ```bash
     vercel --prod
     ```
