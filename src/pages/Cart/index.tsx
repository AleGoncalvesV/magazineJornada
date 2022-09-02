import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimarySearchAppBar from "../../components/PrimaryNavbar";
import ProductInCart from "../../components/ProductInCart";

function Cart() {
  const navigate = useNavigate();
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  
  return (
    <>
      <PrimarySearchAppBar />
      <h1>Carrinho</h1>
    <Box height='100vh' display='flex' justifyContent='center'>
      {!isEmpty && 
        <ProductInCart />
      }
      
      {isEmpty && (
        <Box>
          <Typography >O seu carrinho está vazio</Typography>
          <Button
            color="info"
            variant="contained"
            onClick={() => navigate("/home", { state: "" })}
          >
            Continuar Comprando
          </Button>
        </Box>
      )}
    </Box>
    </>
  );
}

export default Cart;
