import TelaPrincipal from "./components/TelaPrincipal";
import cards from "./cards.js"

export default function App() {

  return (
    <>
      <TelaPrincipal cards={cards} />
    </>
  )
}
