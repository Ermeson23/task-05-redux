import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import cat from '../../assets/readercat.webp'
import img from '../../assets/sleepycat.webp'
import './home.css';

export default function Home() {
    return (
        <>
            <Header />
            <main className="render">
                <section className="intro">
                    <div className="intro-container">
                        <div className="info">
                            <h1>Livraria TECH-CAT</h1>
                            <h2> <em> Livros de tecnologia <strong> perfeitos </strong> especialmente para <strong> você </strong> </em> </h2>
                            <p>

                                Bem-vindo ao Tech-Cat, onde a curiosidade encontra a tecnologia na mistura perfeita!
                                De propriedade de um felino experiente em tecnologia, nossa livraria oferece uma seleção única de livros para satisfazer seu nerd interior,
                                tudo com uma atenção aos detalhes.
                            </p>
                            <a href="#about"><button aria-label='view more about this webpage' className="intro-btn">SAIBA MAIS</button></a>
                        </div>

                        <img src={cat} alt='a ginger cat and a woman on a computer surrounded by books' loading="lazy" />

                    </div>
                </section>
                <section id="about" className="about">
                    <div className="about-container">
                        <img src={img} alt='a ginger cat sleeping on a book beside a computer' loading="lazy" />
                        <div className="about-info">
                            <h1>TECH-CAT: A Livraria de Tecnologia</h1>
                            <h2> Aprenda com nossos livros de tecnologia!</h2>
                            <p>
                                Na Tech-Cat, nossa coleção com curadoria de livros de codificação e tecnologia atende a todos os níveis de habilidade.
                                De introduções amigáveis para iniciantes a tópicos avançados, como aprendizado de máquina e blockchain,
                                Nosso dono felino garante que você tenha os recursos para ter sucesso. Mergulhe em explicações claras e exemplos práticos,
                                dando passos para dominar o mundo digital com o Tech-Cat como seu guia.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}