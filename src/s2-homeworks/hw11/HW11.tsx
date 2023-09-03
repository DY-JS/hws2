import React, {ChangeEvent, useState} from 'react';
import s from './HW11.module.css';
import s2 from '../../s1-main/App.module.css';
import {restoreState, saveState} from '../hw06/localStorage/localStorage';
import SuperRange from './common/c7-SuperRange/SuperRange';

function HW11() {
    const [value1, setValue1] = useState<number>(restoreState<number>('hw11-value1', 0));
    const [value2, setValue2] = useState<number>(restoreState<number>('hw11-value2', 100));

    const change = (newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setValue1(newValue[0]);
            setValue2(newValue[1]);
            saveState('hw11-value1', newValue);
        } else {
            setValue1(newValue);
            saveState('hw11-value2', newValue);
        }
    };

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
            <span id={'hw11-value'} className={s.number}>
              {value1}
            </span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            value={value1}
                            onChangeRange={change}
                        />
                    </div>
                    <div className={s.wrapper}>
            <span id={'hw11-value-1'} className={s.number}>
              {value1}
            </span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            value={[value1, value2]}
                            onChangeRange={change}
                        />
                        <span id={'hw11-value-2'} className={s.number}>
              {value2}
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HW11;
