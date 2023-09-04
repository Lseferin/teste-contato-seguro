
import React, { useState } from "react";
import { FooterModal, FormAdd, FormResult } from "./styles";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { createSvgIcon } from "@mui/material/utils";
import { BoxGrey, Form } from "../../Layout/GridStyles";
import { Navigation } from "../Home/styles";
import { Link } from "react-router-dom";
import HeaderLogo from "../../Components/HeaderLogo/HeaderLogo";
import HeaderBackground from "../../Components/HeaderBackground/HeaderBackground";
import FormTableUsers from "../../Components/FormTable/FormTableUsers";
import searchMenuUser from "../../Services/menuUser";
import users from "../../Services/users";

const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus"
);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function RegisterUser() {
  const [open, setOpen] = React.useState(false);
  const [usersList, setUsersList] = useState(users);
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const handleFilter = (event) => {
    setSearch(event.target.value);
  };

  const handleRegisterSubmitUser = (registersUsers
    ) => {
    // Adicione o novo cadastro à lista de cadastros
    setUsersList([...usersList, registersUsers
    ]);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefone: "",
    dataDeNascimento: "",
    cidadeDeNascimento: "",
    empresa: "",
  });

  const handleSubmitUser = (e) => {
    e.preventDefault();

    // Crie um objeto JSON com os dados do formulário
    const registersUsers = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      dateOfBirth: formData.dateOfBirth,
      cityOfBirth: formData.cityOfBirth,
      company: formData.company,
    };

    // Chame a função de retorno passada como prop para adicionar o cadastro à lista
    handleRegisterSubmitUser(registersUsers);

    // Limpe o formulário após o envio
    setFormData({
      name: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      cityOfBirth: "",
      company: "",
    });
  };

  const handleChangeSearch = (e) => {
    console.log(e.target.value)
    setFilter(e.target.value);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container>
      <HeaderBackground title="Usuários"/>
      <BoxGrey>        
      <HeaderLogo />
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        flexWrap="nowrap"
      >        
        <FormAdd>          
          <Button variant="outlined"onClick={handleOpen}  startIcon={<PlusIcon />}>
            Adicionar Usuário
          </Button>    
        </FormAdd>
     
        <Grid container alignItems="center" width="auto" flexWrap="nowrap">
          <TextField
            id="search"
            label="Buscar"
            variant="outlined"
            size="small"
            onChange={handleChangeSearch}
          />
          <FormControl fullWidth size="small">
            <InputLabel id="form-search-label">Por</InputLabel>
            <Select
              labelId="form-search"
              id="form-search"
              value={search}
              label="Por"
              onChange={handleFilter}
            >
              {searchMenuUser.map((itemMenu) => {
                return (                 
                  <MenuItem value={itemMenu}>{itemMenu}</MenuItem>                  
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <FormResult>
        <FormTableUsers usersList={usersList} filter={filter}/>
        <Navigation>
          <Link to="/cadastro-empresas">
            <Button variant="contained" disableElevation size="large">
             Empresas
            </Button>             
          </Link>
         
        </Navigation>  
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography variant="h4" component="h4">
              Cadastrar Usuário
            </Typography>
            <Form onSubmit={handleSubmitUser}>             
              <TextField
                label="Nome"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                size="small"
                sx={{ width: '100%' }}
                required
              />
          
              <TextField
                label="Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                size="small"
                sx={{ width: '100%' }}
                required
              />

              <TextField
                label="Telefone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                size="small"
                sx={{ width: '100%' }}
              />

              <TextField
                label="Data de Nascimento"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                size="small"
                sx={{ width: '100%' }}
              />

              <TextField
                label="Cidade de Nascimento"
                id="cityOfBirth"
                name="cityOfBirth"
                value={formData.cityOfBirth}
                onChange={handleChange}
                size="small"
                sx={{ width: '100%' }}
              />

              <TextField
                label="Empresa"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                size="small"
                sx={{ width: '100%' }}
                required
              />
                
            {/* <FormControl fullWidth size="small">
              <InputLabel id="form-search-label">Empresa</InputLabel>
              <Select
                labelId="form-search"
                id="form-search"
                value={formData.companie}
                label="Por"
                 onChange={handleChange}
              >
                {companies.map((itemMenu) => {
                  return (
                    <>
                      <MenuItem value={10}>{itemMenu.name}</MenuItem>
                    </>
                  );
                })}
              </Select>
              </FormControl> */}
              <FooterModal>
                <Button variant="contained" type="submit">Enviar</Button>
              </FooterModal>
            </Form>
          </Box>
        </Modal>        
      </FormResult>
      </BoxGrey>
    </Container>
  );
}
