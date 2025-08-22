export function StatCardIcon({ title, value, status, icon }) {
    return (
        <div className="bg-blue-50 p-6 rounded-lg flex flex-col items-center shadow-md">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
                <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
                <p className="text-sm text-gray-500 mt-1">{status}</p>
            </div>
        </div>
    );
}
