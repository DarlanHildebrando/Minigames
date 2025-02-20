import { useState } from "react"
import '../styles/App.css'
import { IoIosHome } from "react-icons/io";
import { Link } from "react-router-dom";

function App() {

  const [Local, setLocal] = useState(null)
  const [Personagem, setPersona] = useState('')
  const [ElementSurpresa, setSurpresa] = useState('')
  const [MostrarEmojis, setMostrar] = useState(false)
  const [SortHab, setHabilit] = useState(false)


  const Locais = ["🏝️", "🏙️", "🌌", "🏰", "🏜️", "🕍", "🌲", "🏞️", "🌋", "🏟️", "🚀", "🛸",
    "🗿", "🛶", "⛵", "🚢", "🎢", "🏥", "🏚️", "🛤️", "🕳️"]

  const Personagens = ["🧙‍♂️", "🤠", "👩‍🚀", "🐉", "🦸‍♀️", "👽", "🧟", "🕵️‍♂️", "🦄", "🧛‍♂️", "🤖",
    "👩‍🎤", "👨‍🎨", "👨‍⚖️", "🧝‍♂️", "👩‍🏫", "🦹‍♂️", "👨‍🚒", "🐺", "👸"]

  const ElementoSurpresa = ["🌪️", "🕰️", "🧲", "👻", "🎭", "🚪", "📜", "🔮", "🗡️", "🛡️", "💎", "🧳",
    "🛠️", "💰", "🔑", "🪄", "💥", "🔥", "🧬", "🎩"]



  const Random = () => {


    for (let i = 0; i < 30; i++) {

      setTimeout(() => {

        let LocalSort = Math.floor(Math.random() * Locais.length)
        let PersonaSort = Math.floor(Math.random() * Personagens.length)
        let SurpresaSort = Math.floor(Math.random() * ElementoSurpresa.length)

        setLocal(Locais[LocalSort])
        setPersona(Personagens[PersonaSort])
        setSurpresa(ElementoSurpresa[SurpresaSort])
        setHabilit(true)


      }, i*50)

      setMostrar(true)
      
    }

    setTimeout(() => {

      setHabilit(false)

}, 30 * 50)
  }



  return (
    <>
      <div className="container">

<div className="Top"> 
  <div>
       <Link to='/'> <IoIosHome className="IconHome"/></Link> 
</div>

        <h1 className="Title">Clique em sortear e crie sua história!</h1>
</div>
        <div className="containerImg">

          <div className="divList">

            <li className="List"> {MostrarEmojis ? <>{Local}</> : <> <p style={{margin:0}} className="List"> ❔</p></>} </li>
            <h4>Local</h4>

          </div>

          <div className="divList">

            <li className="List"> {MostrarEmojis ? <>{Personagem}</> : <> <p style={{margin:0}} className="List"> ❔</p></>}</li>
            <h4>Personagem</h4>

          </div>

          <div className="divList">

            <li className="List"> {MostrarEmojis ? <>{ElementSurpresa}</> : <> <p style={{margin:0}} className="List"> ❔</p></>} </li>

            <h4>Elemento surpresa</h4>

          </div>




        </div>

        <div className="divB">

          <button className="B" onClick={Random} disabled={SortHab}>Sortear</button>

        </div>
      </div>
    </>
  )
}

export default App
