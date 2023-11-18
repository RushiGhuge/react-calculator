import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

const CalculatorBox = () => {

    // react useState Hooks variables...
    const [result, setResult] = useState(null);
    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [flag, setFlag] = useState(false);
    const [redGreen, setRedGreen] = useState('green');


    // this function handel the button click of operations
    function handelOperation(e) {
        // console.log( num1);
        setFlag('false');

        if (isNaN(num1) || isNaN(num2)) {
            setResult('Plz Enter The Number Only...')
            setFlag('Error!');
            setRedGreen('red')
            return
        }

        if (!num1) {
            setResult('Num1 Connot be Empty')
            setFlag('Error!');
            setRedGreen('red')
            return;
        }
        else if (!num2) {
            setResult('Num2 Connot be Empty')
            setFlag('Error!');
            setRedGreen('red')
            return;
        }




        let op = e.target.innerText;
        switch (op) {
            case '+':
                setResult(num1 + num2)
                setFlag('Success!');
                break;

            case '-':
                setResult(num1 - num2)
                setFlag('Success!');
                break;

            case '×':
                setResult(num1 * num2)
                setFlag('Success!');
                break;

            case '÷':
                setResult(num1 / num2)
                setFlag('Success!');
                break;

            default:
                break;
        }
        setRedGreen('green')

        // console.log(result);

    }

    return (
        <div className="container">

            <h1>React Calculator</h1>

            <input type="text" onChange={(e) => setNum1(Number(e.target.value))} placeholder="0" />
            <input type="text" onChange={(e) => setNum2(Number(e.target.value))} placeholder="0" />


            <div className="btns">
                <button onClick={handelOperation} >+</button>
                <button onClick={handelOperation} >-</button>
                <button onClick={handelOperation} >×</button>
                <button onClick={handelOperation} >÷</button>
            </div>

            {flag && <h3 style={{ color: redGreen }}> {flag}</h3>}

            {result == 0 && <h2>Result : {result}</h2>}
            
            {result != 0 ? result && <h2>Result : {result}</h2> :'' }
           

        </div>
    )
}


export default CalculatorBox;