import { FormControl, Button, Stack } from "@mui/material";

export default function CustomButton(props) {
  return (
    <FormControl fullWidth margin="normal">
      <Stack direction="row" justifyContent="center" spacing={2}>{props.children}</Stack>
    </FormControl>
  );
}

CustomButton.Submit = function SubmitButton(props) {
  return (
    <Button type="submit" variant="contained" onClick={props.onClick}>
      Submit
    </Button>
  );
};

CustomButton.Cancel = function CancelButton(props) {
  return (
    <Button variant="contained" color="error" onClick={props.onClick}>
      Cancel
    </Button>
  );
};

CustomButton;
