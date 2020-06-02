## My starter React kit app
Simple react redux starter kit to create new project with simple usefull package.
after installing project you will get list of menu like below:

## Signin Page
```
input textfield using material ui component
input ref contain useRef to get value from input
create fake api request to set loading api response
redirect into homepage screen
set authenticated reducer auth as true
```

## Homepage
```
check if its authenticated or not
if authenticated it will request from https://private-4639ce-ecommerce56.apiary-mock.com to get list data and category
set loading while requesting api
connect to redux
add sign out button to clear data authentication
```

## News Detail
```
find detail from items homepage based on url id
display from detail news reducer
add button buy to purchase order item with news action reducer
```

## Search
```
textfield from material ui template
type keyword with find regex based on items on homepage
```

## Purchase History
```
displaying data from detail news after buy button clicked
list of data items purchase history items reducer
```


## How to use

```
npm install
npm start
```

### Related package

```
material-ui (*UI template reusable component)
axios
axios-mock-adapter (*fake api request data)
react-router
react-redux
redux-thunk
redux-persist (*persisted data to localStorage)
```
