import Navbar from "@/components/navbar";

export const metadata = {
  title: "Webs",
  description: "lets Webs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}

