const listCategories = document.querySelector('#categories');
const itemsRef = listCategories.children;
console.log(`В списке ${itemsRef.length} категории`);
const itemsList = [...itemsRef];

itemsList.forEach(item => {
  const headerRef = item.firstElementChild;
  console.log(`Категория: ${headerRef.textContent}`);
  const itemsCategoriesRef = item.querySelectorAll('li').length;
  console.log(`Количество элементов: ${itemsCategoriesRef}`);
});
