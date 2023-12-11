const text = `const daiDannieDlyaSozdaniyaIntervala = (str: string) => {
    return str.split(' ').map(el => Number(el));
}

const sozdaiInterval = (from: number, length: number) => {
    return [from, from + length - 1];
}

const daiDannieKarti = (map: string[]) => {
    const dannie: Record<string, { interval: string, length: number }> = {};

    map.forEach(el => {
        const [dist, source, length] = daiDannieDlyaSozdaniyaIntervala(el);

        const sourseRange = sozdaiInterval(source, length);
        const distRange = sozdaiInterval(dist, length);

        dannie[\`\${sourseRange[0]}-\${sourseRange[1]}\`] = {
            interval: \`\${distRange[0]}-\${distRange[1]}\`,
            length
        };
    })
    
    return dannie;
}

const naidiZnachenieDlyaSleduscheyKarti = (value: number, intervals: Record<string, { interval: string; length: number }>) => {
    const intArr = Object.entries(intervals);
    let result = value;

    for (let i = 0; i < intArr.length; i++) {
        const [source, dist] = intArr[i];

        const [sFrom, sTo] = source.split('-');
        const [dFrom] = dist.interval.split('-');

        const insideInterval = Number(sFrom) <= result && result <= Number(sTo);

        if (insideInterval) {
            return (result - Number(sFrom)) + Number(dFrom);
        }
    }

    return result;
}


const poisPoKartam = (init: number, kek: Record<string, { interval: string; length: number }>[]) => {
    let result = init;

    for (let i = 0; i < kek.length; i++) {
        result = naidiZnachenieDlyaSleduscheyKarti(result, kek[i]);
    }

    return result;
}

export const naidiNaimenshiiNoverLokacii = (seeds: string, maps: string[][]) => {
    const ranges = maps.map(el => {
        return daiDannieKarti(el);
    })

    return seeds.split(' ').map(el => {
        const result = poisPoKartam(Number(el), ranges)
        
        return result;
    }).sort((a, b) => a - b)[0];
};`;

export default text;