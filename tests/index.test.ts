import {sym} from '../src/index';


describe('Find the Symmetric Difference', () => {
    it('sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5]', () => {
        expect(sym([1, 2, 3], [5, 2, 1, 4])).toStrictEqual([3, 4, 5]);
    });
    it('sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.', () => {
        expect(sym([1, 2, 3], [5, 2, 1, 4]).length).toStrictEqual(3);
    });
    it('sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5]', () => {
        expect(sym([1, 2, 3, 3], [5, 2, 1, 4])).toStrictEqual([3, 4, 5]);
    });
    it('sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.', () => {
        expect(sym([1, 2, 3, 3], [5, 2, 1, 4]).length).toStrictEqual(3);
    });
    it('sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].', () => {
        expect(sym([1, 2, 3], [5, 2, 1, 4, 5])).toStrictEqual([3, 4, 5]);
    });
    it('sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.', () => {
        expect(sym([1, 2, 3], [5, 2, 1, 4, 5]).length).toStrictEqual(3);
    });
    it('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]', () => {
        expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).toStrictEqual([1, 4, 5]);
    });
    it('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.', () => {
        expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length).toStrictEqual(3);
    });
    it('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5]', () => {
        expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).toStrictEqual([1, 4, 5]);
    });
    it('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.', () => {
        expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length).toStrictEqual(3);
    });
    it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].', () => {
        expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).toStrictEqual([2, 3, 4, 6, 7]);
    });
    it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.', () => {
        expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length).toStrictEqual(5);
    });
    it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9]', () => {
        expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])).toStrictEqual([1, 2, 4, 5, 6, 7, 8, 9]);
    });
    it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.', () => {
        expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length).toStrictEqual(8);
    });
});
