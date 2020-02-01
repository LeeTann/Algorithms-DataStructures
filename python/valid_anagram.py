def anagram(s1, s2):
    # nlogn solution
    if len(s1) != len(s2):
        return False

    sorted_s1 = ''.join(sorted(s1))
    sorted_s2 = ''.join(sorted(s2))

    print("original_S1: ", sorted_s1)
    print("original_S1: ", sorted_s2)
    if sorted_s1 == sorted_s2:
        return True
    return False

anagram("anagram", "naagarm")