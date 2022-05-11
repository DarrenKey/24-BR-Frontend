import styles from "../../styles/StatsCardItem.module.css"


type Props = {
  readonly title: String
  readonly amount : Number
}

const StatsCardItem = ({title, amount} : Props) => {
  return (
    <div className={styles.item}>
      <div className = {styles.title}>{title}</div>
      <div className = {styles.amount}>{amount.toString()}</div>
    </div>
  )
}

export default StatsCardItem
