import React from 'react';
import { useRegisterMutation } from '../../store/api/reqres';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import '../auth.css';
import cat from '../../assets/registercat.webp';
import { Link } from 'react-router-dom';

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
     <Header/>
     <main className='render'>
      <section className='form-section'>
        <div className='form-div'>
        <div className='form'>
        <img src={cat} alt='' loading='lazy'/>
        <form onSubmit={handleSubmit} className='auth'>
          <h1> REGISTER</h1>
          <div className='inputs'>
            <label>Email:</label>
            <input type="email" name="email" />
          </div>
          <div className='inputs'>
            <label>Password:</label>
            <input type="password" name="password" />
          </div>
          <button type="submit" className='submit' disabled={isLoading}>Submit</button>
          <Link to='/login' className='link-dom'> Already have an account? <strong> Login</strong></Link>
        </form>
        </div>
        </div>
        </section>
        
    </main>
    <Footer />
    </>
  );
};

export default RegisterForm;
