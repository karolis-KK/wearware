import "./globals.css"

export const metadata = {
  title: "Wearware AI",
  description:
    "Wearware AI: Find your perfect second-hand clothing match with AI! Simply upload an image of any clothing item, and our advanced AI searches top second-hand clothing reselling sites to locate exact matches.",
  keywords: "AI, second-hand clothing, resale, sustainable shopping, find clothes online, clothing item search, vintage clothing, second-hand fashion",
  author: "Wearware AI",
  icons: {
    icon: '/favicon.ico?v=2',
  },
  robots: "index, follow",
  ogTitle: "Wearware AI - Find Your Perfect Second-Hand Clothing Match",
  ogDescription:
    "Discover the easiest way to find exact matches for second-hand clothing! Upload an image, and let Wearware AI search top resale sites for you.",
  ogImage: "/logo.png", // Add a path to your Open Graph image (you can use a logo or a representative image)
  ogUrl: "https://www.wearwareai.com", // Replace with your actual website URL
  twitterCard: "summary_large_image",
  twitterTitle: "Wearware AI",
  twitterDescription:
    "Use Wearware AI to find second-hand clothing matches in seconds. Upload an image and let AI do the work!",
  twitterImage: "/bg.png", // Add your Twitter image path
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
      </head>
      <body>{children}</body>
    </html>
  )
}
