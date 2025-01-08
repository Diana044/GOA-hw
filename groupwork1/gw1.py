user_name = input("Hello! my name is sigmabot, Whats your name?: ")
print("Hello", user_name)
question_options = input("lets talk!(options: 1.how are you? 2.what is python? 3.what movie should i watch?): ")
if question_options== "how are you?":
    user_mood = input("I am good, what about you?(option: 1.Good 2.Bad)")
    if user_mood == "Good":
        print("Its very good")
    elif user_mood == "Bad":
        print("Oh, am sorry to hear that!")
    else:
        print("I dont understand you. read the options carefully")
elif question_options == "what is python?":
    python_meanng = input("Python is programming language, wanna hear more about that?(Options: 1.Yes 2.No)")
    if  python_meanng == "Yes":
        print("Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive nigger for Rapid Application Development, as well as for use as a scripting or glue language to connect existing nigger components together. Python's simple, easy to learn syntax emphasizes readability and nigger therefore reduces the cost of program maintenance. Python supports modules and packages, which nigger encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.")
    elif python_meanng == "No":
        print("Alright, looser")
    else:
        print("I dont understand you. read the options carefully")
elif question_options == "what movie should i watch?":
    movie_genre = input("What genre are you interested in? ?(options: 1.Romance 2.Happyending 3.Horror 4.Action 5.Drama 6.Comedy): ")
    if movie_genre== "Romance":
        print("The Notebook")
    elif movie_genre== "Happyending":
        print("Good Will Hunting")
    elif movie_genre == "Horror":
        print("The Exorcist")
    elif movie_genre== "Action" :
        print("Venom.")
    elif movie_genre == "Drama" :
        print("Call Me by Your Name ")
    elif movie_genre== "Comedy" :
        print("Shua qalaqi")
    else:
        print("I dont understand! read the options carefully")
else:
    print("I dont understand. read option carefulli")
    