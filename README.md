# 🔗 Lead Saver Web Extension

This is a simple web app for saving and displaying leads (URLs). It allows users to input links, store them locally in the browser, and access them anytime — even after refreshing.

## 📋 Features

- Save a lead (URL) via input field
- Automatically stores leads using **localStorage**
- Clickable links open in a new tab
- Clear all saved leads with one click

## 🧑‍💻 Tech Stack

- HTML  
- CSS  
- JavaScript (DOM + localStorage)

## 🧱 Structure

### ⚙️HTML
- `input` for entering URLs  
- Two `button`s for saving and clearing leads  
- `ul` element to display saved links  

### ⚙️CSS Highlights
- Responsive layout with minimum width  
- Green-themed buttons and links  
- Clean, modern font and spacing  

### ⚙️JavaScript Functionality
- Saves user input to an array  
- Stores array as JSON in `localStorage`  
- On page load, loads stored links (if any)  
- Renders links dynamically in `<ul>`  
- Clears both localStorage and the screen  
