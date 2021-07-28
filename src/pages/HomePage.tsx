import { useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import GroupItem from '../components/GroupItem';
import Header from '../components/Header';
import SpinnerFc from '../components/Spinner';
import { getAllProducts } from '../features/productSlice';
import convertProducts from '../helpers/convertProducts';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const {
    list,
    loading: { fetch },
  } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <Header />
      {fetch ? (
        <SpinnerWrapper>
          <SpinnerFc width='36px' />
        </SpinnerWrapper>
      ) : (
        <>
          {convertProducts(list).map((pc, index) => (
            <GroupItem key={index} products_cat={pc} />
          ))}
        </>
      )}
    </>
  );
};

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  height: 100%;
`;

export default HomePage;
