// frontend/src/App.js
import React, { useEffect, useState } from "react";

function App(){
  const [msg, setMsg] = useState('');
  useEffect(()=>{
    fetch('/api/message')
      .then(r=>r.json())
      .then(d=> setMsg(d.message + ' (instance: ' + (d.instance||'unknown') + ')'))
      .catch(err => setMsg('API error: ' + err.message));
  },[]);
  return (
    <div style={{textAlign:'center', marginTop:80}}>
      <h1>Fullstack App</h1>
      <p>{msg}</p>
    </div>
  )
}
export default App;
