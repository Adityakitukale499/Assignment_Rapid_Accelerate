# Assignment_Rapid_Accelerate
# Train Search Web Application

This is a simple web application for searching train information based on the source and destination selected by the user.

## Prerequisites

To run this web application, you need a web server environment that supports HTML, CSS, and JavaScript. You can use popular web servers like Apache or Nginx to serve the HTML file.

## Getting Started

1. Download the HTML file provided in this repository.
2. Place the HTML file in your web server's document root directory.
3. Start your web server.

## Usage

1. Open a web browser and navigate to the URL where you placed the HTML file.
2. Select the source and destination stations from the dropdown menus.
3. Click the "Search" button to retrieve train search results.
4. The table below will display the train name, departure time, arrival time, and ticket price for the selected source and destination.

## Customization

- You can modify the list of stations by adding or removing `<option>` tags in the `source` and `destination` `<select>` elements.
- To customize the styling, you can modify the CSS code provided in the `<style>` section of the HTML file.

## Server-side Implementation

This HTML code assumes that there is a server-side component that handles the train search functionality. The server should implement an API endpoint at `/trains` that accepts the `source` and `destination` parameters and returns the train search results in JSON format. You need to implement this server-side component separately.

## License

This project is licensed under the [MIT License](LICENSE).
