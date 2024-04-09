const first = document.querySelector("form");

console.log('test')

window.addEventListener("load", function(){
    console.log('working')
    document.querySelector('h1').classList.add('heading');
});

const time = Date();

window.addEventListener("dblclick", function(){
    this.alert(time)
});

window.addEventListener("click", function(){
    console.log('check')
    document.querySelector('#emailBox').classList.remove('hidden');

});

