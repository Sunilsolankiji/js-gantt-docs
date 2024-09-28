---
sidebar_position: 4
description: API reference for js-gantt chart.
---

# Task

## Get Task

Method to get task by id

```js title="getTask"
jsGantt.getTask(id);
```

## Filter Tasks

Method to filter task

```js title="filterTask"
jsGantt.filterTask(condition, isFilter, findRecursive);
```

**condition** is a function which returns the condition of the filter
**isFilter** is a type of `boolean` that states whether the filter should apply or not.
**findRecursive** is a type of `boolean` that states that the filter should apply recursive or not by default it is `false`.

```js title="filterTask example"
jsGantt.filterTask((task) => {
          if (task.parent === 0) {
            return task.text
              .toLowerCase()
              .includes(“string”.toLowerCase());
          } else {
            return task.subject
              .toLowerCase()
              .includes(“string”.toLowerCase());
          }
        }, true);
```

## Add Task

Method to add task

```js title="addTask"
jsGantt.addTask(task);
```

:::info Note
Here `task` is the new task object to add
:::

## Update Task

Method to update task

```js title="updateTaskData"
jsGantt.updateTaskData(task);
```

:::info Note
Here `task` is the updated task object
:::

## Delete Task

Method to delete task

```js title="deleteTask"
jsGantt.deleteTask(id);
```

here `id` is the id of the task

## Iterates through all tasks

Method to iterates through all tasks

```js title="eachTask"
jsGantt.eachTask((task) => {
  console.log(task);
});
```

## Open Task

Method to open a perticular task tree

```js title="openTask"
jsGantt.openTask(id);
```
