import { useState } from 'react';
import Api from '../../api/Api';
import './ForgotPassword.css';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [isEmailCorrect, setIsEmailCorrect] = useState(false);

    function handleClick() {
        const api = new Api();
        api.changePasswordEmail(email)
        .then(() => {
            setIsEmailCorrect(true);
        }).catch(() => {
            alert('This email is incorrect, try again');
        })
    }

  return (
    <>
        {!isEmailCorrect ? <>
            <h2>Dont worry, you can change your password!</h2>
            <div className='form'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor='email'>Enter your email: </label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <button 
                        onClick={() => {handleClick()}}
                        className='change-btn'> Change Password</button>
                </form>
            </div>
        </> : <h2>A link was sent to your email, please check your inbox!</h2>}
    </>
  );
}

