import { Box, Stack, Typography } from "@mui/material";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AccountCircleOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Stack
      component="header"
      direction="row"
      spacing={2}
      sx={{ backgroundColor: "white" }}
    >
      <Stack direction="row" spacing={2} sx={{ flexGrow: "1" }}>
        <LocalCafeIcon fontSize="large" />
        <Typography sx={{ alignContent: "center" }}>Cafe management</Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{ flexGrow: "2", justifyContent: "end" }}
      >
        <Link to="#">
          <AccountCircleOutlined fontSize="large" sx={{alignSelf:"center"}} />
        </Link>
      </Stack>
    </Stack>
  );
}

export default Header;
