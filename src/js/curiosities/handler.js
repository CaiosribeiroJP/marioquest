$(document).ready(() => {
    $(document).on('click', 'span.backgroundOp', function() {
        const id = this.id;
        $(`.${id}`).slideToggle('slow');
        $(this).toggleClass('options-open');
        $(this).toggleClass(`background-${id}`)
    });

    let audio = null;

    $(document).on('click', '.btn-sound', function() {
        const audioSrc = $(this).data('sound');
        
        if(audio){
            audio.pause(); 
            audio.currentTime = 0;
        };
        
        audio = new Audio(audioSrc);
        audio.play();
    });
});;

