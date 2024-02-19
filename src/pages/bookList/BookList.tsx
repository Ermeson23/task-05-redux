import { BookData, useGetBookQuery } from '../../store/api/book';
import { addItem } from '../../store/api/cartSlice';
import { useDispatch } from 'react-redux';

export default function BookList() {
  const { data, isLoading } = useGetBookQuery();

  const dispatch = useDispatch();

  const handleAddToCart = (product: BookData) => {
    dispatch(addItem({ product: product, quantity: 1 }));
    alert("Adicionado ao carrinho com sucesso.");
  };

  if (isLoading) {
    return <p>Loading books...</p>;
  }

  if (!data || !Array.isArray(data.books) || !data.books.every((book: any) => typeof book === 'object')) {
    return <p>Erro: API data in unexpected format.</p>;
  }

  const { books } = data;

  return (
    <div>
      <h2>Book List</h2>
      <div>
        {books.map((book: BookData) => (
          <div key={book.isbn13}>
            <img src={book.image} alt={book.title} />
            <div>
              <h3>{book.title}</h3>
              <p>{book.subTitle ? book.subTitle : '(No subtitle available)'}</p>
              <p>{book.price}</p>
              <button onClick={() => handleAddToCart(book)}>Add to cart</button>
              <a href={book.url}>More Info</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};