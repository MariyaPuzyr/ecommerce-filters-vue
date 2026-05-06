# 🛒 Product Catalog with Smart Filters (Vue 3)

Live demo: https://ecommerce-filters-vue.vercel.app/

---

## 👀 About the project

This is a small e-commerce UI where I focused on building a real-world product filtering experience.

The idea was to simulate how modern online stores work:  
filters update products instantly, and the state is reflected in the URL so it can be shared.

---

## 🎯 What this project does

- Displays a list of products (name, brand, price)
- Filters products by brand
- Filters by price range
- Sorting (cheap → expensive / expensive → cheap)
- Reset filters in one click
- URL reflects current filter state (shareable link)

---

## ⚙️ How it works (important part)

Instead of manually reloading data, everything is reactive:

- UI changes → state updates
- state updates → products re-calculated
- state is synced with URL

So you can copy the link and open it later with the same filters.

---

## 🧠 What I learned while building it

- How reactive state works in Vue 3
- Composition API (ref, computed, watch)
- Component-based architecture
- Props & events communication
- URL query parameters handling
- Thinking in terms of “data flow”, not just UI

---

## 🧪 Tech stack

- Vue 3 (Composition API)
- Vue Router
- JavaScript (ES6+)
    

---

## 🚀 Result

A simple but realistic UI that behaves like a small part of a real e-commerce platform.
