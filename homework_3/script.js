const div1 = document.querySelector(".div--first");
const div2 = document.querySelector(".div--second");

function createTasks() {
    // Task 1
    setTimeout(() => {
        // microtask
        Promise.resolve().then(() => console.log("Microtask 1"));

        // render task
        div1.style.backgroundColor = "pink";
    }, 1000);

    // Task2
    setTimeout(() => {
        // microtask 1
        Promise.resolve().then(() => console.log("Microtask 2"));

        // microtask2
        Promise.resolve().then(() => console.log("Microtask 3"));
    }, 2000);

    // Task3
    setTimeout(() => {
        // microtask
        Promise.resolve().then(() => console.log("Microtask 4"));

        // render task
        div2.textContent = "New text";
    }, 3000);
}
createTasks();
