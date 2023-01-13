# Chimoney Shopping Cart

An Ecommerce app demo-ing an Amazon-like cart built with Create React App (Javascript -- propTypes for type safety) using dummy data (images fetched from Chimoney API to demo API fetching--- because giftcards weren't available)

## Background

- I IMPLEMENTED THE EXACT SAME AMAZON CART UI SHOWN IN THE FRONTEND ASSESSMENT DOCUMENT TO DEMONSTRATE MY KNACK FOR PIXEL-PERFECT UI IMPLEMENTATIONS EVEN WHEN THE UI IS AN ORDINARY JPG IMAGE AND NOT A PROPER INSPECTABLE FIGMA/SKETCH/... FILE 🚀🚀🚀
- I AVOIDED USE OF 'CHIMONEY' FOR REPOSITORY NAMING TO AVOID GETTING PLAGIARIZED (Notice 'cm-checkout')
- Live link: https://chimoney-cart-checkout.netlify.app 🚨
- PS: IF I HAD MORE TIME, I'D HAVE DONE E2E TESTS WITH CYPRESS, USED PROPER SKELETON LOADERS AND EXTENDED THE UI FURTHER TO CAPTURE A FULL AMAZON-LIKE SHOPPING EXPERIENCE.
- FOR SOME REASON, THE CHIMONEY API WASN'T RETURNING GIFT-CARDS, HENCE, I HAD TO USE DUMMY DATA AND YET DEMONSTRATE MY API FETCHING SKILLS BY FETCHING THE 3 IMAGE FILES IN THE featuredProducts ARRAY OF THE CHIMONEY /assets API.

## Technologies

- React JS
- Create React App
- Context API
- Styled Components (I avoided UI libraries as I wanted to demonstrate my dexterity and excellent skill with CSS-in-JS)
- Axios

## Features

- View list of products with images of products fetched from the featuredProducts array of the /assets chimoney API
- Add product to cart
- Remove product from cart
- Increment quantity of products in cart
- Decrement quantity of products in cart
- Auto-calculation of total price of product in cart
- Delete Item from list (temporary deletion --- not persisted in local storage)
- Responsiveness

## PERFORMANCE OPTIMIZATIONS

- Code splitting and lazyloading
- Memoization of components
- Performance-enhancing hooks - useCallbacks...useMemo

## Setup

- Clone project
- Run `yarn` or `npm install` to install all packages.
- Run `yarn start` or `npm run start` to start the development server
- Open http://localhost:3000 to view in browser
- To deploy, follow instructions as outline here - https://facebook.github.io/create-react-app/docs/deployment

## Contact

LinkedIn - [Ifeanyi Muogbo](https://www.linkedin.com/in/ifeanyichukwu-muogbo/)
