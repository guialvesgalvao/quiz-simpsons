import {Container, Button,Row } from 'reactstrap';
import Link from 'next/link';
import React,{useContext} from "react";
import { useState } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function AfterLevel() {

  let {pontos,answers,lastLevel}=useContext(GameContext);
  console.log(lastLevel + " ==" + answers);
  let [btn,setbtn] = useState(true);
  
  if(lastLevel==1){
    btn=true
  }else{btn=false}

  return (
          <div>
            <h2 className='putInCenter'>Quiz Simpsons Family</h2>
            <p className='putInCenter widthResult result_afterLevel'>Você fez {pontos} pontos </p>
            <div className='btns_afterLevel mb-1'>
              <Button color='dark'>
              <Link href="/">
                   <label>Início</label>
              </Link>
              </Button>
              <Link href="/checkAnswers">
              <Button color='dark' disabled={btn}>
                     <label>Correção</label>
              </Button>
              </Link>
            </div>
            
           
        </div>     
      
  )
}