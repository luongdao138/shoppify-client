import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 30px;
`;

export const LabelWrapper = styled.div`
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-right: 10px;
`;

export const Percent = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const PercentWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: #e0e0e0;
  height: 6px;
  width: 100%;

  span {
    position: absolute;
    border-radius: 4px;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${({ width, bg_color }: { width: string; bg_color: string }) =>
      width};
    background-color: ${({
      width,
      bg_color,
    }: {
      width: string;
      bg_color: string;
    }) => bg_color};
  }
`;
