import styled from 'styled-components';
import { devices } from '../../theme/breackpoints';

export const Article = styled.div`
  display: flex;

  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

export const Nav = styled.nav`
  background: black;
  width: 26%;
  height: 100vh;
  display: grid;
  grid-template-columns: 133% 1fr;
  grid-template-rows: 10rem 10rem;

  @media ${devices.tablet} {
    width: 45%;
  }

  @media ${devices.mobileL} {
    width: 100%;
    display: flex;
    justify-content: center;
    background: none;
  }
`;

export const Hr = styled.hr`
  color: #3c3c3c;
  position: absolute;
  opacity: 0.5;
  left: 30px;
  position: absolute;
  width: 17%;
  margin: 4em 0;

  @media ${devices.mobileL} {
    opacity: 1.5;
    left: 85px;
    width: 73%;
  }
`;

export const Icon = styled.li`
  color: #ffff;
  display: flex;
  align-items: flex-end;

  ion-icon {
    color: #ffff;
    font-size: 20px;
    margin: 24px 19px 10px 10px;
    padding: 10px;
    border-radius: 50%;
    background: #262626;
  }

  ion-icon:hover {
    background: #927bef;
  }

  &:hover {
    color: #927bef;
  }

  .link {
    color: #ffff;
    text-decoration: none;
    margin: 0px 0px 20px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    &:hover {
      color: #927bef;
    }

    @media ${devices.mobileL} {
      font-size: 2px;
    }
  }
`;

export const Ul = styled.ul`
  padding: 80px 10px 0px;

  @media ${devices.mobileL} {
    display: flex;
    padding: 0px;
  }
`;

export const Continer = styled.div`
  border: 1px solid black;
`;
