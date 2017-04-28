import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    destroyRental(rental) {
      var review_deletions = rental.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return rental.destroyRecord();
      });
      this.transitionTo('index');
    },
  }
});
