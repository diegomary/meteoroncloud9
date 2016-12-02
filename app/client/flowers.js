/*global d3*/

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './flowers.html';

Template.flowers.onCreated(function helloOnCreated() {

  this.flowers = new ReactiveVar([]);
  this.flowers1 = new ReactiveVar([]);
  var tmpl=Template.instance();
  var userId="arsd34hfgrt44";
  
  HTTP.call( 'GET', 'https://dmm888enhanced.apphb.com/api/apicode/GetFlowers', {params: {user: userId}}, function( error, response ) {
  if ( error ) {
   console.log( error );
   return;
  } 

  tmpl.flowers1.set(response.data); });

});


Template.flowers.helpers({
  

  flowers () {

   return Template.instance().flowers.get();

  },
  
  
  flowers1 () {

   return Template.instance().flowers1.get();

  },
  
  
});

Template.flowers.events({
  
  'click .js-getflowers'(event, instance) {
   
  HTTP.call( 'GET', 'https://dmm888enhanced.apphb.com/api/apicode/GetFlowers', {}, function( error, response ) {
  if ( error ) {
   console.log( error );
   return;
  } 

  instance.flowers.set(response.data); });
 
  },
  
  
  
  
  
  
  
  
  
});
