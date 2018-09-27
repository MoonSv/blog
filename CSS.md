### CSS再学习

1. 布局：用一种方法快速实现如下布局，后续会补充flex，grid，table cell等方法

   1. 左右布局

      ```html
      <style>
          .left{
              width: 50%;
              height: 300px;
              background-color: grey;
              float: left;
          }
          .right{
              width: 50%;
              height: 300px;
              background-color: darkcyan;
              float: right;
          }
      </style>
      <div class="left"></div>
      <div class="right"></div>
      ```

   2. 左中右布局

      ```html
      <style>
          .left{
              width: 200px;
              height: 300px;
              background-color: grey;
              float: left;
          }
          .center{
              /* float: left; */
              height: 300px;
              margin: 0 200px;
              background-color: rgb(184, 26, 78);
          }
          .right{
              width: 200px;
              height: 300px;
              background-color: darkcyan;
              float: right;
          }
      </style>
      </head>
      <body>
          <div class="left"></div>
          <div class="right"></div>
          <div class="center"></div>    
      </body>
      ```

   3. 水平居中

      - `margin: 0 auto;`和`text-align: center;`的区别：

      ```html
      <style>
          div{
              width: 50%; /*block盒模型会自动延伸，所以需要设置宽度才可以看出居中效果*/
              margin: 0 auto; /*让有宽度的盒模型水平居中*/
              text-align: center; /*让盒模型中的内容水平居中*/
              background-color: rgb(235, 235, 235);
          }
          a{
              text-decoration: none;
              box-sizing: border-box;
              padding: 0 10px;
              color: #fff;
              width: 50px;
              height: 60px; /*父元素高度是由其内文档流（这里）决定的*/
              background-color: rgb(23, 117, 105);
              text-align: center; /*使a元素中的内容水平居中*/
              margin-left: 20px;
          }
          a:nth-child(1){
              margin-left: 0; /*去掉第一个a元素的margin-left*/
          }
      </style>
      </head>
      <body>
          <div>
              <a href="#">apple</a>
              <a href="#">orange</a>
              <a href="#">banana</a>
          </div>
      </body>
      ```

   4. 垂直居中

      ```html
      <style>
          div{
              width: 100px;
              height: 100px;
              background-color: rgb(35, 131, 187);
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
          }
      </style>
      </head>
      <body>
          <div></div>
      </body>
      ```

2. 最大宽度`max-width`是一个比`width`好的属性。如果使用最大宽度，当页面大小变化的时候，盒模型的宽度也会跟着变化。如果使用定宽，则当页面宽度减小时，会出现滚动条

3. img宽高可以直接在标签里写：

   ```html
   <img src="./img/avatar.jpg" width=299 height=347 alt="avatar">
   ```

4. **尽量不要写width和height**，这是很多bug的根源。推荐的方式是从内至外写，如现有一个span，可以先查看该span的宽度和高度，再根据目标宽高去设置padding值。这样做的好处是无论里面再添加多少文字也会保持原有样式。

5. 更改hr的样式只需知道hr就是一个border，那么更改样式只需要

   ```css
   hr{
   	height: 0;
       border: none;
       border-top: 1px solid #dedede;
   }
   ```

6. CSS中position取值有

   1. static
   2. relative
   3. absolute
   4. fixed
   5. sticky

7. 伪类：

   - 一个 CSS  [伪类（pseudo-class）](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) 是一个以冒号(`:`)作为前缀，被添加到一个选择器末尾的关键字，当你希望样式在特定状态下才被呈现到指定的元素时，你可以往元素的选择器后面加上对应的伪类（pseudo-class）。你可能希望某个元素在处于某种状态下呈现另一种样式，例如当鼠标悬停在元素上面时，或者当一个复选框被禁用或被勾选时，又或者当一个元素是它在 DOM 树中父元素的第一个子元素时。

8. 伪元素：

   - [伪元素（Pseudo-element）](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)跟伪类很像，但它们又有不同的地方。它们都是关键字，但这次伪元素前缀是两个冒号 (`::`) ， 同样是添加到选择器后面去选择某个元素的某个部分。

9. 如果父元素的高度是固定的，那么子元素可以直接写`height: 100%`来撑满，如果父元素不是固定，那么写`height: 100%`无效果。

10. `display: block;`会自动伸展盒模型，`display: inline-block`会自动收缩盒模型。但`display: inline-block`有一个bug，**使用之后会在下面出来一个空隙，这时需要用`vertical-align: top`来消除bug**。