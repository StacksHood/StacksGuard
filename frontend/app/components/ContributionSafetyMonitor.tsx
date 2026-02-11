"use client";

import styles from "./ContributionSafetyMonitor.module.css";

interface EscrowData {
  projectId: string;
  projectName: string;
  totalEscrowed: number;
  percentageOfGoal: number;
  refundStatus: "safe" | "warning" | "critical";
  fundReleaseDates: string[];
  contributorFunds: number;
}

const SAMPLE_ESCROW_DATA: EscrowData[] = [
  {
    projectId: "proj_001",
    projectName: "Stacks DeFi Bridge",
    totalEscrowed: 450000,
    percentageOfGoal: 85,
    refundStatus: "safe",
    fundReleaseDates: ["2024-02-20", "2024-03-20", "2024-04-20"],
    contributorFunds: 15000,
  },
  {
    projectId: "proj_002",
    projectName: "NFT Marketplace",
    totalEscrowed: 280000,
    percentageOfGoal: 64,
    refundStatus: "warning",
    fundReleaseDates: ["2024-03-15", "2024-04-15"],
    contributorFunds: 8500,
  },
  {
    projectId: "proj_003",
    projectName: "Smart Contract Auditing",
    totalEscrowed: 95000,
    percentageOfGoal: 45,
    refundStatus: "critical",
    fundReleaseDates: ["2024-04-01"],
    contributorFunds: 3200,
  },
];

export function ContributionSafetyMonitor() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Contribution Safety Monitor</h2>
        <p className={styles.subtitle}>Escrow Tracking Dashboard</p>
      </div>

      <div className={styles.grid}>
        {SAMPLE_ESCROW_DATA.map((escrow) => (
          <div
            key={escrow.projectId}
            className={`${styles.card} ${styles[escrow.refundStatus]}`}
          >
            <div className={styles.header_mini}>
              <div>
                <h3 className={styles.projectName}>{escrow.projectName}</h3>
                <p className={styles.projectId}>{escrow.projectId}</p>
              </div>
              <span className={`${styles.badge} ${styles[escrow.refundStatus]}`}>
                {escrow.refundStatus.toUpperCase()}
              </span>
            </div>

            <div className={styles.metrics}>
              <div className={styles.metric}>
                <span className={styles.label}>Total Escrowed</span>
                <span className={styles.value}>${escrow.totalEscrowed.toLocaleString()}</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.label}>Your Funds</span>
                <span className={styles.value}>${escrow.contributorFunds.toLocaleString()}</span>
              </div>
            </div>

            <div className={styles.progressSection}>
              <div className={styles.progressLabel}>
                <span>Funding Progress</span>
                <span className={styles.percent}>{escrow.percentageOfGoal}%</span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${escrow.percentageOfGoal}%` }}
                />
              </div>
            </div>

            <div className={styles.releaseDates}>
              <p className={styles.releaseLabel}>Scheduled Releases:</p>
              <ul className={styles.dateList}>
                {escrow.fundReleaseDates.map((date, idx) => (
                  <li key={idx} className={styles.dateItem}>
                    📅 {date}
                  </li>
                ))}
              </ul>
            </div>

            {escrow.refundStatus !== "safe" && (
              <button className={styles.claimButton}>Claim Refund</button>
            )}
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <h3 className={styles.summaryTitle}>Total Portfolio Value</h3>
        <div className={styles.summaryStats}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Total Escrowed</span>
            <span className={styles.statValue}>$825,000</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Your Contribution</span>
            <span className={styles.statValue}>$26,700</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Avg Safety</span>
            <span className={styles.statValue}>66%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
