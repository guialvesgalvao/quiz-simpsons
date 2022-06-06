import { createContext, useState } from "react";

export const GameContext = createContext(null);

export function GameProvider({ children }) {

    let [pontos, setpontos] = useState(0);
    var perguntas = [
        {pergunta:"Maggie is Lisa's _____",op:["Sister","Father","Uncle","Mother"],correct: 0,selected: 5,correctWord:"sister",answer:""},
        {pergunta:"Bart is Lisa's _____",op:["Sister","Grandfather","Niece","Brother"],correct: 3,selected: 5,correctWord:"brother",answer:""},
        {pergunta:"Homer is Lisa's _____",op:["Mother","Father","Brother","Uncle"],correct: 1,selected: 5,correctWord:"father",answer:""},
        {pergunta:"Herb is Lisa's _____",op:["Uncle","Grandmother","Father","Sister"],correct: 0,selected: 5,correctWord:"uncle",answer:""},
        {pergunta:"Patty is Lisa's _____",op:["Sister","Grandfather","Aunt","Granddaughter"],correct: 2,selected: 5,correctWord:"aunt",answer:""},{pergunta:"Ling and Lisa are _____",op:["Daughter","Cousins","Mother","Sister"],correct: 1,selected: 5,correctWord:"cousins",answer:""},{pergunta:"Abraham is Lisa's _____",op:["Grandfather","Granddaughter","Father","Uncle"],correct: 0,selected: 5,correctWord:"grandfather",answer:""},{pergunta:"Lisa is Homer's _____",op:["Sister","Father","Brother","Daughter"],correct: 3,selected: 5,correctWord:"daughter",answer:""},{pergunta:"Mona is Lisa's _____",op:["Granddaughter","Mother","Grandmother","Sister"],correct: 2,selected: 5,correctWord:"grandmother",answer:""},{pergunta:"Jackie is Patty's _____",op:["Daughter","Grandmother","Mother","Sister"],correct: 2,selected: 5,correctWord:"mother",answer:""},{pergunta:"Marge and Selma are _____",op:["Daughters","Sisters","Brothers","Cousins"],correct: 1,selected: 5,correctWord:"sisters",answer:""},{pergunta:"Lisa is Herb's _____",op:["Uncle","Niece","Daughter","Sister"],correct: 1,selected: 5,correctWord:"niece",answer:""},{pergunta:"Lisa is Herb's _____",op:["Uncle","Niece","Daughter","Sister"],correct: 1,selected: 5,correctWord:"niece",answer:""}
      ]

      const [answers,setanswers] = useState([
         
      ])

      let [lastLevel,setlastLevel] = useState('');

    return (
        <GameContext.Provider value={{pontos,setpontos,perguntas,answers,setanswers,lastLevel,setlastLevel}}>
            {children}
        </GameContext.Provider> 
    )
}