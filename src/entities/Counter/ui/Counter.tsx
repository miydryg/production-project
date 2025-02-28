/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">counter value{counterValue}</h1>
            <button data-testid="increment-btn" type="button" onClick={increment}>
                increment
            </button>
            <button data-testid="decrement-btn" type="button" onClick={decrement}>
                decrement
            </button>
        </div>
    );
};
