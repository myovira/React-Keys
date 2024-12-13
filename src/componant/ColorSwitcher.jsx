import React, { useState } from 'react'

const ColorSwitcher = () => {

    let globalclr = "black"
    const [Clr, setClr] = useState(globalclr);

    function change() {
        let colr = "red"
        setClr(colr)
    }
    function change1() {
        let colr1 = "green"
        setClr(colr1)
    }
    function change2() {
        let colr2 = "blue"
        setClr(colr2)
    }
    function change3() {
        let colr3 = "orange"
        setClr(colr3)
    }
    function change4() {
        let colr4 = "pink"
        setClr(colr4)
    }
    function change5() {
        let colr5 = "purple"
        setClr(colr5)
    }

    return (
        <div className='totalBox' style={{ backgroundColor: Clr }}>
            <div className='box'>
                <button onClick={change} className='btn1'></button>
                <button onClick={change1} className='btn2'></button>
                <button onClick={change2} className='btn3'></button>
                <button onClick={change3} className='btn4'></button>
                <button onClick={change4} className='btn5'></button>
                <button onClick={change5} className='btn6'></button>
            </div>

        </div>
    )
}

export default ColorSwitcher
