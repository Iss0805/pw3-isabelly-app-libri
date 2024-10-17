import './App.css'

import { BrowserRouter, Routes , Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Container from './components/layout/Container';
import ListBooks from './components/pages/ListBooks';
import CreateBooks from './components/pages/CreateBooks';
 import CardBooks from './components/CardBooks';
import Home from './components/pages/Home';

//importa o arquivo de imagem da capa do livro

// import capaLivro from './assets/livross/acaba.jpg'
// import capaLivro2 from './assets/livross/comeca.jpg'
// import capaLivro3 from './assets/livross/november.jpg'
// import capaLivro4  from './assets/livross/verity.jpg'

function App() {
  

  return (
    // fragment  <>  -> 
   <> 
  {/* ESTRURURA DE NAVEGAÇÃO */}
    <BrowserRouter>
      
      <Container>
        <Routes>

           <Route path='/' element={<NavBar/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/listBooks' element={<ListBooks/>}/>
              <Route path='/createBooks' element={<CreateBooks/>}/>
              


        </Route>

        </Routes>

      </Container>

    </BrowserRouter>































    {/* <h1>TESTE</h1> */}

    {/* <NavBar/>
   

    <Container> 
     <Home/>
    <ListBooks/> 
    <CreateBooks/>
   
    </Container>*/}

    



      {/* <div>
        <h1>
          TESTE DE HELLO WORLD!
        </h1>
      </div> */}
{/* */}
      {/* <CardBooks
      imagem={capaLivro}
      titulo='É assim que acaba'
      autor='Collen Hoover'
      
      />
       <CardBooks
      imagem={capaLivro2}
      titulo='É assim que começa'
      autor='Collen Hoover'
      
      />

    <CardBooks
      imagem={capaLivro3}
      titulo='Novembro 9'
      autor='Collen Hoover'
      
      />

    <CardBooks
      imagem={capaLivro4}
      titulo='Verity'
      autor='Collen Hoover'
      
      /> */}
     
    </>
  )
}

export default App
