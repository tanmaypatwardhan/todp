//For button selection and toggling
const buttons = document.querySelectorAll(".button");
const backgroundpicker = document.querySelector(".backgroundpicker");
const colorpicker = document.querySelector(".colorpicker");

let curr_color = "";
function updateColor(color) {
    curr_color = color;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        buttons.forEach((button2) => {
            if(button2.classList.contains("clicked")) button2.classList.remove("clicked");
        });

        let name = e.target.className;
        
        
        if(name === "button rainbow") updateColor("rainbow");
        else if(name === "button shade") updateColor("shade");
        else if(name === "button lighten") updateColor("lighten");
        else if(name === "button erase") updateColor("erase");
        else updateColor("");

        
        
        button.classList.add("clicked");
        
    });
});

const slider = document.querySelector(".slider");
const dimensions = document.querySelector(".dimensions");
create_grid(slider.value);






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

//Changing the grid size
slider.onmousedown = () => {
    remove_grid(slider.value);
}


slider.onmouseup = () => {
    create_grid(slider.value);
}


slider.oninput = function(e) {
    dimensions.textContent = `${slider.value} X ${slider.value}`;  
}

backgroundpicker.addEventListener('input', () => {
    let id = 1;
    for(let i = 0; i < slider.value ; i++) {
        for(let j = 0; j < slider.value; j++) {
            const element = document.getElementById(id);
            element.style["background"] = backgroundpicker.value;
            id++;
        }
    }
});






//Clearing the drawing
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

    buttons.forEach((button) => {
        button.classList.remove("clicked");
    });
    updateColor("");
});

colorpicker.addEventListener('input', () => {
    buttons.forEach((button) => {
        button.classList.remove("clicked");
    });
    updateColor("");
});



//Sketching 
const grid_container = document.querySelector(".grid-container");
grid_container.addEventListener("mouseover", (e) => {
    const element = document.getElementById(e.target.id);
    
    if(element !== null) {
        if(curr_color === "rainbow") {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            element.style["background"] = `rgb(${r}, ${g}, ${b})`;
        } else if(curr_color === "erase"){
            element.style["background"] = backgroundpicker.value;
        } else if(curr_color === "shade"){
            let rgbColor = element.style["background"];
            let rgbArr = rgbColor.substring(4, rgbColor.length-1).replace(/ /g, '').split(',');
            let r2 = parseInt(rgbArr[0]);
            let g2 = parseInt(rgbArr[1]);
            let b2 = parseInt(rgbArr[2]);
            
            r2 = Math.floor(r2 * 0.5);
            g2 = Math.floor(g2 * 0.5);
            b2 = Math.floor(b2 * 0.5);
            
            element.style["background"] = `rgb(${r2}, ${g2}, ${b2})`;
        
        } else if (curr_color === "lighten") {
            let rgbColor = element.style["background"];
            let rgbArr = rgbColor.substring(4, rgbColor.length-1).replace(/ /g, '').split(',');
            let r2 = parseInt(rgbArr[0]);
            let g2 = parseInt(rgbArr[1]);
            let b2 = parseInt(rgbArr[2]);
            
        
            r2 = Math.floor(r2 * 1.5);
            g2 = Math.floor(g2 * 1.5);
            b2 = Math.floor(b2 * 1.5);

            if(r2 === 0) r2 = 6;
            if(b2 === 0) b2 = 6;
            if(g2 === 0) g2 = 6;

            console.log(`rgb(${r2}, ${g2}, ${b2})`);
            
            element.style["background"] = `rgb(${r2}, ${g2}, ${b2})`;

        } else {
            element.style["background"] = colorpicker.value;
        }
    }
    
    
    
    
});





