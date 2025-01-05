
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SchoolIcon from "@mui/icons-material/School";

export default function Footer() {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection:"column",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <a href="https://www.tce.edu/" target="_blank" rel="noreferrer">
          <BottomNavigationAction title="Official TCE Page" icon={<SchoolIcon />} />
        </a>
        <a href="https://www.instagram.com/tce_madurai/" target="_blank" rel="noreferrer">
          <BottomNavigationAction title="Instagram" icon={<InstagramIcon />} />
        </a>
        <a href="https://twitter.com/tceofficialpage" target="_blank" rel="noreferrer">
          <BottomNavigationAction title="Twitter" icon={<XIcon />} />
        </a>
        <a href="https://www.linkedin.com/in/tcemadurai" target="_blank" rel="noreferrer">
          <BottomNavigationAction title="LinkedIn" icon={<LinkedInIcon />} />
        </a>
        <a href="https://www.facebook.com/TheOfficialTCEPage" target="_blank" rel="noreferrer">
          <BottomNavigationAction title="Facebook" icon={<FacebookIcon />} />
        </a>
        <a href="https://www.youtube.com/ThiagarajarCollegeofEngineeringTCE" target="_blank" rel="noreferrer">
          <BottomNavigationAction title="Youtube" icon={<YouTubeIcon />} />
        </a>
      </BottomNavigation>
      <div style={{color:"red",fontWeight:"bolder",textAlign:"center"}}>
          Thiagarajar College of Engineering, Madurai 625 015
      </div>
    </Box>
  );
}
