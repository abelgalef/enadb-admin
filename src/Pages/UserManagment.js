import React, { useEffect, useState } from 'react'
import { Table, Spinner } from 'reactstrap'
import axios from 'axios';

export const UserManagment = () => {

    const [IsLoading, setIsLoading] = useState(false);
    const [UserList, setUserList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const { data: response } = await axios.get('http://localhost:5000/api/users');
                setUserList(response);
            } catch (error) {
                console.error(error.message);
            }
            setIsLoading(false);
        }

        fetchData();
    }, []);

    return (
        <div className='container my-5'>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joined Date</th>
                        <th>Phone Number</th>
                        <th>telegram_username</th>
                    </tr>
                </thead>

                <tbody>
                    {IsLoading && <div><Spinner>Loading....</Spinner></div>}
                    {!IsLoading && (
                            UserList.map(item => {
                                return <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.joined_date}</td>
                                    <td>{item.phone_number}</td>
                                    <td>{item.telegram_username}</td>
                                </tr>
                            })
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
