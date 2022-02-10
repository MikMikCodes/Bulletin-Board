//get access 
var container2 = document.getElementsByClassName('container-2')[0];
var container3 = document.getElementsByClassName('container-3')[0];
var checkIcon = document.getElementById('check-icon');
var xIcon = document.getElementById('x-icon');
var i = 0;

//adding event listeners
//when the xIcon is clicked, the typenote function will run
xIcon.addEventListener("click", function () {
    typeNote();
})

//when the checkIcon is clicked, the createNote function will run
checkIcon.addEventListener("click", function () {
    createNote();
})

function typeNote() {
    if (container3.style.display == "none") {
        container3.style.display = "block";
    } else {
        container3.style.display = "none";
    }
}

function createNote() {
    //get access to the note's value (within the textarea input form)
    var noteText = document.getElementById("note-text").value;
    //used to display the note on the screen
    var node0 = document.createElement("div");
    //will contain the note
    var node1 = document.createElement("h1");
//attaching the note text to the node1 element
    node1.innerHTML = noteText;
//styling the stored note 
    node1.setAttribute("style", "width:250px; height: 250px; font-size: 26px; padding: 25px; margin-top: 10px; overflow: hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75);");

    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

//attaching node1 to node0  
    node0.appendChild(node1);

    //adding the notes to container 2 to collect all created notes
    //"beforeend" == inserting it before the end of the element
    container2.insertAdjacentElement("beforeend", node0);

    //makes note bigger during hover effect
    node0.addEventListener("mouseenter", function () {
        node0.style.transform = "scale(1.1)";
    })

    //revert note's size to original
    node0.addEventListener("mouseleave", function () {
        node0.style.transform = "scale(1)";
    }) 
    
    //option to delete note on double click
    node0.addEventListener("dblclick", function () {
        node0.remove();
    })

    document.getElementById("note-text").value = '';
}


//returns a random number from the index array (random_margin)
function margin() {
    var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

    return random_margin[Math.floor(Math.random() * random_margin.length)];
}


//returns a random degree to rotate the sticky note
function rotate() {
    var random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-3deg)","rotate(-1deg)","rotate(-10deg)","rotate(10deg)"];
    
    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
    var random_color = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"]; 

    //restarts the color list once user creates a note with the last color (orange)
    if (i > random_color.length - 1) { //"-1" because index starts at zero
        i = 0;
    }
    return random_color[i++]; //no random, just in order 
}