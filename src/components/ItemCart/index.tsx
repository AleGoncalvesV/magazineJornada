import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useState } from "react";
import { formatMoney } from "../../shared/utils/numbers";

function ItemCart() {
  const [quantity, setQuantity]= useState<number>(1);

  function handleIncrease() {
    setQuantity((prevState) => prevState + 1)
  }
  function handleRemove() {
    setQuantity((prevState) => prevState - 1)
  }
  

  return (
    <Card sx={{ display: "flex", padding: 2, mb: 2, justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        sx={{ width: 155, height: 120 }}
        image="https://a-static.mlcdn.com.br/800x560/notebook-samsung-book-intel-core-i3-4gb-256gb-ssd-156-full-hd-windows-11-np550xda-kv3br/magazineluiza/233394100/a8dcd2d4e938a2b9886dd586531c92a8.jpg"
        alt="notebook"
      />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Notebook Samsung Book Intel Celeron 4GB 500GB
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            Valor Unitário
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {formatMoney(1889.10)}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
      <Box >
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Valor Total
        </Typography>
        <Typography variant="h6" color="text.secondary" component="div">
          {formatMoney(1889.10)}
        </Typography>
        <Tooltip title="Remover" onClick={handleRemove}>
          <IconButton>
            <RemoveCircleIcon />
          </IconButton>
        </Tooltip>
        {quantity}
        <Tooltip title="Adicionar" onClick={handleIncrease}>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  );
}

export default ItemCart;
