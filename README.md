# Juggernot AI - Portfolio Website

A modern, dark-themed landing page and portfolio website for Juggernot AI, showcasing innovative AI and technology projects with detailed case studies.

## 🚀 Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/) (for cloning the repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/juggernot-ai-portfolio.git
   cd juggernot-ai-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the website**
   - Open your browser and navigate to: http://localhost:5000

### Environment Variables (Optional)
If needed, create a `.env` file in the root directory:
```
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration (if used)
# DATABASE_URL=your_database_connection_string
```

## 🌐 Deployment Options

The project can be deployed in multiple ways:

### Option 1: Replit
This project is optimized for Replit deployment:
1. Import the GitHub repository to Replit
2. Replit will auto-detect the configuration
3. Click "Run" to start the application

### Option 2: Traditional Hosting (VPS)
1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

3. **Configure a reverse proxy** (recommended)
   - Use Nginx or Apache to serve the application
   - Configure SSL for HTTPS

### Option 3: Containerized Deployment
1. **Create a Docker image**
   - Copy the sample Dockerfile from the "deployment" directory (if available)
   - Or create one based on Node.js official image

2. **Deploy to any container service**
   - Examples: AWS ECS, Google Cloud Run, DigitalOcean App Platform

### Option 4: Static Hosting (Frontend Only)
If you need to host only the frontend (with a separate backend):
1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` directory** to any static hosting service:
   - Netlify
   - Vercel
   - AWS S3 + CloudFront
   - GitHub Pages

## ⚙️ Project Structure

```
juggernot-ai-portfolio/
├── client/                  # Frontend React application
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── data/            # Project and website data
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions
│   │   └── pages/           # Page components
├── public/                  # Static assets
│   ├── images/              # Project and website images
│   └── videos/              # Video demonstrations
├── server/                  # Backend Express server
└── shared/                  # Shared TypeScript types
```

## 🧰 Technology Stack

- **Frontend**: React.js 18 with TypeScript and Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion for smooth transitions
- **Routing**: Wouter for lightweight routing
- **State Management**: React Query for data fetching
- **Form Handling**: React Hook Form with Zod validation
- **Backend**: Express server for API endpoints
- **Build Tools**: Vite, TSX, esbuild

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Run the production build
- `npm run check` - Check TypeScript types
- `npm run db:push` - Push database schema changes (if using Drizzle ORM)

## 📦 Major Dependencies

### Frontend
- React 18
- Tailwind CSS
- Framer Motion
- Zod (validation)
- React Hook Form
- Lucide React (icons)

### Backend
- Express
- Drizzle ORM (optional database support)
- Passport (authentication)

### Development
- TypeScript
- Vite
- TSX
- Drizzle Kit

## 🎨 Design Elements

- **Color Palette**:
  - Primary: HSL 142 76% 36% (green accent)
  - Background: Black
  - Text: White/Light Gray
  
- **Typography**:
  - Primary Font: Space Mono
  - Headings: Bold with varying sizes
  
- **UI Elements**:
  - Card-based layouts with subtle borders (border-white/10)
  - Emerald glow effects on interactive elements
  - Grid background patterns with gradient overlays
  - Modern styling for mobile screenshots (32px radius corners)

## 📱 Featured Projects

1. **ReplyRocket AI** - AI-powered email composition assistant
2. **AI JobSeeker Agent** - Automated job application assistant
3. **Agent Lav** - Intelligent virtual assistant 
4. **Agent Malcom** - Conversational AI agent
5. **Omnycomm** - E-commerce platform
6. **INAAM App** - Cross-merchant loyalty platform
7. **Nyuyu** - AI music generation application
8. **Verizon Blue Jeans** - Video conferencing solution
9. **Ess Dee Sportswear** - Online sports apparel marketplace

## 📄 Project Detail Template

Each project detail page includes:
- Hero section with Back navigation
- Project description and key metrics
- Embedded video (when available)
- Project gallery with horizontal scrolling
- Challenge section with problem points
- Solution section with implementation details
- Technology stack
- Client testimonials (when available)

## 🚧 Customization

### Adding New Projects
1. Add project data to `client/src/data/projectsData.ts`
2. Create project details in `client/src/data/projectDetailsData.ts`
3. Add necessary images to `public/images/`

### Modifying the Theme
1. Edit `theme.json` in the project root
2. Modify Tailwind configuration in `tailwind.config.ts`

## 🔍 Troubleshooting

### Common Issues

1. **Node.js Version Mismatch**
   - Ensure you're using Node.js version 18 or higher
   - Solution: `nvm use 18` (if using nvm)

2. **Port Already in Use**
   - Solution: Change the port in `.env` file or kill the process using the port

3. **Module Not Found Errors**
   - Solution: `npm install` to ensure all dependencies are installed

4. **Build Errors**
   - Check TypeScript errors: `npm run check`
   - Clean node_modules: `rm -rf node_modules && npm install`

## 📝 License

All rights reserved. This codebase and design are proprietary and confidential.

## 👥 Credits

Designed and developed by Juggernot AI Team.