!function () {
    let view = document.querySelector("section.comments");
    let controller = {
        view: null,
        messageList: null,
        myForm: null,
        init: function (view) {
            this.view = view;
            this.myForm = document.querySelector("#postMessageForm");
            this.initAv();
            this.loadMessages();
            this.bindEvents();
        },
        initAv: function () {
            // init
            var APP_ID = 'fK2O6YA9ldtdt6IJpfE2HXvf-gzGzoHsz';
            var APP_KEY = 'hHUuBX4YcnkRHpgHFBT0xOJn';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        loadMessages: function () {
            var query = new AV.Query('Message');
            var commentsList = document.querySelector("#commentsList");
            var comments = [];
            query.find().then(function (messages) {
                messages.map(message => {
                    var comment = document.createElement("li");
                    comment.innerText = `${message.attributes.author}: ${message.attributes.comment}`;
                    commentsList.append(comment);
                    comments.push(message.attributes.comment)
                })
                console.log(comments)
                return AV.Object.saveAll(messages);
            }).then(function (messages) {
                // 更新成功
            }, function (error) {
                // 异常处理
            });
        },
        bindEvents: function () {
            this.myForm.addEventListener('submit',  (e) => {
                e.preventDefault();
                this.postMessage();
            })
        },
        postMessage: function () {
            let author = this.myForm.querySelector('input[name=author]').value;
            let content = this.myForm.querySelector('input[name=content]').value;
            if (content && author) {
                console.log(content);
                var Message = AV.Object.extend('Message');
                var message = new Message();
                message.save({
                    'author': author,
                    'comment': content
                }).then(function (object) {
                    var comment = document.createElement("li");
                    comment.innerText = `${object.attributes.author}: ${object.attributes.comment}`;
                    commentsList.append(comment);
                    this.myForm.querySelector('input[name=content]').value = '';
                });
                console.log("submit!");
            } else {
                var commentError = document.querySelector("#commentError");
                commentError.classList.add("active");
                setTimeout(function () {
                    commentError.classList.remove("active");
                }, 2000)
            }
        }
    }
    controller.init();
}.call();