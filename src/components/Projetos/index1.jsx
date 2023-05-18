import React from 'react';
import style from './Projetos.module.css';
import logo from "/src/img/logo.png";

export const Projetos1 = () => {
    const media = [
        'src/img/logo.png',
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
                        <iframe width="1260" height="720" src="https://www.youtube.com/embed/igsHn1zz2DM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    ) : (
                        <img className={style.media} src={logo} alt="Projeto" />
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
                        <text>O site Confeitaria Dolce Vita foi um site criado em 2021, utilizando da linguagem HTML juntamente ao CSS básico, criado com o intuito de testar nossas capacidades de manipulação do HTML.</text>
                        <br />
                        <br />
                        <text>Neste trabalho fui responsável pelo design do site, apesar do pouco conhecimento sobre as linguagens HTML na época.</text>
                    </div>
                </center>
            </div>
        </div>
    );
};

export default Projetos1;
