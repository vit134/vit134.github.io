const { seeds, maps } = require('../data');

const getSeedIntervals = (str) => {
    const arr = str.split(' ').map(el => Number(el));
    const result = [];

    const length = arr.length;

    for (let i = 1; i <= length / 2; i++) {
        result.push(arr.splice(0, 2))
    }

    return result.sort((a, b) => a[0] - b[0]);
}

const createInterval = (from, length) => {
    return [from, from + length - 1];
}

const sortIntervals = (intervals) => {
    for (let i = 0; i < intervals.length; i++) {
        const [sourceIntervals, distIntervals] = intervals[i];

        const list = [];
        for (let j = 0; j < sourceIntervals.length; j++) 
            list.push({'source': sourceIntervals[j], 'dist': distIntervals[j]});

        list.sort(function(a, b) {
            return ((a.source[0] < b.source[0]) ? -1 : ((a.source[0] === b.source[0]) ? 0 : 1));
        });

        for (let k = 0; k < list.length; k++) {
            sourceIntervals[k] = list[k].source;
            distIntervals[k] = list[k].dist;
        }
    }

    return intervals;
}

const mergeIntervals = (source, dist) => {
    const sourceStr = `${source[0][0]}-${source[source.length -1 ][1]}`;

    const distRanges = [];

    for (let i = 0; i < dist.length; i++) {
        const last = distRanges[i - 1];

        if (last && last[1] + 1 === dist[i][0]) {
            distRanges[i - 1][1] = dist[i][1];
        } else {
            distRanges.push(dist[i])
        }
    }

    return [sourceStr, distRanges]
}

const getRanges = () => {
    const result = [];

    for (let i = 0; i < maps.length; i++) {
        const map = maps[i];

        const sub = [[], []];

        for (let j = 0; j < map.length; j++) {
            const row = map[j];
            const [dist, source, len] = row.split(' ').map(el => Number(el));
            
            sub[0].push(createInterval(source, len))
            sub[1].push(createInterval(dist, len))
        }

        result.push(sub);
    }

    const sorted = sortIntervals(result);

    return sorted.reduce((acc, el) => {
        const [key, value] = mergeIntervals(el[0], el[1]);
        acc.push([key, value]);

        return acc;
    }, []);
}

const ranges = getRanges();

const findDistInRange = (value, range) => {
    const [sourceInterval, dists] = range;

    const [from, to] = sourceInterval.split('-');

    const ind = value - Number(from) + 1;
    
    let plus = 0;

    if (value >= Number(from) && value <= Number(to)) {
        for (let i = 0; i < dists.length; i++) {
            const dist = dists[i];
            const valuesCount = dist[1] - dist[0] + 1;

            if (ind <= valuesCount + plus) {
                const res = ind - plus - 1 + dist[0];

                return res
            } else {
                plus += valuesCount;
            }
        }
    }

    return value;
}

const findLocationForSeed = (seedValue, debug = false) => {
    const start = performance.now();
    let result = seedValue;

    for (let i = 0; i < ranges.length; i++) {
        result = findDistInRange(result, ranges[i]);

        if (debug) {
            console.log(performance.now() - start);
        }
    }

    return result;
}

const findMinLocation = (seedIntervals) => {
    let result;

    for (let i = 0; i < seedIntervals.length; i++) {
        const seedInterval = seedIntervals[i];

        const [seedStartValue, seedLen] = seedInterval;

        let intervalMinLocation;

        for (let j = 0; j <= seedLen; j++) {
            const seedValue = seedStartValue + j;

            const supposed = findLocationForSeed(seedValue, false);

            if (intervalMinLocation === undefined || supposed < intervalMinLocation) {
                intervalMinLocation = supposed;
            }
        }

        if (result === undefined || intervalMinLocation < result) {
            result = intervalMinLocation
        }
    }

    return result;
}

(async () => {
    const intervals = getSeedIntervals(seeds);

    findMinLocation(intervals);
})()




