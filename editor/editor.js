const first = document.querySelector(".first");
const iframe = document.querySelector("iframe");
const btn = document.getElementById("runbtn");

const queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var example = urlParams.get('example');

var examples = {
  "html-helloworld": `
  <!DOCTYPE html>
  <html>
    <body>
      <h1>HTML helloworld</h1>
      <p>This is a paragraph</p>
    </body>
  </html>
  `,
  "html-headings": `
  <!DOCTYPE html>
  <html>
    <body>
      <h1>This is a level-1 heading</h1>
      <h2>This is a level-2 heading</h2>
      <h3>This is a level-3 heading</h3>
      <h4>This is a level-4 heading</h4>
      <h5>This is a level-5 heading</h5>
      <h6>This is a level-6 heading</h5>
      <p>This is just a normal paragraph.</p>
    </body>
  </html>
  `,
  "html-paragraph": `
  <!DOCTYPE html>
  <html>
    <body>
      <p>This is a paragraph for text.</p>
    </body>
  </html>
  `,
  "html-b-i-em-tags": `
  <!DOCTYPE html>
  <html>
    <body>
      <p>This is a normal paragraph. The following text will be bold, italic, or emphasized.</p>
      <b>Visit johanneschan.com!</b><br>
      <i>Visit johanneschan.com! It provides completly free tools.</i><br>
      <em>Visit johanneschan.com! It provides completly free tools and animations.</em><br>
      <p>You can put these tags inside each other.</p>
      <b>Visit johanneschan.com! <i>It provides completly free tools <em>and animations.</em></i></b>
    </body>
  </html>
  `,
  "html-br-hr": `
  <!DOCTYPE html>
  <html>
    <body>
      <p>You can insert line<br>breaks using the br tag.</p>
      <p>You can also insert a line using the hr tag.</p>
      <hr>
      <p>This text is after the line.</p>
    </body>
  </html>
  `,
  "html-div": `
  <!DOCTYPE html>
  <html>
    <body>
      <div style="background-color: blue;">
        <p>This is a div for containing content. It can also contain text, too.
      </div>
    </body>
  </html>
  `,
  "html-img": `
  <!DOCTYPE html>
  <html>
    <body>
      <div>Use the img tag and add the src attribute to make a image. You do not need to end them.</div>
      <img src="https://www.johanneschan.com/files/example-image.png">
      <div>To control the width and the height of the image, add the width attribute and the height attribute. The dimentions are in pixels. The width and height can also be controled using CSS.</div>
      <img src="https://www.johanneschan.com/files/example-image.png" width="155" height="96">
      <div>The image above is smaller than the original image.</div>
      <img src="https://www.johanneschan.com/files/example-image.png" width="466" height="291">
      <div>The image above is larger than the original image.</div>
    </body>
  </html>
  `,
  "html-span": `
  <!DOCTYPE html>
  <html>
    <body>
      <div>The span tag is a inline container for content or text. It is commanly used to make one section of text have some style.</div><br>
      <div>Lorem ipsum some text. <span style="color: purple;">This text is purple. Lorem ipsum some text.</span> Some more text dolor sit amet.</div>
    </body>
  </html>
  `,
  "html-small": `
  <!DOCTYPE html>
  <html>
    <body>
      <div>This is normal text.</div>
      <small>This text is small.</small>
    </body>
  </html>
  `,
  "html-hyperlink": `
  <!DOCTYPE html>
  <html>
    <body>
      <a href="https://www.johanneschan.com">This is a link to johanneschan.com. Change the href attribute to change where it links to.</a>
    </body>
  </html>
  `,
  "html-button": `
  <!DOCTYPE html>
  <html>
    <body>
      <button>This is a button. Add the onclick attribute to control what javascript to run when it is clicked.</button>
    </body>
  </html>
  `,
  "html-css": `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body {
          font-family: cursive;
        }

        .text {
          color: green;
        }
      </style>
    </head>

    <body>
      <div>Some text is made cursive using CSS.</div>
      <div class="text">This div with the class 'text' is made green by CSS.</div>
    </body>
  </html>
  `,
  "html-script": `
  <!DOCTYPE html>
  <html>
    <body>
      <button onclick="myFunction()">Click to show text</button><br>
      <div id="text" style="display: none;">Some text!</div>

      <script>
        function myFunction() {
          document.getElementById("text").style.display = "block";
        }
      </script>
    </body>
  </html>
  `,

  "html-onclick-attribute": `
  <!DOCTYPE html>
  <html>
    <body>
      <div style="padding: 20px; background-color: green;" onclick="alert('An alert is shown!')">Click me to show an alert</div>
    </body>
  </html>
  `,
  "html-class-attribute": `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        .text {
          color: green;
          padding: 10px;
          background-color: orange;
        }
      </style>
    </head>

    <body>
      <div id="normatext">This is normal text</div>
      <div class="text">This is text styled by CSS and will be hidden when you press the button below because of its class.</div><br>
      <button onclick="hideText()" id="button">Hide the text above</button>

      <script>
        function hideText() {
          document.getElementsByClassName("text")[0].style.display = "none";
          document.getElementById("button").style.display = "none";
          document.getElementById("normatext").innerHTML = "The text was hidden. Press run to reset it."
        }
      </script>
    </body>
  </html>
  `,
  "html-id-attribute": `
  <!DOCTYPE html>
  <html>
    <body>
      <div id="text" onclick="myFunction()">Click me to change my content because of my id.</div>

      <script>
        function myFunction() {
          document.getElementById("text").innerHTML = "The content was changed!";
        }
      </script>
    </body>
  </html>
  `
};

