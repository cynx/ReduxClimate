import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = data => {
    let sum = data.reduce((a,b)=>a+b);
    return Math.round(sum / data.length);
};

export default (props) => {

    return (
        <div>
            <Sparklines height={100} width={160} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
}