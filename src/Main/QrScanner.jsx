import React, { useState } from 'react'
import BarcodeReader from 'react-barcode-reader';
import { useHistory } from 'react-router';
import { paths } from '../Routes/paths';
import './styles.css';

const QrScannerComponent = () => {

    const history = useHistory();
    const [ result, setResult ] = useState();
  
    function handleScan(data) {
       setResult(data);
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
          {/* <Button 
          onClick={() => facingMode === 'environment' 
          ? setFacingMode('user') 
          : setFacingMode('environment')}
          variant="contained" color="primary"
          >
            <SwapVertIcon/>
          </Button> */}
        </div>
        <div>
          <BarcodeReader
          onScan={handleScan}
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