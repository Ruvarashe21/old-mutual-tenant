import React, { useEffect, useState } from "react";
import { Card, CardContent, Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

interface TimelineItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  completed: boolean;
}

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownCard: React.FC = () => {
  const [countdown, setCountdown] = useState<Countdown>({
    days: 1,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const totalSeconds =
    countdown.days * 24 * 3600 +
    countdown.hours * 3600 +
    countdown.minutes * 60 +
    countdown.seconds;
  const initialTotalSeconds = 1 * 24 * 3600;
  const progressPercentage =
    ((initialTotalSeconds - totalSeconds) / initialTotalSeconds) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;

        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
              if (days < 0) {
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const radius = 60; // bigger circle
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const svgSize = radius * 2 + strokeWidth;

  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        whileHover={{ scale: 1.02 }}
      >
        <Card
          sx={{
            borderRadius: 3,
            height: "180px",
            width: "180px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            boxShadow: "none",
          }}
        >
          <CardContent
            sx={{
              p: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: svgSize,
                height: svgSize,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width={svgSize}
                height={svgSize}
                style={{ transform: "rotate(-90deg)" }}
              >
                <circle
                  cx={radius + strokeWidth / 2}
                  cy={radius + strokeWidth / 2}
                  r={radius}
                  fill="none"
                  stroke="#E0E0E0"
                  strokeWidth={strokeWidth}
                />
                <circle
                  cx={radius + strokeWidth / 2}
                  cy={radius + strokeWidth / 2}
                  r={radius}
                  fill="none"
                  stroke="#5AB251"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={
                    circumference * (1 - progressPercentage / 100)
                  }
                  strokeLinecap="round"
                />
              </svg>

              {/* Labels and countdown numbers inside the circle */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 0.5,
                }}
              >
                {/* Labels */}
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 500,
                    color: "#000000",
                    fontSize: "0.6rem",
                    textAlign: "center",
                  }}
                >
                  Days Hrs Min Sec
                </Typography>

                {/* Countdown numbers */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#000000",
                    fontSize: "0.85rem",
                    textAlign: "center",
                  }}
                >
                  {String(countdown.days).padStart(2, "0")}:
                  {String(countdown.hours).padStart(2, "0")}:
                  {String(countdown.minutes).padStart(2, "0")}:
                  {String(countdown.seconds).padStart(2, "0")}
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                mt: 1,
                textAlign: "center",
                fontSize: "11px",
              }}
            >
              Time for stream
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
};

export default CountdownCard;
