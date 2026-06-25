var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/7GfucdA9ejqyXNh6sGPO/fxpjICNvyN0l4yPVNqn6/D7IfuCeKS.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
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
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
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
  const { style, className, layoutId, variant, uK_o4caD_, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "Bu06Wughj", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-177ar62", className, classNames), "data-framer-name": "Divider", layoutDependency, layoutId: "PageDivider__Bu06Wughj", ref: refBinding, style: { backgroundColor: uK_o4caD_, ...style } }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-6JXoF.framer-li6d2i, .framer-6JXoF .framer-li6d2i { display: block; }", ".framer-6JXoF.framer-177ar62 { height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }"];
var FramerD7IfuCeKS = withCSS(Component, css, "framer-6JXoF");
var D7IfuCeKS_default = FramerD7IfuCeKS;
FramerD7IfuCeKS.displayName = "Page Divider";
FramerD7IfuCeKS.defaultProps = { height: 1, width: 640 };
addPropertyControls(FramerD7IfuCeKS, { uK_o4caD_: { defaultValue: 'var(--token-8d6211f0-201f-4d59-a783-41940afd73af, rgba(5, 5, 5, 0.1)) /* {"name":"Black 10%"} */', title: "Color", type: ControlType.Color } });
addFonts(FramerD7IfuCeKS, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerD7IfuCeKS", "slots": [], "annotations": { "framerComponentViewportWidth": "true", "framerColorSyntax": "true", "framerIntrinsicWidth": "640", "framerContractVersion": "1", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}', "framerAutoSizeImages": "true", "framerDisplayContentsDiv": "false", "framerImmutableVariables": "true", "framerVariables": '{"uK_o4caD_":"color"}', "framerIntrinsicHeight": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  D7IfuCeKS_default as default
};
