import { Box, Stack, TextField, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CustomTooltip from "../../components/CustomTooltip/CustomTooltip";
import { Button } from "@mui/material";
import CustomTable from "../../components/CustomTable/CustomTable";
import { Modal } from "@mui/material";
import CustomForm from "../../components/CustomForm/CustomForm";
import CustomTextField from "../../components/CustomForm/CustomTextField";
import { useState } from "react";
import ModalContent from "../../components/ModalContent/ModalContent";
import CustomButton from "../../components/CustomForm/CustomButton";

const tooltipContent = (
  <Box>
    <Typography>User can add, edit or manage products here</Typography>
  </Box>
);

const columns = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "productName", label: "Product Name", minWidth: 150 },
  { id: "productCategory", label: "Product Category", minWidth: 150 },
  {
    id: "actions",
    label: "Actions",
    minWidth: 100,
    format: () => (
      <Stack
        component="div"
        direction="row"
        spacing={1}
        justifyContent="center"
      >
        <Button variant="contained" size="small">
          View
        </Button>
        <Button variant="contained" color="warning" size="small">
          Edit
        </Button>
        <Button variant="contained" color="error" size="small">
          Delete
        </Button>
      </Stack>
    ),
  },
];

const data = [
  {
    id: 1,
    productName: "test01",
    productCategory: "Category01",
  },
  { id: 2, productName: "test02", productCategory: "Category02" },
  { id: 3, productName: "test03", productCategory: "Category01" },
];

function ManageProducts() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [productName, setproductName] = useState("");
  const [productCategory, setproductCategory] = useState("");
  const [date, setDate] = useState("");
  const [productNameMessage, setproductNameMessage] = useState("");
  const [productCategoryMessage, setproductCategoryMessage] = useState("");
  const [dateMessage, setdateMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName && !productCategory && !date) {
      setproductNameMessage("Product name is required!");
      setproductCategoryMessage("Product category is required!");
      setdateMessage("date is required!");
      setError(true);
    } else if (productName && productCategory && date) {
      setproductNameMessage("");
      setproductCategoryMessage("");
      setdateMessage("");
      setError(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        height: "100vh",
        padding: "10px",
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="h5">Manage products</Typography>
        <CustomTooltip
          content={tooltipContent}
          children={<HelpOutlineIcon />}
        />
      </Stack>
      <Stack direction="row" justifyContent="flex-end" gap={2}>
        <TextField label="Search" sx={{ width: "20rem" }} />
        <Button
          variant="outlined"
          sx={{ padding: "10px 20px" }}
          onClick={handleOpen}
        >
          Add product
        </Button>
      </Stack>
      <Stack>
        <CustomTable columns={columns} data={data} pageSize={10} />
      </Stack>
      <Modal open={open} onClose={handleClose}>
        <ModalContent>
          <Typography align="center" variant="h5">
            Add new product
          </Typography>
          <CustomForm onSubmit={handleSubmit}>
            <CustomTextField
              value={productName}
              onChange={(e) => setproductName(e.target.value)}
              label="Product name"
              helperText={productNameMessage}
              error={error}
            />
            <CustomTextField
              value={productCategory}
              onChange={(e) => setproductCategory(e.target.value)}
              label="Product category"
              helperText={productCategoryMessage}
              error={error}
            />
            <CustomTextField
              value={date}
              onChange={(e) => setDate(e.target.value)}
              label="Date"
              helperText={dateMessage}
              error={error}
            />
            <CustomButton>
              <CustomButton.Submit />
              <CustomButton.Cancel onClick={handleClose} />
            </CustomButton>
          </CustomForm>
        </ModalContent>
      </Modal>
      ;
    </Box>
  );
}
export default ManageProducts;
