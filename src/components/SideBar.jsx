/* eslint-disable react/prop-types */
import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { useState } from "react";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: 500,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: 400,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ upperLinks, accordionData }) {
  const [open, setOpen] = React.useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null); // Track the expanded accordion index

  const handleAccordionChange = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle accordion
  };
  const navigate = useNavigate(); // Hook for navigation

  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
    handleAccordionChange();
  };
  const handleNavigation = (path) => {
    // Set Active heere

    navigate(path);
  };
  const theme = useTheme();

  return (
    <>
      <Box>
        <AppBar open={open}>
          <Toolbar
            sx={{
              backgroundColor: theme.palette.background.default,
              minHeight: "30px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={
                theme.palette.mode === "dark"
                  ? {
                      filter: "invert(100%)",
                    }
                  : ""
              }
            >
              <img
                src="https://connexio.connx.cloud/crm/images/new-logo.png"
                width={100}
                alt="Logo"
              />
            </Box>
            <ThemeSwitcher />
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                flexDirection: "row-reverse",
                fontSize: "22px",
              }}
            >
              <Box>
                <Tooltip title="Advertised Pages">
                  <IconButton
                    sx={{
                      color: theme.palette.primary.main,
                    }}
                  >
                    <i className="fa-solid fa-circle-chevron-down"></i>
                  </IconButton>
                </Tooltip>
              </Box>
              <Box>
                <Tooltip title="Notifications">
                  <IconButton
                    sx={{
                      color: theme.palette.primary.main,
                    }}
                  >
                    <i className="fa fa-bell"></i>
                  </IconButton>
                </Tooltip>
              </Box>
              <Box>
                <Tooltip title="Help">
                  <IconButton
                    sx={{
                      color: theme.palette.primary.main,
                    }}
                  >
                    <i className="fa fa-question"></i>
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ display: "flex", marginTop: "65px" }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          open={open}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{ marginTop: "60px" }}
        >
          {/* Upper Links */}
          <List sx={{ marginTop: "80px" }}>
            {upperLinks?.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  display: "block",
                  color:
                    index === 0
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  backgroundColor: "transparent",
                  transition: "background-color 300ms ease, color 300ms ease",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff",
                  },
                  "&:hover .MuiListItemIcon-root": {
                    color: "#fff",
                  },
                }}
              >
                <ListItemButton
                  onClick={() => handleNavigation(item.linkPath)}
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      transition: "margin-right 400ms",
                      color:
                        index === 0
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                    }}
                  >
                    {item.linkIcon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.linkText}
                    sx={{
                      opacity: open ? 1 : 0,
                      visibility: open ? "visible" : "hidden",
                      transition: "opacity 400ms, visibility 0ms 400ms",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          {/* Accordion Section */}
          <List sx={{ padding: 0 }}>
            {accordionData?.map((accordion, index) => (
              <Accordion
                key={index}
                disableGutters
                expanded={expandedIndex === index} // Only expand the selected accordion
                onChange={() => handleAccordionChange(index)}
                sx={{
                  boxShadow: "none",
                  "&:before": { display: "none" }, // Remove divider
                }}
              >
                <AccordionSummary
                  expandIcon={open ? <ExpandMoreIcon /> : null}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  sx={{
                    minHeight: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start", // Keep everything aligned to the left
                    padding: "0px 16px", // Same padding as the upper list
                    transition: "all 400ms ease", // Smooth layout changes
                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: open ? "flex-start" : "center", // Align content dynamically
                      gap: "12px",
                      width: "100%",
                      transition: "all 400ms ease", // Smooth transitions for content layout
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40, // Fixed width for consistency
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "margin-right 400ms", // Smooth margin change
                    }}
                  >
                    {accordion.icon}
                  </ListItemIcon>

                  <Typography
                    sx={{
                      opacity: open ? 1 : 0, // Smooth opacity change
                      transform: open ? "translateX(0)" : "translateX(-10px)", // Smooth sliding effect
                      visibility: open ? "visible" : "hidden", // Ensure smooth hiding
                      transition: "opacity 300ms ease, transform 300ms ease", // Smooth fade and slide
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {accordion.title}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ padding: "0px 16px" }}>
                  {accordion.items.map((item, idx) => (
                    <ListItemButton
                      key={idx}
                      onClick={() => handleNavigation(item.linkPath)}
                      sx={{
                        minHeight: 48,
                        px: 2.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: open ? "flex-start" : "center", // Align content dynamically
                        gap: "12px", // Space between icon and text
                        transition: "all 300ms ease", // Smooth layout change
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 40, // Consistent width for icons
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {item.linkIcon ||
                          (idx % 2 === 0 ? <InboxIcon /> : <MailIcon />)}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.linkText}
                        sx={{
                          opacity: open ? 1 : 0, // Smooth opacity transition
                          transform: open
                            ? "translateX(0)"
                            : "translateX(-10px)", // Slide effect
                          visibility: open ? "visible" : "hidden", // Avoid sudden disappearance
                          transition:
                            "opacity 300ms ease, transform 300ms ease", // Smooth transition
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      />
                    </ListItemButton>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: theme.palette.background,
            minHeight: "91vh",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
