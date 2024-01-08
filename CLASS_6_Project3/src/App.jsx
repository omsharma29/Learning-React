import { useState } from 'react'
import {InputBox} from './components/index'
import useCurrencyInfo from "./hooks/usecurrencyinfo";



function App() {
 const [amount, setAmount] = useState(0)
 const [from, setFrom] = useState("usd")
 const [to, setTo] = useState("inr")
 const [covertedAmount , setCovertedAmount] = useState(0)

 const currencyinfo = useCurrencyInfo(from)
 const options = Object.keys(currencyinfo)

 const swap = ()=>{
  setFrom(to)
  setTo(from)
  setCovertedAmount(amount)
  setAmount(covertedAmount)
 }

 const convert = ()=>{
  setCovertedAmount(amount * currencyinfo[to])
 }


 return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundColor: 'black',
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount = {amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=> setFrom(currency)}
                          selectCurrency={from}
                          onAmountChange={(amount)=>setAmount(amount)}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount = {covertedAmount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=> setTo(currency)}
                          selectCurrency={to}
                          onAmountChange={(amount)=>setAmount(amount)}

                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert  {from.toUpperCase()} to {to.toLowerCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
