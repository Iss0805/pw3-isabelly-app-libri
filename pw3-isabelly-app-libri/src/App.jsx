import './App.css'
import CardBooks from './components/CardBooks';

function App() {
  

  return (
    // fragment  <>  -> 
   <> 
      {/* <div>
        <h1>
          TESTE DE HELLO WORLD!
        </h1>
      </div> */}
{/* */}
      <CardBooks
      titulo='É assim que acaba'
      autor='Collen Hoover'
      
      />
       <CardBooks
      titulo='É assim que começa'
      autor='Collen Hoover'
      
      />

    <CardBooks
      titulo='Novembro 9'
      autor='Collen Hoover'
      
      />

    <CardBooks
      titulo='Verity'
      autor='Collen Hoover'
      
      />
     
    </>
  )
}

export default App
