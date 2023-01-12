import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Api from '../../api/Api';
import '../forgot-password/ForgotPassword.css';
import './ResetPassword.css';

export async function loaderForVerification({ params }) {
    return params;
}

export default function ResetPassword() {
    const [isVerified, setIsVerified] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordChanged, setPasswordChanged] = useState(false)

    const urlParams = useLoaderData();

    function handleNewPassword() {
        const api = new Api();
        api.updatePassword(password, urlParams.id, urlParams.token)
        .then(() => {
            setPasswordChanged(true);
        })
        .catch(() => {
            console.log('Problem has ocurred');
        })
    }

    useEffect(() => {
        const api = new Api();
        api.getChangePasswordPageVerified(urlParams.id, urlParams.token)
        .then(result => {
            if(result.data) {
                setIsVerified(result.data);
            }
        })
    }, [urlParams.id, urlParams.token])

  return (
    <>
        <div className='form'>
        {!passwordChanged ? <>
            {
            isVerified ? <>
                <h2>Enter a new password</h2>
                <div className='user-email'>Email: {isVerified}</div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor='pass'>Enter a new password: </label>
                    <input 
                        placeholder='New password'
                        type='password' 
                        id='pass' 
                        name='pass' 
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <button 
                        onClick={handleNewPassword}
                        className='change-btn'> Change Password</button>
                </form>
            </> : <h3>This link is expired, please request for another link and make the process more quickly</h3>}
        </> : <h3>You password has been changed correctly, please login in our page!</h3> }
        </div>
    </>
  );
}

