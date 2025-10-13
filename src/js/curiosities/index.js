import { options, selections } from "./repositories/repoAll.js";
import { modals } from "./repositories/modals/modals.js";

export function createOptions() {
    const navs =  `     
                <section class="container">
                ${selections.map(sel => `
                    <span class="backgroundOp mt-5" id="${sel.id}">
                        <strong class="options">${sel.name}</strong>
                    </span>
                
                    <nav class="navbar navbar-expand-sm m-5 container">
                        <div class="${sel.id}">          
                            <ul id="background-${sel.id}" class="row">
                            ${options[sel.id].map(op => `
                                <li class="nav-item col-4 col-sm-2">
                                    <img data-bs-toggle="modal" data-bs-target="#${op.idModal}" class="${sel.id} img-curiosity" id="${op.id}"  src="src/assets/images/curiosities/${sel.id}/${op.img}" width="70px" height="70px"></img>           
                                </li>
                            `).join('')}
                            </ul>
                        </div>
                    </nav>  
                    `).join('')}
                </section>`

    $('#options-container').html(navs);
};

export function createModals() {
    const modalSel = modals.map(mod => `
                    <div class="modal fade" id="${mod.id}" aria-hidden="true" tabindex="-1">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">        
                                <div class="modal-content" id="${mod.idModal}">
                                    <div class="modal-header curiosities">
                                        <h1 class="modal-title">${mod.title}</h1>
                                        <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <span>${mod.content}</span>
                                    </div>
                                    <div class="modal-footer" id="${mod.idModalFooter}">
                                        ${mod.sound.map((sound, index) => `
                                        <button style="font-size: 10px" class="btn-sound fa-solid fa-music" data-sound="src/assets/audios/${mod.soundPath}/${sound}"><i> ${index + 1}</i></button>
                                        `).join('')}
                                    </div>
                                </div> 
                            </div>
                        </div>
                `).join('');

        $('#modals-container').html(modalSel);        
};