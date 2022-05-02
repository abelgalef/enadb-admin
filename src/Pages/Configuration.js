import React, { useState } from 'react'
import { Container, FormGroup, Label, Input, Row, Col, Button, Spinner, Form } from 'reactstrap'
import axios from 'axios';


export const Config = () => {

    let base_url = process.env.PUBLIC_URL + "/images/";

    const initialValues = {
        configName: '',
        whyUs: '',
        ourVision: '',
        ourMission: '',
        aboutUs: '',
        numberOneValue: '',
        numberOneText: '',
        numberTwoValue: '',
        numberTwoText: '',
        numberThreeValue: '',
        numberThreeText: '',
        quote: '',
        person: ''
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState({});

    const handleInputChange = (e) => {
        console.log(formValues);
        const { value } = e.target;
        setFormValues({
            ...formValues,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formErrors);
        console.log(formValues);
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        //if (Object.keys(formErrors).length === 0 && isSubmit) {
            setIsLoading(true);

            const data = {
                name: formValues.configName,
                whyUs: formValues.whyUs,
                ourVision: formValues.ourVision,
                ourMission: formValues.ourMission,
                aboutUs: formValues.aboutUs,
                n1_text: formValues.numberOneText,
                n2_text: formValues.numberTwoText,
                n3_text: formValues.numberThreeText,
                n1_value: formValues.numberOneValue,
                n2_value: formValues.numberTwoValue,
                n3_value: formValues.numberThreeValue,
                quotes_text: formValues.quote,
                person_text: formValues.person
            };

            const headers =  {
                'Content-Type': 'application/json',
                'x-access-token': JSON.parse(sessionStorage.getItem('signInData')).result.token
            };

            axios.post('http://localhost:5000/api/config/add', data, { headers: headers }).then(function (res) {
                console.log(res.data);
                setResult(res.data);
                setIsLoading(false);
            }).catch(function (err) {
                setIsLoading(false);
            });
        //}
    }

    const validate = (values) => {
        const errors = {};
        if (!values.configName && values.configName.length === 0) {
            errors.configName = "This field is required!";
        }

        if (!values.whyUs && values.ourVision.length === 0) {
            errors.whyUs = "This field is required!";
        }

        if (!values.ourVision && values.ourVision.length === 0) {
            errors.ourVision = "This field is required!";
        }

        if (!values.ourMission && values.ourMission.length === 0) {
            errors.ourMission = "This field is required!";
        }

        if (!values.aboutUs && values.aboutUs.length === 0) {
            errors.aboutUs = "This field is required!";
        }

        if (!values.numberOneValue && values.numberOneValue.length === 0) {
            errors.numberOneValue = "This field is required!";
        }

        if (!values.numberOneText && values.numberOneText.length === 0) {
            errors.numberOneText = "This field is required!";
        }

        if (!values.numberTwoValue && values.numberTwoValue.length === 0) {
            errors.numberTwoValue = "This field is required!";
        }

        if (!values.numberTwoText && values.numberTwoText.length === 0) {
            errors.numberTwoText = "This field is required!";
        }

        if (!values.numberThreeValue && values.numberThreeValue.length === 0) {
            errors.numberThreeValue = "This field is required!";
        }

        if (!values.numberThreeText && values.numberThreeText.length === 0) {
            errors.numberThreeText = "This field is required!";
        }

        if (!values.quote && values.quote.length === 0) {
            errors.numberThreeText = "This field is required!";
        }

        if (!values.person && values.person.length === 0) {
            errors.numberThreeText = "This field is required!";
        }
    }

    return (
        <div>
            <Container className='py-2'>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className='py-5 text-start'>
                        <Label>Give A name to this configuration</Label>
                        <Input name='configName' onChange={handleInputChange} />
                        <div className='error-message-text my-3'>
                            {formErrors?.configName}
                        </div>
                    </FormGroup>
                    <img src={base_url + "why_us.png"} alt="some text" width='100%' height='70%' />
                    <FormGroup className='text-start'>
                        <Label>Edit Text for 'why us' component</Label>
                        <Input name='whyUs' type='textarea' rows="4" onChange={handleInputChange} />
                        <div className='error-message-text my-3'>
                            {formErrors?.whyUs}
                        </div>
                    </FormGroup>
                    <img src={base_url + "sliding-texts.png"} alt="some text" width='100%' height='70%' />
                    <FormGroup className='py-5 text-start'>
                        <Label>Edit Text for 'Our Vision'</Label>
                        <Input id='messageInput' name='ourVision' type='textarea' rows="4" onChange={handleInputChange} />
                        <div className='error-message-text my-3'>
                            {formErrors?.ourVision}
                        </div>
                    </FormGroup>
                    <FormGroup className='py-5 text-start'>
                        <Label>Edit Text for 'Our Mission'</Label>
                        <Input id='messageInput' name='ourMission' type='textarea' rows="4" onChange={handleInputChange} />
                        <div className='error-message-text my-3'>
                            {formErrors?.ourMission}
                        </div>
                    </FormGroup>
                    <img src={base_url + "about-us.png"} alt="some text" width='100%' height='70%' />
                    <FormGroup className='py-5 text-start'>
                        <Label>Edit Text for 'About Us' Component</Label>
                        <Input id='messageInput' name='aboutUs' type='textarea' rows="4" onChange={handleInputChange} />
                        <div className='error-message-text my-3'>
                            {formErrors?.aboutUs}
                        </div>
                    </FormGroup>
                    <img src={base_url + "numbers.png"} alt="some text" width='100%' height='70%' />
                    <FormGroup className='py-5 text-start'>
                        <Label for='nameInput'>Edit Text for this Component</Label>
                        <Row className='py-3'>
                            <Col>
                                <Input onChange={handleInputChange} name='numberOneValue' />
                                <div className='error-message-text my-3'>
                                    {formErrors?.numberOneValue}
                                </div>
                            </Col>
                            <Col>
                                <Input onChange={handleInputChange} name='numberTwoValue' />
                                <div className='error-message-text my-3'>
                                    {formErrors?.numberTwoValue}
                                </div>
                            </Col>
                            <Col>
                                <Input onChange={handleInputChange} name='numberThreeValue' />
                                <div className='error-message-text my-3'>
                                    {formErrors?.numberThreeValue}
                                </div>
                            </Col>
                        </Row>

                        <Row className='py-3'>
                            <Col>
                                <Input onChange={handleInputChange} name='numberOneText' />
                                <div className='error-message-text my-3'>
                                    {formErrors?.numberOneText}
                                </div>
                            </Col>
                            <Col>
                                <Input onChange={handleInputChange} name='numberTwoText' />
                                <div className='error-message-text my-3'>
                                    {formErrors?.numberTwoText}
                                </div>
                            </Col>
                            <Col>
                                <Input onChange={handleInputChange} name='numberThreeText' />
                                <div className='error-message-text my-3'>
                                    {formErrors?.numberThreeText}
                                </div>
                            </Col>
                        </Row>
                    </FormGroup>
                    <img src={base_url + "embeded-text.png"} alt="some text" width='100%' height='70%' />
                    <FormGroup className='py-5 text-start'>
                        <Label>Edit Text for 'Quotes' Component</Label>
                        <Input onChange={handleInputChange} type='textarea' rows="4" name='quote' />
                        <div className='py-3'>
                            <Label>Edit Text for Person name</Label>
                            <Input onChange={handleInputChange} name='person' />
                            <div className='error-message-text my-3'>
                                {formErrors?.person}
                            </div>
                        </div>
                    </FormGroup>
                    <div className='py-3 text-start'>
                        {isLoading && <Spinner>Loading...</Spinner>}
                        {!isLoading && <Button color="primary" onClick={handleSubmit}>Save Configuration</Button>}
                    </div>
                    <div className='error-message-text my-3'>
                        {result.whyUs}
                    </div>
                </Form>
            </Container>
        </div>
    )
}