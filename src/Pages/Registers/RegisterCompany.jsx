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
import FormTableCompanies from "../../Components/FormTable/FormTableCompanies";
import searchMenuCompany from "../../Services/menuCompany";
import companies from "../../Services/companies";

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

export default function RegisterCompany() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [companiesList, setCompaniesList] = useState(companies);
  const [filter, setFilter] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFilter = (event) => {
    setSearch(event.target.value);
  };

  const handleRegisterSubmitCompany = (registersCompanies
    ) => {
    // Adicione o novo cadastro à lista de cadastros
    setCompaniesList([...companiesList, registersCompanies
    ]);
  };

  const [formData, setFormData] = useState({
    name: "",
    cnpj: "",
    endereço: "",
    usuários: "",
  });

  const handleSubmitCompany = (e) => {
    e.preventDefault();

    // Crie um objeto JSON com os dados do formulário
    const registersCompanies
     = {
      name: formData.name,
      cnpj: formData.cnpj,
      address: formData.address,
      users: formData.users,
    };

    // Chame a função de retorno passada como prop para adicionar o cadastro à lista
    handleRegisterSubmitCompany(registersCompanies);

    // Limpe o formulário após o envio
    setFormData({
      name: "",
      cnpj: "",
      address: "",
      users: "",
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
      <HeaderBackground title="Empresas"/>
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
          Adicionar Empresa
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
              {searchMenuCompany.map((itemMenu) => {
                return (                 
                  <MenuItem value={itemMenu}>{itemMenu}</MenuItem>                  
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <FormResult>
        <FormTableCompanies companiesList={companiesList} filter={filter} />
        <Navigation>
          <Link to="/cadastro-usuario">
            <Button variant="contained" disableElevation size="large">
             Usuários
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
              Cadastrar Empresa
            </Typography>
            <Form onSubmit={handleSubmitCompany}>             
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
                label="CNPJ"
                id="cnpj"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                size="small"
                sx={{ width: '100%' }}
                required
              />

              <TextField
                label="Endereço"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                size="small"
                sx={{ width: '100%' }}
                required
              />

              <TextField
                label="Usuários"
                id="users"
                name="users"
                value={formData.users}
                onChange={handleChange}
                size="small"
                sx={{ width: '100%' }}
                required
              />
              <small>Nome de usuários separados por vírgula</small>
                
            {/* <FormControl fullWidth size="small">
              <InputLabel id="form-search-label">Usuários</InputLabel>
              <Select
                labelId="form-search"
                id="form-search"
                value={formData.users}
                label="Por"
                // onChange={handleChange}
              >
                {users.map((itemMenu) => {
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
