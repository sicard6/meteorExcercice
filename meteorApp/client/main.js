import './main.html';
import Collections from "../collections";



Events = new Mongo.Collection("events");


//when the profile template is created
Template.profile.created = () => {
	console.log('Created the profile template');
};

//when the profile template is rendered
Template.profile.rendered = () => {
	console.log('Rendered the profile template');
};

// all the functions (state) of thr profile template
Template.profile.helpers({
	exampleHelper: () => {
		return 'string returned by exampleHelper';
	},

	profileList: () => {
		return [
			{
				name: 'Juan Rodríguez',
				age: 25
			},
			{
				name: 'María Gómez',
				age: 30
			},
			{
				name: 'Esteban Martínez',
				age: 15
			},
			{
				name: 'Luisa Sánchez',
				age: 19
			}
		];
	},

	passingData: (myString1, myString2) => {
		console.log(`These are the strings ${myString1} ${myString2}`);
  },
  
	randomHelper: () => {
		return Session.get('randomNumber');
  },

  profilesCollection: () => {
    return Collections.find({});
  }
  
});

//all the events that can occur on the template profile
Template.profile.events({
	'click button': (e, i) => {
		console.log('Button clicked');
		Session.set('randomNumber', Math.random(0, 99));
	}
});

Template.formulario.events({
  'submit form': (event) => {
    event.preventDefault();
    const target = event.target;
    const nEvento = target.nEvento.value;
    const Responsable = target.Responsable.value;
    const Inicio = target.Inicio.value;
    const Fin = target.Fin.value;
    const Ubicacion = target.Ubicacion.value;
    const DEvento = target.DEvento.value;

    let data = {
      nombreEvento: nEvento,
      responsable: Responsable,
      fechaInicio: Inicio,
      fechaFin: Fin,
      ubicacion: Ubicacion,
      des: DEvento
    };

    Events.insert(data);


  }
});

Template.eventos.helpers({

  eventsCollection: () => {
    return Events.find({});
  }

});
