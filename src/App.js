import {useState} from "react"

function App() {
    const[todos,settodos]=useState([
      {tache:"aller au marche"},
      {tache:"aller a l'ecole"},
      {tache:"faire la lessive"},
    ]);
    const[value,setvalue]=useState("")

    const traitementform=e =>{
     e.preventDefault();

     if(!value)return;
      const newtodo=[...todos,{tache:value}]
      settodos(newtodo);
      setvalue('')
      
    };
    
    

    return (
      <div>
         <form onSubmit={traitementform}>
          <input type="text" value={value} onChange={e=>setvalue(e.target.value)} placeholder="entrez votre tache"
          />
         </form>
          <hr/>
          <h2> liste de tache ajoutee </h2>
          {todos.map (todo=> (
              <div> {todo.tache} </div>
            ))
          }
       
       

      </div>
  );
}

export default App;
