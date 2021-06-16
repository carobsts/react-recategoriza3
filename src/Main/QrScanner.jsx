import React, { useState } from 'react'
import QrReader from 'react-qr-scanner'
import { useHistory } from 'react-router';
import { useDisplaySize } from '../hooks/useDisplaySize';
import { paths } from '../Routes/paths';

const QrScannerComponent = () => {

    const history = useHistory();

    const { widthSize, heightSize } = useDisplaySize();
    const [ result, setResult ] = useState();
  
    function handleScan(data) {
       setResult(data);
    };

    const previewStyle = {
        height: heightSize,
        width: widthSize,
    };

    if (result) {
        let code = result.text.split('=')[1];
        let decode = atob(code);
        let localStore = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
        localStore.push(JSON.parse(decode));
        localStorage.setItem('data', JSON.stringify(localStore));
        history.push(paths.main);
    };

    return(
      <div>
        <QrReader
          style={previewStyle}
          onScan={handleScan}
        />
      </div>
    )
};

const QrPage = () => {
    return (
        <QrScannerComponent/>
    )
};

export default QrPage;