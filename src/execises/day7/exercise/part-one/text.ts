const text = `const Marks: Record<string, number> = {
    A: 13,
    K: 12,
    Q: 11,
    J: 10,
    T: 9,
    9: 8,
    8: 7, 
    7: 6,
    6: 5,
    5: 4,
    4: 3,
    3: 2,
    2: 1,
};

enum Types {
    'DIFF' = 'diff',
    'FIVE' = 'five',
    'FULLHOUSE' = 'fullhouse',
    'FOUR' = 'four',
    'THREE' = 'three',
    'TWOPAIR' = 'twopair',
    'PAIR' = 'pair',
}

const HandTypes: Record<string, Types> = {
    '5': Types.FIVE,
    '11111': Types.DIFF,
    '23': Types.FULLHOUSE,
    '14': Types.FOUR,
    '113': Types.THREE,
    "122": Types.TWOPAIR,
    '1112': Types.PAIR
};

const HandTypesRates = {
    [Types.DIFF]: 0,
    [Types.FIVE]: 6,
    [Types.FOUR]: 5,
    [Types.FULLHOUSE]: 4,
    [Types.THREE]: 3,
    [Types.TWOPAIR]: 2,
    [Types.PAIR]: 1
}

const compareTwoSameHandType = (cardOne: string, cardTwo: string) => {
    if (cardOne === cardTwo) {
        return 0;
    }

    for (let i = 0; i < cardOne.length; i++) {
        const oneWeight = Marks[cardOne[i]];
        const twoWeight = Marks[cardTwo[i]];

        if (cardOne[i] !== cardTwo[i]) {
            if (oneWeight > twoWeight) {
                return 1;
            }
            
            if (oneWeight < twoWeight){
                return -1;
            }
        }
    }

    return 0;
}

const getHandType = (hand: string) => {
    const obj: Record<string|number, number> = {};

    for (let i = 0; i < hand.length; i++) {
        obj[hand[i]] = obj[hand[i]] ? obj[hand[i]] + 1 : 1;
    }

    const arr = Object.values(obj).sort((a, b) => a - b);

    return HandTypes[arr.join('')];
}

const sortHands = (hands: string[]) => {
    return hands.sort((handOne, handTwo) => {
        const handOneCards = handOne.split(' ')[0];
        const handTwoCards = handTwo.split(' ')[0];

        const handOneType = getHandType(handOneCards);
        const handTwoType = getHandType(handTwoCards);

        if (handOneType !== handTwoType) {
            return HandTypesRates[handOneType] - HandTypesRates[handTwoType]
        }
        
        return compareTwoSameHandType(handOneCards, handTwoCards)
    })
}

export const calculate = () => {
    const sorted = sortHands(data);

    return sorted.reduce((acc, val, ind) => {
        const [hand, rate] = val.split(' ');

        acc += Number(rate) * (ind + 1);

        return acc;
    }, 0)
};`;

export default text;