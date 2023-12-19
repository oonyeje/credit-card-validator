import { useState } from "react";
import validateByLuhn from '../utils/validateByLuhn';
import validateCardFormat from "../utils/validateCardFormat";

const CardInputBox = () => {
    const [cardNumber, setCardNumber] = useState<string>('');
    const [isCardValid, setIsCardValid] = useState<boolean|undefined>(undefined);

    const validateCard = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (validateCardFormat(cardNumber) && validateByLuhn(cardNumber)) {
            setIsCardValid(true);
        } else {
            setIsCardValid(false);
        }
    }

    return (
        <div className={styles.componentContainer}>
            <div className={styles.outerContainer}>
                {isCardValid !== undefined && (
                    <div className="text-center">
                        {isCardValid && (
                            <span className={`${styles.alert} text-green-600`}>
                                Card Valid
                            </span>
                        )}
                        {!isCardValid && (
                            <span className={`${styles.alert} text-red-600`}>
                                Card number not valid
                            </span>
                        )}
                    </div>
                )}
                <div className={`${styles.rowContainer} align-middle`}>
                    <div className={styles.innerContainer}>
                        <label className="text-white mr-2">Card Number: </label>
                        <div className="flex flex-row">
                            <input
                                className={styles.creditCardInpt}
                                onChange={(e) => {
                                    if (isCardValid !== undefined) {
                                        setIsCardValid(undefined);
                                    }
                                    setCardNumber(e.target.value)
                                }}
                                placeholder="1234556789"
                                type="text"
                            />
                            <button
                                onClick={validateCard}
                                type="button"
                                className={styles.validateBtn}
                            >
                                Validate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    alert: 'mt-2 opacity-70 rounded p-2 bg-white w-1/3',
    rowContainer: 'flex flex-row justify-center',
    validateBtn: "w-1/3 p-2 rounded bg-yellow-500 break-words",
    creditCardInpt: "w-full flex flex-auto px-2 border-bottom-2 border-white border-solid rounded",
    innerContainer: 'flex flex-col justify-center align-middle p-4',
    outerContainer: 'mt-4 flex flex-start flex-col justify-around gap-3',
    componentContainer: 'mt-[50px] h-1/3 w-full bg-slate-500 shadow-xl rounded'
}

export default CardInputBox;

