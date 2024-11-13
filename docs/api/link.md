---
sidebar_position: 3
description: API reference for javascriptgantt chart.
---

# Link

## Create Link

Method to Create a link

```js title="createLink"
const link = {
  id: 1, // link id
  source: 2, // source task id
  target: 23, // target task id
  type: 1, // link type
};
jsGantt.createLink(link);
```

## Delete Link

Method to delete a link

```js title="deleteLink"
jsGantt.deleteLink(id);
```
