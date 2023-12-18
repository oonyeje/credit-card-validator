const validateByLuhn = (cardNumber: string) => {

    const strArr = cardNumber.split("");
    let total = 0;
    let moduloCount = 0;

    for(let i = strArr.length - 1; i >= 0; i--) {
        let originalDigit = parseInt(strArr[i]);

        if (moduloCount % 2 === 1) {
            let doubledAmount = 2 * originalDigit;

            if (doubledAmount > 9) {
                const parsedDigitsArr = `${doubledAmount}`.split("");
                let digitTotal = 0
                parsedDigitsArr.forEach((digitStr, idx) => {
                    digitTotal += parseInt(digitStr);
                });

                total += digitTotal;
            } else {
                total += doubledAmount;
            }
        } else {
            total += originalDigit;
        }
        moduloCount++;
    }
    return total % 10 === 0;
}

export default validateByLuhn;