// src/custom.d.ts
// ← no imports or exports at top-level, this is a pure ambient file

// Styles and CSS modules
declare module '*.css';
declare module '*.scss';
declare module '*.module.css';
declare module '*.module.scss';

// SVG files → import gives you the URL string
declare module '*.svg' {
  const content: string;
  export default content;
}

// PNG (and other bitmaps) → import gives you the URL string
declare module '*.png' {
  const content: string;
  export default content;
}
