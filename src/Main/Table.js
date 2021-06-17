import React from 'react';
import { useDisplaySize } from '../hooks/useDisplaySize';
import Bill from './Bill';
import './styles.css';

const Table = ({
    bills
}) => {
    const { heightSize } = useDisplaySize();

    if (!bills.length) {
        return ( 
        <div className="Table__label">Empezá a scanneá' tus facturas...</div>
        )
    };

    return (
       <div 
       className="Table__container"
       style={{
           height: heightSize - 205
       }}>
           <div>
               { bills.map(bill => 
                <Bill 
                key={bill.codAut}
                bill={bill}/>
                ).reverse()}
           </div>
       </div>
    )
};

export default Table;