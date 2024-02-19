import { BookData, useGetBookQuery } from '../../store/api/book';
import { addItem } from '../../store/api/cartSlice';
import { useDispatch } from 'react-redux';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './booklist.css'

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

  if (!data || !('books' in data)) {
    return <p>Error: API data in unexpected format.</p>;
  }

  const books: BookData[] = data.books as BookData[];

  return (
    <>
    <Header />
    <main className='render'>
      <section className='shop-section'>
       <div className='shop-intro'>
        <h1> OUR BOOK SELECTION</h1>
        <p> 
            Tech-Cat's catalog offers a paw-some array of coding and tech books, carefully curated to satisfy every curiosity.
            From beginner primers to advanced guides, embark on your tech journey with our purr-fect selection.
        </p>
        </div>
        <h2>Book List</h2>
        <div className='shop-container'>
          {books.map((book: BookData) => (
            <div  className='book-card' key={book.isbn13}>
              <img src={book.image} alt={book.title} loading='lazy' />
                <h3>{book.title}</h3>
                <p>{book.subTitle ? book.subTitle : '(No subtitle available)'}</p>
                <p>{book.price}</p>
                <button onClick={() => handleAddToCart(book)}>  Add to cart</button>
                
             
            </div>
          ))}
        </div>

    </section>

    </main>
    <Footer />
    </>
  );
};