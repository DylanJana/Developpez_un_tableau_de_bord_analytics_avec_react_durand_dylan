import React from 'react';
import { LineChart, Line } from 'recharts';

export default function LineGraph() {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
                {name: 'Page B', uv: 400, pv: 2400, amt: 3000},
                {name: 'Page C', uv: 400, pv: 2400, amt: 1000},
                {name: 'Page D', uv: 400, pv: 2400, amt: 5000}
                ];
  return (
    <div>
      {/* const renderLineChart = (
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="amt" stroke="#8884d8" />
        </LineChart>
      ); */}
      LineGraph
    </div>
  )
}
