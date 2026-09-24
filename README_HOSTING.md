# 🚀 Hosting Guide for CampusLink Earn Co Web App

This web application is built with modern, light-weight HTML5, Tailwind CSS, and JavaScript. You can host it online **100% FREE** with a custom domain (`campuslink.co`).

---

## Option 1: Deploy on Vercel (Recommended - 1 Minute Setup)

1. **Sign up / Log in** to [Vercel](https://vercel.com) (free account).
2. Install Vercel CLI or upload via Dashboard:
   - **Method A (Drag & Drop):** Go to `https://vercel.com/new` ➔ Drag and drop the `web/` folder directly onto the page.
   - **Method B (GitHub Integration):** Push this project repository to GitHub ➔ Click **Import** on Vercel ➔ Set Root Directory to `web` ➔ Click **Deploy**.
3. **Connect Custom Domain:** Go to Project Settings ➔ Domains ➔ Add `campuslink.co`.

---

## Option 2: Deploy on GitHub Pages (Free Permanent Hosting)

1. Initialize a Git repository if not already done:
   ```bash
   git init
   git add .
   git commit -m "CampusLink Web App initial commit"
   ```
2. Push to your GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/campuslink.git
   git branch -M main
   git push -u origin main
   ```
3. Go to your GitHub Repository ➔ **Settings** ➔ **Pages** ➔ Under Source, select **Deploy from a branch** (`main` / `web` folder) ➔ Save.
4. Your site will be live instantly at `https://YOUR_USERNAME.github.io/campuslink/`.

---

## Option 3: Deploy on Netlify

1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the `web/` folder.
3. Your site is deployed live in under 10 seconds!

---

## Local Testing
To preview locally, open `web/index.html` directly in any browser (Chrome, Edge, Safari, Firefox), or run a simple local HTTP server:
```bash
npx serve web
```
