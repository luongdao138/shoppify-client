import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import ItemDetail from '../ItemDetail';

interface Props {
  openDeleteModal: boolean;
  setOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailModal = ({ openDeleteModal, setOpenDeleteModal }: Props) => {
  const { canShow } = useAppSelector((state) => state.productDetail);

  return (
    <Wrapper canShow={canShow}>
      <ItemDetail
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 500;
  right: 0;
  left: 50px;
  bottom: 0;
  top: 0;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  transform-origin: 0 0;

  transform: ${({ canShow }: { canShow: boolean }) =>
    canShow ? 'scaleX(1)' : 'scaleX(0)'};

  @media (min-width: 800px) {
    transform: scaleX(0);
  }
`;

export default DetailModal;
