import {Container, Button, Row } from 'reactstrap';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from "next/router";

export default function CheckAnswers() {

  const perguntas = [
  {pergunta:"Maggie is Lisa's _____",op:["Sister","Father","Uncle","Mother"],correct: 0,selected: 5,correctWord:"Sister",answer:""},
  {pergunta:"Bart is Lisa's _____",op:["lalau","Grandfather","Niece","Brother"],correct: 3,selected: 5,correctWord:"Brother",answer:""},  {pergunta:"Homer is Lisa's ____",op:["Mother","Father","Brother","Uncle"],correct: 1,selected: 5,correctWord:"Father",answer:""},
  {pergunta:"Herb is Lisa's _____",op:["Uncle","Grandmother","Father","Sister"],correct: 0,selected: 5,correctWord:"Uncle",answer:""}]
  
   let [vh, setvh] = useState(0); 
   const [pergunta, setpergunta] = useState(perguntas[vh].pergunta);

  async function nextQuestion () {
    if(vh<3){
      setvh(vh=vh+1);
      setpergunta(perguntas[vh].pergunta);
    }
  }

  async function previousQuestion () {
    if(vh>0){
      setvh(vh=vh-1);
      setpergunta(perguntas[vh].pergunta);
    }
  }
  
  return (
          <div>
             <div className='btns_afterLevel '>
               <Button onClick={previousQuestion}> Anterior </Button>
               <Button onClick={nextQuestion}> Próximo </Button>
             </div>
           <div className='result_afterLevel widthResult checkAnswerAlign'>
             <label>{pergunta}</label>
             <div>
               <span>Você respondeu : </span>
               <p>{perguntas[vh].answer}</p>
             </div>
             <div>
               <span>Resposta correta :</span>
               <p>{perguntas[vh].correctAnswer}</p>
             </div>
           </div>
           <Button><Link href='/'>Início</Link></Button>
        </div>     
      
  )
}
