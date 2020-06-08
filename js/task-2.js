const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsListRef = document.querySelector('#ingredients');

ingredientsListRef.append(
  ...ingredients.map(ingredient => {
    const liRef = document.createElement('li');
    liRef.textContent = ingredient;

    return liRef;
  }),
);
