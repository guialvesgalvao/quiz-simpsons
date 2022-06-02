import {Container, Button, Row } from 'reactstrap';

import Link from 'next/link';
import { useRouter } from "next/router";

export default function SelectLevel() {
 const router = useRouter();

  return (
          <div>
              <Container>
            <h2>Quiz Simpsons Family</h2>
            <br/>
            <Row>
            <Button color='success' block >
              <Link href="/firstLevel" className='text-decoration-none'>
                   Level 1
              </Link>
              </Button>
            </Row>
            <Row>
            <Button color='primary'>
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
