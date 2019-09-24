import { Meteor } from 'meteor/meteor';
import Profiles from '../collections';
Events = new Mongo.Collection("events");


Meteor.startup(() => {
  if (Profiles.find().count() === 0) {
    console.log("There are no profiles");
    let dummyProfiles = [
      { name: "Ana Toledo", age: 50 },
      { name: "Maribel Gómez", age: 40 },
      { name: "Carlos Torres", age: 60 },
      { name: "Andrea Cadena", age: 65 },
    ];

    dummyProfiles.forEach(e => {
      Profiles.insert(e);
    })
  }
});
