''' You are tasked with processing plane seat reservations for a flight with N rows of seats, labeled from 1 to N. The seats are arranged in ten seats per row, labeled from A to K (excluding letter I). Some seats have already been reserved, and the list of reserved seats is provided as a string S containing seat numbers separated by single spaces (e.g., "1A 3C 2B 20G 5A"). Your objective is to allocate seats for as many four-person families as possible. Each family occupies four seats in one row, which should be next to each other and not across an aisle. Families can be separated by an aisle, but in this case, two people must sit on each side of the aisle. Your task is to write a Python function named "max_four_person_families" that takes the number of rows N and the list of reserved seats as a string S as input and returns the maximum number of four-person families that can be seated in the remaining unreserved seats.

Example usage:

```python
assert max_four_person_families(2, "1A 2F 1C") == 2
```

Please ensure that the function efficiently calculates the maximum number of four-person families that can be seated while adhering to the given constraints:
- Rows are numbered from 1 to N.
- Seats within a row are labeled from A to K (excluding I).
- The reserved seats list S can be provided in any order. '''

def solution(N, S):
    seats = [0] * (N + 1)
    for seat in S.split():
        seats[int(seat[0])] = 1
    families = 0
    for i in range(1, N + 1):
        if seats[i] == 0:
            if seats[i - 1] == 0 and seats[i + 1] == 0:
                families += 1
    return families

print(solution(2, "1A 2F 1c"))