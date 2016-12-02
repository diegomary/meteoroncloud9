import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {_} from 'meteor/underscore';


var MajorArcana = new Mongo.Collection("MajorArcana");

Meteor.startup(() => {
    
    //var objs = MajorArcana.find().fetch();
    //if(!_.isUndefined(objs)) console.log(MajorArcana.find().fetch());
    

});
