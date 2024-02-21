import BookSkeleton from '../../components/skeleton/BookSkeleton';
import { BookData, useGetBookQuery } from '../../store/api/book';
import { addItem } from '../../store/api/cartSlice';
import { useDispatch } from 'react-redux';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import './booklist.css'

export default function BookList() {
  const { data, isLoading } = useGetBookQuery();
  const dispatch = useDispatch();

  const handleAddToCart = (product: BookData) => {
    dispatch(addItem({ product: product, quantity: 1 }));
    alert("Adicionado ao carrinho com sucesso.");
  };

  if (isLoading) {
    return <BookSkeleton />
  }

  if (!data || !('books' in data)) {
    return <p>Erro: dados da API em formato inesperado.</p>;
  }

  const books: BookData[] = data.books as BookData[];

  return (
    <>
      <Header />
      <main className='render'>
        <section className='shop-section'>
          <div className='shop-intro'>
            <h1> Nossa Coleção de Livros</h1>
            <p>
              O catálogo da Tech-Cat oferece uma variedade de livros de programação e tecnologia, cuidadosamente selecionados para satisfazer todas as curiosidades.
              De livros iniciantes a guias avançados, embarque em sua jornada tecnológica com nossa seleção perfeita. <Link aria-label='Redireciona para o login' className='log' to='/login '>Faça login</Link> para acessar seu histórico
            </p>
          </div>
          <h2>Lista de Livros</h2>
          <div className='shop-container last-item'>
            {books.map((book: BookData) => (
              <div className='book-card' key={book.isbn13}>
                <img src={book.image} alt={book.title} loading='lazy' />
                <h3>{book.title}</h3>
                <p>{book.subTitle ? book.subTitle : 'Nenhum subtítulo Disponível'}</p>
                <p>{book.price}</p>
                <button aria-label='Adicionar item ao carrinho' onClick={() => handleAddToCart(book)}>Adicionar ao carrinho</button>
              </div>
            ))}
          </div>

        </section>

      </main>
      <Footer />
    </>
  );
};