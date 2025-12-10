# Cord Blood Guide - Deployment Instructions

This project is a static React application built with Vite, ready for deployment on Cloudflare Pages.

## 1. Push to GitHub

Since you want to host this on your own GitHub account, follow these steps to push the code:

1.  **Create a new repository** on GitHub (e.g., named `cord-blood-guide`).
2.  **Initialize git and push** from your local machine (after downloading the files):

```bash
cd cord-blood-guide
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cord-blood-guide.git
git push -u origin main
```

## 2. Deploy to Cloudflare Pages

1.  Log in to your **Cloudflare Dashboard**.
2.  Go to **Workers & Pages** > **Create Application** > **Pages** > **Connect to Git**.
3.  Select the `cord-blood-guide` repository you just created.
4.  **Configure the build settings:**
    *   **Framework Preset:** `Vite`
    *   **Build Command:** `npm run build` (or `pnpm run build`)
    *   **Build Output Directory:** `dist`
5.  Click **Save and Deploy**.

## 3. Important Note for SPA Routing

I have already included a `public/_redirects` file in the project. This is **critical** for Cloudflare Pages. It tells Cloudflare to route all traffic to `index.html`, allowing the React router to handle pages like `/product` and `/blog` without giving 404 errors on refresh.

## 4. Custom Domain

Once deployed:
1.  Go to your Cloudflare Pages project settings.
2.  Click **Custom Domains**.
3.  Add `cordbankingreviews.com` (or your chosen domain).
4.  Cloudflare will guide you to update your DNS records (usually automatic if your domain is already on Cloudflare).
