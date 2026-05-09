'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [{name:'Mon',users:20},{name:'Tue',users:28},{name:'Wed',users:30},{name:'Thu',users:42},{name:'Fri',users:49}];
export default function SimpleChart(){return <div className='h-64 bg-card p-4 rounded-xl'><ResponsiveContainer width='100%' height='100%'><LineChart data={data}><XAxis dataKey='name'/><YAxis/><Tooltip/><Line type='monotone' dataKey='users' stroke='#8b5cf6'/></LineChart></ResponsiveContainer></div>}
