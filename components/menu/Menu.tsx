import Link from "next/link"
import styles from "../../styles/Menu.module.css"
import { Db } from "../auth/DbOps"

const MenuItems = ["LOGIN", "PLAY", "OPTIONS", "STATS"]

// type Props = {
//   readonly upgrade: Upgrade
//   readonly brbs: number
//   readonly setBRBs : Dispatch<SetStateAction<number>>
//   readonly upg   radeCounts : Map<Upgrade, number>
//   readonly setUpgradeCounts : Dispatch<SetStateAction<Map<Upgrade, number>>>
// }

const Menu = () => {
  return (
    <div className={styles.wholemenu}>
      {MenuItems.map(ele => <ul className={styles.menuitem} key={ele}><Link href={`/${ele.toLowerCase() == "play" ? "game" : ele.toLowerCase()}`}>{ele}</Link></ul>)}
    </div>
  )
}

export default Menu
