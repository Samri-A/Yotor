import type { Metadata } from "next";
import { Poppins , Inter } from "next/font/google";
import "./globals.css";



const poppins =  Poppins({
  subsets : ['latin'],
  weight : [ '300', '400', '500', '600', '700' ],
  variable : '--font-inter'

})

const inter = Inter({
  subsets : ['latin'],
  weight : ['100','200','300','400','500','600','700','800','900'] ,
  variable : '--font-inter'
})

export const metadata: Metadata = {
  title: "Yotor",
  description: "Leading Ethiopian Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    
    
  </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
