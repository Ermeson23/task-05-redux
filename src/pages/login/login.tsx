import React from 'react';
import { useLoginMutation } from '../../store/api/reqres';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import cat from '../../assets/logincat.webp';
import '../auth.css';
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
      console.log('Usuário logado com sucesso');
      navigate('/logged');
    } catch (error) {
      console.error('Falha ao fazer login:', error);
      alert('Falha ao fazer login');
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
                <img src={cat} alt='home office with books, a computer and a cat' loading='lazy' />
              </div>
              <form onSubmit={handleSubmit} className='auth'>
                <h1> LOGIN</h1>
                <div className='inputs'>
                  <label htmlFor="email">E-mail:</label>
                  <input type="email" name="email" id='email' required/>
                </div>
                <div className='inputs'>
                  <label htmlFor='password'>Senha:</label>
                  <input type="password" name="password" id="password" required/>
                </div>
                <button type="submit" className='submit'  aria-label='submit login info' disabled={isLoading}>Entrar</button>
                <Link to='/register' className='link-dom' aria-label='redirect to register'> Não tem uma conta? <strong> Cadastre-se</strong></Link>
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
