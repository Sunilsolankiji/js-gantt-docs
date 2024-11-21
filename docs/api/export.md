---
sidebar_position: 6
description: API reference for javascriptgantt chart.
---

# Export Gantt

## Export To PNG

for exporting gantt to PNG

```js title="exportToPNG"
javascriptgantt.exportToPNG(name, stylesheet);
```

Here  
**name** is for the exported file name, it's optional
**stylesheet** is the `array` of style files path
:::danger
exportToPNG is not statble yet.
:::

## Export To PDF

for exporting gantt to PDF

```js title="exportToPDF"
javascriptgantt.exportToPDF(name, stylesheet);
```

Here  
**name** is for the exported file name, it's optional
**stylesheet** is the `array` of style files path
:::danger
exportToPDF is not statble yet.
:::

## Export To Excel

for exporting gantt to Excel

```js title="exportToExcel"
javascriptgantt.exportToExcel(name);
```

Here **name** is for the exported file name, it's optional
:::success
exportToExcel is completely statble.
:::
