import React from 'react';
import Lottie from 'react-lottie';
import { Container, Col, Row, Button, Card, CardBody, Input, FormGroup, Label, Form, FormFeedback, Spinner } from 'reactstrap';
import adminAnimation from '../lottie-files/admin-animation.json';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const SignInPage = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        speed: 0.5,
        animationData: adminAnimation,
        rendererSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    };

    const initialValues = {
        email: '',
        password: ''
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState({});
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setFormValues({ ...formValues, email: value });
    }

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setFormValues({ ...formValues, password: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setIsLoading(true);

            axios.put('http://localhost:5000/api/admins/signIn', {
                username: formValues.email,
                password: formValues.password
            }).then(function (res) {
                console.log(res);
                sessionStorage.setItem('signInData', JSON.stringify(res.data));
                setResult(res.data);
                setIsLoading(false);
                //navigate('configuration', { replace: true });
            }).catch(function (err) {
                console.log(err);
                setIsLoading(false);
            });
        }
    };

    useEffect(() => {
        console.log(formValues);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }

        if (result.message === 'success') {
            console.log('gonna navigate');
            navigate('configuration', { replace: true });
            window.location.reload(); 
        }

    }, [formValues, formErrors, isSubmit, navigate, result]);

    /* useEffect(() => {
        if (result.message === 'success') {
            console.log('gonna navigate');
            navigate('configuration', { replace: true });
        }
    }, [result, navigate]); */

    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = "Email is required!";
        }

        if (!values.password) {
            errors.password = "Password is required!";
        }

        return errors;
    }

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
                                <div className="w-75 ml-0 mr-0 mx-auto text-start">
                                    <Card>
                                        <CardBody>
                                            <CardBody>
                                                <Form onSubmit={handleSubmit}>
                                                    <FormGroup>
                                                        <Label for="email">Email</Label>
                                                        <Input id='email' name='email' placeholder='yourname@gmail.com' type='email' value={formValues.email} onChange={handleEmailChange} />
                                                        <div className='error-message-text my-3'>
                                                            {formErrors.email}
                                                        </div>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for='password'>Password</Label>
                                                        <Input id='password' name='password' placeholder='' type='password' value={formValues.password} onChange={handlePasswordChange} />
                                                        <div className='error-message-text my-3'>
                                                            {formErrors.password}
                                                        </div>
                                                    </FormGroup>
                                                    {isLoading && <Spinner>Loading...</Spinner>}
                                                    {!isLoading && <Button onClick={handleSubmit}>SignIn</Button>}
                                                    <div className='error-message-text my-3'>
                                                        { result.message }
                                                    </div>
                                                </Form>
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