import React, { useState } from "react";

export default function CandidateList({ job, selectCandidate }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCandidates = job.applicants.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToExcel = () => {
    alert("Export to Excel feature coming soon!");
  };

  return (
    <div className="candidate-list">
      <div className="candidate-header">
        <h2>Candidates for: {job.title}</h2>
        <button className="export-btn" onClick={exportToExcel}>
          Export to Excel
        </button>
      </div>

      <input
        type="text"
        placeholder="Search candidates by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <ul>
        {filteredCandidates.length ? (
          filteredCandidates.map((candidate) => (
            <li
              key={candidate.id}
              onClick={() => selectCandidate(candidate)}
              className="candidate-card"
            >
              <h4>{candidate.name}</h4>
              <p>Email: {candidate.email}</p>
              <p>
                Status:{" "}
                <span
                  className={`badge badge-${candidate.status.toLowerCase()}`}
                >
                  {candidate.status}
                </span>
              </p>
              <div className="tags">
                {candidate.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))
        ) : (
          <li className="no-results">No candidates found.</li>
        )}
      </ul>
    </div>
  );
}
