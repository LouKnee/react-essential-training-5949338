import './App.css'

function subBit()
{
    return  "this is sub bit"
}


function App() {

  let thing = "😁😁";
  return (
    <h1>Hello react {thing}
      <h3>{subBit()}</h3>
     </h1>
  ) 
}

export default App
