import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { MainTamplates } from "../../templates/MainTamplates";


export function Home() {

    return(
        <MainTamplates>
            <Container>
                <CountDown/>
            </Container>
            <Container>
                <MainForm />
            </Container>
        </MainTamplates>
    )

}