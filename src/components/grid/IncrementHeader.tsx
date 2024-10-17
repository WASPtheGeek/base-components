import React from "react";
import { IncrementDecrement } from "../button";

interface IProps<T> {
    children?: React.ReactNode;
    data?: T[] | null;
    hideIncrement?: boolean;
    max?: number;
    value: number;
    setValue: (value: number) => void;
}

function IncrementHeader<T>(props: IProps<T>) {
    const { data, children, value, hideIncrement, max, setValue } = props;

    const content = typeof children === "string" ? <h1>{children}</h1> : children;
    
    if (!data || !data.length || hideIncrement) return content;
    
    return (
        <div className="flex">
            {content}
            <IncrementDecrement
                value={value}
                onChange={setValue}
                max={max}
            />
        </div>
    )
}

export default IncrementHeader;