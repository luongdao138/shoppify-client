import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { add } from '../../features/cartSlice';
import { disappear } from '../../features/productDetail';
import DeleteConfirmModal from '../DeleteConfirmModal';
import SpinnerFc from '../Spinner';
import {
  Wrapper,
  DetailGroup,
  Info,
  Label,
  ButtonWrapper,
  SpinnerWrapper,
} from './ItemDetail';

interface Props {
  openDeleteModal: boolean;
  setOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemDetail = ({ openDeleteModal, setOpenDeleteModal }: Props) => {
  const dispatch = useAppDispatch();
  const { detail, loading } = useAppSelector((state) => state.productDetail);
  const { detail: cartDetail, mode } = useAppSelector((state) => state.cart);

  const handleAddCart = () => {
    if (mode === 'completing') {
      alert('Please cancel or complete the current list to add item!');
      return;
    }
    if (cartDetail) {
      const isExist = cartDetail.items.find((x) => x._id === detail._id);
      if (isExist) {
        alert('This product is already in the list!');
        return;
      }
    }

    dispatch(
      add({
        _id: detail._id,
        category: detail.category,
        name: detail.name,
        number: 1,
      })
    );
  };

  if (loading)
    return (
      <SpinnerWrapper>
        <SpinnerFc width='36px' />
      </SpinnerWrapper>
    );
  if (!detail._id) return null;
  return (
    <Wrapper>
      <DeleteConfirmModal
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        product_id={detail._id}
        cb={() => {
          dispatch(disappear());
        }}
      />
      <button className='back' onClick={() => dispatch(disappear())}>
        <HiOutlineArrowNarrowLeft />
        <span>back</span>
      </button>
      {detail.image && <img src={detail.image} alt='' />}
      <DetailGroup>
        <Label>Name</Label>
        <Info fontSize='22px'>{detail.name}</Info>
      </DetailGroup>
      <DetailGroup>
        <Label>Category</Label>
        <Info fontSize='18px'>{detail.category.name}</Info>
      </DetailGroup>
      <DetailGroup>
        <Label>Note</Label>
        <Info fontSize='18px'>{detail.note}</Info>
      </DetailGroup>
      <ButtonWrapper>
        <button
          className='cancel'
          type='button'
          onClick={() => setOpenDeleteModal(true)}
        >
          Delele
        </button>
        <button className='save' type='submit' onClick={handleAddCart}>
          Add to list
        </button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ItemDetail;
