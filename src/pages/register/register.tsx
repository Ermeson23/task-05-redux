import React from 'react';
import { useRegisterMutation } from '../../store/api/reqres';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

interface RegisterFormProps {}

interface FormValues {
  email: string;
  password: string;
}

const RegisterForm: React.FC<RegisterFormProps> = () => {
  const [register, { isLoading}] = useRegisterMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormValues = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    try {
      await register(formData).unwrap();
      console.log('Registered successfully');
    } catch (error) {
      console.error('Failed to register:', error);
      alert("failed to register, please try again");
    }
  };

  return (
    <>
    <Header />
    <main>
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
    </main>
    <Footer />
    </>
  );
};

export default RegisterForm;
