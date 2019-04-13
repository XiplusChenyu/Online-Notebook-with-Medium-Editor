

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
        " title=\"create table\" " +
        "aria-label=\"create table\">" +
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
        " title=\"create table\" " +
        "aria-label=\"create table\">" +
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
        " title=\"create table\" " +
        "aria-label=\"create table\">" +
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
                "            fill: 'yellow'\n" +
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

    father_elements.addClass('Iamgoodnow');
    father_elements.append($discussion_button);
    father_elements.append($table_button);
    father_elements.append($question_button);
    father_elements.append($music_button);
    father_elements.append($map_button);
});
