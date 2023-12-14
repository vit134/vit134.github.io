import { data } from '../part-two/data'

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

    const result = [];

    for (let k = 1; k <= max; k++) {
        const dis = calculateDistance(k, ms);
        if (dis > record) {
            result.push(k);
        }
    }

    return result.length;
}

export const calculate = (data: number[][]) => {
    const result: number[] = [];
    
    data.forEach(([time, distance]) => {
        result.push(calculateRecordAttempts(time, distance))
    })

    return result.reduce((acc, val) => acc *= val);   
}

(() => {
    console.group('part one');
    const d = prepareData(data);
    const start = performance.now();
    console.log('🚀 ~ calculate ~ calculate:', calculate(d));

    console.log('time spent: ', performance.now() - start);
    console.groupEnd();
})()