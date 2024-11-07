
import React, { useState } from 'react';
import http from '../http-common';


const TestingPSQL = () => {

    const [data, setData] = useState(null);

    const handleButtonClick = async () => {
        const response = await http.get('/test');
        setData(response.data);
    };

    //add id, name, and address to employee table, addEmp takes in id, name, and address
    const addData = async () => { 
        const response = await http.post('/addEmp', {
            id: 4,
            name: 'John Doe',
            address: '123 Elm St'
        });
        setData(response.data);
    }

    const getEmp = async () => {
        const response = await http.get('/employee');
        setData(response.data);
    }

    return (
        <div>
            <button onClick={handleButtonClick}>Test</button>
            <div>{data}</div>

            <button onClick={addData}>Add Data</button>

            <button onClick={getEmp}>Get Employee</button>

        </div>
    );
}

export default TestingPSQL;