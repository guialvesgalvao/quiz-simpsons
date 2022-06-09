import {Container, Button, Row, Alert } from 'reactstrap';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import React,{useContext} from "react";
import { GameContext } from '../contexts/GameContext';

export default function SelectLevel() {
 const router = useRouter();
 let {setlastLevel}=useContext(GameContext);

 /*                <Link href='' >
                <Button color="danger" className="buttons_selectLevel" disabled={true} >
                       Level 3
                </Button>
                </Link>
                */

  return (
          <div>
            <div className='secondLevelAnswer'>
              <h2>Quiz Simpsons Family</h2>
              <br/>
              <Link href="/firstLevel">
              <Button color="primary" className="buttons_selectLevel" disabled={false}>
                     Level 1
              </Button>
              </Link>
              <Link href="/secondLevel">
              <Button color="warning" className="buttons_selectLevel" disabled={true}>
                     Level 2                
              </Button>
              </Link>

            </div>
        </div>     
      
  )
}
