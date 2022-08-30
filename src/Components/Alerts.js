import React from 'react'

export default function Alerts(props) {
    const cap=(words)=>{
        let lower=words.toLowerCase();
        return(lower.charAt(0).toUpperCase()+lower.slice(1));
    }
  return (
    props.alert && <div className="alert alert-primary" role="alert">
    <strong>{cap(props.alert.type)}</strong>: {props.alert.msg}
  </div>
  )
}
