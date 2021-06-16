import React from 'react';
import './styles.css';

const Bill = ({
    bill
}) => {
    return (
        <div className="Bill__card">
            <div className="Bill__container">
                <div>
                    <p>Facturado a:</p>
                    <p>{bill.nroDocRec}</p>
                </div>
                <div>
                    <p>Fecha de emisión:</p>
                    <p>{bill.fecha}</p>
                </div>
                <div>
                    <p>Importe:</p>
                    <p>{bill.importe}</p>
                </div>
                <div>
                    <p>Tipo de moneda:</p>
                    <p>{bill.moneda}</p>
                </div>
                <div>
                    <p>Número de comprobante:</p>
                    <p>{bill.nroCmp}</p>
                </div>
                <div>
                    <p>Código de autenticación:</p>
                    <p>{bill.codAut}</p>
                </div>
            </div>
        </div>
    )
};

export default Bill;