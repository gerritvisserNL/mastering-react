# Next.js Basics App

This is a simple Next.js application created to practice **App Router basics, routing, and navigation**.

## Challenge Overview

The goal of this challenge was to create a small Next.js app to understand the App Router.  
You should create:

- `/` → homepage with simple text
- `/about` → about page with simple text
- Navigation using `next/link`

---

## How I Solved the Challenge

1.  **Project Setup**

    - Created a new Next.js project using the App Router (`src/app` structure).
    - Created `page.js` as "index.html" `layout.js` for the root layout and `globals.css` for global styling.

2.  **Creating Pages**

    - **Homepage (`/`)**: Added `page.js` that renders a `Home`-component:

    ```jsx
    import Home from "./components/Home";

    export default function Page() {
      return <Home />;
    }
    ```

- **About Page (`/about`)**: Created a folder `about` with its own `page.js`:

  ```jsx
  export default function Page() {
    return (
      <main>
        <h1>About page</h1>
      </main>
    );
  }
  ```

3. **Layout and Navigation**

   - Created a `Header` component with navigation links:

     ```jsx
     import Link from "next/link";

     export default function Header() {
       return (
         <header>
           <ul>
             <li>
               <Link href="/">Home</Link>
             </li>
             <li>
               <Link href="/about">About</Link>
             </li>
             <li>
               <Link href="/contact">Contact</Link>
             </li>
           </ul>
         </header>
       );
     }
     ```

   - Included `Header` and `Footer` in `layout.js`:

     ```jsx
     export default function RootLayout({ children }) {
       return (
         <html lang="nl">
           <body>
             <Header />
             {children}
             <Footer />
           </body>
         </html>
       );
     }
     ```

4. **Global Styling**

   - Applied a `globals.css` with a reset using `@import "./reset.css"`.
   - All layout and typography styling is defined globally, including header, footer, and containers.
   - Instead of using `height: 100%` on `<main>`, I applied `flex: 1` globally in `globals.css`:

   ```css
   main {
     flex: 1;
     display: flex;
     flex-direction: column;
     align-items: center;
     padding: 1rem;
     background-color: red;
   }
   ```

   Because it is in `globals.css`, this styling applies to all pages, ensuring a consistent layout where `<main>` always grows to fill the available space between the header and footer.

---

## Key Next.js Concepts Practiced

- App Router structure (`src/app`, `layout.js`, `page.js`)
- Creating multiple pages (`/` and `/about` and `/contact`)
- Navigation with `<Link>` from `next/link`
- Global CSS and basic layout
- Using `children` in layout to render page content

---

## Possible Improvements

- Add more pages with unique content
- Enhance header styling and responsive navigation
- Add a footer with links or copyright
- Experiment with flexbox or grid for page layout
- Introduce reusable components for other content sections

---

This challenge helped me **understand routing with the App Router, using layout and page files, and creating navigation with `Link`**—a solid foundation for building Next.js applications.
