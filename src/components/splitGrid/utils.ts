import { GridColumnConfig } from "../grid";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateFieldValue(obj: any, number: number) {
    obj["field"] = `${obj["field"]}_${number}`;
}


export function modifyArray<T>(
    arr: GridColumnConfig<T>[],
    count: number = 0
): GridColumnConfig<T>[] {
    const modifiedArr = structuredClone(arr);
    modifiedArr.forEach(x => updateFieldValue(x, count));

    return modifiedArr;
}

export function updateArr<T>(
    arr: GridColumnConfig<T>[],
    amount: number,
    count = 0,
    modifiedArr?: GridColumnConfig<T>[],
): GridColumnConfig<T>[] | undefined {
    if (count + 1 === amount) return modifiedArr;
    
    const prevArr = modifiedArr ?? modifyArray(arr, count);

    return updateArr<T>(arr, amount, count + 1, [...prevArr, ...modifyArray(arr, count + 1)]);
}

export function extendArray<T>(
    arr: GridColumnConfig<T>[],
    amount: number
): GridColumnConfig<T>[] | undefined {
    if (amount === 1) return modifyArray(arr, 0);
    
    return updateArr(arr, amount);
};

export function splitArray<T = object>(
    arr: T[],
    amount: number,
): object[] {
    if (!Array.isArray(arr) || !arr.length || arr.length < amount) {
        return arr as [];
    }

    const divide = arr.length / amount;
    const countPerChunk = Math.ceil(divide);
    let fullCols = arr.length - (amount * Math.floor(divide));
    
    if (fullCols === 0) fullCols = arr.length;

    const newArray = [];

    for (let i = 0; i < countPerChunk; i++) {
        // iterate new table rows
        let newRowData = {};
        
        for (let j = 0; j < amount; j++) { // iterate new table columns
            
            if (i + 1 === countPerChunk && fullCols < j + 1) {
                // incomplete column
                continue;
            }

            // const rowIndex = i === 0 ? j : i * amount + j ;
            let rowIndex = countPerChunk * j + i;
            if (j > fullCols) rowIndex = rowIndex - (j - fullCols);

            const row = arr[rowIndex];

            if (row) {
                const keys = Object.keys(row);

                const newObj = {};

                keys?.map((r) => {
                    const oldKey = r;
                    const newKey = `${oldKey}_${j}`;

                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (newObj as any)[newKey] = (row as any)[oldKey]
                });

                newRowData = {...newRowData, ...newObj};  
            }  
        }

        newArray.push(newRowData);
    }

    return newArray;
}