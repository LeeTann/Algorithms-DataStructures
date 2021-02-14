class Solution:
    def findNumOfValidWords(self, words: List[str], puzzles: List[str]) -> List[int]:

        # words to sets
        word_set = [frozenset(word) for word in words]
        count = Counter(word_set)
        ans = []

        for p in puzzles:
            # find sub-strings with dp
            subs = [p[0]]
            for char in p[1:]:
                subs += [char + i for i in subs]
            # count occurance of these sub strings
            valids = 0
            for sub in subs:
                if frozenset(sub) in count:
                    valids += count[frozenset(sub)]
            ans.append(valids)
        return ans
