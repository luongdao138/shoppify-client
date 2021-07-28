import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import AddItemForm from '../components/AddItemForm';
import ShoppingList from '../components/ShoppingList';
import ShoppingModal from '../components/Modals/ShoppingModal';
import Sidebar from '../components/Sidebar';
import AddFormModal from '../components/Modals/AddFormModal';
import ItemDetail from '../components/ItemDetail';
import { useAppSelector } from '../app/hooks';
import DetailModal from '../components/Modals/DetailModal';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [openShoppingModal, setOpenShoppingModal] = useState<boolean>(false);
  const [openAddFormModal, setOpenAddFormModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const { canShow } = useAppSelector((state) => state.productDetail);

  return (
    <Wrapper>
      <ShoppingModal
        setOpenAddFormModal={setOpenAddFormModal}
        openShoppingModal={openShoppingModal}
      />
      <AddFormModal
        openAddFormModal={openAddFormModal}
        setOpenAddFormModal={setOpenAddFormModal}
      />
      <DetailModal
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
      />
      <Sidebar setOpenShoppingModal={setOpenShoppingModal} />
      <ChildrenWrapper>
        <Content>{children}</Content>
      </ChildrenWrapper>
      <SidebarRight>
        {!canShow ? (
          openAddFormModal ? (
            <AddItemForm setOpenAddFormModal={setOpenAddFormModal} />
          ) : (
            <ShoppingList setOpenAddFormModal={setOpenAddFormModal} />
          )
        ) : (
          <ItemDetail
            openDeleteModal={openDeleteModal}
            setOpenDeleteModal={setOpenDeleteModal}
          />
        )}
      </SidebarRight>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const ChildrenWrapper = styled.div`
  margin-left: 94px;
  margin-right: 390px;

  @media (max-width: 1100px) {
    margin-left: 70px;
  }

  @media (max-width: 800px) {
    margin-right: 0;
    margin-left: 50px;
  }
`;

const SidebarRight = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 390px;
  background-color: var(--white-color);
  z-index: 10;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Content = styled.div`
  width: 95%;
  max-width: 680px;
  margin: auto;
  padding: 20px 0;
`;

export default Layout;
