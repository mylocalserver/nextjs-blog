import "./globals.css";
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar / >
        <MyProfilePic / >
        {children}
      </body>
    </html>
  );
}
