import { FormControl, TextField } from "@mui/material";

const CustomTextField = (props) => {
  return (
    <FormControl fullWidth margin="normal">
      <TextField
        value={props.value}
        onChange={props.onChange}
        label={props.label}
        helperText={props.helperText}
        size="small"
        error={props.error}
      />
    </FormControl>
  );
};

export default CustomTextField;
