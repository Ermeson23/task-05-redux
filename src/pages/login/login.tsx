import React from 'react';
import { useLoginMutation } from '../../store/api/reqres'

interface LoginFormProps {}

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [login, { isLoading, isError }] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormValues = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    try {
      await login(formData); 
      console.log('Logged in successfully');
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" />
      </div>
      <button type="submit" disabled={isLoading}>Submit</button>
      {isError && <span>Failed to login. Please check your credentials.</span>}
    </form>
  );
};

export default LoginForm;
