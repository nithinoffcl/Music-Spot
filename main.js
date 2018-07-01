const {app,BrowserWindow,Menu,globalShortcut,ipcMain} = require('electron');
const path = require('path');
const url = require('url');
const os = require('os');

let MainWindow;

app.on('ready',() => {
  globalShortcut.register('CommandOrControl+Q',() => {
  app.quit();
});

  MainWindow = new BrowserWindow({width:800,height:700,backgroundColor:'black'}),
  MainWindow.loadURL(url.format({
  pathname:path.join(__dirname,'index.html'),
  protocol:'file',
  slashes:true,
}))
})


app.on('window-all-closed',() => {
  MainWindow = null;
  globalShortcut.unregisterAll()
  app.quit();
})


template = [
  {
    label:'Edit',
    submenu:[
    {
      role:'undo'
    },
    {
      role:'redo'
    },
    {
      role:'cut'
    },
    {
      role:'seperator'
    },
    {
      role:'copy'
    },
    {
      role:'paste'
    },
    ]
  },
  {
    label:'View',
    submenu:[
      {
        role:'reload'
      },
      {
        role:'forcereload'
      },
      {
        role:'zoomin'
      },
      {
        role:'zoomout'
      },
      {
        role : 'toggledevtools'
      },
    ]
  },
  {
    label:'Quit',
    submenu:[
      {
        role:'quit'
      },
]
}
]



const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
