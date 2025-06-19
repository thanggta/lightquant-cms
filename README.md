# DecapCMS Blog

A modern, git-based blog powered by DecapCMS and Next.js, deployable to Vercel for free.

## Features

- 🚀 **Git-based workflow**: All content is stored in your repository
- ✏️ **Editorial workflow**: Review changes before publishing
- 📝 **Markdown support**: Write content in markdown format
- 🖼️ **Media management**: Upload and manage images
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS
- ⚡ **Fast deployment**: Deploy to Vercel with zero configuration
- 🔒 **Secure**: Authentication via GitHub/GitLab

## Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd decapcms
npm install --legacy-peer-deps
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your blog.

### 3. Access Admin Panel

Visit [http://localhost:3000/admin](http://localhost:3000/admin) to access the CMS admin interface.

## Deployment to Vercel

### 1. Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo)

Or manually:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### 2. Set up GitHub Authentication

After deployment, you need to set up GitHub authentication for the CMS:

1. **Update the CMS config**: Edit `public/admin/config.yml` and replace `your-username/your-repo-name` with your actual GitHub username and repository name.

2. **Create a GitHub OAuth App**:
   - Go to GitHub Settings > Developer settings > OAuth Apps
   - Click "New OAuth App"
   - Set Application name: "Your Blog CMS"
   - Set Homepage URL: `https://your-site.vercel.app`
   - Set Authorization callback URL: `https://your-site.vercel.app/admin/`

3. **Set up Vercel Environment Variables**:
   - In your Vercel dashboard, go to your project settings
   - Add environment variables:
     - `GITHUB_CLIENT_ID`: Your OAuth App Client ID
     - `GITHUB_CLIENT_SECRET`: Your OAuth App Client Secret

4. **Alternative: Use Netlify for Auth Only**:
   - If you prefer, you can use Netlify just for authentication while keeping your site on Vercel
   - Create a Netlify site, enable Identity and Git Gateway
   - Update the CMS config to use `git-gateway` backend

## Content Management

### Creating Blog Posts

1. Go to `/admin` on your deployed site
2. Log in with your GitHub account
3. Click "New Blog" to create a post
4. Write your content in markdown
5. Save as draft or publish immediately

### Editorial Workflow

- **Draft**: Content is saved but not published
- **In Review**: Content is ready for review (creates a pull request)
- **Ready**: Content is approved and ready to publish (merges the pull request)

## Project Structure

```
├── content/
│   ├── blog/          # Blog posts (markdown files)
│   └── pages/         # Static pages (markdown files)
├── public/
│   ├── admin/         # DecapCMS admin interface
│   └── images/        # Uploaded media files
├── src/
│   ├── app/           # Next.js app router pages
│   └── lib/           # Utility functions
├── netlify.toml       # Netlify configuration
└── vercel.json        # Vercel configuration
```

## Configuration

### DecapCMS Configuration

Edit `public/admin/config.yml` to customize:

- Content collections
- Field types
- Editorial workflow
- Media storage
- Authentication backend

### Styling

The project uses Tailwind CSS. Customize styles in:

- `src/app/globals.css` - Global styles
- Component files - Component-specific styles

## Environment Variables

For production deployment, you may need:

```env
NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
```

## Learn More

- [DecapCMS Documentation](https://decapcms.org/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.
