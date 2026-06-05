//新規追加画面でボタンを使いたいときは'mobile.app.record.create.show'
//編集画面でボタンを使いたいときは'mobile.app.record.edit.show'
kintone.events.on(['mobile.app.record.create.show', 'mobile.app.record.edit.show'], event => {
    //ボタンを置きたいスペースフィールドを取ってくる
    const sp = kintone.mobile.app.record.getSpaceElement('spSuteki');

    //ボタンを作る
    const btn = document.createElement('button');
    //ボタンに表示したいテキスト
    btn.textContent='退店';


    //スペースフィールドにボタンを追加する
    sp.appendChild(btn);

      // 設定する日付を取得
      const currentDate = luxon.DateTime.local();


    //ボタンをクリックしたときの動作
    btn.onclick=()=>{
        const obj = kintone.mobile.app.record.get();
        //obj.record.状態フラグ.value = 99;
        obj.record.状態.value = '退店'
        obj.record.退店日.value = currentDate.toFormat('yyyy-MM-dd');
	//alert(currentDate.toFormat('yyyy-MM-dd'));

        kintone.mobile.app.record.set(obj);
    }

    return event;
});   