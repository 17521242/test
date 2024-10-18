import { Stack, Typography } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
function Home() {
  const cardList = [
    {
      icon: <MonetizationOnOutlinedIcon />,
      mainContent: "100",
      footContent: "totalEarnings",
    },
    {
      icon: <PersonAddAlt1OutlinedIcon />,
      mainContent: "200",
      footContent: "More people",
    },
    {
      icon: <DeliveryDiningOutlinedIcon />,
      mainContent: "500",
      footContent: "Orders",
    },
  ];

  return (
    <Stack component="div" direction="row" spacing={2}>
      {cardList.map((item, index) => (
        <Card sx={{ flexGrow: "1" }} key={index}>
          <CardContent>
            <Typography>{item.icon}</Typography>
            <Typography>{item.mainContent}</Typography>
            <Typography>{item.footContent}</Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
export default Home;
