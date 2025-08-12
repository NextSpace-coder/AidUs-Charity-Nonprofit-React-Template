# Charity Foundation - React Template

A modern and responsive charity/nonprofit React template designed to help organizations showcase their mission, causes, and impact effectively.

## Project Type
**Landing Page / Charity Website Template**

## Main Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Multiple Homepage Variations**: 3 different homepage layouts to choose from
- **Donation System**: Built-in donation forms and cause tracking
- **Event Management**: Event listing and single event pages
- **Blog Section**: News and updates with full blog functionality
- **Team Showcase**: Team member profiles and presentations
- **Volunteer Registration**: Forms for volunteer sign-ups
- **Project Gallery**: Portfolio of charity projects and initiatives
- **Contact Forms**: Multiple contact and inquiry forms
- **Newsletter Subscription**: Email subscription functionality

## Technology Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: SASS/SCSS + Bootstrap 5
- **UI Components**: Material-UI (@mui/material)
- **Routing**: React Router DOM
- **State Management**: Redux + Redux Persist
- **Animations**: React Awesome Reveal, React Scroll Parallax
- **Slider/Carousel**: React Slick, Swiper
- **Forms**: React Datepicker, Simple React Validator
- **Image Handling**: React Medium Image Zoom, Yet Another React Lightbox
- **Other Libraries**: React CountUp, React Modal Video, React Toastify

## Project Structure

```
├── src/
│   ├── components/          # Reusable components
│   ├── main-component/     # Main page components
│   ├── images/             # Static image assets
│   ├── sass/               # SCSS styling files
│   ├── api/                # API and data management
│   ├── store/              # Redux store configuration
│   ├── integrations/       # Third-party integrations
│   │   └── supabase/       # Supabase configuration (ready for use)
│   └── utils/              # Utility functions
├── public/                 # Public assets
└── dist/                   # Built files
```

## Page Functionality

- **Homepage (/)**: Main landing page with hero section, featured causes, and statistics
- **About (/about)**: Organization information, mission, and team
- **Causes (/causes)**: Charity causes and donation campaigns
- **Cause Details (/cause/:id)**: Individual cause pages with donation forms
- **Events (/events)**: Event listings and calendar
- **Event Details (/event/:id)**: Individual event information and registration
- **Projects (/projects)**: Portfolio of completed and ongoing projects
- **Project Details (/project/:id)**: Detailed project showcases
- **Blog (/blog)**: News, updates, and articles
- **Blog Details (/blog/:id)**: Individual blog post pages
- **Team (/team)**: Team member profiles
- **Volunteers (/volunteers)**: Volunteer information and registration
- **Contact (/contact)**: Contact information and inquiry forms
- **Donate (/donate)**: Dedicated donation page

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:8080`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Configuration

### Supabase Integration
The template includes pre-configured Supabase integration files:
- `src/integrations/supabase/client.ts` - Supabase client configuration
- `src/integrations/supabase/types.ts` - Database type definitions

To use Supabase, add your environment variables:
```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
