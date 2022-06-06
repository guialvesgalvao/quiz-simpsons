import {Container, Button, Row } from 'reactstrap';

import Link from 'next/link';
import { useRouter } from "next/router";
import React,{useContext} from "react";
import { GameContext } from '../contexts/GameContext';

export default function SelectLevel() {
 const router = useRouter();
 let {setlastLevel}=useContext(GameContext);

 async function selectOp1 () {
   setlastLevel('1')
 }

 async function selectOp2 () {
  setlastLevel('2');
}

  return (
          <div>
              <Container>
            <h2>Quiz Simpsons Family</h2>
            <br/>
            <Row>
            <Button color='success' block onClick={selectOp1}>
              <Link href="/firstLevel" className='text-decoration-none'>
                   Level 1
              </Link>
              </Button>
            </Row>
            <Row>
            <Button color='primary' onClick={selectOp2}>
              <Link href="/secondLevel">
                   Level 2
              </Link>
              </Button>
            </Row>
            <Row>
              <Button color='danger'>
              <Link href=''>
                   Level 3
              </Link>
              </Button>
            </Row>
            </Container>
        </div>     
      
  )
}
