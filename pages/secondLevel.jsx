import {Container, Button, Row } from 'reactstrap';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import family_tree from '../public/family_tree.png';
import React,{useContext} from "react";
import { GameContext } from '../contexts/GameContext';

export default function SecondLevel() {
  const {perguntas}=useContext(GameContext);

 let [textBox,settextBox] = useState('');
 let [vh, setvh] = useState(6);
 let [pontos, setpontos] = useState(0);
 const [pergunta, setpergunta] = useState(perguntas[vh].pergunta);

 const router = useRouter();
 if(vh>11){
   router.push('/afterLevel');
 }

 async function checkAnswer () {
   let respostaUser = textBox.toLowerCase();
   let gabarito = perguntas[vh].correctWord.toLowerCase();

   perguntas[vh].answer=respostaUser;
   
   if(respostaUser==gabarito){
     setpontos(pontos=pontos+1);
     setvh(vh=vh+1);
     setpergunta(perguntas[vh].pergunta);
   }else{
     setvh(vh=vh+1);
     setpergunta(perguntas[vh].pergunta);
   }
   settextBox('');

 }
 
  return (
          <div>
         <Container>
         <Row><div className='putInCenter'><Image src={family_tree} alt="Simpsons Family"/></div></Row>
           <div className='secondLevelAnswer'>
             <label className='askStyle'>{pergunta}</label>
             <input type="text" value={textBox} onChange={e =>settextBox(e.target.value)} />
             <Button onClick={checkAnswer} > Responder </Button>
           </div>
         </Container>
          </div>     
      
  )
}
