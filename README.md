# 🚀 NXT Hire – AI-Powered Career Coach & Job Portal

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Available-brightgreen?style=for-the-badge)](https://hirewith-nxthire.netlify.app/)
[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify)](https://hirewith-nxthire.netlify.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

An advanced full-stack AI-powered job portal that analyzes resumes, provides smart job suggestions, and connects candidates with curated tech opportunities.

## 🌐 Live Demo

**🔗 [Experience NXT Hire Live](https://hirewith-nxthire.netlify.app/)**

Try the complete AI-powered career platform with all features available for testing!

## 📸 Demo Screenshots

### Homepage
![Homepage](./public/demo/homepage.png)

### Job Portal
![Job Portal](./public/demo/job-portal.png)

## 🌟 Features

- 🧠 **AI Resume Analyzer** (OpenAI/Gemini) - Intelligent resume parsing and optimization suggestions
- 💼 **Smart Job Portal** with match scoring - AI-powered job recommendations
- 📑 **Cover Letter Generator** - Personalized cover letters using AI
- 🔐 **Clerk Authentication** (User/Employer roles) - Secure multi-role authentication
- 🧭 **Career Roadmap Generator** - AI-generated personalized career paths
- 📊 **Application Tracker Dashboard** - Track job applications and progress
- 🎯 **Interview Preparation** - Mock interviews and practice questions
- 🎨 **Fully Responsive UI** (Tailwind CSS + shadcn/ui components)
- 🌑 **Dark Mode Support** - Complete theme switching capability

## 🖥️ Tech Stack

- **Frontend**: React 18, Next.js 15 (App Router), TypeScript
- **Styling**: Tailwind CSS, shadcn/ui, Framer Motion
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL (Neon DB)
- **Authentication**: Clerk.dev
- **AI/ML**: OpenAI GPT-4, Google Gemini APIs
- **File Processing**: html2pdf.js, react-hook-form
- **Deployment**: Netlify
- **Development**: ESLint, Prettier, Turbopack

## � Project Structure

```
AI-Career-Coach/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (main)/                   # Main application pages
│   │   ├── dashboard/            # User dashboard
│   │   ├── resume/               # Resume builder
│   │   ├── resume-analyzer/      # AI resume analysis
│   │   ├── job-portal/           # Job listings
│   │   ├── ai-cover-letter/      # Cover letter generator
│   │   ├── interview/            # Interview preparation
│   │   └── onboarding/           # User onboarding flow
│   ├── api/                      # API routes
│   │   └── inngest/              # Background job processing
│   ├── globals.css               # Global styles
│   └── layout.js                 # Root layout
├── actions/                      # Server actions
│   ├── resume.js
│   ├── dashboard.js
│   ├── interview.js
│   └── user.js
├── components/                   # Reusable UI components
│   ├── ui/                       # shadcn/ui components
│   ├── header.jsx
│   ├── hero.jsx
│   └── theme-provider.jsx
├── lib/                          # Utility libraries
│   ├── prisma.js                 # Database client
│   ├── utils.js                  # Helper functions
│   └── checkUser.js              # User validation
├── prisma/                       # Database schema
│   ├── schema.prisma
│   └── migrations/
├── data/                         # Static data
│   ├── features.js
│   ├── industries.js
│   └── testimonial.js
├── public/                       # Static assets
│   ├── logo.png
│   ├── banner.jpeg
│   └── screenshots/
└── hooks/                        # Custom React hooks
    └── use-fetch.js
```

## ⚙️ Setup & Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/jagarapuRadhaKrishna/AI-Career-Coach.git
cd AI-Career-Coach
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment setup**
```bash
cp .env.example .env.local
```
Fill in your environment variables (see below)

4. **Database setup**
```bash
npx prisma generate
npx prisma db push
```

5. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 🌍 Environment Variables

Create a `.env.local` file with the following variables:

```env
# AI Services
OPENAI_API_KEY=your_openai_api_key
GEMINI_API_KEY=your_gemini_api_key

# Database (PostgreSQL with Prisma + NeonDB)
DATABASE_URL=postgresql://user:password@db.neon.tech/dbname?sslmode=require

# Clerk Authentication
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Optional: Additional services
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🧪 Features Breakdown

| Module | Description | Status |
|--------|-------------|---------|
| **Resume Analyzer** | AI-powered resume parsing, ATS optimization, keyword analysis | ✅ Complete |
| **Job Portal** | Smart job filtering, AI match scoring, salary insights | ✅ Complete |
| **Cover Letter Generator** | AI-generated personalized cover letters | ✅ Complete |
| **Interview Prep** | Mock interviews, practice questions, performance tracking | ✅ Complete |
| **Dashboard** | Personal analytics, application tracking, insights | ✅ Complete |
| **User Onboarding** | Profile setup, skill assessment, goal setting | ✅ Complete |
| **Authentication** | Multi-role auth with Clerk (candidates/employers) | ✅ Complete |

## 🚀 Deployment

The application is deployed on Netlify. To deploy your own instance:

1. Fork this repository
2. Connect your Netlify account to GitHub
3. Import the project to Netlify
4. Add environment variables in Netlify dashboard
5. Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jagarapuRadhaKrishna/NXT-Hire-)

## 🧠 AI Features

### Resume Analysis
- **ATS Compatibility Scoring**: Ensures resumes pass Applicant Tracking Systems
- **Keyword Optimization**: Suggests industry-specific keywords
- **Format Analysis**: Checks structure, sections, and formatting
- **Content Enhancement**: Provides specific improvement suggestions

### Job Matching
- **Semantic Search**: AI-powered job description matching
- **Skill Gap Analysis**: Identifies missing skills for target roles
- **Salary Prediction**: ML-based compensation estimates
- **Career Progression**: Suggests next career steps

### Interview Preparation
- **Mock Interviews**: AI-generated questions based on job descriptions
- **Performance Analytics**: Tracks improvement over time
- **Industry-Specific Questions**: Tailored to different tech roles

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- OpenAI API key
- Google Gemini API key
- Clerk account

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

### Code Quality
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **TypeScript**: Type safety (partial implementation)
- **Prisma**: Database type safety

## 📊 Performance Optimizations

- **Server-Side Caching**: Implemented with Next.js `unstable_cache`
- **Dynamic Imports**: Code splitting for better load times
- **Image Optimization**: Next.js automatic image optimization
- **Bundle Analysis**: Webpack optimizations for production builds
- **Database Indexing**: Optimized Prisma queries

## � Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Clerk](https://clerk.dev) for authentication
- [Neon](https://neon.tech) for PostgreSQL hosting
- [OpenAI](https://openai.com) for AI capabilities
- [Netlify](https://netlify.com) for deployment
- [shadcn/ui](https://ui.shadcn.com) for UI components

## � Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact: [jagarapuradhakrishna@gmail.com]

---

**⭐ Star this repository if you find it helpful!**

/app             → Next.js App Router setup

/components      → Reusable UI Components  

/lib             → API utilities and backend logic

/jobs            → Inngest event handlers    

/pages/api       → API Routes for AI actions

/public          → Static assets (including screenshots)

/styles          → Tailwind CSS configs    

# 📌 To-Do & Future Enhancements

- 🚀 AI-Powered Resume Analysis
- 🌐 Smart Job Portal Redirection & Aggregator
- 🧭 Interactive Career Roadmaps
- 🤖 AI Career Chatbot Assistant
- 🧮 Job Match Scoring System
- 🔗 LinkedIn Profile Optimizer

## 🚀 Deployment

The application is live and accessible at: **[https://hirewith-nxthire.netlify.app/](https://hirewith-nxthire.netlify.app/)**

### Deployment Features:
- **Platform**: Netlify with continuous deployment
- **Performance**: Optimized for fast loading and smooth user experience
- **Security**: HTTPS encryption and secure authentication
- **Accessibility**: Available 24/7 with 99.9% uptime
- **Global**: Fast delivery via Netlify's global CDN network

### What You Can Test:
- ✅ **AI Resume Builder** - Create professional resumes
- ✅ **Resume Analysis** - Get AI-powered optimization suggestions  
- ✅ **Job Portal** - Browse and filter job opportunities
- ✅ **Cover Letter Generator** - Generate personalized cover letters
- ✅ **Interview Prep** - Practice with mock interview questions
- ✅ **Application Tracker** - Manage your job applications
- ✅ **User Authentication** - Secure sign-up and login

# 🙌 Contributing

 - Pull requests are welcome! If you'd like to collaborate, feel free to fork the repo and submit a PR.

## 📄 License

MIT
>>>>>>> 6f30539de03b09cf0ad200c68f5b9a1abcc64238

# 📬 Contact

For queries or collaborations:

📧 jagarapuradhakrishna@gmail.com

💼 LinkedIn : https://www.linkedin.com/in/jagarapuradhakrishna/
