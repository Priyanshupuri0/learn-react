import React, { useState } from 'react'
import '../TextForm.css';
export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("Converted to Upper Case!","success");
    }
    const handleOnChange = (event) => {
        console.log('On Change');
        setText(event.target.value);
    }
    const clearEverything = () => {
        setText('');
        props.alert("Everything Erased!","success");
    }
    
    return (
        <div>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea className="form-control" id="exampleFormControlTextarea1" style={{ backgroundColor: props.mode === 'dark' ? '#51585f' : 'white', 
                    color: props.mode === 'dark' ? 'white' : 'black' }} rows="8" placeholder='Enter the text' value={text} onChange={handleOnChange}></textarea>
                    <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Upper Case</button>
                    <button className="btn btn-danger mx-2" onClick={clearEverything}>Clear</button>
                </div>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Text Summary:</h1>
                <p>Number of words are: {text.split(" ").length}  {/*This store all the individual word in an array and return the number of element in array.*/}
                    <br />
                    Number of characters are: {text.length}        {/*This gives length of all character in individual words */}
                </p><br /><br /><br />
                <h2>Preview:</h2>   
                <div className='preview_page'>{text}</div>
            </div>
        </div>
    );
}
