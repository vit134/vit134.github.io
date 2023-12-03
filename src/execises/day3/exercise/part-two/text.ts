const text = `const dayMneSilu = (data: [number, Record<Colors, number>[]]) => {
    const max = {
        red: 0,
        green: 0,
        blue: 0,
    }

    data[1].forEach(set => {
        for (let color in set) {
            if (set[color] > max[color]) {
                max[color] = set[color];
            }
        }
    })

    return Object.values(max).reduce((acc, val) => acc * val)
}

export const daykaCummuVsehSil = (data: string[]) => {
    return data.reduce((acc, val) => {
        const el = parse(val); // use from previous part

        acc += dayMneSilu(el);

        return acc;
    }, 0)
}`;

export default text;