import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        user: this.get('user'),
        notes: this.get('notes'),
        ask: this.get('ask')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    },
    // saveQuestion(params) {
    //   var newQuestion = this.store.createRecord('question', params);
    //   newQuestion.save();
    //   this.transitionTo('index');
    // },
  }
});
