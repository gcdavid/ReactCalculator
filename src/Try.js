import { Reducer } from "react";
import React from 'react'
import './try.css'

export const Try = () => {
    return (
        <div class="calculator">
            <div className="Outp">
                <div className="previous">1</div>
                    <div className="current">
                    2
                    </div>
                </div>
            <button className="span-t">AC</button>
            <button>DEL</button>
            <button>%</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>*</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button className="span-t">=</button>
            </div>
    )
}
