import { useState } from "react";
import validateByLuhn from '../utils/validateByLuhn';
import validateCardFormat from "../utils/validateCardFormat";

const CardInputBox = () => {
    const [cardNumber, setCardNumber] = useState<string>('');
    const [isCardValid, setIsCardValid] = useState<boolean|undefined>(undefined);
    return (
        <div className=" mt-[50px] h-1/3 w-1/3 bg-slate-500 shadow-xl flex flex-col justify-around rounded">
            {isCardValid !== undefined && (
                <div className="text-center">
                    {isCardValid && (
                        <span className="opacity-70 rounded p-2 text-green-600 bg-white w-1/3">
                            Card Valid
                        </span>
                    )}
                    {!isCardValid && (
                        <span className="opacity-70 rounded p-2 text-red-600 bg-white w-1/3">
                            Card number not valid
                        </span>
                    )}
                </div>
            )}
            <div className="flex flex-row justify-center align-middle">
                <label className="text-white mr-2">Card Number: </label>
                <input
                    onChange={(e) => {
                        if (isCardValid !== undefined) {
                            setIsCardValid(undefined);
                        }
                        setCardNumber(e.target.value)
                    }}
                    type="text"
                    className="w-1/2 p-2 border-bottom-2 border-white border-solid"
                />
            </div>
            <div className="flex flex-row justify-center">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        if (validateCardFormat(cardNumber) && validateByLuhn(cardNumber)) {
                            setIsCardValid(true);
                        } else {
                            setIsCardValid(false);
                        }
                    }}
                    className="w-1/4 p-2 rounded bg-yellow-500"
                >Validate</button>
            </div>
        </div>
    );
};

export default CardInputBox;

