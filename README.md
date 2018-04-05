# linter-gams

A plugin for [Atom Linter](https://github.com/AtomLinter/atom-linter) providing a compilation checker for your [GAMS](https://www.gams.com/) models.
Also adds some GAMS IDE features to Atom.
![linter-gams](https://user-images.githubusercontent.com/20703207/38366894-78855850-38e1-11e8-8561-16f4b067c9e7.gif)

## Installation
You can install through the CLI by doing:

```
$ apm install linter-gams
```

Or you can install from Settings view by searching for `linter-gams`.

## Configuration
In order to function properly, linter-gams needs a valid GAMS executable. It will check for the latest GAMS version found in the PATH variable and the default install directories (Win: `C:/GAMS/\*/\*/`, `N:/soft/GAMS*/`, OSX: `/Applications/GAMS*/sysdir/`).
If no installation was found in the default directories, you need to specify one in the packages settings pane. `Linter-gams` runs on top of a regular GAMS installation, therefore the general [GAMS licensing](https://www.gams.com/latest/docs/UG_License.html) restrictions apply.

![linter-gams-settings](https://user-images.githubusercontent.com/20703207/38366897-78d2c1d0-38e1-11e8-8ee1-5156fd72c0f8.PNG)


Linter-GAMS will try to find out if your GAMS file is part of a [GGIG](http://www.ilr.uni-bonn.de/em/rsrch/ggig/ggig_e.htm) project and will do the necessary adjustments by itself.

By default, linter-gams will also create a symbol list file (ctags compatible) in your projects root directory.
This way you can jump to a declaration of a set/parameter/equation etc. as highlighted in the Atom [symbols-view](https://atom.io/packages/symbols-view) core package.

If you have a multi-file model which is not part of a GGIG project, there currently is no way to tell linter-gams about the entry point of your model. If you are familiar with JavaScript, you can do the necesssary adjustments in the `lib/linter.js` file (by adjusting the value of the `expStarter` variable), if not just open an issue.

## Usage

linter-gams will install all necessary packages for GAMS development. Those include [syntax highlighting](atom-language-gams), the [base linter](https://atom.io/packages/linter) (used for error underlining), and some [GAMS helper](https://atom.io/packages/gams-helpers) functions which will be explained here.

If you work on a GGIG project (CAPRI / FARMDYN), make sure you add the `trunk` folder (the one containing the `gams` and `GUI` folder) of your checkout as your Project Folder in Atom (`ctrl-shift-a` or File -> Add Project Folder...).

### Error underlining / linting
This feature is enabled by default, and will work as long as a valid GAMS executable is defined in the settings pane. The appearance of the linter can be adjusted by changing the settings in the `linter-ui-default` package. For GAMS development, I currently use the settings as shown in the following image:

![linter-settings](https://user-images.githubusercontent.com/20703207/38366895-789ff5fc-38e1-11e8-95fe-f70dea16e1a8.PNG)

Note that only the first error will be displayed, as typically subsequent errors may be resulting from that first error. Also note that errors will only be shown in active files -> if you work on a file which is currently not enabled (e.g. due to GUI settings in GGIG projects) no error checking will be done on that file.


### Symbol overview
In order to inspect where a variable/parameter/set was defined/assigned values/controlled/referenced or just to see its description, you can open `GAMS View` by using the shortcut `ctrl-o` or by opening the command palette (`ctrl-shift-p`) and typing `GAMS View: Show`. If the cursor is set inside a known symbol, the sidebar will be updated accordingly. A click on a given entry will jump to that symbol (also if the symbol is in another file). If you want to keep the sidebar from constantly updating while moving the cursor (e.g. when deeply inspecting a given symbol), you can click the lock button in the top left corner.

![gams-view](https://user-images.githubusercontent.com/20703207/38366893-7866374a-38e1-11e8-963b-fa0f88fa44dd.PNG)

You can also search for a symbol. However, the sidebar will only be updated if the search string completely matches a known symbol. At the moment, there is no autocompletion of symbols in the searchbar.

### Running your model

You can run your model from inside the editor by pressing `shift-enter` or by opening the command palette (`ctrl-shift-p`) and typing `GAMS run` or just `run`. The model will be solved in the background, so you can continue working. While the model is solving, the `busy-signal` dot (usually green) at the bottom will be blinking. Once the model is solved, the listing file will be opened automatically in a new pane.

### Inspecting a parameter / set at a given position

![check-param](https://user-images.githubusercontent.com/20703207/38366892-784d5d06-38e1-11e8-9524-2ccbe697eaa8.gif)

Sometimes you need to check your parameters/sets values at a given position. Often, an abort statement is used in that case in order to stop execution at that point and to display the values of the parameter. In order to speed up that process, you can simply type `c` at the desired position and press `TAB` in order to complete the snippet. As shown in the above gif, two lines will be pre-filled for you, so now all you have to do is enter the name of the set/parameter to inspect. Once done, just press `shift-alt-enter`. The model will again run in the background, and open the desired set/parameter in a new browser tab.

### Other things I found useful in Atom for GAMS coding
  - The pre-installed autosave functionality (Settings -> Packages -> Autosave -> Enable (it's a checkbox inside the packages settings)).
  - Using the fuzzy file finder `ctrl-p` instead of searching for a file in the project tree view
  - Using the main shortcut `ctrl-shift-p` and then type what you want to do (like `Bookmark`, `top`, `bot`)
  - Jumping to the next error (even if its in a different file) by opening the command palette (`ctrl-shift-p`) and typing `linter next` or even shorter `li ne`. You can also click on the error in the error pane at the bottom.

## Contributing

Please feel free to submit an issue or a pull request!

## License

linter-gams is available under the [MIT license](http://opensource.org/licenses/MIT).

Note that this packages is not affiliated to the official GAMS development corp.
