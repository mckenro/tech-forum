import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('question'),
      reviews: this.store.findAll('answer')
    });
  },
});
