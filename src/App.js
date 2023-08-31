import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { React, useState, useEffect } from 'react';
import axios from 'axios'

function App() {

      const apiKey="04fa982df9802cc0c5d415fb9e44f1c2"

      const[data, setData]=useState({})
      const[inputCity, setInputCity]=useState("")

      const getWeatherDetails=(city)=>{
        if(!city )return
          const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey
          const data= axios.get(apiURL).then((res)=>{
          console.log(res.data)

          setData(res.data)

         }).catch((err)=>{
          console.log(err)
         })
      }
    

      const handleSearch=()=>{
        getWeatherDetails(inputCity)
      }
    
      useEffect(()=>{
       getWeatherDetails("lahore")
      },[])
    
      const handleInputCity=(e)=>{
        console.log(inputCity)
        setInputCity(e.target.value)
      }




  return (
    <div className="col-md-12">
     <div className="weatherBg">
      <h2 className="headi">Weather App</h2>

    <div className="d-grid gap-3 col-4 mt-3">
        <input className="form-control" type="text"
         value={inputCity} 
          onChange={handleInputCity}/>
        <button className="btn btn-primary"  type="button" onClick={handleSearch}>Search</button>
    </div>
     </div>

     <div className="col-md-12 text-center mt-5">
      <div className="shadow rounded weatherResultBox">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XTb5h9cUJ7x-FmV8s3QYXTKlh6oehZkpdg&usqp=CAU" alt="" />
        <h5 className="weatherCity">{data?.name}</h5>
        <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}C</h6>
      </div>

     </div>

    </div>
  );
}

export default App;
