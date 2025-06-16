import { lusitana, montserrat } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>
        {children}
        <footer className='flex justify-center'>
          Hecho por Pedro
        </footer>
      </body>
    </html>
  );
}
