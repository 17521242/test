import { Tooltip } from "@mui/material";

function CustomTooltip(props) {
  return (
    <Tooltip
      title={props.content}
      slotProps={{
        tooltip: {
          sx: {
            bgcolor: "#f9f9f9",
            color: "#000",
            boxShadow: "0px 2px 15px rgba(0,0,0,0.15)", 
          },
        },
      }}
    >
      {props.children}
    </Tooltip>
  );
}
export default CustomTooltip;