const task = document.getElementById("task")
const container = document.getElementsByClassName("container")[0]

//Add task
let counter = 0
document.getElementById("add").addEventListener("click", function() {
    if (task.value) {
        let div = document.createElement("div")
        let input = document.createElement("input")
        let span = document.createElement("span")

        input.type = "checkbox"
        div.appendChild(input)

        span.classList.add("taskText")
        div.appendChild(span)

        container.insertBefore(div, container.children[3])
        document.getElementsByClassName("taskText")[0].innerHTML = task.value
        task.value = "";

        counter ++;
    }
})

//dark-mode
let sun = document.getElementsByClassName("fa-sun")[0].addEventListener("click", function() {
    document.body.classList.toggle("dark-mode")
    document.getElementsByTagName("footer")[0].classList.toggle("dark-mode")

    let icon = document.getElementsByTagName("i")[0]
    if (icon.classList.contains("fa-sun")) icon.classList.replace("fa-sun", "fa-moon")
    else icon.classList.replace("fa-moon", "fa-sun")
})