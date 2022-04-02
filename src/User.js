import React from 'react';

function User(props) {
    const {name, email}= props.user;

    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    );
}

export default User;