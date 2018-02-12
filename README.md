# linter-gams

A plugin for [Atom Linter](https://github.com/AtomLinter/atom-linter) providing a simple compilation checker for your [GAMS](https://www.gams.com/) models.
![linter-gams animation](https://github.com/chrispahm/linter-gams/blob/master/assets/linter-gams.gif)
## Configuration
linter-gams can be used out of the box for simple, single file models. It will check for the latest GAMS installation found in the PATH variable and the default install directories (Win: C:/GAMS/\*/\*/, N:/soft/GAMS*/, OSX: /Applications/GAMS*/sysdir/).

### Advanced usage
In case your
  - GAMS installation is located in a different directory than stated above / not in PATH
  - Model consists of multiple files
  - Model makes use of [GGIG](http://www.ilr.uni-bonn.de/em/rsrch/ggig/ggig_e.htm)

you need to place a a ```linter-gams.config.js``` file in the root directory of your project (the ```gams``` folder in GGIG projects)

```javascript
module.exports = {
  entry: 'model.gms', // the 'entry' point of your model
  ggig: false, // or true
//ini: 'dairydyn.ini', required if GGIG is set to true, the GAMS install & scratch directory & other parameters are parsed from here
  gamsPath: 'path/to/gams' // your specific GAMS install dir
}
```
for a standard GGIG project the config file would look like the following

```javascript
module.exports = {
  entry: 'exp_starter.gms',
  ggig: true,
  ini: 'dairydyn.ini' // or GtapInGams.ini or else
}
```
Note for GGIG usage: linter-gams will check only check for a config file in the current and parent directory.

## Contributing

Please feel free to submit an issue or a pull request!

## License

linter-gams is available under the [MIT license](http://opensource.org/licenses/MIT).
