import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import ServiceWorkerRegister from "@/components/service-worker-register";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* Performance optimizations */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://api.clerk.dev" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Favicon - can be kept or changed as needed */}
          <link rel="icon" href="/career_14646654.png" sizes="any" />
        </head>
        <body className={inter.className}>
          <ServiceWorkerRegister />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen mt-24">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <h2 className="text-xl font-bold mb-2">Developed By : JAGARAPU RADHA KRISHNA</h2>
                <div className="flex justify-center gap-4 mt-2 mb-4 text-sm">
                  <a href="https://www.linkedin.com/in/jagarapuradhakrishna/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">LinkedIn</a>
                  <span>|</span>
                  <a href="https://github.com/jagarapuRadhaKrishna" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">GitHub</a>
                  <span>|</span>
                  <a href="mailto:radhakrishna02256@gmail.com" className="hover:underline text-red-400">Gmail</a>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}