import React from 'react';
import styled from 'styled-components';
import ShoppingList from '../ShoppingList';

interface Props {
  openShoppingModal: boolean;
  setOpenAddFormModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingModal = ({ openShoppingModal, setOpenAddFormModal }: Props) => {
  return (
    <Wrapper openShoppingModal={openShoppingModal}>
      <ShoppingList setOpenAddFormModal={setOpenAddFormModal} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  right: 0;
  left: 50px;
  bottom: 0;
  top: 0;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  transform-origin: 0 0;

  transform: ${({ openShoppingModal }: { openShoppingModal: boolean }) =>
    openShoppingModal ? 'scaleX(1)' : 'scaleX(0)'};

  @media (min-width: 800px) {
    transform: scaleX(0);
  }
`;

export default ShoppingModal;
