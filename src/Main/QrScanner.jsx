import React, { useState } from 'react'
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import { useHistory } from 'react-router';
import { paths } from '../Routes/paths';
import './styles.css';
import { useDisplaySize } from '../hooks/useDisplaySize';

const QrScannerComponent = () => {

    const history = useHistory();
    const [ result, setResult ] = useState();
    const { widthSize, heightSize } = useDisplaySize();

    if (result) {
        let code = result.split('=')[1];
        let decode = atob(code);
        let localStore = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
        localStore.push(JSON.parse(decode));
        localStorage.setItem('data', JSON.stringify(localStore));
        history.push(paths.main);
    };

    return(
      <div>
        <div>
          <BarcodeScannerComponent
          width={widthSize}
          height={heightSize}
          onUpdate={(err, result) => {
            if (result) {
              setResult(result.text);
            }
          }}
        />
        </div>
      </div>
    )
};

const QrPage = () => {
    return (
        <QrScannerComponent/>
    )
};

export default QrPage;