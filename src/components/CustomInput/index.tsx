import React, { useState } from "react";
import { InputContent } from "./styles";
import { useAppDispatch } from "../../store";
import { setQuery } from "../../store/reducers/search";

type CustomInputProps = {
    buttonTitle: string;
    placeholderInput: string;
    typeInput?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
    buttonTitle,
    placeholderInput,
    typeInput = "text",
})=>{

    const [valueInput, setValueInput] = useState("");
    const dispatch = useAppDispatch();

    const onSearchInput = () => {
        dispatch(setQuery(valueInput));
    }

    return (
       <InputContent>
            <input value={valueInput} onChange={e => setValueInput(e.target.value)} placeholder={placeholderInput} type={typeInput} />
            <button onClick={onSearchInput}>{buttonTitle}</button>
       </InputContent>
    )
}

export default CustomInput;