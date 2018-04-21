//1
var bookList = ['the_historian', 'the_lord_of_the_rings', 'the_hobbit', 'magicians_guild', 'the_god_delusion', 'a_brief_history_of_time', 'the_davinci_code', 'sleeping_giants', 'hamlet', 'moby_dick'];
var len = bookList.length;

//2
console.log(bookList);

//3
for (i = 0; i < bookList.length; i++) {
  var li = document.createElement("li");
  var text = document.createTextNode(bookList[i]);
  li.appendChild(text);
  document.getElementById("books").appendChild(li);
}

//4
const the_historian = {
  Title: "The Historian",
  Language: "German",
  Author: "Elizabeth Kostova",
  greet: function() {
    return `This is one of my favorites!`;
  },
};
console.log(the_historian);
for (let key in the_historian) {
  console.log(key.toUpperCase() + ':', the_historian[key]);
}

const the_lord_of_the_rings = {
  Title: "The Lord Of The Rings",
  Language: "English",
  Author: "J.R.R. Tolkien",
  greet: function() {
    return `This is one of my favorites!`;
  },
};
console.log(the_lord_of_the_rings);
for (let key in the_lord_of_the_rings) {
  console.log(key.toUpperCase() + ':', the_lord_of_the_rings[key]);
}

const the_hobbit = {
  Title: "The Lord Of The Rings",
  Language: "English",
  Author: "J.R.R. Tolkien",
  greet: function() {
    return `This is one of my favorites!`;
  },
};
console.log(the_hobbit);
for (let key in the_hobbit) {
  console.log(key.toUpperCase() + ':', the_hobbit[key]);
}

const magicians_guild = {
  Title: "The Magician's Guild",
  Language: "German",
  Author: "Trudi Canavan",
  greet: function() {
    return `This is one of my favorites!`;
  },
};
console.log(magicians_guild);
for (let key in magicians_guild) {
  console.log(key.toUpperCase() + ':', magicians_guild[key]);
}

const the_god_delusion = {
  Title: "The God Delusion",
  Language: "German",
  Author: "Richard Dawkins",
  greet: function() {
    return `This is one of my favorites!`;
  },
};
console.log(the_god_delusion);
for (let key in the_god_delusion) {
  console.log(key.toUpperCase() + ':', the_god_delusion[key]);
}

const a_brief_history_of_time = {
  Title: "A Brief History Of Time",
  Language: "English",
  Author: "Stephen Hawkins",
  greet: function() {
    return `This is one of my favorites!`;
  },
};
console.log(a_brief_history_of_time);
for (let key in a_brief_history_of_time) {
  console.log(key.toUpperCase() + ':', a_brief_history_of_time[key]);
} 

const the_davinci_code = {
  Title: "The DaVinci Code",
  Language: "German",
  Author: "Dan Brown",
  greet: function() {
    return `This is one of my favorites!`;
  },
}; 
console.log(the_davinci_code);
for (let key in the_davinci_code) {
  console.log(key.toUpperCase() + ':', the_davinci_code[key]);
} 

const sleeping_giants = {
  Title: "Sleeping Giants",
  Language: "English",
  Author: "Sylvain Neuvel",
  greet: function() {
    return `This is one of my favorites!`;
  },
}; 
console.log(sleeping_giants);
for (let key in sleeping_giants) {
  console.log(key.toUpperCase() + ':', sleeping_giants[key]);
}

const hamlet = {
  Title: "Sleeping Giants",
  Language: "German",
  Author: "William Shakespeare",
  greet: function() {
    return `This is one of my favorites!`;
  },
};
console.log(hamlet);
for (let key in hamlet) {
  console.log(key.toUpperCase() + ':', hamlet[key]);
}

const moby_dick = {
  Title: "Moby Dick",
  Language: "German",
  Author: "Herman Melville",
  greet: function() {
    return `This is one of my favorites!`;
  },
};
console.log(moby_dick);
for (let key in moby_dick) {
  console.log(key.toUpperCase() + ':', moby_dick[key]);
}

//5