const validateCardFormat = (cardNumber: string) => {
    const regex = /^[0-9]{11}$/;
    return regex.test(cardNumber);
}

export default validateCardFormat;