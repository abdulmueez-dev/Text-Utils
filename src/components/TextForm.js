import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = ()=>{
        // console.log("Upclick" + text)
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!")
    }
    const handleLoClick = ()=>{
        // console.log("Upclick" + text)
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!")
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const clearText = ()=>{
        setText("");
        props.showAlert("Text Area Cleared!")
    }
    const handleCopy = ()=>{
        var copyText = document.getElementById("exampleFormControlTextarea1");
        copyText.select();
        try {
            var copytext = document.execCommand("copy");
        } 
        catch (err) 
        { 
            console.log('Error while copying to clipboard: ' + err + copytext);
        }        
        props.showAlert("Copied to clipboard!")
    }
    const handleSpaces = ()=>{
        const newtext = text.replace(/\s+/g, ' ').trim()
        setText(newtext)
        props.showAlert("Extra Spaces Removed!")
    }
   
    return (
        <div className={`text-${props.mode === 'light'?'dark':'light'} mx-2`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control text-${props.mode === 'light'?'dark':'light'}`} id="exampleFormControlTextarea1"  rows="6" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'rgb(31 31 32)'}} ></textarea>
            </div>
            <button type="button" disabled={text.length===0} className={`btn btn-${props.mode==='light'?'info':'primary'} mx-1 my-1`} onClick={handleUpClick}>Convert to UpperCase</button>
            <button type="button" disabled={text.length===0} className={`btn btn-${props.mode==='light'?'info':'primary'} mx-1 my-1`} onClick={handleLoClick}>Convert to LowerCase</button>
            <button type="button" disabled={text.length===0} className={`btn btn-${props.mode==='light'?'info':'primary'} mx-1 my-1`} onClick={handleSpaces}>Remove Extra Spaces</button>
            <button type="button" disabled={text.length===0} className={`btn btn-${props.mode==='light'?'info':'primary'} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
            <button type="button" disabled={text.length===0} className={`btn btn-${props.mode==='light'?'info':'primary'} mx-1 my-1`} onClick={clearText}>Clear Text</button>
            <h4 className='my-3'>Your Text's Summary</h4>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h4>Text Preview</h4>
            <p>{text.length>0?text:"Nothing to preview!!!"}</p>
        </div>
    )
}