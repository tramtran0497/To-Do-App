$(function () {
    // create $toDos from class to-dos ul
    const $toDos = $('#toDo')
    const $doing = $('#doing')
    const $done = $('#done')
    //create array
    const arr = [{'id': 'toDo'},{'id': 'doing'},{'id': 'done'}]
    //button submit
    const $btn = $('#submit-to-do')
     //input text
    const $inputToDo = $('#to-dos')
    //submit to create li
    $btn.on('click', function () {
        // create li
        const li = $('<li/>')
            .addClass('d-flex flex-row mb-1')
            .css('list-style', 'none')
            .appendTo($toDos)
        // create div in li
        const div = $('<div/>')
            .addClass('list-group-item-warning flex-fill')
            .text($inputToDo.val())
            .appendTo(li)
        //create to do btn
        const btn1 = $('<button/>')
            .addClass('btn-sm btn-primary fw-bold me-1')
            .text('yes')
            .appendTo(li)
        //create delete button
        const btn2 = $('<button/>')
            .addClass('btn-sm btn-danger fw-bold')
            .text('no')
            .appendTo(li)
        //clear after filling
        $inputToDo.val("")
        const $choose = btn1.parent()
        btn1.on('click', function () {
            // define position of x which ul
            for (let i = 0; i < arr.length-1; i++) {
                if ($choose.parent().attr('id') === arr[i].id) {
                        const idJquery = '#' + arr[i + 1].id
                        $choose.appendTo($(idJquery))
                        break
                }
            }
        })
        btn2.on('click', function () {
            //find which li
            const $delete = btn2.parent(li)
                .remove()
        })
    })
})