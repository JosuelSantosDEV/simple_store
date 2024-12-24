import React from "react";
import { MainContent} from "./styles";

type Props = {
    children : React.ReactNode
}

const Main: React.FC<Props> = ({children})=>{

    return (
        <MainContent>
            {children}
        </MainContent>
    )
}

export default Main;