# linter-gams

A plugin for [Atom Linter](https://github.com/AtomLinter/atom-linter) providing a compilation checker for your [GAMS](https://www.gams.com/) models,
and a sidebar for symbol investigation/navigation. Also supports listing files (.lst).
![linter-gams](https://user-images.githubusercontent.com/20703207/40918732-754cd8de-6807-11e8-8e41-b1231e625d9a.gif)

## Installation
You can install from Settings view (`shift-comma`) by searching for `linter-gams`.

Alternatively, you can install through the CLI by running:

```
apm install linter-gams
```

## Configuration

![settings](https://user-images.githubusercontent.com/20703207/43004451-1f473a2c-8c30-11e8-9a51-8203fc7121b0.png)

In order to function properly, linter-gams needs a valid GAMS executable. It will check for the latest GAMS version found in the PATH variable and the default install directories (Win: `C:/GAMS/*/*/`, `N:/soft/GAMS*/`, OSX: `/Applications/GAMS*/sysdir/`).
If no installation was found in the default directories, you need to specify one in the packages settings pane (as shown in the picture above). `Linter-gams` runs on top of a regular GAMS installation, therefore the general [GAMS licensing](https://www.gams.com/latest/docs/UG_License.html) restrictions apply.

Linter-gams will try to find out if your GAMS file is part of a [GGIG](http://www.ilr.uni-bonn.de/em/rsrch/ggig/ggig_e.htm) project and will do the necessary adjustments by itself. If you are working on a (non GGIG) multi-file model and want to specify the GAMS entry file, you may do so in the package settings pane. Note that you don't need to specify a path, but rather the actual entry point file name (e.g. entryFile.gms). Linter-gams will search for this file in the same directory as the currently opened file, as well as the first two parent directories.

By default, linter-gams will also create a symbol list file (ctags compatible) in your projects root directory.
This way you can jump to a declaration of a set/parameter/equation etc. as highlighted in the Atom [symbols-view](https://atom.io/packages/symbols-view) core package.
## Usage

linter-gams will install all necessary packages for GAMS development. Those include [syntax highlighting](atom-language-gams), the [base linter](https://atom.io/packages/linter) (used for error underlining), and some [GAMS helper](https://atom.io/packages/gams-helpers) functions which will be explained here.

If you work on a GGIG project (CAPRI / FARMDYN), make sure you add the `trunk` folder (the one containing the `gams` and `GUI` folder) of your checkout as your Project Folder in Atom (`ctrl-shift-a` or File -> Add Project Folder...).

### Error underlining / linting
This feature is enabled by default, and will work as long as a valid GAMS executable is defined in the settings pane. The appearance of the linter can be adjusted by changing the settings in the `linter-ui-default` package. For GAMS development, I currently use the settings as shown in the following image:

![linter-settings](https://user-images.githubusercontent.com/20703207/38366895-789ff5fc-38e1-11e8-95fe-f70dea16e1a8.PNG)

Note that only the first error will be displayed, as typically subsequent errors may be resulting from that first error. Also note that errors will only be shown in active files -> if you work on a file which is currently not enabled (e.g. due to GUI settings in GGIG projects) no error checking will be done on that file.


### Symbol overview
In order to inspect where a variable/parameter/set was defined/assigned values/controlled/referenced or just to see its description, you can open `GAMS View` by using the shortcut `ctrl-o` or by opening the command palette (`ctrl-shift-p`) and typing `GAMS View: Show`. If the cursor is set inside a known symbol, the sidebar will be updated accordingly. A click on a given entry will jump to that symbol (also if the symbol is in another file). If you want to keep the sidebar from constantly updating while moving the cursor (e.g. when deeply inspecting a given symbol), you can click the lock button in the top left corner.

![sidebar](https://user-images.githubusercontent.com/20703207/40918757-892cfd84-6807-11e8-8cbe-d1a01b6aff8d.PNG)

You can also search for a symbol. However, the sidebar will only be updated if the search string completely matches a known symbol. At the moment, there is no autocompletion of symbols in the searchbar.

### Running your model

There are multiple options for running your model: You can either press the 'run' button in the sidebar, by pressing `shift-enter` or by opening the command palette (`ctrl-shift-p`) and typing `GAMS run` or just `run`. The model will be solved in the background, so you can continue working. While the model is solving, the `busy-signal` dot (usually green) at the bottom will be blinking. Once the model is solved, the listing file will be opened automatically in a new pane.

### Inspecting a parameter / set at a given position

Sometimes you need to check your parameters/sets values at a given position. Often, an abort statement is used in order to stop execution at that point and to display the values of the parameter. Linter-gams gives you two options on how to speed up that process:

If you type
```GAMS
abort myParameterOrSet;
```
and run your model (see section above), linter-gams will automatically jump to the parameter display in the listing file. Make sure you have the GAMS View sidebar opened (shift-o), otherwise the listing file will be opened at the beggining of the document.

For very large sets and parameters, an inspection through pivot tables (as seen in the GDX-viewer of the GAMS-IDE or GAMS Studio) is beneficial:

![check-param](https://user-images.githubusercontent.com/20703207/38366892-784d5d06-38e1-11e8-9524-2ccbe697eaa8.gif)

In order to speed up that process, you can simply type `c` at the desired position and press `TAB` in order to complete the snippet. As shown in the above gif, two lines will be pre-filled for you, so now all you have to do is enter the name of the set/parameter to inspect. Once done, just press `shift-alt-enter`. The model will again run in the background, and open the desired set/parameter in a new browser tab. This feature requires a working `Python` installation in the path variable.

### Other things I found useful in Atom for GAMS coding
  - The pre-installed autosave functionality (Settings -> Packages -> Autosave -> Enable (it's a checkbox inside the packages settings)).
  - Using the fuzzy file finder `ctrl-p` instead of searching for a file in the project tree view
  - Using the main shortcut `ctrl-shift-p` and then type what you want to do (like `Bookmark`, `top`, `bot`)
  - Jumping to the next error (even if its in a different file) by opening the command palette (`ctrl-shift-p`) and typing `linter next` or even shorter `li ne`. You can also click on the error in the error pane at the bottom.
  - The amazing [filter-lines](https://atom.io/packages/filter-lines) package (especially useful in Listing files). Just highlight the desired word/symbol and press `ctrl-alt-f`. Similar to KEDITS ALL command.

## Known errors
`Uncaught TypeError: Cannot read property 'removeChild' of null`

This error occurs frequently and is very hard to track down. However, for the time being, the following workaround exists:

Navigate to the installation directory of the `linter-gams` package. On Windows, the following will most likely work:

`%USERPROFILE%\.atom\packages\linter-gams\node_modules\vue\dist`

In that folder, open the file `vue.common.js`, and change the following code from line 1316

```js
function remove(el) {
  el.parentNode.removeChild(el);
}
```
to

```js
function remove(el) {
  if (!inDoc(el)) return false;
  el.parentNode.removeChild(el);
}
```

This should solve the issue until an actual fix is available.

## Contributing

Please feel free to submit an issue or a pull request!

## License

linter-gams is available under the [MIT license](http://opensource.org/licenses/MIT).

Note that this packages is not affiliated to the official GAMS development corp.
