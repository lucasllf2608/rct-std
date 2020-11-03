import React, {useEffect, useState} from 'react';
import api from '../../api';
import User from '../users/user';

const List = () =>{

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() =>{
        loadUsers();
    },[]);

    const loadUsers = () =>{
        const response = api.get();
        response.then(data => {
            setUsuarios(data);
        });
    }

    const users = usuarios.data;

    console.log(users);

    return(
        <div>
            
            <h1>Usuários</h1>
            <hr></hr>

         {users && users.map(u =>
            <div key={u.id}>
                <h2>{u.name}</h2>
                <label>Login : {u.username}</label>
                <br></br>
                <label>Email : {u.email}</label>
                <br></br>
                <label>Phone : {u.phone}</label>
                <br></br>
                <label>WebSite : {u.website}</label>
            </div>
                
            )}
        </div>  
    );
}


export default List;