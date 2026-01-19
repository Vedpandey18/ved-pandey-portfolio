# Fix Netlify 404 Error

## The Issue
Netlify is showing a 404 error because it's deploying from the wrong directory. The deploy file browser shows `build/public` and `build/src` which means Netlify is looking at the repository root instead of the `build` folder.

## Solution

### Step 1: Update Netlify Build Settings

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your site: **ved-pandey-portfolio**
3. Go to **Site settings** → **Build & deploy** → **Build settings**
4. Update these settings:
   - **Base directory:** Leave empty (or set to `.`)
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `build` (IMPORTANT: Make sure this is exactly `build`, not `build/` or anything else)
5. Click **Save**

### Step 2: Clear Cache and Redeploy

1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Clear cache and deploy site**
3. Wait for the build to complete

### Step 3: Verify Build Output

After deployment, check the deploy file browser. It should show:
- ✅ `index.html` (at root)
- ✅ `static/` folder
- ✅ `_redirects` file
- ✅ `asset-manifest.json`
- ✅ `manifest.json`

**NOT:**
- ❌ `build/public`
- ❌ `build/src`
- ❌ `package.json`

## Alternative: Manual Fix via Netlify CLI

If the dashboard doesn't work:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Link to your site
netlify link

# Update site settings
netlify sites:update --build-command "npm install && npm run build" --publish-dir "build"

# Deploy
netlify deploy --prod
```

## Verify Configuration

Your `netlify.toml` should have:
```toml
[build]
  command = "npm install && npm run build"
  publish = "build"
```

## After Fix

Once fixed, your site should be accessible at:
- `https://ved-pandey-portfolio.netlify.app`
- All routes should work (no more 404 errors)

## Still Having Issues?

1. Check build logs in Netlify dashboard
2. Verify `build` folder exists after build completes
3. Make sure `build/index.html` exists
4. Check that `_redirects` file is in `build/` folder
