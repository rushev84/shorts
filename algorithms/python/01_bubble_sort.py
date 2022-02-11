a = [7, 5, -8, 0, 10, 1]
N = len(a) # число элементов в списке

for i in range(0, N-1):
    for j in range(0, N-1-i):
        if a[j] > a[j+1]:
            a[j], a[j+1] = a[j+1], a[j]

print(a)