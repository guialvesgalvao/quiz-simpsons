import {Container, Button, Row, Col } from 'reactstrap';
import family_tree from '../public/family_tree.png';
import { useState } from 'react';
import { useRouter } from 'next/router';
import React,{useContext} from "react";
import { GameContext } from '../contexts/GameContext';
import Image from 'next/image';


export default function FirstLevel() {

  let [vh, setvh] = useState(0);
  let {perguntas,pontos,setpontos,answers,setanswers}=useContext(GameContext);

  const [pergunta, setpergunta] = useState(perguntas[vh].pergunta);

  const [op1, setop1] = useState(perguntas[vh].op[0]);
  const [op2, setop2] = useState(perguntas[vh].op[1]);
  const [op3, setop3] = useState(perguntas[vh].op[2]);
  const [op4, setop4] = useState(perguntas[vh].op[3]);

  const router = useRouter();
  if(vh>5){
    router.push('/afterLevel');
  }

  async function refreshToNext(){
    setpergunta(perguntas[vh].pergunta);
    setop1(perguntas[vh].op[0]);
    setop2(perguntas[vh].op[1]);
    setop3(perguntas[vh].op[2]);
    setop4(perguntas[vh].op[3]);
  }
  
   async function clickOp1(){

    if(perguntas[vh].op[0]==perguntas[vh].correctWord && perguntas[vh].selected==5){
      perguntas[vh].selected=0;
      setpontos(pontos=pontos+1)
      setvh(vh=vh+1);
      refreshToNext();
    }  else{
      perguntas[vh].selected=0;
      setvh(vh=vh+1);
      refreshToNext();
    }
  }

     async function clickOp2(){
    if(perguntas[vh].op[1]==perguntas[vh].correctWord && perguntas[vh].selected==5){
      perguntas[vh].selected=1;
      setpontos(pontos=pontos+1)
      setvh(vh=vh+1);
      refreshToNext();
    }  else{
      perguntas[vh].selected=1;
      setvh(vh=vh+1);
      refreshToNext();
    }
  }

     async function clickOp3(){
    if(perguntas[vh].op[2]==perguntas[vh].correctWord && perguntas[vh].selected==5){
      perguntas[vh].selected=2;
      setpontos(pontos=pontos+1)
      setvh(vh=vh+1);
      refreshToNext();
    } else{
      perguntas[vh].selected=2;
      setvh(vh=vh+1);
      refreshToNext();
    }
  }

     async function clickOp4(){
    if(perguntas[vh].op[3]==perguntas[vh].correctWord && perguntas[vh].selected==5){
      perguntas[vh].selected=3;
      setpontos(pontos=pontos+1)
      setvh(vh=vh+1);
      refreshToNext();
    } else{
      perguntas[vh].selected=3;
      setvh(vh=vh+1);
      refreshToNext();
    }
  }

  return (
        <div>

          <Container>
            <Row><div className='putInCenter'><Image src={family_tree} alt="Simpsons Family"/></div></Row>
            <Row><div className='putInCenter'><label className='askStyle'>{pergunta}</label></div></Row>
            <Row><div className='putInCenter'><label> Pontos : {pontos}</label></div></Row>
            <Row>
              <div className='organize-buttons'>
              <Button color="info" outline onClick={clickOp1} className='questionButton'>{op1}</Button>
              <Button color="primary" outline onClick={clickOp2} className='questionButton'>{op2}</Button>
              <Button color="danger" outline onClick={clickOp3} className='questionButton'>{op3}</Button>
              <Button color="success" outline onClick={clickOp4} className='questionButton'>{op4}</Button>
              </div>
            </Row>
            </Container>
        </div>     
      
  )
}
