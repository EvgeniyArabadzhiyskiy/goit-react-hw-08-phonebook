import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import userOperations from 'redux/auth/auth-operations';

import Button from 'components/Button/Button';
import { Form, FormInput, FormLabel } from './RegisterForm.styled';

const RegisterForm = ({ onSaveAndClose }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const submitRegister = async (data, evt) => {
    const { name, email, password } = data;
    dispatch(userOperations.register({ name, email, password }));

    onSaveAndClose();
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(submitRegister)}>
      <FormLabel>
        User Name
        <FormInput type="text" {...register('name')} />
      </FormLabel>

      <FormLabel>
        Email
        <FormInput type="email" {...register('email')} />
      </FormLabel>

      <FormLabel>
        Password
        <FormInput type="password" {...register('password')} />
      </FormLabel>

      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegisterForm;
