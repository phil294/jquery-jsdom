# jquery-jsdom
Docker image for JQuery in command line

Samle usage:

`$ docker run --rm -i phil294/jquery-jsdom '$("p").text()' <<< '<p>Hello!</p>'`

prints

`$ Hello!`

- Reads HTML from stdin
- 1st param: JavaScript code which is run inside `eval()`. The result is printed out. JQuery is accessible through the variable `$`.
