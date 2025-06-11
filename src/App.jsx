import { useState } from "react";
import Navbar from "./components/Navbar";
import JobList from "./components/JobList";
import CandidateList from "./components/CandiddateList";
import CandidateDetails from "./components/CandidateDetails";
import { jobs as allJobs } from "./data";
import "./styles/App.css";

function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("All");

  const handleSelectJob = (job) => {
    setSelectedJob(job);
    setSelectedCandidate(null);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <JobList
          jobs={allJobs}
          selectJob={handleSelectJob}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
        {selectedJob ? (
          <>
            <CandidateList
              job={selectedJob}
              selectCandidate={setSelectedCandidate}
            />
            <CandidateDetails candidate={selectedCandidate} />
          </>
        ) : (
          <div className="empty-panel">Select a job to view candidates</div>
        )}
      </div>
    </div>
  );
}

export default App;
