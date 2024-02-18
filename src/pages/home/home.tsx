import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import cat from '../../assets/readercat.webp'
import './home.css';

export default function Home(){
    return(
        <>
        <Header />
        <main> 
            <section className="intro">
                <div className="intro-container">
                <div className="info">
                    <h1>CAT TALES</h1>
                    <h2> <em> purrrrfect </em> technology books just for <strong> you </strong></h2>
                    <p>
                        
                        Welcome to Tech-Cat, where curiosity meets technology in the purrfect blend! 
                        Owned by a tech-savvy feline, our bookstore offers a unique selection of books to satisfy your inner geek,
                        all curated with a paw-some attention to detail.
                    </p>
                </div>
                
                    <img src={cat} alt='a ginger cat and a woman on a computer surrounded by books'/>
                
                </div>
            </section>
            <h1> aqui vai ser a home - /login é a rota de login e /register a de cadastro</h1></main>
        <Footer />
        </>
    )
}