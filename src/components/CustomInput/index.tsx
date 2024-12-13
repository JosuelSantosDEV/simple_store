import React, { useState } from "react";
import { InputContent } from "./styles";

type CustomInputProps = {
    buttonTitle: string;
    placeholderInput: string;
    typeInput?: string;
    onClickButton: (value: string)=> void;
}

const CustomInput: React.FC<CustomInputProps> = ({
    buttonTitle,
    placeholderInput,
    typeInput = "text",
    onClickButton
})=>{

    const [valueInput, setValueInput] = useState("");

    return (
       <InputContent>
            <input value={valueInput} onChange={e => setValueInput(e.target.value)} placeholder={placeholderInput} type={typeInput} />
            <button onClick={() => onClickButton(valueInput)}>{buttonTitle}</button>
       </InputContent>
    )
}

export default CustomInput;