import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("dogs.db")

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists dogs (id integer primary key not null, title text not null, image text not null, address text not null, lat real not null, lng real not null);",
        [],
        () => {
          resolve()
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })
  return promise
}

export const insertDog = (title, image, address, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "insert into dogs (title, image, address, lat, lng) VALUES (?, ?, ?, ?, ?);",
        [title, image, address, lat, lng],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      )
    })
  })
  return promise
}

export const fetchDogs = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM dogs",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      )
    })
  })
  return promise
}