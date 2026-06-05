(function () {
  'use strict';

  // PC & モバイル両方に対応するイベント
  var events = [
    'app.record.create.submit.success',
    'mobile.app.record.create.submit.success'
  ];

  kintone.events.on(events, function (event) {
    var recordId = event.recordId;

    var body = {
      app: kintone.app.getId(), // モバイルでもOK
      id: recordId,
      record: {
        ドライバーID: {
          value: recordId
        }
      }
    };

    return kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', body)
      .then(function () {
        return event;
      })
      .catch(function (error) {
        console.error(error);
        alert('ドライバーIDの自動設定に失敗しました');
        return event;
      });
  });
})();
