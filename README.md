# Personal sprints

This is a private repository for my personal sprints, each sprint and topic will have its own branch which I'll list under each topic.

## Table of contents

- [Grunt, sprint one](#grunt)

## Grunt, sprint one

**Description:**

The first user story was to actually create and setup GruntJS, a Javascript task runner I've used before but never really got around to writing the entire thing from scratch. 

After the initial setup and including all the tasks and modules I'm refactoring it to Module Pattern.


**Branch:**
> sprint/grunt

**Folder structure:**

> - root/
>   - app/
>       - views/
>       - resources/
>           - assets/
>               - images/
>               - javascript/
>               - sass/
>       - index.html
> - build/
> - .gitignore
> - Gruntfile.js
> - package.json
> - README.md

**Plugins:**    

```
grunt.loadNpmTasks('grunt-contrib-watch');  
grunt.loadNpmTasks('grunt-contrib-connect');     
grunt.loadNpmTasks('grunt-contrib-jshint');     
grunt.loadNpmTasks('grunt-htmlhint');   
grunt.loadNpmTasks('grunt-contrib-sass');   
grunt.loadNpmTasks('grunt-tinypng');    
grunt.loadNpmTasks('grunt-contrib-clean');
```  
	


[▲ Back to top](#personalsprints)
