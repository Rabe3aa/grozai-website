# GrozAI Website

This is the official website for GrozAI, an AI solutions company.

## Tech Stack

- Next.js (React Framework)
- Tailwind CSS (Styling)
- Framer Motion (Animations)
- React Icons (Icons)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `pages/`: Contains all the routes for the website.
  - `_app.js`: Main application wrapper.
  - `_document.js`: Custom HTML document structure.
  - `index.js`: Homepage.
- `components/`: Reusable UI components.
  - `layout/`: Components like Header, Footer, and main Layout wrapper.
  - `ui/`: Atomic UI elements (buttons, cards, etc.).
  - `sections/`: Larger, reusable page sections.
- `public/`: Static assets like images and fonts.
- `styles/`: Global stylesheets.
- `tailwind.config.js`: Tailwind CSS configuration.
- `postcss.config.js`: PostCSS configuration.
- `next.config.js`: Next.js configuration.

## Brand Guidelines

- **Brand Name**: GrozAI
- **Domain**: grozai.net
- **Primary Color**: Dark Blue (`#00127a`)
- **Secondary Color**: White (`#ffffff`)
- **Accent Colors**: Subtle gradients or gray tones (see `tailwind.config.js`)
- **Font**: Inter (Sans-serif)
