import "@/app/ui/global.css";
import { Metadata } from "next";
import Navbar from "./ui/navBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/theme";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata: Metadata = {
  title: "Surfshark Youtube Comments",
  description: "Access latest Youtube video comments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
