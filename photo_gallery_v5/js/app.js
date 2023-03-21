const search = new Filter('search', 'data-caption');

baguetteBox.run('.gallery', {
    captions: true,
    buttons: 'auto',
    fullScreen: false,
    noScrollbars: false,
    titleTag: true,
    async: false,
    preload: 2,
    // animation: 'fadeIn',
    afterShow: function() {},
    afterHide: function() {},
    onChange: null,

});

