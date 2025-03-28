"use client";

import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";

const PRODUCTS = [
  "Comment Dashboard",
  "Analytics",
  "Auto-Moderation",
  "Sentiment Analysis",
];
const RESOURSES = ["Blog", "Help Center", "API Documentation"];

export default function Navbar() {
  const [anchorElProducts, setAnchorElProducts] =
    React.useState<null | HTMLElement>(null);
  const [anchorElResources, setAnchorElResources] =
    React.useState<null | HTMLElement>(null);

  const [productsOpen, setProductsOpen] = React.useState(false);
  const [resourcesOpen, setResourcesOpen] = React.useState(false);

  const handleOpenProductsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProducts(event.currentTarget);
  };

  const handleOpenResourcesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElResources(event.currentTarget);
  };

  const handleCloseProductsMenu = () => {
    setAnchorElProducts(null);
  };

  const handleCloseResourcesMenu = () => {
    setAnchorElResources(null);
  };

  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
  };

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
  };

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: "64px" }}>
            {/* Mobile menu icon */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
              <Typography variant="h6" fontWeight={"700"} color="secondary">
                WalkMouse
              </Typography>
            </Box>

            {/* Desktop navigation */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: 2,
                color: "text.primary",
              }}
            >
              <Button
                onClick={handleOpenProductsMenu}
                sx={{ color: "inherit" }}
                endIcon={<ExpandMore />}
              >
                Products
              </Button>
              <Menu
                id="products-menu"
                anchorEl={anchorElProducts}
                open={Boolean(anchorElProducts)}
                onClose={handleCloseProductsMenu}
              >
                {PRODUCTS.map((product) => (
                  <MenuItem key={product} onClick={handleCloseProductsMenu}>
                    <Typography textAlign="center">{product}</Typography>
                  </MenuItem>
                ))}
              </Menu>

              <Button component={Link} href="#" sx={{ color: "inherit" }}>
                Pricing
              </Button>
              <Button component={Link} href="#" sx={{ color: "inherit" }}>
                Download
              </Button>

              <Button
                onClick={handleOpenResourcesMenu}
                sx={{ color: "inherit" }}
                endIcon={<ExpandMore />}
              >
                Resources
              </Button>
              <Menu
                id="resources-menu"
                anchorEl={anchorElResources}
                open={Boolean(anchorElResources)}
                onClose={handleCloseResourcesMenu}
              >
                {RESOURSES.map((resource) => (
                  <MenuItem key={resource} onClick={handleCloseResourcesMenu}>
                    <Typography textAlign="center">{resource}</Typography>
                  </MenuItem>
                ))}
              </Menu>

              <Button component={Link} href="#" sx={{ color: "inherit" }}>
                For Creators
              </Button>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
                <LanguageIcon />
              </IconButton>

              <Button
                component={Link}
                href="#"
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "text.primary",
                }}
              >
                Log in
              </Button>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FF4C6A",
                  "&:hover": {
                    bgcolor: "#E6435F",
                  },
                  color: "white",
                  px: 3,
                  py: 1,
                }}
              >
                Get WalkMouse
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
