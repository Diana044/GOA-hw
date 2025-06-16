def sum_of_minimums(numbers):
    total = 0  
    for row in numbers:
        minimum = min(row) 
        total += minimum   
    return total


def caffeine_buzz(n):
    if n % 3 == 0 and n % 4 == 0:
        result = "Coffee"
    elif n % 3 == 0:
        result = "Java"
    else:
        return "mocha_missing!"

    if n % 2 == 0:
        result += "Script"

    return result