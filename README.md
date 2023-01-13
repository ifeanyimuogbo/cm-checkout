# Chimoney Shopping Cart

An Ecommerce app demo-ing an Amazon-like cart built with Create React App (Javascript -- propTypes for type safety) using dummy data (images fetched from Chimoney API to demo API fetching--- because giftcards weren't available)

## Background

- I implemented the exact same Amazon-like cart interface snapshot shown in the frontend assessment document to demonstrate excellence with frontend and my knack for impressive implementation despite the limitation a static snapshot UI presents (not an actual inspectable/interactable Figma/Sketch/... UI) 🚀🚀🚀
- I avoided the use of 'chimoney' in repository naming to avoid getting plagiarized (Notice 'cm-checkout')
- Live link: https://chimoney-cart-checkout.netlify.app 🚨
- PS: If I had more time, I'd have done proper e2e tests with cypress, used proper skeleton loaders and extended the UI further to capture a full Amazon-like shopping experience.
- For some reason, the chimoney API wasn't returning giftcards. Hence, I had to use dummy-data but still demonstarted my API fetching skill by fetching the images in the featuredProducts array of the '/info/assets' endpoint.

## Technologies

- React JS
- Create React App
- Context API
- Styled Components (I avoided UI libraries as I wanted to demonstrate my dexterity and excellent skill with CSS-in-JS)
- Axios for API fetching

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
