import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

export default function Sidebar() {
  const windowSize = window.outerWidth;
  return (
    <Stack
      padding={-2}
      direction={windowSize < 600 ? "row" : "column"}
      sx={{ backgroundColor: "#141414" }}
      spacing={2}
    >
      <Button size="large" color="inherit" sx={{ height: 64, width: 74 }}>
        <Box>
          <HomeIcon />
          <Typography
            fontSize={9}
            fontWeight={400}
            fontStyle={"unset"}
            marginTop={-1}
          >
            Home
          </Typography>
        </Box>
      </Button>
      <Button size="large" color="inherit" sx={{ height: 64, width: 74 }}>
        <Box>
          <PlayCircleOutlineOutlinedIcon />
          <Typography
            fontSize={9}
            fontWeight={400}
            fontStyle={"unset"}
            marginTop={-1}
          >
            Shorts
          </Typography>
        </Box>
      </Button>
      <Button size="large" color="inherit" sx={{ height: 64, width: 74 }}>
        <Box>
          <SubscriptionsOutlinedIcon />
          <Typography
            fontSize={9}
            fontWeight={400}
            fontStyle={"unset"}
            marginTop={-1}
          >
            Subscriptions
          </Typography>
        </Box>
      </Button>
      <Button size="large" color="inherit" sx={{ height: 64, width: 74 }}>
        <Box>
          <VideoLibraryOutlinedIcon />
          <Typography
            fontSize={9}
            fontWeight={400}
            fontStyle={"unset"}
            marginTop={-1}
          >
            You
          </Typography>
        </Box>
      </Button>
      <Divider />
    </Stack>
  );
}
