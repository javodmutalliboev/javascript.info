let promise = Promise.reject(new Error("Promise Failed!"));
setTimeout(() => promise.catch(err => alert("caught")), 1000);

// Error: Promise Failed!
window.addEventListener("unhandledrejection", event => alert(event.reason));