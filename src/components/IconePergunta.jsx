import imagemPerguntasF from './../assets/seta_play.png'
import quase from './../assets/icone_quase.png'
import erro from './../assets/icone_erro.png'
import acertou from './../assets/icone_certo.png'

export default function IconePergunta(props) {
    const { mostrarPergunta, botaoStatus } = props;
    return (
        <>
            {botaoStatus === 'Erro' && (<img onClick={mostrarPergunta} src={erro} alt='Imagem play das perguntas' />)}
            {botaoStatus === 'Quase acertou' && (<img onClick={mostrarPergunta} src={quase} alt='Imagem play das perguntas' />)}
            {botaoStatus === 'Acertou' && (<img onClick={mostrarPergunta} src={acertou} alt='Imagem play das perguntas' />)}
            {botaoStatus === 'Ainda não respondeu' && (<img onClick={mostrarPergunta} src={imagemPerguntasF} alt='Imagem play das perguntas' />)}
        </>
    )
}