(function() {
"use strict";
kintone.events.on([ 'app.record.create.show',
                    'app.record.detail.show',
                    'app.record.print.show',
                    'app.record.edit.show'],function(event){
var record = event.record;

if (!record['テーブル閲覧可']) {
  // テーブル閲覧可フィールドにアクセスできなかったらテーブルを非表示にする
  kintone.app.record.setFieldShown("評価テーブル", false);
  //kintone.app.record.detail.Shown("評価テーブル", false);
} else {
  // テーブル閲覧可フィールドにアクセスを非表示にする
  kintone.app.record.setFieldShown("テーブル閲覧可", false);
  //kintone.app.record.detail.Shown("テーブル閲覧可", false);
}

return event;
});
})();