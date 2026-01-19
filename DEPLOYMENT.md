# Netlify Deployment Guide

This guide will help you deploy your portfolio to Netlify.

## Prerequisites
- A GitHub account
- A Netlify account (free at [netlify.com](https://www.netlify.com))
- Git installed on your computer

## Deployment Steps

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio ready for deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and authorize Netlify
   - Select your repository
   - Netlify will auto-detect the settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `build`
   - Click "Deploy site"

3. **Wait for deployment**
   - Netlify will build and deploy your site
   - You'll get a URL like: `https://random-name-123.netlify.app`

4. **Configure custom domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Build your project**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

5. **Follow the prompts** to link your site or create a new one

## Configuration Files

The project includes:
- `netlify.toml` - Netlify configuration
- `public/_redirects` - SPA routing support

## Build Settings

- **Build command:** `npm run build`
- **Publish directory:** `build`
- **Node version:** 18 (configured in netlify.toml)

## Troubleshooting

### Build fails
- Check Node version (should be 18+)
- Ensure all dependencies are in package.json
- Check build logs in Netlify dashboard

### Routing issues
- The `_redirects` file handles SPA routing
- All routes redirect to index.html with 200 status

### Environment variables
- Add any needed env vars in Netlify dashboard
- Go to Site settings → Environment variables

## Post-Deployment

1. **Update links** if you have any hardcoded localhost URLs
2. **Test all sections** of your portfolio
3. **Check mobile responsiveness**
4. **Verify all external links work**

## Continuous Deployment

Once connected to GitHub, Netlify will automatically deploy:
- Every push to main branch
- Every pull request (preview deployments)

Enjoy your live portfolio! 🚀
