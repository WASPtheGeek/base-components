import { IGridProps } from "../grid";

export interface ISplitGridProps<T> extends IGridProps<T> {
    /** The data will be split into the specified number of columns. */
    split?: number;
    /** Whether increment/decrement button are visible. */
    hideIncrement?: boolean;
}