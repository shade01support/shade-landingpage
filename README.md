# SHADE - Bike Ride Sharing App

A modern, responsive React.js website for a college-focused bike ride-sharing application.

## 🚀 Features

- **Modern UI/UX**: Clean, student-friendly design with smooth animations
- **Responsive Design**: Mobile-first approach, works on all devices
- **5 Main Pages**: Home, About, Blog, FAQ, and Contact
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Accessibility**: ARIA labels and semantic HTML
- **SEO Friendly**: Proper meta tags and heading structure

## 🛠️ Tech Stack

- React.js 18
- React Router v6
- Tailwind CSS
- Framer Motion (animations)
- React Icons
- React Hook Form
- EmailJS (for contact form)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 🎨 Branding

- **Primary Color**: `#5D18EC` (Vibrant Violet-Purple)
- **Secondary Colors**: `#2D2D2D`, `#FFFFFF`, `#000000`
- **Fonts**: Inter (as substitute for Enigma/Metropolis)

## 📧 EmailJS Setup

To enable the contact form, you'll need to:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the credentials in `src/components/contact/ContactForm.jsx`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

## 📱 Pages

- **Home**: Hero section, About SHADE, Features, How It Works, City Rides
- **About**: About Us, Vision, Media (YouTube embed)
- **Blog**: Community stories and experiences
- **FAQ**: Accordion-style frequently asked questions
- **Contact**: Contact form, info, and Google Maps embed

## 🎯 Key Components

- `Navbar`: Responsive navigation with smooth transitions
- `Footer`: Social links and site information
- `HeroSection`: Animated hero with CTA
- `FAQAccordion`: Interactive accordion component
- `BlogCard`: Card-based blog layout
- `ContactForm`: Form with validation using React Hook Form

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is created for educational purposes.

