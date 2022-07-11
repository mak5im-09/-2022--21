const pathDB = "./private/database.db";
const db = require('better-sqlite3')(pathDB);

class DataProcessing {
    getFeeds() {
        let query = `
            SELECT userName, UserFeed, userNumber
            FROM feeds
            ORDER BY userNumber DESC`;
        let rows = db.prepare(query).all();
        return rows;
    }
    insertFeed(name, feed, number) {
        let values = { name: name, feed: feed, number: number };
        let query = `
            INSERT INTO feeds (userName,userFeed,userNumber)
            VALUES (@name, @feed, @number)`;
        db.prepare(query).run(values);
    }
}

module.exports = new DataProcessing();
