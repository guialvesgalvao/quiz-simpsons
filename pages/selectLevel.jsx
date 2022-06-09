import {Button} from 'reactstrap';
import Link from 'next/link';

export default function SelectLevel() {

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
