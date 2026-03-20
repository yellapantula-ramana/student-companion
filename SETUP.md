# StudentCompanion - Complete Setup Guide

## Prerequisites
- Node.js installed
- PostgreSQL 17 installed with pgAdmin 4

---

## Step 1: Create Database in pgAdmin 4

1. Open **pgAdmin 4**
2. Expand **PostgreSQL 17** server (click the `>` arrow)
3. Right-click on **Databases** → **Create** → **Database...**
4. Fill in:
   - **Database:** `student_companion`
   - **Owner:** `postgres` (default)
   - **OID:** Leave blank
5. Click **Save**

---

## Step 2: Run Database Schema

1. In pgAdmin 4, right-click on **student_companion** database
2. Select **Query Tool**
3. Open the file: `server/schema.sql` in your project
4. Copy all contents and paste into the Query Tool
5. Press **F5** (or click the play button ▶) to execute

You should see: `CREATE TABLE` messages for 4 tables.

---

## Step 3: Configure Environment Variables

1. Get your Gemini API key from: https://aistudio.google.com/apikey
2. Open `.env.local` file in your project root
3. Replace `your_gemini_api_key_here` with your actual API key:
   ```
   GEMINI_API_KEY=AIzaSy...your_actual_key
   ```
4. Save the file

> **Note:** Database credentials are already set to defaults. Change them in `.env.local` if you customized your PostgreSQL installation.

---

## Step 4: Install Dependencies

Open a terminal in your project folder and run:
```bash
npm install
```

---

## Step 5: Start the Application

You need **two terminals**:

**Terminal 1 - Backend Server:**
```bash
npm run server
```
You should see: `Server running at http://localhost:3001`

**Terminal 2 - Frontend (keep Terminal 1 running):**
```bash
npm run dev
```
You should see: `Local: http://localhost:3000/`

---

## Step 6: Open the App

Open your browser and go to: **http://localhost:3000**

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `database does not exist` | Create `student_companion` database in pgAdmin (Step 1) |
| `password authentication failed` | Update `DB_PASSWORD` in `.env.local` to match your PostgreSQL password |
| `port 3001 already in use` | Change `PORT` in `.env.local` to another number (e.g., 3002) |
| `psql command not found` | Use pgAdmin Query Tool instead (Step 2) |

---

## Project Structure

```
studentcompanion/
├── .env.local          # Environment variables (DB config, API keys)
├── server/
│   ├── index.ts        # Express backend server
│   ├── db.ts           # Database connection
│   ├── schema.sql      # Database tables
│   └── public/pdfs/    # Uploaded PDFs (auto-created)
├── src/                # React frontend
└── package.json        # Dependencies & scripts
```

---

## Default Credentials

| Service | Username | Password |
|---------|----------|----------|
| PostgreSQL | `postgres` | `postgres` (or your custom password) |

---

## Need Help?

1. Check all 5 steps are completed
2. Verify both servers are running (backend on 3001, frontend on 3000)
3. Check browser console (F12) for errors
