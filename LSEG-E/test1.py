''' Write a Python function named "has_diff_by_one" that takes an array "A" of integers as input and returns "True" if "A" contains at least two elements that differ by 1, and "False" otherwise.

Example usage:

```python
assert has_diff_by_one([71]) == False
assert has_diff_by_one([4, 3]) == True
assert has_diff_by_one([71, 1, 8, 12, 14]) == True
assert has_diff_by_one([4, 10, 8, 5, 9]) == True
assert has_diff_by_one([5, 5, 5, 5, 5]) == False
```

Please make sure to write an efficient algorithm that adheres to the given assumptions:
- N is an integer within the range [1..100,000]
- Each element of array A is an integer within the range [1..1,000,000,000] '''


import timeit

def solution1(A):
    A.sort()
    for i in range(len(A) - 1):
        if A[i + 1] - A[i] == 1:
            return True
    return False

def solution2(A):
    elements_set = set()
    for num in A:
        if num + 1 in elements_set:
            return True
        elements_set.add(num)
    return False

def solution3(A):
    num_set = set(A)

    for num in num_set:
        if num + 1 in num_set or num -1 in num_set:
            return True

    return False

def solution4(A):
  consecutive_elements = {}
  for num in A:
    if num not in consecutive_elements:
      consecutive_elements[num] = 1
    else:
      consecutive_elements[num] += 1

  for num, count in consecutive_elements.items():
    if count >= 2:
      return True

  return False

def solution(A):
    a = sorted(list(set(A)))
    for i in range(len(a)-1):
        if a[i+1] - a[i] == 1:
            return True
    return False

# Test cases
A = [11, 1, 8, 12, 14]
time_solution1 = timeit.timeit(lambda: solution1(A), number=1000)
time_solution2 = timeit.timeit(lambda: solution2(A), number=1000)
time_solution3 = timeit.timeit(lambda: solution3(A), number=1000)
time_solution4 = timeit.timeit(lambda: solution4(A), number=1000)
time_solution_improved = timeit.timeit(lambda: solution(A), number=1000)

print(f"Time taken by solution1: {time_solution1:.6f} seconds")
print(f"Time taken by solution2: {time_solution2:.6f} seconds")
print(f"Time taken by solution3: {time_solution3:.6f} seconds")
print(f"Time taken by solution4: {time_solution3:.6f} seconds")
print(f"Time taken by the improved solution: {time_solution_improved:.6f} seconds")



# print(solution1([71]))  # Output: False
# print(solution1([4, 3]))  # Output: True
# print(solution1([71, 1, 8, 12, 14]))  # Output: True
# print(solution1([4, 10, 8, 5, 9]))  # Output: True
# print(solution1([5, 5, 5, 5, 5]))  # Output: False
# print(".....................")
# print(solution2([71]))  # Output: False
# print(solution2([4, 3]))  # Output: True
# print(solution2([71, 1, 8, 12, 14]))  # Output: True
# print(solution2([4, 10, 8, 5, 9]))  # Output: True
# print(solution2([5, 5, 5, 5, 5]))  # Output: False
# print(".....................")
# print(solution3([71]))  # Output: False
# print(solution3([4, 3]))  # Output: True
# print(solution3([71, 1, 8, 12, 14]))  # Output: True
# print(solution3([4, 10, 8, 5, 9]))  # Output: True
# print(solution3([5, 5, 5, 5, 5]))  # Output: False