import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>STACKSGUARD</h1>
          <p className={styles.subtitle}>
            &gt; Escrow & Refund Protection Layer
          </p>
        </header>

        <section className={styles.hero}>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.terminalControl}>●</span>
              <span className={styles.terminalControl}>●</span>
              <span className={styles.terminalControl}>●</span>
            </div>
            <div className={styles.terminalContent}>
              <p>$ stacksguard --init</p>
              <p className={styles.accent}>
                &gt; Initializing Safety Dashboard v1.0
              </p>
              <p>$ check escrow-status</p>
              <p className={styles.accent}>
                &gt; [MONITORING] Fund Protection System
              </p>
              <p>
                Scanning blockchain for refund triggers...
                <span className={styles.blink}>_</span>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featureCard}>
            <h3>🔒 Escrow Vault</h3>
            <p>Secure fund holding with release controls</p>
          </div>
          <div className={styles.featureCard}>
            <h3>🛡️ Safety Monitor</h3>
            <p>Real-time escrow tracking and alerts</p>
          </div>
          <div className={styles.featureCard}>
            <h3>💰 Trustless Claim</h3>
            <p>Direct asset recovery interface</p>
          </div>
          <div className={styles.featureCard}>
            <h3>⚠️ Risk Alerts</h3>
            <p>Visual project health indicators</p>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>StacksGuard &copy; 2024 | Powered by Stacks</p>
        </footer>
      </div>
    </main>
  );
}
