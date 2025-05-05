// importando os modulos app e browserwindow de electron

 const { app, BrowserWindow } = require('electron')

// Define a função createwindow que é responsavel cria uma janela do apalicativo electron
const createWindow = () => {
// Cria uma nova intancia de browserwindow com as dimensões especificadas
  const win = new BrowserWindow({
    width: 800, //Define a largura da janela
    height: 600 // Define a altura da janela
  })
//responsavel por carregar o arquivo index.html na janela criada
  win.loadFile('index.html')
}

// quando aplicativo estiver pronto, chama a função createwindow para criar a janela principal
app.whenReady().then(() => {
// executa a função createwindow para criar a ajanela principal
  createWindow()
})