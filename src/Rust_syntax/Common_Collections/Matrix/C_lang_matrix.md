# Matrix매트릭스 저장_다차원 구조로 저장

# link


<hr />


# C언어로 2차원 매트릭스(matrix) 만들기

```c
#include <stdio.h>

int main(void) {
    int arr[10];           // 1D array of size 10
    int arr2d[10][10];     // 2D array (matrix) of size 10x10

    // Example: Initializing the 2D array with values
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 10; j++) {
            arr2d[i][j] = i * 10 + j;  // Assigning some values (e.g., row-major order)
        }
    }

    // 0 으로 초기화하기
    // for (int i = 0; i < 10; i++) {
    //     for (int j = 0; j < 10; j++) {
    //         arr2d[i][j] = 0;
    //     }
    // }

    // Example: Printing the 2D array
    printf("2D Matrix:\n");
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 10; j++) {
            printf("%3d ", arr2d[i][j]);  // Printing each element
        }
        printf("\n");
    }

    return 0;
}
```

- result
```
2D Matrix:
  0   1   2   3   4   5   6   7   8   9
 10  11  12  13  14  15  16  17  18  19
 20  21  22  23  24  25  26  27  28  29
 30  31  32  33  34  35  36  37  38  39
 40  41  42  43  44  45  46  47  48  49
 50  51  52  53  54  55  56  57  58  59
 60  61  62  63  64  65  66  67  68  69
 70  71  72  73  74  75  76  77  78  79
 80  81  82  83  84  85  86  87  88  89
 90  91  92  93  94  95  96  97  98  99
```
