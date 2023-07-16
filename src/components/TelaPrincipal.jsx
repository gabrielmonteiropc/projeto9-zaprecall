import logo from './../assets/logo.png'
import CartasTelaPrincipal from './CartasTelaPrincipal'
import Footer from './Footer';
import styled from 'styled-components'

export default function TelaPrincipal(props) {

    const { cards } = props;

    return (

        <Tela>

            <Logo>

                <img src={logo} alt='Logo-principal' />
                <h1>ZapRecall</h1>

            </Logo>

            {cards.map((card, indice) => <CartasTelaPrincipal key={card.question} indice={indice} card={card} />)}


            <Footer />

        </Tela>

    );
}

const Tela = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
        width: 52px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`;