const symDiff = (arrOne: number[], arrTwo: number[]): number[] => {
    const diff = arrOne.filter((num)=> !arrTwo.includes(num));
    diff.push(...arrTwo.filter((num)=> !arrOne.includes(num)));
    return [...new Set(diff)];
};

export const sym = (...args: number[][]): number[] => {
    return args.reduce(symDiff).sort();
};

console.info(sym([1, 2, 3], [5, 2, 1, 4]));
