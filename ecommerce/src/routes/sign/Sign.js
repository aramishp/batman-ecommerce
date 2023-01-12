import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../../api/Api';

export default function Sign() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }

    function handleSubmit() {
        if(firstname && lastname && email && password && isChecked) {
            const api = new Api();
            api.postSign(firstname, lastname, email, password)
            .then((result) => {
                console.log(result);
            })
            .then(() => {
                navigateHome();
            })
            .catch((error) => {
                alert('This email is already in use');
                console.error(error);
            })
            .finally(() => {
                setFirstname("");
                setLastname("");
                setEmail("");
                setPassword("");
            })
        }
    }

  return (
    <>
        <h2>Complete your data</h2>
        <div className='form'>
            <Form onSubmit={(e) => {e.preventDefault()}}>
                <Form.Group className="mb-3">
                    <div className="row">
                        <div className="col">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>  
                        </div>
                        <div className="col">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)}/>  
                        </div>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="I accept all the conditions." value={isChecked} onChange={(e) => setIsChecked(!isChecked)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <a href='login'>Already have an account?</a>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    </>
    
  );
}
