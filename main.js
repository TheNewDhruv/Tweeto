
const electron = require('electron');
var menubar = require('menubar');

var BrowserWindow = electron.BrowserWindow


var mb = menubar({
  index:"file://"+ __dirname + "/indexdev.html",
  tooltip: "Tweeto",
  icon:__dirname + "/res/tweeto20.png",
  width:360,
  height:720
 }
);

const contextMenu = electron.Menu.buildFromTemplate([
  {
    label: 'About',
    click() {
      electron.dialog.showMessageBox({title: "Tweeto", type:"info", message: "Tweeto v0.0.1a\nA Small And Fast Twitter App \nDhruv Chaturvedi ©2016 TheNewDhruv.com", buttons: ["Close"] });
    }
  },
  {
    label: 'Update',
    click() {
      electron.dialog.showMessageBox({title: "Tweeto | Update", type:"info", message: "Coming Soon\nBe Check My Site For Latest Update \nDhruv Chaturvedi ©2016 TheNewDhruv.com", buttons: ["Close"] });
    }
  },
  {
    label: 'Website',
    click() {
      electron.shell.openExternal("https://thenewdhruv.com/Tweeto");
    }
  },
  {
    type: 'separator'
  },
  {
    label: 'Quit',
    click() {
      mb.app.quit();
    }
  }

]);

mb.on('ready', function ready () {
  console.log('Tweeto is Runing. Brahh');

  if (process.platform == 'win32') {
    mb.tray.setContextMenu(contextMenu);
  }

});
