const text = `const parseCard = (str: string): [string, [string[], string[]]] => {
    const [cardName, values] = str.split(':');
    const [cardNumber] = cardName.match(/([0-9]+)/) as string[];

    const [win, have] = values.trim().split('|');

    return [cardNumber, [
        win.trim().match(/[0-9]+/g) as string[],
        have.trim().match(/[0-9]+/g) as string[],
    ]];
};

const calculateCard = (card: [string, [string[], string[]]]): [number, number] => {
    const [cardNumber, [win, have]] = card;

    const winHave = win.reduce<number[]>((acc, val) => {
        if (have.indexOf(val) >= 0) {
            acc.push(Number(val));
        }

        return acc;
    }, [])

    return [Number(cardNumber), winHave.length];
};

const convertToObject = (data: string[]) => {
    return data.reduce<Record<string, {
        ind: number;
        count: number 
    }>>((acc, val) => {
        const parsed = parseCard(val);
        const [ind, count] = calculateCard(parsed);
        
        acc[parsed[0]] = {
            ind,
            count
        }
        
        return acc;
    }, {});
};

export const skolkoOchkov = (data: string[]) => {
    const cardsObj = convertToObject(data);

    const res: Record<string, number> = {};

    const req = ({ ind, count }: { ind: number; count: number }, cardInd: number) => {
        if (ind in res) {
            res[ind] = res[ind] + 1;
        } else {
            res[ind] = 1;
        }

        if (count > 0) {
            for (let j = 1; j <= count; j++) {
                req(cardsObj[ind + j], cardInd);
            }
        }
    }

    for (let i = 1; i <= data.length; i++) {
        const cur = cardsObj[i];

        req(cur, i);
    }

    return Object.values(res).reduce((acc, val) => acc + val, 0);
}`;

export default text;