import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    //console.log("Upper Case was clicked: "+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case","success");
  }
  const handleLoClick=()=>{
    //console.log("Upper Case was clicked: "+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case","success");
  }
  const handleClearClick=()=>{
    //console.log("Upper Case was clicked: "+text);
    let newText='';
    setText(newText);
    props.showAlert("Text Cleared","success");
  }

  
  const handleOnChange=(event)=>{
    //console.log("On Change");
    setText(event.target.value);
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard","success");
  }
   
  const handleExtraSpaces= ()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces Removed","success");
  }

  const [text, setText] = useState(''); 
  //setText("new text"); correct way to change the state
  return (
    <>
    <div className="Container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'#042743'}}id="myBox " rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
