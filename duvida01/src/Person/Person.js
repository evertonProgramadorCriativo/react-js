import React from 'react';



const person = ( props ) => {
return (
        <div>    
             <p onClick={props.click}> I'm a{props.nome}!!! {props.idade} anos de vida</p>
              <p>{props.children}</p>
        </div>
     )
};
/*
const person = () => {
    return <p> I'm a Person!!! {Math.floor(Math.random() * 30 )} anos de vida</p>
} ;

*/
export default  person;