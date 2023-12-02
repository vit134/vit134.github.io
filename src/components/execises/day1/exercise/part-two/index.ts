const Slovar = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
}

const poluchatelCifr = (str: string) => {
    const res: string[] = [];

    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        const dig = Number(letter);

        if (!Number.isNaN(dig)) {
            res.push(letter);
        } else {
            const sub = str.slice(i);
            
            for (let slovo in Slovar) {
                if (sub.indexOf(slovo) === 0) {
                    // @ts-ignore
                    res.push(Slovar[slovo])
                }
            }
        }
    }

    return Number(res[0] + res[res.length - 1]);
}

export const deshifrator = (data: string[]) => {
    return data.reduce((acc, val) => (
        acc += poluchatelCifr(val)
    ), 0);
}
