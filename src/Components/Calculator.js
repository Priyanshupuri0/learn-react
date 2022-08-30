import React,{useState,useEffect} from 'react'
import '../Calculator.css';
export default function Calculator() {
    const [txt,setTxt]=useState('');
    const handleChange=(event)=>{
        console.log("On change event triggered")
        setTxt(event.target.value);
    }
    const button1=()=>{
        console.log("you have pressed C");
        setTxt('');
    }
    const button2=()=>{
        console.log("You have pressed /");
        document.title='you clicked ${txt}'
    }
    const button3=()=>{
        console.log("you have pressed C");
    }
    const button4=()=>{
        console.log("you have pressed C");
    }
    const button5=()=>{
        console.log("you have pressed C");
    }
    const button6=()=>{
        console.log("you have pressed C");
    }
    const button7=()=>{
        console.log("you have pressed C");
    }
    const button8=()=>{
        console.log("you have pressed C");
    }
    const button9=()=>{
        console.log("you have pressed C");
    }
    const button10=()=>{
        console.log("you have pressed C");
    }
    const button11=()=>{
        console.log("you have pressed C");
    }
    const button12=()=>{
        console.log("you have pressed C");
    }
    const button13=()=>{
        console.log("you have pressed C");
    }
    const button14=()=>{
        console.log("you have pressed C");
    }
    const button15=()=>{
        console.log("you have pressed C");
    }
    const button16=()=>{
        console.log("you have pressed C");
    }
    const button17=()=>{
        console.log("you have pressed C");
    }
    return (
        <div className="container">
            <h1>Calculator</h1>
            <div className='grid'>
                <div className="row">
                    <div className="item0 col-12">
                    <div className="input-group">
                        <input type="number" className="form-control" aria-label="TextField" placeholder='Enter Number' value={txt} onChange={handleChange} aria-describedby="basic-addon1" id='textBox'/>
                        </div>
                    </div>
                </div>
            <div className="row">
                <div className="item1 col-9">
                    <div className="btn btn-primary btn-lg" onClick={button1}>C</div>
                </div>
                <div className="item2 col-3">
                <div className="btn btn-primary" onClick={button2}>/</div>
                </div>
            </div>
            <div className="row">
                <div className="item3 col-3">
                <div className="btn btn-primary" onClick={button3}>7</div>
                </div>
                <div className="item4 col-3">
                <div className="btn btn-primary" onClick={button4}>8</div>
                </div>
                <div className="item5 col-3">
                <div className="btn btn-primary" onClick={button5}>9</div>
                </div>
                <div className="item6 col-3">
                <div className="btn btn-primary" onClick={button6}>*</div>
                </div>
            </div>
            <div className="row">
                <div className="item7 col-3">
                <div className="btn btn-primary" onClick={button7}>4</div>
                </div>
                <div className="item8 col-3">
                <div className="btn btn-primary" onClick={button8}>5</div>
                </div>
                <div className="item9 col-3">
                <div className="btn btn-primary" onClick={button9}>6</div>
                </div>
                <div className="item10 col-3">
                <div className="btn btn-primary" onClick={button10}>-</div>
                </div>
            </div>
            <div className="row">
                <div className="item11 col-3">
                <div className="btn btn-primary" onClick={button11}>1</div>
                </div>
                <div className="item12 col-3">
                <div className="btn btn-primary" onClick={button12}>2</div>
                </div>
                <div className="item13 col-3">
                <div className="btn btn-primary" onClick={button13}>3</div>
                </div>
                <div className="item14 col-3">
                <div className="btn btn-primary" onClick={button14}>+</div>
                </div>
            </div>
            <div className="row">
                <div className="item15 col-6">
                <div className="btn btn-primary" onClick={button15}>0</div>
                </div>
                <div className="item16 col-3">
                <div className="btn btn-primary" onClick={button16}>.</div>
                </div>
                <div className="item17 col-3">
                <div className="btn btn-primary" onClick={button17}>=</div>
                </div>
            </div>
            </div>
        </div>
    )
}
