const parseCard = (str: string): [string, [string[], string[]]] => {
    const [cardName, values] = str.split(':');
    const [cardNumber] = cardName.match(/([0-9]+)/) as string[];

    const [win, have] = values.trim().split('|');

    return [cardNumber, [
        win.trim().match(/[0-9]+/g) as string[],
        have.trim().match(/[0-9]+/g) as string[],
    ]];
}

const calculateCard = (card: [string, [string[], string[]]]) => {
    const [cardNumber, [win, have]] = card;

    let result = 0;

    const winHave = win.reduce<number[]>((acc, val) => {
        if (have.indexOf(val) >= 0) {
            acc.push(Number(val));
        }

        return acc;
    }, [])

    winHave.forEach((val, ind) => {
        if (ind === 0) {
            result += 1;
        } else {
            result *= 2;
        }
    }, 0);

    return result;
}

export const skolkoOchkov = (data: string[]) => {
    return data.reduce((acc, card) => {
        return acc + calculateCard(parseCard(card));
    }, 0);
}
