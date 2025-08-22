import { useState } from 'react';
import { FaUserCircle, FaCog, FaUsers, FaCalendarAlt, FaEnvelope, FaMoneyBillAlt } from 'react-icons/fa';
import Logo from "../assets/icons/logo.svg"

function Navbar() {
    const [activeTab, setActiveTab] = useState('Patients');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="mt-4 mb-8 bg-white rounded-full">
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img src={Logo} alt="TechCare Logo" className="h-12 w-[200px]" />
                </div>

                {/* Navigation Links */}
                <nav className="flex space-x-4">
                    <button
                        onClick={() => handleTabClick('Overview')}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-3xl ${activeTab === 'Overview' ? 'bg-background-secondary text-teal-600' : 'text-gray-700'
                            }`}
                    >
                        <FaUserCircle className="text-lg" />
                        <span>Overview</span>
                    </button>

                    <button
                        onClick={() => handleTabClick('Patients')}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-3xl ${activeTab === 'Patients' ? 'bg-background-secondary text-teal-600' : 'text-gray-700'
                            }`}
                    >
                        <FaUsers className="text-lg" />
                        <span>Patients</span>
                    </button>

                    <button
                        onClick={() => handleTabClick('Schedule')}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-3xl ${activeTab === 'Schedule' ? 'bg-background-secondary text-teal-600' : 'text-gray-700'
                            }`}
                    >
                        <FaCalendarAlt className="text-lg" />
                        <span>Schedule</span>
                    </button>

                    <button
                        onClick={() => handleTabClick('Message')}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-3xl ${activeTab === 'Message' ? 'bg-background-secondary text-teal-600' : 'text-gray-700'
                            }`}
                    >
                        <FaEnvelope className="text-lg" />
                        <span>Message</span>
                    </button>

                    <button
                        onClick={() => handleTabClick('Transactions')}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-3xl ${activeTab === 'Transactions' ? 'bg-background-secondary text-teal-600' : 'text-gray-700'
                            }`}
                    >
                        <FaMoneyBillAlt className="text-lg" />
                        <span>Transactions</span>
                    </button>
                </nav>

                {/* Profile and Settings */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <img src="https://i.pravatar.cc/150?u=JessicaTaylor" alt="TechCare Logo" className="h-10 w-10 rounded-full" />
                        <div className="text-sm">
                            <p className="text-gray-700">Dr. Jose Simmons</p>
                            <p className="text-gray-400 text-xs">General Practitioner</p>
                        </div>
                    </div>

                    <button className="text-gray-700">
                        <FaCog className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
