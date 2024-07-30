<div align="center">
  <img src="https://github.com/diiaz2910/assets-repo/blob/master/Untitled-removebg-preview.png?raw=true" width="180">
  <a href="https://reactjs.org" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="200" alt="React Logo"></a>
  <h1>Orovi Project</h1>
  <p>A sleek and responsive landing page for Orovi, built as a Single Page Application (SPA) using React and Mantine. Developed with modern web technologies including Vite and TypeScript to ensure optimal performance and maintainability.</p>
  ///////////////////////////////////////////////////////////////////////////////////
</div>



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
