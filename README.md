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
"grunt-contrib-clean": "^1.0.0",
"grunt-contrib-concat": "^1.0.1",
"grunt-contrib-connect": "^1.0.2",
"grunt-contrib-copy": "^1.0.0",
"grunt-contrib-cssmin": "^2.0.0",
"grunt-contrib-jshint": "^1.1.0",
"grunt-contrib-sass": "^1.0.0",
"grunt-contrib-uglify": "^2.2.0",
"grunt-contrib-watch": "^1.0.0",
"grunt-htmlhint": "^0.9.13",
"grunt-tinypng": "^0.7.0"
```  
	
## Things I don't fully understand about WordPress

1. What files are necessary for WordPress to work, how far can you strip the provided version.
1. The `functions.php` file
1. Is there a "best" way to setup WordPress (since it requires certain files to be in a exact location)
1. How to combine WordPress with Git in a correct manner (without requiring the user to download it manually every time he/she clones the project )
1. When to use plugins or write it yourself