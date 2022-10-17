function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  create: document.querySelector('button[data-create]'),
  destroy: document.querySelector('button[data-destroy]'),
  input: document.querySelector('input'),
  boxes: document.querySelector('#boxes')
}

console.log(refs.input.value);

const onSave = () => {
  const fin = refs.input.value;
  console.log(fin);
}


const CreateBoxes = (amount) => {

  amount = refs.input.value;
  for (let i = 0; i < amount; i += 1) {
    
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = 30 + i * 10 + "px";
    div.style.height = 30 + i * 10 + "px";
    boxes.append(div);
    console.log(div);
    console.log(i);
  }
}


const onDelete = () => {
  boxes.innerHTML = '';
}


// const onAddition = (div) => {
//   div.style.backgroundColor = getRandomHexColor;
//   div.style.width = 30 + "px";
//   div.style.height = 30 + "px";
//  }

refs.input.addEventListener("input", onSave);
refs.create.addEventListener("click", CreateBoxes);
refs.destroy.addEventListener("click", onDelete);
// refs.create.addEventListener("click", onAddition);

