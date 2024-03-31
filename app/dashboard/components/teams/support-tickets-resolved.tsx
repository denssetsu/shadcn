"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function SupportTicketsResolved() {
  const data = [
    {
      name: "Jan",
      delta: 40,
      alpha: 24,
      canary: 24,
    },
    {
      name: "Feb",
      delta: 30,
      alpha: 13,
      canary: 22,
    },
    {
      name: "Mar",
      delta: 20,
      alpha: 58,
      canary: 29,
    },
    {
      name: "Apr",
      delta: 14,
      alpha: 30,
      canary: 15,
    },
    {
      name: "May",
      delta: 29,
      alpha: 28,
      canary: 18,
    },
    {
      name: "Jun",
      delta: 19,
      alpha: 19,
      canary: 10,
    },
    {
      name: "Jul",
      delta: 34,
      alpha: 24,
      canary: 14,
    },
    {
      name: "Aug",
      delta: 21,
      alpha: 20,
      canary: 19,
    },
    {
      name: "Sep",
      delta: 49,
      alpha: 43,
      canary: 20,
    },
    {
      name: "Oct",
      delta: 43,
      alpha: 55,
      canary: 4,
    },
    {
      name: "Nov",
      delta: 39,
      alpha: 40,
      canary: 25,
    },
    {
      name: "Dec",
      delta: 34,
      alpha: 43,
      canary: 11,
    },
  ];

  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Line dataKey="delta" stroke="#84cc16" type="monotone" />
        <Line dataKey="alpha" stroke="#3b82f6" type="monotone" />
        <Line dataKey="canary" stroke="#f97316" type="monotone" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip
          labelClassName="font-bold"
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <Legend
          formatter={(name) => <span className="capitalize">{name}</span>}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
