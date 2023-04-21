# todo-list

<h2>What is this project?</h2>
This a to-do list web app. Users can add individual to-do items to specific projects / folders they make. 

<h2>Core app features</h2>
<ul>
  <li>create separate projects</li>
  <li> add a due date for each item</li>
  <li>set a priority level</li>
  <li>add a description to each item</li>
  <li>move items to different projects</li>
  <li>filter list items by important/due today and due within 7 days</li>
  <li>view every to-do item across all projects</li>
  <li>Save your projects and list</li>
  </ul>

Users can edit items within projects an change the above attributes. 

<h2>How it works</h2>
<p>This is a javascript-based app built with the webpack module bundler. Each item is stored as an object with certain methods in a global array. There's also another array for favourites ('important items' for UI).</p>

<p>At the centre are blocks of code which give the app it's dynamic features, like being able to edit items and move them around to different projects. When a user edits an item, first the app searches for the original unedited item in the global array. Once it has a match, it sets it to undefined, before splicing in the edited item. It makes use of similar code to allow the same user edits to be reflected in the favourites and all other display options (show all, due today/in 7 days etc) - E.g. if a user edits the due date in a project that's also on the favourites list, the new due date will also show in that same favourites list.</p>

<p>Each item within a project is displayed in a table which dynamically updates when a user deletes or edits an item. It does by matching dataIndex values to the corresponding row index. Then the table is re-made to dynamically keep the dataIndex values the same and ensure the app functions correctly.</p>
