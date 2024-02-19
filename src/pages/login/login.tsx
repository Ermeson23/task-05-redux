import React from 'react';
import { useLoginMutation } from '../../store/api/reqres';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import cat from '../../assets/logincat.webp';
import '../auth.css'; //styles for login and register
import { Link } from 'react-router-dom';

interface LoginFormProps {}

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormValues = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    try {
      await login(formData);
      console.log('Logged in successfully');
      navigate('/books');
    } catch (error) {
      console.error('Failed to login:', error);
      alert('Failed to login');
    }
  };

  return (
    <>
      <Header />
      <main className='render'>
        <section className='form-section'>
          <div className='form-div'>
            <div className='form'>
              <div className='image'>
                <img src={cat} alt='' loading='lazy' />
              </div>
              <form onSubmit={handleSubmit} className='auth'>
                <h1> LOGIN</h1>
                <div className='inputs'>
                  <label>Email:</label>
                  <input type="email" name="email" />
                </div>
                <div className='inputs'>
                  <label>Password:</label>
                  <input type="password" name="password" />
                </div>
                <button type="submit" className='submit' disabled={isLoading}>Submit</button>
                <Link to='/register' className='link-dom'> Don't have an account? <strong> Sign up</strong></Link>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoginForm;
