import cssVars from "css-vars-ponyfill";

const darkTheme = {
  "--layout-secondary": "#1c7fd0",
  "--layout-primary": "#0a111a",
  "--text-primary": "#fff",
  "--text-secondary": "#1c7fd0",
  "--btn-hover": "#fff",
};

const lightTheme = {
  "--layout-secondary": "#0a111a",
  "--layout-primary": "#fff",
  "--text-primary": "#242627",
  "--text-secondary": "#0a111a",
  "--btn-hover": "#024b88",
};

export const darkThemePonyfill = () =>
  cssVars({
    variables: { ...darkTheme },
    silent: true,
    watch: true,
    include: 'style,link[rel="stylesheet"]:not([href*="//"])',
  });

export const lightThemePonyfill = () => {
  cssVars({
    variables: { ...lightTheme },
    silent: true,
    watch: true,
    include: 'style,link[rel="stylesheet"]:not([href*="//"])',
  });
};
