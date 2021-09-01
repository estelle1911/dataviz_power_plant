# Type of power plants across the globe
## Description 

This visualisation represents open sourced data from the power plants from 164 countries. The data was retrieved from [kaggle](https://www.kaggle.com/mathurinache/global-power-plant-database).

This visualisation was done with the help of the javascript D3 library.

This project couldn’t have existed without the course of Prof. Isaac Pante, the help found on so many forums and the many great examples of [Mike Bostock](https://bost.ocks.org/mike/) and [Yan Holtz](https://www.d3-graph-gallery.com/index.html)

capture écran 

## Database
Each entry represents one power plant for which there are 24 keys, of which I used 4 : capacityMw, latitude, longitude and primaryFuel. capacityMw is the electrical generating capacity in megawatts, while primaryFuel is the energy source used in primary electricity generation or export, and the latitude and longitude.
The power plant database is almost 800’000 lines long which has sometimes made it difficult to work with. There is a lot of data that I didn’t use in my project but I would have liked to make some more information available with an Eventlistener for a click on one of the bubbles, displaying for ex. the name of the country, the name of the power plant and the fuel it uses. 

**Use**

For this project to work, you need to run it locally.
1. Download zip, extract it into a folder on your computer.
2. Open a new Command Prompt, set the working directory to the folder. ex : cd /Users/username/Desktop/projectFolder
3. Initiate a server with python by entering: python3 -m http.server
4. Command Prompt should display: Serving HTTP on :: port 8000 (http://[::]:8000/)
5. Open a browser and enter the adress: http://0.0.0.0:8000/

## Requirements
For the project to work, the D3 library is necessary. It is available here https://d3js.org/ . The topojson library is also required, you can find the instructions for installing and using it here https://github.com/topojson/topojson 

## Context of developement
This project was developed as part of Isaac Pante's course “Visualisation de Données” (SLI, Lettres, Université de Lausanne)


