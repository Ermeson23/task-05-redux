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
      console.log('Usuário cadastrado com successo');
    } catch (error) {
      console.error('Falha ao se cadastrar:', error);
      alert("Falha ao se cadastrar, por favor tente novamente mais tarde");
    }
  };

  return (
    <>
     <Header/>
     <main className='render'>
      <section className='form-section'>
        <div className='form-div'>
        <div className='form'>
        <img src={cat} alt='home office with books, a computer and a cat' loading='lazy'/>
        <form onSubmit={handleSubmit} className='auth'>
          <h1>Cadastro</h1>
          <div className='inputs'>
            <label htmlFor='email'>E-mail:</label>
            <input type="email" name="email" id='email' required/>
          </div>
          <div className='inputs'>
            <label htmlFor='password'>Senha:</label>
            <input type="password" name="password" id='password' required />
          </div>
          <button type="submit" className='submit'  aria-label='submit register info' disabled={isLoading}>Cadastrar-se</button>
          <Link to='/login' className='link-dom' aria-label='redirect to login'> Já tem uma conta? <strong> Faça login</strong></Link>
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
