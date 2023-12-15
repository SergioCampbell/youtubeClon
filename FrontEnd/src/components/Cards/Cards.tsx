import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { purple } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Card as YTCard } from "../../interface/card";
import { formatTimeAgo } from "../../helpers/dateFormater";
import DefaultCard from "./DefaultCard";

interface CardsProps {
  miniCard: YTCard[];
}

export default function Cards({ miniCard }: CardsProps) {
  return (
    <>
      {miniCard && miniCard[0].etag !== "" ? (
        miniCard.map((item: YTCard) => (
          <Card
            sx={{
              maxWidth: 345,
              marginBottom: 3,
              marginTop: 2,
              backgroundColor: "#141414",
              color: "white",
              ":hover": { cursor: "pointer" }
            }}
          >
            <CardMedia
              sx={{ ":hover": { inlineSize: 450, transition: "ease-in-out, 0.5s" } }}
              component="img"
              height="194"
              image={item.snippet.thumbnails.high.url}
              alt="mini Card"
            />
            <CardHeader
              color="white"
              avatar={
                <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                  {item.snippet.channelTitle[0]}
                </Avatar>
              }
              action={
                <IconButton
                  aria-label="settings"
                  draggable
                  sx={{ color: "white" }}
                >
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.snippet.title}
              subheader={formatTimeAgo(item.snippet.publishedAt)}
              subheaderTypographyProps={{
                color: "white",
                fontSize: 14,
              }}
            />
          </Card>
        ))
      ) : (
        <DefaultCard />
      )}
    </>
  );
}
