import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';

type MainTamplatesProps = {
    children: React.ReactNode
}

export function MainTamplates({children}: MainTamplatesProps) {

    return(
        <div className=''>
            
            <Container>
                <Logo/>
            </Container>
            <Container>
                <Menu/>
            </Container>
            
            {children}

            <Container >
                <Footer />
            </Container>
        </div>
    )

}