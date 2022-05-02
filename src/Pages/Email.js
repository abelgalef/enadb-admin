import React from 'react'
import { Button, Row, ModalBody, ModalHeader, Modal, Alert, Table, FormGroup, Label, Input, Col } from 'reactstrap'


export const Email = () => {
    let usersList = [
        {
            id: 1,
            name: 'yohannes',
            email: 'yohannes@gmail.com',
            joined: '2022-01-01',
            isSub: true
        },
        {
            id: 2,
            name: 'yohannes',
            email: 'yohannes@gmail.com',
            joined: '2022-01-01',
            isSub: true
        },
        {
            id: 3,
            name: 'yohannes',
            email: 'yohannes@gmail.com',
            joined: '2022-01-01',
            isSub: true
        },
        {
            id: 4,
            name: 'yohannes',
            email: 'yohannes@gmail.com',
            joined: '2022-01-01',
            isSub: true
        },
        {
            id: 5,
            name: 'yohannes',
            email: 'yohannes@gmail.com',
            joined: '2022-01-01',
            isSub: true
        }
    ];

    const [isOpened, setOpened] = React.useState(false);

    const onClickHandle = () => {
        setOpened(!isOpened);
    }

    return (
        <div className='container my-5'>
            <div className='text-end px-5'>
                <Button onClick={onClickHandle}>Create +</Button>
            </div>
            <Modal centered isOpen={isOpened}>
                <ModalHeader toggle={onClickHandle}>Create A blog</ModalHeader>
                <ModalBody>
                    <Alert color='danger'>
                        Please check the Markdown file for errors, broken links and other dangerous links before uploading it
                        to the server.

                        Please fill all options!
                    </Alert>
                    <Alert color='primary'>
                        When Adding Images to blog you might have to upload them to server then add it as link image in the markdown editor
                    </Alert>
                    <Alert color='primary'>
                        Contact the team for any further information
                    </Alert>
                    <FormGroup>
                        <Label>Blog Title</Label>
                        <Input name='title' id='title' />
                    </FormGroup>

                    <FormGroup>
                        <Label>Blog description</Label>
                        <Input name='discription' id='discription' />
                    </FormGroup>


                    <FormGroup>
                        <Label>Markdown File</Label>
                        <Input id="exampleFile"
                            name="file"
                            type="file" />
                    </FormGroup>

                    <Button>Save</Button>
                </ModalBody>
            </Modal>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Uploaded Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        usersList.map(item => {
                            return <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.joined}</td>
                                <td><Button>Resend</Button></td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
