import { Box, Typography, useTheme } from "@mui/material"
import BasicCard from "../components/Card"

const Dashboard = () => {
  const theme = useTheme();

  return (
    <div>
         <Typography sx={{ fontSize: "25px", marginBottom: "20px",
          color: theme.palette.primary.main
         }}>
            Quick Links
          </Typography>
          <Box className="grid">
            <BasicCard />
            <BasicCard />
            <BasicCard />
            <BasicCard />
            <BasicCard />
            <BasicCard />
            <BasicCard />
            <BasicCard />
          </Box>
    </div>
  )
}

export default Dashboard