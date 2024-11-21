---
sidebar_position: 1
description: API reference for javascriptgantt chart.
---

# Gantt

## Render Gantt

Method to render the gantt chart

```js title="render"
javascriptgantt.render();
```

Here element is the div where you want to append gantt,
element is optional if you are not calling render function first time in your code;

## Destroy Gantt

Method to destroy the gantt chart

```js title="destroy"
javascriptgantt.destroy();
```

## Get the current zoom level scale config {#getScale}

Method to get the current level zoom scale

```js title="getScale"
javascriptgantt.getScale();
```

## Initialize zoom level

Method to initialize the zoom level, call this method

```js title="zoomInit"
javascriptgantt.zoomInit();
```

## Request FullScreen

Method to view gantt in fullscreen

```js title="requestFullScreen"
javascriptgantt.requestFullScreen();
```

## Exit FullScreen

Method to exit fullscreen

```js title="exitFullScreen"
javascriptgantt.exitFullScreen();
```

## Expand All

Method to expanding all tasks

```js title="expandAll"
javascriptgantt.expandAll();
```

## Collapse All

Method to Collapsing all tasks

```js title="collapseAll"
javascriptgantt.collapseAll();
```

## Add new data to existing data

Using this you can add new data to the existing data in gantt
here `data` is `array` which contain new data

```js title="parse"
javascriptgantt.parse(data);
```

## Clear All

It clears the old data
use it only when you change the data from your side.

```js title="clearAll"
javascriptgantt.clearAll();
```

## Get date cell position {#posFromDate}

Get the position of the date cell from timeline start

```js title="posFromDate"
javascriptgantt.posFromDate();
```

## Auto Scheduling

Method to automatically schedule your tasks based on the relations between them.

```js title="autoScheduling"
javascriptgantt.autoScheduling();
```

## Sort Data

To initiate sorting within the grid based on a specific action or event, such as a button click or page load, simply invoke the sort method.  
here **text** is the column field name on that basis data will be sorted, and second parameter `true` is `boolean` which is sorting order `asc` or `desc`.

```js title="sort"
javascriptgantt.sort("text", true);
```

## Attach an event

Method to attach an event to Gantt chart.

it take two param first is event name and second is a callback function which execute when the event is triggered.

```js title="attachEvent"
javascriptgantt.attachEvent("onTaskDblClick", (event) => {
        console.log("onTaskDblClick: ", event);
      });
```

## Initialize zoom

Method to initialize level.
After setting zoomLevel and zoomConfig run javascriptgantt.zoomInit() for applying your current zoom level

```js title="zoomInit"
javascriptgantt.zoomInit();
```

## Set Language

Method to set or change the language

```js title="setLocalLang"
javascriptgantt.setLocalLang("hi");
```

| Language      | Language Code |
| ------------- | ------------- |
| Arabic        | ar            |
| Belarusian    | be            |
| English       | en            |
| Catalan       | ca            |
| Chinese       | cn            |
| Croatian      | hr            |
| Czech         | cs            |
| Danish        | da            |
| Dutch         | nl            |
| Finnish       | fi            |
| French        | fr            |
| German        | de            |
| Greek         | el            |
| Hebrew        | he            |
| Hindi (India) | hi            |
| Hungarian     | hu            |
| Indonesian    | id            |
| Italian       | it            |
| Japanese      | jp            |
| Korean        | kr            |
| Norwegian     | no            |
| Persian       | fa            |
| Polish        | pl            |
| Portuguese    | pt            |
| Romanian      | ro            |
| Russian       | ru            |
| Slovak        | sk            |
| Slovenian     | si            |
| Spanish       | es            |
| Swedish       | sv            |
| Turkish       | tr            |
| Ukrainian     | ua            |
