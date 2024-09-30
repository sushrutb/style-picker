(function () {
  class StylePicker {
    constructor(config) {
      this.config = config || {
        colors: {},
        fonts: {},
      };
      this.googleFonts = window.stylePickerFonts || [];
      this.containerId = null;
      this.previewId = null;
    }

    init(containerId, previewId) {
      this.containerId = containerId;
      this.previewId = previewId;
      this.container = document.querySelector(containerId);
      this.preview = document.querySelector(previewId);

      if (!this.container || !this.preview) {
        console.error(
          `Container ${containerId} or preview ${previewId} not found`,
        );
        return;
      }

      this.loadGoogleFonts();
      this.createPickerUI();
      this.updateCSSVariables();
      this.addEventListeners();
    }

    loadGoogleFonts() {
      const link = document.createElement("link");
      link.href = `https://fonts.googleapis.com/css?family=${this.googleFonts.join("|").replace(/ /g, "+")}`;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    createPickerUI() {
      // Clear existing content
      this.container.innerHTML = "";

      // Create wrapper div
      const wrapper = document.createElement("div");
      wrapper.id = this.containerId.replace("#", "");
      wrapper.className = "stylePicker-wrapper";

      // Create color pickers
      const colorSection = document.createElement("div");
      colorSection.className = "stylePicker-colors";
      colorSection.innerHTML = "<h3>Colors</h3>";
      for (const [colorName, colorValue] of Object.entries(
        this.config.colors,
      )) {
        const colorPicker = document.createElement("div");
        colorPicker.className = "stylePicker-color-item";
        colorPicker.innerHTML = `
                  <label for="color-${colorName}">${colorName}:</label>
                  <input type="color" id="color-${colorName}" value="${colorValue}">
                  <span class="color-hex">${colorValue.toUpperCase()}</span>
              `;
        colorSection.appendChild(colorPicker);
      }
      wrapper.appendChild(colorSection);

      // ... rest of the method remains the same

      // Append the wrapper to the container
      this.container.appendChild(wrapper);
    }
    addEventListeners() {
      this.container.addEventListener("input", (event) => {
        if (event.target.type === "color") {
          const colorName = event.target.id.replace("color-", "");
          const newColor = event.target.value.toUpperCase();
          this.config.colors[colorName] = newColor;

          // Update the hex value display
          const hexSpan = event.target.parentNode.querySelector(".color-hex");
          console.log("hexSpan found:", hexSpan); // Check if hexSpan is found
          if (hexSpan) {
            hexSpan.textContent = newColor;
          }
        }
        this.updateCSSVariables();
      });
    }
    updateCSSVariables() {
      let cssVars = "";
      for (const [colorName, colorValue] of Object.entries(
        this.config.colors,
      )) {
        cssVars += `--${colorName}: ${colorValue};`;
      }
      for (const [fontName, fontInfo] of Object.entries(this.config.fonts)) {
        cssVars += `--${fontName}-family: '${fontInfo.family}', sans-serif;`;
        cssVars += `--${fontName}-size: ${fontInfo.size}px;`;
      }
      document.documentElement.style.cssText += cssVars;
    }

    getStyles() {
      return this.config;
    }

    setStyles(newConfig) {
      this.config = newConfig;
      this.createPickerUI();
      this.updateCSSVariables();
    }
  }

  // Make it globally available
  window.StylePicker = StylePicker;
})();
