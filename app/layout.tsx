import "@/app/ui/global.css";
import { Metadata } from "next";
import Navbar from "./ui/navBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

export const metadata: Metadata = {
  title: "WalkMouse Youtube Comments",
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            <Navbar />
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
