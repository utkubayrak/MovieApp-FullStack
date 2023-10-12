import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

function NotFound() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const time = 30;

    useEffect(() => {
        let i = 0;

        const loop3 = setInterval(() => {
            if (i > 40) {
                clearInterval(loop3);
                setNumber3(4);
            } else {
                setNumber3(randomNum());
                i++;
            }
        }, time);

        const loop2 = setInterval(() => {
            if (i > 80) {
                clearInterval(loop2);
                setNumber2(0);
            } else {
                setNumber2(randomNum());
                i++;
            }
        }, time);

        const loop1 = setInterval(() => {
            if (i > 100) {
                clearInterval(loop1);
                setNumber1(4);
            } else {
                setNumber1(randomNum());
                i++;
            }
        }, time);

        return () => {
            clearInterval(loop1);
            clearInterval(loop2);
            clearInterval(loop3);
        };
    }, []);

    function randomNum() {
        return Math.floor(Math.random() * 9) + 1;
    }

    return (
        <>
            <Header></Header>
            <div className="error">
                <div className="container-floud">
                    <div className="col-xs-12 ground-color text-center">
                        <div className="container-error-404">
                            <div className="clip">
                                <div className="shadow">
                                    <span className="digit thirdDigit">{number3}</span>
                                </div>
                            </div>
                            <div className="clip">
                                <div className="shadow">
                                    <span className="digit secondDigit">{number2}</span>
                                </div>
                            </div>
                            <div className="clip">
                                <div className="shadow">
                                    <span className="digit firstDigit">{number1}</span>
                                </div>
                            </div>
                            <div className="msg">OH!<span className="triangle"></span></div>
                        </div>
                        <h2 className="h1">Sorry! Page not found</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotFound;
