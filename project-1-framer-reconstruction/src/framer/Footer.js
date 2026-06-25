var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/XXgUH7Y9HcJuhY3fYP1h/I6gTxpJCuVGbEdWTOseV/uzposeN0S.js
import { jsx as _jsx4, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls4, ComponentViewportProvider, ControlType as ControlType4, cx as cx2, getFonts, getFontsFromSharedStyle, Link, RichText, SmartComponentScopedContainer, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React2 from "react";
import { useRef as useRef2 } from "react";

// http-url:https://framerusercontent.com/modules/DVYtI0I60utFDv4RKjrL/CapkkksUWdCkXmLmQWbV/AutoCopyright_Prod.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType } from "./_framer-runtime.js";
var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
function AutoCopyright(props) {
  const { name, statement, dateRange, startYear, font, color, fontSize } = props;
  const yearDisplay = dateRange ? `${startYear}-${currentYear}` : currentYear;
  let displayText = `\xA9 ${yearDisplay} ${name.trim()}`;
  if (statement.trim()) {
    displayText += ` ${statement.trim()}`;
  }
  const textStyle = { fontSize: `${fontSize}px`, color, ...font };
  return /* @__PURE__ */ _jsx("div", { style: textStyle, children: displayText });
}
AutoCopyright.defaultProps = { name: "Your Name", statement: "All rights reserved.", dateRange: false, startYear: currentYear - 1, color: "#999999", fontSize: 14, font: { family: "Inter" } };
AutoCopyright.displayName = "Auto Copyright";
addPropertyControls(AutoCopyright, { font: { type: ControlType.Font, title: "Font", defaultValue: "Inter", controls: "extended" }, color: { type: ControlType.Color, title: "Color", defaultValue: "#999999" }, dateRange: { type: ControlType.Boolean, title: "Date Range", defaultValue: false, enabledTitle: "Yes", disabledTitle: "No" }, startYear: { type: ControlType.Number, title: "Start Year", min: 1e3, max: currentYear, defaultValue: currentYear - 2, displayStepper: true, hidden: ({ dateRange }) => !dateRange }, name: { type: ControlType.String, title: "Name", defaultValue: "Your Name" }, statement: { type: ControlType.String, title: "Statement", defaultValue: "All rights reserved.", description: "More components at [Framer University](https://frameruni.link/cc)." } });

// http-url:https://framerusercontent.com/modules/uTHWTMfGzS20ThfQAKk1/qpM23VgbMxwmo12HXNQ5/ThemeChanger.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType2 } from "./_framer-runtime.js";
import { useEffect, useState, startTransition } from "react";
var changeTheme = (theme) => {
  const htmlElement = document.getElementsByTagName("html")[0];
  const bodyElement = document.getElementsByTagName("body")[0];
  htmlElement.setAttribute("toggle-theme", theme);
  bodyElement.setAttribute("toggle-theme", theme);
  localStorage.setItem("theme", theme);
  const event = new Event("themeChange");
  __dai_window.dispatchEvent(event);
};
var SunIcon = ({ size, color }) => /* @__PURE__ */ _jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [/* @__PURE__ */ _jsx2("circle", { cx: "12", cy: "12", r: "5", fill: color }), /* @__PURE__ */ _jsx2("path", { d: "M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42", stroke: color, strokeWidth: "2", strokeLinecap: "round" })] });
var MoonIcon = ({ size, color }) => /* @__PURE__ */ _jsx2("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _jsx2("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z", fill: color }) });
var applyColorToSvg = (svgString, color) => {
  if (!svgString)
    return "";
  let modifiedSvg = svgString.replace(/fill="[^"]*"/g, `fill="${color}"`);
  modifiedSvg = modifiedSvg.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
  if (!svgString.includes("fill=") && !svgString.includes("stroke=")) {
    modifiedSvg = modifiedSvg.replace(/<(path|circle|rect|ellipse|polygon|polyline)([^>]*?)>/g, `<$1$2 fill="${color}">`);
  }
  return modifiedSvg;
};
var CustomIcon = ({ svgString, size, color }) => {
  const coloredSvg = applyColorToSvg(svgString, color);
  return /* @__PURE__ */ _jsx2("div", { style: { width: size, height: size, display: "flex", alignItems: "center", justifyContent: "center" }, dangerouslySetInnerHTML: { __html: coloredSvg } });
};
function ThemeToggleButton(props) {
  const { toggleType = "Button", lightIconColor = "#FF8C00", darkIconColor = "#949494", SunIconColor = "#FF9100", MoonIconColor = "#6B6B6B", size = 30, defaultTheme = "Light", switchTrackColor = "#424242", switchActiveColor = "#DBDBDB", sunSvg, moonSvg } = props;
  const [theme, setTheme] = useState("system");
  const [, setIsInitialized] = useState(false);
  useEffect(() => {
    if (typeof __dai_window === "undefined")
      return;
    const savedTheme = localStorage.getItem("theme");
    const initialThemeProp = defaultTheme.toLowerCase();
    let newTheme = "light";
    if (savedTheme) {
      newTheme = savedTheme;
    } else {
      if (initialThemeProp === "light" || initialThemeProp === "dark") {
        newTheme = initialThemeProp;
      } else {
        const mediaQuery = __dai_window.matchMedia("(prefers-color-scheme: dark)");
        newTheme = mediaQuery.matches ? "dark" : "light";
      }
    }
    startTransition(() => setTheme(newTheme));
    changeTheme(newTheme);
    const htmlElement = document.getElementsByTagName("html")[0];
    const bodyElement = document.getElementsByTagName("body")[0];
    htmlElement.setAttribute("toggle-theme", newTheme);
    bodyElement.setAttribute("toggle-theme", newTheme);
    let lightThemeTokens = [];
    let darkThemeTokens = "";
    for (let i = 0; i < document.styleSheets.length; i++) {
      const sheet = document.styleSheets[i];
      try {
        const rules = sheet.cssRules || [];
        for (let k = 0; k < rules.length; k++) {
          const rule = rules[k];
          if ("selectorText" in rule && rule.selectorText === "body") {
            const style = rule.style;
            for (let j = 0; j < style.length; j++) {
              const propertyName = style[j];
              if (propertyName.includes("--token")) {
                const value = style.getPropertyValue(propertyName);
                const combinedCssRule = `${propertyName}: ${value};`;
                lightThemeTokens.push(combinedCssRule);
              }
            }
          } else if ("conditionText" in rule && rule.conditionText === "(prefers-color-scheme: dark)") {
            const cssRules = rule.cssRules || [];
            if (cssRules.length > 0) {
              let mediaRulesString = cssRules[0].cssText;
              mediaRulesString = mediaRulesString.replace("body", "").replace(/\s*{\s*/, "").replace(/\s*}\s*$/, "");
              darkThemeTokens = mediaRulesString;
            }
          }
        }
      } catch (e) {
        console.warn("Cannot access stylesheet:", sheet.href);
      }
    }
    const styleElement = document.createElement("style");
    styleElement.id = "toggle-theme";
    const customCssRule = `body[toggle-theme="light"] {${lightThemeTokens.join(" ")}} body[toggle-theme="dark"]{${darkThemeTokens}} html[toggle-theme="light"] { color-scheme: light; } html[toggle-theme="dark"] { color-scheme: dark; }`;
    styleElement.textContent = customCssRule;
    document.head.appendChild(styleElement);
    startTransition(() => setIsInitialized(true));
    return () => {
      const existingStyleElement = document.getElementById("toggle-theme");
      if (existingStyleElement) {
        document.head.removeChild(existingStyleElement);
      }
      htmlElement.setAttribute("toggle-theme", "system");
      bodyElement.setAttribute("toggle-theme", "system");
    };
  }, [defaultTheme]);
  const handleClick = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    startTransition(() => setTheme(newTheme));
    changeTheme(newTheme);
  };
  const isLightMode = theme === "light";
  const buttonIconSize = size * 0.8;
  if (toggleType === "Button") {
    return /* @__PURE__ */ _jsx2("div", { onClick: handleClick, style: { display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "transform 0.3s ease", background: "transparent", border: "none", boxShadow: "none", padding: 0, width: "100%", height: "100%" }, onMouseEnter: (e) => {
      e.currentTarget.style.transform = "scale(1.1)";
    }, onMouseLeave: (e) => {
      e.currentTarget.style.transform = "scale(1)";
    }, children: isLightMode ? sunSvg ? /* @__PURE__ */ _jsx2(CustomIcon, { svgString: sunSvg, size: buttonIconSize, color: lightIconColor }) : /* @__PURE__ */ _jsx2(SunIcon, { size: buttonIconSize, color: lightIconColor }) : moonSvg ? /* @__PURE__ */ _jsx2(CustomIcon, { svgString: moonSvg, size: buttonIconSize, color: darkIconColor }) : /* @__PURE__ */ _jsx2(MoonIcon, { size: buttonIconSize, color: darkIconColor }) });
  }
  const switchWidth = size * 1.8;
  const switchHeight = size * 1;
  const knobSize = switchHeight * 0.8;
  const knobIconSize = knobSize * 0.6;
  const borderRadius = switchHeight / 2;
  return /* @__PURE__ */ _jsx2("button", { type: "button", "aria-pressed": isLightMode, onClick: handleClick, style: { width: switchWidth, height: switchHeight, background: isLightMode ? switchActiveColor : switchTrackColor, border: "none", borderRadius, position: "relative", cursor: "pointer", transition: "background 0.2s", boxShadow: isLightMode ? "0 1px 3px rgba(0,0,0,0.06)" : "0 2px 8px rgba(0,0,0,0.10)", outline: "none", padding: 0 }, children: /* @__PURE__ */ _jsx2("span", { style: { position: "absolute", top: (switchHeight - knobSize) / 2, left: isLightMode ? switchWidth - knobSize - (switchHeight - knobSize) / 2 : (switchHeight - knobSize) / 2, width: knobSize, height: knobSize, borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 1px 4px rgba(0,0,0,0.10)", transition: "left 0.2s cubic-bezier(.4,1.2,.6,1)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }, children: isLightMode ? sunSvg ? /* @__PURE__ */ _jsx2(CustomIcon, { svgString: sunSvg, size: knobIconSize, color: SunIconColor }) : /* @__PURE__ */ _jsx2(SunIcon, { size: knobIconSize, color: SunIconColor }) : moonSvg ? /* @__PURE__ */ _jsx2(CustomIcon, { svgString: moonSvg, size: knobIconSize, color: MoonIconColor }) : /* @__PURE__ */ _jsx2(MoonIcon, { size: knobIconSize, color: MoonIconColor }) }) });
}
addPropertyControls2(ThemeToggleButton, { toggleType: { type: ControlType2.Enum, title: "Toggle Type", options: ["Button", "Switch"], defaultValue: "Button" }, lightIconColor: { type: ControlType2.Color, title: "Sun button Icon Color", defaultValue: "#FF8C00", hidden: (props) => props.toggleType !== "Button" }, darkIconColor: { type: ControlType2.Color, title: "Moon button Icon Color", defaultValue: "#949494", hidden: (props) => props.toggleType !== "Button" }, SunIconColor: { type: ControlType2.Color, title: "Sun Icon Color", defaultValue: "#FF9100", hidden: (props) => props.toggleType !== "Switch" }, MoonIconColor: { type: ControlType2.Color, title: "Moon Icon Color", defaultValue: "#6B6B6B", hidden: (props) => props.toggleType !== "Switch" }, size: { type: ControlType2.Number, title: "Size", defaultValue: 60, min: 20, max: 120, step: 5 }, switchTrackColor: { type: ControlType2.Color, title: "Switch Track Color", defaultValue: "#424242", hidden: (props) => props.toggleType !== "Switch" }, switchActiveColor: { type: ControlType2.Color, title: "Switch Active Color", defaultValue: "#DBDBDB", hidden: (props) => props.toggleType !== "Switch" }, defaultTheme: { type: ControlType2.Enum, title: "Default Theme", options: ["Light", "Dark", "System"], defaultValue: "Light" }, sunSvg: { type: ControlType2.String, title: "Sun SVG", placeholder: "Paste your sun SVG code here...", displayTextArea: true }, moonSvg: { type: ControlType2.String, title: "Moon SVG", placeholder: "Paste your moon SVG code here...", displayTextArea: true } });

