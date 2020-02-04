"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3_1 = require("sqlite3");
var DbService = /** @class */ (function () {
    function DbService() {
    }
    DbService.prototype.createTable = function () {
        this.db = new sqlite3_1.Database('D:/Database.sqlLite');
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
    };
    DbService.prototype.add = function () {
        var db = new sqlite3_1.Database('D:/Database.sqlLite');
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
    };
    return DbService;
}());
exports.DbService = DbService;
//# sourceMappingURL=db-service.js.map