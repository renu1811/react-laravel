import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';


function Calculator(){
    const[next,setNext] = useState("");
    const[prev,setPrev] = useState("");
    const[op,setOp]= useState("");
    const handleClear = ()=>{
        setOp("");
        setNext("");
        setPrev("");
    }
    const handleCalc =(e)=>{
        let cVal = e.target.value;
        
        if(!isNaN(cVal)){
            console.log('number');
            setNext(next.concat(e.target.value))

        }else{
            console.log('operator');
            setOp(cVal);
            setPrev(next);
            setNext("");
        }
        
    }
    const handleCalculate = () => {
        switch(op){
            case "+":
                console.log(prev,"sdfs" +next, op);
                setNext((parseFloat(prev) + parseFloat(next)).toString());
                
                break;
            case "-":
                setNext((parseFloat(prev) - parseFloat(next)).toString());
                break;
            case "/":
                setNext((parseFloat(prev) / parseFloat(next)).toString());
                break;
            case "*":
                setNext((parseFloat(prev) * parseFloat(next)).toString());
                break;
        }
        setPrev("");
        setOp("");
    }
    return(
    <div className="calculator card">
        
        <h2 className="calculator-screen z-depth-1" >{next}</h2>
        <div className='calculator-keys'>
            <Button value="+" onClick={handleCalc} data-mdb-ripple-init className="operator btn btn-info ">+</Button>
            <Button value="-" onClick={handleCalc} data-mdb-ripple-init className=" operator btn btn-info">-</Button>
            <Button value="/" onClick={handleCalc}  data-mdb-ripple-init className="operator btn btn-info"  >/</Button>


            <Button value="*" onClick={handleCalc}  data-mdb-button-initclassName="operator btn btn-info" >*</Button>
            
            
            <Button value="1" onClick={handleCalc} data-mdb-ripple-init className="btn btn-light waves-effect">1</Button>
            <Button value="2" onClick={handleCalc} data-mdb-ripple-init className="btn btn-light waves-effect">2</Button>


            <Button value="3" onClick={handleCalc} data-mdb-ripple-init className="btn btn-light waves-effect">3</Button>
            <Button value="4" onClick={handleCalc} data-mdb-ripple-init className="btn btn-light waves-effect">4</Button>
            <Button value="5" onClick={handleCalc} data-mdb-ripple-init className="btn btn-light waves-effect">5</Button>
            
            
            <Button value="6" onClick={handleCalc} data-mdb-ripple-init className="btn btn-light waves-effect">6</Button>
            <Button value="7" onClick={handleCalc} data-mdb-ripple-init className="btn btn-light waves-effect">7</Button>
            <Button value="8" onClick={handleCalc} data-mdb-ripple-init className="btn btn-light waves-effect">8</Button>
            <Button value="9" onClick={handleCalc} data-mdb-ripple-init className="btn btn-light waves-effect">9</Button>
            <Button value="0" onClick={handleCalc} data-mdb-ripple-init className="btn btn-light waves-effect">0</Button>
            
        
        
            <Button value="=" onClick={handleClear}  data-mdb-button-init className="operator btn btn-info">AC</Button>
            <Button value="=" onClick={ handleCalculate}  data-mdb-button-init className="equal-sign operator btn btn-default">=</Button>
        </div>
       
   </div>

   


   )
  
}

export default Calculator;