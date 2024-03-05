// pageload.js

import Food from "./vertical-view-vegan-tofu-pancakes-with-fruits-white-plate.jpg";

function loadHome()
{
    let pagecontent = document.querySelector("#content");

    let heading = document.createElement("h1");
    heading.textContent = "Fancy Restaurant";

    let image = document.createElement("img");
    image.src = Food;
    image.alt = "Pancakes";
    image.style.width = "300px";

    let text = document.createElement("p");
    text.textContent = "Welcome to FluffyStacks Pancake House, where every bite brings joy! Dive into a world of delicious fluffy pancakes crafted with love and care. Whether you crave classic buttermilk pancakes, indulgent chocolate chip delights, or savory stacks piled high with your favorite toppings, we have something to satisfy every pancake lover's craving. Join us for breakfast, brunch, or any time you need a scrumptious treat. Experience the magic of pancakes at FluffyStacks today!";

    pagecontent.appendChild(heading);
    pagecontent.appendChild(image);
    pagecontent.appendChild(text);
}

export default loadHome;