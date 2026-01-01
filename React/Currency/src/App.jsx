// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


// // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     </>
//   )
// }

// export default App


import { useEffect, useState } from "react";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  // Fetch currency list
  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrencies(Object.keys(data));
      });
  }, []);

  // Convert currency
  const convert = () => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        const rate = data[from][to];
        setResult((amount * rate).toFixed(2));
      });
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h2>💱 Currency Converter</h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />

      <br /><br />

      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {currencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur.toUpperCase()}
          </option>
        ))}
      </select>

      <span style={{ margin: "0 10px" }}>→</span>

      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {currencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur.toUpperCase()}
          </option>
        ))}
      </select>

      <br /><br />

      <button onClick={convert}>Convert</button>

      {result && (
        <h3>
          Result: {amount} {from.toUpperCase()} = {result}{" "}
          {to.toUpperCase()}
        </h3>
      )}
    </div>
  );
}

export default App;
