import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 15px 30px;
  position: relative;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const Title = styled.h4`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 15px;
`;
export const FormGroup = styled.div`
  margin-bottom: 10px;
  .input {
    position: relative;
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 12px;
      cursor: pointer;
      color: #828282;
      transition: all 0.25s;

      opacity: 0;
      visibility: hidden;
    }

    :hover svg {
      opacity: 1;
      visibility: visible;
    }
  }
`;
export const Label = styled.p`
  color: #34333a;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  border-radius: 12px;
  border: 2px solid #bdbdbd;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  padding: 12px;
  padding-right: 35px;

  ::placeholder {
    color: #bdbdbd;
  }

  :focus {
    border: 2px solid #f9a109;
  }

  :focus ~ svg {
    opacity: 1;
    visibility: visible;
  }
`;
export const Textarea = styled.textarea`
  border-radius: 12px;
  border: 2px solid #bdbdbd;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  padding: 12px;
  resize: none;
  outline: none;
  height: 80px;

  ::placeholder {
    color: #bdbdbd;
  }

  :focus {
    border: 2px solid #f9a109;
  }
`;

export const CategoryWrapper = styled.ul`
  background-color: var(--white-color);
  border-radius: 12px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
  border: 1px solid #e0e0e0;
  padding: 5px;
  margin-bottom: 20px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  z-index: 100;
  width: 100%;
  margin-top: 5px;
`;
export const CategoryItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  padding: 10px;
  color: #828282;
  transition: all 0.25s ease-in-out;
  border-radius: 8px;

  :hover {
    background-color: #f2f2f2;
    color: #34333a;
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

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
    transition: all 0.25s;
  }

  @media (max-width: 500px) {
    .save {
      padding: 5px 10px;
      border-radius: 8px;
    }
  }
`;
