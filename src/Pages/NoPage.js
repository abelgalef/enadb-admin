import React from 'react';
import { Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const NoPage = () => {
    return (
        <Container>
            <div className="big-padders">
                <div className="row">
                    <div className="col-md-12">
                        <Fade bottom>
                            <div className="error-template">
                                <h1>Oops!</h1>
                                <h2>404 Not Found</h2>
                                <div className="error-details">
                                    Sorry, an error has occured, the Requested page was not found!
                                </div>
                                <div className="error-actions">
                                    <Button color='primary' tag={Link} to="/home" >Take Me Home</Button>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default NoPage;