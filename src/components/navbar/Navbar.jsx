import React from 'react';
import { Container, ListContainer, LogoContainer, H6 } from './styled';

import logo from '../../assets/logo-draxo.png';

export const Navbar = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} className='App-logo ' alt='logo'></img>
        <ion-icon name='reorder-four-outline'></ion-icon>
      </LogoContainer>
      <ListContainer>
        <h4>Lista de casas</h4>
        <H6>Lista de casas en san Francisco</H6>
      </ListContainer>
    </Container>
  );
};
