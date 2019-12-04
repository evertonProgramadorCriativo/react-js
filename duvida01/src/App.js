import React ,{ useState } from 'react';
import './App.css';
import Person from './Person/Person';


const app = props => {
  //const stateArr = useState({
     const [ personsState, setPersonsState ] = useState ({
        persons: [
          {nome: 'max', idade:28 },
          {nome: 'Manu', idade:24 },
          {nome: 'Stephanie', idade:25 }
      
        ], OtherState : 'some other value'
      });

      const [ OtherState , setOtherState ] = useState('some other value');

      console.log( personsState , OtherState);

      const switchNameHandler = () => {
      
        setPersonsState( {
         persons: [
           {nome: 'Renato', idade:58 },
           {nome: 'Luciana', idade:44 },
           {nome: 'Stephanie', idade:25 }
       
         ]
       } )
       }

      render() {
        return ( 
            <div className="App">
              <h1>Trabalhos em react</h1>
              <button onClick={switchNameHandler}>  Switch Name</button>
            <Person
            nome={personsState.persons[0].nome} 
            idade={personsState.persons[0].idade}/>
            <Person
              nome={personsState.persons[1].nome} 
              idade={personsState.persons[1].idade}
              click={this.switchNameHandler} > Meu Hobbies : joga bola</Person>
            <Person
              nome={personsState.persons[2].nome}
              idade={personsState.persons[2].idade}/>
            </div>
        
        )
        }

}

export default App;
/*user {} para conteudos dinamicos  */



