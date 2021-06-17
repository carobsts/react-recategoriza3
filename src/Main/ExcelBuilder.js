import { Button } from "@material-ui/core";
import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExcelBuilder = ({
    dataSet,
    tableName,
    fileName
}) => {
    return (
        <ExcelFile 
        filename={fileName}
        element={
        <Button 
        disabled={dataSet.length > 0 ? false : true}
        variant="contained" 
        color="primary">Generar Excel</Button>
        }>
            <ExcelSheet data={dataSet} name={tableName}>
                <ExcelColumn label="Razón Social" value="nroDocRec"/>
                <ExcelColumn label="Fecha de emisión" value="fecha"/>
                <ExcelColumn label="Importe" value="importe"/>
                <ExcelColumn label="Comprobante No." value="nroCmp"/>
            </ExcelSheet>
        </ExcelFile>
    );
};

export default ExcelBuilder;