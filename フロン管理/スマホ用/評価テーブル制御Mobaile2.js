(function() {
"use strict";
kintone.events.on([ 'mobile.app.record.create.show',
                    'mobile.app.record.detail.show',
                    'mobile.app.record.print.show',
                    'mobile.app.record.edit.show'],function(event){
var record = event.record;

if (!record['テーブル閲覧可']) {
  // テーブル閲覧可フィールドにアクセスできなかったらテーブルを非表示にする
  kintone.mobile.app.record.setFieldShown("評価テーブル", false);
} else {
  // テーブル閲覧可フィールドにアクセスを非表示にする
  kintone.mobile.app.record.setFieldShown("テーブル閲覧可", false);
}

return event;
});
})();