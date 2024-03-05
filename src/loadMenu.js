//sample menu and code made by chatgpt :)
const menuItems = [
    { name: "Fluffy Buttermilk Pancakes", description: "Traditional, light, and fluffy pancakes served with butter and maple syrup." },
    { name: "Blueberry Bliss Pancakes", description: "Our signature buttermilk pancakes bursting with juicy blueberries, served with whipped cream." },
    { name: "Chocolate Chip Delight", description: "Irresistibly fluffy pancakes studded with chocolate chips, topped with powdered sugar and chocolate drizzle." },
    { name: "Banana Nut Pancakes", description: "Fresh banana slices and crunchy walnuts mixed into our fluffy batter, served with a dollop of whipped cream." },
    { name: "Cinnamon Roll Pancakes", description: "Indulge in the flavors of a classic cinnamon roll infused into our pancakes, topped with cream cheese glaze." },
    { name: "Strawberry Shortcake Pancakes", description: "Layers of sweet strawberries and whipped cream between stacks of fluffy pancakes, drizzled with strawberry syrup." },
    { name: "S'mores Pancakes", description: "Decadent chocolate pancakes layered with toasted marshmallows and graham cracker crumbles, finished with chocolate sauce." },
    { name: "Apple Pie Pancakes", description: "Warm apple pie filling nestled between layers of fluffy pancakes, topped with cinnamon sugar and whipped cream." },
    { name: "Bacon & Cheddar Pancakes", description: "Crispy bacon and sharp cheddar cheese folded into savory pancakes, served with a side of maple syrup." },
    { name: "Spinach & Feta Pancakes", description: "Fresh spinach and tangy feta cheese mixed into savory pancakes, served with hollandaise sauce." },
    { name: "Ham & Swiss Pancakes", description: "Savory pancakes filled with diced ham and melted Swiss cheese, served with a side of Dijon mustard." },
    { name: "Mickey Mouse Pancakes", description: "A fun twist on our classic pancakes shaped like everyone's favorite mouse, served with whipped cream and fruit." },
    { name: "Chocolate Chip Pancakes", description: "Mini pancakes loaded with chocolate chips, perfect for little hands, served with a side of maple syrup." },
    { name: "PB&J Pancakes", description: "Mini pancakes layered with creamy peanut butter and sweet strawberry jelly, served with a sprinkle of powdered sugar." },
  ];
  
  // Function to create menu elements
  function createMenuElements() {
    let pagecontent = document.querySelector("#content");
  
    // Create heading
    const heading = document.createElement("h2");
    heading.textContent = "FluffyStacks Pancake House Menu";
    pagecontent.appendChild(heading);
  
    // Create menu list
    const menuList = document.createElement("ul");
    menuList.classList.add("menu-list");
    menuItems.forEach(item => {
      const menuItem = document.createElement("li");
      const itemName = document.createElement("h3");
      itemName.textContent = item.name;
      const itemDescription = document.createElement("p");
      itemDescription.textContent = item.description;
      menuItem.appendChild(itemName);
      menuItem.appendChild(itemDescription);
      menuList.appendChild(menuItem);
    });
  
    // Append menu list to menu container
    pagecontent.appendChild(menuList);
  }

  export default createMenuElements;