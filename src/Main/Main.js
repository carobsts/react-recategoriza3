import { Button, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Table from './Table';
import './styles.css';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { paths } from '../Routes/paths';
import { useHistory } from 'react-router';
import BackdropComponent from './Backdrop';

const Main = () => {

    let localStore = localStorage.getItem('data');
    const history = useHistory();
    const [ bills, setBills ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    
    useEffect(() => {
        if (localStore) {
            let data = JSON.parse(localStore);
            setBills(data);
        }
    }, [localStore]);

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
           <Footer 
           setBills={setBills}
           setLoading={setLoading}
           filename="Honorarios para recategorización de Monotributo"
           tableName="Honorarios para recategorización de Monotributo"
           dataSet={bills}/>
           <BackdropComponent loading={loading}/>
       </div>
    )
};

export default Main;