import styled from 'styled-components';
import React from 'react';
import Logo from '../images/ok-google-logo.png';

const Button = styled.button`
    font-family: 'Roboto';
    font-size: 1.3em;
    border: none;
    border-radius: 5px;
    background-color: red;
    :hover {
        background-color: green;
    }
`;

function Header() {
    return (
        <div className="header">
            <Button>Name</Button>
            <img src={Logo} alt="" height={'60px'} />
        </div>
    );
}

export default Header;
