import { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { SpinnerWrapper } from '../components/ItemDetail/ItemDetail';
import LineChartFc from '../components/LineChart';
import SpinnerFc from '../components/Spinner';
import StatsItem from '../components/StatsItem';
import { getShoppingWithDetails } from '../features/statsSlice';
import { converToChartData, convertTop } from '../helpers/convertStats';

/**
 
  [
    {
     month: 'January',
     total_items: 120 
    },
    {
     month: 'February',
     total_items: 70 
    }
]
 
 */

const StatsPage = () => {
  const dispatch = useAppDispatch();
  const { detail } = useAppSelector((state) => state.user);
  const { list, loading } = useAppSelector((state) => state.stats);
  const stats = useMemo(() => convertTop(list), [list]);
  const chartData = useMemo(() => converToChartData(list), [list]);

  useEffect(() => {
    if (detail) {
      dispatch(getShoppingWithDetails({ user_id: detail?._id }));
    }
  }, [detail?._id]);

  if (loading) {
    return (
      <SpinnerWrapper style={{ height: '100vh' }}>
        <SpinnerFc width='50px' />
      </SpinnerWrapper>
    );
  }

  return (
    <>
      {stats.total_items > 0 && (
        <StatsWrapper>
          <Stats>
            <Label>Top items</Label>
            {stats.items
              .sort((a, b) => {
                return b.value - a.value;
              })
              .slice(0, 3)
              .map((x) => {
                return (
                  <StatsItem
                    key={x.info._id}
                    bg_color='#F9A109'
                    label={x.info.name}
                    percent={Math.round((x.value * 100) / stats.total_items)}
                  />
                );
              })}
          </Stats>
          <Stats>
            <Label>Top categories</Label>
            {stats.categories
              .sort((a, b) => {
                return b.value - a.value;
              })
              .slice(0, 3)
              .map((x) => {
                return (
                  <StatsItem
                    key={x.info._id}
                    bg_color='#56CCF2'
                    label={x.info.name}
                    percent={Math.round((x.value * 100) / stats.total_items)}
                  />
                );
              })}
          </Stats>
        </StatsWrapper>
      )}
      {chartData.length > 0 && (
        <>
          <Label>Monthly Summary</Label>
          <LineChartFc
            data={chartData.sort((a, b) => a.month.number - b.month.number)}
          />
        </>
      )}
    </>
  );
};

const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 60px;

  @media (max-width: 500px) {
    gap: 0px;
  }
`;

const Stats = styled.div`
  width: 100%;
`;

const Label = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin: 20px 0;
`;

export default StatsPage;
