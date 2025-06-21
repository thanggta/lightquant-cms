# DecapCMS GitHub Integration Setup Guide

This guide will help you configure DecapCMS with GitHub authentication according to the latest documentation.

## Prerequisites

1. A GitHub account with access to the repository where you want to store content
2. A deployed Next.js application (on Vercel, Netlify, or similar)

## Step 1: Create GitHub OAuth Application

1. Go to [GitHub Developer Settings](https://github.com/settings/applications/new)
2. Fill in the application details:
   - **Application name**: `DecapCMS for [Your Site Name]`
   - **Homepage URL**: Your deployed site URL (e.g., `https://your-site.vercel.app`)
   - **Application description**: `Content management for my blog/website`
   - **Authorization callback URL**: `https://your-site.vercel.app/api/auth`

3. Click "Register application"
4. Note down the **Client ID**
5. Click "Generate a new client secret" and note down the **Client Secret**

## Step 2: Configure Environment Variables

### For Local Development

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and fill in your values:
   ```env
   GITHUB_CLIENT_ID=your_actual_client_id
   GITHUB_CLIENT_SECRET=your_actual_client_secret
   GITHUB_TARGET_REPO=your-username/your-blog-repo
   ```

### For Production (Vercel)

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variables:
   - `GITHUB_CLIENT_ID`: Your GitHub OAuth app client ID
   - `GITHUB_CLIENT_SECRET`: Your GitHub OAuth app client secret
   - `GITHUB_TARGET_REPO`: The repository where content will be stored

### For Production (Netlify)

1. Go to your Netlify site dashboard
2. Navigate to Site settings → Environment variables
3. Add the same variables as above

## Step 3: Update Configuration

1. Edit `public/admin/config.yml`
2. Update the `repo` field with your target repository:
   ```yaml
   backend:
     name: github
     repo: your-username/your-blog-repo
     branch: main
     auth_endpoint: /api/auth
   ```

## Step 4: Deploy and Test

1. Deploy your changes to your hosting platform
2. Test that the config file is accessible at `https://your-site.vercel.app/config.yml`
3. Visit `https://your-site.vercel.app/admin`
4. Click "Login with GitHub"
5. Authorize the application
6. You should be redirected to the DecapCMS interface

**Important**: DecapCMS expects the config.yml file to be available at the root path `/config.yml`, not `/admin/config.yml`. The Vercel configuration includes a rewrite rule to handle this.

## Troubleshooting

### Common Issues

1. **"GitHub OAuth not configured" error**
   - Check that environment variables are set correctly
   - Ensure the variable names match exactly

2. **"Authentication failed" error**
   - Verify the callback URL in your GitHub OAuth app matches your site URL
   - Check that the client ID and secret are correct

3. **CORS errors**
   - The auth endpoint now includes proper CORS headers
   - Ensure your site is deployed and accessible

4. **Repository access issues**
   - Make sure you have push access to the target repository
   - Verify the repository name format is `username/repo-name`

### Enable GraphQL (Optional)

For better performance, you can enable GitHub's GraphQL API by adding this to your config.yml:

```yaml
backend:
  name: github
  repo: your-username/your-blog-repo
  branch: main
  auth_endpoint: /api/auth
  use_graphql: true
```

Note: GraphQL is not compatible with git-gateway backend.

## Next Steps

Once authentication is working:

1. Create your first blog post through the CMS
2. Verify that commits are created in your target repository
3. Set up your static site generator to build from the content repository
4. Configure deploy hooks if needed

## Support

If you encounter issues:

1. Check the browser console for error messages
2. Check your hosting platform's function logs
3. Verify all environment variables are set correctly
4. Ensure your GitHub OAuth app settings are correct
