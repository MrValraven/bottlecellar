# BottleCellar

## Table of Contents
1. [Requirements](#requirements)
1. [Installation](#installation)
1. [Development](#development)
1. [Project Structure](#project-structure)
1. [Quickstart app with mock data](#mock-data)

## Requirements
* node

## Installation

After confirming that your environment meets the above [requirements](#requirements), you can create a new project based on `cellar` by doing the following:

```bash
$ git clone https://github.com/MrValraven/cellar-tiagocosta.git <my-project-name>
$ cd <my-project-name>
```

When that's done, install the project dependencies.

```bash
$ npm install
```

## Development

After completing the [installation](#installation) step, you're ready to start developing!

**Runing the project in `development` mode:**

```bash
$ npm run dev
```

Hot reloading is enabled by default for both **JavaScript** and **SCSS** files.

**All scripts at your disposal:**

|`npm run <script>`    |Description|
|----------------------|-----------|
|`dev`            	   |Serves your app at [localhost:3000](http://localhost:3000)|
|`build`               |Builds the application to ./dist folder|
|`preview`             |Locally preview production build at [localhost:5000](http://localhost:5000)|

## Project Structure

```
.
├── dist                                          # All build-related source code
│
└── src                                           # Application source code
    ├── assets                                    # asset files to be required
    ├── index.js                                  # Application bootstrap and rendering
    │
    ├── components                                # Global reusable components
    │   └── component-name
    │       ├── component-name.styles.scss        # Your component styles 
    │       ├── component-name.component.jsx      # Pure component source code (easily tested)
    │
    ├── pages                                     # Components that represent each available routes
    │   └── component-name
    │       ├── component-name.styles.scss        # Your component styles
    │       ├── component-name.component.jsx      # Pure Component source code
    │
    ├── static                   
    │      └── mockData.js                         # Constant with mock data for Redux
    │
    ├── redux
    │   ├── cellar
    │   │     ├─cellar.actions.js                  # Reducer actions
    │   │     ├─cellar.reducer.js                  # Reducer source code
    │   │     ├─cellar.types.js                    # Constants of available action types
    │   │     └─cellar.utils.js                    # Utility functions for said reducer
    │   │
    │   ├── root-reducer.js                        # Combine all reducers in one place
    │   └── store.js                               # Redux store bootstrap
    │
 ___├
 │
 │
 │──── App.jsx                                     # Component responsible for getting initital state, routes and global components
 │──── App.scss                                    # Global app styles
```

## Quickstart app with mock data

At the end of the landing page, you are presented two buttons that help with populate global state as an array of 20 objects or reset it, as an empty array

![Image](screenshot.png)

