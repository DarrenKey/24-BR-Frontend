import { db } from "../../util/firebase"
import { collection, onSnapshot, query } from "firebase/firestore"

const usersColl = collection(db, "users")