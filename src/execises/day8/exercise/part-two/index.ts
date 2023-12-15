// import { data } from './mock';
import { data } from '../data';

const Marks: Record<string, number> = {
    A: 13,
    K: 12,
    Q: 11,
    T: 10,
    9: 9,
    8: 8, 
    7: 7,
    6: 6,
    5: 5,
    4: 4,
    3: 3,
    2: 2,
    J: 1,
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
    [Types.FIVE]: 6,
    [Types.FOUR]: 5,
    [Types.FULLHOUSE]: 4,
    [Types.THREE]: 3,
    [Types.TWOPAIR]: 2,
    [Types.PAIR]: 1,
    [Types.DIFF]: 0,
}

const handTypesMemo: Record<string, Types> = {};

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

const getHandTypeWithJoker = (numbered: string, hand: string, debug: boolean) => {
    const simpleType = HandTypes[numbered];
    const jokerCount = (hand.match(/J/g) as string[]).length;

    let result = simpleType;

    switch (simpleType) {
        case Types.DIFF: { // 11111
            result = Types.PAIR;
            break;
        }

        case Types.PAIR: { // 1112
            result = Types.THREE;
            break;
        }

        case Types.THREE: { // 113
            result = Types.FOUR;
            break;
        }

        case Types.TWOPAIR: { // 122
            if (jokerCount > 1) {
                result = Types.FOUR
                break;
            }

            result = Types.FULLHOUSE
            break;
        }

        case Types.FULLHOUSE: {
            result = Types.FIVE;
            break;
        }

        case Types.FOUR: { // 14
            result = Types.FIVE
            break;
        }
    }

    return result;
}

const getHandType = (hand: string) => {
    const obj: Record<string|number, number> = {};

    if (hand in handTypesMemo) {
        return handTypesMemo[hand];
    }

    for (let i = 0; i < hand.length; i++) {
        obj[hand[i]] = obj[hand[i]] ? obj[hand[i]] + 1 : 1;
    }

    const arr = Object.values(obj).sort((a, b) => a - b);
    const numbered = arr.join('');

    let result = HandTypes[numbered];

    if ('J' in obj) {
        result = getHandTypeWithJoker(numbered, hand, HandTypes[numbered] === Types.FULLHOUSE);
    }

    handTypesMemo[hand] = result;

    return result;
}

const sortHands = (hands: string[]) => {
    return hands.sort((handOne, handTwo) => {
        const handOneType = getHandType(handOne.split(' ')[0]);
        const handTwoType = getHandType(handTwo.split(' ')[0]);

        if (handOneType !== handTwoType) {
            return HandTypesRates[handOneType] - HandTypesRates[handTwoType]
        }
        
        return compareTwoSameHandType(handOne.split(' ')[0], handTwo.split(' ')[0])
    })
}

export const calculate = () => {
    const sorted = sortHands(data);

    return sorted.reduce((acc, val, ind) => {
        const [hand, rate] = val.split(' ');

        acc += Number(rate) * (ind + 1);

        return acc;
    }, 0)
};

console.log('result', calculate()); // 5905