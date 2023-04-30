import { Edit, Home, HowToReg, Logout } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

export default function MenuFranchisee() {
  const navigate = useNavigate();
  const theme = useTheme();
  const userRole = localStorage.getItem("role");
  const id = localStorage.getItem("id");

  return (
    <>
      <Drawer variant="permanent">
        {/* Box Principal do Menu */}
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          {/* Primeiro Box - Logo do Menu */}
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://w7.pngwing.com/https://media.licdn.com/dms/image/C4D0BAQGFHTuhFonKaA/company-logo_200_200/0/1657559080278?e=1691020800&v=beta&t=qA1HMrRJ3NL3Xky5iVPuwotaVpD5_aJRnPAyzwsG6oU/502/794/png-transparent-white-arrow-going-up-computer-icons-dashboard-car-symbol-dashboard-icon-miscellaneous-angle-logo.png"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <Typography align="center" variant="h6">
                Franqueado
              </Typography>
              <ListItemButton
                onClick={() => {
                  navigate("/" + userRole + "/" + id);
                }}
              >
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText secondary="Página inicial" />
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  navigate("/update-user");
                }}
              >
                <ListItemIcon>
                  <Edit />
                </ListItemIcon>
                <ListItemText secondary="Editar meu Usuario" />
              </ListItemButton>

              <Typography align="center" variant="h6">
                Usuarios
              </Typography>
              <ListItemButton
                onClick={() => {
                  navigate("/create-user");
                }}
              >
                <ListItemIcon>
                  <HowToReg />
                </ListItemIcon>
                <ListItemText secondary="Cadastrar Funcionario" />
              </ListItemButton>

              <Typography align="center" variant="h6">
                Vendas
              </Typography>
              <ListItemButton
                onClick={() => {
                  navigate("/create-sale");
                }}
              >
                <ListItemIcon>
                  <HowToReg />
                </ListItemIcon>
                <ListItemText secondary="Efetuar Venda" />
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  navigate("/create-sale");
                }}
              >
                <ListItemIcon>
                  <HowToReg />
                </ListItemIcon>
                <ListItemText secondary="Visualizar Vendas" />
              </ListItemButton>

              <Typography align="center" variant="h6">
                Clientes
              </Typography>
              <ListItemButton
                onClick={() => {
                  navigate("/create-customer");
                }}
              >
                <ListItemIcon>
                  <HowToReg />
                </ListItemIcon>
                <ListItemText secondary="Cadastrar Cliente" />
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  navigate("/all-customer");
                }}
              >
                <ListItemIcon>
                  <Edit />
                </ListItemIcon>
                <ListItemText secondary="Visualizar Clientes" />
              </ListItemButton>

              <Typography align="center" variant="h6">
                Produtos
              </Typography>
              <ListItemButton
                onClick={() => {
                  navigate("/all-product");
                }}
              >
                <ListItemIcon>
                  <HowToReg />
                </ListItemIcon>
                <ListItemText secondary="Visualizar Produtos" />
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  navigate("/");
                }}
              >
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
