import React from "react";
import "../App.css";
import { Typography, LinearProgress } from "@mui/material";

export default function ProgressBar() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <Typography variant="h1" fontSize={"3rem"}>
        Liner ProgressBar
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        color="success"
        sx={{
          width: "40%",
          height: "0.5rem",
          mx: "35rem",
          my: "5rem",
        }}
      />
    </div>
  );
}
