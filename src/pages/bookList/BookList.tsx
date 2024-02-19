import React from 'react';
import { BookData, useGetBookQuery } from '../../store/api/book';
import { addItem } from '../../store/api/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Header from '../../components/header/header';

const BookList: React.FC = () => {
  const { data, isLoading } = useGetBookQuery();

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  console.log("Estado inicial do carrinho:", cartItems);

  const handleAddToCart = (product: BookData) => {
    dispatch(addItem({ product: product, quantity: 1 }));
    alert("Adicionado ao carrinho com sucesso.");
    console.log("Estado atual do carrinho:", cartItems);
  };

  if (isLoading) {
    return <p>Carregando livros...</p>;
  }

  if (!data || !Array.isArray(data.books) || !data.books.every((book: any) => typeof book === 'object')) {
    return <p>Erro: dados da API em formato inesperado.</p>;
  }

  const { books } = data;

  return (
    <div>
      <Header />
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.isbn13}>
            <img src={book.image} alt={book.title} />
            <div>
              <h3>{book.title}</h3>
              <p>{book.subtitle ? book.subtitle : '(No subtitle available)'}</p>
              <p>{book.price}</p>
              <button onClick={() => handleAddToCart(book.isbn13)}>Adicionar ao carrinho</button>
              <a href={book.url}>More Info</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
