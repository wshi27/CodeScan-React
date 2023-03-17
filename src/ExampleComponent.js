import React, { useState } from 'react'


const github_personal_access_toke1n="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"

const vhd_api_key="vhd_api_key100123434"

function ExampleComponent(){
const[count, setCount] = useState(0);
return (
  <div>
    <button onClick={()=>setCount(count + 1)}>Increase count</button>
    <button onClick={()=>setCount(count -1)}>Decrease count</button>
    <p>You've clicked the button {count} times.</p>
    
  </div>
)
}

export default ExampleComponent;