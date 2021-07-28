import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  width: 94px;
  background-color: var(--white-color);

  @media (max-width: 1100px) {
    width: 70px;
  }

  @media (max-width: 800px) {
    width: 50px;
  }
`;

export const Content = styled.div`
  padding: 38px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  @media (max-width: 1100px) {
    padding: 30px 20px;
  }
`;

export const Logo = styled(Link)`
  img {
    @media (max-width: 700px) {
      width: 25px;
    }
  }
`;

export const Menu = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
export const MenuItem = styled.li`
  margin: 20px 0;
  svg {
    font-size: 28px;
    color: #454545;
    @media (max-width: 700px) {
      font-size: 20px;
    }
  }
`;

export const CartIcon = styled.span`
  width: 42px;
  height: 42px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #f9a109;
  position: relative;
  display: flex;
  @media (max-width: 1100px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 700px) {
    width: 25px;
    height: 25px;
  }

  svg {
    margin: auto;
    color: var(--white-color);
    font-size: 20px;

    @media (max-width: 700px) {
      font-size: 16px;
    }
  }

  span {
    position: absolute;
    display: block;
    padding: 4px 8px;
    border-radius: 4px;
    background: #eb5757;
    font-size: 10px;
    top: -5px;
    color: var(--white-color);
    right: -5px;
    font-weight: 500;
    @media (max-width: 1100px) {
      top: -9px;
      right: -9px;
    }

    @media (max-width: 700px) {
      padding: 2px 4px;
      top: -5px;
      right: -5px;
    }
  }
`;
