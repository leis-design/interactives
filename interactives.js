var modal;
var idname;
var span;
var activeblue_ele;
document.addEventListener('DOMContentLoaded', (event) => {

    //Get the active blue box
    activeblue_ele = document.getElementsByClassName("list-group-item active")[0];
});


function showImageModal(elementid) {
    var strId = elementid.split("_")[0];
    modal = document.getElementById(strId + "myModal");


    //Get the active blue box
    activeblue_ele = document.getElementsByClassName("list-group-item active")[0];
    idname = elementid;
    profileModal();

}


// When the user clicks on <span> (x), close the modal
function spanclick() {
    toggleBlue();
    modal.style.display = "none";
    document.getElementById('modal-img').style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById('modal-img').style.display = "none";
        toggleBlue();
    }
}

function toggleBlue() {
    activeblue_ele.classList.toggle("active");
}

function profileModal() {


    toggleBlue();

    document.getElementById("modal-img").children[0].src = document.getElementById(idname).src;
    document.getElementById("modal-img").style.display = "block";
    modal.style.display = "block";
}

function closeAcc(celement) {
    celement.parentElement.parentElement.classList.toggle("show");
}

const resizeObserver = new ResizeObserver(entry => {

    if (entry[0].target.offsetWidth < 390) {

        mobileViewCC();

    } else {
        normalViewCC();
    }

});