// import { path, data } from './mock';
import { path, data } from '../data';

const PathItems: Record<string, 'left' | 'right'> = {
    L: 'left',
    R: 'right'
}

const startNode = 'AAA';
const finishNode = 'ZZZ';


const parseRow = (row: string) => row.match(/[A-Z]{3}/g) as string[];

const toObj = (data: string[]) => {
    return data.reduce<Record<string, { left: string; right: string; node: string}>>((acc, row) => {
        const [node, left, right] = parseRow(row);

        acc[node] = { node, left, right };

        return acc;
    }, {})
}

export const calculate = (path: string, data: string[]) => {
    const obj = toObj(data);

    let currentNode = obj[startNode];

    let i = 0;

    while (currentNode.node !== finishNode) {
        if (i === path.length - 1) {
            path += path;
        }

        currentNode = obj[currentNode[PathItems[path[i]]]]

        i++;
    }

    return i;

};

console.log('result', calculate(path, data));