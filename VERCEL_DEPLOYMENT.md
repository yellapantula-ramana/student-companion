# Vercel Deployment Guide

This guide will help you deploy the Student Companion application to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Git Repository**: Push your code to GitHub, GitLab, or Bitbucket
3. **Neon Database**: You should already have a Neon database project

## Step 1: Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

## Step 2: Push Code to Git

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Step 3: Create Vercel Project

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your Git provider (GitHub/GitLab/Bitbucket)
4. Find and select your `studentcompanion` repository
5. Click **"Import"**

### Option B: Using Vercel CLI

```bash
vercel login
vercel
```

## Step 4: Configure Project Settings

In the Vercel dashboard, configure:

| Setting | Value |
|---------|-------|
| **Project Name** | `studentcompanion` |
| **Framework Preset** | Vite (auto-detected) |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

## Step 5: Add Environment Variables

In Vercel Dashboard → Project Settings → Environment Variables, add:

| Name | Value | Environment |
|------|-------|-------------|
| `DATABASE_URL` | Your Neon connection string | Production, Preview, Development |
| `GEMINI_API_KEY` | Your Gemini API key | Production, Preview, Development |
| `NODE_ENV` | `production` | Production |

**Important**: Make sure to add these for **all environments** (Production, Preview, Development).

## Step 6: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (~1-2 minutes)
3. Vercel will provide a live URL (e.g., `https://studentcompanion.vercel.app`)

## Step 7: Update Frontend API URL

By default, the frontend will call the API at the same domain. Update your frontend API calls to use relative paths:

```typescript
// Instead of:
const API_URL = 'http://localhost:3002/api';

// Use:
const API_URL = '/api';
```

The `vercel.json` configuration handles routing `/api/*` requests to the serverless functions.

## Local Development with Vercel

To test Vercel serverless functions locally:

```bash
# Install Vercel CLI
npm install -g vercel

# Run Vercel dev server
vercel dev
```

This will run your app similar to how it runs on Vercel.

## Troubleshooting

### Database Connection Issues

1. Ensure your Neon database allows connections from Vercel IPs
2. In Neon Console, add `0.0.0.0/0` to the IP allowlist for development
3. Verify the `DATABASE_URL` environment variable is correct

### Build Failures

1. Check the Vercel build logs for errors
2. Run `npm run build` locally to test the build
3. Ensure all dependencies are in `package.json`

### API 404 Errors

1. Verify the `api/` directory exists with the serverless functions
2. Check `vercel.json` rewrites configuration
3. Ensure frontend API calls use `/api/*` paths

## Continuous Deployment

Once connected to Git, Vercel will automatically deploy:
- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

## Useful Commands

```bash
# View deployment logs
vercel logs

# List deployments
vercel ls

# Remove deployment
vercel rm <deployment-url>
```

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Node.js Functions](https://vercel.com/docs/functions/serverless-functions/runtimes/node-js)
- [Neon Database Guide](https://neon.tech/docs/guides/vercel)
