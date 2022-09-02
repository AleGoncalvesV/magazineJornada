import { Box, Button, Link, TextField } from "@mui/material";


function Login() {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      style={{ backgroundColor: "#1111" }}
    >
      <Box
        height="80%"
        width="50%"
        alignSelf={"center"}
        display={"flex"}
        borderRadius="2%"
        style={{ backgroundColor: "white" }}
      >
        <Box width="50%" style={{ backgroundColor: "#285ec4" }}>
          imagem
        </Box>
        <Box
          height="100%"
          width="50%"
          display="flex"
          flexDirection={"column"}
          alignSelf={"center"}
          justifyContent="space-around"
          gap={1}
        >

          <Box alignSelf={"center"}>imagem</Box>
          <Box
            width="70%"
            display="flex"
            flexDirection={"column"}
            alignSelf={"center"}
            textAlign="center"
            gap={1}
          >
            <h1>Bem-vindo</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisci elit</span>
            <TextField
              id="outlined-basic"
              error
              helperText="Incorrect entry."
              label="E-mail"
              variant="outlined"
            />

            <TextField
              id="outlined-password-input"
              label="Senha"
              type="password"
              autoComplete="current-password"
            />

            <Link
              component="button"
              variant="body2"
              underline="none"
              textAlign={"left"}
              onClick={() => {
                console.info("Esqueci a senha");
              }}
            >
              Esqueci a senha
            </Link>
            <Button
              color="info"
              variant="contained"
              onClick={() => {
                console.info("Login");
              }}
            >
              Login
            </Button>
          </Box>

          <Box alignSelf="center">

            Não tem uma conta ainda?{" "}
            <Link
              component="button"
              variant="body2"
              underline="none"
              onClick={() => {
                console.info("Cadastro");
              }}
            >
              Cadastre-se
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
