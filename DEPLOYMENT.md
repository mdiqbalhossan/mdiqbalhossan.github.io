# 🚀 Deployment Guide

This guide covers deploying your portfolio to various platforms with production optimizations.

## 🌟 Pre-Deployment Checklist

### ✅ **Content & Customization**
- [ ] Update personal information in `/lib/constants.ts`
- [ ] Add your projects, skills, and education
- [ ] Replace placeholder images in `/public/images/`
- [ ] Update social media links and contact information
- [ ] Customize colors and theme in `tailwind.config.js`
- [ ] Update site metadata in `/lib/metadata.ts`

### ✅ **Environment Variables**
- [ ] Set up `.env.local` with your configuration
- [ ] Configure analytics (Google Analytics, Vercel Analytics)
- [ ] Set up email service for contact form
- [ ] Add your domain to CORS settings

### ✅ **Performance & SEO**
- [ ] Test with Lighthouse (aim for 90+ scores)
- [ ] Verify all images are optimized
- [ ] Check meta tags and structured data
- [ ] Test contact form functionality
- [ ] Ensure responsive design works on all devices

## 🔧 Platform-Specific Deployment

### 1. **Vercel (Recommended)**

Vercel offers the best Next.js deployment experience with zero configuration.

#### **Quick Deploy**
1. Push your code to GitHub/GitLab/Bitbucket
2. Visit [vercel.com](https://vercel.com) and sign up
3. Click "New Project" and import your repository
4. Vercel auto-detects Next.js and deploys

#### **Custom Domain**
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as shown
4. SSL is automatically configured

#### **Environment Variables**
1. Go to Project Settings → Environment Variables
2. Add production environment variables:
   ```
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   SMTP_HOST=your-smtp-host
   SMTP_USER=your-smtp-user
   SMTP_PASS=your-smtp-password
   ```
3. Redeploy to apply changes

#### **Production Optimizations**
```javascript
// vercel.json (optional)
{
  "functions": {
    "app/api/contact/route.ts": {
      "maxDuration": 10
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 2. **Netlify**

Great alternative with excellent performance and features.

#### **Deploy Steps**
1. Build the project:
   ```bash
   npm run build
   npm run export  # if using static export
   ```

2. Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
       Cache-Control = "public, max-age=31536000"

   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/:splat"
     status = 200
   ```

3. Deploy via:
   - Drag & drop the `.next` folder
   - Git integration
   - Netlify CLI

#### **Environment Variables**
1. Go to Site Settings → Environment Variables
2. Add your variables
3. Redeploy the site

### 3. **AWS Amplify**

Scalable hosting with AWS integration.

#### **Deploy Steps**
1. Install Amplify CLI:
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. Initialize Amplify:
   ```bash
   amplify init
   amplify add hosting
   amplify publish
   ```

3. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### 4. **Self-Hosted (VPS/Dedicated Server)**

For full control over your hosting environment.

#### **Server Setup**
1. **Install Node.js**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Install PM2**:
   ```bash
   sudo npm install -g pm2
   ```

3. **Deploy Application**:
   ```bash
   git clone your-repo.git
   cd portfolio
   npm install --production
   npm run build
   ```

4. **Start with PM2**:
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 startup
   pm2 save
   ```

#### **Nginx Configuration**
```nginx
server {
    listen 80;
    server_name yourname.dev www.yourname.dev;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **SSL with Let's Encrypt**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourname.dev -d www.yourname.dev
   ```

## 🔒 Security Configuration

### **Environment Variables**
Never commit sensitive data. Use platform-specific environment variable settings:

```bash
# Production variables
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
DATABASE_URL=your-database-url
NEXTAUTH_SECRET=your-secret-key
```

### **Security Headers**
Already configured in `next.config.js`:
- X-XSS-Protection
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## 📊 Analytics Setup

### **Google Analytics 4**
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to environment variables:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### **Vercel Analytics**
1. Enable in Vercel dashboard
2. Add to environment variables:
   ```bash
   NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id
   ```

## 📧 Contact Form Configuration

### **Using Gmail SMTP**
1. Enable 2-factor authentication
2. Generate app password
3. Configure environment variables:
   ```bash
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

### **Using SendGrid**
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Configure environment variables:
   ```bash
   SENDGRID_API_KEY=your-api-key
   SENDGRID_FROM_EMAIL=your-email@domain.com
   ```

## 🚀 Performance Optimization

### **Image Optimization**
1. Use WebP/AVIF formats
2. Optimize images before uploading
3. Use Next.js Image component
4. Enable image optimization in `next.config.js`

### **Bundle Analysis**
```bash
npm run build:analyze
```

### **Core Web Vitals**
- **LCP**: < 2.5s (optimized with image loading)
- **FID**: < 100ms (minimized JavaScript)
- **CLS**: < 0.1 (stable layouts)

## 🌐 Custom Domain Setup

### **DNS Configuration**
Add these records to your domain:

```
Type    Name    Value
A       @       76.76.19.61 (Vercel IP)
CNAME   www     yourname.dev
```

### **SSL Certificate**
Most platforms auto-configure SSL. For self-hosted:

```bash
sudo certbot --nginx -d yourname.dev -d www.yourname.dev
```

## 📱 PWA Configuration

Already configured with:
- App manifest (`/app/manifest.ts`)
- Service worker ready
- Offline support ready

To enable full PWA:
1. Implement service worker
2. Add offline page
3. Enable install prompt

## 🔍 SEO Checklist

- [x] Meta tags configured
- [x] Structured data (JSON-LD)
- [x] Sitemap generation
- [x] Robots.txt
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Canonical URLs
- [x] Alt text for images

## 🐛 Troubleshooting

### **Common Issues**

1. **Build Failures**:
   ```bash
   npm run clean
   npm install
   npm run build
   ```

2. **Environment Variables Not Working**:
   - Ensure NEXT_PUBLIC_ prefix for client-side variables
   - Restart development server
   - Check for typos

3. **Contact Form Not Working**:
   - Verify SMTP settings
   - Check API route in browser dev tools
   - Test with curl:
     ```bash
     curl -X POST -H "Content-Type: application/json" \
       -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test"}' \
       https://yourname.dev/api/contact
     ```

4. **Images Not Loading**:
   - Check file paths and extensions
   - Verify Next.js Image configuration
   - Ensure images are in `/public` directory

## 📞 Support

If you encounter issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review platform-specific guides
3. Check environment variables
4. Test locally first

---

🎉 **Congratulations!** Your portfolio is now live and optimized for production. 