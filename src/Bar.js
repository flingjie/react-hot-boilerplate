import React, { Component } from 'react';
import { BarChart } from 'react-d3';

export default class Bar extends Component {
  render() {
    var barData = [
      {
        "name": "Series A",
        "values": [
          { "x": 1, "y":  91},
          { "x": 2, "y": 290},
          { "x": 3, "y": 25},
        ]
      },
      {
        "name": "Series B",
        "values": [
          { "x": 1, "y":  9},
          { "x": 2, "y": 49},
          { "x": 3, "y": 20},
        ]
      },
      {
        "name": "Series C",
        "values": [
          { "x": 1, "y":  14},
          { "x": 2, "y": 77},
          { "x": 3, "y": 30},
        ]
      }
    ];
    var width = 600;
    var height = 300;
    var color = '#3182bd';
    var title = 'Bar chart'

    return (
        <BarChart
          data={barData}
          width = {width}
          height={height}
          fill={color}
          title={title}
        />
    );
  }
}
