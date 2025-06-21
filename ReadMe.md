# 🚀 Boilerplate001

This is a basic HTML/CSS/JS boilerplate project with preconfigured tools for linting, testing, commit formatting, and Git hooks.

## 📁 Project Structure

```
boilerplate001/
├── index.html         # Example page
├── js/
│   └── index.js       # Main JavaScript
├── css/
│   └── style.css      # Page styles
├── sum.js             # Example function
├── sum.test.js        # Test for sum.js
├── .husky/            # Git hooks via Husky
├── package.json       # Scripts and dependencies
└── README.md
```

## ⚙️ Scripts

| Command            | Description                              |
|--------------------|------------------------------------------|
| `npm run lint`     | Run ESLint to check code quality         |
| `npm test`         | Run tests using Jest                     |
| `npm run commit`   | Commit using Commitizen (conventional)   |

## ✅ Git Hooks

- `pre-push`: Runs `lint` and `test` before pushing.
- `commit-msg`: Blocks manual commits that do not follow conventional commits.  
  ❗ Always use `npm run commit` to make commits.

## 🌐 Live Demo

[View example page](https://mrhryhorii.github.io/boilerplate001/)

---

## 📦 Installation

```bash
npm install
npx husky install
```

---

## 📜 License

ISC
