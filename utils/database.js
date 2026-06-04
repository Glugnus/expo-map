import * as SQLite from "expo-sqlite";

export const dp = SQLite.openDatabaseSync("mapProject");

export const initDatabase = async () => {
  db.execAsync(`
        CREATE TABLE IF NOT EXISTS markers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        latitude REAL NOT NULL,
        longitude REAL NOT NULL,
        imageSource TEXT NOT NULL
        );
        INSERT INTO markers
        (latitude, longitude, imageSource)
        VALUES (
        43.8765,
        2.712,
        "https://img.magnific.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg"
        )
        `);
};
