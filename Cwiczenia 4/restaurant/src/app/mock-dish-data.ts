import {Dish} from './dish'

export const DISHES: Dish[] = [
  {
    id: 0,
    name: "Spaghetti Bolognese",
    cuisine: "italian",
    type: "Meat",
    category: "Main Course",
    ingredients: ["spaghetti", "minced meat", "tomatoes", "onion", "red wine", "parmesan"],
    maxAmount: 30,
    ordered: 0,
    price: 10,
    description: "Delicious italian pasta",
    photos: ["https://www.unileverfoodsolutions.pl/dam/global-ufs/mcos/NEE/calcmenu/recipes/PL-recipes/general/spaghetti-bolognese/main-header.jpg"],
    rating: 0,
    ratings: []
  },
  {
    id: 1,
    name: "Sushi",
    cuisine: "japanese",
    type: "Meat",
    category: 'Snack',
    ingredients: ["fish", "rice", "shrimps", "cucumber", "algae", "soy sauce"],
    maxAmount: 50,
    ordered: 0,
    price: 20,
    description: "Authentic sushi",
    photos: ["https://www.wplywaryba.pl/wp-content/uploads/2020/12/Domowe-sushi.jpg"],
    rating: 0,
    ratings: []
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    cuisine: "italian",
    type: "Meat",
    category: "Main Course",
    ingredients: ["spaghetti", "pork belly", "eggs", "parmesan", "onion"],
    maxAmount: 25,
    ordered: 0,
    price: 15,
    description: "Gorgeous italian pasta",
    photos: ["https://www.opowiastka.com/wp-content/uploads/2018/05/carbonara.jpeg"],
    rating: 0,
    ratings: []
  },
  {
    id: 3,
    name: "Pizza Capricciosa",
    cuisine: "italian",
    type: "Meat",
    category: "Main Course",
    ingredients: ["dough", "tomato sauce", "mushrooms", "cheese", "ham"],
    maxAmount: 15,
    ordered: 0,
    price: 25,
    description: "Magnificent pizza",
    photos: ["https://speisekarte.menu/storage/media/dishes_main/1763345/conversions/dish_thumbnail.jpg"],
    rating: 0,
    ratings: []
  },
  {
    id: 4,
    name: "Chicken soup",
    cuisine: "polish",
    type: "Meat",
    category: "Soup",
    ingredients: ["water", "chicken", "noodles", "carrot"],
    maxAmount: 50,
    ordered: 0,
    price: 5,
    description: "Tasty polish soup",
    photos: ["https://www.zajadam.pl/wp-content/uploads/2010/10/rosol-przepis-tradycyjny-6504345.jpg"],
    rating: 0,
    ratings: []
  },
  {
    id: 5,
    name: "Dumplings (ruskie)",
    cuisine: "polish",
    type: "Vegetarian",
    category: "Main Course",
    ingredients: ["dough", "potatoes", "cheese"],
    maxAmount: 35,
    ordered: 0,
    price: 8,
    description: "Authentic polish dumplings",
    photos: ["https://cdn.aniagotuje.com/pictures/articles/2020/01/2063431-v-1500x1500.jpg"],
    rating: 0,
    ratings: []
  },
  {
    id: 6,
    name: "Kebab",
    cuisine: "turkish",
    type: "Meat",
    category: "Fast Food",
    ingredients: ["pita", "beef", "chicken", "salads", "spicy sauce"],
    maxAmount: 40,
    ordered: 0,
    price: 12,
    description: "Delicious turkish kebab",
    photos: ["https://ocdn.eu/pulscms-transforms/1/mytk9kpTURBXy82NWMxYTJhYTgzOTRiNmU0ZjIwMDIzYmQ2NjViNDA0Ni5qcGeTlQMAzL_NF-vNDXSTBc0DFM0BvJMJpmUyNTg3ZQaBoTAB/domowy-kebab-z-kurczaka-to-danie-ktore-bez-problemu-przygotujecie-samodzielnie-w-domu.jpg"],
    rating: 0,
    ratings: []
  },
  {
    id: 7,
    name: "Berger",
    cuisine: "american",
    type: "Meat",
    category: "Fast Food",
    ingredients: ["bun", "beef", "lettuce", "cheese", "bacon", "tomato", "oickle", "sauce", "onion"],
    maxAmount: 25,
    ordered: 0,
    price: 16,
    description: "Very tasty berger",
    photos: ["https://cdn.galleries.smcloud.net/t/galleries/gf-fCGi-H1PR-KYKb_amerykanski-burger-z-francuskim-sosem-jak-zrobic-664x442-nocrop.jpg"],
    rating: 0,
    ratings: []
  },
  {
    id: 8,
    name: "Fries",
    cuisine: "belgian",
    type: "Vegan",
    category: "Fast Food",
    ingredients: ["potatoes"],
    maxAmount: 90,
    ordered: 0,
    price: 4,
    description: "Crispy belgian fries",
    photos: ["https://www.thebossykitchen.com/wp-content/uploads/2021/05/French-fries-720x720.jpg"],
    rating: 0,
    ratings: []
  },
  {
    id: 9,
    name: "Beer",
    cuisine: "international",
    type: "Vegan",
    category: "Drink",
    ingredients: ["beer"],
    maxAmount: 90,
    ordered: 0,
    price: 5,
    description: "Student piwo",
    photos: ["https://cdn.vox-cdn.com/thumbor/VKqurkVqKBPL0cjVZdGJweItES4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22816948/beer_bars_kkings.jpeg"],
    rating: 5,
    ratings: [5]
  },
  {
    id: 10,
    name: "Coffee",
    cuisine: "international",
    type: "Vegan",
    category: "Drink",
    ingredients: ["water", "coffee"],
    maxAmount: 80,
    ordered: 0,
    price: 5,
    description: "Aromatic coffee",
    photos: ["data:image/jpeg;base64,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"],
    rating: 0,
    ratings: []
  },
  {
    id: 11,
    name: "Ice cream",
    cuisine: "italian",
    type: "Vegetarian",
    category: "Dessert",
    ingredients: ["cream", "vanilla", "ice"],
    maxAmount: 30,
    ordered: 0,
    price: 12,
    description: "Creamy gelato",
    photos: ["https://www.yourhomebasedmom.com/wp-content/uploads/2017/07/vanilla-ice-cream-recipe-squarejpg-500x500.jpg"],
    rating: 0,
    ratings: []
  }
]
