import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

// Simple Bar Chart Component  

export default function SimpleBarChart({ data, title }) {
  return (
    <div style={{
      backgroundColor: 'white', border: '1px solid #e0e0e0',
      borderRadius: '8px', padding: '20px', marginBottom: '20px'
    }}>
      <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']} />
          <Bar dataKey="value" fill="#667eea" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}