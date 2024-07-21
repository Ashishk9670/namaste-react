# Namaste React

# Parcel
- Dev build
- Local server
- HMR hot module replacement
- File watching algorithm -written in C++
- Cathcing -faster build
- Image optimisation
- Minification of file
- Bundling of files
- Compress
- Consistent Hashing
- Code Splitting
- Differential bundling -  to support older browsers
- Diagnostic
- Error Handling
- Host on https 
- Tree shaking - remove ununsed code
- Differential dev and prod build

# Food App
/**
 * Header
 * -logo
 * -nav item
 * Body
 * -Search
 * - Card container
 *      -Restaurant Card
 *          -Img
 *          -Name ,Star Rating,Price for two, delivery time,cuisine
 * Footer
 * -Copyright
 * -Address
 * -Links
 */

 # Two types of export and import
 -Default
 export default Componet
 import Component from path

-Named
 export const Component
 import {Component} from "path"

 # React hooks
 -normal JS utility functions
 - useState() - superpowerfull react variables
 - useEffect()

 # Routing
    - client side
    - server side

# Chunking/Code splitting /Dynamic bundling/
# Lazy loading/on demand loading/dynamic import
- 

# Redux toolkit
- Install @reducjs/toolkit, react-redux
- Build our own store
- connect our store to app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Developer - Types of testing
- Unit Testing
- Integration Testing
- End-to-End Testing

# Setting up Testing in our app
- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom