import styles from "../../styles/Menu.module.css"

const MenuItmes = ["Login", "Play", "Options", "Stats"]

// type Props = {
//   readonly upgrade: Upgrade
//   readonly brbs: number
//   readonly setBRBs : Dispatch<SetStateAction<number>>
//   readonly upgradeCounts : Map<Upgrade, number>
//   readonly setUpgradeCounts : Dispatch<SetStateAction<Map<Upgrade, number>>>
// }

const Menu = () => {
  return (
    <div>
        { MenuItmes.map(ele => <ul className={styles.menuItem} key={ele}>{ele}</ul>)
        }
    </div>
  )
}

export default Menu
