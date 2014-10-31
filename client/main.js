
/// ‫*** Bismillahi Rahmani Rahim *** ///
  
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

UI.registerHelper('ds', function() {
    return '{{';
});

navbar = null;

Template.panelItem.rendered = function() {
    this.autorun(function() {
        navbar = $('.ui.menu');
        navbarActive(Router.current().options.route.path());
    });
}

var navbarActive = function(path) {
    if (!navbar) return;
    if (this.path) path = this.path;

    navbar.find('a.active').removeClass('active');
    navbar.find('a[href="'+path+'"]').addClass('active');
}
  
Router.configure({
    onAfterAction: navbarActive,
    layoutTemplate: 'layout',
    yieldTemplates: {
        'header': { to: 'header' }
    }
})

Meteor.startup(function () {
    FView.ready(function(require) {
        FView.registerView('GridLayout', famous.views.GridLayout);
    });
});

Template.home.helpers({
    comments: function () {
        return Comments.find();
    }
});

Template._comments.events({
    'click button#reply': function (e, tmpl) {
        e.preventDefault();

        var body = $("#body").val();
        console.info('clicked');

        Comments.insert({ body: body });
    }
});

Template.home.rendered = function () {
    $("iframe").prop('src', 'http://step7.meteor.com')
}

Template.hello.rendered = function () {
    $("iframe").prop('src', 'http://step1.meteor.com')
}

Template.leader.rendered = function () {
    $("iframe").prop('src', 'http://step2.meteor.com')
}

Template.begin.rendered = function () {
    $("iframe").prop('src', 'http://step3.meteor.com')
}

Template.modify.rendered = function () {
    $("iframe").prop('src', 'http://step4.meteor.com')
}

Template.twitter.rendered = function () {
    $("iframe").prop('src', 'http://step5.meteor.com')
}

Template.finish.rendered = function () {
    $("iframe").prop('src', 'http://step6.meteor.com')
}

Template.container.rendered = function () {
    $("iframe").prop('src', 'http://step7.meteor.com')
}
