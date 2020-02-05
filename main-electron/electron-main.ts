import { BrowserWindow , ipcMain } from 'electron';
import { DbService } from './db-service';

export default class Main {
    static mainWindow: Electron.BrowserWindow;
    static application: Electron.App;
    static BrowserWindow;
    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
    }

    private static onClose() {
        // Dereference the window object. 
        Main.mainWindow = null;
    }

    private static onReady() {
        var dbService = new DbService();
        dbService.add();
        Main.mainWindow = new BrowserWindow({
            width: 800, height: 600, webPreferences:
            {
                nodeIntegration: true,
            },
            frame: false
        })
        console.log('file://' + __dirname + '/web-dist/index.html');
        Main.mainWindow.loadURL('file://' + __dirname + '/web-dist/index.html');
        //Main.mainWindow.loadURL('http://localhost:4200');
        Main.mainWindow.on('closed', Main.onClose);
        ipcMain.on('ping', (event, arg) => {
            console.log('ping');
            event.returnValue = "pong";
        })
    }

    static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
        // we pass the Electron.App object and the  
        // Electron.BrowserWindow into this function 
        // so this class has no dependencies. This 
        // makes the code easier to write tests for 
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    }

    static openModal() {
        let modal = new BrowserWindow({ parent: Main.mainWindow, modal: true, show: false })
        modal.loadURL('https://www.sitepoint.com')
        modal.once('ready-to-show', () => {
            modal.show()
        })
    
    }
}
