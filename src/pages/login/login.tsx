import React from 'react';
import { useLoginMutation } from '../../store/api/reqres';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

interface LoginFormProps {}

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [login, { isLoading }] = useLoginMutation();

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
      alert('Failed to login');
    }
  };

  return (
    <>
     <Header/>
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
    </form>
    <Footer />
    </>
  );
};

export default LoginForm;
