import RomanToInteger from '../src/RomanToInteger';

test('MCMXCIX: 1999', () => {
    let romanToInt = new RomanToInteger();
    expect(romanToInt.RomanToInt("MCMXCIX")).toEqual(1999);
});

test('MMCMCDXCXLIXIV: 2000 + 900 + 400 + 90 + 40 + 9 + 4 = 3443', () => {
    let romanToInt = new RomanToInteger();
    expect(romanToInt.RomanToInt("MMCMCDXCXLIXIV")).toEqual(3443);
});
