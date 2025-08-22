import { FaEllipsisV, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

export default function PatientSidebar({patients, selectedPatient, setSelectedPatient}) {
    const [activePatient, setActivePatient] = useState(selectedPatient);

    // const patients = [
    //     { name: 'Emily Williams', gender: 'Female', age: 18, imgUrl: 'https://i.pravatar.cc/40?u=1' },
    //     { name: 'Ryan Johnson', gender: 'Male', age: 45, imgUrl: 'https://i.pravatar.cc/40?u=2' },
    //     { name: 'Brandon Mitchell', gender: 'Male', age: 36, imgUrl: 'https://i.pravatar.cc/40?u=3' },
    //     { name: 'Jessica Taylor', gender: 'Female', age: 28, imgUrl: 'https://i.pravatar.cc/40?u=4' },
    //     { name: 'Samantha Johnson', gender: 'Female', age: 56, imgUrl: 'https://i.pravatar.cc/40?u=5' },
    //     { name: 'Ashley Martinez', gender: 'Female', age: 54, imgUrl: 'https://i.pravatar.cc/40?u=6' },
    //     { name: 'Olivia Brown', gender: 'Female', age: 32, imgUrl: 'https://i.pravatar.cc/40?u=7' },
    //     { name: 'Tyler Davis', gender: 'Male', age: 19, imgUrl: 'https://i.pravatar.cc/40?u=8' },
    //     { name: 'Kevin Anderson', gender: 'Male', age: 30, imgUrl: 'https://i.pravatar.cc/40?u=9' },
    //     { name: 'Dylan Thompson', gender: 'Male', age: 36, imgUrl: 'https://i.pravatar.cc/40?u=10' },
    //     { name: 'Nathan Evans', gender: 'Male', age: 58, imgUrl: 'https://i.pravatar.cc/40?u=11' },
    //     { name: 'Mike Nolan', gender: 'Male', age: 31, imgUrl: 'https://i.pravatar.cc/40?u=12' },
    // ];

    return (
        <div className="w-[367px] bg-white p-4 border-r rounded-lg shadow-lg">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Patients</h2>
                <FaSearch className="text-gray-400" />
            </div>

            {/* Search Bar */}
            <div className="relative mb-4">
                <FaSearch className="absolute top-3 left-2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search"
                    className="pl-8 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
            </div>

            {/* Patients List */}
            <div className="pr-2.5 space-y-2 overflow-visible">
                {patients.map((patient) => (
                    <div
                        key={patient.name}
                        onClick={() => {setSelectedPatient(patient), setActivePatient(patient.name)}}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-teal-50 ${activePatient === patient.name ? 'bg-teal-100' : ''
                            }`}
                    >
                        <div className="flex items-center space-x-2">
                            <img
                                src={patient.profile_picture}
                                alt={patient.name}
                                className="h-8 w-8 rounded-full"
                            />
                            <div className="text-sm">
                                <p className="font-medium">{patient.name}</p>
                                <p className="text-gray-500">{patient.gender}, {patient.age}</p>
                            </div>
                        </div>
                        <FaEllipsisV className="text-gray-400" />
                    </div>
                ))}
            </div>
        </div>
    );
}
