import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function SimplePieChart({ data }) {
    return (
        <div className="chart-container">
            <h3 className="chart-title">Where Your Money Went</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ label, value }) => `${label}: ₹${value.toLocaleString()}`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}