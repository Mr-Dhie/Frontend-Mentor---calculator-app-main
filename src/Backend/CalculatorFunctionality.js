export function CalculatorFunction(props) {



    function InputHandler(key) {
        props.setFlag(false)

        const prevOperator = props.history.charAt(props.history.length - 1); //todo
        if (prevOperator === "=") { //reset the screen when digit was entered
            props.setFlag(false)
            props.setStoredInput(null)
            props.setInput(null);
            props.setDecimalPoint(false)
            props.setHistory("")
            props.setClickedDel(0)
        }

        if (+key < 10 && (props.input === null || (props.input === "0" && key !== 0))) {//concat to numbers only
            props.setInput("")
            props.setClickedDel(0)
        }
        switch (key) {
            case 1: return props.setInput((input) => input + "1");
            case 2: return props.setInput((input) => input + "2");
            case 3: return props.setInput((input) => input + "3");
            case 4: return props.setInput((input) => input + "4");
            case 5: return props.setInput((input) => input + "5");
            case 6: return props.setInput((input) => input + "6");
            case 7: return props.setInput((input) => input + "7");
            case 8: return props.setInput((input) => input + "8");
            case 9: return props.setInput((input) => input + "9");

            case 0: {
                if (props.input === "0" && props.decimalPoint === false) return
                else props.setInput((input) => input + "0")

                // setInput((input) => input + "0")
                return
            }
            case ".": {//trigger once every input
                if (!props.decimalPoint) {
                    props.setDecimalPoint(true)
                    props.setInput((input) => input == null ? "0." : input + ".");
                }
                return
            }

            case "del": {
                if (props.clickedDel === 1) InputHandler("reset")
                else {
                    props.setInput(null)
                    props.setDecimalPoint(false)
                    props.setClickedDel((clicked) => clicked + 1)
                }
                return
            }

            case "reset": {
                props.setFlag(false)
                props.setStoredInput(null)
                props.setInput(null);
                props.setDecimalPoint(false)
                props.setHistory("")
                props.setClickedDel(0)
                return
            }

            default: //do nothing

        }

    }





    function solve(operator) {
        switch (operator) {
            case "+": return props.setStoredInput(+props.storedInput + +props.input)
            case "-": return props.setStoredInput(+props.storedInput - +props.input)
            case "x": return props.setStoredInput(+props.storedInput * +props.input)
            case "÷": {
                if (props.input === 0) { // todo
                    props.setDisplayedNumber("Cannot divide by zero")
                    props.setKey("reset")
                    return
                } else props.setStoredInput(+props.storedInput / +props.input)
                return
            }

            case "=": {
                //to do
                return
            }
            default: //do nothing

        }
    }



    function operator(op) {
        props.setClickedDel(0)
        props.setFlag(true)
        props.setDecimalPoint(false)
        if (op === "=") {
            const prevOperator = props.history.charAt(props.history.length - 1);
            if (prevOperator === "=") {
                //todo
                props.setInput(null)
                return
            }
            solve(prevOperator)
            if (props.input != null) {// will use it in todo
                props.setLastStoredNumber(props.input)
            }
        }
        if (props.input === null) {
            if (props.history.charAt(props.history.length - 1) === op) return;
            else {
                if (props.storedInput === null) {
                    props.setStoredInput("0")
                    props.setHistory((e) => e + "0" + e.substring(0, props.history.length - 1) + op)
                } else {
                    props.setHistory((history) => history.substring(0, props.history.length - 1) + op)
                }

            }
            return
        }
        else if (props.input === "0" && props.storedInput === null) {
            props.setStoredInput("0")
        }
        else if (props.storedInput === null) {
            props.setStoredInput(props.input)
        }
        else {
            const prevOperator = props.history.charAt(props.history.length - 1);
            solve(prevOperator)
        }

        props.setHistory((e) => e + props.input)
        props.setInput(null)
        props.setHistory((e) => e + op)
    }





    if (props.key !== null) {
        InputHandler(props.key);
        props.setKey(null)
    }

    if (props.op !== null) {
        operator(props.op)
        props.setOp(null)
    }


}
