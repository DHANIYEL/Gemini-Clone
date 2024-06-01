import { createContext, useState } from "react"
import run from "../config/key"

export const Context = createContext();


const ContextProvider = (props) => {


    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showReslut, setShowReslut] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const onSent = async (prompt)=> {
        setResultData("")
        setLoading(true)
        setShowReslut(true)
        setRecentPrompt(input)
        const response = await run(input)
        setResultData(response)
        setLoading(false)
        setInput("")        
    }


    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showReslut,
        loading,
        resultData,
        input,
        setInput

    }

    return (
        <Context.Provider value={contextValue} > 
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;