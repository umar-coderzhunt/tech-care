import { FaCalendarAlt, FaUser, FaPhone, FaShieldAlt } from 'react-icons/fa';

const PatientDetails = ({ patient }) => {
    return (
        <section className="w-full bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            {/* Profile Picture */}
            <img
                src={patient.profile_picture}
                alt={patient.name}
                className="w-32 h-32 rounded-full mb-4"
            />

            {/* Patient Name */}
            <h2 className="text-xl font-bold text-gray-800">{patient.name}</h2>

            {/* Patient Details */}
            <ul className="text-sm text-gray-600 space-y-4 mt-6 w-full">
                <li className="flex items-center">
                    <FaCalendarAlt className="text-gray-500 w-5 h-5 mr-3" />
                    <div>
                        <p className="font-medium">Date Of Birth</p>
                        <p className="text-gray-700">{patient.date_of_birth}</p>
                    </div>
                </li>
                <li className="flex items-center">
                    <FaUser className="text-gray-500 w-5 h-5 mr-3" />
                    <div>
                        <p className="font-medium">Gender</p>
                        <p className="text-gray-700">{patient.gender}</p>
                    </div>
                </li>
                <li className="flex items-center">
                    <FaPhone className="text-gray-500 w-5 h-5 mr-3" />
                    <div>
                        <p className="font-medium">Contact Info.</p>
                        <p className="text-gray-700">{patient.phone_number}</p>
                    </div>
                </li>
                <li className="flex items-center">
                    <FaPhone className="text-gray-500 w-5 h-5 mr-3" />
                    <div>
                        <p className="font-medium">Emergency Contacts</p>
                        <p className="text-gray-700">{patient.emergency_contact}</p>
                    </div>
                </li>
                <li className="flex items-center">
                    <FaShieldAlt className="text-gray-500 w-5 h-5 mr-3" />
                    <div>
                        <p className="font-medium">Insurance Provider</p>
                        <p className="text-gray-700">{patient.insurance_type}</p>
                    </div>
                </li>
            </ul>

            {/* Button */}
            <button className="mt-6 bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 transition-colors">
                Show All Information
            </button>
        </section>
    );
};

export default PatientDetails;
