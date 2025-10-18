## Frontend (Next.js)

Modern Next.js app that consumes the Go API from the repo root. Styled for a clean, dark-themed blog.

### Requirements
- Node 18+
- npm or pnpm

### Environment
Create `.env.local` at `frontend/.env.local`:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
```

### Scripts
```bash
npm run dev     # start dev server on http://localhost:3000
npm run build   # build for production
npm run start   # start production server
npm run lint    # run eslint
```

### Pages
- `/` landing
- `/posts` posts list
- `/posts/[id]` post detail
- `/about` about page

### Local Development
1) Ensure the backend API is running on `http://localhost:8080` (see repo root README).
2) Install deps and run dev server:
```bash
npm install
npm run dev
```
3) Visit `http://localhost:3000`.

### Configuration
The base URL for API requests is read from `NEXT_PUBLIC_API_BASE_URL` and used in `src/lib/api.ts`.

### Notes
- When changing API shape or routes, update the fetch helpers in `src/lib/api.ts` and any affected pages.

# frontend
