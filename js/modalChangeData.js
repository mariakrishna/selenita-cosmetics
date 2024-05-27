const modalChangeData = document.getElementById("modal-change-data");
const changeDataBtn = document.querySelector(".change-data"); 
const span = document.querySelector(".close-change-data"); 

function initializeChangeData(changeDataBtn, span) { 
    if (changeDataBtn && modalChangeData) {
        changeDataBtn.addEventListener('click', () => {
            modalChangeData.style.display = "block";
        })
        span.onclick = function() {
        modalChangeData.style.display = 'none';
        }
        window.onclick = function(event) {
        if (event.target == modalChangeData) {
        modalChangeData.style.display = "none";
        }};
    } else {
        console.error("Elemento não encontrado!");
    }
}

initializeChangeData(changeDataBtn, span); 