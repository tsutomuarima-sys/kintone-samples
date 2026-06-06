(function() {
"use strict";
kintone.events.on([ 'app.record.create.show',
                    'app.record.detail.show',
                    'app.record.edit.show'],function(event){
var record = event.record;
kintone.app.record.setFieldShown("オプション項目", false);
kintone.app.record.setFieldShown("対応可能範囲", false);


return event;
});
})();