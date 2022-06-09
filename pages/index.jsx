import {Container, Button } from 'reactstrap';
import Link from 'next/link';


export default function Home() {

  return (
          <div>
              <Container >
              <div className='result_afterLevel widthResult checkAnswerAlign'>
              <h1 className='mb-3'>Quiz Simpsons Family</h1>
              <Button color="dark">
              <Link href="/selectLevel">
                   <label>Play</label>
              </Link>
              </Button>
            </div>
            </Container>
        </div>     
      
  )
}
