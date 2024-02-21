
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { PurchaseItem } from '../../store/api/historySlice';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';
import './logged.css';
const Logged: React.FC = () => {
    const purchaseHistory = useSelector((state: RootState) => state.history.purchases);


    console.log('Histórico de Compras:', purchaseHistory);
  
    return (
    <>
    <Header />
      <main className='render'>
        <section className='logged'>
          <div className='welcome'>
            <h1> BEM VINDO A AREA LOGADA</h1>
        <h2> ACESSO RÁPIDO</h2>
        <div className='eas'>
        <Link to='/books'><button className='easy'>LOJA</button></Link>
        <Link to='/books'><button className='easy'>CARRINHO</button></Link>
        </div>
        </div>
      <div>
        <h2>Livros Comprados</h2>
        
        
          {purchaseHistory.map((purchase: PurchaseItem, index: number) => (
            <div className={`bought ${index === purchaseHistory.length - 1 ? 'last-item' : ''}`} key={index}>
              
             <p> Título: {purchase.title}</p>
             <p> Quantidade: {purchase.quantity}</p> 
            
            </div>
          ))}
        
      </div>
      </section>
      </main>
      <Footer />
      </>
    );
    
  };

export default Logged;
