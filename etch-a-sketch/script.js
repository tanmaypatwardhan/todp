//For button selection and toggling
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach((button2) => {
            if(button2.classList.contains("clicked")) button2.classList.remove("clicked");
        });

        button.classList.add("clicked");
        
    });
});

const slider = document.querySelector(".slider");
const dimensions = document.querySelector(".dimensions");
create_grid(slider.value);


const backgroundpicker = document.querySelector(".backgroundpicker");
const colorpicker = document.querySelector(".colorpicker");



function remove_grid(value) {
    let id = 1;
    for(let i = 0; i < value; i++) {
        for(let j = 0; j < value; j++) {
            const element = document.getElementById(id);
            element.remove();
            id++;
        }
    }
}


function create_grid(value1) {
    const grid_container = document.querySelector(".grid-container");
    let id = 1;
    for(let i = 0; i < value1 ; i++) {
        for(let j = 0; j < value1; j++) {
            const div = document.createElement("div");
            div.setAttribute('id' , id);
            id++;
            const backgroundpicker = document.querySelector(".backgroundpicker");
            div.style["background"] = backgroundpicker.value;
            
            
            div.style["width"] = `${720/value1}px`;
            div.style["height"] = `${720/value1}px`;
            grid_container.appendChild(div);
        }
        
    }
}

slider.onmousedown = () => {
    remove_grid(slider.value);
}


slider.onmouseup = () => {
    create_grid(slider.value);
}


slider.oninput = function(e) {
    dimensions.textContent = `${slider.value} X ${slider.value}`;  
}

const clear_button = document.querySelector(".clear") 
clear_button.addEventListener("click" , () => {
    let id = 1;
    for(let i = 0; i < slider.value ; i++) {
        for(let j = 0; j < slider.value; j++) {
            const element = document.getElementById(id);
            element.style["background"] = backgroundpicker.value;
            id++;
        }
    }
});


const grid_container = document.querySelector(".grid-container");
grid_container.addEventListener("mouseover", (e) => {
    const element = document.getElementById(e.target.id);
    element.style["background"] = colorpicker.value;
    
});





