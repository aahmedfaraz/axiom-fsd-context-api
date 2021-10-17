import React from 'react'

const StudentItem = ({ index, student }) => {

    const { username, age } = student;

    return (
        <li>
            <h4>{index + 1}. {username}</h4>
            <p>His age is {age}</p>
        </li>
    )
}

export default StudentItem;
