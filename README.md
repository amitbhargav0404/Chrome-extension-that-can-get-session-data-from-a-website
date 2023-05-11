# Chrome-extension-that-can-get-session-data-from-a-website

## Description
This is a Chrome extension that allows you to get session data from a website and save it to Chrome storage. It works by checking if the active tab is from a specific website, and if it is, it executes a script in the context of the tab to retrieve the session data from local storage and save it to Chrome storage.

## Installation
1. Download the extension folder to your computer.
2. Open Google Chrome and go to the extensions settings page (chrome://extensions).
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click the "Load unpacked" button in the top left corner.
5. Select the downloaded extension folder and click "Select folder".
6. The extension should now be installed and visible in the extensions toolbar.

## Usage
1. Make sure you are logged in to the website from which you want to retrieve session data.
2. Click on the extension icon in the extensions toolbar to open the popup window.
3. The popup window will display a message indicating whether session data was successfully retrieved and saved to Chrome storage.

## Notes
- This extension only works for specific websites that you have defined in the manifest file.
- To make session data available for retrieval, you need to define a variable in your website's JavaScript code and store it in local storage using the following code: `window.localStorage.setItem("variableName", variableValue);`
- In the background.js file of this extension, you can retrieve the session data from local storage using the following code: `chrome.scripting.executeScript({ func: () => window.localStorage.getItem("variableName") })`
- To save the retrieved session data to Chrome storage, you can use the following code: `chrome.storage.sync.set({ "key": value })`
- Make sure to replace "variableName" and "value" with the actual variable name and value you are using in your website's code.
