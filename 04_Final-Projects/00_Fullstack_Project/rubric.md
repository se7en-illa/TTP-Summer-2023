## Rubric

| Score | Meaning                     |
| ----- | --------------------------- |
| 0     | Critera not met             |
| 1     | Criteria met inconsistently |
| 2     | Criteria met consistently   |

### Frontend (6/24)

| Criteria                                                                   | Score | Comments |
| -------------------------------------------------------------------------- | ----- | -------- |
| Avoids side effects/mutations in reducers and in renders                   | -/2   |          |
| Takes advantage of components to enforce modularity/separation of concerns | -/2   |          |

### Backend (6/24)

| Criteria                                                                                                 | Score | Comments |
| -------------------------------------------------------------------------------------------------------- | ----- | -------- |
| Properly handles errors in routes (i.e. by passing them to `next`)                                       | -/2   |          |
| Properly manages control flow in routes (i.e. does not send more than one response for the same request) | -/2   |          |
| Selects appropriate data types for database columns                                                      | -/2   |          |

### Code Cleanliness/Maintainability (8/24)

| Criteria                                                                | Score | Comments |
| ----------------------------------------------------------------------- | ----- | -------- |
| Formatting (indentation, whitespace, etc) is consistent                 | -/2   |          |
| No unused/unnecessary code                                              | -/2   |          |
| Uses meaningful/self-documenting variable/function names                | -/2   |          |
| Does not contain blocks of commented code, console.logs or node_modules | -/2   |          |

| along with transpiled files

### Git (4/24)

| Criteria                                     | Score | Comments |
| -------------------------------------------- | ----- | -------- |
| Commits are pushed to GitHub regularly       | -/2   |          |
| Commit messages clearly describe the changes | -/2   |          |

### Deductions

Points may be deducted if you are unable to complete a requirement without full direction from an instructor or a TA. Points may also be deducted for any "hacks" or solutions to problems that do not properly employ the tools at hand (ex. directly modifying the DOM instead of allowing React to modify it for you). Any deductions will be documented below:

---

## Comments

_Comments from your instructor or TA will go here_

## Evaluation

- Requirements score (118 points total, weighted at 70% of total grade)
- Rubric score (24 points total, weighted at 30% of total grade)
- Extra credit (16 points total, for an additional 16% max)

- RAW REQUIREMENT SCORE: \_\_
- RAW RUBRIC SCORE: \_\_
- RAW EC SCORE: \_\_
- DEDUCTIONS: \_\_

- TOTAL: \_\_

```javascript
const getTotal = (
  rawRequirementScore,
  rawRubricScore,
  rawExtraCredit,
  deductions
) => {
  const totalRequirementScore = (rawRequirementScore / 118) * 100 * 0.7;
  const totalRubricScore = (rawRubricScore / 24) * 100 * 0.3;
  const totalExtraCredit = (rawExtraCredit / 16) * 100 * 0.16;

  const total =
    totalRequirementScore + totalRubricScore + totalExtraCredit - deductions;
  return total;
};
```
