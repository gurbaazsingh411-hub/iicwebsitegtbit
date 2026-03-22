# Product Requirements Document (PRD): Institution's Innovation Council (IIC) Website

## 1. Project Overview
**Name:** Institution's Innovation Council (IIC) Website
**Objective:** Develop a fully functional, dynamic, and mobile-responsive website with an admin portal. The platform will manage college innovation activities, events, reports, and member engagement, serving as the central hub for the IIC.

## 2. Finalized Tech Stack

This stack is exceptionally well-suited for the IIC Website. Here is the evaluation and the improved stack:

- **Frontend & Framework:** **Next.js (React) + TypeScript**. Next.js provides excellent performance, SEO capabilities (vital for public pages), and API routes for backend logic.
- **Styling:** **Tailwind CSS**. Perfect for rapid, modern UI development and highly consistent design systems. We can also integrate a component library like `shadcn/ui` for beautiful, accessible pre-built components.
- **Backend & Database:** **Supabase**. This is a massive improvement over traditional setups. Supabase provides:
  - A robust **PostgreSQL** database for your relational data (events, queries, members).
  - Built-in **Authentication** (perfect for your secure Admin Panel).
  - Built-in **Storage** (essential for handling event banners, gallery images, and report PDFs).
- **Hosting:** **Vercel**. Since Vercel created Next.js, it offers the most seamless, optimized, and zero-configuration deployment experience for Next.js compared to Netlify.

### Why this is the perfect stack:
By using Supabase with Next.js, you eliminate the need to build a separate backend server (like Node/Express or Flask). Next.js acts as your frontend and API layer, while Supabase handles the heavy lifting of database, auth, and file storage. This dramatically speeds up development time and lowers maintenance costs.

---

## 3. Key Features & Functional Requirements

### 3.1 Public-Facing Website
- **Home Page:** Hero section, real-time notice board (auto-fetched), quick stats, and upcoming events preview.
- **About Us:** IIC Vision/Mission, Faculty coordinator messages, PDF links to national guidelines, and an interactive timeline.
- **Events & Activities:** Event listings (Past/Upcoming) filterable by year/semester. Detail pages for each event containing reports and galleries.
- **Reports Section:** Categorized and searchable downloadable PDFs of Annual reports, Event reports, and MoMs.
- **Members List:** Directory of Faculty, Student Executive Body, Core team, and Alumni.
- **Gallery & Achievements:** Photo/Video grid with lightboxes and downloadable options, and a section tracking startups, patents, and awards.
- **Queries & Contact:** Submit query forms, FAQs, and a Google Maps embed for location.

### 3.2 Secure Admin Panel (Login Required)
- **Dashboard:** Overview stats, pending query counts, and recent upload activity.
- **Events Management:** CRUD operations for events, banner uploads, and setting registration links.
- **Reports Management:** PDF uploads with category tags and auto-generated preview thumbnails.
- **Media Management:** Bulk photo uploads (tagged by event/year) and video link integrations.
- **Communications:** Post/edit notices with expiry dates, pin important announcements, and reply to user queries directly (with email notifications).
- **Settings & Members:** Manage team lists, manipulate timeline milestones, and update core app settings.

---

## 4. Database Schema Overview (Conceptual)
Moving from raw SQL (as originally proposed) to a modern ORM like Prisma, your models would map out to:
- **Events:** `id`, `title`, `description`, `date`, `images`, `registration_url`
- **Reports:** `id`, `title`, `category`, `file_url`, `uploaded_by`
- **Gallery/Media:** `id`, `url`, `event_id`, `caption`, `year`
- **Members:** `id`, `name`, `role`, `image_url`, `linkedin`, `isActive`
- **Queries:** `id`, `name`, `email`, `question`, `status`, `response`
- **Notices:** `id`, `title`, `content`, `expiry_date`, `isPinned`

## 5. Non-Functional Requirements
- **Responsive Design:** Mobile-first approach ensuring perfect viewing on mobile devices and desktops.
- **Performance:** Fast loading via optimized images (Next.js `<Image>` component) and lazy-loaded galleries.
- **Security:** Protected API routes, JWT-based authentication for the admin panel, and secure file upload handling.
