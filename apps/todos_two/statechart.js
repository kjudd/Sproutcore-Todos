TodosTwo.statechart = SC.Statechart.create({

  trace: YES,

  initialState: 'readyState',

  readyState: SC.State.plugin('TodosTwo.ReadyState')
  // someOtherState: SC.State.plugin('TodosTwo.SomeOtherState')

});
