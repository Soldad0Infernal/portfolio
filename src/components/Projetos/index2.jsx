import React from 'react';
import style from './Projetos.module.css';
import logo from "/src/img/logo1.png";

export const Projetos2 = () => {
    const media = [
        'src/img/logo1.png',
        'video',
    ];

    const [currentMedia, setCurrentMedia] = React.useState(0);

    const nextMedia = () => {
        setCurrentMedia((prevMedia) => (prevMedia === media.length - 1 ? 0 : prevMedia + 1));
    };

    const previousMedia = () => {
        setCurrentMedia((prevMedia) => (prevMedia === 0 ? media.length - 1 : prevMedia - 1));
    };

    return (
        <div className={style.projetosGeral}>
            <div className={style.projetos}>
                <div className={style.fundo}>
                    {media[currentMedia].endsWith('video') ? (
                        <iframe width="1260" height="720" src="https://www.youtube.com/embed/lbvfYMrC_JM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    ) : (
                        <img className={style.media2} src={logo} alt="Projeto" />
                    )}

                    <div className={style.buttonContainer}>
                        <button className={style.voltar} onClick={previousMedia}>
                            &#60;
                        </button>
                        <button className={style.avançar} onClick={nextMedia}>
                            &#62;
                        </button>
                    </div>
                </div>
                <h1>Descrição:</h1>
                <center><hr /></center>
                <center>
                    <div className={style.texto}>
                        <text> Criado em 2022, o 4Wheels foi um projeto feito em C#, ele é usado para a administração de uma locadora de carros.</text>
                        <br />
                        <br />
                        <text> Este projeto foi feito por uma equipe de 4 pessoas, cujo eu fui responsável pelo design deste projeto e pelo "Read" do projeto.</text>
                    </div>
                </center>
            </div>
        </div>
    );
};

export default Projetos2;
