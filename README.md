
## Bootstrap grid demo

Install `live server` vscode extension. Enable the extension and click `Go live` from vscode status bar to open the demo on your default favorite (Chrome maybe 😄)browser.

Or just view the demo here: [demo](https://stealth-ossified-nylon.glitch.me/items.html)
## Explanation
Bootstrap offers a twelve-factor grid layout. Inside a row on a page, `columns` can range between 1-12. Utility classes for columns are prefixed with `col-{size}`.

e.g if you have 
```html
...
<div class="row">
  <div class="col-6">Column 1 of 2<div>
  <div class="col-6">Column 2 of 2</div>
</div>

```
This will take two equal columns of the row,occupying a full-width of the viewport(on desktop) because 6 + 6 = 12(max size factor)
Same goes for smaller column sizes such as `col-2` etc. If you use a size less than 12, like `col-2`, left space would be (12-2) = 10(space will be left on the row)

If sum of column widths in a row is greater than 12, columns will be stacked on top of each other, on desktop viewports.

Add more utility class to the `col-`s to have more responsive behavior, `col-xs-{column-width` `col-md-{your-column-width}` `col-lg-{column-width` for small, medium and large screen devices.

## Refference
 [w3schools](https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp) explains bootstrap grid system better.
 
Also see this stackoverflow [question]( https://stackoverflow.com/questions/69061475/the-bootstrap-cards-could-not-grid-properly/69061520?noredirect=1#comment122058286_69061520)

