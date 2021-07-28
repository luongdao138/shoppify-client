import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 50px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.p`
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 500;
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white-color);
  border-radius: 12px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  padding: 20px;
`;

export const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  margin-right: 10px;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const Date = styled.span`
  display: flex;
  align-items: center;
  color: #c1c1c4;
  font-size: 12px;
  font-weight: 500;

  svg {
    font-size: 24px;
    margin-right: 5px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Button = styled.button`
  border: 1px solid #56ccf2;
  background-color: transparent;
  border-radius: 8px;
  padding: 5px;
  font-weight: 500;
  font-size: 14px;
  color: ${({ color }: { color: string }) => color};
  border-color: ${({ color }: { color: string }) => color};
  margin: 0 15px;

  @media (max-width: 700px) {
    font-size: 12px;
    margin: 0 8px;
  }
`;

export const Icon = styled.span`
  color: #f9a109;
  font-size: 20px;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;
