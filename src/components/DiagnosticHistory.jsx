import { Line as LineChart } from "react-chartjs-2";
import {useMemo} from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { TemperatureIcon } from "./icons/TemperatureIcon";
import { HeartRateIcon } from "./icons/HeartRateIcon";
import { RespiratoryIcon } from "./icons/RespiratoryIcon";
import { StatCardIcon } from "./StatCardIcon";
import { StatisticIcon } from "./icons/StatisticIcon";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function DiagnosisHistory({ diagnosisHistory }) {
    const formatMonth = (month) => new Date(`${month} 1`).toLocaleString('default', { month: 'short' });

    const chartData = useMemo(() => ({
        labels: diagnosisHistory.map(({ month, year }) => `${formatMonth(month)} ${year}`),
        datasets: [
            {
                label: "Systolic",
                data: diagnosisHistory.map(({ blood_pressure }) => blood_pressure.systolic.value),
                fill: false,
                borderColor: "#E57373",
                backgroundColor: "#FFCDD2",
                pointBackgroundColor: "#E57373",
                pointRadius: 6,
            },
            {
                label: "Diastolic",
                data: diagnosisHistory.map(({ blood_pressure }) => blood_pressure.diastolic.value),
                fill: false,
                borderColor: "#64B5F6",
                backgroundColor: "#BBDEFB",
                pointBackgroundColor: "#64B5F6",
                pointRadius: 6,
            },
        ],
    }), [diagnosisHistory]);

    const chartOptions = useMemo(() => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: { grid: { display: false } },
            y: {
                min: 60,
                max: 180,
                ticks: { stepSize: 20 },
            },
        },
    }), []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Blood Pressure Header */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Blood Pressure</h3>
                <span className="text-sm text-gray-500">Last 6 months</span>
            </div>

            {/* Chart and Statistics Section */}
            <div className="grid grid-cols-12 gap-4">
                {/* Blood Pressure Chart */}
                <div className="col-span-8">
                    <LineChart data={chartData} options={chartOptions} />
                </div>

                {/* Statistics Section */}
                <div className="col-span-4 flex flex-col justify-center space-y-4">
                    <StatisticIcon title="Systolic" value="160" status="Higher than Average" color="pink-500" />
                    <div className="h-px bg-gray-300 w-full mx-auto" />
                    <StatisticIcon title="Diastolic" value="78" status="Lower than Average" color="blue-500" />
                </div>
            </div>

            {/* Stat Cards */}
            <div className="mt-5 grid grid-cols-3 gap-4">
                <StatCardIcon title="Respiratory Rate" value="20 bpm" status="Normal" icon={<RespiratoryIcon />} />
                <StatCardIcon title="Temperature" value="98.6°F" status="Normal" icon={<TemperatureIcon />} />
                <StatCardIcon title="Heart Rate" value="78 bpm" status="Lower than Average" icon={<HeartRateIcon />} />
            </div>
        </div>
    );
}


