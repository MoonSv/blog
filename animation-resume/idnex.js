let markdownText = `
# Self Introduction
Name: Jiaqi Wang(Joe)
DOB: 26.12.1993
Computer science Master degree and will graduate from UNSW on Jan, 2019

# Skills
 - JavaScript
 - ReactJs
 - Vue

# Project
 - Mock Airbnb
 - Pretty resume
 - Canvas drawing board

# Contact me
Wechat: succinct2426
E-mail: justwe77@163.com
Phone: +61 423304568

# Favourite things to do
1. Photography
2. Scuba diving
3. Swimming
4. ACG
`
let previewPart1 = `
/*
 * Hi, This is Joe, in this demo, you will see how CSS works on the webpage.
 * Let's start.
 * First, give a grey color of the backgroud,
 */

body{
    background-color: gainsboro;
}

/*
 * and write some initial style
*/

*{
    margin: 0;
    padding: 0;
    transition: all 0.8s;
    box-sizing: border-box;
}

#introWrapper {
    width: 50%;
    height: 100%;
    position: fixed;
    padding: 15px;
    right: 0;
}

/*
 * give a border of this text area and add some style of it.
 */

#codePartWrapper{
     width: 50%;
     height: 100%;
     padding:15px;
     position: fixed;
}

#codePart{
    width: 100%;
    height: calc( 100vh - 30px );
    padding: 15px;
    box-shadow: 0 0 10px grey;
    overflow: auto;
}

/*
 * You might think that it's not easy to distinguish the format,
 * so ...
 */

.token.punctuation{
    color: #999;
}
.token.property{
    color: #905;
}
.token.selector{
    color: #690;
}
.token.function{
    color: #DD4A68;
}

/*
 * Looks better now? ^^
 * Let's continue do some 3d transform:
 */

#codePart{
    transform: rotate(7deg);
    transform: rotate(-7deg);
    transform: rotate(0deg);
}

/*
* Now, let's create another card to write something..
*/
`
let previewPart2 = `
/*
 * Here we go!
 */

#intro{
    width: 100%;
    height: calc( 100vh - 30px );
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    overflow: auto;
}

/*
 * Let's write someting on the white board!
 */
 
`
let previewPart3 = `
/*
 * As you can see the format is kind of weird right?
 * so I'm gonna use marked.js
 * (https://github.com/markedjs/marked)
 * to transfer the orgin text to markdown syntax
 * 
 * 3...
 * 2...
 * 1...
 * done!
 */

`
let previewPart4 = `
/*
 * Cool!
 * In the last, I'm gonna slight optimize the format of markdown
 */

#intro{
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, sans-serif;
}
#intro ul{
    margin: -14px;
}
#intro li{
    margin: 3px;
}
#intro p{
    padding-left: 16px;
}
h1{
    padding-bottom: 7px;
    border-bottom: 1px solid lightgrey;
}

/*
 * So this is the whole demonstration about this tiny resume,
 * if you are insterested about this or want to be friends of me
 * contact me without any hesitation!
 * Thanks for watching~!      ^^ 
 */
`
function writeCode(speed, targetId, text, previousText, callback) {
    let i = 0;
    let codePart = document.getElementById(targetId);
    let stylePart = document.getElementById("stylePart");
    let writeSpeed = speed;
    let timer = setInterval(() => {
        if (i === text.length) {
            clearInterval(timer);
            callback.call();
        } else {
            codePart.innerHTML = Prism.highlight(previousText + text.substring(0, i + 1), Prism.languages.css, 'css');
            stylePart.innerHTML = previousText + text.substring(0, i + 1);
            codePart.scrollTop = codePart.scrollHeight;
        }
        i++;
    }, writeSpeed)
}
function writeMarkdown(speed, targetId, text, previousText, callback) {
    let i = 0;
    let codePart = document.getElementById(targetId);
    let writeSpeed = speed;
    let timer = setInterval(() => {
        if (i === text.length) {
            clearInterval(timer);
            callback.call();
        } else {
            codePart.innerHTML = previousText + text.substring(0, i + 1);
            codePart.scrollTop = codePart.scrollHeight;
        }
        i++;
    }, writeSpeed)
}
writeCode(20, "codePart", previewPart1, '', () => {
    let intro = document.createElement("pre");
    intro.id = "intro";
    document.getElementById("introWrapper").append(intro);
    writeCode(20, "codePart", previewPart2, previewPart1, () => {
        writeMarkdown(20, "intro", markdownText, '', () => {
            writeCode(20, "codePart", previewPart3, previewPart1 + previewPart2, () => {
                document.getElementById("intro").innerHTML = marked(markdownText);
                writeCode(20, "codePart", previewPart4, previewPart1 + previewPart2 + previewPart3, () => {
                })
            })
        })
    })
});