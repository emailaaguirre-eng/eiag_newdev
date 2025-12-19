# EIAG Website - Professional Next.js Site

A modern, professional website for Economic Incentives Advisory Group built with Next.js 14, TypeScript, Tailwind CSS, and WordPress headless CMS integration.

## 🎨 Brand Colors

- **Primary (Dark Blue)**: `#00427E`
- **Accent (Cyan)**: `#2DBCEE`
- **Success (Green)**: `#68BD47`
- **Success Alt (Green)**: `#299E6D`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Create a `.env.local` file:
```env
WORDPRESS_API_URL=https://your-wordpress-site.com
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   └── sections/           # Page sections
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── About.tsx
│       ├── Stats.tsx
│       ├── Testimonials.tsx
│       └── CTA.tsx
├── lib/
│   └── wordpress.ts        # WordPress API utilities
└── public/                 # Static assets
```

## 🎯 Features

- ✅ Modern, professional design with EIAG brand colors
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized
- ✅ WordPress headless CMS integration
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Accessible components

## 🔌 WordPress Integration

The site is configured to work with WordPress as a headless CMS. 

### Setup WordPress

1. Install WordPress on your server
2. Enable REST API (built-in)
3. Optionally install:
   - **ACF (Advanced Custom Fields)** - For custom fields
   - **WPGraphQL** - If using GraphQL instead of REST
   - **JWT Authentication** - For secure API access

### Configure API URL

Set your WordPress API URL in `.env.local`:
```env
WORDPRESS_API_URL=https://cms.eiag.com
```

### Using WordPress Data

See `lib/wordpress.ts` for utility functions:
- `getPosts()` - Fetch blog posts
- `getPost(slug)` - Fetch single post
- `getPages()` - Fetch pages
- `getPage(slug)` - Fetch single page
- `getCustomPosts(type)` - Fetch custom post types

## 📝 Adding New Pages

1. Create a new file in `app/` directory:
   ```
   app/services/page.tsx
   ```

2. Use the layout and components:
   ```tsx
   import Header from "@/components/Header";
   
   export default function ServicesPage() {
     return (
       <div>
         <h1>Services</h1>
       </div>
     );
   }
   ```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to modify brand colors.

### Typography

Fonts are configured in `app/globals.css`:
- **Headlines**: Lato Black (900 weight)
- **Body**: Lato Regular (400 weight)

### Components

All components are in `components/` and can be customized as needed.

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted

## 📦 Build

```bash
npm run build
npm start
```

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **CMS**: WordPress (Headless)

## 📄 License

Private - Economic Incentives Advisory Group

## 🤝 Support

For questions or issues, please contact the development team.

