import { Box } from "@mui/material";

const CustomForm = (props) => {
  return (
    <Box
      component="form"
      sx={{margin:"0 25px"}}
      onSubmit={props.onSubmit}
    >
        {props.children}
    </Box>
  );
};

export default CustomForm;
