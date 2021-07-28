import styled from 'styled-components';
export const Wrapper = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 500px;
  max-width: 95%;
  background-color: var(--white-color);
  border-radius: 12px;
  padding: 30px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  color: #34333a;
  margin-bottom: 30px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  button {
    margin: 0 10px;
  }
  .cancel {
    background-color: transparent;
    font-weight: 700;
    font-size: 16px;
  }

  .delete {
    background: #eb5757;
    border-radius: 12px;
    padding: 15px;
    color: var(--white-color);
    font-weight: 700;
  }
`;
