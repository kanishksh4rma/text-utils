
import React, { useState } from 'react'

function Form(props) {
    const [text, setText] = useState("");
    
    let textUpdate = (event) => {
        setText(event.target.value);
        console.log(event.target.value);
    };

    let convertU = () => {
        console.log("UpperCase has been called!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(alert="Converted to UpperCase!");

    };
    let convertL = () => {
        console.log("LowerCase has been called!");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(alert = "Converted to LowerCase!");

    };
    let clearText = () => {
        console.log("clearText has been called!");
        setText("");
        props.showAlert(alert = "Cleared the text!");

    };
    let copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert(alert = "Copied the text!");
    };
    // let convertU = (text) =>{
    //     let newtext = text.toUpperCase();
    //     setText(newtext);
    // }

    return (
        <div>

            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={textUpdate} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div >
                <button type="button" onClick={convertU} className="btn btn-primary mx-1 my-1 " disabled={text.length===0}>convert to UpperCase</button>
                <button type="button" onClick={convertL} className="btn btn-primary mx-1 my-1" disabled={text.length===0}>convert to LowerCase</button>
                <button type="button" onClick={clearText} className="btn btn-primary mx-1 my-1" disabled={text.length===0}>Clear Text</button>
                <button type="button" onClick={copyText} className="btn btn-primary mx-1 my-1" disabled={text.length===0}>Copy Text</button>
            </div>
            <div>

                <h2 className="my-3">Text Info</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length > 0 ? text.split(" ").filter((element) => { return element.length !== 0 }).length: 0} Words and {text.length} Characters.</p>

                <h2 className="my-3">Preview</h2>
                <p>{text.length > 0 ? text : "Enter a text to preview"}</p>
            </div>
        </div>
    )
}

export default Form
