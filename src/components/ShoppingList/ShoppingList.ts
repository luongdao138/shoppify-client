import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--orange-light);
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  margin: 30px 30px 20px 30px;
  align-items: center;
  background: #80485b;
  border-radius: 24px;
  padding: 15px;

  @media (max-width: 800px) {
    margin: 10px;
  }
  .source {
    width: 100px;
    position: relative;

    img {
      position: absolute;
      width: 60px;
      left: 40%;
      transform: translate(-50%);
      top: -74px;
      @media (max-width: 800px) {
        width: 40px;
        top: -50px;
      }
    }
  }

  .right {
    p {
      font-weight: 700;
      font-size: 16px;
      color: var(--white-color);
      margin-bottom: 10px;
    }

    button {
      background-color: var(--white-color);
      font-weight: bold;
      font-size: 14px;
      color: #34333a;
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
      border-radius: 12px;
      padding: 10px 29px;
    }

    @media (max-width: 800px) {
      p {
        font-size: 14px;
      }

      button {
        padding: 5px 14px;
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h3 {
    font-size: 24px;
    color: #34333a;
  }

  svg {
    color: #34333a;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const CartWrapper = styled.div`
  padding: 0px 30px 0 30px;
  @media (max-width: 800px) {
    padding: 0 10px 0 10px;
  }
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  flex-grow: 1;
`;

export const SaveList = styled.div`
  background-color: var(--white-color);
  height: 80px;
  width: 100%;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    padding: 10px;
  }

  .save {
    position: relative;
    width: 100%;
    input {
      border: ${({ active }: { active?: boolean }) =>
        active ? '2px solid #f9a109' : '2px solid #C1C1C4'};
      box-sizing: border-box;
      border-radius: 12px;
      padding: 10px 90px 10px 15px;
      font-size: 14px;
      font-weight: 500;
      width: 100%;
    }

    button {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 40px;
      border-radius: 12px;
      background: ${({ active }: { active: boolean }) =>
        active ? '#f9a109' : '#C1C1C4'};
      font-size: 12px;
      font-weight: 500;
      color: var(--white-color);
      width: 80px;
    }
  }
`;

export const ButtonContainer = styled.div`
  background-color: var(--white-color);
  height: 80px;
  width: 100%;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 0 10px;
  }

  .cancel {
    background-color: transparent;
    font-weight: 700;
    font-size: 16px;
  }

  .complete {
    background: #56ccf2;
    border-radius: 12px;
    padding: 15px;
    color: var(--white-color);
    font-weight: 700;
  }
`;
