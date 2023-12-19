import validateCardFormat from './validateCardFormat';

test('Test Card Format', () => {
    expect(validateCardFormat('371449635398431')).toBeTruthy();
    expect(validateCardFormat('371449635')).toBeFalsy();
    expect(validateCardFormat('30569309025904')).toBeTruthy();
    expect(validateCardFormat('6011111111111117')).toBeTruthy();
    expect(validateCardFormat('011111111117')).toBeFalsy();
    expect(validateCardFormat('3530111333300000')).toBeTruthy();
    expect(validateCardFormat('5555555555554444')).toBeTruthy();
    expect(validateCardFormat('4111111111111111')).toBeTruthy();
});