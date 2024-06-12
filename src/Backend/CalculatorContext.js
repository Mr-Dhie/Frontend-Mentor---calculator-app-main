import { createContext } from "react";



export const ThemesContext = createContext(null)

export function CalculatorContext({ children }) {

    function themesHandler() {
        const options = document.querySelectorAll('input[type="radio"]');

        const body = document.querySelector("body")
        const spans = document.querySelectorAll("span")
        const calculator__screen = document.querySelector(`.calculator__screen`)
        const keypad_background = document.querySelector(`.calculator__buttons`)
        const buttons = document.querySelectorAll(`.calculator__buttons button`)
        const del_btn = document.getElementById("del_btn")
        const reset_btn = document.getElementById("reset_btn")
        const equal_btn = document.getElementById("equal_btn")
        const toggle_background = document.querySelector(`.theme_toggle-radio-sliders`)
        const toggle_button = document.querySelectorAll(`.theme_toggle-radio-sliders label`)


        options.forEach(option => {
            if (option.checked) {

                switch (option.id) {
                    case "theme1": {
                        body.classList.remove("body-t2")
                        body.classList.remove("body-t3")
                        body.classList.add("body-t1")

                        spans.forEach(span => {
                            span.classList.remove("cal_header-span-t2")
                            span.classList.remove("cal_header-span-t3")
                            span.classList.add("cal_header-span-t1")
                        })

                        calculator__screen.classList.remove("cal_screen-t2")
                        calculator__screen.classList.remove("cal_screen-t3")
                        calculator__screen.classList.add("cal_screen-t1")

                        keypad_background.classList.remove("cal_buttons-t2")
                        keypad_background.classList.remove("cal_buttons-t3")
                        keypad_background.classList.add("cal_buttons-t1")

                        buttons.forEach(button => {
                            button.classList.remove("cal_buttons-button-t2")
                            button.classList.remove("cal_buttons-button-t3")
                            button.classList.add("cal_buttons-button-t1")
                        })

                        del_btn.classList.remove("del_btn-t2")
                        del_btn.classList.remove("del_btn-t3")
                        del_btn.classList.add("del_btn-t1")

                        reset_btn.classList.remove("reset_btn-t2")
                        reset_btn.classList.remove("reset_btn-t3")
                        reset_btn.classList.add("reset_btn-t1")

                        equal_btn.classList.remove("equal_btn-t2")
                        equal_btn.classList.remove("equal_btn-t3")
                        equal_btn.classList.add("equal_btn-t1")

                        toggle_background.classList.remove("cal_buttons-t3")
                        toggle_background.classList.remove("cal_buttons-t2")
                        toggle_background.classList.add("cal_buttons-t1")

                        toggle_button[1].style.backgroundColor = ''
                        toggle_button[2].style.backgroundColor = ''
                        toggle_button[0].style.backgroundColor = 'var(--red-background_theme1)'

                        return
                    }

                    case "theme2": {
                        body.classList.remove("body-t1")
                        body.classList.remove("body-t3")
                        body.classList.add("body-t2")

                        spans.forEach(span => {
                            span.classList.remove("cal_header-span-t1")
                            span.classList.remove("cal_header-span-t3")
                            span.classList.add("cal_header-span-t2")
                        })

                        calculator__screen.classList.remove("cal_screen-t1")
                        calculator__screen.classList.remove("cal_screen-t3")
                        calculator__screen.classList.add("cal_screen-t2")

                        keypad_background.classList.remove("cal_buttons-t1")
                        keypad_background.classList.remove("cal_buttons-t3")
                        keypad_background.classList.add("cal_buttons-t2")

                        buttons.forEach(button => {
                            button.classList.remove("cal_buttons-button-t1")
                            button.classList.remove("cal_buttons-button-t3")
                            button.classList.add("cal_buttons-button-t2")
                        })

                        del_btn.classList.remove("del_btn-t1")
                        del_btn.classList.remove("del_btn-t3")
                        del_btn.classList.add("del_btn-t2")

                        reset_btn.classList.remove("reset_btn-t1")
                        reset_btn.classList.remove("reset_btn-t3")
                        reset_btn.classList.add("reset_btn-t2")

                        equal_btn.classList.remove("equal_btn-t1")
                        equal_btn.classList.remove("equal_btn-t3")
                        equal_btn.classList.add("equal_btn-t2")

                        toggle_background.classList.remove("cal_buttons-t1")
                        toggle_background.classList.remove("cal_buttons-t3")
                        toggle_background.classList.add("cal_buttons-t2")

                        toggle_button[0].style.backgroundColor = ''
                        toggle_button[2].style.backgroundColor = ''
                        toggle_button[1].style.backgroundColor = 'var(--orange-background_theme2)'

                        return
                    }
                    case "theme3": {
                        body.classList.remove("body-t1")
                        body.classList.remove("body-t2")
                        body.classList.add("body-t3")

                        spans.forEach(span => {
                            span.classList.remove("cal_header-span-t1")
                            span.classList.remove("cal_header-span-t2")
                            span.classList.add("cal_header-span-t3")
                        })

                        calculator__screen.classList.remove("cal_screen-t1")
                        calculator__screen.classList.remove("cal_screen-t2")
                        calculator__screen.classList.add("cal_screen-t3")

                        keypad_background.classList.remove("cal_buttons-t1")
                        keypad_background.classList.remove("cal_buttons-t2")
                        keypad_background.classList.add("cal_buttons-t3")

                        buttons.forEach(button => {
                            button.classList.remove("cal_buttons-button-t1")
                            button.classList.remove("cal_buttons-button-t2")
                            button.classList.add("cal_buttons-button-t3")
                        })

                        del_btn.classList.remove("del_btn-t1")
                        del_btn.classList.remove("del_btn-t2")
                        del_btn.classList.add("del_btn-t3")

                        reset_btn.classList.remove("reset_btn-t1")
                        reset_btn.classList.remove("reset_btn-t2")
                        reset_btn.classList.add("reset_btn-t3")

                        equal_btn.classList.remove("equal_btn-t1")
                        equal_btn.classList.remove("equal_btn-t2")
                        equal_btn.classList.add("equal_btn-t3")

                        toggle_background.classList.remove("cal_buttons-t1")
                        toggle_background.classList.remove("cal_buttons-t2")
                        toggle_background.classList.add("cal_buttons-t3")

                        toggle_button[0].style.backgroundColor = ''
                        toggle_button[1].style.backgroundColor = ''
                        toggle_button[2].style.backgroundColor = 'var(--cyan-background_theme3)'

                        return
                    }
                    default: //do nothing
                }
            } 
        });
    }

    return (

        <ThemesContext.Provider value={themesHandler}>
            {children}
        </ThemesContext.Provider>
    )

}