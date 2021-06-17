import React from 'react';
import ExcelBuilder from './ExcelBuilder';
import './styles.css';

const Footer = ({
    dataSet
}) => {
    return (
        <div className="Footer__container">
            <ExcelBuilder dataSet={dataSet}/>
        </div>
    )
};

export default Footer;