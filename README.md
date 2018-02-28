1. React Boilerplate - https://github.com/react-boilerplate/react-boilerplate. Some of the unnecessary folders and files have been removed
2. Global CSS is written in /app/global-styles.js
3. Component specific styles are written within the component file at top.
4. Self written components are in /app/components/HomePage
5. ESLint is followed (as far as possible)
6. For Storing data, localStorage is used. https://github.com/knadh/localStorageDB - API is used for all localStorage related database. The downside of using this is the data won’t be sync when opened on different computers. This was done to save time from developing a backend or using any 3rd party database.
7. PropTypes check has not been implemented due to time constraints.
8. Pagination has not been implemented
