# Kidney Function Regulation - Interactive Learning Application

## Overview

This is a modern, interactive educational web application designed to teach kidney function regulation concepts for CBSE Class 11 Biology students. The application uses React with TypeScript for the frontend, Express for the backend, and PostgreSQL with Drizzle ORM for data management. The project follows a full-stack architecture with a focus on educational content delivery through interactive animations and comprehensive explanations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animation**: Framer Motion for smooth transitions and interactive elements
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL session store
- **Development**: Hot module replacement with Vite integration

### Design System
- **Theme**: Dark mode with purple-cyan gradient accents
- **Typography**: Inter font family for modern readability
- **Color Scheme**: Neutral base with customizable CSS variables
- **Components**: Consistent glassmorphism design language
- **Responsive**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Educational Content Structure
1. **Home Page**: Landing page with animated hero section
2. **Introduction**: Overview of kidney functions and importance
3. **Structures**: Detailed anatomy of kidneys and nephrons
4. **Hormonal Regulation**: ADH, Aldosterone, and ANF mechanisms
5. **RAAS System**: Renin-Angiotensin-Aldosterone System explanation
6. **JGA & Autoregulation**: Juxtaglomerular apparatus and self-regulation
7. **Summary**: Comprehensive review and clinical relevance

### Interactive Features
- **Animated Text**: Staggered text animations for engaging content delivery
- **Interactive Cards**: Hover effects and smooth transitions
- **Image Placeholders**: Consistent placeholder system for educational diagrams
- **Floating Shapes**: Background animations for visual appeal
- **Page Transitions**: Smooth navigation between content sections

### UI Component Library
- Complete shadcn/ui component integration
- Radix UI primitives for accessibility
- Custom interactive components for educational content
- Responsive navigation with progress indicators

## Data Flow

### Frontend Data Flow
1. React components consume educational content statically
2. TanStack Query manages any server state (prepared for future API integration)
3. Wouter handles client-side routing without page refreshes
4. Framer Motion manages animation states and transitions

### Backend Data Flow
1. Express server serves the React application
2. API routes are prepared for future content management
3. Drizzle ORM handles database operations
4. Session management for user tracking (if implemented)

### Development Workflow
1. Vite development server with HMR for fast iteration
2. TypeScript compilation for type safety
3. Tailwind CSS for rapid styling
4. ESBuild for production bundling

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Animation**: Framer Motion for smooth transitions
- **Database**: Drizzle ORM, PostgreSQL driver (@neondatabase/serverless)
- **Development**: Vite, TypeScript, ESBuild

### Utility Libraries
- **Date Handling**: date-fns for date manipulation
- **Class Management**: clsx and class-variance-authority for conditional styling
- **Form Handling**: React Hook Form with Zod validation
- **Carousel**: Embla Carousel for interactive content display

### Development Tools
- **Replit Integration**: Vite plugin for Replit environment
- **Error Overlay**: Runtime error modal for development
- **Cartographer**: Replit's code mapping tool

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **Database**: PostgreSQL with Drizzle migrations
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command
4. **Static Assets**: Served directly by Express in production

### Environment Configuration
- **Development**: NODE_ENV=development with Vite middleware
- **Production**: NODE_ENV=production with static file serving
- **Database**: PostgreSQL connection via environment variable

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### July 06, 2025 - Major Update: Mobile Optimization & Asset Integration

✓ **Asset Management**: Moved all images and video to `/client/public/assets/` for proper deployment
✓ **Mobile Responsive Design**: Completely redesigned for mobile-first approach with responsive breakpoints
✓ **Real Content Integration**: Replaced all placeholders with actual educational images and kidney animation video
✓ **Developer Credits System**: Added animated credit bar with developer info (Faiz Khan) that appears after completion
✓ **Navigation Enhancement**: Added website logo and improved mobile navigation with biology-themed icons
✓ **Content Optimization**: Removed CBSE curriculum card as requested, kept focus on educational value
✓ **Static Deployment Ready**: Configured for Vercel/Netlify with proper build settings and routing
✓ **Performance Optimizations**: Improved loading, animations, and responsive text sizing

### Technical Improvements:
- **Video Integration**: MP4 kidney animation now plays automatically on homepage
- **Image Optimization**: All educational diagrams (kidney anatomy, hormonal regulation, RAAS, JGA, nephron structure, summary) properly displayed
- **Mobile Breakpoints**: Responsive design works perfectly on all screen sizes
- **Deployment Configuration**: Added `vercel.json` and `netlify.toml` for seamless static hosting
- **SEO Optimization**: Enhanced meta tags, Open Graph, and Twitter Card support
- **Icon Improvements**: Biology-focused icons (Search, Zap, Activity, Target, BarChart3) for better UX

### User Experience Enhancements:
- **Smooth Animations**: All text and component animations optimized for mobile
- **Interactive Elements**: Hover effects and transitions work beautifully across devices
- **Content Flow**: Logical progression from Introduction → Structures → Hormonal → RAAS → JGA → Summary
- **Developer Attribution**: Professional credits display with GitHub and Instagram links
- **Modern Aesthetics**: Maintains reactbits.dev-inspired design with purple-cyan gradients

## Deployment Strategy

### Ready for Static Hosting
The application is now completely static and ready for deployment to:
- **Vercel**: Use `vercel.json` configuration (already included)
- **Netlify**: Use `netlify.toml` configuration (already included)
- **GitHub Pages**: Works with standard build process

### Build Process
1. `npm run build` - Builds to `dist/public`
2. Deploy the `dist/public` folder to any static hosting service
3. All assets are properly referenced with relative paths

## Changelog

- July 06, 2025: Initial setup
- July 06, 2025: Complete mobile optimization and asset integration