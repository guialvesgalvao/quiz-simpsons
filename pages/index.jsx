import {Container, Button } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from "next/router";


export default function Home() {
 const router = useRouter();

 //className='banner_menu'
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
