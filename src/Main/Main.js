import { Button, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Table from './Table';
import './styles.css';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { paths } from '../Routes/paths';
import { useHistory } from 'react-router';

const Main = () => {

    let localStore = localStorage.getItem('data');
    const history = useHistory();
    const [ bills, setBills ] = useState([]);
    
    useEffect(() => {
        if (localStore) {
            let data = JSON.parse(localStore);
            setBills(data);
        }
    }, [localStore]);

    let coso = atob('eyJ2ZXIiOjEsImZlY2hhIjoiMjAyMS0wNS0zMSIsImN1aXQiOjI3MzgxNTk3NzIwLCJwdG9WdGEiOjEsInRpcG9DbXAiOjExLCJucm9DbXAiOjM0LCJpbXBvcnRlIjoxMTIyMjAsIm1vbmVkYSI6IlBFUyIsImN0eiI6MSwidGlwb0RvY1JlYyI6ODAsIm5yb0RvY1JlYyI6MzA3MTU1NTM5NjgsInRpcG9Db2RBdXQiOiJFIiwiY29kQXV0Ijo3MTIyMDA3NjY2MDkzOX0=');
    console.log('coso', JSON.parse(coso))

    return (
       <div className="App__container">
           <div className="App__header">
                <Typography className="App__title">Recategoriza3</Typography>
                <Button 
                onClick={() => history.push(paths.qr)}
                className="App__buttonCamera"
                variant="contained" color="primary">
                    <CameraAltIcon/>
                </Button>
            </div>
           <Typography className="App__subtitle">
               Tu app pa' que no tengas que hacer el papelerío a manopla.
           </Typography>
           <Table bills={bills}/>
           <Footer/>
       </div>
    )
};

export default Main;