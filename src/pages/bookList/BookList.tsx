import React from 'react';
import { useGetBookQuery } from '../../store/api/book';

const BookList: React.FC = () => {
  const { data, isLoading } = useGetBookQuery();

  if (isLoading) {
    return <p>Carregando livros...</p>;
  }

  if (!data || !Array.isArray(data.books) || !data.books.every((book: any) => typeof book === 'object')) {
    return <p>Erro: dados da API em formato inesperado.</p>;
  }

  const { books } = data;

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.isbn13}>
            <img src={book.image} alt={book.title} />
            <div>
              <h3>{book.title}</h3>
              <p>{book.subtitle ? book.subtitle : '(No subtitle available)'}</p>
              <p>{book.price}</p>
              <button>Adicionar ao carrinho</button>
              <a href={book.url}>More Info</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
