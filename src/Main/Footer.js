import { Button } from '@material-ui/core';
import React from 'react';
import './styles.css';

const Footer = () => {
    return (
        <div className="Footer__container">
            <Button variant="contained" color="primary">
                Generar excel
            </Button>
        </div>
    )
};

export default Footer;