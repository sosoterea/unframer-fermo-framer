var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/D3600Q7vZlhJDoXAVXqa/sdF9OGsj4fc208p3V8Aq/YW0DzBCMC.js
import { jsx as _jsx5, jsxs as _jsxs4 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls5, ComponentViewportProvider as ComponentViewportProvider2, ControlType as ControlType5, cx as cx3, Fetcher, getFonts as getFonts2, getLoadingLazyAtYPosition, getPropertyControls, Image, RichText as RichText2, SmartComponentScopedContainer as SmartComponentScopedContainer2, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, usePrefetch, usePreloadQuery, useVariantState as useVariantState3, withCSS as withCSS3 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React3 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/eqZKHdhfmZHquHmmXviz/12l46RthXczxw3NYyCqS/TimeWeather.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, startTransition, useMemo } from "react";
import { addPropertyControls, ControlType } from "./_framer-runtime.js";
function TimeWeather(props) {
  const { locationName, showLocation, showTime, useVisitorTime, timeZone, use24HourFormat, showMinutes, showSeconds, showTemperature, showConditions, showWeatherIcon, temperatureUnit, autoRefresh, refreshInterval, textColor, font, style } = props;
  const [currentTime, setCurrentTime] = useState(/* @__PURE__ */ new Date());
  const [weatherData, setWeatherData] = useState({ temperature: null, weathercode: null, weather: null, isLoading: true, error: null });
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  useEffect(() => {
    const geocodeLocation = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(locationName)}&limit=1&appid=8bd63e1fc4928d5f66a889fd32bd3f35`);
        if (!response.ok) {
          throw new Error("Failed to geocode location");
        }
        const data = await response.json();
        if (data && data.length > 0) {
          startTransition(() => {
            setCoordinates({ latitude: data[0].lat, longitude: data[0].lon });
          });
        } else {
          throw new Error("Location not found");
        }
      } catch (error) {
        startTransition(() => {
          setWeatherData({ temperature: null, weathercode: null, isLoading: false, error: "Failed to find location" });
        });
      }
    };
    geocodeLocation();
  }, [locationName]);
  useEffect(() => {
    if (!coordinates.latitude || !coordinates.longitude)
      return;
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&appid=8bd63e1fc4928d5f66a889fd32bd3f35`);
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        startTransition(() => {
          setWeatherData({ temperature: data.main.temp, weathercode: data.weather[0].id, weather: data.weather, isLoading: false, error: null });
        });
      } catch (error) {
        startTransition(() => {
          setWeatherData({ temperature: null, weathercode: null, isLoading: false, error: "Failed to fetch weather data" });
        });
      }
    };
    fetchWeatherData();
  }, [coordinates.latitude, coordinates.longitude]);
  useEffect(() => {
    if (!autoRefresh || !coordinates.latitude || !coordinates.longitude)
      return;
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&appid=8bd63e1fc4928d5f66a889fd32bd3f35`);
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        startTransition(() => {
          setWeatherData({ temperature: data.main.temp, weathercode: data.weather[0].id, weather: data.weather, isLoading: false, error: null });
        });
      } catch (error) {
        console.error("Error refreshing weather data:", error);
      }
    };
    const refreshIntervalId = setInterval(fetchWeather, refreshInterval * 6e4);
    return () => clearInterval(refreshIntervalId);
  }, [autoRefresh, refreshInterval, coordinates.latitude, coordinates.longitude]);
  useEffect(() => {
    if (!showTime)
      return;
    const intervalId = setInterval(() => {
      startTransition(() => {
        setCurrentTime(/* @__PURE__ */ new Date());
      });
    }, 1e3);
    return () => clearInterval(intervalId);
  }, [showTime]);
  const formattedTime = useMemo(() => {
    if (!showTime)
      return "";
    const options = { hour: "numeric", minute: showMinutes ? "2-digit" : void 0, second: showSeconds ? "2-digit" : void 0, hour12: !use24HourFormat, timeZone: useVisitorTime ? void 0 : timeZone || void 0 };
    let timeString = currentTime.toLocaleTimeString(void 0, options);
    if (!use24HourFormat) {
      timeString = timeString.replace(/\b(am|pm)\b/i, (match) => match.toUpperCase());
    }
    return timeString;
  }, [currentTime, showTime, showMinutes, showSeconds, use24HourFormat, useVisitorTime, timeZone]);
  const formattedTemperature = useMemo(() => {
    if (!showTemperature || weatherData.temperature === null)
      return "";
    let temp = weatherData.temperature;
    if (temperatureUnit === "fahrenheit") {
      temp = temp * 9 / 5 + 32;
    }
    return `${Math.round(temp)}\xB0${temperatureUnit === "celsius" ? "C" : "F"}`;
  }, [weatherData.temperature, showTemperature, temperatureUnit]);
  const weatherCondition = useMemo(() => {
    if (!showConditions || weatherData.weathercode === null)
      return "";
    const getWeatherCondition = (code) => {
      if (code >= 200 && code < 300)
        return "Thunderstorm";
      if (code >= 300 && code < 400)
        return "Drizzle";
      if (code >= 500 && code < 600)
        return "Rain";
      if (code >= 600 && code < 700)
        return "Snow";
      if (code >= 700 && code < 800)
        return "Foggy";
      if (code === 800)
        return "Clear sky";
      if (code > 800)
        return "Cloudy";
      return "Unknown";
    };
    return getWeatherCondition(weatherData.weathercode);
  }, [weatherData.weathercode, showConditions]);
  const weatherIcon = useMemo(() => {
    if (!showWeatherIcon || weatherData.weathercode === null)
      return null;
    const iconCode = weatherData.weather?.[0]?.icon || "01d";
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }, [weatherData, showWeatherIcon]);
  const timeParts = [];
  const weatherParts = [];
  if (showLocation && locationName) {
    weatherParts.push(locationName);
  }
  if (showTime) {
    timeParts.push(formattedTime);
  }
  if (showTemperature && formattedTemperature) {
    weatherParts.push(formattedTemperature);
  }
  if (showConditions && weatherCondition) {
    weatherParts.push(weatherCondition);
  }
  const displayText = (weatherParts.length > 0 ? weatherParts[0] + " \u2022 " : "") + (timeParts.length > 0 ? timeParts.join(" ") : "") + (weatherParts.length > 1 ? ", " + weatherParts.slice(1).join(", ") : "");
  let statusText = "";
  if (weatherData.isLoading) {
    statusText = "Loading weather data...";
  } else if (weatherData.error) {
    statusText = weatherData.error;
  }
  return /* @__PURE__ */ _jsxs("div", { style: { position: "relative", display: "inline-flex", alignItems: "center", color: textColor, ...font, ...style, minWidth: "max-content" }, children: [/* @__PURE__ */ _jsx("span", { children: statusText || displayText }), showWeatherIcon && weatherIcon && /* @__PURE__ */ _jsx("img", { src: weatherIcon, alt: weatherCondition, style: { width: "1.5em", height: "1.5em", verticalAlign: "middle" } })] });
}
addPropertyControls(TimeWeather, {
  // Location controls
  locationName: { type: ControlType.String, title: "Location", defaultValue: "New York" },
  showLocation: { type: ControlType.Boolean, title: "Show Loc.", defaultValue: true },
  // Time controls
  showTime: { type: ControlType.Boolean, title: "Show Time", defaultValue: true },
  useVisitorTime: { type: ControlType.Boolean, title: "Visitor Time", defaultValue: true, description: "Show the time in your visitor's location or the time in the chosen city", hidden: ({ showTime }) => !showTime },
  timeZone: { type: ControlType.String, title: "Time Zone", defaultValue: "America/New_York", placeholder: "e.g. Europe/London", hidden: ({ showTime, useVisitorTime }) => !showTime || useVisitorTime },
  use24HourFormat: { type: ControlType.Boolean, title: "24h Format", defaultValue: false, hidden: ({ showTime }) => !showTime },
  showMinutes: { type: ControlType.Boolean, title: "Minutes", defaultValue: true, hidden: ({ showTime }) => !showTime },
  showSeconds: { type: ControlType.Boolean, title: "Seconds", defaultValue: false, hidden: ({ showTime }) => !showTime },
  // Weather controls
  showTemperature: { type: ControlType.Boolean, title: "Temperature", defaultValue: true },
  temperatureUnit: { type: ControlType.Enum, title: "Unit", options: ["celsius", "fahrenheit"], optionTitles: ["\xB0C", "\xB0F"], defaultValue: "celsius", displaySegmentedControl: true, hidden: ({ showTemperature }) => !showTemperature },
  showConditions: { type: ControlType.Boolean, title: "Conditions", defaultValue: true },
  showWeatherIcon: { type: ControlType.Boolean, title: "Show Icon", defaultValue: true },
  // Refresh controls
  autoRefresh: { type: ControlType.Boolean, title: "Auto Refresh", defaultValue: true },
  refreshInterval: { type: ControlType.Number, title: "Interval (min)", defaultValue: 15, min: 1, max: 60, step: 1, displayStepper: true, hidden: ({ autoRefresh }) => !autoRefresh },
  // Styling controls
  textColor: { type: ControlType.Color, title: "Text Color", defaultValue: "#000000" },
  font: { type: ControlType.Font, title: "Font", defaultValue: { fontSize: "16px", lineHeight: "1.5em", letterSpacing: "0em", variant: "Medium" }, controls: "extended", defaultFontType: "sans-serif", description: "Made by [Upper Left Studio](https://upperleft.design/?utm_source=component&utm_medium=resource)." }
});

// http-url:https://framerusercontent.com/modules/HYcHVPAbe8jLEeU7c4mp/QiycTxX7vdblEOi3o00G/Time.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType2, RenderTarget, useLocaleCode } from "./_framer-runtime.js";
import { startTransition as startTransition2, useCallback, useEffect as useEffect2, useRef, useState as useState2 } from "react";
var fontStack = `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
function formatTimeOrDate(outputType, { showYear, showMonth, showWeekday, showMinutes, showSeconds }, timeFormat, monthFormat, localCode) {
  const date = /* @__PURE__ */ new Date();
  const onlyYearIsShown = !showWeekday && !showMonth && showYear;
  switch (outputType) {
    case "date":
      return new Intl.DateTimeFormat(localCode, { weekday: showWeekday ? "long" : void 0, day: onlyYearIsShown ? void 0 : "numeric", month: showMonth ? monthFormat : void 0, year: showYear ? "numeric" : void 0 }).format(date);
    case "time":
      return new Intl.DateTimeFormat(localCode, { hour: "numeric", minute: showMinutes ? "numeric" : void 0, second: showSeconds && showMinutes ? "numeric" : void 0, hour12: timeFormat === "12h" }).format(date);
    default:
      return new Intl.DateTimeFormat(localCode).format(date);
  }
}
var defaultProps = { height: 20, width: 140, outputType: "time", color: "#999", timeFormat: "24h", showYear: true, showMonth: true, showWeekday: true, showMinutes: true, showSeconds: true, monthFormat: "long", alignment: "center" };
function Time(props) {
  const mergedProps = { ...defaultProps, ...props };
  const {
    outputType,
    timeFormat,
    showYear,
    showMonth,
    showWeekday,
    // showHours,
    showMinutes,
    showSeconds,
    monthFormat,
    color,
    font,
    tabularFont
  } = mergedProps;
  const localCode = useLocaleCode();
  const getTextContent = useCallback(() => formatTimeOrDate(outputType, {
    showYear,
    showMonth,
    showWeekday,
    // showHours,
    showMinutes,
    showSeconds
  }, timeFormat, monthFormat, localCode), [localCode, monthFormat, outputType, showMinutes, showMonth, showSeconds, showWeekday, showYear, timeFormat]);
  const timeoutRef = useRef();
  const updateCountdown = useCallback((node) => {
    if (node === null) {
      clearTimeout(timeoutRef.current);
      return;
    }
    let prev;
    const tick = () => {
      const date = /* @__PURE__ */ new Date();
      const next = (/* @__PURE__ */ new Date()).setSeconds(date.getSeconds() + 1, 0) - +date;
      timeoutRef.current = setTimeout(tick, next);
      const textContent = getTextContent();
      if (prev !== textContent) {
        node.textContent = textContent;
        prev = textContent;
      }
    };
    tick();
  }, [getTextContent]);
  const [visible, setIsVisible] = useState2(false);
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  useEffect2(() => {
    startTransition2(() => setIsVisible(true));
    if (isCanvas)
      return;
  }, [isCanvas]);
  return /* @__PURE__ */ _jsx2("p", { suppressHydrationWarning: true, style: { margin: 0, padding: 0, color, fontFamily: fontStack, fontWeight: 500, fontSize: 16, lineHeight: 1, visibility: visible ? "visible" : "hidden", ...font, fontVariantNumeric: tabularFont ? "tabular-nums" : "normal", whiteSpace: "nowrap" }, ref: isCanvas ? void 0 : updateCountdown, children: getTextContent() });
}
Time.displayName = "Time & Date";
addPropertyControls2(Time, {
  outputType: { title: "Type", type: ControlType2.Enum, displaySegmentedControl: true, options: ["date", "time"], optionTitles: ["Date", "Time"], defaultValue: defaultProps.outputType },
  showWeekday: { title: "Day", type: ControlType2.Boolean, enabledTitle: "Show", disabledTitle: "Hide", defaultValue: defaultProps.showWeekday, hidden: (props) => props.outputType !== "date" },
  showMonth: { title: "Month", type: ControlType2.Boolean, enabledTitle: "Show", disabledTitle: "Hide", defaultValue: defaultProps.showMonth, hidden: (props) => props.outputType !== "date" },
  monthFormat: { title: "Format", type: ControlType2.Enum, options: ["short", "long", "numeric"], optionTitles: ["Short", "Long", "Numeric"], defaultValue: defaultProps.monthFormat, hidden: (props) => props.outputType !== "date" || !props.showMonth },
  showYear: { title: "Year", type: ControlType2.Boolean, enabledTitle: "Show", disabledTitle: "Hide", defaultValue: defaultProps.showYear, hidden: (props) => props.outputType !== "date" },
  timeFormat: { title: "Format", type: ControlType2.Enum, options: ["12h", "24h"], optionTitles: ["12h", "24h"], displaySegmentedControl: true, defaultValue: defaultProps.timeFormat, hidden: (props) => props.outputType !== "time" },
  // showHours: {
  //     title: "Hours",
  //     type: ControlType.Boolean,
  //     enabledTitle: "Show",
  //     disabledTitle: "Hide",
  //     defaultValue: defaultProps.showHours,
  //     hidden: (props) => props.outputType !== "time",
  // },
  showMinutes: { title: "Minutes", type: ControlType2.Boolean, enabledTitle: "Show", disabledTitle: "Hide", defaultValue: defaultProps.showMinutes, hidden: (props) => props.outputType !== "time" },
  showSeconds: { title: "Seconds", type: ControlType2.Boolean, enabledTitle: "Show", disabledTitle: "Hide", defaultValue: defaultProps.showSeconds, hidden: (props) => props.outputType !== "time" || !props.showMinutes },
  font: { type: ControlType2.Font, controls: "extended" },
  tabularFont: { title: "Tabular", type: ControlType2.Boolean, defaultValue: true },
  color: { type: ControlType2.Color, defaultValue: defaultProps.color }
});

// http-url:https://framerusercontent.com/modules/6FkXfDgwRgsLvEzOrvcL/tLhoRxLG1zHvc9m7PI6I/D3v1TIvUB.js
import { jsx as _jsx4, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls4, ComponentViewportProvider, ControlType as ControlType4, cx as cx2, getFonts, RichText, SmartComponentScopedContainer, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React2 from "react";
import { useRef as useRef3 } from "react";

// http-url:https://framerusercontent.com/modules/rUPAaCanMp4As2qUUxms/6jtPn0PQpERWq6wB3Olo/SPDpo8QkO.js
import { jsx as _jsx3, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useOnVariantChange, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef as useRef2 } from "react";
var cycleOrder = ["SjImHe1mt", "kro68op9e", "N7x44JQmd"];
var serializationHash = "framer-kuK8S";
var variantClassNames = { kro68op9e: "framer-v-1vqo3ih", N7x44JQmd: "framer-v-gl1mfd", SjImHe1mt: "framer-v-yj662" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { duration: 0, type: "tween" };
var transition2 = { delay: 0, duration: 0.7, ease: [0.12, 0.23, 0.5, 1], type: "tween" };
var transformTemplate1 = (_, t) => `translate(-50%, -50%) ${t}`;
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = { "Available-2": "kro68op9e", Available: "SjImHe1mt", Unavailable: "N7x44JQmd" };
var getProps = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "SjImHe1mt" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "SjImHe1mt", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onAppearmjwup1 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("kro68op9e"), 1e3);
  });
  const onAppear1kw2i04 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("SjImHe1mt"), 1e3);
  });
  useOnVariantChange(baseVariant, { default: onAppearmjwup1, kro68op9e: onAppear1kw2i04, N7x44JQmd: void 0 });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx3(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition, { value: transition1, ...addPropertyOverrides({ kro68op9e: { value: transition2 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx3(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-yj662", className, classNames), "data-framer-name": "Available", "data-highlight": true, layoutDependency, layoutId: "DynamicInfo__SjImHe1mt", ref: refBinding, style: { ...style }, ...addPropertyOverrides({ kro68op9e: { "data-framer-name": "Available-2" }, N7x44JQmd: { "data-framer-name": "Unavailable", "data-highlight": void 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsxs2(motion.div, { className: "framer-13b2sao", "data-framer-name": "Pulser", layoutDependency, layoutId: "DynamicInfo__Vk1iLY1ET", children: [/* @__PURE__ */ _jsx3(motion.div, { className: "framer-17j0gbx", "data-framer-name": "Pulsing", layoutDependency, layoutId: "DynamicInfo__DYqDoek3F", style: { backgroundColor: "rgb(0, 255, 111)", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, opacity: 0.5 }, variants: { kro68op9e: { borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100, opacity: 0 }, N7x44JQmd: { backgroundColor: "rgb(237, 49, 49)" } }, ...addPropertyOverrides({ kro68op9e: { transformTemplate: transformTemplate1 } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx3(motion.div, { className: "framer-13z6ewr", "data-framer-name": "Solid", layoutDependency, layoutId: "DynamicInfo__gljuONmb1", style: { backgroundColor: "rgb(0, 255, 111)", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, boxShadow: "0px 0px 20px 0px rgba(80, 112, 86, 0.5)" }, variants: { kro68op9e: { borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100 }, N7x44JQmd: { backgroundColor: "rgb(237, 49, 49)", boxShadow: "0px 0px 20px 0px rgba(237, 49, 49, 0.5)" } } })] }) }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-kuK8S.framer-yqeoto, .framer-kuK8S .framer-yqeoto { display: block; }", ".framer-kuK8S.framer-yj662 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-kuK8S .framer-13b2sao { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 6px); overflow: visible; position: relative; width: 6px; }", ".framer-kuK8S .framer-17j0gbx { flex: none; height: 6px; left: calc(50.00000000000002% - 6px / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 6px / 2); width: 6px; will-change: var(--framer-will-change-override, transform); }", ".framer-kuK8S .framer-13z6ewr { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); }", ".framer-kuK8S.framer-v-1vqo3ih .framer-17j0gbx { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 48px); left: 50%; top: 50%; width: 48px; }"];
var FramerSPDpo8QkO = withCSS(Component, css, "framer-kuK8S");
var SPDpo8QkO_default = FramerSPDpo8QkO;
FramerSPDpo8QkO.displayName = "Availability";
FramerSPDpo8QkO.defaultProps = { height: 6, width: 6 };
addPropertyControls3(FramerSPDpo8QkO, { variant: { options: ["SjImHe1mt", "kro68op9e", "N7x44JQmd"], optionTitles: ["Available", "Available-2", "Unavailable"], title: "Variant", type: ControlType3.Enum } });
addFonts(FramerSPDpo8QkO, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/6FkXfDgwRgsLvEzOrvcL/tLhoRxLG1zHvc9m7PI6I/D3v1TIvUB.js
var AvailabilityFonts = getFonts(SPDpo8QkO_default);
var cycleOrder2 = ["xABOqNYjB", "Z5KYprq3t"];
var serializationHash2 = "framer-XoSbO";
var variantClassNames2 = { xABOqNYjB: "framer-v-1s2dqpq", Z5KYprq3t: "framer-v-1107eqt" };
function addPropertyOverrides2(overrides, ...variants) {
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
var humanReadableVariantMap2 = { Available: "xABOqNYjB", Unavailabe: "Z5KYprq3t" };
var getProps2 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "xABOqNYjB" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className, layoutId, variant, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder: cycleOrder2, defaultVariant: "xABOqNYjB", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx4(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition2, { value: transition12, children: /* @__PURE__ */ _jsxs3(motion2.div, { ...restProps, ...gestureHandlers, className: cx2(scopingClassNames, "framer-1s2dqpq", className, classNames), "data-framer-name": "Available", layoutDependency, layoutId: "DynamicInfo__xABOqNYjB", ref: refBinding, style: { ...style }, ...addPropertyOverrides2({ Z5KYprq3t: { "data-framer-name": "Unavailabe" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 6, y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 19.5) - 0 - 6) / 2), children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-mdmmwc-container", layoutDependency, layoutId: "DynamicInfo__CBuDBb6GQ-container", nodeId: "CBuDBb6GQ", rendersWithMotion: true, scopeId: "D3v1TIvUB", children: /* @__PURE__ */ _jsx4(SPDpo8QkO_default, { height: "100%", id: "CBuDBb6GQ", layoutId: "DynamicInfo__CBuDBb6GQ", variant: "SjImHe1mt", width: "100%", ...addPropertyOverrides2({ Z5KYprq3t: { variant: "N7x44JQmd" } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx4(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React2.Fragment, { children: /* @__PURE__ */ _jsx4(motion2.p, { style: { "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": '"Inter Variable", "Inter Placeholder", sans-serif', "--framer-font-size": "14px", "--framer-font-variation-axes": 'var(--extracted-2gg91v, "opsz" 32, "wght" 500)', "--framer-letter-spacing": "-0.04em", "--framer-line-height": "1.4em", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, rgb(0, 255, 111))" }, children: "Available" }) }), className: "framer-1gt14v", fonts: ["Inter-Variable"], layoutDependency, layoutId: "DynamicInfo__bv_LnAlNZ", style: { "--extracted-2gg91v": '"opsz" 32, "wght" 500', "--extracted-r6o4lv": "rgb(0, 255, 111)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, variants: { Z5KYprq3t: { "--extracted-r6o4lv": "rgb(255, 0, 0)" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides2({ Z5KYprq3t: { children: /* @__PURE__ */ _jsx4(React2.Fragment, { children: /* @__PURE__ */ _jsx4(motion2.p, { style: { "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": '"Inter Variable", "Inter Placeholder", sans-serif', "--framer-font-size": "14px", "--framer-font-variation-axes": 'var(--extracted-2gg91v, "opsz" 32, "wght" 500)', "--framer-letter-spacing": "-0.04em", "--framer-line-height": "1.4em", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 0, 0))" }, children: "Unavailable" }) }) } }, baseVariant, gestureVariant) })] }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-XoSbO.framer-1luc4iu, .framer-XoSbO .framer-1luc4iu { display: block; }", ".framer-XoSbO.framer-1s2dqpq { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-XoSbO .framer-mdmmwc-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-XoSbO .framer-1gt14v { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: relative; user-select: none; white-space: pre; width: auto; }"];
var FramerD3v1TIvUB = withCSS2(Component2, css2, "framer-XoSbO");
var D3v1TIvUB_default = FramerD3v1TIvUB;
FramerD3v1TIvUB.displayName = "Avialability Badge";
FramerD3v1TIvUB.defaultProps = { height: 19.5, width: 60.5 };
addPropertyControls4(FramerD3v1TIvUB, { variant: { options: ["xABOqNYjB", "Z5KYprq3t"], optionTitles: ["Available", "Unavailabe"], title: "Variant", type: ControlType4.Enum } });
var variationAxes = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
addFonts2(FramerD3v1TIvUB, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes, weight: "400" }] }, ...AvailabilityFonts], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/D3600Q7vZlhJDoXAVXqa/sdF9OGsj4fc208p3V8Aq/YW0DzBCMC.js
var TimeDateFonts = getFonts2(Time);
var TimeWeatherFonts = getFonts2(TimeWeather);
var AvialabilityBadgeFonts = getFonts2(D3v1TIvUB_default);
var AvialabilityBadgeControls = getPropertyControls(D3v1TIvUB_default);
var enabledGestures = { JTM8558cH: { hover: true } };
var cycleOrder3 = ["JTM8558cH", "wj516_GKe"];
var serializationHash3 = "framer-xs9nA";
var variantClassNames3 = { JTM8558cH: "framer-v-1mq9xb2", wj516_GKe: "framer-v-1kn3yzk" };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition13 = { bounce: 0, delay: 0, duration: 0.8, type: "spring" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var query = (prefetch) => prefetch({ cacheDuration: 86400, credentials: "same-origin", errorFallbackValue: "Error", fallbackValue: "Italy", resultKeyPath: "country", resultOutputType: "string", url: `https://api.fetch.tools/location` });
var toString = (value) => {
  return typeof value === "string" ? value : String(value);
};
var Transition3 = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx5(MotionConfigContext3.Provider, { value: contextValue, children });
};
var preload = async (prequery, prefetch, props) => await Promise.all([query(prefetch)]);
var preloadStatements = { g6pOhFsZc: preload, JTM8558cH: preload, wj516_GKe: preload };
var useLoadingVariant = (variant, gestures, clearLoadingVariant, setGestureState, props) => {
  const prequery = usePreloadQuery();
  const prefetch = usePrefetch();
  React3.useEffect(() => {
    const promise = preloadStatements[variant];
    if (!promise || !gestures?.[variant]?.loading)
      return;
    promise(prequery, prefetch, props).then(() => clearLoadingVariant()).catch(() => setGestureState({ isError: true }));
  }, [variant]);
};
var Variants3 = motion3.create(React3.Fragment);
var humanReadableEnumMap = { Available: "xABOqNYjB", Unavailabe: "Z5KYprq3t" };
var humanReadableVariantMap3 = { "Dynamic Content": "JTM8558cH", "Menu S Open": "wj516_GKe" };
var getProps3 = ({ availability, click, height, id, image, info, name1, width, ...props }) => {
  return { ...props, gfHjySeAg: name1 ?? props.gfHjySeAg ?? "James Doe", hWeruCgcV: image ?? props.hWeruCgcV ?? { alt: "a man smiling for the camera", pixelHeight: 4016, pixelWidth: 6016, src: "https://framerusercontent.com/images/mNzl4z6a01cebukTTLU0FRnswRI.jpg?scale-down-to=512&width=6016&height=4016", srcSet: "https://framerusercontent.com/images/mNzl4z6a01cebukTTLU0FRnswRI.jpg?scale-down-to=512&width=6016&height=4016 512w,https://framerusercontent.com/images/mNzl4z6a01cebukTTLU0FRnswRI.jpg?scale-down-to=1024&width=6016&height=4016 1024w,https://framerusercontent.com/images/mNzl4z6a01cebukTTLU0FRnswRI.jpg?scale-down-to=2048&width=6016&height=4016 2048w,https://framerusercontent.com/images/mNzl4z6a01cebukTTLU0FRnswRI.jpg?scale-down-to=4096&width=6016&height=4016 4096w,https://framerusercontent.com/images/mNzl4z6a01cebukTTLU0FRnswRI.jpg?width=6016&height=4016 6016w" }, lb23bGA1S: click ?? props.lb23bGA1S, TTbH0dPkW: humanReadableEnumMap[availability] ?? availability ?? props.TTbH0dPkW ?? "xABOqNYjB", variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "JTM8558cH", WJ254GjXB: info ?? props.WJ254GjXB ?? "Designer" };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const { activeLocale, setLocale } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const { style, className, layoutId, variant, hWeruCgcV, gfHjySeAg, WJ254GjXB, lb23bGA1S, TTbH0dPkW, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ cycleOrder: cycleOrder3, defaultVariant: "JTM8558cH", enabledGestures, ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback2(baseVariant);
  const onMouseLeave1x4tpbm = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: false });
    setVariant("JTM8558cH");
  });
  const onTap5v04l6 = activeVariantCallback(async (...args) => {
    if (lb23bGA1S) {
      const res = await lb23bGA1S(...args);
      if (res === false)
        return false;
    }
    setVariant("wj516_GKe");
  });
  const onTaplb4z7d = activeVariantCallback(async (...args) => {
    if (lb23bGA1S) {
      const res = await lb23bGA1S(...args);
      if (res === false)
        return false;
    }
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx3(serializationHash3, ...sharedStyleClassNames);
  useLoadingVariant(baseVariant, enabledGestures, clearLoadingGesture, setGestureState);
  return /* @__PURE__ */ _jsx5(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx5(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx5(Transition3, { value: transition13, children: /* @__PURE__ */ _jsxs4(motion3.div, { ...restProps, ...gestureHandlers, className: cx3(scopingClassNames, "framer-1mq9xb2", className, classNames), "data-framer-name": "Dynamic Content", layoutDependency, layoutId: "DynamicInfo__JTM8558cH", ref: refBinding, style: { ...style }, ...addPropertyOverrides3({ "JTM8558cH-hover": { "data-framer-name": void 0 }, wj516_GKe: { "data-framer-name": "Menu S Open", "data-highlight": true, onMouseLeave: onMouseLeave1x4tpbm } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx5(motion3.div, { className: "framer-iwnhyg", "data-framer-name": "Border", layoutDependency, layoutId: "DynamicInfo__bIbHcXPb0", children: /* @__PURE__ */ _jsx5(motion3.div, { className: "framer-v1gbin", "data-framer-name": "Shadow", layoutDependency, layoutId: "DynamicInfo__eh0JeYGUF", style: { borderTopRightRadius: 16, boxShadow: "8px -34px 0px 1px var(--token-ab5da748-fc22-4113-aad7-2c1e1ab621f8, rgb(5, 5, 5))" }, variants: { "JTM8558cH-hover": { borderTopRightRadius: 18 }, wj516_GKe: { borderTopRightRadius: 32 } } }) }), /* @__PURE__ */ _jsxs4(motion3.div, { className: "framer-10umet3", "data-framer-name": "Content", layoutDependency, layoutId: "DynamicInfo__S2OjGmvb7", style: { backgroundColor: "var(--token-ab5da748-fc22-4113-aad7-2c1e1ab621f8, rgb(5, 5, 5))", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }, children: [/* @__PURE__ */ _jsxs4(motion3.div, { className: "framer-1qs1gh3", "data-framer-name": "Top", "data-highlight": true, layoutDependency, layoutId: "DynamicInfo__vsVDggrHW", onTap: onTap5v04l6, ...addPropertyOverrides3({ wj516_GKe: { onTap: onTaplb4z7d } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs4(motion3.div, { className: "framer-1r6jxtv", "data-framer-name": "User", layoutDependency, layoutId: "DynamicInfo__EM1YQcKij", children: [/* @__PURE__ */ _jsx5(Image, { background: { alt: "a man smiling for the camera", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 55) - 0 - 54.4) / 2 + 0 + 0) + 8 + 0 + 0 + 0.2), pixelHeight: 4016, pixelWidth: 6016, sizes: "39px", ...toResponsiveImage(hWeruCgcV) }, className: "framer-1542nwn", layoutDependency, layoutId: "DynamicInfo__PJ2waTzgj", style: { borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24 }, ...addPropertyOverrides3({ "JTM8558cH-hover": { background: { alt: "a man smiling for the camera", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 59) - 0 - 58.4) / 2 + 0 + 0) + 10 + 0 + 0 + 0.2), pixelHeight: 4016, pixelWidth: 6016, sizes: "39px", ...toResponsiveImage(hWeruCgcV) } }, wj516_GKe: { background: { alt: "a man smiling for the camera", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 99) - 0 - 274.4) / 2 + 0 + 0) + 12 + 0 + 0 + 0.2), pixelHeight: 4016, pixelWidth: 6016, sizes: "39px", ...toResponsiveImage(hWeruCgcV) } } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsxs4(motion3.div, { className: "framer-1dy7zvn", "data-framer-name": "Info", layoutDependency, layoutId: "DynamicInfo__Q4hL1N8iG", children: [/* @__PURE__ */ _jsx5(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx5(React3.Fragment, { children: /* @__PURE__ */ _jsx5(motion3.p, { style: { "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": '"Inter Variable", "Inter Placeholder", sans-serif', "--framer-font-variation-axes": 'var(--extracted-2gg91v, "opsz" 32, "wght" 500)', "--framer-letter-spacing": "-0.04em", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-99b161c8-f332-4af2-be94-ed617aa4e5b4, rgb(255, 255, 255)))" }, children: "James Doe" }) }), className: "framer-nxcbl4", fonts: ["Inter-Variable"], layoutDependency, layoutId: "DynamicInfo__eWnegInPD", style: { "--extracted-2gg91v": '"opsz" 32, "wght" 500', "--extracted-r6o4lv": "var(--token-99b161c8-f332-4af2-be94-ed617aa4e5b4, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: gfHjySeAg, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx5(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx5(React3.Fragment, { children: /* @__PURE__ */ _jsx5(motion3.p, { style: { "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": '"Inter Variable", "Inter Placeholder", sans-serif', "--framer-font-variation-axes": 'var(--extracted-2gg91v, "opsz" 32, "wght" 500)', "--framer-letter-spacing": "-0.04em", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c5bce19d-18eb-4191-b97e-e2fdb28abd01, rgba(255, 255, 255, 0.6)))" }, children: "Designer" }) }), className: "framer-dxx0dc", fonts: ["Inter-Variable"], layoutDependency, layoutId: "DynamicInfo__HtnLt9g4t", style: { "--extracted-2gg91v": '"opsz" 32, "wght" 500', "--extracted-r6o4lv": "var(--token-c5bce19d-18eb-4191-b97e-e2fdb28abd01, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: WJ254GjXB, verticalAlignment: "top", withExternalLayout: true })] })] }), /* @__PURE__ */ _jsx5(ComponentViewportProvider2, { children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer2, { className: "framer-1gpei3-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "DynamicInfo__iOk3Fbc3P-container", nodeId: "iOk3Fbc3P", rendersWithMotion: true, scopeId: "YW0DzBCMC", children: /* @__PURE__ */ _jsx5(Time, { color: "var(--token-99b161c8-f332-4af2-be94-ed617aa4e5b4, rgb(255, 255, 255))", font: { fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif', fontFeatureSettings: "'cv01' on, 'zero' on", fontSize: "16px", fontStyle: "normal", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: "1em" }, height: "100%", id: "iOk3Fbc3P", layoutId: "DynamicInfo__iOk3Fbc3P", monthFormat: "long", outputType: "time", showMinutes: true, showMonth: true, showSeconds: false, showWeekday: true, showYear: true, tabularFont: true, timeFormat: "12h", width: "100%" }) }) })] }), /* @__PURE__ */ _jsxs4(motion3.div, { className: "framer-1efign2", "data-framer-name": "Bottom", layoutDependency, layoutId: "DynamicInfo__bIoRMfnae", style: { opacity: 0 }, variants: { wj516_GKe: { opacity: 1 } }, children: [/* @__PURE__ */ _jsx5(Fetcher, { disabled: isLoading, requests: [{ cacheDuration: 86400, credentials: "same-origin", errorFallbackValue: "Error", fallbackValue: "Italy", resultKeyPath: "country", resultOutputType: "string", url: `https://api.fetch.tools/location` }], children: (fetchResult) => /* @__PURE__ */ _jsx5(ComponentViewportProvider2, { children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer2, { className: "framer-1o0hyyv-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "DynamicInfo__ufWd2DG2f-container", nodeId: "ufWd2DG2f", rendersWithMotion: true, scopeId: "YW0DzBCMC", children: /* @__PURE__ */ _jsx5(TimeWeather, { autoRefresh: true, font: { fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif', fontFeatureSettings: "'cv01' on, 'zero' on", fontSize: "16px", fontStyle: "normal", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: "1.2em" }, height: "100%", id: "ufWd2DG2f", layoutId: "DynamicInfo__ufWd2DG2f", locationName: toString(fetchResult[0]), refreshInterval: 15, showConditions: true, showLocation: true, showMinutes: false, showSeconds: false, showTemperature: true, showTime: false, showWeatherIcon: true, temperatureUnit: "celsius", textColor: "var(--token-99b161c8-f332-4af2-be94-ed617aa4e5b4, rgb(255, 255, 255))", timeZone: "America/New_York", use24HourFormat: false, useVisitorTime: true, width: "100%" }) }) }) }), /* @__PURE__ */ _jsx5(ComponentViewportProvider2, { height: 19, y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 55) - 0 - 54.4) / 2 + 0 + 0) + 54.4 - 165 + 90.5, ...addPropertyOverrides3({ "JTM8558cH-hover": { y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 59) - 0 - 58.4) / 2 + 0 + 0) + 58.4 - 165 + 90.5 }, wj516_GKe: { y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 99) - 0 - 274.4) / 2 + 0 + 0) + 12 + 50.4 + 90.5 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer2, { className: "framer-1c86ea1-container", layoutDependency, layoutId: "DynamicInfo__N6zEqfkDp-container", nodeId: "N6zEqfkDp", rendersWithMotion: true, scopeId: "YW0DzBCMC", children: /* @__PURE__ */ _jsx5(D3v1TIvUB_default, { height: "100%", id: "N6zEqfkDp", layoutId: "DynamicInfo__N6zEqfkDp", variant: TTbH0dPkW, width: "100%" }) }) })] })] }), /* @__PURE__ */ _jsx5(motion3.div, { className: "framer-q844v3", "data-framer-name": "Border", layoutDependency, layoutId: "DynamicInfo__oZNMMig_O", children: /* @__PURE__ */ _jsx5(motion3.div, { className: "framer-1gjbvq0", "data-framer-name": "Shadow", layoutDependency, layoutId: "DynamicInfo__f1zjgyr1B", style: { borderTopLeftRadius: 16, boxShadow: "-4px -34px 0px 1px var(--token-ab5da748-fc22-4113-aad7-2c1e1ab621f8, rgb(5, 5, 5))" }, variants: { "JTM8558cH-hover": { borderTopLeftRadius: 18 }, wj516_GKe: { borderTopLeftRadius: 32 } } }) })] }) }) }) });
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-xs9nA.framer-102z1b9, .framer-xs9nA .framer-102z1b9 { display: block; }", ".framer-xs9nA.framer-1mq9xb2 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-xs9nA .framer-iwnhyg { -webkit-user-select: none; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: -24px; overflow: visible; pointer-events: none; position: absolute; top: 0px; user-select: none; width: 24px; z-index: 1; }", ".framer-xs9nA .framer-v1gbin { bottom: -24px; flex: none; left: -24px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: -1; }", ".framer-xs9nA .framer-10umet3 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px; position: relative; width: auto; will-change: var(--framer-will-change-override, transform); }", ".framer-xs9nA .framer-1qs1gh3 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 0; }", ".framer-xs9nA .framer-1r6jxtv { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; user-select: none; width: min-content; }", ".framer-xs9nA .framer-1542nwn { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 39px); overflow: hidden; position: relative; width: 39px; will-change: var(--framer-will-change-override, transform); }", ".framer-xs9nA .framer-1dy7zvn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }", ".framer-xs9nA .framer-nxcbl4, .framer-xs9nA .framer-dxx0dc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-xs9nA .framer-1gpei3-container, .framer-xs9nA .framer-1o0hyyv-container, .framer-xs9nA .framer-1c86ea1-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-xs9nA .framer-1efign2 { align-content: center; align-items: center; bottom: -35px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; left: -8px; overflow: visible; padding: 0px; position: absolute; right: -7px; z-index: 1; }", ".framer-xs9nA .framer-q844v3 { -webkit-user-select: none; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; pointer-events: none; position: absolute; right: -24px; top: 0px; user-select: none; width: 24px; z-index: 0; }", ".framer-xs9nA .framer-1gjbvq0 { bottom: -24px; flex: none; left: 0px; overflow: hidden; position: absolute; right: -24px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: -1; }", ".framer-xs9nA.framer-v-1kn3yzk.framer-1mq9xb2 { cursor: unset; }", ".framer-xs9nA.framer-v-1kn3yzk .framer-iwnhyg { height: var(--framer-aspect-ratio-supported, 48px); left: -48px; width: 48px; }", ".framer-xs9nA.framer-v-1kn3yzk .framer-10umet3 { gap: 12px; padding: 12px; }", ".framer-xs9nA.framer-v-1kn3yzk .framer-1qs1gh3 { cursor: default; gap: 71px; order: 0; }", ".framer-xs9nA.framer-v-1kn3yzk .framer-1efign2 { bottom: unset; left: unset; order: 1; position: relative; right: unset; width: 100%; }", ".framer-xs9nA.framer-v-1kn3yzk .framer-q844v3 { height: var(--framer-aspect-ratio-supported, 48px); right: -48px; width: 48px; }", ".framer-xs9nA.framer-v-1mq9xb2.hover .framer-10umet3 { padding: 10px; }"];
var FramerYW0DzBCMC = withCSS3(Component3, css3, "framer-xs9nA");
var YW0DzBCMC_default = FramerYW0DzBCMC;
FramerYW0DzBCMC.displayName = "Dynamic Info";
FramerYW0DzBCMC.defaultProps = { height: 55, width: 236 };
addPropertyControls5(FramerYW0DzBCMC, { variant: { options: ["JTM8558cH", "wj516_GKe"], optionTitles: ["Dynamic Content", "Menu S Open"], title: "Variant", type: ControlType5.Enum }, hWeruCgcV: { __defaultAssetReference: "data:framer/asset-reference,mNzl4z6a01cebukTTLU0FRnswRI.jpg?originalFilename=photo-1651684215020-f7a5b6610f23%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHwxMTJ8fFBlcnNvbnxlbnwwfHx8fDE3NTU3Nzg4ODh8MA%26ixlib%3Drb-4.1.jpg&preferredSize=auto", __vekterDefault: { alt: "a man smiling for the camera", assetReference: "data:framer/asset-reference,mNzl4z6a01cebukTTLU0FRnswRI.jpg?originalFilename=photo-1651684215020-f7a5b6610f23%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHwxMTJ8fFBlcnNvbnxlbnwwfHx8fDE3NTU3Nzg4ODh8MA%26ixlib%3Drb-4.1.jpg&preferredSize=auto" }, title: "Image", type: ControlType5.ResponsiveImage }, gfHjySeAg: { defaultValue: "James Doe", displayTextArea: false, title: "Name", type: ControlType5.String }, WJ254GjXB: { defaultValue: "Designer", displayTextArea: false, title: "Info", type: ControlType5.String }, lb23bGA1S: { title: "Click", type: ControlType5.EventHandler }, TTbH0dPkW: AvialabilityBadgeControls?.["variant"] && { ...AvialabilityBadgeControls["variant"], defaultValue: "xABOqNYjB", description: void 0, hidden: void 0, title: "Availability" } });
var variationAxes2 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
addFonts3(FramerYW0DzBCMC, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes2, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes2, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes2, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes2, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes2, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes2, weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes2, weight: "400" }, { family: "Inter Display", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2", weight: "500" }, { family: "Inter Display", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2", weight: "500" }, { family: "Inter Display", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2", weight: "500" }, { family: "Inter Display", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2", weight: "500" }, { family: "Inter Display", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2", weight: "500" }, { family: "Inter Display", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/iwWTDc49ENF2tCHbqlNARXw6Ug.woff2", weight: "500" }, { family: "Inter Display", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2", weight: "500" }] }, ...TimeDateFonts, ...TimeWeatherFonts, ...AvialabilityBadgeFonts], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramerYW0DzBCMC", "slots": [], "annotations": { "framerAutoSizeImages": "true", "framerDisplayContentsDiv": "false", "framerComponentViewportWidth": "true", "framerIntrinsicWidth": "236", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"wj516_GKe":{"layout":["auto","auto"]},"g6pOhFsZc":{"layout":["auto","auto"]}}}', "framerVariables": '{"hWeruCgcV":"image","gfHjySeAg":"name1","WJ254GjXB":"info","lb23bGA1S":"click","TTbH0dPkW":"availability"}', "framerContractVersion": "1", "framerIntrinsicHeight": "55", "framerColorSyntax": "true", "framerImmutableVariables": "true" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  YW0DzBCMC_default as default
};
