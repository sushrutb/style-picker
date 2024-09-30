# StylePicker

StylePicker is a lightweight, customizable tool that allows users to dynamically change the colors and fonts of a webpage. It provides an intuitive interface for selecting colors and fonts, with real-time preview functionality.

## Purpose

The main purpose of StylePicker is to:
1. Allow easy customization of website colors and fonts without coding knowledge.
2. Provide real-time preview of style changes.
3. Generate CSS variables that can be easily integrated into existing stylesheets.
4. Offer a user-friendly interface for both developers and end-users.

## Features

- Color picker with hex value display
- Font family and size selection
- Real-time preview of style changes
- Generation of CSS variables for easy integration
- Customizable UI
- Support for Google Fonts

## How to Use StylePicker

1. Include the necessary files in your HTML:

```html
<link rel="stylesheet" href="path/to/styles.css">
<script src="path/to/fonts.js"></script>
<script src="path/to/style-picker.js"></script>
```

2. Create container elements for the StylePicker and preview:

```html
<div id="stylePicker"></div>
<div id="preview">
    <!-- Your content here -->
</div>
```

3. Initialize StylePicker in your JavaScript:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const myStylePicker = new StylePicker({
        colors: {
            'primary': '#3498db',
            'secondary': '#2ecc71',
            'accent': '#e74c3c',
            'background': '#ecf0f1'
        },
        fonts: {
            'heading': { family: 'Roboto', size: 32 },
            'body': { family: 'Open Sans', size: 16 },
            'accent': { family: 'Montserrat', size: 18 },
            'caption': { family: 'Lato', size: 12 }
        }
    });

    myStylePicker.init('#stylePicker', '#preview');
});
```

4. Use the generated CSS variables in your stylesheets:

```css
.heading {
    color: var(--primary);
    font-family: var(--heading-family);
    font-size: var(--heading-size);
}
```

## fonts.js

The `fonts.js` file is a crucial component of StylePicker. It contains an array of Google Fonts that will be available for selection in the font picker. Here's what you need to know about `fonts.js`:

- It defines a global variable `window.googleFonts` which is an array of font names.
- StylePicker uses this array to populate the font selection dropdowns.
- You can easily customize the available fonts by modifying this array.

Example of `fonts.js`:

```javascript
window.googleFonts = [
    'Roboto',
    'Open Sans',
    'Lato',
    'Montserrat',
    'Raleway',
    'Poppins',
    'Oswald',
    'Merriweather',
    'Ubuntu',
    'Playfair Display'
];
```

### Customizing Fonts

To add or remove fonts:

1. Open `fonts.js`
2. Modify the `window.googleFonts` array
3. Add new font names or remove existing ones as needed

Note: Currently, StylePicker only supports Google Fonts. Make sure to use font names exactly as they appear in the Google Fonts library.

## Example

For a working example of StylePicker, check out the [example directory](./example) in this repository. It showcases how to integrate and use StylePicker in a basic webpage.

## Customization

You can customize the appearance of the StylePicker UI by modifying the `styles.css` file. The generated UI elements have specific classes that you can target for styling.

## Contributing

Contributions to StylePicker are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
