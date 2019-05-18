# VehicleSearchEngine
Welcome to the WebApp Project Vehicle Search Engine.
# Current Situation
The current situation is that many people are searching for vehicles in the dealer and often the employees have to search whether certain vehicle is available in their stock, or in another facility across the country. The employee has to communicate directly with each dealer to verify if certain type of vehicle is available. This often causes exhaustive waiting times, inconsistencies, etc.
# Need
There is a need to accelerate the process in which the states of the vehicles and their accessibility is visible and accelerate the waiting time to search the cars. Managers want to know how many cars they have in stock, the time spent in the dealer an other important information about the vehicles.
# Ideas
The main idea is to provide efficient connection between dealers. The information shared would be: all information about a vehicle, when a vehicle is available, when a vehicle is reserved for purchase and when a vehicle has been sold.
# Concept
More in depth, any given dealer should access the stock of the other dealers. When a specific vehicle is reserved, it should update its status so any other dealer should be aware of it. The provision of a channel that communicates directly with the stock of all the dealers is essential.
# Scope
The general problem is to understand the domain of stock management. This contains: selling, availability, supply from any company, quantity check, etc.
# Span
 The more specific problem is to work with a domain of vehicle stock management: monitor all available vehicles, arrange them by brand, model, specification, year, etc. Keep track of available and sold vehicles, when needed, contact suppliers, etc.
# Synopsis
This project is mainly to develop a domain model in which we can cover phenomena as: Vehicles: all information needed to extract, such explained above and how to find the best way to find them across dealers. Dealers: areas in which all vehicles are going to be placed, how it operates and its composition. Dealer Employees: how they keep track of all vehicles, their prices and availability. And so on.
# Asumptions and dependencies
To develop this project, we will need to have contact on domain experts. The developers should have access to communicate with professionals in the Stock and Management area. These professionals, or domain experts, should have a clear view on how the marketing around the dealers works, bests strategies of selling and distributing, vehicles distribution across the different dealers while having the best strategic on getting rid of stuck items. Depending of the knowledge, experience and communication skills of this domain experts, it should have a clearer domain model that will lead developers ease their workflow. There would be 4 sets of assumptions that would lead to a better work around the development process: (1) The domain experts must strictly have experience in the stock area, more specifically, in vehicles stock management. (2) The developers must contact and receive as much information as possible about the domain facets, general ideas, possible conflicts, etc. (3) The Developers should constantly be asking for any kind of feedback regardless any software design, model, development process, etc. (4) Both the developers and domain expert can request any information available to ease the process in which models are created, design, etc. Most of the domain dependencies needs these four assumptions.
# Glossary
- Vehicle: The vehicle is the item to be sold within the dealer. It can be separated in three categories: car, truck and motorcycle. People can look by: brand, model, year, and specification.
- Brand: Brand is referred to manufacturer which builds the vehicle (eg: Toyota).
- Model: Model is referred to a certain type of vehicle within the same Brand ( eg:
Toyota Corolla, Toyota Yaris).
- Year: In this concept, year is the year that the vehicle was manufactured (eg: Toyota Corolla 2009, Toyota Yaris 2017).
- Specification: Specification refers to the adjectives that a certain vehicle has: color, accessories, body kit, etc.)
- Color: Here color is used to refer when a car is painted with (eg: Toyota Corolla Red).
- Accessories: Accessories are referred to any item that is in the vehicle which the base
model does not have it.
- Body kit: This refers to the exterior item of a vehicle added that was not added in the base model.
- Base Model: Base model is referred to the vehicle that does not include any type of accessories beside the given-on plan.
- Dealer: Market in which people come to buy any given vehicle.
- Market: Place which people can buy any asset(item).
- Buy: Permanently pay for an item to have it permanently.
- Employee unique identifier: This refers that every employee must have an identifier that no one has it.
# What Does The Project Do?
This project is focused on seeing vehicle stock and whether or not they are: available, sold or reserved around the dealer network. It has a dashboard to give top sold vehicles and vehicles on sale. It has a Profile to see employee data.
# How to install?
- First You need to install PostgreSQL and Angular.
- You can use this link to install angular: https://angular.io/guide/quickstart
- You can use this link to install postgresql: https://www.2ndquadrant.com/en/blog/pginstaller-install-postgresql/
- After installing the necesary components, clone the repo url to your file system.
- Use your favorite IDE to run the project.
- You need npm install to install all the dependencies of angular
- You need PIP for the back-end
# Contact 
- For further questions, email me adahid.galan@upr.edu
