import React from "react";
import { Grid, IncrementHeader } from "../grid";
import { ISplitGridProps } from "./types";
import { extendArray, splitArray } from "./utils";

function SplitGrid<T = object>(props: ISplitGridProps<T>) {
    const {
        data,
        header,
        columnConfigs,
        hideIncrement,
        split:propsSplit = 1,
        ...restProps
    } = props;

    const [split, setSplit] = React.useState<number>(propsSplit);

    const splitColumnConfigs = React.useMemo(() => {
        if (!split || !columnConfigs || !data || data.length < split) {
            return columnConfigs;
        }

        return extendArray(columnConfigs, split);
    }, [data, split, columnConfigs]);

    const splitData = React.useMemo(() => {
        if (!data || !split) return data;

        return splitArray<T>(data, split);
    }, [split, data]);

    return (
        <Grid
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data={splitData as any}
            header={(
                <IncrementHeader
                    data={data}
                    value={split}
                    setValue={setSplit}
                    hideIncrement={hideIncrement}
                    max={data?.length ?? 0}
                >
                    {header}
                </IncrementHeader>
            )}
            columnConfigs={splitColumnConfigs}
            {...restProps}
        />
    )
}

export default SplitGrid;