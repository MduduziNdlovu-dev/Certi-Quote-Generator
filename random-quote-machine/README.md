# Random Quote Machine

This is my **Random Quote Machine** project, built as part of my learning journey with freeCodeCamp's Front End Development Libraries curriculum. The goal of this project is to create an app that displays random quotes and allows users to share them on Twitter. I built this project using modern web development tools and libraries to get hands-on experience with React, Redux Toolkit, Vite using **Test Driven Development**.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation and Running](#installation-and-running)
- [What I Learned](#what-i-learned)
- [Future Improvements](#future-improvements)
- [License](#license)

## Overview

The Random Quote Machine fetches quotes from an external API and displays a random quote along with its author. Users can click a button to generate a new quote and share their favorite quotes on Twitter. This project helped me understand:
- How to build a React application with Vite.
- Managing state using Redux Toolkit.
- Handling API requests and dealing with CORS issues.
- Creating responsive and accessible UI components.

## Features

- **Random Quote Display:** On initial load and on button click, a new quote is fetched and displayed.
- **Quote Sharing:** A link is provided to share the current quote on Twitter.
- **Error Handling and Fallbacks:** If the external API fails or has CORS issues, a fallback mechanism using local quotes or an alternative API ensures the app continues to work.
- **Responsive Design:** The layout is centered and styled to be user-friendly.

## Technologies Used

- **React:** I used React to build reusable UI components and manage the application's lifecycle.
- **Redux Toolkit:** This simplified state management, making it easier to update and retrieve the quote data across the application.
- **Vite:** Vite provided a fast and modern development environment, replacing the older Create React App setup.
- **Fetch API:** Used to request random quotes from external APIs.
- **CORS Proxy (Optional):** When the target API did not support CORS, I experimented with a CORS proxy to bypass these restrictions.
- **CSS:** Custom styles ensure that the quote machine is visually appealing and responsive.

## Project Structure

Here's a brief overview of the folder structure:

```
random-quote-machine/
├── node_modules/
├── public/
│   └── index.html  <!-- Contains the FCC test script for project validation -->
├── src/
│   ├── components/
│   │   └── QuoteBox.jsx  <!-- Main component displaying the quote, author, and buttons -->
│   ├── store/
│   │   ├── quoteSlice.js  <!-- Redux slice for managing quote state -->
│   │   └── store.js  <!-- Configuring Redux store -->
│   ├── App.jsx  <!-- Main app component rendering QuoteBox -->
│   ├── App.css  <!-- Styling for the app -->
│   └── main.jsx  <!-- Entry point that wraps the app with Redux Provider -->
├── package.json
└── README.md
```

## Installation and Running

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/random-quote-machine.git
   cd random-quote-machine
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

5. **Run freeCodeCamp Tests:**
   Make sure the following script is included in `index.html` (inside the `<body>` tag):
   ```html
   <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
   ```
   Then, click the **"Run Tests"** button to validate your project against the freeCodeCamp requirements.

## What I Learned

- **React Components & Hooks:** Building components with React and managing side effects with `useEffect` allowed me to fetch and display data dynamically.
- **State Management with Redux:** Using Redux Toolkit made it straightforward to set up actions and reducers to manage the state of my quotes.
- **Modern Tooling with Vite:** I learned how Vite speeds up the development process with its fast bundler and hot module replacement.
- **Handling API Issues:** I faced CORS issues and learned how to troubleshoot them by using proxies and fallback strategies.
- **Responsive Design:** Centering the quote box and ensuring it works well on different devices was a great exercise in CSS.



## License

This project is open source and available under the [MIT License](LICENSE).

---
