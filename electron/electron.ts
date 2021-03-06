import {app, BrowserWindow} from 'electron'
import * as path from "path";
const isDev = require('electron-is-dev')

let window: Electron.BrowserWindow | null = null

const createWindow = () => {
    window = new BrowserWindow({
        width: 640,
        height: 480,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    if (isDev) {
        window.webContents.openDevTools()
    }

    window.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});