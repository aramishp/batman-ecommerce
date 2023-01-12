import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Api from '../../api/Api';
import './Profile.css';

export default function Profile() {
  const [user, setUser] = useState(false);

  useEffect(() => { 
    const api = new Api();
    api.getProfile()
    .then((result) => {
        setUser(result.data[0]); 
    });
}, []);  

  function changeAddress() {

  }

  return (
    <div className='profile-container'>
      {user ? <>
        <div className='profile-header'>
            <div className='profile-img'>
                <img src='profile/default-profile.png' alt='profile'/>
            </div>
            <div>
                {user.first_name} {user.last_name}
            </div>
        </div>
        <div>
          Email: {user.email}
        </div>
        <div>
          Address: {user.address} 
          <img onClick={changeAddress} className='icon' src='profile/edit.png' alt='edit'/>
        </div>
      </> : <></>}
      <Button className='btn btn-primary'>Log out</Button>
    </div>
  );
}
