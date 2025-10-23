# Deployment Checklist for Namecheap

## Before Building

### 1. Image Optimization (CRITICAL - Do This First!)
- [ ] Go to https://tinypng.com/
- [ ] Upload and compress ALL images in `/public` folder
- [ ] Replace original images with compressed versions
- [ ] Special attention to: Waves.gif, blackhole.gif, background.svg

**Waves.gif Alternative:**
- [ ] Option A: Heavily compress the GIF (target < 500KB)
- [ ] Option B: Replace with CSS animation (use `waves-section-optimized.tsx`)

To use the optimized CSS waves:
```tsx
// In app/page.tsx, change the import:
// import WavesSection from '@/components/waves-section';
import WavesSection from '@/components/waves-section-optimized';
```

### 2. Build the Project
```bash
npm run build
```

This creates an `out/` folder with your static site.

## Deploying to Namecheap

### 3. Upload Files
1. Log into Namecheap cPanel
2. Go to File Manager
3. Navigate to `public_html` (or your domain's root folder)
4. Upload ALL contents from the `out/` folder
5. Upload the `.htaccess` file to the root directory

### 4. Enable Compression in cPanel
1. In cPanel, find "Optimize Website" or "MultiPHP INI Editor"
2. Enable GZIP compression
3. Set `zlib.output_compression = On`

### 5. Set Up Cloudflare (FREE CDN - Highly Recommended!)

**Why?** Cloudflare will:
- Cache your site globally (faster worldwide)
- Compress files automatically
- Protect from attacks
- Provide free SSL

**Steps:**
1. Go to https://cloudflare.com/ and sign up (free)
2. Add your domain
3. Cloudflare will give you 2 nameservers
4. Go to Namecheap → Domain List → Manage → Nameservers
5. Select "Custom DNS" and enter Cloudflare's nameservers
6. Wait 5-60 minutes for DNS propagation

**In Cloudflare Dashboard:**
- [ ] SSL/TLS → Set to "Flexible" or "Full"
- [ ] Speed → Auto Minify → Enable JS, CSS, HTML
- [ ] Speed → Brotli → Enable
- [ ] Caching → Caching Level → Standard
- [ ] Page Rules → Create rule: `yourdomain.com/*` → Cache Level: Cache Everything

## Testing Performance

### 6. Test Your Site
After deployment, test at:
- https://pagespeed.web.dev/ (Google's tool)
- https://gtmetrix.com/
- https://tools.pingdom.com/

**Target Scores:**
- PageSpeed Score: > 80
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 2.5s

## Troubleshooting

### Site Still Slow?
1. **Check image sizes**: Run `dir public` - any file > 1MB needs compression
2. **Clear Cloudflare cache**: Cloudflare Dashboard → Caching → Purge Everything
3. **Check .htaccess**: Make sure it uploaded correctly
4. **Browser cache**: Test in incognito/private mode

### Common Issues
- **Images not loading**: Check file paths are lowercase
- **CSS not applying**: Clear Cloudflare cache
- **404 errors**: Make sure all files from `out/` folder are uploaded

## Quick Performance Wins

Priority order:
1. ✅ **Compress images** (biggest impact)
2. ✅ **Upload .htaccess** (already created)
3. ✅ **Enable Cloudflare** (free, huge impact)
4. ✅ **Code optimizations** (already done)

## Expected Results

Before optimization: 5-10s load time
After optimization: 1-3s load time

**First load will be slower** (downloading assets)
**Subsequent loads will be fast** (cached)

## Need Help?

If still slow after all steps:
1. Check Network tab in browser DevTools (F12)
2. Look for largest files
3. Focus on optimizing those first
