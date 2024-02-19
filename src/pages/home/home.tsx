import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import cat from '../../assets/readercat.webp'
import img from '../../assets/sleepycat.webp'
import './home.css';

export default function Home(){
    return(
        <>
        <Header />
        <main className="render"> 
            <section className="intro">
                <div className="intro-container">
                <div className="info">
                    <h1>TECH-CAT BOOKSTORE</h1>
                    <h2> <em> purrrrfect </em> technology books just for <strong> you </strong></h2>
                    <p>
                        
                        Welcome to Tech-Cat, where curiosity meets technology in the purrfect blend! 
                        Owned by a tech-savvy feline, our bookstore offers a unique selection of books to satisfy your inner geek,
                        all curated with a paw-some attention to detail.
                    </p>
                    <a href="#about"><button  aria-label='view more about this webpage' className="intro-btn">KNOW MORE</button></a>
                </div>
                
                    <img src={cat} alt='a ginger cat and a woman on a computer surrounded by books' loading="lazy"/>
                
                </div>
            </section>
            <section id="about" className="about">
                <div className="about-container">
                <img src={img} alt='a ginger cat sleeping on a book beside a computer' loading="lazy"/>
                <div className="about-info">
                <h1>TECH-CAT: the technology bookstore</h1>
                <h2> learn with our tech books!</h2>
                <p>
                    At Tech-Cat, our curated collection of coding and technology books caters to all skill levels. 
                    From beginner-friendly introductions to advanced topics like machine learning and blockchain, 
                    our feline owner ensures you have the resources to succeed. Dive into clear explanations and practical examples, 
                    taking steps towards mastering the digital world with Tech-Cat as your guide.

                </p>
                </div>
                </div>
            </section>
           </main>
        <Footer />
        </>
    )
}