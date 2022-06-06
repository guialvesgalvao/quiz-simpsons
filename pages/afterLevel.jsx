import {Container, Button,Row } from 'reactstrap';
import Link from 'next/link';
import React,{useContext} from "react";
import { GameContext } from '../contexts/GameContext';

export default function AfterLevel() {

  let {pontos,answers,lastLevel}=useContext(GameContext);
  console.log(lastLevel + " ==" + answers);

  return (
          <div>
            <h2 className='putInCenter'>Quiz Simpsons Family</h2>
            <p className='putInCenter widthResult result_afterLevel'>Você fez {pontos} pontos</p>
            <div className='btns_afterLevel mb-1'>
              <Button color='dark'>
              <Link href="/">
                   <label>Início</label>
              </Link>
              </Button>
              <Button color='dark'>
                <Link href="/checkAnswers">
                     <label>Correção</label>
                </Link>
              </Button>
            </div>
            
           
        </div>     
      
  )
}