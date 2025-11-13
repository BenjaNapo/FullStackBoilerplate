"use client";

import styles from "./page.module.css";
import AssessmentTabs from "../components/AssessmentTabs/AssessmentTabs";

export default function Home() {
  const mockAssessments = [
    {
      id: "1",
      title: "AQ Fullstack SWE Take-Home",
      subtitle:
        "[this is a 10 hour assessment, starting this challenge begins a 72-hour timer]",
      repoSlug: "aq-fullstack-swe-take-home.git",
      totalAssignments: 3,
      outstandingAssignments: 2,
      inProgressAssignments: 0,
      finishedAssignments: 1,
      status: "available",
    },
    {
      id: "2",
      title: "Senior Backend Challenge",
      subtitle: "[4 hours, 48-hour timer]",
      repoSlug: "senior-backend-challenge.git",
      totalAssignments: 5,
      outstandingAssignments: 0,
      inProgressAssignments: 0,
      finishedAssignments: 5,
      status: "archived",
    },
  ];

  const handleSend = (id) => console.log("Send to candidate", id);
  const handleOpen = (id) => console.log("Open assessment", id);

  return (
    <>
      <h1>Challenges</h1>
      <div className={styles.createChallengeBox}>
        <p>To create a new challenge click below:</p>
        <button className="btn">Create Challenge</button>
      </div>
      <AssessmentTabs
        assessments={mockAssessments}
        onSendToCandidate={handleSend}
        onOpenAssessment={handleOpen}
      />
    </>
  );
}
