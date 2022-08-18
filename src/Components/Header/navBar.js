import React from "react";
import logo from "../../Assets/3d-logo.png"
import styled from 'styled-components';

const NavBar = () =>{

    return(
        <>
        <img style = {styles.headerImg} src={logo} alt="" />
        <h1>3D Models</h1>
        <div> 
            <Button>Buscar</Button>
            <Button>Descargas</Button>
            <Button>Contacto</Button>
        </div> 
       
        </>
    )
}

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "white" : "none"};
  color: ${props => props.primary ? "none" : "white"};

  &:hover {
    color: #BED1F8;
    border: 2px solid #BED1F8;
  }

  font-size: 1.2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
`;

const styles = {
    headerImg:{
        width: "100px",
        height: "auto"
    }
}

export default NavBar