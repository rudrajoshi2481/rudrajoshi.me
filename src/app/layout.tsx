import { BottomDock } from '../components/BottomDock/Index';
import './globals.css'

import { Poppins } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const poppins_fonts = Poppins({
  subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600"]
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className={poppins_fonts.className}>
        {children}

        <div className='sticky bottom-24'>
          <BottomDock />
        </div>
      </body>
    </html>
  );
}
