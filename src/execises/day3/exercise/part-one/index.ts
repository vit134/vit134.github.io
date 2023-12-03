const Symbols = {
    '*': true,
    '#': true,
    '+': true,
    '$': true,
    '%': true,
    '=': true,
    '&': true,
    '@': true,
    '/': true,
    '-': true,
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
    const sub = arr.slice(
        startInd > 0 ? startInd - 1 : startInd,
        (endInd < arr.length ? endInd + 1 : endInd) + 1
    );

    return sub.reduce((acc, val) => {
        if (isAllowed(val)) {
            acc = true;
        }

        return acc;
    }, false);
}

export const poschitalKolichestvoDetaley = (data: string[]) => {
    const res = [];
    
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
                        res.push(Number(tmp));
                    }
                } else {
                    if (tmp && startInd !== null && endInd !== null) {
                        let stoitLiDobavitDetal = false;

                        if (prev) {
                            if (isDetal(prev, startInd, endInd)) {
                                stoitLiDobavitDetal = true;
                            }
                        }

                        if (startInd > 0) {
                            if (isAllowed(cur[startInd - 1])) {
                                stoitLiDobavitDetal = true;
                            }
                        }

                        if (next) {
                            if (isDetal(next, startInd, endInd)) {
                                stoitLiDobavitDetal = true;
                            }
                        }

                        if (stoitLiDobavitDetal) {
                            res.push(Number(tmp));
                        }
                    }
                }

                startInd = null;
                endInd = null;
                tmp = '';
            }
        }
        
    }

    return res.reduce((acc, val) => acc + Number(val), 0);
}
