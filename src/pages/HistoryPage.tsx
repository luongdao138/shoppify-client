import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import HistoryGroup from '../components/HistoryGroup';
import { SpinnerWrapper } from '../components/ItemDetail/ItemDetail';
import SpinnerFc from '../components/Spinner';
import { getUserShoppingHistory } from '../features/shoppingHistorySlice';
import convertHistoryShopping from '../helpers/convertHistoryShopping';

const HistoryPage = () => {
  const { detail } = useAppSelector((state) => state.user);
  const { loading, list } = useAppSelector((state) => state.shopping_history);
  const dispatch = useDispatch();
  useEffect(() => {
    if (detail) {
      dispatch(getUserShoppingHistory({ user_id: detail._id }));
    }
  }, [dispatch, detail]);

  if (loading) {
    return (
      <SpinnerWrapper style={{ height: '100vh' }}>
        <SpinnerFc width='50px' />
      </SpinnerWrapper>
    );
  }

  return (
    <>
      <Title>Shopping history</Title>
      {convertHistoryShopping(list).map((h, index) => (
        <HistoryGroup key={index} shopping={h} />
      ))}
    </>
  );
};

const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
  color: #34333a;
  margin-bottom: 30px;
`;

export default HistoryPage;
