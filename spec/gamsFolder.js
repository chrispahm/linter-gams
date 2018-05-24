'use babel'
const glob = require('glob')
const os = require('os')

if (os.platform() === 'win32') {
	if (glob.sync('N:\\soft\\GAMS*\\')) {
		console.log(glob.sync('N:\\soft\\GAMS*\\'))
		gamsExec = glob.sync('N:\\soft\\GAMS*\\')[glob.sync('N:\\soft\\GAMS*\\').length - 1] + 'gams.exe'
		console.log(gamsExec)
	}
}
