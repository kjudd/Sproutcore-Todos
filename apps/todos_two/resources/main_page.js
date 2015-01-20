// ==========================================================================
// Project:   TodosTwo - mainPage
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals TodosTwo */

// This page describes the main user interface for your application.
sc_require('views/welcome');
sc_require('views/rolling');

TodosTwo.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'welcomeView rollingView'.w(),

    welcomeView: TodosTwo.WelcomeView.design(),
    rollingView: TodosTwo.RollingView.design()

  })

});
