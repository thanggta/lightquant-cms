# GitHub OAuth App Setup for DecapCMS

## Step 1: Create GitHub OAuth App

1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Click "New OAuth App"
3. Fill in the details:
   - **Application name**: `DecapCMS for [Your Site Name]`
   - **Homepage URL**: `https://lightquant-cms.vercel.app`
   - **Authorization callback URL**: `https://lightquant-cms.vercel.app/api/auth`

## Step 2: Configure Environment Variables

After creating the OAuth app, you'll get:
- Client ID
- Client Secret

Add these to your Vercel environment variables:
- `GITHUB_CLIENT_ID`: Your OAuth app's Client ID
- `GITHUB_CLIENT_SECRET`: Your OAuth app's Client Secret

## Step 3: Update Your Repository Name

In `public/admin/config.yml`, replace:
```yaml
repo: your-username/your-blog-repo
```

With your actual GitHub repository (e.g., `username/repository-name`)

## Step 4: Test the Setup

1. Deploy your changes to Vercel
2. Go to `https://lightquant-cms.vercel.app/admin`
3. Click "Login with GitHub"
4. You should be redirected to GitHub for authorization
5. After authorization, you should be redirected back to the CMS

## Troubleshooting

- Make sure the callback URL in GitHub OAuth app matches exactly: `https://lightquant-cms.vercel.app/api/auth`
- Ensure environment variables are set in Vercel
- Check that your repository name in config.yml is correct
- Verify that you have push access to the target repository
