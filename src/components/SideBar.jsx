/* eslint-disable react/prop-types */
import * as React from "react";
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
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

// #################################
// Component Starts
// #################################
export default function MiniDrawer({upperLinks}) {
  const [open, setOpen] = React.useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Box For NavBar */}
      <Box>
        <AppBar open={open}>
          <Toolbar>
            <Box>
            <img src="https://connexio.connx.cloud/crm/images/new-logo.png" width={100} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {/* Side Navigation Drawers */}
      <Box sx={{ display: "flex", marginTop: "80px" }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          open={open}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            marginTop: "60px",
          }}
        >
          <Divider />
          <List sx={{ marginTop: "80px" }}>
            {/* // eslint-disable-next-line react/prop-types */}
            {upperLinks?.map((item,index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center", // Align properly based on drawer state
                    position: "relative", // Prevent layout shift
                  }}
                >
                  <ListItemIcon
                    sx={{
                      // Consistent width to prevent shifting
                      display: "flex",
                      justifyContent: "center",
                      transition: "margin-right 400ms",
                      marginRight: open ? 0 : 0, // Add margin only when open
                    }}
                  >
                    {item.linkIcon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.linkText}
                    sx={{
                      opacity: open ? 1 : 0,
                      visibility: open ? "visible" : "hidden",
                      transition:
                        "opacity 400ms ease-in-out, visibility 0ms 400ms",
                      whiteSpace: "nowrap", // Prevent text wrapping
                      overflow: "hidden", // Hide overflow text
                      textOverflow: "ellipsis", // Handle overflow gracefully
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "felx" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center", // Align properly based on drawer state
                    position: "relative", // Prevent layout shift
                  }}
                >
                  <ListItemIcon
                    sx={{
                      // Consistent width to prevent shifting
                      display: "flex",
                      justifyContent: "center",
                      transition: "margin-right 500ms",
                      marginRight: open ? 0 : 0, // Add margin only when open
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      opacity: open ? 1 : 0,
                      visibility: open ? "visible" : "hidden",
                      transition:
                        "opacity 400ms ease-in-out, visibility 0ms 400ms",
                      whiteSpace: "nowrap", // Prevent text wrapping
                      overflow: "hidden", // Hide overflow text
                      textOverflow: "ellipsis", // Handle overflow gracefully
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Content To Display in the right side */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography sx={{ marginBottom: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
