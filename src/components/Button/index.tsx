import { UserInfoContext } from '../../common/context/UserInfo';
import { PropsUserContext } from '../interfaces/UserInfo';
import { NextButton } from './ButtonElements';
import { useContext } from 'react';
import { regexEmail } from '../../helpers/loginHelper';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../servcies/FirebaseConfig';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";

export const Button = () => {
    const { userInfo, setError, errorExists, setErrorExists, loginPageTitle } = useContext<PropsUserContext>(UserInfoContext);
    const navigateTo = useNavigate();
    const [ updateProfile, updating, error ] = useUpdateProfile(auth);
    const { password } = userInfo;
    const { email } = userInfo;
    
    const validateLoginInputs = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (regexEmail.test(userInfo.email) && userInfo.password.length > 5) {
            setError('');
            setErrorExists(false);
            handleSubmit(e);
        } else {
            setError('Ops, usuário ou senha inválidos. Tente novamente!');
            setErrorExists(true);
        }
    }

    const [signInWithEmailAndPassword] =
    useSignInWithEmailAndPassword(auth);

    const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignIn(e: any) {
    e.preventDefault();
    console.log(email, password)
    
    signInWithEmailAndPassword(email, password);
    updateProfile({
        displayName: userInfo.name
    })

    navigateTo('/home');
  }

    function handleRegister(e: any) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
        console.log('criou usuario!')
    }

    function handleSubmit (e: any) {
        if(loginPageTitle === 'Cadastro') {
            handleRegister(e)
        } else {
            handleSignIn(e);
        }
    }
    

    return(
        <NextButton onClick={validateLoginInputs} errorExists={errorExists}>
            Continuar
        </NextButton>
    )
}