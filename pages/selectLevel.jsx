import {Container, Button, Row } from 'reactstrap';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import React,{useContext} from "react";
import { GameContext } from '../contexts/GameContext';

export default function SelectLevel() {
 const router = useRouter();
 let {setlastLevel}=useContext(GameContext);

 const [btn1,setbtn1] = useState(false);
 const [btn2,setbtn2] = useState(true);

 async function selectOp1 () {
   setlastLevel('1');
   setbtn1(true);
   setbtn2(false);

 }

 async function selectOp2 () {
  setlastLevel('2');
}

  return (
          <div>
            <div className='secondLevelAnswer'>
              <h2>Quiz Simpsons Family</h2>
              <br/>
              <Link href="/firstLevel">
              <Button color="primary" onClick={selectOp1} className="buttons_selectLevel" disabled={btn1}>
                     Level 1
              </Button>
              </Link>
              <Link href="/secondLevel">
              <Button color="warning" onClick={selectOp2} className="buttons_selectLevel" disabled={btn2}>
                     Level 2                
              </Button>
              </Link>
              <Link href='' >
              <Button color="danger" className="buttons_selectLevel" disabled={true} >  
                     Level 3                
              </Button>
              </Link>
            </div>
        </div>     
      
  )
}
