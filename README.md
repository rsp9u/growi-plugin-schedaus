growi-plugin-schedaus
====

# Getting started
1. Run [schedaus](https://github.com/rsp9u/schedaus).
2. Set the environment variable to Growi.
   ```
   vi /opt/growi/config/env.prod.js
   module.exports = {
     ...
     SCHEDAUS_URI: 'http://<host>:<port>',
   };
   ```
3. Add plugin to Growi and run.
   ```
   yarn add growi-plugin-schedaus
   yarn start
   ```
4. Write a gantt chart with markers `@startgantt` and `@endgantt`.
   ```
   @startgantt

   project lasts 2020/4/1 to 2020/5/30
   today is 2020/4/20
   sat are closed
   sun are closed

   task1
     >> 2020/4/1
     >= 10 days
     .> 2020/4/1
     .< 2020/4/14
   task2
     >> task1's end
     >= 5 days
     .> 2020/4/15
     .- 60%

   @endgantt
   ```
