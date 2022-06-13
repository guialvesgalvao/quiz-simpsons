import { createContext, useState } from "react";

export const GameContext = createContext(null);

export function GameProvider({ children }) {

    let [pontos, setpontos] = useState(0);

     async function shuffleArray(arr) {
        // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
            // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
    }

    var perguntas = [
        {pergunta:"Maggie is Lisa's _____",op:["Sister","Father","Uncle","Mother"],correct: 0,selected: 5,correctWord:"Sister",answer:""},
        {pergunta:"Bart is Lisa's _____",op:["Sister","Grandfather","Niece","Brother"],correct: 3,selected: 5,correctWord:"Brother",answer:""},
        {pergunta:"Homer is Lisa's _____",op:["Mother","Father","Brother","Uncle"],correct: 1,selected: 5,correctWord:"Father",answer:""},
        {pergunta:"Herb is Lisa's _____",op:["Uncle","Grandmother","Father","Sister"],correct: 0,selected: 5,correctWord:"Uncle",answer:""},
        {pergunta:"Patty is Lisa's _____",op:["Sister","Grandfather","Aunt","Granddaughter"],correct: 2,selected: 5,correctWord:"Aunt",answer:""},{pergunta:"Ling and Lisa are _____",op:["Daughter","Cousins","Mother","Sister"],correct: 1,selected: 5,correctWord:"Cousins",answer:""},{pergunta:"Abraham is Lisa's _____",op:["Grandfather","Granddaughter","Father","Uncle"],correct: 0,selected: 5,correctWord:"Grandfather",answer:""},{pergunta:"Lisa is Homer's _____",op:["Sister","Father","Brother","Daughter"],correct: 3,selected: 5,correctWord:"Daughter",answer:""},{pergunta:"Mona is Lisa's _____",op:["Granddaughter","Mother","Grandmother","Sister"],correct: 2,selected: 5,correctWord:"Grandmother",answer:""},{pergunta:"Jackie is Patty's _____",op:["Daughter","Grandmother","Mother","Sister"],correct: 2,selected: 5,correctWord:"Mother",answer:""},{pergunta:"Marge and Selma are _____",op:["Daughters","Sisters","Brothers","Cousins"],correct: 1,selected: 5,correctWord:"Sisters",answer:""},{pergunta:"Lisa is Herb's _____",op:["Uncle","Niece","Daughter","Sister"],correct: 1,selected: 5,correctWord:"Niece",answer:""},{pergunta:"Lisa is Herb's _____",op:["Uncle","Niece","Daughter","Sister"],correct: 1,selected: 5,correctWord:"Niece",answer:""}
      ]

      shuffleArray(perguntas);


      const [answers,setanswers] = useState([
         
      ]);

      let [lastLevel,setlastLevel] = useState('');

    return (
        <GameContext.Provider value={{pontos,setpontos,perguntas,answers,setanswers,lastLevel,setlastLevel}}>
            {children}
        </GameContext.Provider> 
    )
}