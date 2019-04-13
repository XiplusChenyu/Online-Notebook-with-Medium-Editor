

$(document).on('click', '.medium-editor-insert-plugin .medium-insert-buttons', function () {

    let father_elements = $('ul.medium-insert-buttons-addons');
    if(father_elements.hasClass("Iamgoodnow")){
        return;
    }


    let $table_button = $("<li><button type='button' class=\"medium-editor-action medium-editor-action-table " +
        "medium-editor-button-last medium-editor-button-active\"" +
        " title=\"create table\" " +
        "aria-label=\"create table\">" +
        "<i class=\"fa fa-table\" style='color: black'></i></button></li>");

    $table_button.click(
        function () {
            let little_table = "<table border=\"1\">\n" +
                "<tr>\n" +
                "<td>I am a cell</td>\n" +
                "<td>I am a cell</td>\n" +
                "</tr>\n" +
                "<tr>\n" +
                "<td>I am a cell</td>\n" +
                "<td>I am a cell</td>\n" +
                "</tr>\n" +
                "</table>";
            editor.pasteHTML(little_table);
            editor.removeElements('.medium-insert-buttons', 'ul.medium-insert-buttons-addons');
            $(".medium-insert-buttons-addons").attr('style', 'display: none');

        }
    );

    let $discussion_button = $("<li><button type='button' class=\"medium-editor-action medium-editor-action-table " +
        "medium-editor-button-last medium-editor-button-active\"" +
        " title=\"create table\" " +
        "aria-label=\"create table\">" +
        "<i class=\"fa fa-group\" style='color: black'></i></button></li>");

    $discussion_button.click(
        function () {
            let textarea = "<div id ='contactCard' class=\"card\" style=\"width: calc(80%); max-width:18rem; float: left; margin-left: 20px; border: #447e9b 10px solid\">\n" +
                "    <div class=\"card-body\">\n" +
                "        <h5 class=\"card-title\">Here You Can Discuss</h5>\n" +
                "        <h6 class=\"card-subtitle mb-2 text-muted\">Tap Your Topic Here</h6>\n" +
                "        <p class=\"card-text\">Hi, I'm Chenyu!</p>\n" +
                "    </div>\n" +
                "</div>";
            editor.pasteHTML(textarea);
            editor.removeElements('.medium-insert-buttons', 'ul.medium-insert-buttons-addons');
            $(".medium-insert-buttons-addons").attr('style', 'display: none');

        }
    );

    let $music_button = $("<li><button type='button' class=\"medium-editor-action medium-editor-action-table " +
        "medium-editor-button-last medium-editor-button-active\"" +
        " title=\"create music\" " +
        "aria-label=\"create music\">" +
        "<i class=\"fa fa-music\" style='color: black'></i></button></li>");



    $music_button.click(
        function () {
            let file_path = prompt("please type in a online audio path", "https://github.com/jsalbert/Music-Genre-Classification-with-Deep-Learning/blob/master/music/example.mp3");
            let music_block = `<a href="${file_path}">Listen Music<a/>`;
            editor.pasteHTML(music_block);
            editor.removeElements('.medium-insert-buttons');

             $(".medium-insert-buttons-addons").attr('style', 'display: none');
        }
    );



    let $question_button = $("<li><button type='button' class=\"medium-editor-action medium-editor-action-table " +
        "medium-editor-button-last medium-editor-button-active\"" +
        " title=\"create question\" " +
        "aria-label=\"create question\">" +
        "<i class=\"fa fa-question\" style='color: black'></i></button></li>");

     $question_button.click(
        function () {
            alert("This is a very simple website !\nAuthor: Chenyu Xi");


            editor.removeElements('.medium-insert-buttons');
             $(".medium-insert-buttons-addons").attr('style', 'display: none');
        }
    );

     let $map_button = $("<li><button type='button' class=\"medium-editor-action medium-editor-action-table " +
        "medium-editor-button-last medium-editor-button-active\"" +
        " title=\"create map\" " +
        "aria-label=\"create map\">" +
        "<i class=\"fa fa-map-marker\" style='color: black'></i></button></li>");

     $map_button.click(
        function () {
            let holder = "<div id=\"mapdiv\"></div>";

            let $el =$(" <div id=\"container\" style=\"width: 500px; height:300px\"></div>\n" +
                "  <script>\n" +
                "    $(function(){\n" +
                "      $('#container').vectorMap({\n" +
                "        map: 'world_mill_en',\n" +
                "        backgroundColor:'grey',\n" +
                "        regionStyle: {\n" +
                "          initial: {\n" +
                "            fill: 'blue'\n" +
                "          }\n" +
                "        },\n" +
                "        zoomOnScroll: false,\n" +
                "        zoomMax: 1,\n" +
                "        zoomMin: 1\n" +
                "      });\n" +
                "    });\n" +
                "  </script>");

            editor.pasteHTML(holder);
            $("#mapdiv").append($el);
            editor.removeElements('.medium-insert-buttons');
             $(".medium-insert-buttons-addons").attr('style', 'display: none');
        }
    );

     let $up_button = $("<li><button type='button' class=\"medium-editor-action medium-editor-action-table " +
        "medium-editor-button-last medium-editor-button-active\"" +
        " title=\"upload\" " +
        "aria-label=\"upload\">" +
        "<i class=\"fa fa-angle-up\" style='color: black'></i></button></li>");

     $up_button.click(
        function () {
            alert("Haha. it's fake!");
            editor.removeElements('.medium-insert-buttons');
             $(".medium-insert-buttons-addons").attr('style', 'display: none');
        }
    );

      let $math_button = $("<li><button type='button' class=\"medium-editor-action medium-editor-action-table " +
        "medium-editor-button-last medium-editor-button-active\"" +
        " title=\"add_math\" " +
        "aria-label=\"add_math\">" +
        "<i class=\"fa fa-calculator\" style='color: black'></i></button></li>");

     $math_button.click(
        function () {
            let math_text = prompt("please type in a math in Letax",
                "Here is math: \\(x+1\\) and a display $$x+1\\over x-1$$");

            let holder = "<div id=\"mathdiv\"></div>";
            let math_div = MathJax.HTML.Element(
                      "div", {id: "math_div", style:{border:"1px solid", padding:"5px"}},
                      [math_text]
                    );
            editor.pasteHTML(holder);
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            editor.removeElements("#math_div");
            $("#mathdiv").append(math_div);
            editor.pasteHTML('<br>');
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

            editor.removeElements('.medium-insert-buttons');
             $(".medium-insert-buttons-addons").attr('style', 'display: none');
        }
    );


    father_elements.addClass('Iamgoodnow'); // prevent re-add
    father_elements.append($discussion_button);
    father_elements.append($table_button);
    father_elements.append($math_button);
    father_elements.append($question_button);
    father_elements.append($music_button);
    father_elements.append($map_button);

    father_elements.append($up_button);
});

MathJax.Hub.Config({
  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
});