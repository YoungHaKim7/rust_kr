# csv문서에서 내가 원하는정보 뽑아내기


# Q0001: csv에서 2020년도 1월 이후 입사한 직원을 뽑아내라.

- [https://github.com/google/it-cert-automation-practice/blob/master/Course4/Lab4/employees-with-date.csv](https://github.com/google/it-cert-automation-practice/blob/master/Course4/Lab4/employees-with-date.csv)
  - [https://github.com/google/it-cert-automation-practice](https://github.com/google/it-cert-automation-practice)

- [A0001로 이동](#a0001_q0001로-이동)





# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래
# 공백 답은 맨 아래

# 공백 답은 맨 아래


# A0001_[Q0001로 이동](#q0001-csv에서-2020년도-1월-이후-입사한-직원을-뽑아내라)
- Q0001: csv에서 2020년도 1월 이후 입사한 직원을 뽑아내라. 

```rust

use chrono::NaiveDate;
use std::error::Error;
use std::fs::File;
use std::io::{BufRead, BufReader};
use std::str::FromStr; // Add chrono crate for date parsing

fn main() -> Result<(), Box<dyn Error>> {
    let file = File::open("employees-with-date.csv")?;
    let reader = BufReader::new(file);
    let mut lines: Vec<String> = Vec::new();

    for line in reader.lines() {
        let line = line?;
        lines.push(line);
    }

    let threshold_date = NaiveDate::from_str("2020-01-01")?; // Set the threshold date (Jan 1, 2020)

    println!("Lines in the file with date after January 2020:");

    for (i, line) in lines.iter().enumerate() {
        // Split the line into columns (assume CSV format with commas)
        let columns: Vec<&str> = line.split(',').collect();

        if columns.len() >= 2 {
            // Parse the date from the second column (assuming it's in YYYY-MM-DD format)
            if let Ok(date) = NaiveDate::from_str(columns[3]) {
                if date > threshold_date {
                    // If the date is after Jan 1, 2020, print the line
                    println!("{}: {}", i + 1, line);

                    // Optionally, debug the line
                    let mut my_vec: Vec<_> = vec![];
                    my_vec.push(line);
                    dbg!(my_vec);
                }
            }
        }
    }

    Ok(())
}
```

