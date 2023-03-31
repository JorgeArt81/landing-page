import React from 'react';
import { NavLink } from 'react-router-dom';
import { Article, Icon, Nav, Ul } from './style';
import styled from 'styled-components';

export const Menu = () => {
  return (
    // <Article>
    //   <Nav>
    //     <Hr/>
    //     <Ul>
    //       <Icon>

    //       </Icon>
    //     </Ul>
    //   </Nav>
    // </Article>

    <nav>
      <ListContainer>
        <li>
          <NavLink
            to={`/`}
            className={({ isActive }) => (isActive ? 'active' : '')}>
            HouseList
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`demo`}
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Demo
          </NavLink>
        </li>
      </ListContainer>
    </nav>
  );
};

// Styled Components (CSS in JS)
const ListContainer = styled.ul`
  .active {
    color: red;
  }
`;
