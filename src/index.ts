import winston from 'winston';
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console({format: winston.format.simple()})
    ],
});
const symDiff = (arrOne: number[], arrTwo: number[]): number[] => {
    const diff = arrOne.filter((num)=> !arrTwo.includes(num));
    diff.push(...arrTwo.filter((num)=> !arrOne.includes(num)));
    return [...new Set(diff)];
};

export const sym = (...args: number[][]): number[] => {
    logger.log({level: 'info', message:`Ran sym on ${JSON.stringify(args)}`});
    return args.reduce(symDiff).sort();
};

console.info(sym([1, 2, 3], [5, 2, 1, 4]));
