module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);


  grunt.initConfig({
   less: {
     style:{
       files: {
         "build/css/main.css": ["source/less/main.less"]
       }
     }
   },

   autoprefixer: {
     options: {
       browsers: ['last 2 versions', 'ie 8', 'ie 9']
     },
     style:{
       src: "build/css/main.css"
     }
   },

  cmq: {
     style:{
       files: {
       "build/css/main.css": ["build/css/main.css"]
       }
     }
   },

   cssmin: {
     style:{
       options: {
         report: "gzip"
       },
       files: {
       "build/css/main.min.css": ["build/css/main.css"],
       "build/css/normalize.min.css": ["build/css/normalize.css"]  
       }
     }
   },

    csscomb: {
      style: {
        expand: true,
        src:["less/**/*.less"]
      }
    },

    imagemin: {
     images:{
       options: {
         optimizationLevel: 3
       },
       files: [{
       expand: true,
       src: ['build/img/**/*.{png,jpg,gif,svg}']
       }]
     }
   },

   htmlmin: {
       options: {
         removeComments: true,
         collapseWhitespace: true,
         caseSensitive: true,
         keepClosingSlash: false
       },
       html: {
         files: {
           "build/index.min.html": "build/index.html"
         }
     }
   },
   
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
            "img/**",
            "js/**",
            "css/normalize.css",
            "index.html"
            ],
          dest: "build"
        }]
      }
     },
    
    clean: {
      build: ["build"]
    }
   
  });

   grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "autoprefixer",
    "cmq",
    "cssmin",
    "csscomb",
    "imagemin",
    "htmlmin"   
 ]);

};