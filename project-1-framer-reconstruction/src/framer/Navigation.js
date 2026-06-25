var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/wVA55grpmknU66ysEeUY/5MSH9fEw1YxeGxeqQ3zK/Py8qlUSqF.js
import { jsx as _jsx8, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls8, ComponentViewportProvider, ControlType as ControlType8, cx as cx6, forwardLoader, getFonts, ResolveLinks, SmartComponentScopedContainer, useActiveVariantCallback, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useRouter as useRouter2, useVariantState as useVariantState2, withCSS as withCSS6 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion6, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React6 from "react";
import { useRef as useRef3 } from "react";

// http-url:https://framerusercontent.com/modules/2QGlX864pmL5cxqknTvK/sudwzLB4XBD5Atme8MXS/UvPxI2Cnv.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, useSVGTemplate, withCSS } from "./_framer-runtime.js";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
var mask = "var(--framer-icon-mask)";
var Base = /* @__PURE__ */ forwardRef2(function(props, ref) {
  return /* @__PURE__ */ _jsx("svg", { ...props, ref, children: props.children });
});
var MotionSVG = motion.create(Base);
var SVG = /* @__PURE__ */ forwardRef2((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx(MotionSVG, { ...rest, layoutId, ref, children }) : /* @__PURE__ */ _jsx("svg", { ...rest, ref, children });
});
var svg = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 6 C 0 2.686 2.686 0 6 0 C 9.314 0 12 2.686 12 6 C 12 9.314 9.314 12 6 12 C 2.686 12 0 9.314 0 6 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="12px" id="cPTa10O2f" transform="translate(6 3)" width="12px"/><path d="M 0 6 C 0 2.686 2.686 0 6 0 C 9.314 0 12 2.686 12 6 C 12 9.314 9.314 12 6 12 C 2.686 12 0 9.314 0 6 Z" fill="transparent" height="12px" id="K1KJBDfjt" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6 3)" width="12px"/><path d="M 0 5.25 C 1.816 2.112 5.114 0 9 0 C 12.886 0 16.184 2.112 18 5.25" fill="transparent" height="5.25px" id="nuzXpJw0A" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 15)" width="18px"/></svg>';
var getProps = ({ alpha, color, height, id, width, width1, ...props }) => {
  return { ...props, ezTt3ayMo: color ?? props.ezTt3ayMo ?? "rgb(0, 0, 0)", lschgej4H: width1 ?? props.lschgej4H ?? 1.5, qxTvv_EBh: alpha ?? props.qxTvv_EBh };
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { style, className, layoutId, variant, ezTt3ayMo, lschgej4H, qxTvv_EBh, ...restProps } = getProps(props);
  const href = useSVGTemplate("1327812126", svg);
  return /* @__PURE__ */ _jsx(SVG, { ...restProps, className: cx("framer-vWtJe", className), layoutId, ref, role: "presentation", style: { "--1m6trwb": qxTvv_EBh, "--21h8s6": ezTt3ayMo, "--pgex8v": lschgej4H, ...style }, viewBox: "0 0 24 24", children: /* @__PURE__ */ _jsx("use", { href }) });
});
var css = [`.framer-vWtJe { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 24px; }`];
var Icon = withCSS(Component, css, "framer-vWtJe");
Icon.displayName = "User";
var UvPxI2Cnv_default = Icon;
addPropertyControls(Icon, { ezTt3ayMo: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Color", type: ControlType.Color }, lschgej4H: { defaultValue: 1.5, displayStepper: true, hidden: false, max: 6, min: 0, step: 0.5, title: "Width", type: ControlType.Number }, qxTvv_EBh: { defaultValue: 0, displayStepper: true, hidden: false, max: 1, min: 0, step: 0.1, title: "Alpha", type: ControlType.Number } });

// http-url:https://framerusercontent.com/modules/7bTxRS441c1FkZaE5hEj/FVFDyUEIetfCbb0yYRAZ/MZFTt3Qqu.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, motion as motion2, useSVGTemplate as useSVGTemplate2, withCSS as withCSS2 } from "./_framer-runtime.js";
import * as React2 from "react";
import { forwardRef as forwardRef4 } from "react";
var mask2 = "var(--framer-icon-mask)";
var Base2 = /* @__PURE__ */ forwardRef4(function(props, ref) {
  return /* @__PURE__ */ _jsx2("svg", { ...props, ref, children: props.children });
});
var MotionSVG2 = motion2.create(Base2);
var SVG2 = /* @__PURE__ */ forwardRef4((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx2(MotionSVG2, { ...rest, layoutId, ref, children }) : /* @__PURE__ */ _jsx2("svg", { ...rest, ref, children });
});
var svg2 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 2.25 C 0.344 0.956 1.556 0 3 0 C 4.444 0 5.656 0.956 6 2.25" fill="transparent" height="2.25px" id="sYRUIw6DX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(15 18.75)" width="6px"/><path d="M 0 2.25 C 0 1.007 1.007 0 2.25 0 C 3.493 0 4.5 1.007 4.5 2.25 C 4.5 3.493 3.493 4.5 2.25 4.5 C 1.007 4.5 0 3.493 0 2.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="4.5px" id="HOFm5TXY0" transform="translate(15.75 14.25)" width="4.5px"/><path d="M 0 2.25 C 0 1.007 1.007 0 2.25 0 C 3.493 0 4.5 1.007 4.5 2.25 C 4.5 3.493 3.493 4.5 2.25 4.5 C 1.007 4.5 0 3.493 0 2.25 Z" fill="transparent" height="4.5px" id="PItLMhYob" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(15.75 14.25)" width="4.5px"/><path d="M 8.25 14.25 L 0.75 14.25 C 0.336 14.25 0 13.914 0 13.5 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 5.75 0 C 5.912 0 6.07 0.053 6.2 0.15 L 8.8 2.1 C 8.93 2.197 9.088 2.25 9.25 2.25 L 17.25 2.25 C 17.664 2.25 18 2.586 18 3 L 18 6" fill="transparent" height="14.25px" id="zlIEbo_5r" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 5.25)" width="18px"/></svg>';
var getProps2 = ({ alpha, color, height, id, width, width1, ...props }) => {
  return { ...props, ezTt3ayMo: color ?? props.ezTt3ayMo ?? "rgb(0, 0, 0)", lschgej4H: width1 ?? props.lschgej4H ?? 1.5, qxTvv_EBh: alpha ?? props.qxTvv_EBh };
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const { style, className, layoutId, variant, ezTt3ayMo, lschgej4H, qxTvv_EBh, ...restProps } = getProps2(props);
  const href = useSVGTemplate2("3975885847", svg2);
  return /* @__PURE__ */ _jsx2(SVG2, { ...restProps, className: cx2("framer-CSf2x", className), layoutId, ref, role: "presentation", style: { "--1m6trwb": qxTvv_EBh, "--21h8s6": ezTt3ayMo, "--pgex8v": lschgej4H, ...style }, viewBox: "0 0 24 24", children: /* @__PURE__ */ _jsx2("use", { href }) });
});
var css2 = [`.framer-CSf2x { -webkit-mask: ${mask2}; aspect-ratio: 1; display: block; mask: ${mask2}; width: 24px; }`];
var Icon2 = withCSS2(Component2, css2, "framer-CSf2x");
Icon2.displayName = "Folder Simple User";
var MZFTt3Qqu_default = Icon2;
addPropertyControls2(Icon2, { ezTt3ayMo: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Color", type: ControlType2.Color }, lschgej4H: { defaultValue: 1.5, displayStepper: true, hidden: false, max: 6, min: 0, step: 0.5, title: "Width", type: ControlType2.Number }, qxTvv_EBh: { defaultValue: 0, displayStepper: true, hidden: false, max: 1, min: 0, step: 0.1, title: "Alpha", type: ControlType2.Number } });

// http-url:https://framerusercontent.com/modules/a00rkf99JIwyJlJoC56r/vWMyw6DOhCGxbw2goCFm/Shortcuts_Prod.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls3, ControlType as ControlType3 } from "./_framer-runtime.js";
import { useEffect, useRef, startTransition } from "react";
import { useRouter } from "./_framer-runtime.js";
function KeyboardShortcut({ shortcuts }) {
  const { navigate, routes } = useRouter() || {};
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);
  useEffect(() => {
    const handleKeyDown = (e) => {
      const target = e.target;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return;
      }
      const parts = [];
      if (e.metaKey || e.ctrlKey)
        parts.push(e.metaKey ? "cmd" : "ctrl");
      if (e.altKey)
        parts.push("alt");
      if (e.shiftKey)
        parts.push("shift");
      if (e.key && !["Meta", "Control", "Alt", "Shift"].includes(e.key)) {
        let key = e.key.toLowerCase();
        if (key === "arrowleft")
          key = "left";
        if (key === "arrowright")
          key = "right";
        if (key === "arrowdown")
          key = "down";
        if (key === "arrowup")
          key = "up";
        if (key === "escape")
          key = "esc";
        parts.push(key);
      }
      const combination = parts.join("+");
      const shortcut = shortcuts.find((s) => {
        const normalized = s.key.toLowerCase().replace(/\s+/g, "");
        return normalized === combination;
      });
      if (shortcut) {
        e.preventDefault();
        if (shortcut.newTab) {
          __dai_window.open(shortcut.link, "_blank", "noopener,noreferrer");
        } else if (navigate && routes) {
          const [path, hash] = shortcut.link.split("#");
          const routeEntry = Object.entries(routes).find(([, value]) => value?.path === path);
          if (routeEntry) {
            startTransition(() => {
              navigate(routeEntry[0], hash);
            });
          }
        }
      }
    };
    __dai_window.addEventListener("keydown", handleKeyDown);
    return () => __dai_window.removeEventListener("keydown", handleKeyDown);
  }, [shortcuts, navigate, routes]);
  return /* @__PURE__ */ _jsx3("div", { ref: containerRef, tabIndex: -1, style: { outline: "none" } });
}
KeyboardShortcut.displayName = "Shortcuts";
addPropertyControls3(KeyboardShortcut, { shortcuts: { type: ControlType3.Array, title: "Shortcuts", defaultValue: [{ key: "shift+a", link: "https://framer.university", newTab: false }], control: { type: ControlType3.Object, controls: { key: { type: ControlType3.String, title: "Key", placeholder: "shift+b...", description: "Use '+' for combinations." }, link: { type: ControlType3.Link, title: "Link" }, newTab: { type: ControlType3.Boolean, title: "New Tab", defaultValue: false, enabledTitle: "Yes", disabledTitle: "No" } } }, description: "More components at [Framer University](https://frameruni.link/cc)." } });

// http-url:https://framerusercontent.com/modules/EUnymQnlbcEVKcI2X0r9/VYrK5eRHQLgMzPkHIia6/JdTuvSk2g.js
import { jsx as _jsx4 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls4, ControlType as ControlType4, cx as cx3, motion as motion3, useSVGTemplate as useSVGTemplate3, withCSS as withCSS3 } from "./_framer-runtime.js";
import * as React3 from "react";
import { forwardRef as forwardRef6 } from "react";
var mask3 = "var(--framer-icon-mask)";
var Base3 = /* @__PURE__ */ forwardRef6(function(props, ref) {
  return /* @__PURE__ */ _jsx4("svg", { ...props, ref, children: props.children });
});
var MotionSVG3 = motion3.create(Base3);
var SVG3 = /* @__PURE__ */ forwardRef6((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx4(MotionSVG3, { ...rest, layoutId, ref, children }) : /* @__PURE__ */ _jsx4("svg", { ...rest, ref, children });
});
var svg3 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 8.781 0.22 C 8.64 0.079 8.449 0 8.25 0 C 8.051 0 7.86 0.079 7.719 0.22 L 0 7.94 L 0 17.251 L 6 17.251 L 6 11.251 L 10.5 11.251 L 10.5 17.251 L 16.5 17.251 L 16.5 7.94 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="17.250589992311827px" id="bclRjHh9i" transform="translate(3.75 2.999)" width="16.5px"/><path d="M 0 0 L 21 0" fill="transparent" height="1px" id="x_1UoMXYg" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(1.5 20.25)" width="21px"/><path d="M 4.5 6 L 4.5 0 L 0 0 L 0 6" fill="transparent" height="6px" id="B_eAApVIi" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9.75 14.25)" width="4.5px"/><path d="M 0 0 L 0 9.31" fill="transparent" height="9.310312500000009px" id="lD22mnHXI" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 10.94)" width="1px"/><path d="M 0 9.31 L 0 0" fill="transparent" height="9.310312500000009px" id="LO3qsaZ8o" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(20.25 10.94)" width="1px"/><path d="M 0 9.44 L 9.219 0.22 C 9.36 0.079 9.551 0 9.75 0 C 9.949 0 10.14 0.079 10.281 0.22 L 19.5 9.44" fill="transparent" height="9.440277492311829px" id="TVmdv_yE5" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.25 2.999)" width="19.5px"/></svg>';
var getProps3 = ({ alpha, color, height, id, width, width1, ...props }) => {
  return { ...props, ezTt3ayMo: color ?? props.ezTt3ayMo ?? "rgb(0, 0, 0)", lschgej4H: width1 ?? props.lschgej4H ?? 1.5, qxTvv_EBh: alpha ?? props.qxTvv_EBh };
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const { style, className, layoutId, variant, ezTt3ayMo, lschgej4H, qxTvv_EBh, ...restProps } = getProps3(props);
  const href = useSVGTemplate3("1695347308", svg3);
  return /* @__PURE__ */ _jsx4(SVG3, { ...restProps, className: cx3("framer-OJB6P", className), layoutId, ref, role: "presentation", style: { "--1m6trwb": qxTvv_EBh, "--21h8s6": ezTt3ayMo, "--pgex8v": lschgej4H, ...style }, viewBox: "0 0 24 24", children: /* @__PURE__ */ _jsx4("use", { href }) });
});
var css3 = [`.framer-OJB6P { -webkit-mask: ${mask3}; aspect-ratio: 1; display: block; mask: ${mask3}; width: 24px; }`];
var Icon3 = withCSS3(Component3, css3, "framer-OJB6P");
Icon3.displayName = "House Line";
var JdTuvSk2g_default = Icon3;
addPropertyControls4(Icon3, { ezTt3ayMo: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Color", type: ControlType4.Color }, lschgej4H: { defaultValue: 1.5, displayStepper: true, hidden: false, max: 6, min: 0, step: 0.5, title: "Width", type: ControlType4.Number }, qxTvv_EBh: { defaultValue: 0, displayStepper: true, hidden: false, max: 1, min: 0, step: 0.1, title: "Alpha", type: ControlType4.Number } });

// http-url:https://framerusercontent.com/modules/ombG6td1yx47lQwZE9Kg/fezDztHOWbcN1BKF9ioU/B6RKbBfKy.js
import { jsx as _jsx5 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls5, ControlType as ControlType5, cx as cx4, motion as motion4, useSVGTemplate as useSVGTemplate4, withCSS as withCSS4 } from "./_framer-runtime.js";
import * as React4 from "react";
import { forwardRef as forwardRef8 } from "react";
var mask4 = "var(--framer-icon-mask)";
var Base4 = /* @__PURE__ */ forwardRef8(function(props, ref) {
  return /* @__PURE__ */ _jsx5("svg", { ...props, ref, children: props.children });
});
var MotionSVG4 = motion4.create(Base4);
var SVG4 = /* @__PURE__ */ forwardRef8((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx5(MotionSVG4, { ...rest, layoutId, ref, children }) : /* @__PURE__ */ _jsx5("svg", { ...rest, ref, children });
});
var svg4 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 5.25 0 L 0 0 L 0 5.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="5.25px" id="Xl0zpC_YL" transform="translate(15 15)" width="5.25px"/><path d="M 0 0 L 6 0" fill="transparent" height="1px" id="x6Co4zaQh" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9 9)" width="6px"/><path d="M 0 0 L 6 0" fill="transparent" height="1px" id="eELn6N1Ch" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9 12)" width="6px"/><path d="M 0 0 L 3 0" fill="transparent" height="1px" id="IgY3RVkTy" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9 15)" width="3px"/><path d="M 10.94 16.5 L 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 15.75 0 C 16.164 0 16.5 0.336 16.5 0.75 L 16.5 10.94 C 16.5 11.138 16.421 11.329 16.281 11.469 L 11.469 16.281 C 11.329 16.421 11.138 16.5 10.94 16.5 Z" fill="transparent" height="16.5px" id="PGFt2E8kh" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 3.75)" width="16.5px"/><path d="M 5.183 0 L 0 0 L 0 5.183" fill="transparent" height="5.183437499999997px" id="VDCg9ignB" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(15 14.999)" width="5.1825000000000045px"/></svg>';
var getProps4 = ({ alpha, color, height, id, width, width1, ...props }) => {
  return { ...props, ezTt3ayMo: color ?? props.ezTt3ayMo ?? "rgb(0, 0, 0)", lschgej4H: width1 ?? props.lschgej4H ?? 1.5, qxTvv_EBh: alpha ?? props.qxTvv_EBh };
};
var Component4 = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const { style, className, layoutId, variant, ezTt3ayMo, lschgej4H, qxTvv_EBh, ...restProps } = getProps4(props);
  const href = useSVGTemplate4("1959944472", svg4);
  return /* @__PURE__ */ _jsx5(SVG4, { ...restProps, className: cx4("framer-peeAS", className), layoutId, ref, role: "presentation", style: { "--1m6trwb": qxTvv_EBh, "--21h8s6": ezTt3ayMo, "--pgex8v": lschgej4H, ...style }, viewBox: "0 0 24 24", children: /* @__PURE__ */ _jsx5("use", { href }) });
});
var css4 = [`.framer-peeAS { -webkit-mask: ${mask4}; aspect-ratio: 1; display: block; mask: ${mask4}; width: 24px; }`];
var Icon4 = withCSS4(Component4, css4, "framer-peeAS");
Icon4.displayName = "Note";
var B6RKbBfKy_default = Icon4;
addPropertyControls5(Icon4, { ezTt3ayMo: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Color", type: ControlType5.Color }, lschgej4H: { defaultValue: 1.5, displayStepper: true, hidden: false, max: 6, min: 0, step: 0.5, title: "Width", type: ControlType5.Number }, qxTvv_EBh: { defaultValue: 0, displayStepper: true, hidden: false, max: 1, min: 0, step: 0.1, title: "Alpha", type: ControlType5.Number } });

// http-url:https://framerusercontent.com/modules/uTHWTMfGzS20ThfQAKk1/qpM23VgbMxwmo12HXNQ5/ThemeChanger.js
import { jsx as _jsx6, jsxs as _jsxs } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls6, ControlType as ControlType6 } from "./_framer-runtime.js";
import { useEffect as useEffect2, useState, startTransition as startTransition2 } from "react";
var changeTheme = (theme) => {
  const htmlElement = document.getElementsByTagName("html")[0];
  const bodyElement = document.getElementsByTagName("body")[0];
  htmlElement.setAttribute("toggle-theme", theme);
  bodyElement.setAttribute("toggle-theme", theme);
  localStorage.setItem("theme", theme);
  const event = new Event("themeChange");
  __dai_window.dispatchEvent(event);
};
var SunIcon = ({ size, color }) => /* @__PURE__ */ _jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [/* @__PURE__ */ _jsx6("circle", { cx: "12", cy: "12", r: "5", fill: color }), /* @__PURE__ */ _jsx6("path", { d: "M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42", stroke: color, strokeWidth: "2", strokeLinecap: "round" })] });
var MoonIcon = ({ size, color }) => /* @__PURE__ */ _jsx6("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ _jsx6("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z", fill: color }) });
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
  return /* @__PURE__ */ _jsx6("div", { style: { width: size, height: size, display: "flex", alignItems: "center", justifyContent: "center" }, dangerouslySetInnerHTML: { __html: coloredSvg } });
};
function ThemeToggleButton(props) {
  const { toggleType = "Button", lightIconColor = "#FF8C00", darkIconColor = "#949494", SunIconColor = "#FF9100", MoonIconColor = "#6B6B6B", size = 30, defaultTheme = "Light", switchTrackColor = "#424242", switchActiveColor = "#DBDBDB", sunSvg, moonSvg } = props;
  const [theme, setTheme] = useState("system");
  const [, setIsInitialized] = useState(false);
  useEffect2(() => {
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
    startTransition2(() => setTheme(newTheme));
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
    startTransition2(() => setIsInitialized(true));
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
    startTransition2(() => setTheme(newTheme));
    changeTheme(newTheme);
  };
  const isLightMode = theme === "light";
  const buttonIconSize = size * 0.8;
  if (toggleType === "Button") {
    return /* @__PURE__ */ _jsx6("div", { onClick: handleClick, style: { display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "transform 0.3s ease", background: "transparent", border: "none", boxShadow: "none", padding: 0, width: "100%", height: "100%" }, onMouseEnter: (e) => {
      e.currentTarget.style.transform = "scale(1.1)";
    }, onMouseLeave: (e) => {
      e.currentTarget.style.transform = "scale(1)";
    }, children: isLightMode ? sunSvg ? /* @__PURE__ */ _jsx6(CustomIcon, { svgString: sunSvg, size: buttonIconSize, color: lightIconColor }) : /* @__PURE__ */ _jsx6(SunIcon, { size: buttonIconSize, color: lightIconColor }) : moonSvg ? /* @__PURE__ */ _jsx6(CustomIcon, { svgString: moonSvg, size: buttonIconSize, color: darkIconColor }) : /* @__PURE__ */ _jsx6(MoonIcon, { size: buttonIconSize, color: darkIconColor }) });
  }
  const switchWidth = size * 1.8;
  const switchHeight = size * 1;
  const knobSize = switchHeight * 0.8;
  const knobIconSize = knobSize * 0.6;
  const borderRadius = switchHeight / 2;
  return /* @__PURE__ */ _jsx6("button", { type: "button", "aria-pressed": isLightMode, onClick: handleClick, style: { width: switchWidth, height: switchHeight, background: isLightMode ? switchActiveColor : switchTrackColor, border: "none", borderRadius, position: "relative", cursor: "pointer", transition: "background 0.2s", boxShadow: isLightMode ? "0 1px 3px rgba(0,0,0,0.06)" : "0 2px 8px rgba(0,0,0,0.10)", outline: "none", padding: 0 }, children: /* @__PURE__ */ _jsx6("span", { style: { position: "absolute", top: (switchHeight - knobSize) / 2, left: isLightMode ? switchWidth - knobSize - (switchHeight - knobSize) / 2 : (switchHeight - knobSize) / 2, width: knobSize, height: knobSize, borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 1px 4px rgba(0,0,0,0.10)", transition: "left 0.2s cubic-bezier(.4,1.2,.6,1)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }, children: isLightMode ? sunSvg ? /* @__PURE__ */ _jsx6(CustomIcon, { svgString: sunSvg, size: knobIconSize, color: SunIconColor }) : /* @__PURE__ */ _jsx6(SunIcon, { size: knobIconSize, color: SunIconColor }) : moonSvg ? /* @__PURE__ */ _jsx6(CustomIcon, { svgString: moonSvg, size: knobIconSize, color: MoonIconColor }) : /* @__PURE__ */ _jsx6(MoonIcon, { size: knobIconSize, color: MoonIconColor }) }) });
}
addPropertyControls6(ThemeToggleButton, { toggleType: { type: ControlType6.Enum, title: "Toggle Type", options: ["Button", "Switch"], defaultValue: "Button" }, lightIconColor: { type: ControlType6.Color, title: "Sun button Icon Color", defaultValue: "#FF8C00", hidden: (props) => props.toggleType !== "Button" }, darkIconColor: { type: ControlType6.Color, title: "Moon button Icon Color", defaultValue: "#949494", hidden: (props) => props.toggleType !== "Button" }, SunIconColor: { type: ControlType6.Color, title: "Sun Icon Color", defaultValue: "#FF9100", hidden: (props) => props.toggleType !== "Switch" }, MoonIconColor: { type: ControlType6.Color, title: "Moon Icon Color", defaultValue: "#6B6B6B", hidden: (props) => props.toggleType !== "Switch" }, size: { type: ControlType6.Number, title: "Size", defaultValue: 60, min: 20, max: 120, step: 5 }, switchTrackColor: { type: ControlType6.Color, title: "Switch Track Color", defaultValue: "#424242", hidden: (props) => props.toggleType !== "Switch" }, switchActiveColor: { type: ControlType6.Color, title: "Switch Active Color", defaultValue: "#DBDBDB", hidden: (props) => props.toggleType !== "Switch" }, defaultTheme: { type: ControlType6.Enum, title: "Default Theme", options: ["Light", "Dark", "System"], defaultValue: "Light" }, sunSvg: { type: ControlType6.String, title: "Sun SVG", placeholder: "Paste your sun SVG code here...", displayTextArea: true }, moonSvg: { type: ControlType6.String, title: "Moon SVG", placeholder: "Paste your moon SVG code here...", displayTextArea: true } });

// http-url:https://framerusercontent.com/modules/59FjxQY6PY76YphP16TK/5VoErUZQBRqqEAlSLb5p/u0dEx4Hzm.js
import { jsx as _jsx7, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls7, ControlType as ControlType7, cx as cx5, Instance, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS5 } from "./_framer-runtime.js";
import { LayoutGroup, motion as motion5, MotionConfigContext } from "framer-motion";
import * as React5 from "react";
import { useRef as useRef2 } from "react";
var enabledGestures = { vQaNi6p_Y: { hover: true } };
var cycleOrder = ["vQaNi6p_Y", "jiCE2oLVw"];
var serializationHash = "framer-4FFlX";
var variantClassNames = { jiCE2oLVw: "framer-v-14navzv", vQaNi6p_Y: "framer-v-xh8gvq" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0, delay: 0, duration: 0.8, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React5.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx7(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion5.create(React5.Fragment);
var humanReadableVariantMap = { "Navigation Button": "vQaNi6p_Y", "Navigation Mobile Button": "jiCE2oLVw" };
var getProps5 = ({ height, icon, id, link, pageName, shortCutKey, width, ...props }) => {
  return { ...props, fiNYStQol: link ?? props.fiNYStQol, GiNEVLgfk: shortCutKey ?? props.GiNEVLgfk ?? "1", TLvxYmRy4: pageName ?? props.TLvxYmRy4 ?? "Home", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "vQaNi6p_Y", VyzVpwiCY: icon ?? props.VyzVpwiCY ?? UvPxI2Cnv_default };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component5 = /* @__PURE__ */ React5.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React5.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className, layoutId, variant, TLvxYmRy4, GiNEVLgfk, fiNYStQol, VyzVpwiCY, ...restProps } = getProps5(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "vQaNi6p_Y", enabledGestures, ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx5(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "jiCE2oLVw")
      return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "jiCE2oLVw")
      return true;
    return false;
  };
  return /* @__PURE__ */ _jsx7(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx7(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx7(Transition, { value: transition1, children: /* @__PURE__ */ _jsx7(Link, { href: fiNYStQol, motionChild: true, nodeId: "vQaNi6p_Y", openInNewTab: false, scopeId: "u0dEx4Hzm", children: /* @__PURE__ */ _jsxs2(motion5.a, { ...restProps, ...gestureHandlers, className: `${cx5(scopingClassNames, "framer-xh8gvq", className, classNames)} framer-oyq5yx`, "data-framer-name": "Navigation Button", layoutDependency, layoutId: "Navigation__vQaNi6p_Y", ref: refBinding, style: { ...style }, ...addPropertyOverrides({ "vQaNi6p_Y-hover": { "data-framer-name": void 0 }, jiCE2oLVw: { "data-framer-name": "Navigation Mobile Button" } }, baseVariant, gestureVariant), children: [isDisplayed() && /* @__PURE__ */ _jsx7(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx7(React5.Fragment, { children: /* @__PURE__ */ _jsx7(motion5.p, { style: { "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": '"Inter Variable", "Inter Placeholder", sans-serif', "--framer-font-size": "14px", "--framer-font-variation-axes": 'var(--extracted-2gg91v, "opsz" 32, "wght" 500)', "--framer-letter-spacing": "-0.04em", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c5bce19d-18eb-4191-b97e-e2fdb28abd01, rgba(255, 255, 255, 0.6)))" }, children: "Home" }) }), className: "framer-yvs9dz", fonts: ["Inter-Variable"], layoutDependency, layoutId: "Navigation__gEZ6YBN_O", style: { "--extracted-2gg91v": '"opsz" 32, "wght" 500', "--extracted-r6o4lv": "var(--token-c5bce19d-18eb-4191-b97e-e2fdb28abd01, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: TLvxYmRy4, variants: { "vQaNi6p_Y-hover": { "--extracted-r6o4lv": "var(--token-99b161c8-f332-4af2-be94-ed617aa4e5b4, rgb(255, 255, 255))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ "vQaNi6p_Y-hover": { children: /* @__PURE__ */ _jsx7(React5.Fragment, { children: /* @__PURE__ */ _jsx7(motion5.p, { style: { "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3", "--framer-font-family": '"Inter Variable", "Inter Placeholder", sans-serif', "--framer-font-size": "14px", "--framer-font-variation-axes": 'var(--extracted-2gg91v, "opsz" 32, "wght" 500)', "--framer-letter-spacing": "-0.04em", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-99b161c8-f332-4af2-be94-ed617aa4e5b4, rgb(255, 255, 255)))" }, children: "Home" }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsxs2(motion5.div, { className: "framer-xkhfm0", "data-framer-name": "Icon", layoutDependency, layoutId: "Navigation__NK3EYw5Yk", style: { backgroundColor: "var(--token-728a58c7-2d6d-4def-b32e-69323e6b6c9e, rgba(255, 255, 255, 0.12))", borderBottomLeftRadius: 4, borderBottomRightRadius: 4, borderTopLeftRadius: 4, borderTopRightRadius: 4 }, variants: { jiCE2oLVw: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12 } }, children: [isDisplayed1() && /* @__PURE__ */ _jsx7(Instance, { animated: true, className: "framer-n9s241", Component: VyzVpwiCY, layoutDependency, layoutId: "Navigation__c4UjGriti", style: { "--1m6trwb": 0, "--21h8s6": "var(--token-bdcd8a43-b4be-48c3-b9c1-e15375cb427e, rgba(255, 255, 255, 0.6))", "--pgex8v": 1.5 } }), isDisplayed() && /* @__PURE__ */ _jsx7(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx7(React5.Fragment, { children: /* @__PURE__ */ _jsx7(motion5.p, { style: { "--font-selector": "RlI7SW50ZXJEaXNwbGF5LU1lZGl1bQ==", "--framer-font-family": '"Inter Display", "Inter Display Placeholder", sans-serif', "--framer-font-open-type-features": "'ss09' on, 'ss02' on, 'cv01' on, 'zero' on", "--framer-font-size": "14px", "--framer-font-weight": "500", "--framer-letter-spacing": "-0.04em", "--framer-line-height": "1em", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-bdcd8a43-b4be-48c3-b9c1-e15375cb427e, rgba(255, 255, 255, 0.6)))" }, children: "1" }) }), className: "framer-1vp65w0", fonts: ["FR;InterDisplay-Medium"], layoutDependency, layoutId: "Navigation__ujrCJFK23", style: { "--extracted-r6o4lv": "var(--token-bdcd8a43-b4be-48c3-b9c1-e15375cb427e, rgba(255, 255, 255, 0.6))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: GiNEVLgfk, verticalAlignment: "top", withExternalLayout: true })] })] }) }) }) }) });
});
var css5 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-4FFlX.framer-oyq5yx, .framer-4FFlX .framer-oyq5yx { display: block; }", ".framer-4FFlX.framer-xh8gvq { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 100px; }", ".framer-4FFlX .framer-yvs9dz, .framer-4FFlX .framer-1vp65w0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-4FFlX .framer-xkhfm0 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 19px); justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 6px; position: relative; width: 19px; will-change: var(--framer-will-change-override, transform); }", ".framer-4FFlX .framer-n9s241 { flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 17px); position: relative; width: 1px; }", ".framer-4FFlX.framer-v-14navzv.framer-xh8gvq { gap: 0px; justify-content: center; width: min-content; }", ".framer-4FFlX.framer-v-14navzv .framer-xkhfm0 { height: var(--framer-aspect-ratio-supported, 32px); padding: 6px; width: 32px; }", ".framer-4FFlX.framer-v-14navzv .framer-n9s241 { height: var(--framer-aspect-ratio-supported, 20px); }"];
var Frameru0dEx4Hzm = withCSS5(Component5, css5, "framer-4FFlX");
var u0dEx4Hzm_default = Frameru0dEx4Hzm;
Frameru0dEx4Hzm.displayName = "Nav Link";
Frameru0dEx4Hzm.defaultProps = { height: 19, width: 100 };
addPropertyControls7(Frameru0dEx4Hzm, { variant: { options: ["vQaNi6p_Y", "jiCE2oLVw"], optionTitles: ["Navigation Button", "Navigation Mobile Button"], title: "Variant", type: ControlType7.Enum }, TLvxYmRy4: { defaultValue: "Home", displayTextArea: false, title: "Page Name", type: ControlType7.String }, GiNEVLgfk: { defaultValue: "1", displayTextArea: false, title: "Short-Cut Key", type: ControlType7.String }, fiNYStQol: { title: "Link", type: ControlType7.Link }, VyzVpwiCY: { defaultValue: { identifier: "module:2QGlX864pmL5cxqknTvK/sudwzLB4XBD5Atme8MXS/UvPxI2Cnv.js:default", moduleId: "2QGlX864pmL5cxqknTvK" }, setModuleId: "omX0gWFPqDwhaiWwf6ab", title: "Icon", type: ControlType7.VectorSetItem } });
var variationAxes = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
addFonts(Frameru0dEx4Hzm, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2", weight: "500" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2", weight: "500" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2", weight: "500" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2", weight: "500" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2", weight: "500" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/iwWTDc49ENF2tCHbqlNARXw6Ug.woff2", weight: "500" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2", weight: "500" }] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/wVA55grpmknU66ysEeUY/5MSH9fEw1YxeGxeqQ3zK/Py8qlUSqF.js
var ShortcutsFonts = getFonts(KeyboardShortcut);
var NavLinkFonts = getFonts(u0dEx4Hzm_default);
var ThemeToggleButtonFonts = getFonts(ThemeToggleButton);
var cycleOrder2 = ["Ixlvz7SuN", "mN8jh0NXd", "oPKpRVUxz"];
var serializationHash2 = "framer-jPjXr";
var variantClassNames2 = { Ixlvz7SuN: "framer-v-d6zsv4", mN8jh0NXd: "framer-v-wst29h", oPKpRVUxz: "framer-v-6l45lq" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { bounce: 0, delay: 0, duration: 0.8, type: "spring" };
var transformTemplate1 = (_, t) => `translateY(-50%) ${t}`;
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var Transition2 = ({ value, children }) => {
  const config = React6.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx8(MotionConfigContext2.Provider, { value: contextValue, children });
};
var humanReadableVariantMap2 = { "Navigation mobile": "oPKpRVUxz", "Navigation Open": "mN8jh0NXd", Navigation: "Ixlvz7SuN" };
var Variants2 = motion6.create(React6.Fragment);
var getProps6 = ({ click, height, id, width, ...props }) => {
  return { ...props, d8IJqm5G0: click ?? props.d8IJqm5G0, variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "Ixlvz7SuN" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component6 = /* @__PURE__ */ React6.forwardRef(function(props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React6.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className, layoutId, variant, d8IJqm5G0, ...restProps } = getProps6(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder: cycleOrder2, defaultVariant: "Ixlvz7SuN", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onMouseEnter1374go7 = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: true });
    setVariant("mN8jh0NXd");
  });
  const onMouseLeave3lwjx4 = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: false });
    setVariant("Ixlvz7SuN");
  });
  const onTap1k6gl8o = activeVariantCallback(async (...args) => {
    if (d8IJqm5G0) {
      const res = await d8IJqm5G0(...args);
      if (res === false)
        return false;
    }
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx6(serializationHash2, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "oPKpRVUxz")
      return false;
    return true;
  };
  const router = useRouter2();
  const isDisplayed1 = () => {
    if (baseVariant === "oPKpRVUxz")
      return true;
    return false;
  };
  return /* @__PURE__ */ _jsx8(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx8(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx8(Transition2, { value: transition12, children: /* @__PURE__ */ _jsxs3(motion6.header, { ...restProps, ...gestureHandlers, className: cx6(scopingClassNames, "framer-d6zsv4", className, classNames), "data-framer-name": "Navigation", "data-highlight": true, layoutDependency, layoutId: "Navigation__Ixlvz7SuN", onMouseEnter: onMouseEnter1374go7, ref: refBinding, style: { ...style }, ...addPropertyOverrides2({ mN8jh0NXd: { "data-framer-name": "Navigation Open", onMouseEnter: void 0, onMouseLeave: onMouseLeave3lwjx4 }, oPKpRVUxz: { "data-framer-name": "Navigation mobile", "data-highlight": void 0, onMouseEnter: void 0 } }, baseVariant, gestureVariant), children: [isDisplayed() && /* @__PURE__ */ _jsx8(motion6.div, { className: "framer-mhd3xh", "data-framer-name": "Border", layoutDependency, layoutId: "Navigation__Lnq8f99Yf", children: /* @__PURE__ */ _jsx8(motion6.div, { className: "framer-1sqqct8", "data-framer-name": "Shadow", layoutDependency, layoutId: "Navigation__ehhff6ziG", style: { borderBottomLeftRadius: 12, boxShadow: "-27px 30px 0px 0px var(--token-ab5da748-fc22-4113-aad7-2c1e1ab621f8, rgb(5, 5, 5))" }, variants: { mN8jh0NXd: { borderBottomLeftRadius: 40 } } }) }), /* @__PURE__ */ _jsx8(motion6.div, { className: "framer-f27zcg", "data-framer-name": "Navigation", "data-highlight": true, layoutDependency, layoutId: "Navigation__vNwiZpHDx", onTap: onTap1k6gl8o, style: { backgroundColor: "var(--token-ab5da748-fc22-4113-aad7-2c1e1ab621f8, rgb(5, 5, 5))", borderBottomLeftRadius: 0, borderBottomRightRadius: 12, borderTopLeftRadius: 0, borderTopRightRadius: 12 }, variants: { mN8jh0NXd: { borderBottomRightRadius: 16, borderTopRightRadius: 16 }, oPKpRVUxz: { borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16 } }, children: /* @__PURE__ */ _jsxs3(motion6.nav, { className: "framer-4e96dx", "data-framer-name": "Menu", layoutDependency, layoutId: "Navigation__ojqwlm3w0", children: [/* @__PURE__ */ _jsx8(ResolveLinks, { links: [{ href: { webPageId: "BNXQfHlnZ" }, implicitPathVariables: void 0 }, { href: { webPageId: "C4p1WG53O" }, implicitPathVariables: void 0 }, { href: { webPageId: "RR4ihCL2W" }, implicitPathVariables: void 0 }, { href: { webPageId: "hPd4ReTBa" }, implicitPathVariables: void 0 }, { href: { webPageId: "BNXQfHlnZ" }, implicitPathVariables: void 0 }, { href: { webPageId: "C4p1WG53O" }, implicitPathVariables: void 0 }, { href: { webPageId: "RR4ihCL2W" }, implicitPathVariables: void 0 }, { href: { webPageId: "hPd4ReTBa" }, implicitPathVariables: void 0 }, { href: { webPageId: "BNXQfHlnZ" }, implicitPathVariables: void 0 }, { href: { webPageId: "C4p1WG53O" }, implicitPathVariables: void 0 }, { href: { webPageId: "RR4ihCL2W" }, implicitPathVariables: void 0 }, { href: { webPageId: "hPd4ReTBa" }, implicitPathVariables: void 0 }], children: (resolvedLinks) => /* @__PURE__ */ _jsx8(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer, { className: "framer-nvitwm-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Navigation__ty2Bf5m1n-container", nodeId: "ty2Bf5m1n", rendersWithMotion: true, scopeId: "Py8qlUSqF", transformTemplate: transformTemplate1, children: /* @__PURE__ */ _jsx8(KeyboardShortcut, { height: "100%", id: "ty2Bf5m1n", layoutId: "Navigation__ty2Bf5m1n", shortcuts: [{ key: "1", link: resolvedLinks[0], newTab: false }, { key: "2", link: resolvedLinks[1], newTab: false }, { key: "3", link: resolvedLinks[2], newTab: false }, { key: "4", link: resolvedLinks[3], newTab: false }], width: "100%", ...addPropertyOverrides2({ mN8jh0NXd: { shortcuts: [{ key: "1", link: resolvedLinks[4], newTab: false }, { key: "2", link: resolvedLinks[5], newTab: false }, { key: "3", link: resolvedLinks[6], newTab: false }, { key: "4", link: resolvedLinks[7], newTab: false }] }, oPKpRVUxz: { shortcuts: [{ key: "1", link: resolvedLinks[8], newTab: false }, { key: "2", link: resolvedLinks[9], newTab: false }, { key: "3", link: resolvedLinks[10], newTab: false }, { key: "4", link: resolvedLinks[11], newTab: false }] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx8(ResolveLinks, { links: [{ href: { webPageId: "BNXQfHlnZ" }, implicitPathVariables: void 0 }, { href: { webPageId: "BNXQfHlnZ" }, implicitPathVariables: void 0 }, { href: { webPageId: "BNXQfHlnZ" }, implicitPathVariables: void 0 }], children: (resolvedLinks1) => /* @__PURE__ */ _jsx8(ComponentViewportProvider, { height: 19, width: "100px", y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 200) - 0 - 116) / 2) + 8 + 0 + 0 + 0, ...addPropertyOverrides2({ oPKpRVUxz: { width: void 0, y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 200) - 0 - 48) / 2) + 8 + 0 + 0 + 13 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer, { className: "framer-1upxkym-container", layoutDependency, layoutId: "Navigation__Ci16_AJEN-container", nodeId: "Ci16_AJEN", rendersWithMotion: true, scopeId: "Py8qlUSqF", children: /* @__PURE__ */ _jsx8(u0dEx4Hzm_default, { fiNYStQol: resolvedLinks1[0], GiNEVLgfk: "1", height: "100%", id: "Ci16_AJEN", layoutId: "Navigation__Ci16_AJEN", style: { width: "100%" }, TLvxYmRy4: "Home", variant: matchVariant("vQaNi6p_Y"), VyzVpwiCY: UvPxI2Cnv_default, width: "100%", ...addPropertyOverrides2({ mN8jh0NXd: { fiNYStQol: resolvedLinks1[1] }, oPKpRVUxz: { fiNYStQol: resolvedLinks1[2], variant: matchVariant("jiCE2oLVw"), VyzVpwiCY: JdTuvSk2g_default } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx8(ResolveLinks, { links: [{ href: { webPageId: "C4p1WG53O" }, implicitPathVariables: void 0 }, { href: { webPageId: "C4p1WG53O" }, implicitPathVariables: void 0 }, { href: { webPageId: "C4p1WG53O" }, implicitPathVariables: void 0 }], children: (resolvedLinks2) => /* @__PURE__ */ _jsx8(ComponentViewportProvider, { height: 19, width: "100px", y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 200) - 0 - 116) / 2) + 8 + 0 + 0 + 27, ...addPropertyOverrides2({ oPKpRVUxz: { width: void 0, y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 200) - 0 - 48) / 2) + 8 + 0 + 0 + 13 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer, { className: "framer-15y9iq9-container", layoutDependency, layoutId: "Navigation__yiB67tV58-container", nodeId: "yiB67tV58", rendersWithMotion: true, scopeId: "Py8qlUSqF", children: /* @__PURE__ */ _jsx8(u0dEx4Hzm_default, { fiNYStQol: resolvedLinks2[0], GiNEVLgfk: "2", height: "100%", id: "yiB67tV58", layoutId: "Navigation__yiB67tV58", style: { width: "100%" }, TLvxYmRy4: "Experience", variant: matchVariant("vQaNi6p_Y"), VyzVpwiCY: UvPxI2Cnv_default, width: "100%", ...addPropertyOverrides2({ mN8jh0NXd: { fiNYStQol: resolvedLinks2[1] }, oPKpRVUxz: { fiNYStQol: resolvedLinks2[2], variant: matchVariant("jiCE2oLVw"), VyzVpwiCY: B6RKbBfKy_default } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx8(ResolveLinks, { links: [{ href: { webPageId: "RR4ihCL2W" }, implicitPathVariables: void 0 }, { href: { webPageId: "RR4ihCL2W" }, implicitPathVariables: void 0 }, { href: { webPageId: "RR4ihCL2W" }, implicitPathVariables: void 0 }], children: (resolvedLinks3) => /* @__PURE__ */ _jsx8(ComponentViewportProvider, { height: 19, width: "100px", y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 200) - 0 - 116) / 2) + 8 + 0 + 0 + 54, ...addPropertyOverrides2({ oPKpRVUxz: { width: void 0, y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 200) - 0 - 48) / 2) + 8 + 0 + 0 + 13 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer, { className: "framer-rcnn3r-container", layoutDependency, layoutId: "Navigation__Fhk7SDM7G-container", nodeId: "Fhk7SDM7G", rendersWithMotion: true, scopeId: "Py8qlUSqF", children: /* @__PURE__ */ _jsx8(u0dEx4Hzm_default, { fiNYStQol: resolvedLinks3[0], GiNEVLgfk: "3", height: "100%", id: "Fhk7SDM7G", layoutId: "Navigation__Fhk7SDM7G", style: { width: "100%" }, TLvxYmRy4: "About", variant: matchVariant("vQaNi6p_Y"), VyzVpwiCY: UvPxI2Cnv_default, width: "100%", ...addPropertyOverrides2({ mN8jh0NXd: { fiNYStQol: resolvedLinks3[1] }, oPKpRVUxz: { fiNYStQol: resolvedLinks3[2], variant: matchVariant("jiCE2oLVw") } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx8(ResolveLinks, { links: [{ href: { webPageId: "hPd4ReTBa" }, implicitPathVariables: void 0 }, { href: { webPageId: "hPd4ReTBa" }, implicitPathVariables: void 0 }, { href: { webPageId: "hPd4ReTBa" }, implicitPathVariables: void 0 }], children: (resolvedLinks4) => /* @__PURE__ */ _jsx8(ComponentViewportProvider, { height: 19, width: "100px", y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 200) - 0 - 116) / 2) + 8 + 0 + 0 + 81, ...addPropertyOverrides2({ oPKpRVUxz: { width: void 0, y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 200) - 0 - 48) / 2) + 8 + 0 + 0 + 13 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer, { className: "framer-ivdfhi-container", layoutDependency, layoutId: "Navigation__Udi2V0xbE-container", nodeId: "Udi2V0xbE", rendersWithMotion: true, scopeId: "Py8qlUSqF", children: /* @__PURE__ */ _jsx8(u0dEx4Hzm_default, { fiNYStQol: resolvedLinks4[0], GiNEVLgfk: "4", height: "100%", id: "Udi2V0xbE", layoutId: "Navigation__Udi2V0xbE", style: { width: "100%" }, TLvxYmRy4: "Works", variant: matchVariant("vQaNi6p_Y"), VyzVpwiCY: UvPxI2Cnv_default, width: "100%", ...addPropertyOverrides2({ mN8jh0NXd: { fiNYStQol: resolvedLinks4[1] }, oPKpRVUxz: { fiNYStQol: resolvedLinks4[2], variant: matchVariant("jiCE2oLVw"), VyzVpwiCY: MZFTt3Qqu_default } }, baseVariant, gestureVariant) }) }) }) }), isDisplayed1() && /* @__PURE__ */ _jsx8(motion6.div, { className: "framer-abkxfb", "data-framer-name": "000 Toggle", layoutDependency, layoutId: "Navigation__Tnod3EGJh", style: { backgroundColor: "var(--token-80e2e877-1770-4709-9301-042f006e9d76, rgb(205, 205, 205))", borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12 }, children: /* @__PURE__ */ _jsx8(motion6.div, { className: "framer-ubpttv", "data-framer-name": "Knob", layoutDependency, layoutId: "Navigation__spXSTDX4K", style: { backgroundColor: "var(--token-b1267501-1441-4eeb-b00f-1f97d88a1f91, rgb(255, 255, 255))", borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderTopLeftRadius: 8, borderTopRightRadius: 8 }, children: /* @__PURE__ */ _jsx8(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer, { className: "framer-1r6jr84-container", "data-code-component-plugin-id": "84d4c1", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Navigation__DWRhXGpwZ-container", nodeId: "DWRhXGpwZ", rendersWithMotion: true, scopeId: "Py8qlUSqF", children: /* @__PURE__ */ _jsx8(ThemeToggleButton, { darkIconColor: "rgb(148, 148, 148)", defaultTheme: "Light", height: "100%", id: "DWRhXGpwZ", layoutId: "Navigation__DWRhXGpwZ", lightIconColor: "var(--token-a8ff9d6c-5d23-49d8-9264-3793f030258f, rgb(5, 5, 5))", MoonIconColor: "var(--token-b1267501-1441-4eeb-b00f-1f97d88a1f91, rgb(255, 255, 255))", moonSvg: "", size: 20, SunIconColor: "var(--token-a8ff9d6c-5d23-49d8-9264-3793f030258f, rgb(5, 5, 5))", sunSvg: "", switchActiveColor: "var(--token-80e2e877-1770-4709-9301-042f006e9d76, rgb(205, 205, 205))", switchTrackColor: "rgb(66, 66, 66)", toggleType: "Button", width: "100%" }) }) }) }) })] }) }), isDisplayed() && /* @__PURE__ */ _jsx8(motion6.div, { className: "framer-19sxczo", "data-framer-name": "Border", layoutDependency, layoutId: "Navigation__iCxBCfstZ", children: /* @__PURE__ */ _jsx8(motion6.div, { className: "framer-6l4omw", "data-framer-name": "Shadow", layoutDependency, layoutId: "Navigation__C6H9VWYvR", style: { borderTopLeftRadius: 12, boxShadow: "-29px -31px 0px 0px var(--token-ab5da748-fc22-4113-aad7-2c1e1ab621f8, rgb(5, 5, 5))" }, variants: { mN8jh0NXd: { borderTopLeftRadius: 40 } } }) })] }) }) }) });
});
var css6 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-jPjXr.framer-1lokn1, .framer-jPjXr .framer-1lokn1 { display: block; }", ".framer-jPjXr.framer-d6zsv4 { align-content: center; align-items: center; cursor: default; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-jPjXr .framer-mhd3xh { -webkit-user-select: none; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 23px); left: 0px; overflow: visible; pointer-events: none; position: absolute; top: -24px; user-select: none; width: 24px; }", ".framer-jPjXr .framer-1sqqct8 { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: -24px; top: -24px; will-change: var(--framer-will-change-override, transform); z-index: 0; }", ".framer-jPjXr .framer-f27zcg { align-content: center; align-items: center; cursor: default; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 8px; position: relative; width: min-content; z-index: 1; }", ".framer-jPjXr .framer-4e96dx { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 1; }", ".framer-jPjXr .framer-nvitwm-container { flex: none; height: auto; left: 2px; position: absolute; top: 50%; width: auto; z-index: 1; }", ".framer-jPjXr .framer-1upxkym-container, .framer-jPjXr .framer-15y9iq9-container, .framer-jPjXr .framer-rcnn3r-container, .framer-jPjXr .framer-ivdfhi-container { flex: none; height: auto; pointer-events: none; position: relative; width: 100px; }", ".framer-jPjXr .framer-abkxfb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 32px; justify-content: center; overflow: hidden; padding: 4px; position: relative; width: 32px; will-change: var(--framer-will-change-override, transform); }", ".framer-jPjXr .framer-ubpttv { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: hidden; padding: 4px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-jPjXr .framer-1r6jr84-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-jPjXr .framer-19sxczo { -webkit-user-select: none; aspect-ratio: 1 / 1; bottom: -24px; flex: none; height: var(--framer-aspect-ratio-supported, 23px); left: 0px; overflow: visible; pointer-events: none; position: absolute; user-select: none; width: 24px; }", ".framer-jPjXr .framer-6l4omw { bottom: -24px; flex: none; left: 0px; overflow: hidden; position: absolute; right: -24px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: 0; }", ".framer-jPjXr.framer-v-wst29h.framer-d6zsv4, .framer-jPjXr.framer-v-6l45lq.framer-d6zsv4 { cursor: unset; width: min-content; }", ".framer-jPjXr.framer-v-wst29h .framer-mhd3xh { height: var(--framer-aspect-ratio-supported, 80px); order: 0; top: -80px; width: 80px; }", ".framer-jPjXr.framer-v-wst29h .framer-f27zcg, .framer-jPjXr.framer-v-6l45lq .framer-f27zcg { order: 1; }", ".framer-jPjXr.framer-v-wst29h .framer-1upxkym-container, .framer-jPjXr.framer-v-wst29h .framer-15y9iq9-container, .framer-jPjXr.framer-v-wst29h .framer-rcnn3r-container, .framer-jPjXr.framer-v-wst29h .framer-ivdfhi-container { pointer-events: unset; }", ".framer-jPjXr.framer-v-wst29h .framer-19sxczo { bottom: -80px; height: var(--framer-aspect-ratio-supported, 80px); order: 2; width: 80px; }", ".framer-jPjXr.framer-v-6l45lq .framer-4e96dx { flex-direction: row; }", ".framer-jPjXr.framer-v-6l45lq .framer-1upxkym-container, .framer-jPjXr.framer-v-6l45lq .framer-15y9iq9-container, .framer-jPjXr.framer-v-6l45lq .framer-rcnn3r-container, .framer-jPjXr.framer-v-6l45lq .framer-ivdfhi-container { pointer-events: unset; width: auto; }"];
var FramerPy8qlUSqF = withCSS6(Component6, css6, "framer-jPjXr");
var Py8qlUSqF_default = FramerPy8qlUSqF;
FramerPy8qlUSqF.displayName = "Navigation";
FramerPy8qlUSqF.defaultProps = { height: 116, width: 32 };
addPropertyControls8(FramerPy8qlUSqF, { variant: { options: ["Ixlvz7SuN", "mN8jh0NXd", "oPKpRVUxz"], optionTitles: ["Navigation", "Navigation Open", "Navigation mobile"], title: "Variant", type: ControlType8.Enum }, d8IJqm5G0: { title: "Click", type: ControlType8.EventHandler } });
addFonts2(FramerPy8qlUSqF, [{ explicitInter: true, fonts: [] }, ...ShortcutsFonts, ...NavLinkFonts, ...ThemeToggleButtonFonts], { supportsExplicitInterCodegen: true });
FramerPy8qlUSqF.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(u0dEx4Hzm_default, {}, context)]);
} };
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramerPy8qlUSqF", "slots": [], "annotations": { "framerIntrinsicHeight": "116", "framerIntrinsicWidth": "32", "framerColorSyntax": "true", "framerVariables": '{"d8IJqm5G0":"click"}', "framerDisplayContentsDiv": "false", "framerImmutableVariables": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"mN8jh0NXd":{"layout":["auto","auto"]},"oPKpRVUxz":{"layout":["auto","auto"]}}}', "framerComponentViewportWidth": "true", "framerContractVersion": "1", "framerAutoSizeImages": "true" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  Py8qlUSqF_default as default
};
