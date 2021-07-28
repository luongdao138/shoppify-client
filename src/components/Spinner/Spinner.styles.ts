import styled from 'styled-components';
export const Spinner = styled.div`
  width: ${({ width }: { width: string }) => width};
  height: ${({ width }: { width: string }) => width};
  border-radius: 50%;
  border: 4px solid #bdbdbd;
  border-top: 4px solid var(--orange-dark);
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
