import validateByLuhn from './validateByLuhn';

test('Test Luhn Validation', () => {
    expect(validateByLuhn('371449635398431')).toBeTruthy();
    expect(validateByLuhn('37144963539843')).toBeFalsy();
    expect(validateByLuhn('30569309025904')).toBeTruthy();
    expect(validateByLuhn('6011111111111117')).toBeTruthy();
    expect(validateByLuhn('011111111111117')).toBeFalsy();
    expect(validateByLuhn('3530111333300000')).toBeTruthy();
    expect(validateByLuhn('5555555555554444')).toBeTruthy();
    expect(validateByLuhn('4111111111111111')).toBeTruthy();
});