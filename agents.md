# Coding Take-Home Platform — Agent Context

This document gives the agent the full project context so it can generate correct backend and frontend code for the take-home assessment platform.

---

## 1. System Overview

The platform allows admins to create coding assessments, send them to candidates, generate isolated per-candidate repositories, track deadlines, manage submissions, and review the final code.

The system consists of:

- **Frontend (Next.js)** — admin UI + candidate Start page
- **Backend (FastAPI)** — API for assessments, candidates, GitHub integration, deadlines, repo creation
- **Database (Supabase/Postgres)** — stores assessments, candidates, repo metadata
- **GitHub Integration** — seed repo creation, per-candidate repo creation, token generation
- **Email Delivery (Resend)** — sending assessment invitations and follow-ups

---

## 2. Core Entities and Data Model

### **Assessment**

- Admin-created coding assignment
- Fields:

  - ID, title, description, instructions
  - GitHub starter repo URL (original)
  - Seed repo URL (private internal clone)
  - Start deadline (hours)
  - Completion deadline (hours)
  - Email template for candidate invitation

### **Candidate**

- Fields:

  - ID, name, email
  - Linked assessment ID
  - Invitation token (used in URL `/c/[token]`)
  - Status: `INVITED`, `STARTED`, `SUBMITTED`, `EXPIRED`
  - Start deadline timestamp
  - Completion deadline timestamp
  - Submitted timestamp

### **Candidate Repo**

- A private repo automatically generated from the seed when candidate starts
- Fields:

  - Repo URL
  - Access token (scoped)
  - Seed commit SHA
  - Final commit SHA on submit

---

## 3. GitHub Workflow

the agent must know how to generate code for GitHub automation.

### **When an admin creates an assessment:**

1. A private **seed repo** is created from the starter URL.
2. Default branch is set to `main`.
3. Latest commit SHA is stored.
4. Seed repo stays updated with upstream `main`.

### **When a candidate clicks Start:**

1. The backend:

   - Clones seed repo at specific commit
   - Creates **new private repo**: `takehome-<assessment>-<candidate>`
   - Generates repo-scoped access token valid until deadline

2. Candidate sees personalized `git clone` URL.
3. Push access is revoked on Submit or timeout.

### **When a candidate submits:**

- Access revoked
- Last commit SHA captured
- Repo optionally archived

---

## 4. Backend Responsibilities (FastAPI)

the agent should implement endpoints for:

### **Admin endpoints**

- `POST /assessments` – create assessment + seed repo
- `GET /assessments` – list
- `GET /assessments/{id}` – detail
- `POST /assessments/{id}/invite` – create candidates + send email

### **Candidate endpoints**

- `GET /start/{token}` – fetch instructions and deadlines
- `POST /start/{token}` – trigger repo creation
- `POST /submit/{token}` – lock submission and revoke access

### **Review endpoints**

- `GET /candidate/{id}` – metadata + repo link
- `GET /candidate/{id}/commits` – list commits
- `GET /candidate/{id}/diff` – diff vs seed

---

## 5. Frontend Responsibilities (Next.js)

the agent should generate React components + API calls for:

### **Admin UI**

- Assessment creation form
- Table of assessments
- Candidate list per assessment
- Candidate review dashboard
- Preview of candidate start page

### **Candidate UI**

- Start page with instructions + deadlines
- Repo instructions (Clone URL, push info)
- Submit button

---

## 6. Email Workflow

Use **Resend API** for:

- Sending initial invite with Start link
- Optional follow-up email after submission

---

## 7. Deadline Logic

the agent must respect:

- `start_deadline_hours` from invitation
- `completion_deadline_hours` from Start event
- Expired users cannot Start or Submit

---

## 8. Deployment

- **Frontend** → Vercel
- **Backend** → Railway
- **Database** → Supabase

the agent must generate production-ready environment variable handling for all services.

---

## 9. Nice-to-Haves (optional for the agent)

- Repo compare UI instead of GitHub links
- Automatic pushing of seed updates
- Inline code review comments using GitHub Issues

---

## 10. Goal for the agent

the agent should use this file to:

- Understand project context
- Generate consistent backend routes
- Produce coherent Next.js pages
- Understand DB relations
- Use GitHub API correctly
- Generate invitations, tokens, and deadlines logic

This document **must stay lightweight** so the agent can ingest it quickly.

---

**End of agents.md**
