import styles from "../../styles/Menu.module.css"

const MenuItems = ["Login", "Play", "Options", "Stats"]

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
        { MenuItems.map(ele => <ul className={styles.menuitem} key={ele}>{ele}</ul>) }
    </div>
  )
}

export default Menu
