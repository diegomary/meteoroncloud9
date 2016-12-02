/*global d3*/

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {

  this.flowers = new ReactiveVar([]);
  this.flowers1 = new ReactiveVar([]);
  var tmpl=Template.instance();
  
  
  HTTP.call( 'GET', 'https://dmm888enhanced.apphb.com/api/apicode/GetFlowers', {}, function( error, response ) {
  if ( error ) {
   console.log( error );
   return;
  } 

  tmpl.flowers1.set(response.data); });

});


Template.hello.helpers({
  

  flowers () {

   return Template.instance().flowers.get();

  },
  
  
  flowers1 () {

   return Template.instance().flowers1.get();

  },
  
  
  
  
  
  
  
});

Template.hello.events({
  
  'click button'(event, instance) {
   
  HTTP.call( 'GET', 'https://dmm888enhanced.apphb.com/api/apicode/GetFlowers', {}, function( error, response ) {
  if ( error ) {
   console.log( error );
   return;
  } 

  instance.flowers.set(response.data); });
 
  },
  
  
});
