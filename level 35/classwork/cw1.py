from turtle import*

speed(10)
width(6)
import random
colors = ['red', 'yellow', 'green', 'blue', 'purple', 'brown', 'pink']
def square():
    forward(200)
    left(90)
    forward(200)
    left(90)
    forward(200)
    left(90)
    forward(200)

for i in range(4):
    color(random.choice(colors))
    square()

exitonclick()