import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;
export const Search = styled.div`
  position: relative;
  @media (max-width: 1000px) {
    width: 100%;
  }

  input {
    background-color: var(--white-color);
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    border: none;
    padding: 10px 10px 10px 35px;
    color: var(--grey-light);
    font-weight: 500;
    min-width: 200px;
    width: 100%;
    font-size: 14px;
  }

  svg {
    position: absolute;
    z-index: 5;
    top: 52%;
    transform: translateY(-50%);
    left: 10px;
  }
`;
export const Title = styled.p`
  margin-right: 20px;
  font-weight: 600;
  font-size: 26px;
  color: #373737;

  span {
    color: var(--orange-dark);
  }

  @media (max-width: 1100px) {
    font-size: 20px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
