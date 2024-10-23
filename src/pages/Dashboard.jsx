import { Box, Typography } from "@mui/material"
import BasicCard from "../components/Card"

const Dashboard = () => {
  return (
    <div>
         <Typography sx={{ fontSize: "25px", marginBottom: "20px" }}>
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