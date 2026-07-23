const board = document.getElementById("board");

for(let row = 0; row < 8 ; row++ ){
  for ( let col = 0 ; col < 8 ; col++){
    const square = document.createElement("div");
    square.classList.add("square");

    if((row + col) % 2 === 0){
      square.classList.add("white");
    }
    else{
      square.classList.add("black");
    }

    square.dataset.row = row;
    square.dataset.col = col;

    square.addEventListener("click",function(){
      document.querySelectorAll(".selected").forEach(box => box.classList.remove("selected"));

      square.classList.add("selected");
      console.log(`Clicked row : ${row}, Column : ${col}`);
    })

    board.appendChild(square);
  }
}

