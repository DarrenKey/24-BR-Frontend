import styles from "../../styles/Menu.module.css";

// type Props = {
//   readonly upgrade: Upgrade
//   readonly brbs: number
//   readonly setBRBs : Dispatch<SetStateAction<number>>
//   readonly upgradeCounts : Map<Upgrade, number>
//   readonly setUpgradeCounts : Dispatch<SetStateAction<Map<Upgrade, number>>>
// }

const BattleRoyale = () => {
  return (
    <div className={styles.battleroyale}>
      <div className={styles.brbox}>
        <div className={styles.b}>B</div>
        <div className={styles.r}>R</div>
      </div>
      <div className={styles.attle}>attle</div>
      <div className={styles.oyale}>oyale</div>
    </div>
  );
};

export default BattleRoyale;
