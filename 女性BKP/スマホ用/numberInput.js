jQuery.noConflict();
(function($) {
 "use strict";
 kintone.events.on(["mobile.app.record.edit.show","mobile.app.record.create.show"], function(event) {
 $('.gaia-ui-decimal-input-input input').attr('type', 'number');
 return event;
 });
})(jQuery);