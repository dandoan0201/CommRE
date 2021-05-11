import React from 'react';
import Chart from "react-google-charts";
import ReturnAnArray from './data';

const array = ReturnAnArray();
const tableArray = [];

for (var item of array) {
    // check to see if exist
    if(!(tableArray.some(x => x.agent === item.agent))) {
        var obj = {};
        obj['agent'] = item.agent;
        obj['sale'] = 1;
        tableArray.push(obj);
    } else {
        for (var itemTable of tableArray) {
            if (itemTable.agent === item.agent) {
                itemTable['sale']++;
            }
        }
    }
}
const chartArray = [['Agent', 'Sale']];
for (var item of tableArray) {
    chartArray.push([item.agent, item.sale]);
}

export default function BasicChart() {

    return (
        <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={ chartArray }
        rootProps={{ 'data-testid': '1' }}
        />
    );
}
