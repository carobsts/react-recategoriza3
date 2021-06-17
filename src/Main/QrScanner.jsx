import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import QrReader from 'react-qr-scanner'
import { useHistory } from 'react-router';
import { useDisplaySize } from '../hooks/useDisplaySize';
import { paths } from '../Routes/paths';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import './styles.css';

const QrScannerComponent = () => {

    const history = useHistory();

    const { widthSize, heightSize } = useDisplaySize();
    const [ result, setResult ] = useState();
    const [ facingMode, setFacingMode ] = useState('user');
  
    function handleScan(data) {
       setResult(data);
    };

    const previewStyle = {
        height: heightSize,
        width: widthSize,
    };

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
        <div className="ButtonCameraFixed">
          <Button 
          onClick={() => facingMode === 'environment' 
          ? setFacingMode('user') 
          : setFacingMode('environment')}
          variant="contained" color="primary"
          >
            <SwapVertIcon/>
          </Button>
        </div>
        <QrReader
          legacyMode={true}
          facingMode={facingMode}
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