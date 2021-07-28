import { ButtonWrapper, Content, Title, Wrapper } from './CancelListModal';
import ReactDom from 'react-dom';
import { useAppDispatch } from '../../app/hooks';

interface Props {
  openCancelModal: boolean;
  setOpenCancelModal: React.Dispatch<React.SetStateAction<boolean>>;
  cancelListHandler: () => void;
}

const CancelListModal = ({
  openCancelModal,
  setOpenCancelModal,
  cancelListHandler,
}: // cb,
Props) => {
  // const dispatch = useAppDispatch();
  const cancelList = async () => {
    await cancelListHandler();
    setOpenCancelModal(false);
  };

  return !openCancelModal
    ? null
    : ReactDom.createPortal(
        <Wrapper>
          <Content>
            <Title>Are you sure that you want to cancel this list?</Title>
            <ButtonWrapper>
              <button
                className='cancel'
                onClick={() => setOpenCancelModal(false)}
              >
                cancel
              </button>
              <button className='delete' onClick={cancelList}>
                Yes
              </button>
            </ButtonWrapper>
          </Content>
        </Wrapper>,
        document.getElementById('delete-portal') as HTMLElement
      );
};

export default CancelListModal;
