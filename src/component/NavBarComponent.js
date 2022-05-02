import React from 'react';
import { Collapse, NavbarBrand, NavbarToggler, Nav, Navbar, NavItem, NavLink } from 'reactstrap';

export const NavBarComponent = () => {

    const [isOpened, setIsOpened] = React.useState(false);

    return (
        <div>
            <Navbar color='white' expand="lg" container fixed="top" light className="shadow-sm">
                <NavbarBrand href='/'><h2>ENADB</h2></NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpened(!isOpened) }} />
                <Collapse isOpen={isOpened} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink href="/configuration/">
                                Configuration
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/users' >
                                User Managment
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/blog/">
                                Blog
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/gallery/">
                                Gallery
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/email/">
                                Email
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                SignOut
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};