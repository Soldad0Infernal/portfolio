import React from 'react';
import style from './Projetos.module.css';
import doge from "/src/img/doge.webp";

export const Projetos3 = () => {
    const media = [
        '/src/img/doge.webp',
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
                        <iframe width="1260" height="720" src="https://www.youtube.com/embed/XtIBHfOdyX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>) : (
                        <img className={style.media} src={doge} alt="Projeto" />
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
                        <center>
                            <text>Calma lá amigão, essa página ainda está em construção!</text>
                            <br />
                            <br />
                            <text>Volte em breve!</text>
                        </center>
                    </div>
                </center>
            </div>
        </div>
    );
};

export default Projetos3;
