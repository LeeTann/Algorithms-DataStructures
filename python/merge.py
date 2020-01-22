def merge(arrA, arrB):
    merged_arr = []
    arrA_index = 0
    arrB_index = 0
    while len(merged_arr) < len(arrA) + len(arrB):

        if len(arrB) <= arrB_index:
            merged_arr.append(arrA[arrA_index])
            arrA_index += 1
        elif len(arrA) <= arrA_index:
            merged_arr.append(arrB[arrB_index])
            arrB_index += 1
        elif arrA[arrA_index] <= arrB[arrB_index]:
            merged_arr.append(arrA[arrA_index])
            arrA_index += 1           
        else:
            merged_arr.append(arrB[arrB_index])
            arrB_index += 1
    return merged_arr
arr1 = [1, 3, 5, 6, 7]
arr2 = [2, 4, 8, 9]
print(merge(arr1, arr2))

# def merge(arrA, arrB):
#     merged_arr = []
#     arrA_index = 0
#     arrB_index = 0
#     while len(merged_arr) < len(arrA) + len(arrB):
#         print(
#             f"arrA_index = {arrA_index}, arrB_index = {arrB_index}\n {merged_arr}")
#         if arrB_index <= len(arrB) and arrA[arrA_index] <= arrB[arrB_index]:
#             merged_arr.append(arrA[arrA_index])
#             arrA_index += 1
#         elif len(arrA) <= arrA_index:
#             merged_arr.append(arrB[arrB_index])
#             arrB_index += 1
#         else:
#             merged_arr.append(arrB[arrB_index])
#             arrB_index += 1
#     return merged_arr
# arr1 = [1, 3, 5, 6, 7]
# arr2 = [2, 4, 8, 9]
# print(merge(arr1, arr2))