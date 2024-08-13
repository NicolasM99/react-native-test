# Welcome to my React Native test 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## 1. My task approach

I wanted to approach this as efficient and maintainable as I could in about 4 hours using the less amount of external libraries, so here is a brief breakdown of what I thought to start building it:

### Why Expo?

Used this tool for making it easier to work accross multiple OS since even web build is supported via Metro

### Why did I use MockAPI?

Because it allowed building an API to handle pagination very easy and free

### Why TypeScript?

It helped me out to ensure the types of information and variable I was working around the project

### Custom Hooks

Built a custom hook to centralize the way that functions and data over my project was handled. Since it was few components that were using these functions and states, didn't move forward to build a Redux logic or use Contexts and Providers

### Styling

Kept a familiar design UI and messages to make it easier to understand for any user. For example, showing enough elements below to let users know that there's more information scrolling, as well as managing titles and description with good contrast to make them easy to read, while keeping enough image information to keep the attention clear

### Infinite scrolling

Used React Native's FlatList component to effitiently load and render batches of items without affecting the performance. Also kept the loading messages clear so if there's low speed connection the user knows always what's the status of the requests being performed

### Data fetching

Used JavaScript's fetch function because since it was only one request being called didn't saw it worth it to add an external library or more complex logic

### React Hooks implementation

Managed states implementing React's own Hooks to improve performance around the app

## 2. Trade-offs during development

In terms of functionality didn't make too much changes during development. However, I was trying to implement a gradient dark background for the images and since didn't see it worth enough to include a external library for it or making a custom component, just left it as a darker solid background for the cards information

## 3. Optimizations and improvements

### Cache management

In order to optimize the endpoint usage and number of times the information is being called, I would adapt a cache or local storage to not load all the items again without needing it

### Unit testing and E2E testing

Just to make sure everything works when escalating the project. I would use Jest for functions and data testing, and Cypress for completing entire user workflows

### Skeleton loaders

These preview elements are a better way to show data loading for the users, preparing them and let them know how the information will be displayed

### Theming

Generalize styles and colors in a better way accross the project, allowing to have more unified UI elements and implement dark-mode

### Translation

I would implement i18next to manage multiple languages in the app

### Gitflow

Implement a better versioning work-flow for team collaboration
