

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
            let value = prompt("type in format (col, row)", "2, 2");
            let col = 2, row = 2;
            let little_table = "<table style='margin: auto' border=\"1\">\n" +
                "<tr>\n" +
                "<td>I am a cell</td>\n" +
                "<td>I am a cell</td>\n" +
                "</tr>\n" +
                "<tr>\n" +
                "<td>I am a cell</td>\n" +
                "<td>I am a cell</td>\n" +
                "</tr>\n" +
                "</table>";

            try{
                let array = value.split(',');
                col = parseInt(array[0]);
                row = parseInt(array[1]);
                let each_col = "<td>I am a cell</td>\n";
                little_table = "<table style='margin: auto' border=\"1\">\n";
                for (let i=0; i<row; i++){
                    little_table += "<tr>\n";
                    for (let j=0; j<col; j++){
                        little_table += each_col;
                    }
                    little_table += "<tr>\n";
                }
                little_table += "</table>";
            }catch (e) {

            }

            editor.pasteHTML(little_table);
            editor.removeElements('.medium-insert-buttons', 'ul.medium-insert-buttons-addons');
            $(".medium-insert-buttons-addons").attr('style', 'display: none');

        }
    );

    let $discussion_button = $("<li><button type='button' class=\"medium-editor-action medium-editor-action-table " +
        "medium-editor-button-last medium-editor-button-active\"" +
        " title=\"create discussion area\" " +
        "aria-label=\"create discussion area\">" +
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
            let music_block = `<a href="${file_path}"><i id="music_icon" style='color:black'>&nbsp;Music Link</i><a/>`;
            editor.pasteHTML(music_block);
            $('#music_icon').addClass("fa fa-music");
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
            $('#del').removeClass('notshow');
            $('#mapdiv').remove();
            $('#del').click(function del_map() {
                        if(!$("#del").hasClass("notshow")){
                            $("#del").addClass("notshow");
                            $("#container").empty();
                        }
                        }
                        );

            let holder = "<div id=\"mapdiv\"></div>";
            let $el =$(" <div id=\"container\" style=\"width: 500px; contenteditable=false; " +
                "margin: auto; height:300px\"></div>" +
                "<br>" +
                "" +
                "  <script>\n" +
                "    $(function(){\n" +
                "      $('#container').vectorMap({\n" +
                "        map: 'world_mill_en',\n" +
                "        backgroundColor:'white',\n" +
                "        regionStyle: {\n" +
                "          initial: {\n" +
                "            fill: 'blue'\n" +
                "          }\n" +
                "        },\n" +
                "        zoomOnScroll: true,\n" +
                "        zoomMax: 1,\n" +
                "        zoomMin: 1\n" +
                "      });\n" +
                "    });\n" +
                "  </script>" +
                "<p id='cursor_indicator'>world map</p>\n");
            let $eod = $("<p class=\"medium-insert-active\"></p>");

            editor.pasteHTML(holder);
            $("#mapdiv").append($el);
            $('#cursor_indicator').append($eod);

            let press = jQuery.Event("keypress");
            press.ctrlKey = false;
            press.which = 40;
            $("#cursor_indicator").trigger(press);


            editor.removeElements('.medium-insert-buttons');
             $(".medium-insert-buttons-addons").attr('style', 'display: none');
        }
    );

     let $up_button = $("<li><button type='button' class=\"medium-editor-action medium-editor-action-table " +
        "medium-editor-button-last medium-editor-button-active\"" +
        " title=\"upload file\" " +
        "aria-label=\"upload file\">" +
        "<i class=\"fa fa fa-arrow-up\" style='color: black'></i></button></li>");

     $up_button.click(
        function () {
            let file_path = prompt("Please type in a online file path:", "https://github.com/jsalbert/Music-Genre-Classification-with-Deep-Learning/blob/master/music/example.mp3");
            let file_block = `<a type="button" id="file_input" href="${file_path}"><i id="file_icon" style='color:black'></i><a/>`;
            editor.pasteHTML(file_block);
            $('#file_icon').addClass("fa fa-file");
            $('#file_icon').addClass("btn btn_info");

            editor.removeElements('.medium-insert-buttons');

             $(".medium-insert-buttons-addons").attr('style', 'display: none');
            editor.removeElements('.medium-insert-buttons');
             $(".medium-insert-buttons-addons").attr('style', 'display: none');
        }
    );

      let $math_button = $("<li><button type='button' class=\"medium-editor-action medium-editor-action-table " +
        "medium-editor-button-last medium-editor-button-active\"" +
        " title=\"add math\" " +
        "aria-label=\"add math\">" +
        "<i class=\"fa fa-calculator\" style='color: black'></i></button></li>");

     $math_button.click(
        function () {
            let math_text = prompt("Please type in a Latex math equation here:",
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


      let $more_button = $("<li><button type='button' class=\"medium-editor-action medium-editor-action-table " +
        "medium-editor-button-last medium-editor-button-active\"" +
        " title=\"more\" " +
        "aria-label=\"more\">" +
        "<i class=\"fa fa-spinner\" style='color: black'></i></button></li>");

     $more_button.click(
        function () {
            alert("For more information, please check my GitHub page!");
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
    father_elements.append($more_button);
});

MathJax.Hub.Config({
  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
});

// use this function to del map
