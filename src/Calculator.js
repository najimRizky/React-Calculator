import Grid from '@material-ui/core/Grid';
import React, {useEffect, useState} from "react"

export default function Calculator() {
    const [firstNum, setNewFirstNum] = useState("");
    const [secNum, setNewSecNum] = useState("");
    const [currentResults, setNewResults] = useState(0);
    const [currentOp, setNewCurrentOp] = useState('');
    const [showResult, setNewShowResult] = useState(0);
    const [commafirst, newCommaFirst] = useState(0);
    const [commaSec, newCommaSec] = useState(0);

    useEffect(() => {
        setNewShowResult(Number(firstNum) + " " + currentOp + " " + secNum)
        //console.log('Perhitungan ' + Number(firstNum) + " " + currentOp + " " + secNum);
        //console.log('Hasil = ' + currentResults)
    }, [firstNum, currentOp, secNum, currentResults, showResult]);

    function clickNum(val) {
        if(currentOp === '') setNewFirstNum(firstNum + val);
        else setNewSecNum(secNum + val)
    }

    function clickOp(val) {
        if(firstNum !== '') setNewCurrentOp(val)
    }

    function calculateResult(){
        let tempResult = 0;
        if(secNum === '') tempResult = parseFloat(firstNum);
        else{
            switch(currentOp){
                case '×':
                    tempResult = parseFloat(firstNum) * parseFloat(secNum);
                    break;
                case '÷':
                    tempResult = parseFloat(firstNum) / parseFloat(secNum);
                    break;
                case '-':
                    tempResult = parseFloat(firstNum) - parseFloat(secNum);
                    break;
                case '+':
                    tempResult = parseFloat(firstNum) + parseFloat(secNum);
                    break;
                default:
                    tempResult = parseFloat(firstNum);
            }
        }
        setNewResults(tempResult);
        setNewFirstNum(tempResult);
        setNewSecNum("")
        setNewCurrentOp('')
        newCommaFirst(0)
        newCommaSec(0)
    }

    function onDel() {
        if(secNum === '' && currentOp === '') setNewFirstNum(firstNum.slice(0,firstNum.length-1))
        else if(currentOp !== '' && secNum === '') setNewCurrentOp('')
        else setNewSecNum(secNum.slice(0,secNum.length-1))
    }

    function onClear(){
        setNewResults('');
        setNewFirstNum('');
        setNewSecNum("")
        setNewCurrentOp('')
        newCommaFirst(0)
        newCommaSec(0)
    }

    function onPercent(){
        if(firstNum !== ''){
            if(currentOp === '') setNewFirstNum(firstNum/100);
            else setNewSecNum(secNum/100)
        }
    }

    function onMinPlus(){
        if(firstNum !== ''){
            if(currentOp === '') setNewFirstNum(firstNum*-1);
            else setNewSecNum(secNum*-1)
        }
    }

    function onComma(){
        if(firstNum !== ''){
            if(currentOp === ''){
                if(commafirst ===0){
                    setNewFirstNum(firstNum + '.')
                    newCommaFirst(1)
                }
            }
            else {
                if(commaSec === 0){
                    setNewSecNum(secNum + '.')
                    newCommaSec(1)
                }
            }
        }
    }

    return (
        <div className="App">
        <header className="App-header">
            <h1>Calculator</h1>
            <div className="baseContainer">
            <Grid container item xs={12} spacing={0}>
                <Grid item xs={12}>
                    <div className="results">{showResult}</div>
                </Grid>

                <Grid item xs={3}>
                    <div className="btnSym" onClick={onClear}>C</div>
                </Grid>
                <Grid item xs={3}>
                    <div className="btnSym" onClick={onMinPlus}>+/-</div>
                </Grid>
                <Grid item xs={3}>
                    <div className="btnSym" onClick={onPercent}>%</div>
                </Grid>
                <Grid item xs={3}>
                    <div className="btnSym" onClick={onDel}>DEL</div>
                </Grid>

                <Grid item xs={3}>
                <div className="btnNum" onClick={() => {clickNum(7)}}>7</div>
                </Grid>
                <Grid item xs={3}>
                <div className="btnNum" onClick={() => {clickNum(8)}}>8</div>
                </Grid>
                <Grid item xs={3}>
                <div className="btnNum" onClick={() => {clickNum(9)}}>9</div>
                </Grid>
                <Grid item xs={3}>
                <div className="btnSym" onClick={() => {clickOp('÷')}}>÷</div>
                </Grid>

                <Grid item xs={3}>
                    <div className="btnNum" onClick={() => {clickNum(4)}}>4</div>
                </Grid>
                <Grid item xs={3}>
                    <div className="btnNum" onClick={() => {clickNum(5)}}>5</div>
                </Grid>
                <Grid item xs={3}>
                    <div className="btnNum" onClick={() => {clickNum(6)}}>6</div>
                </Grid>
                <Grid item xs={3}>
                    <div className="btnSym" onClick={() => {clickOp('×')}}>×</div>
                </Grid>

                <Grid item xs={3}>
                    <div className="btnNum" onClick={() => {clickNum(1)}}>1</div>
                </Grid>
                <Grid item xs={3}>
                    <div className="btnNum" onClick={() => {clickNum(2)}}>2</div>
                </Grid>
                <Grid item xs={3}>
                    <div className="btnNum" onClick={() => {clickNum(3)}}>3</div>
                </Grid>
                <Grid item xs={3}>
                    <div className="btnSym" onClick={() => {clickOp('-')}}>-</div>
                </Grid>

                <Grid item xs={3}>
                    <div className="btnNum" onClick={() => {clickNum(0)}}>0</div>
                </Grid>
                <Grid item xs={3}>
                    <div className="btnSym" onClick={onComma}>.</div>
                </Grid>
                <Grid item xs={3}>
                    <div className="btnEq" onClick={calculateResult}>=</div>
                </Grid>
                <Grid item xs={3}>
                    <div className="btnSym" onClick={() => {clickOp('+')}}>+</div>
                </Grid>
            </Grid>
            </div>
        </header>
    </div>
    )
}