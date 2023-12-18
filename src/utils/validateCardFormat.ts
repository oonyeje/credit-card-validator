const validateCardFormat = (cardNumber: string) => {
    const regex = /^[0-9]{13,16}$/;
    return regex.test(cardNumber);
}

export default validateCardFormat;