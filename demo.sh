if [ -d $1 ]; then
	exit
fi
mkdir $1 $1/css $1/js
touch $1/index.html $1/css/style.css $1/js/main.js
echo " <!DOCTYPE>
 <title>Hello</title>
 <h1>Hi</h1>" > $1/index.html
echo "h1{color: red;}" > $1/css/style.css
echo " var string = "Hello World"
 alert(string)" > $1/js/main.js
exit
