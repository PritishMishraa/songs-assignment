import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
);

const options = {
    scales: {
        y: {
            max: 100,
            stepSize: 10,
        }
    },
    responsive: true,
};

const labels = ['Unique Plays', 'Total Plays'];

type TBarChart = {
    unique_plays: number,
    total_plays: number,
    title: string,
}

export function BarChart({ unique_plays, total_plays, title }: TBarChart) {

    const data = {
        labels,
        datasets: [
            {
                label: title,
                data: [unique_plays, total_plays],
                backgroundColor: 'rgba(255, 255, 255)',
            }
        ],
    };

    return <Bar options={options} data={data} />;
}