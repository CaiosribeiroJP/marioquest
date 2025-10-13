$(document).ready(() => {
    let lastBugId = null;

    $(document).on('click','[id^="bugs"]', (e) => {
        const bugsId = $(e.currentTarget).attr('id');
        if(bugsId !== lastBugId) {
            $('#pageBugs').load(`glitchesEBugs/bugs/${bugsId}.html`);
            lastBugId = bugsId;
            $(`#${bugsId}`).toggleClass('.listActived')
            console.log(bugsId)
        };
    });
});
