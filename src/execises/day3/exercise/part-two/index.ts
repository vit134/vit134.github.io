const dano = {
    red: 12,
    green: 13,
    blue: 14,
};

type Colors = keyof typeof dano;

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

const getGamePower = (data: [number, Record<Colors, number>[]]) => {
    const max = {
        red: 0,
        green: 0,
        blue: 0,
    }

    data[1].forEach(set => {
        for (let color in set) {
            // @ts-ignore
            if (set[color] > max[color]) {
                // @ts-ignore
                max[color] = set[color];
            }
        }
    })

    return Object.values(max).reduce((acc, val) => acc * val)
}

export const sum = (data: string[]) => {
    return data.reduce((acc, val) => {
        const el = parse(val);

        // @ts-ignore
        const res = getGamePower(el);

        acc += res;

        return acc;
    }, 0)
}