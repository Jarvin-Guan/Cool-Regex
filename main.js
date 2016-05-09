'use strict';

const electron = require('electron');
const app = electron.app;  
const BrowserWindow = electron.BrowserWindow;  
const env = require('./config/env.json');

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
    
    mainWindow = new BrowserWindow({width: env.MAINWINDOW.WIDTH, height: env.MAINWINDOW.HEIGHT});

    mainWindow.loadURL(`file://${__dirname}/index.html`);
    
    if(env.OPENDEVTOOLS){
        mainWindow.webContents.openDevTools();    
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
