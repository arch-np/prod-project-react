import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

import { Button } from '@/shared/ui/Button';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { increment, decrement } = useCounterActions();
    const handleIncrement = () => {
        increment();
    };

    const handleDecrement = () => {
        decrement();
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={handleIncrement} data-testid="increment-btn">
                {t('increment')}
            </Button>
            <Button onClick={handleDecrement} data-testid="decrement-btn">
                {t('decrement')}
            </Button>
        </div>
    );
};
