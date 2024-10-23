import { IconButton, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
  const theme = useTheme();

  return (
    <Card className="card" sx={{ maxWidth: 250 }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{ fontSize: "30px", color: theme.palette.primary.main }}
        >
          <i className="fa-regular fa-handshake"></i>
        </IconButton>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontSize: "20px",
            marginTop: "10px",
            color: theme.palette.primary.main,
          }}
        >
          Campaigns
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "12px",
            color: "#bbb",
            fontWeight: "bold",
            marginTop: "4px",
            textAlign: "center",
          }}
        >
          List And Manage All Campaigns
        </Typography>
      </CardContent>
    </Card>
  );
}
