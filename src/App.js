import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import './App.css';
import { useState } from 'react';

function App() {
  // js code
  const [principle, setPrinciple] = useState(0) // principal amount
  const [rate,setRate] = useState(0) //rate
  const [year, setYear] = useState(0) //year
  const [interest , setInterest] = useState(0) //simple interest
  const [IsPrinciple , setIsPrinciple] = useState(0)
  const [isRate , setIsRate] = useState(0)
  const [isYear , setIsYear] = useState(0)

  const validateData = (e)=>{
    const {name , value} = e.target
    /* console.log(name , value); */
   /*  console.log(!!value.match(/^[0-9]+$/)); */
   if(!!value.match(/^[0-9]*.?[0-9]+$/)) {
    if(name==='principle'){
    setPrinciple(value)
    setIsPrinciple(true)
   }
   else if(name==='rate'){
    setRate(value)
    setIsRate(true)
   }
   else if(name=='year'){
    setYear(value)
    setIsYear(true)
   }
  }
  else{
    if(name=='principle'){
      setPrinciple(value)
      setIsPrinciple(false)
     }
     else if(name=='rate'){
      setRate(value)
      setIsRate(false)
     }
     else if(name=='year'){
      setYear(value)
      setIsYear(false)
     } 
  }
  }
  const handleCalculate = (e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert('Please fill the form completely')
    }else
    {
      setInterest(principle*rate*year/100)
    }
  }

  const handleReset = (e)=>{
    setPrinciple(0)
    setInterest(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100'>
      <div className='bg-warning p-5 rounded' style={{width:'500px',}}>
         <h1>Simple Interest App</h1>     
         <p>Calculate your simple interest easily</p> 
         
         <div style={{height:'150px',cursor:'grab'}} className='bg-light mt-5 d-flex justify-content-center align-items-center rounded-pill flex-column shadow w-100'>
          <h1>₹  {interest}</h1>
          <p>Total simple interest</p>
         </div>

         <form className='mt-5'  onSubmit={handleCalculate}>
          <div className='mb-3'>
            <TextField name="principle" value={principle || ""} onChange={(e)=>validateData(e)} className='w-100' id="outlined-basic" label="₹ Principal Amount" variant="outlined" />
            </div>
 
            { !IsPrinciple &&
                
                <div><p className='text-danger fw-bolder'>Invalid Input</p></div>

            } 

            <div className='mb-3'>
            <TextField name="rate" value={rate || ""} onChange={(e)=>validateData(e)} className='w-100' id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />
            </div>

            { !isRate &&
                
                <div><p className='text-danger fw-bolder'>Invalid Input</p></div>

            } 

            <div className='mb-3'>
            <TextField name="year" value={year || ""} onChange={(e)=>validateData(e)} className='w-100' id="outlined-basic" label="Year (Yr)" variant="outlined" />
            </div>

            { !isYear &&
                
                <div><p className='text-danger fw-bolder'>Invalid Input</p></div>

            }
 
            <div className='mt-4'>
              <Stack direction="row" spacing={2}>
              <Button  disabled={IsPrinciple && isRate && isYear ? false:true} className="bg-success" style={{height:"60px",width:"200px"}} variant="contained" type='submit'>Calculate</Button>
              <Button onClick={handleReset} style={{height:"60px",width:"200px"}} variant="outlined">Reset</Button>
          </Stack>
          </div>
          </form>
      </div>
    </div>
  );
}


export default App;
