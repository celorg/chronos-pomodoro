import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

import './styles/theme.css';
import './styles/global.css'; 
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';


export function App(){

    return(
        <>
            <Container>
                <Logo/>
            </Container>
            <Container>
                <Menu/>
            </Container>
            <Container>
                <CountDown/>
            </Container>
            <Container>
                <form className='form'>
                    <div className='formRow'>
                        <DefaultInput type='text' labelText='Task' id='meuInput' placeholder='Digite algo' />
                    </div>
                    <div className='formRow'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='formRow'>
                        <Cycles />
                    </div>
                    <div className='formRow'>
                        <button>
                            Enviar
                        </button>
                    </div>
                </form>
            </Container>
        </>
    )   

};
