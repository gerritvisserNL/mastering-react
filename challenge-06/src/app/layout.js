import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Mijn Next.js App",
  description: "Beschrijving van mijn app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <div className="container">
          <div className="inner-container">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
