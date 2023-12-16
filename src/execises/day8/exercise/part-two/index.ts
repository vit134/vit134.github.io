// import { path, data } from './mock';
import { path, data } from '../data';

const PathItems: Record<string, 'left' | 'right'> = {
    L: 'left',
    R: 'right'
}

const parseRow = (row: string) => row.match(/[A-Z0-9]{3}/g) as string[];
const isStartNode = (row: string) => new RegExp(/[A-Z0-9]{2}A/).test(row);
const isFinishNode = (row: string) => new RegExp(/[A-Z0-9]{2}Z/).test(row);

const toObj = (data: string[][]) => {
    return data.reduce<Record<string, { left: string; right: string; node: string}>>((acc, row) => {
        const [node, left, right] = row;

        acc[node] = { node, left, right };

        return acc;
    }, {})
}

const gcd = (x: number, y: number): number => (y === 0 ? x : gcd(y, x % y));

const lcm = (...n: number[]) => n.reduce((x, y) => (x * y) / gcd(x, y));

export const calculate = (path: string, data: string[]) => {
    const parsed = data.map(parseRow);
    const obj = toObj(parsed);

    const currentNodes = parsed
        .filter(([node]) => isStartNode(node))
        .map(([node]) => obj[node]);

    const bla: number[] = [];

    for (let k = 0; k < currentNodes.length; k++) {
        let isFinish = false;

        let currentNode = currentNodes[k];
        let i = 0;

        let res = 1;

        while (!isFinish) {
            if (i === path.length - 1) {
                path += path;
            }

            currentNode = obj[currentNode[PathItems[path[i]]]]

            if (isFinishNode(currentNode.node)) {
                bla.push(res);

                isFinish = true;
            }

            i++;

            res++;
        }
    }
    
    return lcm(...bla);
};

console.log('result', calculate(path, data))