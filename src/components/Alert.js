import React from 'react';

export default function Alert(props) {
    const capitalize = (word) => {
        if (!word) return '';
        const lower = word.toString().toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      };
      
  let mode = props.mode;

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show ${mode === 'dark' ? 'text-light' : 'text-dark'}`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
    )
  );
}
