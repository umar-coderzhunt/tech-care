export default function DiagnosticList({diagnoses}) {


    return (
        <div className="bg-white p-4 shadow-md rounded-lg w-full">
            <h3 className="font-semibold text-lg mb-4">Diagnostic List</h3>
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th className="py-2 px-4">Problem/Diagnosis</th>
                        <th className="py-2 px-4">Description</th>
                        <th className="py-2 px-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {diagnoses?.map((diag, idx) => (
                        <tr key={idx} className="border-t">
                            <td className="py-2 px-4">{diag.problem}</td>
                            <td className="py-2 px-4">{diag.description}</td>
                            <td className="py-2 px-4">{diag.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
