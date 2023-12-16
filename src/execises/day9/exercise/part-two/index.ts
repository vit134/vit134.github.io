// import { data } from './mock';
import { data } from '../data';

const getDiff = (row: number[]) => {
    let result = [];

    for (let i = 1; i < row.length; i++) {
        result.push(row[i] - row[i - 1]);
    }

    return result;
}

export const calculate = (data: string[]) => {
    return data.reduce((acc, val) => {
        const bla = [val.split(' ').map(el => Number(el))];

        let isFinish = false;
        let i = 0;

        while (!isFinish) {
            const cur = bla[i];

            if (cur.every(el => el === 0)) {
                isFinish = true;
                break;
            }

            bla.push(getDiff(cur));
            i++;
        }

        let plus = 0;

        for (let j = bla.length - 2; j >= 0; j--) {
            const cur = bla[j];

            plus = cur[0] - plus;
        }

        return acc + plus;
    }, 0)
};

console.log('result', calculate(data))