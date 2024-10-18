import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function Sidebar() {
  const listItem = [
    {
      itemIcon: <HomeIcon />,
      itemText: "Dashboard",
      itemLink: "/",
    },
    {
      itemIcon: <Inventory2Icon />,
      itemText: "Products",
      itemLink: "/products",
    },
  ];

  return (
    <Box sx={{height: "100vh" }}>
      <List component="nav">
        {listItem.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.itemLink}
            >
              <ListItemIcon>
                {item.itemIcon}
              </ListItemIcon>
              <ListItemText primary={item.itemText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
