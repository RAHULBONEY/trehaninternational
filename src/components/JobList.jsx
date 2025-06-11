import React from "react";

export default function JobList({
  jobs,
  selectJob,
  selectedStatus,
  setSelectedStatus,
}) {
  const statuses = ["All", "Open", "Interviewing", "Closed"];

  return (
    <div className="joblist">
      <h2>Job Openings</h2>
      <div className="status-filters">
        {statuses.map((status) => (
          <button
            key={status}
            className={`filter-btn ${
              selectedStatus === status ? "active" : ""
            }`}
            onClick={() => setSelectedStatus(status)}
          >
            {status}
          </button>
        ))}
      </div>
      <ul>
        {jobs
          .filter(
            (job) => selectedStatus === "All" || job.status === selectedStatus
          )
          .map((job) => (
            <li
              key={job.id}
              onClick={() => selectJob(job)}
              className="job-card"
            >
              <h3>{job.title}</h3>
              <p>
                Status:{" "}
                <span className={`badge badge-${job.status.toLowerCase()}`}>
                  {job.status}
                </span>
              </p>
              <p>Applicants: {job.applicants.length}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
