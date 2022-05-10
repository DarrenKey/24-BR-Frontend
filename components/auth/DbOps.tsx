import { collection, deleteDoc, doc, DocumentData, getDoc, getDocs, Query, query, QueryConstraint, setDoc, updateDoc, where } from "firebase/firestore"
import { db } from "../../util/firebase"

const collectionName = "players"

type Player = {
    games_played: number
    games_won: number
    login: string
    rounds_missed: number
    rounds_solved: number
    token: string
}

export class Db {
    static newPlayer: Player = {
        games_played: 0,
        games_won: 0,
        login: "fillerlogin",
        rounds_missed: 0,
        rounds_solved: 0,
        token: "fillertoken"
    }

    // adds a new player, and returns its id
    static addPlayer = async (addedPlayer: Player) => {
        const playersColl = collection(db, collectionName)
        const playerDocRef = doc(playersColl)
        setDoc(playerDocRef, addedPlayer)
        return playerDocRef.id
    }

    // sets entry with [idProm] to [player]
    static setProps = async (idProm: Promise<string>, player: Player) => {
        const id = await idProm
        const playerDoc = doc(db, collectionName, id)
        updateDoc(playerDoc, player)
    }

    // idsProm(where("field name", "op", "query value")) returns an array promise of 
    // all the ids that satisfy the [where] filter
    static idsProm = async (w: QueryConstraint) => {
        const playersColl = collection(db, collectionName)
        const q = query(playersColl, w)
        const ret: string[] = []
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            ret.push(doc.id)
        })
        return ret
    }

    // gets the id from the login value, if login value has multiple ids, 
    // one of them is returned, if no matching login is found, 
    // a ReferenceError is raised
    static idFromLogin = async (login: string) => {
        const p = await Db.idsProm(where("login", "==", login))
        if (p.length > 0) {
            return p[0]
        } else {
            throw new ReferenceError("no matching login found")
        }
    }

    // similar to above
    static idFromToken = async (token: string) => {
        const p = await Db.idsProm(where("token", "==", token))
        if (p.length > 0) {
            return p[0]
        } else {
            throw new ReferenceError("no matching token found")
        }
    }

    static deleteID = async (idProm: Promise<string>) => {
        const id = await idProm
        const deletedPlayer = doc(db, collectionName, id)
        await deleteDoc(deletedPlayer)
    }

}