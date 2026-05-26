import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import InputBox from './components/Input'
import getData from './hooks/getData'

function App() {

    const [amount , setAmount] = useState(0);
    const [convertedAmount , setConvertedAmount] = useState(0);
    const [from , setFrom] = useState("usd");
    const [to , setTo] = useState("inr");

    const data = getData(from);
    const options = Object.keys(data);
    return (
        <>
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://media.istockphoto.com/id/1487894858/photo/candlestick-chart-and-data-of-financial-market.jpg?s=612x612&w=0&k=20&c=wZ6vVmbm4BV2JOePSnNNz-0aFVOJZ0P9nhdeOMGUg5I=')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setConvertedAmount(data[to] * amount);
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From" 
                                amount={amount}
                                onAmountChange = {(amount)=>{
                                    setAmount(amount);
                                }}
                                currency={from}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>{setFrom(currency)}}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={
                                    ()=>{
                                        setFrom(to);
                                        setTo(from);
                                        setAmount(convertedAmount);
                                        setConvertedAmount(amount);
                                    }
                                }
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To" 
                                amount={convertedAmount}
                                onAmountChange = {(amount)=>{
                                    setConvertedAmount(amount);
                                }}
                                currency={to}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>{setTo(currency)}}
                                amountDisable={true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default App;
