import {
  ButtonContainer,
  CartWrapper,
  Header,
  SaveList,
  Title,
  Wrapper,
} from './ShoppingList';
import source from '../../assets/source.svg';
import { HiPencil } from 'react-icons/hi';
import CartItems from '../CartItems';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import {
  changeMode,
  reset,
  saveDraftList,
  updateDraftList,
} from '../../features/cartSlice';
import SpinnerFc from '../Spinner';
import CancelListModal from '../CancelListModal';

interface Props {
  setOpenAddFormModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingList = ({ setOpenAddFormModal }: Props) => {
  const handleOpenAddForm = (): void => {
    setOpenAddFormModal(true);
  };
  const dispatch = useAppDispatch();
  const [openCancelModal, setOpenCancelModal] = useState<boolean>(false);
  const {
    detail,
    mode,
    loading: { fetch },
  } = useAppSelector((state) => state.cart);
  const { detail: user } = useAppSelector((state) => state.user);
  const [name, setName] = useState<string>(detail?.name || '');

  useEffect(() => {
    setName(detail?.name || '');
  }, [detail?.name]);

  const handleSaveDraft = () => {
    if (
      !(detail !== null && detail.items.length > 0 && name.trim().length > 2)
    ) {
      return;
    }
    if (!detail?._id) {
      // add draft list
      const data = {
        user: user?._id,
        name,
        items: detail?.items.map((c) => ({
          ...c,
          category: c.category._id,
        })),
      };
      dispatch(saveDraftList(data));
    } else {
      // update draft list
      const updateData = {
        name,
        items: detail?.items.map((c) => ({
          ...c,
          category: c.category._id,
        })),
        status: 0,
      };
      dispatch(updateDraftList({ updateData, _id: detail._id }));
    }
  };

  const handleEditMode = () => {
    if (mode === 'completing') {
      dispatch(changeMode());
    }
  };

  const hanldeUpdateStatus = async (status: number) => {
    if (detail && status === 2) {
      if (detail.selectedItems.length === 0) {
        alert('You have not selected any items yet!');
        return;
      }
      const updateData = {
        name,
        items: detail?.selectedItems.map((c) => ({
          ...c,
          category: c.category._id,
        })),
        status,
      };

      await dispatch(updateDraftList({ updateData, _id: detail._id }));
      dispatch(reset());
      setName('');
    }
    if (detail && status === 1) {
      setOpenCancelModal(true);
    }
  };

  const cancelListHandler = async () => {
    if (detail) {
      const updateData = {
        name,
        items: detail?.items.map((c) => ({
          ...c,
          category: c.category._id,
        })),
        status: 1,
      };

      await dispatch(updateDraftList({ updateData, _id: detail._id }));
      dispatch(reset());
      setName('');
    }
  };

  return (
    <Wrapper>
      <CancelListModal
        openCancelModal={openCancelModal}
        setOpenCancelModal={setOpenCancelModal}
        cancelListHandler={cancelListHandler}
      />
      <Header>
        <div className='source'>
          <img src={source} alt='' />
        </div>
        <div className='right'>
          <p>Didn't find what you need?</p>
          <button onClick={handleOpenAddForm}>Add item</button>
        </div>
      </Header>
      {fetch ? (
        <CartWrapper>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '50px',
            }}
          >
            <SpinnerFc width='36px' />
          </div>
        </CartWrapper>
      ) : (
        <CartWrapper>
          {detail !== null && detail.items.length > 0 && (
            <Title>
              <h3>Shopping list</h3>
              <HiPencil onClick={handleEditMode} />
            </Title>
          )}
          <CartItems />
        </CartWrapper>
      )}
      {!fetch &&
        (mode === 'editting' ? (
          <SaveList
            active={
              detail !== null &&
              detail.items.length > 0 &&
              name.trim().length > 2
            }
          >
            <div className='save'>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button onClick={handleSaveDraft}>Save</button>
            </div>
          </SaveList>
        ) : (
          <ButtonContainer>
            <button className='cancel' onClick={() => hanldeUpdateStatus(1)}>
              cancel
            </button>
            <button className='complete' onClick={() => hanldeUpdateStatus(2)}>
              Complete
            </button>
          </ButtonContainer>
        ))}
    </Wrapper>
  );
};

export default ShoppingList;
