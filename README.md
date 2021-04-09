# shake-and-date

<img width="1440" alt="Screen Shot 2021-01-04 at 4 08 56 PM" src="https://user-images.githubusercontent.com/74025123/103579954-264f8400-4e8e-11eb-91d7-90470546696b.png">

Deployment Link: https://bh007183.github.io/shake-and-date/

# Summary

Our group wanted to create an app that would help set up a date for you for a classic movie and dinner night, while being practical during today's pandemic. You will notice that we introduce a movie display for us to help you find a movie based off of your genre of choice, or if you're feeling lucky, randomly (if you'd like a movie of course). Upon presenting information about the movie, you will notice links provided. These links show you where the movie can be streamed OR rented, seeing as how movie theaters are closed.

Upon saving the movie, you are then prompted with a restaurant display, asking if you'd like our program to help find a restaurant for you. The user will input their city, and we will confirm the city with a button that will then populate the input field, and we search for a restaurant based off of the cuisine of your choice, or again, if you're feeling lucky, randomly. Information about the restaurant is displayed and upon hitting save, you are taken to a page that displays all of the previously saved information.

A saved.html file was created to display the entire saved date, so that all saved dates can be referred to in the future.

## Behind the scenes

- 2 APIs were used
  - One for the movie, MovieDB, which helps display all information regarding where the movie can be streamed, its rating, and synopsis
  - Another for the restaurant/cuisine, Zomato, which we used to grab cityID's to match the user's location, and set a radius to find restaurants based off of their cuisine types
- Save buttons were used to store the information displayed for the movie and restaurant to local storage, and then later displayed on the final display as well as a card in the saved.html
- Multiple edge cases were handled via Javascript, which was the core of our project
- Displays were chosen by various functions and hide/show methods
- Clear button was made in the saved.html to clear that page as well as the local storage

### What we could do

- Found a google calendar API that we could try to implement so that it would save the date to a specific day for the user
- The project ones in one direction. A try again button could be implemented in the future so that the user has the option of starting over once they've reached the end
- Could add other APIs to help develop the app, such as hiking or other outdoor activities
- Refactor index.html
  - Multiple hide methods were used via javascript, so to redisplay the information was difficult.

#### Roles

- Kevin Hsieh: Front-end/Back-end
- Benjamin Hopkins: Back-end/Front-end
- Keontrae LuBom: Back-end

Deploy: https://bh007183.github.io/shake-and-date/
