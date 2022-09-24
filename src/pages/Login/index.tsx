import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-light.svg';
import { LoginForm } from '../../components/LoginForm';
import { Container, FormContainer, Banner, FormTitle, Logo } from './LoginElements';

export const Login = () => {
    return(
        <Container>
            <FormContainer>
                <FormTitle>
                    <h1>Olá,</h1>
                    <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
                </FormTitle>
                <LoginForm />
                <Link  to="/home">Home page</Link>
            </FormContainer>
            <Banner>
                <Logo src={logo} />
            </Banner>
        </Container>
    )
}