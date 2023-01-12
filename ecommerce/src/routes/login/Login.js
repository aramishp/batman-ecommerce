import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Api from '../../api/Api';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const api = new Api();

    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/');
    }

    function handleSubmit() {
            if (email && password) {
                api.postLogin(email, password)
            .then((response) => {
                console.log(response);
            })
            .then(() => {
                props.setLogin(true);
            })
            .then(() => {
                navigateHome();
            })
            .catch(() => {
                alert("Incorrect email or password");
                console.error("Not user found");
            })
            .finally(() => {
                setEmail("");
                setPassword("");
            })
        }
    }

  return (
    <>
        <h2>Hi! Enter your e-mail and password</h2>
        <div className='form'>
        <Form onSubmit={(e) => {e.preventDefault()}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <p>
                    <a href='/sign'>First time here? </a>
                    <span> or </span>
                    <a href='/forgotpassword'>Forgot your password?</a>
                </p>
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    </div>
    </>
  );
}

