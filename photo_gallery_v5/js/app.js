const search = new Filter('search', 'data-caption');

baguetteBox.run('.gallery', {
    captions: true,
    fullScreen: false,
    noScrollbars: false,
    titleTag: true,
    async: false,
    preload: 2,
    animation: 'fadeIn',
    afterShow: function() {},
    afterHide: function() {},
    onChange: null,
    overlayBackgroundColor: 'rgba(0,0,0,0.7)'

});
// baguetteBox.run('.gallery', {options});