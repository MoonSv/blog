let previewPart1 = `
/* Hi！ 
* 我将演示如何用简单的css画一只彩虹卡通喵～ 
* 现在演示速度为normal（中速），可以在左上方选择演示速度～
* 让我们开始吧！
* 首先根据个人习惯做一下必要的重置
*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#codePart {
    padding: 20px;
    overflow: auto;
    box-shadow: 0 0 10px 0px grey;
    border-radius: 30px 30px 0 0;
    background-color: #f5f5f5;
}

body {
    background-color: lightgrey;
    height: 100vh;
}

/* 然后初始一块绘画区域 */
.drawing-part {
    height: 50vh;
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrapper {
    width: 380px;
    height: 256px;
    position: relative;
}

/* 好了，让我们来画喵吧～！ 
* 首先是小猫的身体
*/
.cat {
    width: 119px;
    height: 148px;
    background-color: #555555;
    position: absolute;
    top: 48px;
    right: 50%;
    z-index: 1;
}

/* 左耳朵～ */
.cat::before {
    content: '';
    display: block;
    position: absolute;
    top: -12px;
    left: -12px;
    border: 12px solid transparent;
    border-right-color: #555555;
    transform: rotate(-45deg);
}

/* 右耳朵～ */
.cat::after {
    content: '';
    display: block;
    position: absolute;
    top: -12px;
    right: -12px;
    border: 12px solid transparent;
    border-left-color: #555555;
    transform: rotate(45deg);
}

/* 然后是喵的眼睛0.0 */
.eye {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 27px;

}

/* 左眼 0.- */
.eye.left {
    left: 50%;
    margin-left: -42px;
}

/* 右眼 -.0 */
.eye.right {
    right: 50%;
    margin-right: -42px;
}

/* ok！ 0.0
* 接下来 画一张嘴
*/
.mouth {
    position: absolute;
    background-color: #fff;
    width: 82px;
    height: 6px;
    left: 50%;
    transform: translateX(-50%);
    top: 46px;
    border-radius: 0 0 10px 10px;
}
/* 嗯，简单的小猫画完了 
* 现在我想让小猫躲在云☁️后面...
*/
.cloud {
    position: absolute;
    bottom: 0;
    height: 153px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    z-index: 2;
}

.cloud div:not(:nth-child(5)) {
    border-radius: 50%;
    background-color: #fff;
}
/* 第一朵云 */
.cloud .c1 {
    height: 81px;
    width: 81px;
}
/* 第二朵云 */
.cloud .c2 {
    height: 112px;
    width: 112px;
    margin-left: -15px;
}
/* 第三朵云 */
.cloud .c3 {
    height: 156px;
    width: 156px;
    margin-left: -21px;
}
/* 第四朵云 */
.cloud .c4 {
    height: 86px;
    width: 86px;
    margin-left: -15px;
}
/* 下面是什么鬼。。
* 填充一下好啦
*/
.cloud .fill-cloud {
    width: 76%;
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
}
/* ✌️，最后我们添加一个🌈彩虹背景
* 先初始化一片区域
*/
.rainbow {
    width: 250px;
    height: 250px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-left: 10px;
}

.rainbow div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
/* 红色光带 */
.rainbow>.r1 {
    border: 16px solid #b73f47;
}
/* 黄色光带 */
.rainbow>.r1>.r2 {
    border: 16px solid #ffcc4b;
}
/* 绿色光带 */
.rainbow>.r1>.r2>.r3 {
    border: 16px solid #9cbe2b;
}
/* 蓝色光带 */
.rainbow>.r1>.r2>.r3>.r4 {
    border: 16px solid #1e5b80;
}
/* 完工！
* 嗯，以上就是用超级简单的CSS3完成一只简单彩虹喵的过程
* 如果感兴趣可以参考代码自己尝试！
* 谢谢 0.0!
*/
`

!function writeCode(targetId, text, previousText, callback) {
    let speed = 40;
    $("button").on('click',function(){
        $(this).addClass('active').siblings().removeClass('active')
        speed = parseInt($(this).attr('data-speed'));
    })
    let i = 0;
    let codePart = document.getElementById(targetId);
    let stylePart = document.getElementById("stylePart");
    // 用setTimeout来代替setInterval，这样可以调节速度了
    setTimeout(function fn(){
        codePart.innerHTML = Prism.highlight(previousText + text.substring(0, i + 1), Prism.languages.css, 'css');
        stylePart.innerHTML = previousText + text.substring(0, i + 1);
        codePart.scrollTop = codePart.scrollHeight;
        if (i < text.length) {
            setTimeout(fn, speed)
        } else {
            // 调用传入的回调函数
            callback && callback.call();
        }
        i++;
    }, speed)
}.call(undefined, "codePart", previewPart1, '', ()=>{})