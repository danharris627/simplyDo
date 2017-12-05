import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {People} from '/common/people.js';
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
    Meteor.subscribe('allPeople');
  // counter starts at 0
  // this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

//made a start on the helper - it throws an error so commented out for now 
/*
Template.getPeople.helpers({
    return People.find(); 
})
*/ 

Template.hello.events({
  'click button'(event, instance) {
      //get the name & age from HTML form
      const name = instance.$('[name="name"]').val();
      const age = instance.$('[name="age"]').val();
      Meteor.call('addPerson', name, age);
      
  },
});
