import React from 'react'
import DiagnosticList from "../components/DiagnosticList";
import LabResults from "../components/LabResults";
import DiagnosisHistory from "../components/DiagnosticHistory";
import PatientDetails from "../components/PatientDetails";
import PatientSidebar from "../components/PatientSidebar";
import { useEffect, useState } from "react";
import fetchPatientData from "../service/patient";

function Dashboard() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetchPatientData((patients) => {
      setPatients(patients)
      // Assuming the API returns an array of patients, pick Jessica Taylor
      const jessica = patients.find((p) => p.name === "Jessica Taylor");
      setSelectedPatient(jessica);
    });
  }, []);

  if (!selectedPatient) return <div>Loading...</div>;
  return (
    <div className="flex items-stretch gap-8">
    <PatientSidebar patients={patients} selectedPatient={selectedPatient?.name} setSelectedPatient={setSelectedPatient} />
    <div className="w-full space-y-8">
      <div className="grid grid-cols-12 justify-between gap-8">
        <div className="col-span-8 space-y-8">
          <DiagnosisHistory
            diagnosisHistory={selectedPatient?.diagnosis_history} />
          <DiagnosticList diagnoses={selectedPatient?.diagnostic_list} />
        </div>
        <div className="col-span-4 space-y-8">
          <PatientDetails patient={selectedPatient} />
          <LabResults results={selectedPatient?.lab_results} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard