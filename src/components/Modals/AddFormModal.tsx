import styled from 'styled-components';
import AddItemForm from '../AddItemForm';

interface Props {
  openAddFormModal: boolean;
  setOpenAddFormModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddFormModal = ({ openAddFormModal, setOpenAddFormModal }: Props) => {
  return (
    <Wrapper openAddFormModal={openAddFormModal}>
      <AddItemForm setOpenAddFormModal={setOpenAddFormModal} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 2000;
  right: 0;
  left: 50px;
  bottom: 0;
  top: 0;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  transform-origin: 0 0;

  transform: ${({ openAddFormModal }: { openAddFormModal: boolean }) =>
    openAddFormModal ? 'scaleX(1)' : 'scaleX(0)'};

  @media (min-width: 800px) {
    transform: scaleX(0);
  }
`;

export default AddFormModal;
