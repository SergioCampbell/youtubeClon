import { Card, CardMedia, CardHeader, Avatar, IconButton } from "@mui/material";
import { purple } from "@mui/material/colors";
import { formatTimeAgo } from "../../helpers/dateFormater";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function DefaultCard() {
  const randomDate = new Date();

  return (
    <Card
      sx={{
        maxWidth: 345,
        marginBottom: 3,
        marginTop: 2,
        backgroundColor: "#141414",
        color: "white",
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1702518753493-5d21e9b1f905?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Paella dish"
      />
      <CardHeader
        color="white"
        avatar={
          <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" draggable sx={{ color: "white" }}>
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader={formatTimeAgo(String(randomDate))}
        subheaderTypographyProps={{
          color: "white",
        }}
      />
    </Card>
  );
}
