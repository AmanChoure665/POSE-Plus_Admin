# P.O.S.E. Plus Admin Dashboard

A beginner-friendly full-stack admin dashboard major project built using **Next.js + FastAPI + PostgreSQL**.

## 1) Folder Structure

```bash
POSE-Plus_Admin/
├── backend/
│   ├── app/
│   │   ├── api/routes/
│   │   ├── core/
│   │   ├── db/
│   │   ├── models/
│   │   ├── schemas/
│   │   └── main.py
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── app/admin/
│   ├── components/
│   ├── lib/
│   └── package.json
├── docker-compose.yml
└── README.md
```

## 2) Backend (FastAPI)
- JWT admin login endpoint.
- CRUD endpoints for users/products/reports.
- Dashboard stats endpoint.
- SQLAlchemy models using UUID primary keys.

## 3) Frontend (Next.js + TypeScript + Tailwind)
- Dark themed admin panel with purple accent.
- Sidebar + navbar layout.
- Pages:
  - `/admin`
  - `/admin/users`
  - `/admin/reports`
  - `/admin/products`
  - `/admin/analytics`
  - `/admin/settings`

## 4) Database Setup
PostgreSQL is included via Docker Compose.
Tables:
- users
- products
- reports
- admin_logs

## 5) Docker Setup
Run everything with one command:

```bash
docker compose up --build
```

## 6) Local Setup Instructions

### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 7) Demo Admin Login
First create one admin user directly in DB (or seed manually), then login with `/api/auth/login`.

---
This project is intentionally simple and clean so it is easy to explain in a college viva.
