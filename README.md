# L4 Rooftop Restaurant Website

A modern, mobile-responsive website for specific requirement: "Modern Organic" aesthetic. Built with Next.js, Tailwind CSS, and integrated with Supabase.

## Features
- **Hero Section:** Immersive full-screen visual.
- **Dynamic Menu:** Categorized food and drinks.
- **Reservation System:** Integrated form to book tables.
- **Responsive Design:** Optimized for mobile, tablet, and desktop.

## Tech Stack
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/) (Database & API)
- [Lucide React](https://lucide.dev/) (Icons)

## Getting Started

### Prerequisites
- Node.js (LTS version)
- npm or yarn

### Installation
1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd l4-rooftop
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up Environment Variables:
    - Create a `.env.local` file in the root directory.
    - Add your Supabase credentials:
      ```env
      NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
      NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
      ```

4.  Run the development server:
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema
Run the SQL commands in `supabase/schema.sql` in your Supabase SQL Editor to set up the tables for Menu Items and Reservations.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
