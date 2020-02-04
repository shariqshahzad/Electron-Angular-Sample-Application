import { Database } from 'sqlite3';

export class DbService {
    private db: any;
    constructor() {

    }

    createTable() {
        this.db = new Database('D:/Database.sqlLite');
        this.db.serialize(function () {
            this.db.run("CREATE TABLE lorem (info TEXT)");

            var stmt = this.db.prepare("INSERT INTO lorem VALUES (?)");
            for (var i = 0; i < 10; i++) {
                stmt.run("Ipsum " + i);
            }
            stmt.finalize();

            this.db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
                console.log(row.id + ": " + row.info);
            });
        });

        this.db.close();
    }

    add() {
        var db = new Database('D:/Database.sqlLite');
        db.serialize(function () {
            db.run("CREATE TABLE lorem (info TEXT)");

            var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
            for (var i = 0; i < 10; i++) {
                stmt.run("Ipsum " + i);
            }
            stmt.finalize();

            db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
                console.log(row.id + ": " + row.info);
            });
        });

        db.close();
    }
}