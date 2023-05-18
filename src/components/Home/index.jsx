import React from 'react';
import style from './Home.module.css';
import { Link } from 'react-router-dom';
import yo from "/src/img/yo.jpg";
import linkedin from "/src/img/linkedin.png";
import instagram from "/src/img/instagram.png";
import github from "/src/img/github.png";
import telefone from "/src/img/telefone.png";
import email from "/src/img/e-mail.png";
import loc from "/src/img/loc.png";
import html5 from "/src/img/html5.png";
import css from "/src/img/css-3.png";
import js from "/src/img/js.png";
import logo from "/src/img/logo.png";
import logo1 from "/src/img/logo1.png";
import logo2 from "/src/img/logo2.png";
import mysql from "/src/img/mysql.png";
import node from "/src/img/nodejs.png";
import react from "/src/img/react.png";

export const Home = () => {
    return (
        <div className={style.geral}>
            <div className={style.info}>
                <center><img src={yo} className={style.eu} /></center>
                <center>
                    <h2 className={style.cargo}>Desenvolvedor</h2>
                </center>
                <center><a href="https://www.linkedin.com/in/kau%C3%AA-jer%C3%B4nimo-aaa710226/">
                    <button className={style.redes}>
                        <img src={linkedin} />
                    </button>
                </a>
                    <a href="https://www.instagram.com/kaue_jrnm/">
                        <button className={style.redes}>
                            <img src={instagram} />
                        </button>
                    </a>
                    <a href="https://github.com/Soldad0Infernal">
                        <button className={style.redes}>
                            <img src={github} />
                        </button>
                    </a></center>
                <center>
                    <div className={style.contato}>
                        <div className={style.contatoIcons}>
                            <img src={telefone} />
                            <h3>Telefone:</h3>

                        </div>
                        <p className={style.icons}>(11) 94024-9293</p>

                        <hr className={style.linha} />
                        <div className={style.contatoIcons}>
                            <img src={email} />
                            <h3>Email:</h3>

                        </div>
                        <p className={style.icons}>kauejeronimo@gmail.com</p>
                        <hr className={style.linha} />
                        <div className={style.contatoIcons}>
                            <img src={loc} />
                            <h3>Localização:</h3>

                        </div>
                        <p className={style.icons}>Santana de Parnaíba, SP</p>
                        <hr className={style.linha} />
                    </div>
                    <a href="/src/docs/curriculo.pdf" download>
                        <button className={style.curriculo}>Download Currículo</button>
                    </a>

                </center>
            </div>
            <div className={style.conteudo}>
                <h1>Sobre mim</h1>
                <hr />
                <text>Olá, sou Kauê Jerônimo da Silva, um desenvolvedor web que trabalha com as tecnologias mais utilizadas na web, como HTML, CSS, Node.js, React e MySQL. Desenvolvo sites, aplicativos da web e outras soluções digitais para empresas que desejam melhorar sua presença online e atingir seu público-alvo. Com minha experiência e habilidades em desenvolvimento web, busco ajudar meus clientes a obterem sucesso na internet.<br /><br /></text>
                <text>Iniciei minha carreira em desenvolvimento web aprendendo HTML e CSS. Depois, fui para JavaScript e outras tecnologias. Agora, estou estudando Node.js, React e MySQL. Sempre busco me atualizar para acompanhar as tendências e novidades na área.<br /><br /><br /></text>

                <h1>Tecnologias</h1>
                <hr />
                <center>
                    <div className={style.tecnologias}>
                        <img src={html5} className={style.icones} />
                        <h2>HTML5</h2>
                        <p>Software development</p>
                    </div>

                    <div className={style.tecnologias}>
                        <img src={css} className={style.icones} />
                        <h2>CSS3</h2>
                        <p>Software development</p>
                    </div>
                </center>


                <center>
                    <div className={style.tecnologias}>
                        <img src={js} className={style.icons} />
                        <h2>JavaScript</h2>
                        <p>Software development</p>
                    </div>

                    <div className={style.tecnologias}>
                        <img src={node} className={style.icons} />
                        <h2>Node.js</h2>
                        <p>Software development</p>
                    </div>
                </center>


                <center>
                    <div className={style.tecnologias}>
                        <img src={mysql} className={style.icons} />
                        <h2>MySQL</h2>
                        <p>Software development</p>
                    </div>

                    <div className={style.tecnologias}>
                        <img src={react} className={style.icons} />
                        <h2>React</h2>
                        <p>Software development</p>
                    </div>
                </center>
                <br />
                <br />
                <h1>Projetos</h1>
                <hr />

                <div className={style.btnProjetos}>

                    <button className={style.btnProjetos1}>
                        <Link to="/Projetos1">
                            <img src={logo} alt="" />
                        </Link>
                    </button>

                    <button className={style.btnProjetos2}>
                        <Link to="/Projetos2">
                            <img src={logo1} alt="" />
                        </Link>
                    </button>

                    <button className={style.btnProjetos3}>
                        <Link to="/Projetos3">
                            <img src={logo2} alt="" />
                        </Link>
                    </button>



                </div>

            </div>
        </div >
    );
};

export default Home;