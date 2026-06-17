<div align="center">
  <h1>🎓 LearnFlow</h1>
  <p><strong>A Modern, Cross-Platform Learning Management System</strong></p>
</div>

<br />

LearnFlow is a comprehensive Learning Management System (LMS) designed to facilitate seamless education delivery across web and mobile platforms. Built with modern web technologies, it features a robust role-based architecture serving Students, Instructors, Department Admins, and Super Admins.

This repository is structured as a monorepo containing both the Web Application and the Mobile Application, ensuring high feature parity and shared design principles across all devices.

## ✨ Key Features

* **🔐 Role-Based Access Control (RBAC):** Tailored dashboards and capabilities for:
  * **Students:** Browse courses, enroll in workshops, and track learning progress.
  * **Instructors:** Create and manage courses, schedule workshops, and monitor student engagement.
  * **Department Admins:** Oversee department-specific courses, instructors, and analytics.
  * **Super Admins:** Global platform management, user administration, and system configurations.
* **📚 Course & Workshop Management:** Rich interfaces for course content delivery and interactive workshop scheduling.
* **📈 Progress Tracking:** Visual analytics and progress indicators for students to monitor their learning journey.
* **📱 Cross-Platform:** Available as a responsive web app and a native mobile application (iOS/Android).
* **🎨 Modern UI/UX:** Built with Tailwind CSS and Shadcn UI for a beautiful, accessible, and responsive user experience.

## 🛠️ Technology Stack

**Frontend (Web & Mobile)**
* **Framework:** React 18 with Vite
* **Styling:** Tailwind CSS, Radix UI (Shadcn UI components)
* **Routing:** React Router DOM
* **State Management & Data Fetching:** React Query (@tanstack/react-query)
* **Forms & Validation:** React Hook Form, Zod
* **Charts:** Recharts

**Mobile Engine**
* **Native Runtime:** Capacitor (by Ionic)

**Backend as a Service (BaaS)**
* **Database & Auth:** Supabase

---

## 📂 Repository Structure

The project is divided into two primary environments:

```bash
.
├── Mobile-App-LearnFlow/      # Native mobile application wrapper (Android/iOS)
└── Web-App-LearnFlow/
    └── Web-App-LearnFLow-main/# Core React web application
```

---

## 🚀 Getting Started

### Prerequisites
* Node.js (v18+ recommended)
* npm or yarn
* A Supabase project (for backend database and authentication)
* Android Studio / Xcode (Only required for building the mobile app)

### 1. Web Application Setup

Navigate to the web application directory:
```bash
cd Web-App-LearnFlow/Web-App-LearnFLow-main
```

Install dependencies:
```bash
npm install
```

Configure Environment Variables:
Create a `.env` file in the root of the web app and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Run the development server:
```bash
npm run dev
```
The web app will be available at `http://localhost:8080` (or the port specified by Vite).

### 2. Mobile Application Setup

The mobile app wraps the core React experience using Capacitor to access native device features.

Navigate to the mobile directory:
```bash
cd Mobile-App-LearnFlow
```

Install dependencies:
```bash
npm install
```

Sync Capacitor with your web assets:
```bash
npm run build
npx cap sync
```

Run the app on a simulator or device:
```bash
# For Android
npx cap open android

# For iOS
npx cap open ios
```

## 🤝 Contributing
Contributions are always welcome! Please follow the standard fork-and-pull-request workflow. Make sure to lint your code before submitting any changes:
```bash
npm run lint
```

## 📄 License
This project is proprietary and confidential. Unauthorized copying of files, via any medium, is strictly prohibited.
