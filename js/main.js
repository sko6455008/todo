var app=new Vue({
    el: '#app',
    data:{
        newItem: '',
        todos: []
    },
    methods: {
        addItem: function(event){

            // 未入力ならデータを追加しない
            if(this.newItem == '') return           


            var todo ={
                item: this.newItem,

                // チェックボックス
                isDone: false
            };

            this.todos.push(todo),


            // 入力後の文字列クリア
            this.newItem='';
        },
        deleteItem: function(index){
            // index→削除する配列のindex,1→削除する長さ
            this.todos.splice(index,1)

        }
    }
})