import { useState } from "react";

export default function TextForm(props){
    const upperCaseClickHandler = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text convert into uppercase', 'success');
    }

    const lowerCaseClickHandler = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text convert into lowercase', 'success');
    }

    const textAreaChangeHandler = (event) =>{
        setText(event.target.value);
    }

    const reverseTextHandler = () =>{
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert('Reverse done', 'success');
    }

    const clearTextHandler = () =>{
        setText('');
        props.showAlert('Clear', 'success');
    }

    const [text, setText] = useState('Enter text here');

    return (<>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="textBox" rows="8" value={text} onChange={textAreaChangeHandler} style={{backgroundColor: props.mode==='dark'? '#042743': 'white', color:props.mode=== 'dark'?'white': 'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={upperCaseClickHandler}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={lowerCaseClickHandler}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={reverseTextHandler}>Reverse Text</button>
            <button className="btn btn-primary mx-1" onClick={clearTextHandler}>Clear Text</button>
        </div>
        <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Min reading time</p>
        </div>
        <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
        </div>
    
    </>);    
}