// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function(){
        var ds = ["a", "b", "c","d", "e", "f"];
      
         function loop(){
         
             
         $("."+ds[1]).fadeOut(2100,function(){$("."+ds[1]).fadeIn(2100, function(){
          $("."+ds[0]).fadeOut(2100,function(){$("."+ds[0]).fadeIn(2100,function(){
          $("."+ds[4]).fadeOut(2100,function(){$("."+ds[4]).fadeIn(2100,function(){
          $("."+ds[2]).fadeOut(2100,function(){ $("."+ds[2]).fadeIn(2100,function(){
           $("."+ds[5]).fadeOut(2100,function(){ $("."+ds[5]).fadeIn(2100,function(){
           $("."+ds[3]).fadeOut(2100,function(){ $("."+ds[3]).fadeIn(2100,function(){
          
                $("."+ds[2]).fadeOut(2100,function(){$("."+ds[2]).fadeIn(2100, function(){
          $("."+ds[5]).fadeOut(2100,function(){$("."+ds[5]).fadeIn(2100,function(){
          $("."+ds[3]).fadeOut(2100,function(){$("."+ds[3]).fadeIn(2100,function(){
          $("."+ds[0]).fadeOut(2100,function(){ $("."+ds[0]).fadeIn(2100,function(){
           $("."+ds[4]).fadeOut(2100,function(){ $("."+ds[4]).fadeIn(2100,function(){
           $("."+ds[1]).fadeOut(2100,function(){ $("."+ds[1]).fadeIn(2100,function(){
          
               
                $("."+ds[3]).fadeOut(2050,function(){$("."+ds[3]).fadeIn(2050, function(){
          $("."+ds[1]).fadeOut(2050,function(){$("."+ds[1]).fadeIn(2050,function(){
          $("."+ds[5]).fadeOut(2050,function(){$("."+ds[5]).fadeIn(2050,function(){
          $("."+ds[2]).fadeOut(2050,function(){ $("."+ds[2]).fadeIn(2050,function(){
           $("."+ds[4]).fadeOut(2050,function(){ $("."+ds[4]).fadeIn(2050,function(){
           $("."+ds[0]).fadeOut(2050,function(){ $("."+ds[0]).fadeIn(2050,function(){loop();
          
          });});
          });});
          });});
          });});
          });});
         });});
               
          });});
          });});
          });});
          });});
          });});
         });});
      
               
          });});
          });});
          });});
          });});
          });});
         });});
        
                  
                $("."+ds[3]).fadeOut(1700,function(){$("."+ds[3]).fadeIn(1700, function(){
          $("."+ds[1]).fadeOut(1700,function(){$("."+ds[1]).fadeIn(1700,function(){
          $("."+ds[5]).fadeOut(1700,function(){$("."+ds[5]).fadeIn(1700,function(){
          $("."+ds[2]).fadeOut(1700,function(){ $("."+ds[2]).fadeIn(1700,function(){
           $("."+ds[4]).fadeOut(1700,function(){ $("."+ds[4]).fadeIn(1700,function(){
           $("."+ds[0]).fadeOut(1700,function(){ $("."+ds[0]).fadeIn(1700,function(){
               
                       $("."+ds[2]).fadeOut(2050,function(){$("."+ds[2]).fadeIn(2050, function(){
          $("."+ds[5]).fadeOut(1700,function(){$("."+ds[5]).fadeIn(1700,function(){
          $("."+ds[3]).fadeOut(1700,function(){$("."+ds[3]).fadeIn(1700,function(){
          $("."+ds[0]).fadeOut(1700,function(){ $("."+ds[0]).fadeIn(1700,function(){
           $("."+ds[4]).fadeOut(1700,function(){ $("."+ds[4]).fadeIn(1700,function(){
           $("."+ds[1]).fadeOut(1700,function(){ $("."+ds[1]).fadeIn(1700,function(){
               
               
                    
         $("."+ds[1]).fadeOut(1700,function(){$("."+ds[1]).fadeIn(1700, function(){
          $("."+ds[0]).fadeOut(1700,function(){$("."+ds[0]).fadeIn(1700,function(){
          $("."+ds[4]).fadeOut(1700,function(){$("."+ds[4]).fadeIn(1700,function(){
          $("."+ds[2]).fadeOut(1700,function(){ $("."+ds[2]).fadeIn(1700,function(){
           $("."+ds[5]).fadeOut(1700,function(){ $("."+ds[5]).fadeIn(1700,function(){
           $("."+ds[3]).fadeOut(1700,function(){ $("."+ds[3]).fadeIn(1700,function(){loop();
     });});
          });});
          });});
          });});
          });});
         });});
               
               
               
   });});
          });});
          });});
          });});
          });});
         });});
          
          });});
          });});
          });});
          });});
          });});
         });});
         
         }
             
     loop();
    });



