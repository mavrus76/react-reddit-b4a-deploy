declare module '*.css' {
  const styles: { [key: string]: string };
  export = styles;
}

declare module '*.jpeg';
declare module '*.jpg';
declare module '*.gif';
declare module '*.png';
declare module '*.svg';

interface Window {
  __token__: string;
}
