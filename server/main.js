import { Meteor } from 'meteor/meteor';
import {People} from '/common/people.js';

Meteor.startup(() => {
  // publication function
  Meteor.publish('allPeople', function() {
      return People.find(); 
  });    
    
  Meteor.methods({
    addPerson(name, age) {
        //insert into people collection
        People.insert(
            {
            name: name, 
            age: age
            }
        );
    } 
  });
});
