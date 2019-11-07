# Write a function to split a string and convert it into an array of words. For example:
# "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

def string_to_array(string):
    array = list(string.split(' '))
    return array

print(string_to_array("boss is my fav"))

# split() - splits the string into an array
# split(' ') - splits indiviual words into an array with space between

def split_word(word):
    wordArray = []
    for i in range(len(word)):
        wordArray += word[i]
    return wordArray

print(split_word("boss"))