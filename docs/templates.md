---
sidebar_position: 6
---

# Templates

The **jsGantt Library** provides various configuration. The Templates option in the jsGantt library provides a customizable way to initialize various elements and behaviors within the Gantt chart. By using the templates, users can define templates for tooltips, taskbar text, task dragging, grid elements, and more. This allows for tailored presentations and interactions suited to specific project needs. The feature ensures flexibility and personalization, enhancing the user experience by allowing detailed customization of the Gantt chart's appearance and functionality.

## tooltip_text

It is a function template which return the `html` for the `tooltip`

```js title="tooltip_text"
jsGantt.templates.tooltip_text = function (start, end, task) {
  return `<b>${task.parent === 0 ? "User" : "Task"}:</b> 
            ${task.parent === 0 ? task.text : task.subject} 
            <br/><b>Start date:</b>${start} 
            <br/><b>End date:</b>${end} 
            <br/> 
            <b>Duration:</b> ${task.duration} ${
    task.duration > 1 ? "Days" : "Day"
  }`;
};
```

## taskbar_text

It returns the `html` for the `taskbars`

```js title="taskbar_text"
jsGantt.templates.taskbar_text = function (start, end, task) {
  if (task.parent == 0) {
    return `User : ${task.text}`;
  } else {
    return `Task : ${task.subject}`;
  }
};
```

## task_drag

It returns `true` or `false`, for allowing the task draging for spcific tasks.

```js title="task_drag"
jsGantt.templates.task_drag = function (start, end, task) {
  if (task.parent == 0) {
    return `User : ${task.text}`;
  } else {
    return `Task : ${task.subject}`;
  }
};
```

## grid_folder

It returns the grid folder `html`

```js title="grid_folder"
jsGantt.templates.grid_folder = (task) => {
  return `<div class="folder-class">Folder</div>`;
};
```

## grid_file

It returns the grid file `html`

```js title="grid_file"
jsGantt.templates.grid_file = (task) => {
  return `<div class="file-class">File</div>`;
};
```

## grid_blank

It returns the grid blank `html`

```js title="grid_blank"
jsGantt.templates.grid_blank = (task) => {
  return `<span>Blank</span>`;
};
```

## grid_header_class

It returns the class for the sidebar header
You can add multiple classes by separating them with space.

```js title="grid_header_class"
jsGantt.templates.grid_header_class = (columns, index) => {
  return "my-header-class header-class";
};
```

## grid_row_class

It returns the class for the row of sidebar grid
You can add multiple classes by separating them with space.

```js title="grid_row_class"
jsGantt.templates.grid_row_class = (start, end, task) => {
  return "my-grid-row-class";
};
```

## task_class

It returns classes for task

```js title="task_class"
jsGantt.templates.task_class = (start, end, task) => {
  return "my-task-class";
};
```

## task_row_class

It returns classes for the task row

```js title="task_row_class"
jsGantt.templates.task_row_class = (start, end, task) => {
  return "my-task-row-class";
};
```

## scale_cell_class

It returns classes for the timeline scales

```js title="scale_cell_class"
jsGantt.templates.scale_cell_class = (ate, scale, scaleIndex) => {
  return "my-scale-class";
};
```

## grid_cell_class

It returns classes for the sidebar grid cell

```js title="grid_cell_class"
jsGantt.templates.grid_cell_class = (col, task) => {
  return "my-grid-cell-class";
};
```

## timeline_cell_class

It returns classes for the sidebar grid cell

```js title="timeline_cell_class"
jsGantt.templates.timeline_cell_class = (task, date) => {
  return "my-task-cell-class";
};
```

## showLightBox

It returns the html for the popup modal open on dblclick

```js title="showLightBox"
jsGantt.templates.showLightBox = (task) => {
  return `<form action="/action_page.php"> 
  <label for="fname">First name:</label><br>  
  <input type="text" id="fname" name="fname" value="John"><br>  
  <label for="lname">Last name:</label><br>  
  <input type="text" id="lname" name="lname" value="Doe"><br><br>  
  <input type="submit" value="Submit">  
</form>`;
};
```

```js title="Hide the lightbox"
gantt.templates.showLightBox = false;
```
