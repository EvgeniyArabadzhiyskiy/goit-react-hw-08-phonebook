import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userOperations from 'redux/auth/auth-operations';

import { Form, FormInput, FormLabel } from './LoginForm.styled';
import Button from 'components/Button/Button';

const LoginForm = ({ onSaveAndClose }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const submitLogin = async data => {
    const { email, password } = data;

    const response = await dispatch(userOperations.logIn({ email, password }));
    const requestStatus = response.meta.requestStatus;

    if (requestStatus === 'fulfilled') {
      navigate('contacts', { replace: true });
    }

    onSaveAndClose();
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(submitLogin)}>
      <FormLabel>
        Email
        <FormInput type="email" {...register('email')} />
      </FormLabel>
      <FormLabel>
        Password
        <FormInput type="text" {...register('password')} />
      </FormLabel>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
