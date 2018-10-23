// init
var APP_ID = 'fK2O6YA9ldtdt6IJpfE2HXvf-gzGzoHsz';
var APP_KEY = 'hHUuBX4YcnkRHpgHFBT0xOJn';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

let myForm = document.querySelector("#postMessageForm");
console.log(myForm);
myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let content = myForm.querySelector('input[type=text]').value;
    if (content) {
        console.log(content);
        var Message = AV.Object.extend('Message');
        var message = new Message();
        message.save({
            content: content
        }).then(function (object) {
            alert('Post successfully!');
        });
        console.log("submit!");
    } else {
        document.querySelector("#commentError").classList.add("active");
        setTimeout(function(){
            document.querySelector("#commentError").classList.remove("active");
        }, 2000)
    }

})

