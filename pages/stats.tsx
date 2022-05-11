import subpagestyle from "../styles/Subpages.module.css";

import styles from "../styles/Stats.module.css";
import React from "react";
import StatsCardItem from "../components/stats/StatsCardItem";

const Stats = () => {
  return (
    <div className={subpagestyle.main}>
      <div className={subpagestyle.title}>Stats</div>

      <div className={styles.stats}>
        <div className={styles.statsItem}>
          <StatsCardItem title={"Games played"} amount={25} />
        </div>
        <div className={styles.statsItem}>
          <StatsCardItem title={"Games won"} amount={10} />
        </div>
        <div className={styles.statsItem}>
          <StatsCardItem title={"Rounds played"} amount={250} />
        </div>
        <div className={styles.statsItem}>
          <StatsCardItem title={"Rounds won"} amount={25} />
        </div>
        <div className={styles.statsItem}>
          <StatsCardItem title={"Games win %"} amount={50} />
        </div>
        <div className={styles.statsItem}>
          <StatsCardItem title={"Rounds win %"} amount={25} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
