import React from 'react';
import Lottie from 'react-lottie';
import { Container, Col, Row, Button, Card, CardBody, Input, FormGroup, Label } from 'reactstrap';
import adminAnimation from '../lottie-files/admin-animation.json';

export const Home = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        speed: 0.5,
        animationData: adminAnimation,
        rendererSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    };

    return (
        <div className='small-padders'>
            <Container>
                <Row className='align-item-end'>
                    <Col md='6'>
                        <div>
                            <div>
                                <Lottie options={defaultOptions} />
                            </div>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className='py-5'>
                            <div className="row">
                                <div className="w-75 ml-0 mr-0 mx-auto text-center">
                                    <Card>
                                        <CardBody>
                                            <CardBody>
                                                <FormGroup>
                                                    <Label for="emailField">Email</Label>
                                                    <Input id='emailField' name='email' placeholder='yourname@gmail.com' type='email' />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for='passwordField'>Password</Label>
                                                    <Input id='passwordField' name='password' placeholder='' type='password' />
                                                </FormGroup>
                                                <Button>SignIn</Button>
                                            </CardBody>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
