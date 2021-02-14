# // Maximum possible value by inserting '5'
# // examples:
# // input: 1234 -> output: 51234
# // input: 7643 -> output 76543
# // input: 0 -> output 50
# // input: -661 -> output - 5661


def find_max_value(num):
    if num < 0:
        num = '5' + str(abs(num))
        num = int(num)
        num = num * -1
        print(num)

    my_arr = [int(i) for i in str(num)]

    result = []

    for i in my_arr:
        if i <= 5:
            result.append(5)
            result.append(i)
        else:
            result.append(i)

    return result


# find_max_value(1234)
# find_max_value(-999)
# find_max_value(5)
# find_max_value(0)
# find_max_value(267)
print(find_max_value(670))
