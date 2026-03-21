# Vercel Deployment - Troubleshooting Guide

## ✅ Fixes Applied

### 1. Database SSL Configuration (api/db.ts)
**Problem:** Neon database requires SSL with `rejectUnauthorized: false`
**Fix:** Updated SSL configuration in `api/db.ts`

```typescript
// Before (WRONG)
ssl: process.env.DATABASE_URL ? true : false,

// After (CORRECT)
ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
```

### 2. Better Error Messages (api/learning-paths.ts)
**Problem:** Generic error messages made debugging difficult
**Fix:** Added detailed logging and helpful error messages

### 3. Server Database Config (server/db.ts)
**Problem:** Same SSL issue in server database connection
**Fix:** Applied same fix as api/db.ts

---

## 🔧 Vercel Setup Checklist

### Step 1: Set Environment Variables in Vercel

Go to **Vercel Dashboard → Your Project → Settings → Environment Variables**

Add these variables for **Production, Preview, and Development**:

| Variable | Value | Example |
|----------|-------|---------|
| `DATABASE_URL` | Your Neon connection string | `postgresql://user:pass@ep-xxx.us-east-2.aws.neon.tech/dbname?sslmode=require` |
| `GEMINI_API_KEY` | Your Gemini AI key | `AIzaSy...` |
| `NODE_ENV` | `production` | `production` |

### Step 2: Verify DATABASE_URL Format

Your DATABASE_URL should look like:
```
postgresql://neondb_owner:password@ep-xxx-region.us-east-2.aws.neon.tech/neondb?sslmode=require
```

**Important:** Must include `?sslmode=require` at the end!

### Step 3: Deploy to Vercel

```bash
# Commit your changes
git add .
git commit -m "Fix database SSL configuration for Vercel"
git push

# Deploy to Vercel
vercel --prod
```

---

## 🐛 Troubleshooting Steps

### Issue 1: "Chapters failing to load"

**Symptoms:**
- Frontend shows "Learning path not found"
- API returns 500 error

**Solution:**

1. **Check Vercel Function Logs:**
   - Go to Vercel Dashboard → Deployments → Click on latest deployment
   - Click "Function Logs"
   - Look for database connection errors

2. **Verify DATABASE_URL:**
   ```bash
   # In Vercel Dashboard → Settings → Environment Variables
   # Make sure DATABASE_URL is set for Production, Preview, AND Development
   ```

3. **Test Database Connection:**
   Visit: `https://your-app.vercel.app/api/health`
   
   Should return:
   ```json
   {
     "status": "ok",
     "database": "connected",
     "timestamp": "2026-03-21T..."
   }
   ```

### Issue 2: "DATABASE_URL not configured"

**Symptoms:**
- Health check returns: `{"error": "DATABASE_URL not configured"}`

**Solution:**
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add `DATABASE_URL` with your Neon connection string
3. Redeploy: `vercel --prod`

### Issue 3: "SSL connection failed"

**Symptoms:**
- Error: `SSL connection failed` or `certificate validation failed`

**Solution:**
The fix has been applied in `api/db.ts`. Redeploy to Vercel:
```bash
vercel --prod
```

### Issue 4: "Learning path not found" but content exists

**Symptoms:**
- Database has content
- API returns 404

**Possible Causes:**
1. **ID mismatch** - Frontend generates different ID than database
2. **Database not seeded** - Content not in database yet

**Solution:**

Check the ID format:
```javascript
// Frontend generates ID like this:
const makeId = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '_');

// Example:
makeId("Science") + "_" + makeId("Acids, Bases and Salts")
// = "science_acids_bases_salts"
```

Verify in database:
```sql
SELECT id, chapter FROM learning_paths WHERE id = 'science_acids_bases_salts';
```

---

## 📊 Testing on Vercel

### 1. Test Health Endpoint
```
GET https://your-app.vercel.app/api/health
```

Expected response:
```json
{
  "status": "ok",
  "database": "connected",
  "timestamp": "2026-03-21T..."
}
```

### 2. Test Syllabus Endpoint
```
GET https://your-app.vercel.app/api/syllabus/science
```

Expected: List of chapters

### 3. Test Learning Path Endpoint
```
GET https://your-app.vercel.app/api/learning-paths/science_acids_bases_salts
```

Expected: Chapter content with markdown

### 4. Test in Browser
1. Open `https://your-app.vercel.app`
2. Select Subject: Science
3. Select Chapter: Acids, Bases and Salts
4. Content should load with images

---

## 🔍 Debug Checklist

- [ ] `DATABASE_URL` set in Vercel (Production, Preview, Development)
- [ ] `DATABASE_URL` includes `?sslmode=require`
- [ ] `GEMINI_API_KEY` set in Vercel
- [ ] Latest code deployed (`vercel --prod`)
- [ ] Health endpoint returns `"database": "connected"`
- [ ] Function logs show no SSL errors
- [ ] Browser console shows no CORS errors
- [ ] Network tab shows 200 OK for API calls

---

## 📝 Common Error Messages

| Error | Cause | Solution |
|-------|-------|----------|
| `DATABASE_URL not configured` | Missing env variable | Add in Vercel dashboard |
| `SSL connection failed` | Wrong SSL config | Already fixed, redeploy |
| `password authentication failed` | Wrong password in URL | Check DATABASE_URL |
| `Learning path not found` | Content not seeded | Run seed script or check ID |
| `ETIMEDOUT` | Connection timeout | Check Neon dashboard, firewall |

---

## 🚀 Quick Fix Commands

```bash
# 1. Verify local build works
npm run build

# 2. Deploy to Vercel
vercel --prod

# 3. Check deployment status
vercel ls

# 4. View logs
vercel logs <deployment-url>
```

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Neon Docs:** https://neon.tech/docs
- **Vercel Function Logs:** Dashboard → Deployments → Function Logs
- **Neon Dashboard:** https://console.neon.tech

---

## ✅ Post-Deployment Verification

After deploying, verify these endpoints work:

1. ✅ `https://your-app.vercel.app/api/health`
2. ✅ `https://your-app.vercel.app/api/syllabus/science`
3. ✅ `https://your-app.vercel.app/api/learning-paths/science_acids_bases_salts`
4. ✅ `https://your-app.vercel.app/api/learning-paths/science_magnetic_effects_of_electric_current`
5. ✅ `https://your-app.vercel.app/api/learning-paths/mathematics_areas_related_to_circles`

If all endpoints return data, the deployment is successful! 🎉

---

**Last Updated:** 2026-03-21
**Fixes Applied:** SSL configuration, better error handling, detailed logging
