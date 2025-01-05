import { useNavigate } from "react-router-dom";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
import SpeedeDial from "./SpeedDial";
export function About() {
  const navigate = useNavigate();
  const images = [
    {
      url: "",
      title: "",
      width: "15%",
      navigate: "/arch-dept",
    },
    {
      url: "",
      title: "",
      width: "15%",
      navigate: "/civil-dept",
    },
    {
      url: "",
      title: "",
      width: "15%",
      navigate: "/chem-dept",
    },
    {
      url: "",
      title: "",
      width: "15%",
      navigate: "/com-sci-dept",
    },
    {
      url: "",
      title: "",
      width: "15%",
      navigate: "/com-sci-bus",
    },
    {
      url: "",
      title: "",
      width: "15%",
      navigate: "/com-app",
    },
    {
      url: "",
      title: "",
      width: "15%",
      navigate: "/app-math-dept",
    },
    {
      url: "",
      title: "",
      width: "15%",
      navigate: "/ece-dept",
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 150,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 15%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));
  return (
    <div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",marginBottom:20}}>
        <img
          src="https://www.tce.edu/themes/gavias_edmix/logo.svg"
          alt="tce logo"
          height={80}
        />
      </div>
      <div className="view">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          minWidth: 150,
          width: "100%",
          padding: 2,
        }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  fontWeight: "bolder",
                }}
                onClick={() => navigate(image.navigate)}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
      <Footer />
      <SpeedeDial />
    </div>
    </div>
    
  );
}
