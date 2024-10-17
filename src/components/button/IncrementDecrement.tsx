import React from "react";
import { Button } from ".";

interface IProps {
    value: number;
    max?: number;
    onChange?: (value: number, e?: React.FormEvent<HTMLButtonElement>) => void;
}

function IncrementDecrement(props: IProps) {
    const { max, value, onChange } = props;

    const handleClick = (type: "increment" | "decrement", e?: React.FormEvent<HTMLButtonElement>) => {
        const newValue = type === "decrement"
            ? value - 1
            : value + 1;
        
        if (onChange) onChange(newValue, e);
    }

    return (
        <div className="flex ml-auto items-center">
            <Button
                label="-"
                onClick={(e) => handleClick("decrement", e)}
                disabled={value === 1}
            />
            <div className="p-2">{value}</div>
            <Button
                label="+"
                onClick={(e) => handleClick("increment", e)}
                disabled={max !== undefined && value === max}
            />
        </div>
    )
}

export default IncrementDecrement;