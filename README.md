# log(in)
> A mini 'program' to log everytime the user logs in**

** To make it work, user must run `'node run.js'` everytime on startup (can be automated according to OS)

# Usage
-   `npm install`
-   `node run.js`
-   It will output to the [`outputFileName`].txt specified on the config.json file (tutorial below)

# Config.json
- ### Config files is stored at config.json
    -   silentmode: `boolean` (default: `false`)
        -   Enables console output after writing
    
    -   outputFileName: `string` (default `'output'`)
        -   Name of the output file. If it is `'logging'` then it will output as `'logging.txt'`