import moment from 'moment';
import { useEffect } from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { RiCalendarTodoFill } from 'react-icons/ri';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { SpinnerWrapper } from '../components/ItemDetail/ItemDetail';
import SpinnerFc from '../components/Spinner';
import { getShoppingDetail } from '../features/shoppingDetail';
import convertCart from '../helpers/convertCart';

const ShoppingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { list, loading, shopping_list_info } = useAppSelector(
    (state) => state.shopping_detail
  );
  const history = useHistory();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getShoppingDetail({ id }));
  }, [id]);

  if (loading) {
    return (
      <SpinnerWrapper style={{ height: '100vh' }}>
        <SpinnerFc width='50px' />
      </SpinnerWrapper>
    );
  }

  return (
    <>
      <Button onClick={() => history.push('/history')}>
        <HiOutlineArrowNarrowLeft />
        <span>back</span>
      </Button>
      <Title>{shopping_list_info.name}</Title>
      <Date>
        <RiCalendarTodoFill />
        <span>
          {moment(shopping_list_info.createdAt).format('ddd DD.M.yyyy')}
        </span>
      </Date>
      {convertCart(list).map((p, index) => {
        return (
          <Group key={index}>
            <Label>{p.category_name}</Label>
            <Container>
              {p.items.map((x, _index) => {
                return (
                  <Item key={x._id}>
                    <span className='label'>{x.name}</span>
                    <span className='number'>{x.number}pcs</span>
                  </Item>
                );
              })}
            </Container>
          </Group>
        );
      })}
    </>
  );
};

const Button = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  color: #f9a109;
  font-weight: 600;
  margin-bottom: 20px;

  svg {
    margin-right: 5px;
  }
`;
const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 18px;
`;
const Date = styled.span`
  display: flex;
  align-items: center;
  color: #c1c1c4;
  font-size: 12px;
  font-weight: 500;

  svg {
    font-size: 24px;
    margin-right: 5px;
  }
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
`;

const Group = styled.div`
  margin-bottom: 30px;
`;
const Label = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
`;
const Item = styled.div`
  background-color: var(--white-color);
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    font-weight: 500;
    font-size: 16px;
    margin-right: 15px;
  }

  .number {
    font-size: 12px;
    font-weight: 500;
    color: #f9a10a;
  }

  @media (max-width: 500px) {
    .label {
      font-size: 14px;
    }
  }
`;

export default ShoppingDetail;
