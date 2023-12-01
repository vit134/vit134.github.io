const poluchatelCifr = (str: string) => {
    const res: string[] = [];

    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        const dig = Number(letter);

        if (!Number.isNaN(dig)) {
            res.push(letter);
        }
    }

    return Number(res[0] + res[res.length - 1]);
}

export const deshifrator = (data: string[]) => {
    return data.reduce((acc, val) => (
        acc + poluchatelCifr(val)
    ), 0);
}
