
import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import "./globals.css";
// export const metadata = {
//   title: "Ecommerce Website",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
