# Quick Setup Guide

## 🚀 Deploy to Vercel (Free)

### Step 1: Update Configuration
1. Edit `public/admin/config.yml`
2. Replace `your-username/your-repo-name` with your actual GitHub repo (e.g., `johndoe/my-blog`)

### Step 2: Push to GitHub
```bash
git init
git add .
git commit -m "Initial DecapCMS blog setup"
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and deploy

### Step 4: Set up GitHub OAuth
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: Your Blog CMS
   - **Homepage URL**: `https://your-site.vercel.app`
   - **Authorization callback URL**: `https://your-site.vercel.app/api/auth`
4. Copy the Client ID and Client Secret

### Step 5: Add Environment Variables in Vercel
1. In Vercel dashboard, go to your project
2. Go to Settings > Environment Variables
3. Add:
   - `GITHUB_CLIENT_ID`: Your OAuth App Client ID
   - `GITHUB_CLIENT_SECRET`: Your OAuth App Client Secret
4. Redeploy your site

## ✅ You're Done!

- **Blog**: Visit your Vercel URL to see your blog
- **Admin**: Visit `your-site.vercel.app/admin` to manage content
- **Login**: Click "Login with GitHub" to authenticate

## 📝 How to Create Content

1. Go to `/admin` on your deployed site
2. Click "Login with GitHub"
3. Click "New Blog" to create a post
4. Write your content in markdown
5. Save as draft or publish immediately
6. Changes are automatically committed to your GitHub repo
7. Vercel automatically deploys updates

## 🧪 Local Development & Testing

### Option 1: Test Backend (Recommended)
The project is configured with `local_backend: true` which allows local testing:

1. **Start the development server** (requires Node.js 18.18+):
   ```bash
   npm run dev
   ```

2. **Access the admin locally**:
   - Go to `http://localhost:3000/admin`
   - You'll see a "Login" button - click it
   - No authentication required in test mode
   - Create/edit content normally

3. **How it works**:
   - Changes are saved to local files in `content/` folder
   - No git commits are made automatically
   - Perfect for testing the CMS interface and content structure

### Option 2: GitHub OAuth for Localhost
If you want to test the full GitHub integration locally:

1. **Create a separate GitHub OAuth App** for localhost:
   - Homepage URL: `http://localhost:3000`
   - Callback URL: `http://localhost:3000/api/auth`

2. **Create `.env.local`**:
   ```env
   GITHUB_CLIENT_ID=your_localhost_client_id
   GITHUB_CLIENT_SECRET=your_localhost_client_secret
   ```

3. **Temporarily switch backend** in `config.yml`:
   ```yaml
   # Comment out the test backend and uncomment:
   backend:
     name: github
     repo: your-username/your-repo-name
     branch: main
     auth_endpoint: /api/auth
   ```

### Option 3: File System Only
Just edit markdown files directly in the `content/` folder and see changes on the blog pages.

## 🔧 Troubleshooting

**"Config Error"**: Make sure you updated the repo name in `config.yml`

**"Authentication Error"**: Check your GitHub OAuth app settings and environment variables

**"Build Error"**: The project requires Node.js 18.18+ (Vercel handles this automatically)

**Local Development Issues**: If you have Node.js < 18.18, consider using Docker or updating Node.js

## 🎨 Customization

- **Styling**: Edit Tailwind classes in the React components
- **Content Types**: Modify `public/admin/config.yml` to add new collections
- **Layout**: Update components in `src/app/`
- **Markdown**: Customize rendering in the blog post components
