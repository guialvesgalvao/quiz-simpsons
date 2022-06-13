import {Container, Button, Row } from 'reactstrap';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import family_tree from '../public/family_tree.png';
import React,{useContext} from "react";
import { GameContext } from '../contexts/GameContext';
import {Howl, Howler} from 'howler';

export default function SecondLevel() {
  var soundWin = new Howl({
    src: ['/somWin.mp3']
  });

  var soundLoose = new Howl({
    src: ['/somLoose.mp3']
  });

  let {pontos,setpontos,perguntas,answers,setanswers}=useContext(GameContext);

  let [textBox,settextBox] = useState('');
  let [vh, setvh] = useState(6);
  const [pergunta, setpergunta] = useState(perguntas[vh].pergunta);

  const router = useRouter();

  if(vh>11){
   router.push('/afterLevel');
  }

 async function checkAnswer () {
  setanswers([... answers ,textBox]);
   let respostaUser = textBox.toLowerCase();
   let gabarito = perguntas[vh].correctWord.toLowerCase();
   if(respostaUser==gabarito){
     setpontos(pontos=pontos+1);
     soundWin.play();
     setvh(vh=vh+1);
     setpergunta(perguntas[vh].pergunta);
   }else{
     soundLoose.play();
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
