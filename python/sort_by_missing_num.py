# You’re trying to solve a puzzle that involves arranging squares of numbers according to their missing values. Each square has dimensions 4 × 4, containing all the numbers between 1 and 16 inclusively, except for one missing number represented by “?”. All of these 4 × 4 squares are stored side-by-side within a larger matrix mat with dimensions 4 × (4 * n)(where n represents the number of square matrices).
# Your task is to complete the following steps:
# For each 4 × 4 square, find the value of the missing element and replace the “?” with this value.
# Rearrange the squares inside the larger matrix by these missing values in ascending order. In the case of a tie(if two 4 × 4 matrices have the same missing value), place them in the relative order they were originally presented in the larger matrix mat.
# Return the updated matrix mat as a result.
# Example
# For mat =
# [[“1”, “2”, “3”, “4”],
#  [“?”, “5”, “6”, “10”],
#     [“13”, “16”, “12”, “15”],
#     [“9”, “7”, “8”, “14”]]
# the output should be
# sortByMissingNum(mat) =
# [[“1”, “2”, “3”, “4”],
#  [“11”, “5”, “6”, “10”],
#  [“13”, “16”, “12”, “15”],
#  [“9”, “7”, “8”, “14”]]


def missing_number(matrix, S):
    contains = set()
    for row in matrix:
        contains |= set(row)
    missing_num = (S - contains).pop()
    for row in matrix:
        if '?' in row:
            row[row.index("?")] = missing_num
            break
    return missing_num, matrix


def sort_matrices(matrices):
    S = set('?') | set([str(i) for i in list(range(1, 17))])
    res = []
    for i, matrix in enumerate(matrices):
        num, new_matrix = missing_number(matrix, S)
        res.append((num, i))
        matrices[i] = new_matrix
    res.sort()
    return [matrices[i] for num, i in res]


if __name__ == "__main__":
    matrices = [
               [["1", "2", "3", "4"],  ["?", "5", "6", "10"], [
                   "13", "16", "12", "15"], ["9", "7", "8", "14"]],
               [["1", "2", "3", "4"],  ["11", "5", "6", "10"], [
                   "13", "16", "12", "15"], ["9", "?", "8", "14"]],
               [["1", "2", "3", "4"],  ["12", "5", "6", "10"], [
                   "13", "16", "7", "15"], ["9", "?", "8", "14"]],
    ]
    print(sort_matrices(matrices))
