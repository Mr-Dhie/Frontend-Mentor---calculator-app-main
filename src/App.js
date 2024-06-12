import React from "react";
import Calculator from "./UI/Calculator";
import { CalculatorContext } from "./Backend/CalculatorContext";

const App = () => {
    return (
        <main>
            <CalculatorContext>
                <Calculator />
            </CalculatorContext>
        </main>
    )
}

export default App