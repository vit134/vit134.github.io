const text = `const dano = {
    red: 12,
    green: 13,
    blue: 14,
};

const parse = (str: string) => {
    const [game, sets] = str.split(':')
    const gameNumber = Number(game.split(' ')[1]);

    const setsArr = sets.split(';');

    const setsCubes = setsArr.map(el => {
        const cubes = el.split(',');

        return cubes.reduce<Record<string, number>>((acc, val) => {
            const [count, color] = val.trim().split(' ');

            acc[color] = Number(count);

            return acc;
        }, {})
    })

    return [gameNumber, setsCubes]
}

const filtr = (data: [number, Record<'red' | 'green' | 'blue', number>[]]) => {
    const [ind, sets] = data;
    let result = true;

    sets.forEach(set => {
        for (const color in set) {
            if (set[color] > dano[color]) {
                result = false;
            }
        }
    })

    return result ? ind : 0;
}

export const sum = (data: string[]) => {
    return data.reduce((acc, val) => {
        const el = parse(val);

        const res = filtr(el);

        acc += res;

        return acc;
    }, 0)
}`;

export default text;