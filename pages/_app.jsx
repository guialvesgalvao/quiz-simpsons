import 'bootstrap/dist/css/bootstrap.min.css';
import { GameProvider } from '../contexts/GameContext';
import '../styles/personalStyle.css'

function MyApp({ Component, pageProps }) {
  return (
    <GameProvider>
    <div className='banner_donut'></div>  
     <Component {...pageProps} />
   </GameProvider>
  )
}

export default MyApp
