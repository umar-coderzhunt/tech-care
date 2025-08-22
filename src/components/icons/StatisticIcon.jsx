export function StatisticIcon({ title, value, status, color }) {
    return (
        <div>
            <h4 className={`text-2xl font-bold text-${color}`}>{value}</h4>
            <p className="text-sm text-gray-500">{status}</p>
            <p className={`text-sm font-semibold text-${color}`}>{title}</p>
        </div>
    );
}
