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
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
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
  const [drawerOpen, setDrawerOpen] = React.useState(false);
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

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
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
                onClick={() => toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
              <Typography variant="h6" fontWeight={"700"} color="secondary">
                SurfShark
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
                Get Surfshark
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box sx={{ width: 300, pt: 2, pb: 2 }} role="presentation">
          <Box sx={{ px: 2, pb: 2, display: "flex", alignItems: "center" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                fill="#0DC5B4"
              />
            </svg>
            <Typography
              variant="h6"
              component="div"
              sx={{
                ml: 0.5,
                display: "flex",
                alignItems: "center",
                fontWeight: 600,
                color: "#0DC5B4",
              }}
            >
              CommentMaster
              <Typography
                component="span"
                sx={{
                  fontSize: "10px",
                  verticalAlign: "top",
                  color: "#0DC5B4",
                }}
              >
                ®
              </Typography>
            </Typography>
          </Box>

          <List>
            {/* Products dropdown */}
            <ListItem disablePadding>
              <ListItemButton onClick={toggleProducts}>
                <ListItemText primary="Products" />
                {productsOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={productsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {PRODUCTS.map((product) => (
                  <ListItemButton
                    key={product}
                    sx={{ pl: 4 }}
                    onClick={() => toggleDrawer(false)}
                  >
                    <ListItemText primary={product} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            {/* Regular links */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href="#"
                onClick={() => toggleDrawer(false)}
              >
                <ListItemText primary="Pricing" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href="#"
                onClick={() => toggleDrawer(false)}
              >
                <ListItemText primary="Download" />
              </ListItemButton>
            </ListItem>

            {/* Resources dropdown */}
            <ListItem disablePadding>
              <ListItemButton onClick={toggleResources}>
                <ListItemText primary="Resources" />
                {resourcesOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={resourcesOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {RESOURSES.map((resource) => (
                  <ListItemButton
                    key={resource}
                    sx={{ pl: 4 }}
                    onClick={() => toggleDrawer(false)}
                  >
                    <ListItemText primary={resource} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href="#"
                onClick={() => toggleDrawer(false)}
              >
                <ListItemText primary="For Creators" />
              </ListItemButton>
            </ListItem>
          </List>

          <Box
            sx={{
              px: 2,
              pt: 2,
              mt: 2,
              borderTop: "1px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <Button
              component={Link}
              href="#"
              fullWidth
              sx={{ justifyContent: "flex-start", mb: 2 }}
              onClick={() => toggleDrawer(false)}
            >
              Log in
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#FF4C6A",
                "&:hover": {
                  bgcolor: "#E6435F",
                },
                color: "white",
              }}
              onClick={() => toggleDrawer(false)}
            >
              Get CommentMaster
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
