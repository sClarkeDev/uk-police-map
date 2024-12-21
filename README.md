# UK Police Map

An interactive map that shows crime information and statistics in the UK

https://uk-police-map.pages.dev

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Local Development](#local-development)


## Technologies Used

- React
- Next JS
- Zustand
- Leaflet | React Leaflet
- MapBox

## Features

- Latest crime location and information
- Local force & neighbourhood information
- Search for crimes by location

## Local Development

1. Step 1 - Install dependencies
```bash
$ yarn install
```
2. Step 2 - Add env variables
   - Create a .env.local file in the root directory
   - Add both ```MAPBOX_ACCESS_TOKEN``` and  ```NEXT_PUBLIC_MAPBOX_GEOCODING_ACCESS_TOKEN``` variables

1. Step 3 - Run development server
```bash
$ yarn dev
```
