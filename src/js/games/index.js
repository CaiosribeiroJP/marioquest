import { repository } from './repositories/repoAll.js';
import { modalsGame } from './repositories/modals/gameModals.js';
import { modalsConsole } from './repositories/modals/consoleModals.js';

export function createTable(type) {
    const {game, title, img} = repository[type],
    tables = `
            <div>
                <img id="tableImg" class="m-5" src="src/assets/images/games/${img}.webp">
            </div>
            
            <input type="text" id="filterGame" placeholder="Procurar..">

            <table class="table table-bordered align-middle"> 
                <thead>
                    <tr>
                        <th class="tableTitle" colspan="4"><i><strong>${title}</strong></i></th>
                    </tr>
                    <tr>
                            <th>Título</th>
                            <th>Lançamento</th>
                            <th>Desenvolvedor(a)</th>
                            <th>Plataforma</th>
                    </tr>
                </thead>

                <tbody id='tableBody'>
                
                ${game.map(game => `             
                    <tr>
                        <td class="gameColor">
                            <span data-bs-toggle="modal" data-bs-target="#${game.id}">${game.name}<img class="leftImg" src="src/assets/images/games/${game.gameImg}.webp"></span>
                        </td>
                        <td>${game.year}</td>
                        <td>${game.developer}</td>
                        <td class="consoleColor">
                            <span data-bs-toggle="modal" data-bs-target="#${game.idConsole}">${game.console}<img class="rightImg" src="src/assets/images/games/${game.consoleImg}.webp"></span>
                        </td>
                    </tr>  
                `).join('')}
                    
                </tbody>
            </table>
        `;
        
    $('#tables').html(tables);
    $('#navButton').html(title)
};

export function createModal(type) {

    const dataGame = modalsGame[type]
    const dataConsole = modalsConsole;

    const modalGames = dataGame.map(modal => `
        
        <div class="modal fade" id="${modal.id}" data-bs-keyboard="false" tabindex="-1">
            <div class="modal-dialog modal-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <img src="src/assets/images/games/${modal.img}.webp" width="60%" height="150px"> 
                        <button style="position: relative; bottom: 70px;" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>                     
                    </div>                            
                    <div class="modal-body" style="background-color: whitesmoke;">
                        <span>${modal.content}</span>
                    </div>
                    ${modal.video ? `
                    <div class="modal-footer">
                        <iframe src=${modal.video} title="${modal.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
                    </div>
                    `: ''}
                </div>
            </div>
        </div>
    `).join('')

    const modalConsoles = dataConsole.map(modal => `
        <div class="modal fade" id="${modal.id}" data-bs-keyboard="false" tabindex="-1">
            <div class="modal-dialog modal-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <img src="src/assets/images/games/${modal.img}.webp" width="60%" height="150px"> 
                        <button style="position: relative; bottom: 70px;" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>                     
                    </div>                            
                    <div class="modal-body" style="background-color: whitesmoke;">
                        <span>${modal.content}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('')
    

    $('#modalGames').html(modalGames)
    $('#modalConsoles').html(modalConsoles)
}