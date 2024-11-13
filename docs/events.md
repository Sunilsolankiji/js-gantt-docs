---
sidebar_position: 7
---

# Events

The **Events** option in the **javascriptgantt library** offers a comprehensive framework for managing interactions within the Gantt chart. By attaching events to the javascriptgantt library, users can set up and customize handlers for key actions such as task creation, updates, deletions, and various user interactions. This allows developers to tailor specific responses to user actions, ensuring the Gantt chart's behavior aligns with project management workflows and requirements. The Events option significantly enhances the chart's interactivity and responsiveness, providing a seamless and intuitive user experience.

## On Task DblClick

Triggered when Double clicked on the task

```js title="onTaskDblClick"
jsGantt.attachEvent("onTaskDblClick", (event) => {
  console.log("onTaskDblClick: ", event);
});
```

## On before Task DblClick

Triggered before Double clicked on the task

```js title="onBeforeTaskDblClick"
jsGantt.attachEvent("onBeforeTaskDblClick", (event) => {
  console.log("onBeforeTaskDblClick: ", event);
  if(event.task.id === 3){
    return false;
  }
});
```

:::info
return `false` if you want to prevent the task DblClick.
:::

## On Link DblClick

Triggered when Double clicked on the link

```js title="onLinkDblClick"
jsGantt.attachEvent("onLinkDblClick", (event) => {
  console.log("onLinkDblClick: ", event);
});
```

## On Before Link Add

Triggered before the link added

```js title="onBeforeLinkAdd"
jsGantt.attachEvent("onBeforeLinkAdd", (event) => {
  console.log("onBeforeLinkAdd: ", event);
});
```

## On Link Add

Triggered when link added

```js title="onLinkAdd"
jsGantt.attachEvent("onLinkAdd", (event) => {
  console.log("onLinkAdd: ", event);
});
```

## On Delete Link

Triggered when link deleted

```js title="onDeleteLink"
jsGantt.attachEvent("onDeleteLink", (event) => {
  console.log("onDeleteLink: ", event);
});
```

## On Before Task Drag

Triggered before the task dragging

```js title="onBeforeTaskDrag"
jsGantt.attachEvent("onBeforeTaskDrag", (event) => {
  console.log("onBeforeTaskDrag: ", event);
  if (event.task.children.length !== 0) {
    return false;
  } else {
    return true;
  }
});
```

:::info Note
return `flase` if you don't want to let the task drag.
:::

## On Task Drag

Triggered on the dragging of the task

```js title="onTaskDrag"
jsGantt.attachEvent("onTaskDrag", (event) => {
  console.log("onTaskDrag: ", event);
});
```

## On Before Task Drop

Triggered before task drop

```js title="onBeforeTaskDrop"
jsGantt.attachEvent("onBeforeTaskDrop", (event) => {
  console.log("onBeforeTaskDrop: ", event);

  if (event.parentTask.id == 12) {
    return false;
  }
});
```

:::info Note
return `flase` if you don't want to let the task drop at the current position.
:::

## On After Task Drag

Triggered after the dragging of the task

```js title="onAfterTaskDrag"
jsGantt.attachEvent("onAfterTaskDrag", (event) => {
  console.log("onAfterTaskDrag: ", event);
});
```

## On Task Delete

Triggered when the task deleted

```js title="onTaskDelete"
jsGantt.attachEvent("onTaskDelete", (event) => {
  console.log("onTaskDelete: ", event);
});
```

## On After Task Update

Triggered after the task updated

```js title="onTaskDelete"
jsGantt.attachEvent("onAfterTaskUpdate", (event) => {
  console.log("onAfterTaskUpdate: ", event);
});
```

## On Scroll

Triggered when you scroll gantt

```js title="onScroll"
jsGantt.attachEvent("onScroll", (event) => {
  console.log("onScroll: ", event);
});
```

## On Resize

Triggered on window resize

```js title="onResize"
jsGantt.attachEvent("onResize", (event) => {
  console.log("onResize: ", event);
});
```

## On Timeline cell click

Triggered when clicked on the timeline cell

```js title="onCellClick"
jsGantt.attachEvent("onCellClick", (event) => {
  console.log("onCellClick: ", event);
});
```

## On Request FullScreen

Triggered when requested Fullscreen

```js title="onRequestFullScreen"
jsGantt.attachEvent("onRequestFullScreen", (event) => {
  console.log("onRequestFullScreen: ", event);
});
```

## On Exit FullScreen

Triggered when exited Fullscreen

```js title="onExitFullScreen"
jsGantt.attachEvent("onExitFullScreen", (event) => {
  console.log("onExitFullScreen: ", event);
});
```

## On Task Tree Toggle

Triggered when task tree toggled

```js title="onTaskToggle"
jsGantt.attachEvent("onTaskToggle", (event) => {
  console.log("onTaskToggle: ", event);
});
```

## On Taskbar Color Change

Triggered on taskbar color change

```js title="onColorChange"
jsGantt.attachEvent("onColorChange", (event) => {
  console.log("onColorChange: ", event);
});
```

## On Select date range on drag

Select the start & end date through Drag

```js title="selectAreaOnDrag"
jsGantt.attachEvent("selectAreaOnDrag", (event) => {
  console.log("selectAreaOnDrag: ", event);
});
```

## On After Progress Drag

Triggered after task progress drag

```js title="onAfterProgressDrag"
jsGantt.attachEvent("onAfterProgressDrag", (event) => {
  console.log("onAfterProgressDrag: ", event);
});
```

## On Before Progress Drag

Triggered before task progress drag

```js title="onBeforeProgressDrag"
jsGantt.attachEvent("onBeforeProgressDrag", (event) => {
  console.log("onBeforeProgressDrag: ", event);

  if (event.task.parent === 0) {
    return false;
  } else {
    return true;
  }
});
```

:::info Note
return `flase` if you don't want to let the task progress drag.
:::

## On Auto Scheduling tasks

Triggered on auto scheduling tasks.

```js title="onAutoScheduling"
jsGantt.attachEvent("onAutoScheduling", (event) => {
  console.log("onAutoScheduling: ", event);
});
```

## On before save task

Triggered on blur when you use inline eitor of gantt.

```js title="onBeforeSave"
jsGantt.attachEvent("onBeforeSave", (event) => {
  console.log("onBeforeSave: ", event);
});
```

## On save task

Triggered on blur when you use inline eitor of gantt.

```js title="onSave"
jsGantt.attachEvent("onSave", (event) => {
  console.log("onSave: ", event);
});
```