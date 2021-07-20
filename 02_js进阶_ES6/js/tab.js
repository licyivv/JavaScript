class Tab{
    constructor(id){
        //获取元素
        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll('li');
        this.section = this.main.querySelectorAll('section');
        this.init();
    }
    init(){
        // 初始化操作让相关元素绑定事件
        for(var i=0; i < this.lis.length;i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
        }
    }
    //1.切换功能
    toggleTab(){
        // console.log(this.index);
        this.className = 'liactive';
        this.sections[this.index].className = 'conactive';
    }
    //2.添加功能
    addTab(){}
    //3.删除
    deleteTab(){}
    //4.修改
    editTab(){}
}

new Tab('#tab');
