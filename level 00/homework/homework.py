print("Diana Dzukaevi")

print("nika aris " + "40 " + "wlis")

from turtle import *

#building a house

speed(10)
width(7)
color("DarkSalmon")
begin_fill()
forward(200)
right(90)

forward(200)
right(90)

forward(200)
right(90)

forward(200)
right(90)
end_fill()
#roof
begin_fill()
color("DarkRed")
left(60)
forward(200)

right(120)
forward(200)
end_fill()

penup()
goto(70, -200)
pendown()

begin_fill()
width(4)
left(150)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()


#door
color("yellow")
begin_fill()
penup()
goto(70, -150)
pendown()
circle(6)
end_fill()

#windows
color("blue")
penup()
goto(30, -7)
pendown()

begin_fill()
forward(50)
left(90)
forward(45)
left(90)
forward(50)
left(90)
forward(45)
end_fill()

#window2

penup()
goto(135, -7)
pendown()

begin_fill()
left(90)
forward(50)
left(90)
forward(45)
left(90)
forward(50)
left(90)
forward(45)
end_fill()

#heart
color("red")

penup()
goto(-160, 140)
pendown()
begin_fill()
forward(60)
left(120)
forward(60)
left(120)
forward(60)
end_fill()
begin_fill()
circle(16)
end_fill()
penup()
goto(-220, 140)
pendown()
left(30)
right(180)
begin_fill()
circle(18)
end_fill()



exitonclick()

