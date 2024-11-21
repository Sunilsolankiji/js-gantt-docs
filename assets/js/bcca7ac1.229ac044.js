"use strict";(self.webpackChunkjs_gantt_docs=self.webpackChunkjs_gantt_docs||[]).push([[974],{6360:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(4848),i=t(8453);const r={sidebar_position:2,description:"API reference for javascriptgantt chart."},a="Date Methods",o={id:"api/date",title:"Date Methods",description:"API reference for javascriptgantt chart.",source:"@site/docs/api/date.md",sourceDirName:"api",slug:"/api/date",permalink:"/js-gantt-docs/docs/api/date",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"API reference for javascriptgantt chart."},sidebar:"api",previous:{title:"Gantt",permalink:"/js-gantt-docs/docs/api/general"},next:{title:"Link",permalink:"/js-gantt-docs/docs/api/link"}},d={},l=[{value:"Format Date To String",id:"formatDateToString",level:2},{value:"Add specific duration to a date",id:"add-specific-duration-to-a-date",level:2}];function c(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"date-methods",children:"Date Methods"}),"\n",(0,s.jsx)(e.h2,{id:"formatDateToString",children:"Format Date To String"}),"\n",(0,s.jsx)(e.p,{children:"formateDateToString is for formatting date in required format."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",metastring:'title="formatDateToString"',children:"javascriptgantt.formatDateToString(format, date);\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Here ",(0,s.jsx)(e.code,{children:"format"})," is the format in which we want the date and ",(0,s.jsx)(e.code,{children:"date"})," is the date which we want to format."]}),"\n",(0,s.jsx)(e.p,{children:"While specifying the format for dates you can use any character from the following list:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%y"})," - the year as a two-digit number (00 to 99);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%Y"})," - the year as a four-digit number (1900-9999);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%m"})," - the month as a number with a leading zero (01 to 12);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%n"})," - the month as a number without a leading zero (1 to 12);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%M"})," - the month as an abbreviation (Jan to Dec);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%F"})," - the month as a full name (January to December);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%W"})," - the week number of the year. Weeks start on Monday;"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%d"})," - the day as a number with a leading zero (01 to 31);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%j"})," - the day as a number without a leading zero (1 to 31);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%D"})," - the day as an abbreviation (Sun to Sat);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%l"})," - the day as a full name (Sunday to Saturday);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%h"})," - the hour based on the 12-hour clock (00 to 11);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%H"})," - the hour based on the 24-hour clock (00 to 23);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%g"})," - the hour based on the 12-hour clock without a leading zero (1 to 12);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%G"})," - the hour based on the 24-hour clock without a leading zero (0 to 23);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%i"})," - the minute as a number with a leading zero (00 to 59);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%s"})," - the second as a number with a leading zero (00 to 59);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%a"})," - displays am (for times from midnight until noon) and pm (for times from noon until midnight);"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"%A"})," - displays AM (for times from midnight until noon) and PM (for times from noon until midnight)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{title:"Tip",type:"tip",children:(0,s.jsxs)(e.p,{children:["For example, if you want ",(0,s.jsx)(e.strong,{children:"20th June 2023"})," as ",(0,s.jsx)(e.strong,{children:"20/06/2023"}),", you should specify ",(0,s.jsx)(e.strong,{children:'"%d/%m/%Y"'}),"."]})}),"\n",(0,s.jsx)(e.h2,{id:"add-specific-duration-to-a-date",children:"Add specific duration to a date"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",metastring:'title="add"',children:"javascriptgantt.add(date, number, unit);\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"date"})," - (Date) the date object that you need to add a time to/subtract a time from"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"number"})," - (number) the number of units to add. If this number is positive - the time will be added to the date, if negative - the time will be subtracted"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"unit"})," - (string) the time unit. Values: 'minute', 'hour', 'day', 'week', 'month', 'year'."]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>o});var s=t(6540);const i={},r=s.createContext(i);function a(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);