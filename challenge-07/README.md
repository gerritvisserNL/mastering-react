# Next.js Component + Page

This is a simple Next.js 13 application created to practice **reusing components across multiple pages using the App Router**.

## Challenge Overview

The goal of this challenge was to reuse components in a Next.js application.

You should create:

- A reusable `Header` component
- Use the `Header` component on multiple pages

---

## How I Solved the Challenge

- Created a reusable `Header` component.
- Created multiple pages using the App Router.
- Included the `Header` component in `layout.js` so it is shared across all pages.

```jsx
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
```

2.  **Creating Pages**

    - **Homepage (`/`)**: Added `page.js` that renders a `Home`-component:

    ```jsx
    import Home from "./components/Home";

    export default function Page() {
      return <Home />;
    }
    ```

- **Portfolio Page (`/portfolio`)**: Created a folder `portfolio` with its own `page.js`:

  ```jsx
  export default function Page() {
    return (
      <main>
        <h1>Portfolio page</h1>
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
               <Link href="/portfolio">Portfolio</Link>
             </li>
             <li>
               <Link href="/contact">Contact</Link>
             </li>
           </ul>
         </header>
       );
     }
     ```

   - Included `Header` in `layout.js`:

     ```jsx
     export default function RootLayout({ children }) {
       return (
         <html lang="nl">
           <body>
             <Header />
             {children}
           </body>
         </html>
       );
     }
     ```

4. **Global Styling**

   - Applied a `globals.css` with a reset using `@import "./reset.css"`.

---

## Key Next.js Concepts Practiced

- App Router structure (`src/app`, `layout.js`, `page.js`)
- Reusable component `<Header />`
- Shared layout with `layout.js`
- Component reuse across pages

---

## Possible Improvements

- Improve header styling and responsive navigation
- Add a footer component
- Introduce additional reusable components
- Enhance layout with flexbox or grid

---

This challenge helped me understand how to reuse components in a Next.js application and keep the codebase clean and maintainable.
