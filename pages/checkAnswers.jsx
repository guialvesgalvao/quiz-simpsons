import {Container, Button, Row } from 'reactstrap';

import Link from 'next/link';
import { useState } from 'react';
import React,{useContext} from "react";
import { GameContext } from '../contexts/GameContext';


export default function CheckAnswers() {

  let [vhr, setvhr] = useState(0); 
  let [maxN, setmaxN] = useState(0);
  let {perguntas,lastLevel,answers}=useContext(GameContext);
  const [pergunta, setpergunta] = useState(perguntas[vhr].pergunta);


  async function nextQuestion () {
    if(vhr<11){
      setvhr(vhr=vhr+1);
      setpergunta(perguntas[vhr].pergunta);
    }
  }

  async function previousQuestion () {
    if(vhr>0){
      setvhr(vhr=vhr-1);
      setpergunta(perguntas[vhr].pergunta);
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
               <p>oi</p>
             </div>
             <div>
               <span>Resposta correta :</span>
               <p>{perguntas[vhr].correctWord}</p>
             </div>
           </div>
           <Button><Link href='/'>Início</Link></Button>
        </div>     
      
  )
  
  
}
