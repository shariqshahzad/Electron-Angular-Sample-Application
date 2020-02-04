"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var db_service_1 = require("./db-service");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.onWindowAllClosed = function () {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
    };
    Main.onClose = function () {
        // Dereference the window object. 
        Main.mainWindow = null;
    };
    Main.onReady = function () {
        var dbService = new db_service_1.DbService();
        dbService.add();
        Main.mainWindow = new electron_1.BrowserWindow({
            width: 800, height: 600, webPreferences: {
                nodeIntegration: true,
            },
            frame: false
        });
        console.log('file://' + __dirname + '/web-dist/index.html');
        //Main.mainWindow.loadURL('file://' + __dirname + '/web-dist/index.html');
        Main.mainWindow.loadURL('http://localhost:4200');
        Main.mainWindow.on('closed', Main.onClose);
        electron_1.ipcMain.on('ping', function (event, arg) {
            console.log('ping');
            event.returnValue = "pong";
        });
    };
    Main.main = function (app, browserWindow) {
        // we pass the Electron.App object and the  
        // Electron.BrowserWindow into this function 
        // so this class has no dependencies. This 
        // makes the code easier to write tests for 
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    };
    Main.openModal = function () {
        var modal = new electron_1.BrowserWindow({ parent: Main.mainWindow, modal: true, show: false });
        modal.loadURL('https://www.sitepoint.com');
        modal.once('ready-to-show', function () {
            modal.show();
        });
    };
    return Main;
}());
exports.default = Main;
//# sourceMappingURL=electron-main.js.map