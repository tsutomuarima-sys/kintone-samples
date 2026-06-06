(function() {
    "use strict";
    kintone.events.on('app.record.detail.process.proceed',function(event) {
        // [キャンセル]ボタンを押した場合に確認メッセージを表示する
        if (event.action.value == 'キャンセル') {
            if (!window.confirm('本当にキャンセルしてよろしいですか？')) {
                return false;
            }
        }
        return event;
    });
})();