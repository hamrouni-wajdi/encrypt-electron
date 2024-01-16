/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via Vite');

import { ipcRenderer } from 'electron';


document.getElementById('load-file').addEventListener('click', () => {
    const filePath = document.getElementById('fileinput').files[0]
    console.log("herere",filePath)
    const password = document.getElementById('passwordInput').value;
  
    ipcRenderer.send('encrypt', filePath, password);
  });
  
  document.getElementById('decryptBtn').addEventListener('click', () => {
    const filePath = document.getElementById('fileInput').files[0].path;
    const password = document.getElementById('passwordInput').value;
  
    ipcRenderer.send('decrypt', filePath, password);
  });
  
  ipcRenderer.on('encryption-done', () => {
    alert('File encrypted successfully!');
  });
  
  ipcRenderer.on('decryption-done', () => {
    alert('File decrypted successfully!');
  });
