# A simple web-based unit converter application built using Node.js, Express, and EJS. The application allows users to convert values between different units of length, weight, and temperature.

## Features

- Convert units of **length**, **weight**, and **temperature**.
- User-friendly interface with dropdowns to select units.
- Validates input to ensure only positive decimal numbers can be entered.

## Technologies Used

- **Node.js**: JavaScript runtime for the backend.
- **Express**: Web framework for Node.js.
- **EJS**: Embedded JavaScript templates for rendering HTML.
- **CSS**: For basic styling of the application.

## Directory Structure


### Directory Hierarchy


unitConverter/

├── public/

│   └── css/

│ └── styles.css

├── views/

│   ├── index.ejs

│   ├── length.ejs

│   ├── weight.ejs

│   └── temperature.ejs

├── app.js

├── conversions.js

└── package.json


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/unitConverter.git

2. Navigate to the project directory:

    ```
    cd unitConverter

3. Install the dependencies:

    ```
    npm install

4. Start the server:

    ```
    node app.js

5. Open your browser and go to http://localhost:3000.




## Usage

On the main page, select the type of conversion: Length, Weight, or Temperature.
Enter the value to convert.

Choose the units from the dropdown menus.

Click the "Convert" button to see the result.

### Feel free to fork the repository and submit pull requests for improvements or bug fixes.

This project is licensed under the MIT License. See the LICENSE file for details.
