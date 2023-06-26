{ src: 'assets/vendor/revealjs/revealjs-plugins/menu/plugin.js', async: true },
{ src: 'assets/vendor/revealjs/revealjs-plugins/chalkboard/plugin.js', async: true },
{ src: 'assets/vendor/revealjs/revealjs-plugins/title-footer/title-footer.js', callback: function() { title_footer.initialize(); } },//not async because it may then not appear
{ src: 'assets/vendor/revealjs/revealjs-plugins/notes-pointer/notes-pointer.js', async: true },
{ src: 'assets/vendor/revealjs/revealjs-plugins/spotlight/spotlight.js' }, // does not work with current version of reveal.js
{ src: 'assets/vendor/revealjs/revealjs-plugins/skip-fragments/skip-fragments.js' }