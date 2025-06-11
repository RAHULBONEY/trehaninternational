import React from "react";

export default function CandidateDetails({ candidate }) {
  if (!candidate) {
    return (
      <div className="candidate-details empty">
        <h3>Select a candidate to view details</h3>
      </div>
    );
  }

  const handleDownload = () => {
    alert("Downloading resume for " + candidate.name);
  };

  return (
    <div className="candidate-details">
      <h2>{candidate.name}</h2>
      <p>
        <strong>Email:</strong> {candidate.email}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        <span className={`badge badge-${candidate.status.toLowerCase()}`}>
          {candidate.status}
        </span>
      </p>
      <h4>Resume Summary:</h4>
      <p>{candidate.resume}</p>
      <button onClick={handleDownload} className="download-btn">
        Download Resume
      </button>
    </div>
  );
}
