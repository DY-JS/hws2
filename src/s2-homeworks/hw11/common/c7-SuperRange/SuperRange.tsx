import React from 'react'
import {Slider, SliderProps} from '@mui/material'

interface SuperRangeProps extends SliderProps {
    onChangeRange: (value: number | number[]) => void
    value: number | number[]
}

const SuperRange: React.FC<SuperRangeProps> = ({onChange, onChangeRange, value, sx, ...restprops}) => {

    const handleChange = (event: Event, value: number | number[]) => {
        onChangeRange(value)
    };
    return (
        <>
            <Slider
                sx={{ // стили для слайдера // пишет студент
                    width: "147px",
                    height: "4px",
                    borderRadius: "10px",
                    background: "#0C2"
                }}
                value={value}
                onChange={handleChange}
                {...restprops} // отдаём слайдеру пропсы если они есть (value например там внутри)
            />


        </>


    )
}

export default SuperRange
