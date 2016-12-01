import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
var MajorArcana = new Mongo.Collection("MajorArcana");

Meteor.startup(() => {

    console.log(MajorArcana.find().fetch())
    
  // code to run on server at startup
});
