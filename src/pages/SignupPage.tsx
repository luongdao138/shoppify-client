import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  FormGroup,
  Input,
  Label,
} from '../components/AddItemForm/AddItemForm.styles';
import { userSignup } from '../features/userSlice';

interface FormState {
  username: string;
  password: string;
}
const initialFormState: FormState = {
  password: '',
  username: '',
};

const SignupPage = () => {
  const [values, setValues] = useState<FormState>(initialFormState);
  const { error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(userSignup(values));
  };

  return (
    <Wrapper>
      <Content>
        <Title>Signup to shopping</Title>
        <Error>{error && 'Username already taken'}</Error>
        <form onSubmit={handleLogin}>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type='text'
              placeholder='Enter your username'
              style={{ paddingRight: '20px' }}
              name='username'
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type='password'
              placeholder='Enter your password'
              style={{ paddingRight: '20px' }}
              onChange={handleChange}
              name='password'
            />
          </FormGroup>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              margin: '20px 0',
            }}
          >
            <Button type='submit'>Signup</Button>
            <Button
              type='button'
              onClick={() => history.push('/login')}
              style={{ backgroundColor: '#56CCF2' }}
            >
              Login
            </Button>
          </div>
        </form>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  border-radius: 12px;
  width: 400px;
  max-width: 95%;
  background-color: var(--white-color);
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  padding: 20px;

  @media (max-width: 500px) {
    padding: 10px;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  margin: 20px auto;
  text-align: center;
`;

const Button = styled.button`
  background: #f9a109;
  border-radius: 12px;
  color: var(--white-color);
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
`;

const Error = styled.p`
  text-align: center;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 600;
  color: red;
`;

export default SignupPage;
