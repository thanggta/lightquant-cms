# Target Blog Repository Structure

This CMS will create content in your **target blog repository**. Here's what your blog repo should look like:

## 📁 Required Folder Structure

```
your-blog-repo/
├── content/
│   ├── posts/          ← Blog posts will be created here
│   └── pages/          ← Static pages will be created here
├── public/
│   └── images/
│       └── uploads/    ← Media files will be uploaded here
└── (your blog framework files)
```

## 🛠️ Compatible Blog Frameworks

This CMS works with any static site generator that reads markdown files:

### Next.js
```
your-nextjs-blog/
├── content/posts/      ← CMS creates posts here
├── src/app/
├── public/images/uploads/
└── package.json
```

### Gatsby
```
your-gatsby-blog/
├── content/posts/      ← CMS creates posts here
├── src/
├── static/images/uploads/
└── package.json
```

### Hugo
```
your-hugo-blog/
├── content/posts/      ← CMS creates posts here
├── static/images/uploads/
└── config.yaml
```

### Astro
```
your-astro-blog/
├── content/posts/      ← CMS creates posts here
├── src/
├── public/images/uploads/
└── package.json
```

## 📝 Generated Content Format

When you create a blog post, the CMS will generate files like:

```markdown
---
title: "My First Post"
date: "2024-01-15T10:00:00.000Z"
tags: ["blog", "tutorial"]
draft: false
---

# My First Post

This is the content of my blog post written in markdown.
```

## 🔧 Setup Your Target Blog

1. **Create your blog repository** (separate from this CMS repo)
2. **Set up your preferred framework** (Next.js, Gatsby, Hugo, etc.)
3. **Create the required folders**:
   ```bash
   mkdir -p content/posts
   mkdir -p content/pages
   mkdir -p public/images/uploads
   ```
4. **Configure your blog** to read from `content/posts/` and `content/pages/`
5. **Update this CMS config** with your blog repo name

## 🚀 Deployment Options for Your Blog

- **Vercel**: Perfect for Next.js, React, Vue
- **Netlify**: Great for any static site
- **GitHub Pages**: Free hosting for static sites
- **Cloudflare Pages**: Fast global deployment

## 🔄 Content Sync Workflow

1. **Create content** in this CMS admin
2. **CMS commits** to your blog repository
3. **Your blog platform** (Vercel/Netlify) auto-deploys
4. **Content appears** on your live blog

This separation allows you to:
- ✅ Keep CMS and blog as separate concerns
- ✅ Use any blog framework you prefer
- ✅ Have multiple people manage content without touching blog code
- ✅ Deploy CMS and blog independently
