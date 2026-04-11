# 🚀 Intermediate JavaScript

> Level up your JavaScript skills — from objects to async magic!

---

## 📚 What You'll Learn

```
┌────────────────────────────────────────────────────────────
│              Intermediate JavaScript                       │ 
│                                                            │
│   🏗️  OOP  →  🔧 Functional  →  ⚡ Async  →  🛠️ Projects │
└────────────────────────────────────────────────────────────┘
```

---

## 🗺️ Learning Roadmap

```mermaid
flowchart TD
    A([🚀 Start]) --> B[🏗️ Object-Oriented JavaScript]
    B --> C[🔧 Functional Programming]
    C --> D[⚡ Asynchronous Programming]
    D --> E[🛠️ Projects]
    E --> F([🎓 Intermediate JS Complete!])

    style A fill:#4CAF50,color:#fff
    style F fill:#2196F3,color:#fff
    style B fill:#FF9800,color:#fff
    style C fill:#9C27B0,color:#fff
    style D fill:#F44336,color:#fff
    style E fill:#00BCD4,color:#fff
```

---

## 1️⃣ Object-Oriented JavaScript 🏗️

> Model real-world things using objects, classes, and inheritance.

📖 **[→ Full OOP Notes & Examples](./Object-Oriented/README.md)**

```mermaid
flowchart TD
    B1[📦 Objects in Depth] --> B2[⚙️ Functions at Runtime]
    B2 --> B3[🏛️ Classes & Objects]
    B3 --> B4[🎨 OOP Design Patterns]
    B4 --> B5[🦕 Project: Dinosaurs]

    style B1 fill:#FF9800,color:#fff
    style B2 fill:#9C27B0,color:#fff
    style B3 fill:#F44336,color:#fff
    style B4 fill:#00BCD4,color:#fff
    style B5 fill:#795548,color:#fff
```

### Key Concepts
| Topic | Description |
|---|---|
| 📦 Objects in Depth | Create, access, modify & iterate objects |
| ⚙️ Functions at Runtime | First-class functions, scope, closures, IIFE |
| 🏛️ Classes & Objects | Blueprints, constructors, prototypal inheritance |
| 🎨 OOP Design Patterns | Factory functions, mixins, private fields |
| 🦕 Project: Dinosaurs | Build a dino infographic app with OOP |

---

## 2️⃣ Functional Programming 🔧

> Write cleaner, predictable code using functions as first-class citizens.

```mermaid
flowchart LR
    A[📥 Input] --> B[🔧 Pure Function]
    B --> C[📤 Output]
    B -.->|No side effects| B

    D[Array] --> E["map()"]
    E --> F["filter()"]
    F --> G["reduce()"]
    G --> H[Result]

    style B fill:#9C27B0,color:#fff
```

### Key Concepts
| Concept | Description |
|---|---|
| 🧼 Pure Functions | Same input → always same output |
| 🔄 Higher-Order Functions | Functions that take/return functions |
| 🔗 Closures | Function remembers its outer scope |
| 🚫 Immutability | Don't mutate, create new data |
| ⛓️ Chaining | `map()` → `filter()` → `reduce()` |

---

## 3️⃣ Asynchronous Programming ⚡

> Handle time-consuming tasks without blocking the main thread.

```mermaid
sequenceDiagram
    participant JS as 🟡 JS Engine
    participant WEB as 🌐 Web API
    participant Q as 📋 Callback Queue

    JS->>WEB: fetch(url)
    Note over JS: Continues executing...
    WEB-->>Q: Response ready
    Q-->>JS: Execute callback
    Note over JS: Handles response ✅
```

### Evolution of Async JS
```
Callbacks  →  Promises  →  Async/Await
   😵              😊            🤩
(callback     (chaining)    (reads like
  hell)                     sync code)
```

### Key Concepts
| Concept | Description |
|---|---|
| 🔁 Event Loop | Manages execution of async code |
| 📞 Callbacks | Function called after task completes |
| 🤝 Promises | `.then()` / `.catch()` chaining |
| ✨ Async/Await | Clean syntax for promises |
| 🌐 Fetch API | Make HTTP requests |

---

## 4️⃣ Projects 🛠️

> Apply everything you've learned by building real projects!

```
🛠️ Projects
├── 📋 Task Manager App       → OOP + DOM
├── 🌦️ Weather App            → Fetch API + Async/Await
├── 🛒 Shopping Cart          → Functional Programming
└── 💬 Chat UI                → Promises + Events
```

---

## 📊 Topics Overview

```mermaid
pie title Intermediate JavaScript Topics
    "OOP" : 30
    "Functional Programming" : 25
    "Async Programming" : 30
    "Projects" : 15
```

---

## ⚡ Quick Reference

```javascript
// OOP
class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a sound`; }
}

// Functional
const double = arr => arr.map(x => x * 2);

// Async/Await
const getData = async (url) => {
  const res = await fetch(url);
  return res.json();
};
```

---

<div align="center">

**Happy Coding! 💛**

`JavaScript` • `OOP` • `Functional` • `Async` • `Projects`

</div>
