import React, { useState, useEffect, useContext } from "react";
import { CalculatorFunction } from "../Backend/CalculatorFunctionality";
import { ThemesContext } from "../Backend/CalculatorContext";
import { addcomma } from "../Backend/addingcomma";
import './Calculator.css'
import '../Theme/themes.css'

const Calculator = () => {
    const [input, setInput] = useState(null)
    const [displayedNumber, setDisplayedNumber] = useState(input)
    const [storedInput, setStoredInput] = useState(null)
    const [lastStoredNumber, setLastStoredNumber] = useState(null)
    const [flag, setFlag] = useState(false) // shifting from storeInput || input display
    const [history, setHistory] = useState("")
    const [decimalPoint, setDecimalPoint] = useState(false)
    const [clickedDel, setClickedDel] = useState(0)
    const [key, setKey] = useState(null)
    const [op, setOp] = useState(null)

    const props = {
        input: input, setInput: setInput,
        displayedNumber: displayedNumber, setDisplayedNumber: setDisplayedNumber,
        storedInput: storedInput, setStoredInput: setStoredInput,
        lastStoredNumber: lastStoredNumber, setLastStoredNumber: setLastStoredNumber,
        flag: flag, setFlag: setFlag,
        history: history, setHistory: setHistory,
        decimalPoint: decimalPoint, setDecimalPoint: setDecimalPoint,
        clickedDel: clickedDel, setClickedDel: setClickedDel,
        key: key, setKey: setKey,
        op: op, setOp: setOp
    }

    useEffect(() => {
        const toDisplay = addcomma((flag) ? (storedInput == null) ? "0" : storedInput : (input == null) ? "0" : input)
        setDisplayedNumber(toDisplay)
    }, [input, flag, storedInput])

    useEffect(() => {
        CalculatorFunction(props) // trial
    })

    const themesHandler = useContext(ThemesContext)
    themesHandler()

    return (
        <section className="wrapper">
            <div className="calculator__container">
                <div className="calculator__header">
                    <div className="calculator-name"><span>calc</span></div>
                    <div className="calculator__header_toggle">
                        <div className="calculator-theme"><span>theme</span></div>
                        <div className="calculator__header_toggle-toggle">
                            <div className="theme_toggle-numbers">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                            </div>
                            <div className="theme_toggle-radio-sliders">
                                <input type="radio" id="theme1" name="theme" onClick={themesHandler} defaultChecked />
                                <label htmlFor="theme1"></label>
                                <input type="radio" id="theme2" name="theme" onClick={themesHandler} />
                                <label htmlFor="theme2"></label>
                                <input type="radio" id="theme3" name="theme" onClick={themesHandler} />
                                <label htmlFor="theme3"></label>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="calculator__screen">
                    <div className="calculator__screen-history">{history}</div>
                    <div className="calculator__screen-display">{displayedNumber}</div>
                </div>
                <div className="calculator__buttons">
                    <div className="calculator__buttons-row">
                        <button onClick={() => setKey(7)}>7</button>
                        <button onClick={() => setKey(8)}>8</button>
                        <button onClick={() => setKey(9)}>9</button>
                        <button onClick={() => setKey("del")} id="del_btn">DEL</button>

                    </div>
                    <div className="calculator__buttons-row">
                        <button onClick={() => setKey(4)}>4</button>
                        <button onClick={() => setKey(5)}>5</button>
                        <button onClick={() => setKey(6)}>6</button>
                        <button onClick={() => setOp("+")}>+</button>
                    </div>
                    <div className="calculator__buttons-row">
                        <button onClick={() => setKey(1)}>1</button>
                        <button onClick={() => setKey(2)}>2</button>
                        <button onClick={() => setKey(3)}>3</button>
                        <button onClick={() => setOp("-")}>-</button>
                    </div>
                    <div className="calculator__buttons-row">
                        <button onClick={() => setKey(".")}>.</button>
                        <button onClick={() => setKey(0)}>0</button>
                        <button onClick={() => setOp("÷")}>/</button>
                        <button onClick={() => setOp("x")} style={{ fontSize: ".7rem" }}>x</button>
                    </div>
                    <div className="calculator__buttons-row">
                        <button style={{ flex: "1" }} onClick={() => setKey("reset")} id="reset_btn">RESET</button>
                        <button style={{ flex: "1" }} onClick={() => setOp("=")} id="equal_btn">=</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Calculator