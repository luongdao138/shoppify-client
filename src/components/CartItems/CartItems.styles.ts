import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Label = styled.span`
  font-weight: 500;
  color: #828282;
  font-size: 14px;
  margin-bottom: 10px;
  display: block;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  .name {
    font-size: 18px;
    font-weight: 600;
    margin-right: 10px;

    @media (max-width: 800px) {
      font-size: 14px;
    }
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export const NumberWrapper = styled.div`
  /* background-color: var(--white-color); */
  background-color: transparent;
  display: flex;
  align-items: center;

  border-radius: 12px;
  transition: all 0.25s ease-in-out;
  color: var(--orange-dark);
  .delete {
    display: block;
    border-radius: 12px;
    background: #f9a109;
    padding: 12px;
    svg {
      color: var(--white-color);
    }
  }

  .number {
    border: 2px solid #f9a109;
    border-radius: 24px;
    padding: 8px;
    font-size: 12px;
    font-weight: 700;
    margin: 0 8px;
    white-space: pre;
  }

  .minus {
    margin-left: 8px;
  }

  .add {
    margin-right: 8px;
  }

  .minus,
  .add,
  .delete {
    opacity: 0;
    visibility: hidden;
    transition: all 0.25s ease-in-out;
    cursor: pointer;
  }

  :hover {
    background-color: var(--white-color);
    background-color: ${({ appear }: { appear: boolean }) =>
      appear ? 'var(--white-color)' : 'transparent'};
  }

  :hover .minus {
    opacity: ${({ appear }: { appear: boolean }) => (appear ? 1 : 0)};
    visibility: ${({ appear }: { appear: boolean }) =>
      appear ? 'visible' : 'hidden'};
  }
  :hover .add {
    opacity: ${({ appear }: { appear: boolean }) => (appear ? 1 : 0)};
    visibility: ${({ appear }: { appear: boolean }) =>
      appear ? 'visible' : 'hidden'};
  }

  :hover .delete {
    opacity: ${({ appear }: { appear: boolean }) => (appear ? 1 : 0)};
    visibility: ${({ appear }: { appear: boolean }) =>
      appear ? 'visible' : 'hidden'};
  }
  @media (max-width: 800px) {
    border-radius: 6px;
    .delete {
      padding: 4px;
      border-radius: 6px;
    }

    .number {
      border-radius: 12px;
      padding: 4px;
      font-size: 10px;
      margin: 0 4px;
    }
    .minus {
      margin-left: 4px;
    }

    .add {
      margin-right: 4px;
    }
  }
`;

export const NoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;

  p {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 60px;
  }

  img {
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
    color: #f9a109;
    font-size: 32px;
  }

  text-decoration: ${({ is_selected }: { is_selected: boolean }) =>
    is_selected ? 'line-through' : 'none'};
`;
