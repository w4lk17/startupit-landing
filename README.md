# StartupIT - Landing Page

A modern, responsive landing page built with Next.js 14 and TypeScript, featuring a blog system, authentication, and dynamic content generation. This project showcases best practices in modern web development, including accessibility, performance optimization, and beautiful UI design.

## ✨ Features

- 🎨 Modern and responsive design with Tailwind CSS
- 🌙 Dark/Light mode support
- 🔐 Authentication system with form validation
- 📝 Blog system with dynamic routing
- 🖼️ Dynamic OG image generation
- 📱 Mobile-first approach
- ♿ Accessibility focused
- 🚀 Performance optimized
- 🔍 SEO friendly

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** 
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Shadcn/ui](https://ui.shadcn.com/)
  - [Radix UI](https://www.radix-ui.com/)
- **Forms & Validation:**
  - [React Hook Form](https://react-hook-form.com/)
  - [Zod](https://zod.dev/)
- **UI/UX:**
  - [Geist Font](https://vercel.com/font)
  - [Lucide Icons](https://lucide.dev/)
- **Development Tools:**
  - [ESLint](https://eslint.org/)
  - [PostCSS](https://postcss.org/)
  - [TypeScript ESLint](https://typescript-eslint.io/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/startupit-landing.git
cd startupit-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env` file in the root directory:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
├── app/                  # Next.js App Router
│   ├── (auth)/          # Authentication routes
│   ├── api/             # API routes
│   ├── blog/            # Blog pages
│   └── components/      # React components
├── lib/                 # Utility functions
├── public/             # Static assets
└── components/         # Shared UI components
```

## 🔑 Key Features Explained

### Authentication System
- Secure form validation with Zod
- Password strength requirements
- Social authentication support (GitHub)
- Protected routes

### Blog System
- Dynamic routing
- Automatic OG image generation
- SEO optimization
- Responsive design

### UI/UX
- Responsive navigation
- Dark/Light mode
- Loading states
- Toast notifications
- Form validation feedback

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [Shadcn/ui](https://ui.shadcn.com/) - For UI components
- [Vercel](https://vercel.com/) - For hosting

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/startupit-landing](https://github.com/yourusername/startupit-landing)