// http-url:https://framerusercontent.com/modules/MfCOl2etwi9plJmwQRxU/DOS1YdQPSC9sBuLQ84s5/JuXlAcTYU.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDMyLCAid2dodCIgNTAw", "Inter-VariableVF=Im9wc3oiIDMyLCAid2dodCIgNTAw", "Inter-VariableVF=Im9wc3oiIDMyLCAid2dodCIgNTAw"]);
var variationAxes = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts = [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes, weight: "400" }] }];
var css = [`.framer-XQkVb .framer-styles-preset-u404m1:not(.rich-text-wrapper), .framer-XQkVb .framer-styles-preset-u404m1.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'cv01' on, 'zero' on; --framer-font-size: calc(var(--framer-root-font-size, 1rem) * 1); --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 32, "wght" 500; --framer-font-variation-axes-bold: "opsz" 32, "wght" 500; --framer-font-variation-axes-bold-italic: "opsz" 32, "wght" 500; --framer-font-variation-axes-italic: "opsz" 32, "wght" 500; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-62689a45-76df-41c7-8fe5-84989f52cf65, rgba(5, 5, 5, 0.4)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1479px) and (min-width: 1200px) { .framer-XQkVb .framer-styles-preset-u404m1:not(.rich-text-wrapper), .framer-XQkVb .framer-styles-preset-u404m1.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'cv01' on, 'zero' on; --framer-font-size: calc(var(--framer-root-font-size, 1rem) * 0.88); --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 32, "wght" 500; --framer-font-variation-axes-bold: "opsz" 32, "wght" 500; --framer-font-variation-axes-bold-italic: "opsz" 32, "wght" 500; --framer-font-variation-axes-italic: "opsz" 32, "wght" 500; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-62689a45-76df-41c7-8fe5-84989f52cf65, rgba(5, 5, 5, 0.4)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-XQkVb .framer-styles-preset-u404m1:not(.rich-text-wrapper), .framer-XQkVb .framer-styles-preset-u404m1.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'cv01' on, 'zero' on; --framer-font-size: calc(var(--framer-root-font-size, 1rem) * 0.88); --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 32, "wght" 500; --framer-font-variation-axes-bold: "opsz" 32, "wght" 500; --framer-font-variation-axes-bold-italic: "opsz" 32, "wght" 500; --framer-font-variation-axes-italic: "opsz" 32, "wght" 500; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-62689a45-76df-41c7-8fe5-84989f52cf65, rgba(5, 5, 5, 0.4)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-XQkVb .framer-styles-preset-u404m1:not(.rich-text-wrapper), .framer-XQkVb .framer-styles-preset-u404m1.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'cv01' on, 'zero' on; --framer-font-size: calc(var(--framer-root-font-size, 1rem) * 0.88); --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 32, "wght" 500; --framer-font-variation-axes-bold: "opsz" 32, "wght" 500; --framer-font-variation-axes-bold-italic: "opsz" 32, "wght" 500; --framer-font-variation-axes-italic: "opsz" 32, "wght" 500; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-62689a45-76df-41c7-8fe5-84989f52cf65, rgba(5, 5, 5, 0.4)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className = "framer-XQkVb";

// http-url:https://framerusercontent.com/modules/qVWd0QzbLOLavMJFhy9C/JO7sUMyGomAgUQ8eZhlM/neFarf4nR.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
fontStore2.loadFonts([]);
var fonts2 = [{ explicitInter: true, fonts: [] }];
var css2 = [".framer-1bviB .framer-styles-preset-1s8kvuv:not(.rich-text-wrapper), .framer-1bviB .framer-styles-preset-1s8kvuv.rich-text-wrapper a { --framer-link-hover-text-background-radius: 6px; --framer-link-hover-text-color: var(--token-2b7faeed-e911-4f62-8cb0-d9e5a8605d16, rgba(5, 5, 5, 0.6)); --framer-link-text-background-color: var(--token-9a5db63e-5e24-4d67-8f54-689f8c2c7dca, #e6e6e6); --framer-link-text-background-padding: 0px 4px 0px 4px; --framer-link-text-background-radius: 6px; --framer-link-text-color: var(--token-a8ff9d6c-5d23-49d8-9264-3793f030258f, #050505); transition-delay: 0s; transition-duration: 0.4s; transition-property: color,background-color,border-radius; transition-timing-function: cubic-bezier(0.12, 0.23, 0.5, 1); }"];
var className2 = "framer-1bviB";

// http-url:https://framerusercontent.com/modules/7GfucdA9ejqyXNh6sGPO/fxpjICNvyN0l4yPVNqn6/D7IfuCeKS.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
var serializationHash = "framer-6JXoF";
var variantClassNames = { Bu06Wughj: "framer-v-177ar62" };
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ color, height, id, width, ...props }) => {
  return { ...props, uK_o4caD_: color ?? props.uK_o4caD_ ?? "var(--token-8d6211f0-201f-4d59-a783-41940afd73af, rgba(5, 5, 5, 0.1))" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className3, layoutId, variant, uK_o4caD_, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "Bu06Wughj", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx3(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition, { value: transition1, children: /* @__PURE__ */ _jsx3(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-177ar62", className3, classNames), "data-framer-name": "Divider", layoutDependency, layoutId: "Footer__Bu06Wughj", ref: refBinding, style: { backgroundColor: uK_o4caD_, ...style } }) }) }) });
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-6JXoF.framer-li6d2i, .framer-6JXoF .framer-li6d2i { display: block; }", ".framer-6JXoF.framer-177ar62 { height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }"];
var FramerD7IfuCeKS = withCSS(Component, css3, "framer-6JXoF");
var D7IfuCeKS_default = FramerD7IfuCeKS;
FramerD7IfuCeKS.displayName = "Page Divider";
FramerD7IfuCeKS.defaultProps = { height: 1, width: 640 };
addPropertyControls3(FramerD7IfuCeKS, { uK_o4caD_: { defaultValue: 'var(--token-8d6211f0-201f-4d59-a783-41940afd73af, rgba(5, 5, 5, 0.1)) /* {"name":"Black 10%"} */', title: "Color", type: ControlType3.Color } });
addFonts(FramerD7IfuCeKS, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/XXgUH7Y9HcJuhY3fYP1h/I6gTxpJCuVGbEdWTOseV/uzposeN0S.js
var PageDividerFonts = getFonts(D7IfuCeKS_default);
var ThemeToggleButtonFonts = getFonts(ThemeToggleButton);
var AutoCopyrightFonts = getFonts(AutoCopyright);
var cycleOrder = ["CHWCP6Vpz", "CwsFJHwTM", "B0E0oMPXT", "BjHXoEuJB"];
var serializationHash2 = "framer-5apBl";
var variantClassNames2 = { B0E0oMPXT: "framer-v-8v1eb0", BjHXoEuJB: "framer-v-2j0cng", CHWCP6Vpz: "framer-v-jcyhi3", CwsFJHwTM: "framer-v-tixlna" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition2 = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion2.create(React2.Fragment);
var humanReadableVariantMap = { "Desktop L": "CwsFJHwTM", Desktop: "CHWCP6Vpz", Phone: "BjHXoEuJB", Tablet: "B0E0oMPXT" };
var getProps2 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "CHWCP6Vpz" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className3, layoutId, variant, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder, defaultVariant: "CHWCP6Vpz", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [className, className2];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (["B0E0oMPXT", "BjHXoEuJB"].includes(baseVariant))
      return false;
    return true;
  };
  return /* @__PURE__ */ _jsx4(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx4(motion2.footer, { ...restProps, ...gestureHandlers, className: cx2(scopingClassNames, "framer-jcyhi3", className3, classNames), "data-framer-name": "Desktop", layoutDependency, layoutId: "Footer__CHWCP6Vpz", ref: refBinding, style: { ...style }, ...addPropertyOverrides({ B0E0oMPXT: { "data-framer-name": "Tablet" }, BjHXoEuJB: { "data-framer-name": "Phone" }, CwsFJHwTM: { "data-framer-name": "Desktop L" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsxs2(motion2.div, { className: "framer-l4zo3q", "data-framer-name": "Content", layoutDependency, layoutId: "Footer__ldRZrqFBC", children: [/* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 1, width: `min(${componentViewport?.width || "100vw"} - 80px, 640px)`, y: (componentViewport?.y || 0) + 40 + (((componentViewport?.height || 299) - 200 - 457) / 2 + 0 + 0) + 0 + 0, ...addPropertyOverrides({ B0E0oMPXT: { y: (componentViewport?.y || 0) + 40 + (((componentViewport?.height || 330.5) - 200 - 311.4) / 2 + 0 + 0) + 0 + 0 }, BjHXoEuJB: { width: `min(${componentViewport?.width || "100vw"} - 40px, 640px)`, y: (componentViewport?.y || 0) + 40 + (((componentViewport?.height || 200) - 200 - 311.4) / 2 + 0 + 0) + 0 + 0 }, CwsFJHwTM: { y: (componentViewport?.y || 0) + 40 + (((componentViewport?.height || 200) - 200 - 457) / 2 + 0 + 0) + 0 + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-wdbf1z-container", layoutDependency, layoutId: "Footer__MwzaxZIgp-container", nodeId: "MwzaxZIgp", rendersWithMotion: true, scopeId: "uzposeN0S", children: /* @__PURE__ */ _jsx4(D7IfuCeKS_default, { height: "100%", id: "MwzaxZIgp", layoutId: "Footer__MwzaxZIgp", style: { height: "100%", width: "100%" }, uK_o4caD_: "var(--token-8d6211f0-201f-4d59-a783-41940afd73af, rgba(5, 5, 5, 0.1))", width: "100%" }) }) }), /* @__PURE__ */ _jsxs2(motion2.div, { className: "framer-vyxfdm", "data-framer-name": "Content", layoutDependency, layoutId: "Footer__KCkX4IAGe", children: [/* @__PURE__ */ _jsxs2(motion2.div, { className: "framer-7e72rl", "data-framer-name": "Top", layoutDependency, layoutId: "Footer__XTJLc1CMg", children: [/* @__PURE__ */ _jsx4(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React2.Fragment, { children: /* @__PURE__ */ _jsx4(motion2.p, { className: "framer-styles-preset-u404m1", "data-styles-preset": "JuXlAcTYU", children: "Rome, Italy CET (UTC +1)" }) }), className: "framer-4phgj3", fonts: ["Inter"], layoutDependency, layoutId: "Footer__fMAgopOBe", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), isDisplayed() && /* @__PURE__ */ _jsx4(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-1q5agjw-container", "data-code-component-plugin-id": "84d4c1", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Footer__FS3mHZG8W-container", nodeId: "FS3mHZG8W", rendersWithMotion: true, scopeId: "uzposeN0S", children: /* @__PURE__ */ _jsx4(ThemeToggleButton, { darkIconColor: "var(--token-62689a45-76df-41c7-8fe5-84989f52cf65, rgba(5, 5, 5, 0.4))", defaultTheme: "Light", height: "100%", id: "FS3mHZG8W", layoutId: "Footer__FS3mHZG8W", lightIconColor: "var(--token-e20f6da7-998a-49cf-bede-6849c476b2ae, rgb(255, 140, 0))", MoonIconColor: "var(--token-b1267501-1441-4eeb-b00f-1f97d88a1f91, rgb(255, 255, 255))", moonSvg: "", size: 20, SunIconColor: "var(--token-a8ff9d6c-5d23-49d8-9264-3793f030258f, rgb(5, 5, 5))", sunSvg: "", switchActiveColor: "var(--token-80e2e877-1770-4709-9301-042f006e9d76, rgb(205, 205, 205))", switchTrackColor: "var(--token-80e2e877-1770-4709-9301-042f006e9d76, rgb(205, 205, 205))", toggleType: "Switch", width: "100%" }) }) })] }), /* @__PURE__ */ _jsxs2(motion2.div, { className: "framer-qagy6l", "data-framer-name": "Bottom", layoutDependency, layoutId: "Footer__s9NKDebhy", children: [/* @__PURE__ */ _jsx4(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-16lf41y-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Footer__dtW32jmXB-container", nodeId: "dtW32jmXB", rendersWithMotion: true, scopeId: "uzposeN0S", children: /* @__PURE__ */ _jsx4(AutoCopyright, { color: "var(--token-62689a45-76df-41c7-8fe5-84989f52cf65, rgba(5, 5, 5, 0.4))", dateRange: false, font: { fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif', fontFeatureSettings: "'ss09' on, 'cv01' on, 'zero' on", fontSize: "16px", fontStyle: "normal", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: "1.2em" }, height: "100%", id: "dtW32jmXB", layoutId: "Footer__dtW32jmXB", name: "", startYear: 2023, statement: " All rights reserved", width: "100%" }) }) }), /* @__PURE__ */ _jsx4(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React2.Fragment, { children: /* @__PURE__ */ _jsxs2(motion2.p, { className: "framer-styles-preset-u404m1", "data-styles-preset": "JuXlAcTYU", children: ["Built in ", /* @__PURE__ */ _jsx4(Link, { href: "framer.com", motionChild: true, nodeId: "LN_YpYo4j", openInNewTab: true, relValues: [], scopeId: "uzposeN0S", smoothScroll: false, children: /* @__PURE__ */ _jsx4(motion2.a, { className: "framer-styles-preset-1s8kvuv", "data-styles-preset": "neFarf4nR", children: "Framer" }) }), " - By ", /* @__PURE__ */ _jsx4(Link, { href: "x.com/fedexesposito", motionChild: true, nodeId: "LN_YpYo4j", openInNewTab: true, preserveParams: false, relValues: [], scopeId: "uzposeN0S", smoothScroll: false, children: /* @__PURE__ */ _jsx4(motion2.a, { className: "framer-styles-preset-1s8kvuv", "data-styles-preset": "neFarf4nR", children: "Federico Esposito" }) })] }) }), className: "framer-1o1rbu3", fonts: ["Inter"], layoutDependency, layoutId: "Footer__LN_YpYo4j", verticalAlignment: "top", withExternalLayout: true })] })] })] }) }) }) }) });
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-5apBl.framer-1hf0njn, .framer-5apBl .framer-1hf0njn { display: block; }", ".framer-5apBl.framer-jcyhi3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 40px 40px 160px 40px; position: relative; width: 100%; }", ".framer-5apBl .framer-l4zo3q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 640px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-5apBl .framer-wdbf1z-container { flex: none; height: 1px; position: relative; width: 100%; }", ".framer-5apBl .framer-vyxfdm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-5apBl .framer-7e72rl, .framer-5apBl .framer-qagy6l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-5apBl .framer-4phgj3, .framer-5apBl .framer-1o1rbu3 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-5apBl .framer-1q5agjw-container, .framer-5apBl .framer-16lf41y-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-5apBl.framer-v-tixlna.framer-jcyhi3 { width: 100%; }", ".framer-5apBl.framer-v-8v1eb0.framer-jcyhi3 { width: 100%; }", ".framer-5apBl.framer-v-8v1eb0 .framer-qagy6l, .framer-5apBl.framer-v-2j0cng .framer-qagy6l { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; justify-content: center; }", ".framer-5apBl.framer-v-2j0cng.framer-jcyhi3 { padding: 40px 20px 160px 20px; width: 100%; }", ...css, ...css2];
var FrameruzposeN0S = withCSS2(Component2, css4, "framer-5apBl");
var uzposeN0S_default = FrameruzposeN0S;
FrameruzposeN0S.displayName = "Footer";
FrameruzposeN0S.defaultProps = { height: 299, width: 1200 };
addPropertyControls4(FrameruzposeN0S, { variant: { options: ["CHWCP6Vpz", "CwsFJHwTM", "B0E0oMPXT", "BjHXoEuJB"], optionTitles: ["Desktop", "Desktop L", "Tablet", "Phone"], title: "Variant", type: ControlType4.Enum } });
addFonts2(FrameruzposeN0S, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }, { family: "Inter Display", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2", weight: "500" }, { family: "Inter Display", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2", weight: "500" }, { family: "Inter Display", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2", weight: "500" }, { family: "Inter Display", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2", weight: "500" }, { family: "Inter Display", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2", weight: "500" }, { family: "Inter Display", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/iwWTDc49ENF2tCHbqlNARXw6Ug.woff2", weight: "500" }, { family: "Inter Display", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2", weight: "500" }] }, ...PageDividerFonts, ...ThemeToggleButtonFonts, ...AutoCopyrightFonts, ...getFontsFromSharedStyle(fonts), ...getFontsFromSharedStyle(fonts2)], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FrameruzposeN0S", "slots": [], "annotations": { "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"CwsFJHwTM":{"layout":["fixed","auto"]},"B0E0oMPXT":{"layout":["fixed","auto"]},"BjHXoEuJB":{"layout":["fixed","auto"]}}}', "framerColorSyntax": "true", "framerContractVersion": "1", "framerImmutableVariables": "true", "framerIntrinsicWidth": "1200", "framerDisplayContentsDiv": "false", "framerComponentViewportWidth": "true", "framerIntrinsicHeight": "299", "framerAutoSizeImages": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  uzposeN0S_default as default
};
