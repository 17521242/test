import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Grid2, Box } from "@mui/material";

export default function Layout() {
  return (
    <>
      <Header />
      <Grid2 container spacing={1} columns={24}>
        <Grid2 size={{ xl: 3, lg: 4, sm: 6 }}>
          <Sidebar />
        </Grid2>
        <Grid2 size={{ xl: 21, lg: 20, sm: 18 }}>
          <Box component="main"  sx={{ backgroundColor:"#f5f5f5", height: "100vh", padding:"10px" }}>
            <Outlet />
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
}
