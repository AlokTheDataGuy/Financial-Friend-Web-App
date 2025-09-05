import SimpleBarChart from './SimpleBarChart';
import SimplePieChart from './SimplePieChart';

export default function Report({ insights }) {
            return (
                <div className="report">
                    <div className="summary">
                        {insights.summary.text}
                    </div>

                    <div className="highlights">
                        {insights.highlights.map((highlight) => (
                            <div key={highlight.id} className="highlight-card">
                                <div className="highlight-title">
                                    <span>{highlight.icon}</span>
                                    <span>{highlight.title}</span>
                                </div>
                                <div className="highlight-desc">
                                    {highlight.description}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="charts-section">
                        {insights.charts.map((chart, index) => (
                            chart.type === 'pie' ? (
                                <SimplePieChart key={index} data={chart.data} />
                            ) : (
                                <SimpleBarChart key={index} data={chart.data} />
                            )
                        ))}
                    </div>

                    {insights.actions && insights.actions.length > 0 && (
                        <div className="actions">
                            <h3 className="actions-title">💡 Quick Wins</h3>
                            {insights.actions.map((action) => (
                                <div key={action.id} className="action-card">
                                    <div className="action-title">{action.title}</div>
                                    <div className="action-desc">{action.description}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            );
        }