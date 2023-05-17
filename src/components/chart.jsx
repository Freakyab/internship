import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Graph = () => {
  const data = [
    { month: 'Apr', progress: 50 },
    { month: 'May', progress: 70 },
    { month: 'Jun', progress: 300},
    { month: 'Jul', progress: 220.49 },
    { month: 'Aug', progress: 500.99 },
    { month: 'Sep', progress: 240.67 },
    { month: 'Oct', progress: 400.51 },
    { month: 'Nov', progress: 230.54 },
    { month: 'Dec', progress: 510.75 }
  ];
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 5
      }}>
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      <XAxis dataKey='month' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type='monotone' dataKey='progress' stroke='#8884d8' activeDot={{ r: 8 }}  />
    </LineChart>
  );
}

export default Graph;
