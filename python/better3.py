# // Days of the week are represented as three-letter strings ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun").
# // Write a function solution that, given a string S representing the day of the week and an integer K (between 0 and 500),
# // returns the day of the week that is K days later.

# // For example, given S = "Wed" and K = 2, the function should return "Fri". Given S = "Sat" and K = 23, the function should return "Mon".


def getDays(day, num):
    day_of_week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    index = day_of_week.index(day)

    new_index = (index + num) % 7
    return day_of_week[new_index]


print(getDays('Wed', 8))
print(getDays('Wed', 2))
print(getDays('Sat', 23))
