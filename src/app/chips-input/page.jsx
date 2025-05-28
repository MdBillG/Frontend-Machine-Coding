"use client";

import React, { useState } from "react";

const ChipsInput = () => {

    const [inputVlaue, setInoutValue] = useState("");
    const [showChips, setShowChips] = useState([]);
    const onKeyDown = (e) => {
        if (e.key === 'Enter' && inputVlaue !== "") {
            setShowChips((showChips) => [...showChips, inputVlaue]);
            setInoutValue("");
        }
    }
    return (
        <div className="flex flex-col items-center p-4 gap-1">
            <h1> This is the chips</h1>
            <input type="text"
                className="border-2 border-gray-300 rounded-md p-2"
                placeholder="Type and press enter"
                onChange={(e) => {
                    setInoutValue(e.target.value);
                }}
                value={inputVlaue}
                onKeyDown={(e) => {
                    onKeyDown(e)
                }}
            />
            {showChips.map((chip, index) =>
                <div className="border border-amber-200 flex   gap-2 items-center rounded-md p-2" key={index}>
                    {chip}
                    <button className="cursor-pointer" onClick={() => setShowChips((showChips) => showChips.filter((item, i) => i !== index))}>x</button>
                </div>
            )}
        </div>
    )
};

export default ChipsInput;
