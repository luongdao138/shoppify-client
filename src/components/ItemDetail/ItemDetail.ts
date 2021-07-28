import styled from 'styled-components';
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 15px 30px;

  @media (max-width: 500px) {
    padding: 12px;
  }

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }

  .back {
    background-color: transparent;
    display: flex;
    align-items: center;
    color: #f9a109;
    font-weight: 600;
    margin-bottom: 20px;

    svg {
      margin-right: 5px;
    }
  }

  img {
    width: 100%;
    margin-bottom: 20px;
    max-height: 400px;
    object-fit: cover;
    border-radius: 24px;
  }
`;

export const DetailGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.p`
  color: #c1c1c4;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Info = styled.p`
  font-size: ${({ fontSize }: { fontSize: string }) => fontSize};
  font-weight: 500;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  .cancel {
    background: transparent;
    font-size: 14px;
    font-weight: bold;
    margin: 0 8px;
  }

  .save {
    padding: 15px 20px;
    margin: 0 8px;
    background: #f9a109;
    border-radius: 12px;
    font-size: 14px;
    font-weight: bold;
    color: var(--white-color);
  }

  @media (max-width: 500px) {
    .save {
      padding: 5px 10px;
      border-radius: 8px;
    }
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;
