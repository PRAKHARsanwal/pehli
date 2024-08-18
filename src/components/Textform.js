import React,{useState} from 'react'

export default function Textform(props) {
    const handleup= ()=>{
       // console.log("UpperCase Conversion");
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const cleartxt= ()=>{
        
        setText("")
    }
    const handlelow= ()=>{
        // console.log("LowerCase Conversion");
         let newtext=text.toLowerCase();
         setText(newtext)
     }
    const handleonchange= (event)=>{
        setText(event.target.value)
        //console.log("Onchange");
    }
        const[text,setText] = useState("Enter your text");
  return (
    <>
    <div className="container">
    <div>
     <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonchange} id="mybox"rows="8"></textarea>
</div>
<button className="btn btn-success mx-2" onClick={handleup}>Convert to UpperCase</button>
<button className="btn btn-success mx-2" onClick={handlelow}>Convert to LowerCase</button>
<button className="btn btn-success mx-2" onClick={cleartxt}>Clear text</button>
    </div>
    </div>
    <div className="container my-3">
        <h2>Your text Summary:</h2><br />
        <p> Words: {text.split(" ").length} <br /> Characters: {text.length}</p>
        <p>Time taken to read your text = {(0.5/125)*text.split(" ").length} mins</p>
        <h3>Preview</h3>
        <p>{text}</p>

    </div>
  
    </>
   
  )
}
