// Functions
import { createDiv, createClassDivAndAppend } from "./function";

const menu = (() => {
    function createContent() {
        return [createAppetizer(), createMainCourse(), createDessert()];
    }

    function createAppetizer() {
        const item1 = createItem("HOUSE GARDEN SALAD",
            "Tomato, Red Onion, Cucumber, Shaved Carrots & Croutons over a bed of Mixed Greeens with Balsalmic Vinaigrette");
        const item2 = createItem("SOUP DU JOUR", null);

        const list = createClassDivAndAppend("list-less", item1, item2);
        const title = createClassTitle("APPETIZER");
        return createClassDivAndAppend("menu", title, createDivider(), list);
    }

    function createMainCourse() {
        const item1 = createItem("FRITTATA DU JOUR",
            "Served with Garden Salad and Sweet Potato Chips");
        const item2 = createItem("SOUTHWEST BLACK BEAN BURGER",
            "Pepper Jack Cheese, Chipotle Aioli, and Onion Rings; Served with Soul Chips, Coleslaw and Pickle");
        const item3 = createItem("CHICKEN CHEESESTEAK PITA",
            "Grilled Chicken with Sauteed Peppers, Onions and Provolone Cheese; Served on an Open Face Pita with Soul Chips and Coleslaw");
        const item4 = createItem("ANGUS BEEF SLIDERS",
            "Bacon Cheddar Sliders with Barbeque Sauce; Served with Soul Chips, Coleslaw & a Pickle");
        const item5 = createItem("CHEF’S LUNCH SPECIAL", null);

        const list = createClassDivAndAppend("list", item1, item2, item3, item4, item5);
        const title = createClassTitle("MAIN COURSE");
        return createClassDivAndAppend("menu", title, createDivider(), list);
    }

    function createDessert() {
        const item1 = createItem("CHEF’S CHOICE OR FRUIT CUP", null);
        const list = createClassDivAndAppend("list", item1);
        const title = createClassTitle("DESSERT");
        return createClassDivAndAppend("menu", title, createDivider(), list);
    }

    function createItem(name, desc) {
        const itemName = createDiv(name);
        if (desc !== null) {
            return createClassDivAndAppend("item", itemName, createDiv(desc));
        }
        return createClassDivAndAppend("item", itemName);
    }

    function createClassTitle(text) {
        const title = createDiv(text);
        title.classList.add("title");
        return title;
    }

    function createDivider() {
        const divider = document.createElement("div");
        divider.classList.add("divider");
        return divider;
    }

    return { createContent };
})()

export { menu };
