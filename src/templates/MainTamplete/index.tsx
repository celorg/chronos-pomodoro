import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';

type MainTemplateProps = {
    children: React.ReactNode
}

export function MainTemplate({children}: MainTemplateProps) {

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