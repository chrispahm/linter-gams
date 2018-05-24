const findUp = require('find-up')

let test = findUp.sync('package.json', {cwd: 'C:\\Users\\pahmeyer\\Documents\\linter-gams\\specs'})
console.log(test)

let FarmDyn = findUp.sync('exp_starter.gms',{cwd: 'N:agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\coeffgen'})
console.log(FarmDyn)

let capri = findUp.sync('capmod.gms', {cwd: 'N:agpo\\work1\\SUSTAg\\capri\\capri3\\gams\\feed'})
console.log(capri)

let remote = findUp.sync('apilib.exe', {cwd: 'Y:gams-org\\testlib_ml'})
console.log(remote)
