window.onload = function(){
    let current_color = "red";
    let colorPalette = document.querySelector('#colorPalette');

    let colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    for(let color of colorChoices) {
        let box = document.createElement('div');
        box.className = "selector";
        box.style.height = '14px';
        box.style.width = '14px';
        box.style.border = '1px solid black';
        box.style.backgroundColor = color
        box.style.margin = 'auto';
        box.style.display = 'inline-block';
       
        colorPalette.appendChild(box);
        box.addEventListener('click',function(e){
            current_color = color;
        }
        )
    }

    let container = document.querySelector('#canvas');
    for(let i = 0; i < 400; i++) {
        let box = document.createElement('span');
        box.style.height = '8px';
        box.style.width = '8px';
        box.style.border = '1px solid black';
        box.addEventListener('click',function(e){
            box.style.backgroundColor = current_color;
        }
        )
        container.appendChild(box);
      }
document.body.appendChild(container)

    // Your Code Here
  }

