import { useState } from "react"

export default function About() {

  const [btnText, btnTextState] = useState('Enable dark mode');

  const [myStyle, myStyleState] = useState({
      color: 'black',
      backgroundColor: 'white'
  });

  const modeChangeHandler = () => {
    if(myStyle.color === 'black'){
        myStyleState({
            color: 'white',
            backgroundColor: 'black'
        });
        btnTextState('Enable light mode');
    }else{
        myStyleState({
            color: 'black',
            backgroundColor: 'white'
        });
        btnTextState('Enable dark mode');
    }
  }

  return (
   <div style={myStyle}>
       <p>We are leading company in India.</p>
       <button className="btn btn-primary" onClick={modeChangeHandler}>{btnText}</button>
   </div>
  )
}
