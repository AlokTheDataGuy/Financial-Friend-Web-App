import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

// Simple Bar Chart Component  

export default function SimpleBarChart({ data }) {
    return (
        <div className="chart-container">
            <h3 className="chart-title">Daily Spending Pattern</h3>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <XAxis dataKey="label" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`₹${value}`, 'Amount']} />
                    <Bar dataKey="value" fill="#667eea" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}