# jquery-jsdom
Docker image for JQuery in command line

Samle usage:

`$ docker run --rm -it phil294/jquery-jsdom '<p>Hello!</p>' '$("a").text()'`

prints

`$ Hello!`

- 1st param: The HTML string
- 2nd param: JavaScript code which is run inside `eval()`. The result is printed out. JQuery is accessible through the variable `$`.
