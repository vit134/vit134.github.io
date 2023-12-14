// import { data } from './mock';
import { data } from './data';

const prepareData = (data: Record<'time' | 'distance', number[]>) => {
    return data.time.reduce<number[][]>((acc, val, ind) => {
        acc.push([val, data.distance[ind]]);

        return acc;
    }, [])
}

const calculateDistance = (holdTime: number, totalTime: number) => {
    const speed = holdTime * 1;
    const timeLeft = totalTime - holdTime;

    return timeLeft * speed;
}

const calculateRecordAttempts = (ms: number, record: number) => {
    const max = ms - 1;

    let i = 1;
    let j = max;

    let disFrom = 0;
    let disTo = 0;

    let hasFrom = false;
    let hasTo = false;

    while (disFrom < record && disTo < record) {
        if (!hasFrom) {
            disFrom = calculateDistance(i, ms);

            if (disFrom < record) {
                i++;
            } else {
                hasFrom = true;
            }
        }

        if (!hasTo) {
            disTo = calculateDistance(j, ms);

            if (disTo < record) {
                j--;
            } else {
                hasTo = true;
            }
        }
    }

    return j - i + 1;
}

export const calculate = (data: number[][]) => {
    const result: number[] = [];
    
    data.forEach(([time, distance]) => {
        result.push(calculateRecordAttempts(time, distance))
    })

    return result.reduce((acc, val) => acc *= val);   
}

(() => {
    console.group('part two');
    const d = prepareData(data);
    const start = performance.now();
    console.log('🚀 ~ calculate ~ calculate:', calculate(d));

    console.log('time spent: ', performance.now() - start);
    console.groupEnd();
})()