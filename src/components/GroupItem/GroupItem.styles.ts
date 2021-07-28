import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 25px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Item = styled.div`
  background-color: var(--white-color);
  border-radius: 12px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  span {
    display: block;
    width: calc(100% - 40px);
    padding: 15px;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.25s ease-in-out;
    :hover {
      color: var(--orange-dark);
    }
  }

  svg {
    font-size: 20px;
    color: #c1c1c4;
    position: absolute;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.25s ease-in-out;
    right: 10px;
    :hover {
      color: var(--orange-dark);
    }
  }
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
`;
