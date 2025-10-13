import { createTable, createModal } from './index.js';

$(document).ready(() => {   
    $(document).on('click', '[id^="mario"]', function() {
        if (!$('#page').hasClass('bg-games')) return;

        const gameId = $(this).attr('id');
            createTable(gameId);
            createModal(gameId);
    });

    $(document).on('keyup', '#filterGame', function() {
        let value = $(this).val().toLowerCase();

        $('#tableBody tr').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
