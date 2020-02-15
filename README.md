# choicescript
This is the `statbar` branch my fork of dfabulich's ChoiceScript project (https://github.com/dfabulich/choicescript).

## Adding a Statbar to Your Games
Now you can show and hide a little statbar at the top of the page instead of requiring your readers to open the stats page.

The example game in this branch has been modified to show and hide a statbar. Use this as a template for incorporating a statbar into your own games.

### Installation

1. Copy the code from `web/mygame/mygame.js` into your game's `mygame.js`.

2. Replace the stats with your game's stats.

3. Replace your game's `index.html` with `mygame`'s (or, if you've modified it, edit it. There are only two new lines: 1. the one with `statbar.css` in it, and 2. the one with `quickstats` in it.).

### Usage

* When you get to the part of your code where you want the statbar to appear, put: `*script updateStatBar();`.

* To make the statbar disappear, put: `*script hideStatBar();`

### That's it!
