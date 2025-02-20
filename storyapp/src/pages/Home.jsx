import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className='ContainerPai'>

<div className='TitlesHome'>
      <h1>Bem vindo(a) aos minigames!</h1>
      <h3>Abaixo, selecione qual deseja jogar:</h3>
</div>
      <div className='ContainerGames'>
      
      <div className='ContainerImgAndName'>

     <Link className='Link' to='/emojis' > 

      <img className='imgFromHome' src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg" alt="" />

      <h4>Crie histórias com emojis</h4>

</Link>
      </div>

      <div>

       <Link to='/dragoes' className='Link'> 

       <img className='imgFromHome' src="https://cdn.pixabay.com/photo/2020/07/02/01/22/cat-5361404_640.jpg" alt="" />
 
       <h4>Batalha de DRAGÕES</h4>  
</Link>
      </div>

      <div>

       <img className='imgFromHome' src="https://www.datageeks.com.br/wp-content/uploads/2024/02/IA-que-Cria-Imagens.webp" alt="" />

      </div>

      </div>

    </div>
  )
}

export default Home
