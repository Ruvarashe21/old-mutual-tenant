import React from "react";
import { Grid, Paper, Box, Typography } from "@mui/material";
import thumbnail from "../assets/bookings/thumbnail-Lakayana.png";
import map from "../assets/bookings/map.png";
import ClockIcon from "../assets/bookings/clock.svg";
import RoutingIcon from "../assets/bookings/routing.svg";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import Call from "../assets/bookings/call-calling.svg";
import Truck from "../assets/bookings/truck-fast.svg";
import Settings from "../assets/bookings/setting-3.svg";
import Video from "../assets/bookings/video.svg";
import CountdownCard from "./CountDownCard";
import Rotate from "../assets/bookings/3d-rotate.svg";
import TruckBack from "../assets/bookings/truck-back.svg";
import BoxIcon from "../assets/bookings/3d-cube-scan.svg";

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.vertical}`]: {
    marginLeft: 8, // aligns with circle center
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderLeftWidth: 2,
    borderColor: "#E6EAEE", // default gray
    height: "calc(100% + 20px)",
  },
}));

const CustomStepIcon = (props: any) => {
  const { active, completed } = props;
  const color = active || completed ? "#56B054" : "#F0F0F0";
  return (
    <div
      style={{
        width: 16,
        height: 16,
        borderRadius: "50%",
        backgroundColor: active ? "#3BA466" : completed ? "#3BA466" : "#F0F0F0",
        border: "2px solid #E6EAEE",
      }}
    ></div>
  );
};
const steps = [
  {
    title: "Call Time",
    subtitle: "The team is being gathered",
    time: "0800",
    icon: Call,
  },
  {
    title: "Depature Time",
    subtitle: "Your pilots have left the base",
    time: "0840",
    icon: Truck,
  },
  {
    title: "Arrival Time",
    subtitle: "The team has just landed",
    time: "0900",
    icon: Truck,
  },
  {
    title: "Setting up",
    subtitle: " Pilots are taking position",
    time: "1000",
    icon: Settings,
  },
  {
    title: "Shooting",
    subtitle: "Livestream is in progress",
    time: "0800",
    icon: Video,
  },
  {
    title: "Shooting",
    subtitle: "Livestream is in progress",
    time: "0800",
    icon: Video,
  },
  {
    title: "Wrapping up",
    subtitle: "Finishing up stuff",
    time: "0800",
    icon: Rotate,
  },
  {
    title: "Back to base",
    subtitle: "Pilots are heading back",
    time: "0800",
    icon: TruckBack,
  },
  {
    title: "Unpacking",
    subtitle: "Stuff being packed back in",
    time: "0800",
    icon: BoxIcon,
  },
  {
    title: "Departing",
    subtitle: "Job done",
    time: "0800",
    icon: Truck,
  },
];
const StreamDetails = () => {
  const activeStep = 2;

  return (
    <Box sx={{ ml: 4, mr: 4, height: "80vh", mb: 2 }}>
      <Grid container spacing={2} sx={{ p: 2, height: "100%" }}>
        {/* Left Column */}
        <Grid size={{ xs: 12, md: 8 }} sx={{ mb: 2 }}>
          <Grid
            container
            direction="column"
            spacing={2}
            sx={{ height: "100%" }}
          >
            <Grid sx={{ flex: 1 }}>
              <Grid sx={{ flex: 1 }}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: "12px",
                    boxShadow: 2,
                    height: 270, // fixed height
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column", // stack heading on top, content below
                    gap: 2, // spacing between heading and content row
                  }}
                >
                  {/* Heading */}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, fontSize: "16px" }}
                  >
                    Stream Details
                  </Typography>

                  {/* Row with thumbnail and countdown card */}
                  <Box
                    sx={{
                      display: "flex",
                      flex: 1,
                      alignItems: "center",
                      gap: 2, // spacing between thumbnail and countdown
                    }}
                  >
                    {/* Thumbnail image */}
                    <Box
                      component="img"
                      src={thumbnail}
                      alt="Booking"
                      sx={{
                        width: 380,
                        height: 190,
                        flexShrink: 0,
                        borderRadius: "12px",
                      }}
                    />

                    {/* Countdown card with mt: 2 */}
                    <Box sx={{ mt: 2 }}>
                      <CountdownCard />
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
            <Grid sx={{ flex: 1 }}>
              <Paper
                sx={{
                  p: 2,
                  boxShadow: 2,
                  height: 270, // ✅ fixed height
                  // allows scroll if content grows
                  borderRadius: "12px",
                }}
              >
                <Typography fontWeight={700} sx={{ fontSize: "15px" }}>
                  Location Details
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 1,
                    gap: 2,
                    mb: 1, // space between image and text
                  }}
                >
                  <Box
                    component="img"
                    src={map}
                    alt="Booking"
                    sx={{
                      mt: 1,
                      width: 380, // small width
                      height: 189, // small height
                      flexShrink: 0, // prevents stretching
                      borderRadius: 1,
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      ml: 2,
                      gap: 2, // space between image and text
                    }}
                  >
                    <Paper
                      sx={{
                        p: 1,
                        maxHeightt: 200,
                        maxWidth: 250,
                        boxShadow: 0,
                      }}
                    >
                      <Typography
                        fontWeight={700}
                        sx={{
                          backgroundColor: "#F0F4F8",
                          mt: 1,
                          fontSize: "13px",
                          fontStyle: "bold",
                        }}
                      >
                        Stream Details
                      </Typography>
                      <Typography
                        sx={{ mt: 2, fontWeight: 700, fontSize: "13px" }}
                      >
                        Old Mutual Chapel
                      </Typography>
                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: "14px",
                          display: "flex", // ✅ aligns image & text horizontally
                          alignItems: "center", // ✅ vertically centers them
                          gap: 1, // ✅ adds small spacing between icon & text
                        }}
                      >
                        <img
                          src={ClockIcon}
                          alt="Clock Icon"
                          style={{ width: 18, height: 18 }}
                        />
                        1300-1400
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: "14px",
                          display: "flex", // ✅ aligns image & text horizontally
                          alignItems: "center", // ✅ vertically centers them
                          gap: 1, // ✅ adds small spacing between icon & text
                        }}
                      >
                        <img
                          src={RoutingIcon}
                          alt="Routing Icon"
                          style={{ width: 18, height: 18 }}
                        />
                        Fife Avenue Harare
                      </Typography>

                      <Typography sx={{ mt: 1, fontSize: "14px", ml: 3 }}>
                        Harare,Zimbabwe
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        {/* Right Column */}
        <Grid size={{ xs: 12, md: 4 }} sx={{ height: "100%", mb: 2 }}>
          <Paper
            sx={{
              boxShadow: 2,
              height: 555, // ✅ keeps it same height as left column
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Gradient Header */}
            <Box
              sx={{
                height: "84px",
                width: "100%",
                background: "linear-gradient(90deg, #3BA466 0%, #5AB251 100%)",
                flexShrink: 0, // keeps header fixed at top
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "800",
                  mt: 2,
                  ml: 3,
                }}
              >
                Pixel Pilots Real Time Updates
              </Typography>

              <Typography
                color="subtitle2"
                sx={{
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: "400",
                  opacity: 0.8,
                  ml: 3,
                }}
              >
                Progress 10%
              </Typography>
            </Box>

            {/* ✅ Scrollable content area */}
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                px: 2,
                pt: 2,
                pb: 3,
                scrollbarWidth: "none", // Firefox
                "&::-webkit-scrollbar": {
                  display: "none", // Chrome, Safari
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "700",
                  mb: 2,
                }}
              >
                See how the team progresses
              </Typography>

              {/* Stepper Section */}
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Stepper
                  orientation="vertical"
                  activeStep={activeStep}
                  connector={<CustomConnector />}
                  sx={{
                    "& .MuiStep-root": { padding: 0, margin: 0 },
                    "& .MuiStepLabel-root": { m: 0, pb: 0, minHeight: 0 },
                    "& .MuiStepContent-root": { m: 0, mt: 0, pb: 0 },
                  }}
                >
                  {steps.map((step, index) => (
                    <Step key={step.title} completed={index < activeStep}>
                      <StepLabel
                        StepIconComponent={CustomStepIcon}
                        sx={{
                          "& .MuiStepLabel-label": {
                            "&::before": {
                              borderColor:
                                index <= activeStep ? "#56B054" : "#E6EAEE",
                            },
                          },
                        }}
                      >
                        <Paper
                          elevation={2}
                          sx={{
                            p: 1.5,
                            mb: -2, // smaller space between papers
                            borderRadius: "12px",
                            width: 260,
                            height: 78,
                            boxShadow: 0,
                            background:
                              index === activeStep
                                ? "linear-gradient(90deg, #3BA466 0%, #5AB251 100%)"
                                : "#ffffff",

                            border: "1px solid #E6EAEE",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between", // left content vs time
                          }}
                        >
                          {/* Left: icon + title/subtitle */}
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box
                              sx={{
                                width: 28,
                                height: 28,
                                backgroundColor:
                                  index === activeStep ? "#CCE7CC" : "#F0F0F0", // ✅ correct syntax
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "4px",
                                flexShrink: 0,
                                mr: 1.5, // spacing between icon and text
                              }}
                            >
                              <Box
                                component="img"
                                src={step.icon}
                                alt="icon"
                                sx={{ width: 16, height: 16 }}
                              />
                            </Box>

                            {/* Title & Subtitle stacked */}
                            <Box
                              sx={{ display: "flex", flexDirection: "column" }}
                            >
                              <Typography
                                fontSize={13}
                                fontWeight={800}
                                color={
                                  index === activeStep ? "#ffffff" : "#000000"
                                }
                              >
                                {step.title}
                              </Typography>
                              <Typography
                                fontSize={12}
                                fontWeight={400}
                                color={
                                  index === activeStep ? "#ffffff" : "#000000"
                                }
                                sx={{ mt: 0.5 }}
                              >
                                {step.subtitle}
                              </Typography>
                            </Box>
                          </Box>

                          {/* Right: time aligned with other content */}
                          <Typography
                            fontSize={11}
                            fontWeight={700}
                            color={index === activeStep ? "#ffffff" : "#000000"}
                            sx={{ flexShrink: 0 }}
                          >
                            {step.time}
                          </Typography>
                        </Paper>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StreamDetails;
