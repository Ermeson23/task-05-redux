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
                    <h2> <em> purrrrfect </em> books just for <strong> you </strong></h2>
                    <p>
                    Welcome to Cat Tales, where every book holds a purr-fect adventure just waiting to be discovered. 
                    Curl up with a cozy tale and let your imagination roam free in the world of whiskers and wonder.
                    </p>
                </div>
                
                    <img src={cat} alt='a ginger cat sleeping on a pile of books'/>
                
                </div>
            </section>
            <h1> aqui vai ser a home - /login é a rota de login e /register a de cadastro</h1></main>
        <Footer />
        </>
    )
}