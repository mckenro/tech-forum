import DS from 'ember-data';

export default DS.Model.extend({
  ask: DS.attr(),
  notes: DS.attr(),
  user: DS.attr()
});
