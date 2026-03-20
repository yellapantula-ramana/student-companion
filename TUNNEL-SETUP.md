# 🌐 Cloudflare Tunnel Setup Guide

## ✅ Setup Complete!

cloudflared has been downloaded and is ready to use.

---

## 🚀 Quick Start (3 Steps)

### Step 1: Start Your Servers
```bash
npm run dev:all
```
This starts both frontend (port 3000) and backend (port 3002).

### Step 2: Start Cloudflare Tunnels
```bash
npm run tunnel:all
```
This creates public URLs for both frontend and backend.

### Step 3: Access Your App
You'll see URLs like:
```
Frontend: https://abc123.trycloudflare.com
Backend:  https://xyz789.trycloudflare.com
```

---

## 📋 All Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev:all` | Start frontend + backend together |
| `npm run tunnel:all` | Start both Cloudflare tunnels |
| `npm run tunnel:frontend` | Start frontend tunnel only |
| `npm run tunnel:backend` | Start backend tunnel only |
| `npm run setup:tunnel` | Re-download cloudflared if needed |

---

## 🛑 How to Stop

**Stop all processes:**
```bash
taskkill /F /IM node.exe
taskkill /F /IM cloudflared.exe
```

---

## 🔧 Troubleshooting

### "cloudflared.exe not found"
Run: `npm run setup:tunnel`

### "Port already in use"
Stop existing processes: `taskkill /F /IM node.exe`

### "Tunnel URL not working"
Wait 10-30 seconds for Cloudflare to propagate.

---

## 📝 Important Notes

1. **Tunnel URLs change** each time you restart tunnels
2. **Keep terminals open** - closing stops the tunnels
3. **Update API URLs** in your frontend code to use the backend tunnel URL
4. **Free tier** has bandwidth limits (good for development)

---

## 🌟 Example Workflow

**Terminal 1:**
```bash
npm run dev:all
```

**Terminal 2:**
```bash
npm run tunnel:all
```

**Output:**
```
[tunnel:frontend] https://my-frontend-abc123.trycloudflare.com
[tunnel:backend] https://my-backend-xyz789.trycloudflare.com
```

Now share these URLs with anyone! 🎉
