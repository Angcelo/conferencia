import React from "react";

const ReusableTextarea = ({ rows = 3, name, label, onChange, placeholder, value, error, wrapperClass = "mb-3", inputClass = "form-control", required = true, disabled = false }) => {
    if (error && error.length > 0) {
        console.log(error)
        wrapperClass += " has-error";
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{required ? "* " : ""}{label}</label>
            <div className="field">
                <textarea
                    rows={rows}
                    name={name}
                    className={inputClass}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                />
                {error && <div style={{
                    color: "red",
                    fontSize: "12px"
                }}>{error}</div>}
            </div>
        </div>
    );
};

export default ReusableTextarea;
