import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { MainTamplete } from "../../templates/MainTamplete";


export function Home() {

    return(
        <MainTamplete>
            <Container>
                <CountDown/>
            </Container>
            <Container>
                <MainForm />
            </Container>
        </MainTamplete>
    )

}