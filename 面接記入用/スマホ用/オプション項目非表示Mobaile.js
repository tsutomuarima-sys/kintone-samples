(function() {
"use strict";
kintone.events.on([ 'mobile.app.record.create.show',
                    'mobile.app.record.detail.show',
                    'mobile.app.record.edit.show'],function(event){
var record = event.record;
kintone.mobile.app.record.setFieldShown("オプション項目", false);
kintone.mobile.app.record.setFieldShown("対応可能範囲", false);


return event;
});
})();