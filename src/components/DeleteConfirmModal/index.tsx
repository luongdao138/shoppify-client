import { ButtonWrapper, Content, Title, Wrapper } from './DeleteConfirmModal';
import ReactDom from 'react-dom';
import { useAppDispatch } from '../../app/hooks';
import { deleteProduct } from '../../features/productSlice';
interface Props {
  openDeleteModal: boolean;
  setOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  product_id: string;
  cb: () => void;
}

const DeleteConfirmModal = ({
  openDeleteModal,
  product_id,
  setOpenDeleteModal,
  cb,
}: Props) => {
  const dispatch = useAppDispatch();
  const removeProduct = async () => {
    await dispatch(deleteProduct({ id: product_id }));
    setOpenDeleteModal(false);
    cb();
  };

  return !openDeleteModal
    ? null
    : ReactDom.createPortal(
        <Wrapper>
          <Content>
            <Title>Are you sure that you want to delete this product?</Title>
            <ButtonWrapper>
              <button
                className='cancel'
                onClick={() => setOpenDeleteModal(false)}
              >
                cancel
              </button>
              <button className='delete' onClick={removeProduct}>
                Delete
              </button>
            </ButtonWrapper>
          </Content>
        </Wrapper>,
        document.getElementById('delete-portal') as HTMLElement
      );
};

export default DeleteConfirmModal;
