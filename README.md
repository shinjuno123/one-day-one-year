# 🐤 One Day One Year(Questionaire Survey Service)


## 🐤 Technical Stack
- HTML
- CSS
- Javascript
- Django
- SQLite by Django ORM



## 🐤 Overview

We developed this web service to let people know how much time is so precious.
At the same time, This service collects respondents information related to life span they want depending on gender.

## 🐤 Preview


https://user-images.githubusercontent.com/72008909/208665660-990d8667-50e0-4037-8153-4c586b9fd649.mp4

- In the first input, You can input your nickname
- Left square box is asking you what is your gender
- Middle square box is asking you when is your birth date
- Right square box is asking you the age you want to die. EX) 75 -> You want to live until age 75
- Under the 3 squares, There is a button. The button is for going to a result page.
- In result page, It describes the position of your age if we expressed a age as 24 hours or a year based on the lifespan age you wrote.
- Next secion in the result page is about how many books you could read since 12 years old.
- Next secion in the result page is about how much money you could save since 12 years old.
- A chart to describe how long people want to live.

## How to start
```
source venv/Scripts/activate
python manage.py migrate
python manage.py runserver
```

