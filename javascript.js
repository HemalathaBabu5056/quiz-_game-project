const quizData = {
  ocean: [
    {
      question: "What is the largest ocean in the world?",
      answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: 3,
    },
    {
      question: "What ocean is known as the 'Southern Ocean'?",
      answers: [
        "Indian Ocean",
        "Arctic Ocean",
        "Antarctic Ocean",
        "Southern Ocean",
      ],
      correct: 3,
    },
    {
      question: "What is the deepest part of the world's oceans?",
      answers: [
        "Mariana Trench",
        "Tonga Trench",
        "Java Trench",
        "Philippine Trench",
      ],
      correct: 0,
    },
    {
      question: "Which ocean is the smallest by surface area?",
      answers: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Southern Ocean",
      ],
      correct: 2,
    },
    {
      question:
        "Which ocean is located between Africa, Asia, Australia, and the Southern Ocean?",
      answers: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      correct: 1,
    },
    {
      question: "What percentage of the Earth's surface is covered by oceans?",
      answers: ["50%", "60%", "70%", "80%"],
      correct: 2,
    },
    {
      question:
        "Which ocean current is known as the 'conveyor belt' of the ocean?",
      answers: [
        "Gulf Stream",
        "Humboldt Current",
        "Kuroshio Current",
        "Thermohaline Circulation",
      ],
      correct: 3,
    },
    {
      question: "What is the primary cause of ocean tides?",
      answers: ["Wind", "Earth's rotation", "Moon's gravity", "Sun's heat"],
      correct: 2,
    },
    {
      question: "Which ocean has the most coral reefs?",
      answers: [
        "Atlantic Ocean",
        "Pacific Ocean",
        "Indian Ocean",
        "Arctic Ocean",
      ],
      correct: 1,
    },
    {
      question:
        "What is the name of the largest coral reef system in the world?",
      answers: [
        "Great Barrier Reef",
        "Red Sea Coral Reef",
        "New Caledonia Barrier Reef",
        "Florida Reef",
      ],
      correct: 0,
    },
    {
      question: "Which ocean lies to the east of Africa?",
      answers: [
        "Pacific Ocean",
        "Atlantic Ocean",
        "Indian Ocean",
        "Southern Ocean",
      ],
      correct: 2,
    },
    {
      question: "What is the primary element found in ocean water?",
      answers: ["Sodium", "Chlorine", "Magnesium", "Hydrogen"],
      correct: 3,
    },
    {
      question: "Which ocean surrounds the continent of Antarctica?",
      answers: [
        "Arctic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Southern Ocean",
      ],
      correct: 3,
    },
    {
      question:
        "What is the name of the process by which deep, cold water rises to the surface, bringing nutrients with it?",
      answers: ["Upwelling", "Downwelling", "Thermocline", "Stratification"],
      correct: 0,
    },
    {
      question: "Which ocean is home to the Sargasso Sea?",
      answers: [
        "Pacific Ocean",
        "Indian Ocean",
        "Atlantic Ocean",
        "Southern Ocean",
      ],
      correct: 2,
    },
  ],
  technology: [
    {
      question:
        "Which of the following is a way to define a variable in JavaScript?",
      answers: ["let", "var", "const", "All of the above"],
      correct: 3,
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      answers: [
        "msgBox('Hello World');",
        "alertBox('Hello World');",
        "msg('Hello World');",
        "alert('Hello World');",
      ],
      correct: 3,
    },
    {
      question: "How do you create a function in JavaScript?",
      answers: [
        "function = myFunction()",
        "function myFunction()",
        "function:myFunction()",
        "function => myFunction()",
      ],
      correct: 1,
    },
    {
      question: "How do you call a function named 'myFunction'?",
      answers: [
        "call myFunction()",
        "myFunction()",
        "call function myFunction()",
        "execute myFunction()",
      ],
      correct: 1,
    },
    {
      question: "How do you write an IF statement in JavaScript?",
      answers: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"],
      correct: 2,
    },
    {
      question: "How does a WHILE loop start?",
      answers: [
        "while (i <= 10; i++)",
        "while (i <= 10)",
        "while i = 1 to 10",
        "while (i++ <= 10)",
      ],
      correct: 1,
    },
    {
      question: "How can you add a comment in JavaScript?",
      answers: [
        "//This is a comment",
        "'This is a comment",
        "<!--This is a comment-->",
        "/*This is a comment*/",
      ],
      correct: 0,
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      answers: [
        "var colors = (1:'red', 2:'green', 3:'blue')",
        "var colors = ['red', 'green', 'blue']",
        "var colors = 'red', 'green', 'blue'",
        "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
      ],
      correct: 1,
    },
    {
      question: "How do you round the number 7.25 to the nearest integer?",
      answers: [
        "Math.rnd(7.25)",
        "Math.round(7.25)",
        "rnd(7.25)",
        "round(7.25)",
      ],
      correct: 1,
    },
    {
      question: "How do you find the number with the highest value of x and y?",
      answers: ["ceil(x, y)", "Math.ceil(x, y)", "Math.max(x, y)", "top(x, y)"],
      correct: 2,
    },
    {
      question: "What event occurs when the user clicks on an HTML element?",
      answers: ["onchange", "onmouseclick", "onmouseover", "onclick"],
      correct: 3,
    },
    {
      question: "How do you declare a JavaScript variable?",
      answers: [
        "var carName;",
        "variable carName;",
        "v carName;",
        "var: carName;",
      ],
      correct: 0,
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      answers: ["*", "-", "=", "x"],
      correct: 2,
    },
    {
      question: "What will the following code return: Boolean(10 > 9)?",
      answers: ["NaN", "false", "true", "undefined"],
      correct: 2,
    },
    {
      question: "Is JavaScript case-sensitive?",
      answers: ["No", "Yes", "Only in functions", "Only in variable names"],
      correct: 1,
    },
  ],
  geography: [
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2,
    },
    {
      question: "Which country is the largest by area?",
      answers: ["Canada", "Russia", "China", "United States"],
      correct: 1,
    },
    {
      question: "Which is the longest river in the world?",
      answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      correct: 1,
    },
    {
      question: "What is the smallest country in the world by area?",
      answers: ["Monaco", "San Marino", "Liechtenstein", "Vatican City"],
      correct: 3,
    },
    {
      question: "Which desert is the largest in the world?",
      answers: ["Sahara", "Arabian", "Gobi", "Kalahari"],
      correct: 0,
    },
    {
      question: "Which continent is known as the 'Dark Continent'?",
      answers: ["Africa", "Asia", "South America", "Europe"],
      correct: 0,
    },
    {
      question: "What is the highest mountain in the world?",
      answers: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
      correct: 2,
    },
    {
      question: "Which country has the most natural lakes?",
      answers: ["Canada", "United States", "India", "Australia"],
      correct: 0,
    },
    {
      question: "What is the longest mountain range in the world?",
      answers: ["Rocky Mountains", "Andes", "Himalayas", "Alps"],
      correct: 1,
    },
    {
      question: "Which city is known as the 'City of Canals'?",
      answers: ["Venice", "Amsterdam", "Bangkok", "Bruges"],
      correct: 0,
    },
    {
      question: "Which is the largest island in the world?",
      answers: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
      correct: 0,
    },
    {
      question: "Which ocean is Bermuda located in?",
      answers: [
        "Atlantic Ocean",
        "Pacific Ocean",
        "Indian Ocean",
        "Arctic Ocean",
      ],
      correct: 0,
    },
    {
      question: "Which US state is the Grand Canyon located in?",
      answers: ["Utah", "Nevada", "Arizona", "Colorado"],
      correct: 2,
    },
    {
      question: "What is the largest rainforest in the world?",
      answers: [
        "Congo Rainforest",
        "Daintree Rainforest",
        "Amazon Rainforest",
        "Southeast Asian Rainforest",
      ],
      correct: 2,
    },
    {
      question: "Which is the most populous country in the world?",
      answers: ["India", "United States", "Indonesia", "China"],
      correct: 3,
    },
  ],
  "science-nature": [
    {
      question: "What is the chemical symbol for water?",
      answers: ["H2O", "O2", "CO2", "H2"],
      correct: 0,
    },
    {
      question: "What planet is known as the Red Planet?",
      answers: ["Mars", "Jupiter", "Saturn", "Venus"],
      correct: 0,
    },
    {
      question: "What is the largest mammal?",
      answers: ["Elephant", "Blue Whale", "Giraffe", "Rhino"],
      correct: 1,
    },
    {
      question: "What gas do plants absorb from the atmosphere?",
      answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correct: 2,
    },
    {
      question: "What is the speed of light?",
      answers: ["300,000 km/s", "150,000 km/s", "100,000 km/s", "50,000 km/s"],
      correct: 0,
    },
  ],
  "india-cultures": [
    {
      question: "Which festival is known as the festival of lights?",
      answers: ["Holi", "Eid", "Diwali", "Christmas"],
      correct: 2,
    },
    {
      question: "What is the capital of India?",
      answers: ["Mumbai", "Delhi", "Bangalore", "Kolkata"],
      correct: 1,
    },
    {
      question: "Which dance form is from Kerala?",
      answers: ["Kathak", "Bharatanatyam", "Kathakali", "Odissi"],
      correct: 2,
    },
    {
      question: "Who is known as the Father of the Nation in India?",
      answers: [
        "Jawaharlal Nehru",
        "Subhas Chandra Bose",
        "Sardar Patel",
        "Mahatma Gandhi",
      ],
      correct: 3,
    },
    {
      question: "What is the national animal of India?",
      answers: ["Lion", "Elephant", "Tiger", "Peacock"],
      correct: 2,
    },
    {
      question: "Which classical dance form is associated with Tamil Nadu?",
      answers: ["Kathak", "Bharatanatyam", "Manipuri", "Mohiniyattam"],
      correct: 1,
    },
    {
      question: "Which Indian state is known as the 'Land of the Rising Sun'?",
      answers: ["Arunachal Pradesh", "Assam", "Nagaland", "Mizoram"],
      correct: 0,
    },
    {
      question: "Which Indian festival marks the onset of spring?",
      answers: ["Diwali", "Holi", "Eid", "Navratri"],
      correct: 1,
    },
    {
      question: "What is the traditional dress of men in Punjab?",
      answers: ["Lungi", "Sherwani", "Kurta-Pajama", "Dhoti"],
      correct: 2,
    },
    {
      question: "Which river is considered the holiest in India?",
      answers: ["Yamuna", "Ganga", "Brahmaputra", "Godavari"],
      correct: 1,
    },
    {
      question: "Which Indian state is famous for the Bihu festival?",
      answers: ["West Bengal", "Punjab", "Assam", "Gujarat"],
      correct: 2,
    },
    {
      question: "Which Indian spice is also known as 'black gold'?",
      answers: ["Turmeric", "Pepper", "Cardamom", "Clove"],
      correct: 1,
    },
    {
      question: "What is the national flower of India?",
      answers: ["Rose", "Lily", "Lotus", "Marigold"],
      correct: 2,
    },
    {
      question: "Who wrote the Indian national anthem?",
      answers: [
        "Bankim Chandra Chattopadhyay",
        "Rabindranath Tagore",
        "Sarojini Naidu",
        "Allama Iqbal",
      ],
      correct: 1,
    },
    {
      question: "Which city is known as the Silicon Valley of India?",
      answers: ["Hyderabad", "Chennai", "Bangalore", "Pune"],
      correct: 2,
    },
  ],
  sports: [
    {
      question: "Which country won the FIFA World Cup in 2018?",
      answers: ["Germany", "Brazil", "France", "Argentina"],
      correct: 2,
    },
    {
      question: "Which sport is known as the 'king of sports'?",
      answers: ["Basketball", "Cricket", "Soccer", "Tennis"],
      correct: 2,
    },
    {
      question: "How many players are on a baseball team?",
      answers: ["7", "8", "9", "10"],
      correct: 2,
    },
    {
      question: "What is the national sport of Canada?",
      answers: ["Lacrosse", "Ice Hockey", "Basketball", "Soccer"],
      correct: 1,
    },
    {
      question: "Which sport uses a net, a racket, and a shuttlecock?",
      answers: ["Tennis", "Badminton", "Squash", "Table Tennis"],
      correct: 1,
    },
    {
      question: "In which country did volleyball originate?",
      answers: ["Brazil", "United States", "Italy", "India"],
      correct: 3,
    },
    {
      question: "Who holds the record for the fastest 100-meter sprint?",
      answers: ["Usain Bolt", "Carl Lewis", "Jesse Owens", "Justin Gatlin"],
      correct: 0,
    },
    {
      question: "What is the diameter of a basketball hoop in inches?",
      answers: ["16", "17", "18", "19"],
      correct: 2,
    },
    {
      question: "Which country is famous for sumo wrestling?",
      answers: ["China", "Japan", "South Korea", "Mongolia"],
      correct: 1,
    },
    {
      question:
        "What is the maximum number of clubs allowed in a golfer's bag?",
      answers: ["10", "12", "14", "16"],
      correct: 2,
    },
    {
      question: "Who won the first Olympic marathon?",
      answers: [
        "Spiridon Louis",
        "Haile Gebrselassie",
        "Abebe Bikila",
        "Emil Zátopek",
      ],
      correct: 0,
    },
    {
      question: "Which tennis player has won the most Grand Slam titles?",
      answers: [
        "Roger Federer",
        "Rafael Nadal",
        "Novak Djokovic",
        "Pete Sampras",
      ],
      correct: 0,
    },
    {
      question: "What is the standard distance of a marathon?",
      answers: ["26.2 miles", "13.1 miles", "10 kilometers", "50 kilometers"],
      correct: 0,
    },
    {
      question: "What is the only sport to have been played on the moon?",
      answers: ["Soccer", "Golf", "Cricket", "Tennis"],
      correct: 1,
    },
    {
      question:
        "Which country won the most medals at the 2016 Summer Olympics?",
      answers: ["United States", "China", "Great Britain", "Russia"],
      correct: 0,
    },
  ],
  "food-drink": [
    {
      question: "What is the main ingredient in guacamole?",
      answers: ["Tomato", "Onion", "Avocado", "Pepper"],
      correct: 2,
    },
    {
      question: "What is sushi traditionally wrapped in?",
      answers: ["Seaweed", "Rice", "Soy Paper", "Nori"],
      correct: 3,
    },
    {
      question: "Which country is known for inventing pizza?",
      answers: ["France", "USA", "Italy", "Spain"],
      correct: 2,
    },
    {
      question: "What is the most consumed beverage in the world?",
      answers: ["Coffee", "Tea", "Coca-Cola", "Water"],
      correct: 1,
    },
    {
      question: "What type of fruit is a banana?",
      answers: ["Citrus", "Berry", "Stone Fruit", "Pome"],
      correct: 1,
    },
    {
      question: "What is the primary ingredient in hummus?",
      answers: ["Chickpeas", "Lentils", "Black Beans", "Kidney Beans"],
      correct: 0,
    },
    {
      question: "Which nut is used to make marzipan?",
      answers: ["Almond", "Peanut", "Cashew", "Pistachio"],
      correct: 0,
    },
    {
      question: "What is the most popular type of cheese in the world?",
      answers: ["Cheddar", "Parmesan", "Brie", "Mozzarella"],
      correct: 3,
    },
    {
      question: "Which spice is derived from the crocus flower?",
      answers: ["Cumin", "Saffron", "Turmeric", "Paprika"],
      correct: 1,
    },
    {
      question: "What is the national dish of Spain?",
      answers: ["Tacos", "Sushi", "Paella", "Curry"],
      correct: 2,
    },
    {
      question: "Which fruit is known as the 'king of fruits'?",
      answers: ["Mango", "Apple", "Banana", "Pineapple"],
      correct: 0,
    },
    {
      question: "What is the main ingredient in gazpacho?",
      answers: ["Tomato", "Cucumber", "Avocado", "Potato"],
      correct: 0,
    },
    {
      question:
        "What is the name of the Italian dessert made of ladyfingers, coffee, and mascarpone cheese?",
      answers: ["Tiramisu", "Panna Cotta", "Cannoli", "Gelato"],
      correct: 0,
    },
    {
      question: "What is the national drink of Mexico?",
      answers: ["Tequila", "Margarita", "Mojito", "Pisco Sour"],
      correct: 0,
    },
    {
      question: "Which country is famous for its sauerkraut?",
      answers: ["Germany", "France", "Italy", "Spain"],
      correct: 0,
    },
  ],
};