if (examples[example] != undefined) {
  first.textContent = examples[example];
}

btn.addEventListener("click", () => {
  run();
});

first.addEventListener("paste", function(e) {
  e.preventDefault();
  codeColor('first');
  var text = e.clipboardData.getData("text/plain");
  document.execCommand("insertText", false, text);
});

function run() {
  var html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
}
run();



function codeColor(elmnt, mode) { // the colors are edited
  var lang = (mode || "html");
  var elmntObj = (document.getElementById(elmnt) || elmnt);
  var elmntTxt = elmntObj.innerHTML;
  var tagcolor = "#767b82";
  var tagnamecolor = "#75b4c2";
  var attributecolor = "#a174c1";
  var attributevaluecolor = "mediumblue";
  var commentcolor = "#cccccc";
  var cssselectorcolor = "brown";
  var csspropertycolor = "#de935f";
  var csspropertyvaluecolor = "mediumblue";
  var cssdelimitercolor = "black";
  var cssimportantcolor = "#30baae";
  var jscolor = "black";
  var jskeywordcolor = "#75b4c2";
  var jsstringcolor = "brown";
  var jsnumbercolor = "red";
  var jspropertycolor = "black";
  elmntObj.style.fontFamily = "'Menlo', 'Consolas', 'DejaVu Sans Mono', monospace";

  if (!lang) {
    lang = "html";
  }
  if (lang == "html") {
    elmntTxt = htmlMode(elmntTxt);
  }
  if (lang == "css") {
    elmntTxt = cssMode(elmntTxt);
  }
  if (lang == "js") {
    elmntTxt = jsMode(elmntTxt);
  }
  elmntObj.innerHTML = elmntTxt;

  function extract(str, start, end, func, repl) {
    var s, e, d = "",
      a = [];
    while (str.search(start) > -1) {
      s = str.search(start);
      e = str.indexOf(end, s);
      if (e == -1) {
        e = str.length;
      }
      if (repl) {
        a.push(func(str.substring(s, e + (end.length))));
        str = str.substring(0, s) + repl + str.substr(e + (end.length));
      } else {
        d += str.substring(0, s);
        d += func(str.substring(s, e + (end.length)));
        str = str.substr(e + (end.length));
      }
    }
    this.rest = d + str;
    this.arr = a;
  }

  function htmlMode(txt) {
    var rest = txt,
      done = "",
      php, comment, angular, startpos, endpos, note, i;
    comment = new extract(rest, "&lt;!--", "--&gt;", commentMode, "W3HTMLCOMMENTPOS");
    rest = comment.rest;
    while (rest.indexOf("&lt;") > -1) {
      note = "";
      startpos = rest.indexOf("&lt;");
      if (rest.substr(startpos, 9).toUpperCase() == "&LT;STYLE") {
        note = "css";
      }
      if (rest.substr(startpos, 10).toUpperCase() == "&LT;SCRIPT") {
        note = "javascript";
      }
      endpos = rest.indexOf("&gt;", startpos);
      if (endpos == -1) {
        endpos = rest.length;
      }
      done += rest.substring(0, startpos);
      done += tagMode(rest.substring(startpos, endpos + 4));
      rest = rest.substr(endpos + 4);
      if (note == "css") {
        endpos = rest.indexOf("&lt;/style&gt;");
        if (endpos > -1) {
          done += cssMode(rest.substring(0, endpos));
          rest = rest.substr(endpos);
        }
      }
      if (note == "javascript") {
        endpos = rest.indexOf("&lt;/script&gt;");
        if (endpos > -1) {
          done += jsMode(rest.substring(0, endpos));
          rest = rest.substr(endpos);
        }
      }
    }
    rest = done + rest;
    for (i = 0; i < comment.arr.length; i++) {
      rest = rest.replace("", comment.arr[i]);
    }
    return rest;
  }

  function tagMode(txt) {
    var rest = txt,
      done = "",
      startpos, endpos, result;
    while (rest.search(/(\s|<br>)/) > -1) {
      startpos = rest.search(/(\s|<br>)/);
      endpos = rest.indexOf("&gt;");
      if (endpos == -1) {
        endpos = rest.length;
      }
      done += rest.substring(0, startpos);
      done += attributeMode(rest.substring(startpos, endpos));
      rest = rest.substr(endpos);
    }
    result = done + rest;
    result = "<span style=color:" + tagcolor + ">&lt;</span>" + result.substring(4);
    if (result.substr(result.length - 4, 4) == "&gt;") {
      result = result.substring(0, result.length - 4) + "<span style=color:" + tagcolor + ">&gt;</span>";
    }
    return "<span style=color:" + tagnamecolor + ">" + result + "</span>";
  }

  function attributeMode(txt) {
    var rest = txt,
      done = "",
      startpos, endpos, singlefnuttpos, doublefnuttpos, spacepos;
    while (rest.indexOf("=") > -1) {
      endpos = -1;
      startpos = rest.indexOf("=");
      singlefnuttpos = rest.indexOf("'", startpos);
      doublefnuttpos = rest.indexOf('"', startpos);
      spacepos = rest.indexOf(" ", startpos + 2);
      if (spacepos > -1 && (spacepos < singlefnuttpos || singlefnuttpos == -1) && (spacepos < doublefnuttpos || doublefnuttpos == -1)) {
        endpos = rest.indexOf(" ", startpos);
      } else if (doublefnuttpos > -1 && (doublefnuttpos < singlefnuttpos || singlefnuttpos == -1) && (doublefnuttpos < spacepos || spacepos == -1)) {
        endpos = rest.indexOf('"', rest.indexOf('"', startpos) + 1);
      } else if (singlefnuttpos > -1 && (singlefnuttpos < doublefnuttpos || doublefnuttpos == -1) && (singlefnuttpos < spacepos || spacepos == -1)) {
        endpos = rest.indexOf("'", rest.indexOf("'", startpos) + 1);
      }
      if (!endpos || endpos == -1 || endpos < startpos) {
        endpos = rest.length;
      }
      done += rest.substring(0, startpos);
      done += attributeValueMode(rest.substring(startpos, endpos + 1));
      rest = rest.substr(endpos + 1);
    }
    return "<span style=color:" + attributecolor + ">" + done + rest + "</span>";
  }

  function attributeValueMode(txt) {
    return "<span style=color:" + attributevaluecolor + ">" + txt + "</span>";
  }

  function commentMode(txt) {
    return "<span style=color:" + commentcolor + ">" + txt + "</span>";
  }

  function cssMode(txt) {
    var rest = txt,
      done = "",
      s, e, comment, i, midz, c, cc;
    comment = new extract(rest, /\/\*/, "*/", commentMode, "W3CSSCOMMENTPOS");
    rest = comment.rest;
    while (rest.search("{") > -1) {
      s = rest.search("{");
      midz = rest.substr(s + 1);
      cc = 1;
      c = 0;
      for (i = 0; i < midz.length; i++) {
        if (midz.substr(i, 1) == "{") {
          cc++;
          c++
        }
        if (midz.substr(i, 1) == "}") {
          cc--;
        }
        if (cc == 0) {
          break;
        }
      }
      if (cc != 0) {
        c = 0;
      }
      e = s;
      for (i = 0; i <= c; i++) {
        e = rest.indexOf("}", e + 1);
      }
      if (e == -1) {
        e = rest.length;
      }
      done += rest.substring(0, s + 1);
      done += cssPropertyMode(rest.substring(s + 1, e));
      rest = rest.substr(e);
    }
    rest = done + rest;
    rest = rest.replace(/{/g, "<span style=color:" + cssdelimitercolor + ">{</span>");
    rest = rest.replace(/}/g, "<span style=color:" + cssdelimitercolor + ">}</span>");
    for (i = 0; i < comment.arr.length; i++) {
      rest = rest.replace("W3CSSCOMMENTPOS", comment.arr[i]);
    }
    return "<span style=color:" + cssselectorcolor + ">" + rest + "</span>";
  }

  function cssPropertyMode(txt) {
    var rest = txt,
      done = "",
      s, e, n, loop;
    if (rest.indexOf("{") > -1) {
      return cssMode(rest);
    }
    while (rest.search(":") > -1) {
      s = rest.search(":");
      loop = true;
      n = s;
      while (loop == true) {
        loop = false;
        e = rest.indexOf(";", n);
        if (rest.substring(e - 5, e + 1) == "&nbsp;") {
          loop = true;
          n = e + 1;
        }
      }
      if (e == -1) {
        e = rest.length;
      }
      done += rest.substring(0, s);
      done += cssPropertyValueMode(rest.substring(s, e + 1));
      rest = rest.substr(e + 1);
    }
    return "<span style=color:" + csspropertycolor + ">" + done + rest + "</span>";
  }

  function cssPropertyValueMode(txt) {
    var rest = txt,
      done = "",
      s;
    rest = "<span style=color:" + cssdelimitercolor + ">:</span>" + rest.substring(1);
    while (rest.search(/!important/i) > -1) {
      s = rest.search(/!important/i);
      done += rest.substring(0, s);
      done += cssImportantMode(rest.substring(s, s + 10));
      rest = rest.substr(s + 10);
    }
    result = done + rest;
    if (result.substr(result.length - 1, 1) == ";" && result.substr(result.length - 6, 6) != "&nbsp;" && result.substr(result.length - 4, 4) != "&lt;" && result.substr(result.length - 4, 4) != "&gt;" && result.substr(result.length - 5, 5) != "&amp;") {
      result = result.substring(0, result.length - 1) + "<span style=color:" + cssdelimitercolor + ">;</span>";
    }
    return "<span style=color:" + csspropertyvaluecolor + ">" + result + "</span>";
  }

  function cssImportantMode(txt) {
    return "<span style=color:" + cssimportantcolor + ";font-weight:bold;>" + txt + "</span>";
  }

  function jsMode(txt) {
    var rest = txt,
      done = "",
      esc = [],
      i, cc, tt = "",
      sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
    for (i = 0; i < rest.length; i++) {
      cc = rest.substr(i, 1);
      if (cc == "\\") {
        esc.push(rest.substr(i, 2));
        cc = "W3JSESCAPE";
        i++;
      }
      tt += cc;
    }
    rest = tt;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", jsStringMode);
      dfnuttpos = getPos(rest, '"', '"', jsStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);
      numpos = getNumPos(rest, jsNumberMode);
      keywordpos = getKeywordPos("js", rest, jsKeywordMode);
      dotpos = getDotPos(rest, jsPropertyMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {
        break;
      }
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
      if (mypos[0] == -1) {
        break;
      }
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    for (i = 0; i < esc.length; i++) {
      rest = rest.replace("W3JSESCAPE", esc[i]);
    }
    return "<span style=color:" + jscolor + ">" + rest + "</span>";
  }

  function jsStringMode(txt) {
    return "<span style=color:" + jsstringcolor + ">" + txt + "</span>";
  }

  function jsKeywordMode(txt) {
    return "<span style=color:" + jskeywordcolor + ">" + txt + "</span>";
  }

  function jsNumberMode(txt) {
    return "<span style=color:" + jsnumbercolor + ">" + txt + "</span>";
  }

  function jsPropertyMode(txt) {
    return "<span style=color:" + jspropertycolor + ">" + txt + "</span>";
  }

  function getDotPos(txt, func) {
    var x, i, j, s, e, arr = [".", "<", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/", "-", "*", "|", "%"];
    s = txt.indexOf(".");
    if (s > -1) {
      x = txt.substr(s + 1);
      for (j = 0; j < x.length; j++) {
        cc = x[j];
        for (i = 0; i < arr.length; i++) {
          if (cc.indexOf(arr[i]) > -1) {
            e = j;
            return [s + 1, e + s + 1, func];
          }
        }
      }
    }
    return [-1, -1, func];
  }

  function getMinPos() {
    var i, arr = [];
    for (i = 0; i < arguments.length; i++) {
      if (arguments[i][0] > -1) {
        if (arr.length == 0 || arguments[i][0] < arr[0]) {
          arr = arguments[i];
        }
      }
    }
    if (arr.length == 0) {
      arr = arguments[i];
    }
    return arr;
  }

  function getKeywordPos(typ, txt, func) {
    var words, i, pos, rpos = -1,
      rpos2 = -1,
      patt;
    if (typ == "js") {
      words = ["abstract", "arguments", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete",
        "do", "double", "else", "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements", "import",
        "in", "instanceof", "int", "interface", "let", "long", "NaN", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static",
        "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield"
      ];
    }
    for (i = 0; i < words.length; i++) {
      pos = txt.indexOf(words[i]);
      if (pos > -1) {
        patt = /\W/g;
        if (txt.substr(pos + words[i].length, 1).match(patt) && txt.substr(pos - 1, 1).match(patt)) {
          if (pos > -1 && (rpos == -1 || pos < rpos)) {
            rpos = pos;
            rpos2 = rpos + words[i].length;
          }
        }
      }
    }
    return [rpos, rpos2, func];
  }

  function getPos(txt, start, end, func) {
    var s, e;
    s = txt.search(start);
    e = txt.indexOf(end, s + (end.length));
    if (e == -1) {
      e = txt.length;
    }
    return [s, e + (end.length), func];
  }

  function getNumPos(txt, func) {
    var arr = ["<br>", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/", "-", "*", "|", "%", "="],
      i, j, c, startpos = 0,
      endpos, word;
    for (i = 0; i < txt.length; i++) {
      for (j = 0; j < arr.length; j++) {
        c = txt.substr(i, arr[j].length);
        if (c == arr[j]) {
          if (c == "-" && (txt.substr(i - 1, 1) == "e" || txt.substr(i - 1, 1) == "E")) {
            continue;
          }
          endpos = i;
          if (startpos < endpos) {
            word = txt.substring(startpos, endpos);
            if (!isNaN(word)) {
              return [startpos, endpos, func];
            }
          }
          i += arr[j].length;
          startpos = i;
          i -= 1;
          break;
        }
      }
    }
    return [-1, -1, func];
  }
}
