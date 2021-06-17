import React from 'react';
import ExcelBuilder from './ExcelBuilder';
import './styles.css';

const Footer = ({
    dataSet,
    fileName,
    tableName
}) => {
    return (
        <div className="Footer__container">
            <ExcelBuilder
            filename={fileName}
            tableName={tableName}
            dataSet={dataSet}/>
        </div>
    )
};

export default Footer;