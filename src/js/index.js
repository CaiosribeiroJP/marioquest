$(document).ready(() =>{
    $('#games').on('click', () =>{	
        $('#page')
            .removeClass('bg-curiosities')
            .removeClass('bg-bugs')
            .addClass('bg-games games-page')		
		    .load('games/index.html', () => {
			$('#header').load('games/header.html');
		});       
	});

    $('#curiosities').on('click', () => {
        $('#page')
            .removeClass('bg-games games-page')
            .removeClass('bg-bugs')
            .addClass('bg-curiosities')
            .load('curiosities/index.html', () => {
                import('./curiosities/index.js')
                    .then(module => {
                        module.createOptions();
                        module.createModals();
                    })
                    .catch(err => console.error('Erro ao carregar opções:', err));
            });
    });

    $('#bugs').on('click', () => {
        $('#page')
            .removeClass('bg-games games-page')
            .removeClass('bg-curiosities')
            .addClass('bg-bugs')
            .load('glitchesEBugs/index.html', () => {
                $('#header').load('glitchesEBugs/header.html');
            });
    });
});