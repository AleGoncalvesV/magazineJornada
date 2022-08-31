import { Box } from "@mui/material";
import PrimarySearchAppBar from "../../components/PrimaryNavbar";

function ProductList(){
  return (
    <Box>
      <PrimarySearchAppBar />
      <h1>Lista de Produtos</h1>
    </Box>
  );
}

export default ProductList;