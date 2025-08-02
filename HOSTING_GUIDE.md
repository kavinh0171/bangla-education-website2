# 🌐 Hosting Guide - বাংলা শিক্ষা সহায়ক

This guide will help you deploy the Bangla Education Helper website to various free hosting platforms.

## 📋 Pre-deployment Checklist

Before deploying, ensure you have:
- [ ] Configured the Gemini API key in `config.js`
- [ ] Tested the website locally
- [ ] All files are in the project directory
- [ ] No sensitive information in the code

## 🎯 Recommended Hosting Providers

### 1. GitHub Pages (Recommended)
**Best for**: Open source projects, version control, free custom domains

#### Steps:
1. **Create GitHub Account**
   - Go to [github.com](https://github.com)
   - Sign up for a free account

2. **Create Repository**
   - Click "New repository"
   - Name: `bangla-education-website`
   - Make it public
   - Initialize with README

3. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop all website files
   - Commit changes

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save

5. **Access Your Website**
   - URL: `https://yourusername.github.io/bangla-education-website`
   - May take 5-10 minutes to be available

#### Pros:
- ✅ Completely free
- ✅ Custom domain support
- ✅ Version control
- ✅ Automatic HTTPS
- ✅ No bandwidth limits

#### Cons:
- ❌ Repository must be public (for free accounts)
- ❌ No server-side processing

### 2. Netlify
**Best for**: Easy deployment, drag-and-drop interface

#### Steps:
1. **Create Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with email or GitHub

2. **Deploy Website**
   - Click "Add new site" → "Deploy manually"
   - Drag the entire website folder
   - Wait for deployment

3. **Configure Domain**
   - Click "Domain settings"
   - Change site name or add custom domain

#### Pros:
- ✅ Drag-and-drop deployment
- ✅ Automatic HTTPS
- ✅ Form handling
- ✅ Fast CDN
- ✅ Easy custom domains

#### Cons:
- ❌ Limited bandwidth (100GB/month)
- ❌ Build minutes limit

### 3. Vercel
**Best for**: Performance, global CDN

#### Steps:
1. **Create Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub/GitLab/Bitbucket

2. **Import Project**
   - Click "New Project"
   - Import from Git or upload files
   - Deploy

3. **Configure Settings**
   - Set up custom domain if needed
   - Configure environment variables

#### Pros:
- ✅ Excellent performance
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Git integration
- ✅ Analytics

#### Cons:
- ❌ Limited bandwidth (100GB/month)
- ❌ Function execution limits

### 4. Firebase Hosting
**Best for**: Google ecosystem integration

#### Steps:
1. **Create Firebase Project**
   - Go to [console.firebase.google.com](https://console.firebase.google.com)
   - Create new project

2. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

3. **Initialize Hosting**
   ```bash
   firebase login
   firebase init hosting
   ```

4. **Deploy**
   ```bash
   firebase deploy
   ```

#### Pros:
- ✅ Google integration
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Analytics
- ✅ Custom domains

#### Cons:
- ❌ Requires CLI setup
- ❌ More complex for beginners

## 🚫 Hosting Providers to Avoid

### InfinityFree
- **Issues**: Strict API restrictions, may block Gemini API calls
- **Alternative**: Use GitHub Pages or Netlify instead

### 000webhost
- **Issues**: Ads on free tier, limited bandwidth
- **Alternative**: Netlify offers better free tier

### Freehostia
- **Issues**: Very limited free tier, poor performance
- **Alternative**: Vercel for better performance

## ⚙️ Configuration for Hosting

### 1. API Key Security
Before deploying, secure your API key:

```javascript
// In config.js
const CONFIG = {
    GEMINI_API_KEY: 'your-api-key-here',
    API_RESTRICTIONS: {
        // Add your domain after deployment
        allowedDomains: [
            'yourdomain.com',
            'yoursubdomain.netlify.app',
            'yourusername.github.io'
        ]
    }
};
```

### 2. HTTPS Configuration
Ensure your hosting provider supports HTTPS:
- All recommended providers offer automatic HTTPS
- Required for Gemini API calls
- Improves security and SEO

### 3. Custom Domain Setup
If using a custom domain:

1. **Purchase Domain** (optional)
   - Namecheap, GoDaddy, or Google Domains
   - .com, .org, or .edu recommended

2. **Configure DNS**
   - Add CNAME record pointing to hosting provider
   - Wait for DNS propagation (24-48 hours)

3. **Update API Restrictions**
   - Add your custom domain to allowed domains
   - Update Gemini API key restrictions

## 🔧 Post-Deployment Steps

### 1. Test Functionality
- [ ] Upload a sample PDF
- [ ] Test OCR processing
- [ ] Verify chapter detection
- [ ] Test MCQ generation
- [ ] Check responsive design on mobile

### 2. Performance Optimization
- [ ] Enable compression (usually automatic)
- [ ] Optimize images if any
- [ ] Test loading speed
- [ ] Check mobile performance

### 3. SEO Setup
Add to `index.html` head section:
```html
<meta name="description" content="Free Bangla education website for creating interactive quizzes from textbooks">
<meta name="keywords" content="bangla education, quiz, textbook, mcq, bangladesh">
<meta property="og:title" content="বাংলা শিক্ষা সহায়ক">
<meta property="og:description" content="বিনামূল্যে বাংলা পাঠ্যবই থেকে প্রশ্ন তৈরি করুন">
```

### 4. Analytics Setup (Optional)
Add Google Analytics:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🔄 Updating Your Website

### GitHub Pages
1. Edit files in repository
2. Commit changes
3. Website updates automatically

### Netlify
1. Drag new files to deploy area
2. Or connect to Git for automatic updates

### Vercel
1. Push changes to connected Git repository
2. Automatic deployment triggers

### Firebase
1. Update local files
2. Run `firebase deploy`

## 🐛 Common Deployment Issues

### Issue: API Key Not Working
**Solution**: 
- Check API key is correctly set in config.js
- Verify domain is added to API restrictions
- Ensure HTTPS is enabled

### Issue: Fonts Not Loading
**Solution**:
- Check internet connection
- Verify Google Fonts CDN is accessible
- Add font fallbacks in CSS

### Issue: PDF Upload Fails
**Solution**:
- Check file size limits
- Verify HTTPS is enabled
- Test with different PDF files

### Issue: Mobile Layout Broken
**Solution**:
- Test responsive design
- Check viewport meta tag
- Verify CSS media queries

## 📞 Support

If you encounter deployment issues:
1. Check the hosting provider's documentation
2. Review browser console for errors
3. Test locally first
4. Contact hosting provider support

## 🎯 Best Practices

1. **Always test locally before deploying**
2. **Use HTTPS for security**
3. **Keep API keys secure**
4. **Monitor website performance**
5. **Regular backups of your code**
6. **Update dependencies periodically**

---

**Happy hosting! 🚀**

