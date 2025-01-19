import "./App.css";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Carbonfootprint} from "./components/Energy-Audit/Carbonfootprint";
// import { Leaderboard } from "./components/Energy-Audit/Leaderboard";
import { Dashboard } from "./components/Energy-Audit/Dashboard";
// import { Rewards } from "./components/Energy-Audit/Rewards";
import { Feedback } from "./components/Energy-Audit/Feedback";
import { Chatbot } from "./components/Energy-Audit/Chatbot";
import { Energyauditcalculator } from "./components/Energy-Audit/Energyauditcalculator";
// import { Profile } from "./components/Energy-Audit/Profile";
import { Home } from "./components/Home";
// Icons
import { GiCalculator } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
// import { LiaMedalSolid } from "react-icons/lia";
// import { MdOutlineLeaderboard } from "react-icons/md";
import { SiChatbot } from "react-icons/si";
import { AiFillDashboard } from "react-icons/ai";
import { AiOutlineAudit } from "react-icons/ai";
import { MdFeedback } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
import { SlEnergy } from "react-icons/sl";
import { Energyauditqr } from "./components/Energy-Audit/Energyauditqr";
import { Button } from "@mui/material";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
const drawerWidth = 290;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function App() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [laboratoryclick, setLaboratoryClick] = React.useState(false);
  const handleClickLaboratories = () => {
    setLaboratoryClick(!laboratoryclick);
  };
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open} style={{ backgroundColor: "green" }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontFamily: "monospace",cursor:"pointer" }}
                onClick={()=>navigate("/")}
              >
              ENERGYWISE
              </Typography>
              <img src="https://img.freepik.com/free-vector/green-energy-sun_78370-6778.jpg" alt="energy-image" style={{width:30,cursor:"pointer",margin:"0 10px"}} onClick={()=>navigate("/")}/>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
              <IconButton
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItem>
                <ListItemButton onClick={()=>navigate("/")}>
                  <ListItemIcon>
                    <IoHome size={25} color="green"/>
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemButton onClick={()=>navigate("/about")}>
                  <ListItemIcon>
                    <FcAbout size={25} />
                  </ListItemIcon>
                  <ListItemText primary="About Us" />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <List
              sx={{ minWidth: 180, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClickLaboratories}>
                <ListItemIcon>
                  <SlEnergy size={20} color="red" />
                </ListItemIcon>
                <ListItemText primary="Save Energy" />
                {laboratoryclick ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={laboratoryclick} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => {
                      navigate("/energy-audit-questions-recomendations");
                    }}
                  >
                    <ListItemIcon>
                      <AiOutlineAudit size={25} color="orange" />
                    </ListItemIcon>
                    <ListItemText primary="Do Energy Audit" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4}}
                    onClick={() => {
                      navigate("/energy-audit-calculator");
                    }}
                  >
                    <ListItemIcon>
                      <GiCalculator size={25} color=" #3ad2d5" />
                    </ListItemIcon>
                    <ListItemText primary="EA Calculator" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    <ListItemIcon>
                      <AiFillDashboard size={25} color="violet" />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => {
                      navigate("/energy-chatbot");
                    }}
                  >
                    <ListItemIcon>
                      <SiChatbot size={25} color="brown" />
                    </ListItemIcon>
                    <ListItemText primary="Energy ChatBot" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4}}
                    onClick={() => {
                      navigate("/carbonfootprint-calculator");
                    }}
                  >
                    <ListItemIcon>
                      <GiCalculator size={25} color="darkblue" />
                    </ListItemIcon>
                    <ListItemText primary="CFP Calculator" />
                  </ListItemButton>
                  {/* <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => {
                      navigate("/rewards");
                    }}
                  >
                    <ListItemIcon>
                      <LiaMedalSolid size={25} color="orangered" />
                    </ListItemIcon>
                    <ListItemText primary="Rewards" />
                  </ListItemButton> */}
                  {/* <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => {
                      navigate("/leaderboard");
                    }}
                  >
                    <ListItemIcon>
                      <MdOutlineLeaderboard size={25} color="violet" />
                    </ListItemIcon>
                    <ListItemText primary="Leaderboard" />
                  </ListItemButton> */}
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => {
                      navigate("/feedback");
                    }}
                  >
                    <ListItemIcon>
                      <MdFeedback size={25} color="red" />
                    </ListItemIcon>
                    <ListItemText primary="Feedback" />
                  </ListItemButton>
                  {/* <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => {
                      navigate("/profile");
                    }}
                  >
                    <ListItemIcon>
                      <CgProfile size={25} color="orange" />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton> */}
                </List>
              </Collapse>
            </List>
            <Divider />
            <Button sx={{color:"red"}} onClick={()=>{navigate("/login-page")}}>Log In</Button>
            <Button sx={{color:"green"}}  onClick={()=>{navigate("signup-page")}}>Sign Up</Button>
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About />} />
              {/* Energy Audit */}
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/energy-audit-calculator" element={<Energyauditcalculator/>} />
              <Route path="/energy-audit-questions-recomendations" element={<Energyauditqr/>} />
              <Route path="/energy-chatbot" element={<Chatbot/>} />
              <Route path="/carbonfootprint-calculator" element={<Carbonfootprint/>} />
              <Route path="/feedback" element={<Feedback/>} />
              <Route path="/login-page" element={<Login/>} />
              <Route path="/signup-page" element={<Signup/>} />
            </Routes>
          </Main>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
