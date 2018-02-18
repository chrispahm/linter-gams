# linter-gams

A plugin for [Atom Linter](https://github.com/AtomLinter/atom-linter) providing a simple compilation checker for your [GAMS](https://www.gams.com/) models.
![linter-gams animation](https://github.com/chrispahm/linter-gams/blob/master/assets/linter-gams.gif)
## Configuration
linter-gams can be used out of the box for simple, single file models. It will check for the latest GAMS installation found in the PATH variable and the default install directories (Win: C:/GAMS/\*/\*/, N:/soft/GAMS*/, OSX: /Applications/GAMS*/sysdir/).
You can specify another GAMS install directory in the settings tab.
Linter-GAMS will try to find out if your GAMS file is part of a [GGIG](http://www.ilr.uni-bonn.de/em/rsrch/ggig/ggig_e.htm) project and will do the necessary adjustments by itself.

## Contributing

Please feel free to submit an issue or a pull request!

## License

linter-gams is available under the [MIT license](http://opensource.org/licenses/MIT).
