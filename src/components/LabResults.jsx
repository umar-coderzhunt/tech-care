import { FaDownload } from 'react-icons/fa';

export default function LabResults({results}) {

    return (
        <div className="bg-white p-4 shadow-md rounded-lg w-full">
            <h3 className="font-semibold text-lg mb-4">Lab Results</h3>
            <ul className="space-y-2">
                {results?.map((result) => (
                    <li key={result} className="flex items-center justify-between">
                        <p>{result}</p>
                        <button className="text-gray-500 hover:text-teal-500">
                            <FaDownload />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
