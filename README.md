[Application](https://evening-beach-49814.herokuapp.com/portfolio)

# Deploying/Re-deploying

Remember when you're pushing changes to heroku, it will keep the database the exact same, you have to run the seed manually (which is probably better, even if it was accidental).

Type: 
* `heroku run yarn seed` to update

Really, probably much better this way, so that it won't seed the database with each push you do.


# To Do

* With filtering, make a dropdown div. Expand div to show a lot of clickable buttons for the skills. Maybe look into having an input that can be typed into as well. Update the input to reflect button push.
* Add a skills page
* Make that page cool
* More content to home page?
* ~Make accordion sidebar for nav-bar; will only expand when on the main page~
* prettify it (this may be the heaviest time sink? Maybe)
* Add downloadable resume to portfolio

# Possible Ideas

* Click to reveal a word that flies to edge of div. It stops at edge then disintigrates.
* Keep with the database idea (only have login for me)
* have the path salted, hashed, and stored (can only be linked if you know the path, the code won't reveal the path)