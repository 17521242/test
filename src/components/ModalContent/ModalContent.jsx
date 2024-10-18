import { Box } from "@mui/material";
export default function ModalContent(props) {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "32rem",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50% , -50%)",
        padding: "10px",
        boxShadow: 24,
      }}
    >
      {props.children}
    </Box>
  );
}
