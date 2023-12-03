import data from '../data';
const ex = [
    '467..114..',
    '...*......',
    '..35..633.',
    '......#...',
    '617*......',
    '.....+.58.',
    '..592.....',
    '......755.',
    '...$.*....',
    '.664.598..',
]

// [489, 152, 180, 147, 239, 186, 48, 681, 935, 512, 874, 540, 249, 904, 358, 957, 867, 863, 857, 264, 89, 97, 793, 142, 36, 547, 335, 906, 634, 201, 423, 72, 103, 161]

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

const isAllowed = (symbol: keyof typeof Symbols) => {
    return Symbols[symbol];
}

const isDigit = (symbol: string) => {
    return !Number.isNaN(Number(symbol));
}

export const sum = (data: string[]) => {
    const res = [];
    
    for (let i = 0; i < data.length; i++) {
        const prev = data[i-1] ? data[i-1].split('') : null;
        const cur = data[i].split('');
        const next = data[i+1] ? data[i+1].split('') : null;

        let tmp = '';
        let startInd;
        let endInd;

        for (let j = 0; j <= cur.length; j++) {
            const letter = cur[j];
            // console.log('🚀 ~ sum ~ letter:', letter);
            
            if (isDigit(letter)) {
                if (startInd === undefined || startInd === null) {
                    startInd = j;
                }

                endInd = j;

                tmp += letter;
            } else if (!isDigit(letter) || !cur[j+1]) {
                // @ts-ignore
                if (isAllowed(letter)) {
                    if (tmp) {
                        res.push(Number(tmp));
                    }
                } else {
                    if (letter !== '.') {
                        console.log(letter);
                    }

                    console.log(`tmp:${tmp}; start: ${startInd}, end: ${endInd}`);

                    if (tmp) {
                        let bla = false;

                        if (prev) {
                            const sub = prev.slice(
                                // @ts-ignore
                                startInd > 0 ? startInd - 1 : startInd,
                                // @ts-ignore
                                (endInd < prev.length ? endInd + 1 : endInd) + 1
                            );
                            console.log('🚀 ~ sum ~ sub-prev:', sub.join(','));

                            const hasSymbol = sub.reduce((acc, val) => {
                                // @ts-ignore
                                if (isAllowed(val)) {
                                    acc = true;
                                }

                                return acc;
                            }, false);

                            if (hasSymbol && tmp) {
                                console.log('has on prev')
                                bla = true;
                            }
                        }

                        // @ts-ignore
                        if (startInd > 0) {
                            // @ts-ignore
                            if (Symbols[cur[startInd - 1]]) {
                                bla = true;
                            }
                        }

                        if (next) {
                            // @ts-ignore
                            console.log('endInd < next.length', endInd < next.length, endInd, next.length)
                            // @ts-ignore
                            const sub = next.slice(
                                // @ts-ignore
                                startInd > 0 ? startInd - 1 : startInd,
                                // @ts-ignore
                                (endInd < next.length ? endInd + 1 : endInd) + 1
                            );
                            console.log('🚀 ~ sum ~ sub-next:', sub.join(','));

                            const hasSymbol = sub.reduce((acc, val) => {
                                // @ts-ignore
                                if (isAllowed(val)) {
                                    acc = true;
                                }

                                return acc;
                            }, false);

                            if (hasSymbol && tmp) {
                                console.log('has on next')
                                bla = true;
                            }
                        }

                        if (bla) {
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

    return [res, res.reduce((acc, val) => acc + Number(val), 0)];
}


// wrong - 466610
// wrong - 506273

const ex_raw = [
	'......$............472..................107.129............................818........&724....454..378..........#....978.........210@.......',
    '..............................*295......*.......................803*143.......*.......................*.................*395.............489',
    '...........974...959=......772.........646..........752....=.................165.........+...305.......331..............................*...',
]

const correct = [107, 818, 724, 378, 978, 210, 295, 803, 143, 395, 489, 959, 772, 646, 165, 331];
const correctSum = correct.reduce((acc, val) => acc + val);
// const correctSorted = correct.sort((a, b) => a-b);

const ex1 = data.slice(15, 20);
// console.log('🚀 ~ ex1:', JSON.stringify(ex1));

const result = sum(data);
console.log('🚀 ~ result:', result);
const resultSum = result[1]
// @ts-ignore
// const resultSorted = result[0].sort((a, b) => a - b);

console.log(correctSum, resultSum);
console.log('correct', correct);
console.log('result', result[0]);


// [
//     ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
//     ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
//     ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
//     ['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
// ]


// [
//     ['46', ''],
//     ['.',  ''],
//     ['.',  ''],
//     ['.',  ''],
//     ['6',  ''],
// ]

// [
//     ['467', '.', '.', '114', '.', '.'],
//     ['.', '*', '.', '.', '.', '.'],
//     []
// ]