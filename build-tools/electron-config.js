const config = {
    appId: "CHANGE_ME",
    productName: "CHANGE_ME",
    compression: "maximum",
    files: [
        "**/*",
        "!**/*.{iml,o,hprof,orig,pyc,pyo,rbc,swp,csproj,sln,xproj}",
        "!**/node_modules/*/{CHANGELOG.md,README.md,README,readme.md,readme}",
        "!**/node_modules/*/{test,__tests__,tests,powered-test,example,examples}",
        "!**/node_modules/*.d.ts",
        "!**/node_modules/.bin",
        "!.editorconfig",
        "!**/._*",
        "!**/{.DS_Store,.git,.hg,.svn,CVS,RCS,SCCS,.gitignore,.gitattributes}",
        "!**/{__pycache__,thumbs.db,.flowconfig,.idea,.vs,.nyc_output}",
        "!**/{appveyor.yml,.travis.yml,circle.yml}",
        "!**/{npm-debug.log,yarn.lock,.yarn-integrity,.yarn-metadata.json}",
        "!dist",
        "!src",
        "!public",
        "!build-tools"
    ],
    dmg: {
        writeUpdateInfo: false
    }
}

module.exports = config