import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

var Mg = new Mongo.Collection("MajorArcana");

Meteor.startup(() => {
 
 
 console.log(Mg.find().fetch());
 
});
