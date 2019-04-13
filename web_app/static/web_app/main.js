editor = new MediumEditor('.editable',{
    extensions: {
      table: new MediumEditorTable()
    },
    toolbar: {
    buttons: [
        'bold',
        'italic',
        {
            name: 'h1',
            action: 'append-h1',
            aria: 'header type 1',
            tagNames: ['h1'],
            contentDefault: '<b>H1</b>',
            classList: ['custom-class-h1'],
            attrs: {
                'data-custom-attr': 'attr-value-h1'
            }
        },
        {
            name: 'h2',
            action: 'append-h2',
            aria: 'header type 2',
            tagNames: ['h2'],
            contentDefault: '<b>H2</b>',
            classList: ['custom-class-h2'],
            attrs: {
                'data-custom-attr': 'attr-value-h2'
            }
        },
        {
            name: 'h3',
            action: 'append-h3',
            aria: 'header type 3',
            tagNames: ['h3'],
            contentDefault: '<b>H3</b>',
            classList: ['custom-class-h3'],
            attrs: {
                'data-custom-attr': 'attr-value-h3'
            }
        },
        'quote',
        'table',
    ],
    buttonLabels: 'fontawesome',

},

});

$(function () {
    $('.editable').mediumInsert({
        editor: editor
    });
});


$('.entry_submit').click(function(event) {
  $('#entry_form .medium-insert-buttons').remove();
  let form = document.getElementById('entry_form');
  console.log(form);
  form.submit();
});


