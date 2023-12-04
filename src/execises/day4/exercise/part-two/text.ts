const text = `const Symbols = {
    '*': true,
    '.': false
};

const isAllowed = (symbol: string) => {
    // @ts-ignore
    return Symbols[symbol];
}

const isDigit = (symbol: string) => {
    return !Number.isNaN(Number(symbol));
}

const isDetal = (arr: string[], startInd: number, endInd: number) => {
    const from = startInd > 0 ? startInd - 1 : startInd;
    const to = (endInd < arr.length ? endInd + 1 : endInd) + 1
    
    const sub = arr.slice(from, to);

    return sub.reduce<[boolean, null | number]>((acc, val, ind) => {
        if (isAllowed(val)) {
            acc = [true, from + ind];
        }

        return acc;
    }, [false, null]);
}

const saveCoords = (obj: Record<string, number[]>, coords: [number, number], number: number) => {
    const [y, x] = coords;

    if (obj[\`\${y}-\${x}\`]) {
        obj[\`\${y}-\${x}\`].push(number);
    } else {
        obj[\`\${y}-\${x}\`] = [number];
    }
}

export const poschitalKolichestvoDetaley = (data: string[]) => {
    const res = [];
    const lastCoords: Record<string, number[]> = {};

    for (let i = 0; i < data.length; i++) {
        const prev = data[i-1] ? data[i-1].split('') : null;
        const cur = data[i].split('');
        const next = data[i+1] ? data[i+1].split('') : null;

        let tmp = '';
        let startInd = null;
        let endInd = null;

        for (let j = 0; j <= cur.length; j++) {
            const letter = cur[j];
            
            if (isDigit(letter)) {
                if (startInd === undefined || startInd === null) {
                    startInd = j;
                }

                endInd = j;

                tmp += letter;
            } else if (!isDigit(letter) || !cur[j+1]) {
                if (isAllowed(letter)) {
                    if (tmp) {
                        saveCoords(lastCoords, [i, j], Number(tmp));

                        res.push(Number(tmp));
                    }
                } else {
                    if (tmp && startInd !== null && endInd !== null) {
                        if (prev) {
                            const [detal, ind] = isDetal(prev, startInd, endInd);

                            if (detal) {
                                saveCoords(lastCoords, [i-1, ind as number], Number(tmp));
                            }
                        }

                        if (startInd > 0) {
                            if (isAllowed(cur[startInd - 1])) {
                                saveCoords(lastCoords, [i, startInd - 1], Number(tmp));
                            }
                        }

                        if (next) {
                            const [detal, ind] = isDetal(next, startInd, endInd);

                            if (detal) {
                                saveCoords(lastCoords, [i+1, ind as number], Number(tmp));
                            }
                        }
                    }
                }

                startInd = null;
                endInd = null;
                tmp = '';
            }
        }
        
    }

    return Object.values(lastCoords)
        .filter(el => el.length > 1)
        .reduce((acc, [first, second]) => acc + (first * second), 0);
}`;

export default text;