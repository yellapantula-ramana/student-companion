# Arithmetic Progressions - Learning Path

## 1. Concept Introduction

### What is an Arithmetic Progression?

An **Arithmetic Progression (AP)** is a sequence of numbers in which each term is obtained by adding a fixed number to the preceding term, except the first term.

**Everyday Examples:**
- 💰 Savings: Adding ₹100 every month to your piggy bank
- 🎂 Age: Your age increases by 1 year each birthday
- 🏃 Running: Increasing running distance by 500m each day
- 📚 Reading: Reading 10 pages more each day than the previous day
- 🌡️ Temperature: Temperature dropping by 2°C every hour

### Understanding Arithmetic Progressions:

```
ARITHMETIC PROGRESSION: 2, 5, 8, 11, 14, ...
                        │   │   │   │   │
                        │   │   │   │   └── 5th term (a₅ = 14)
                        │   │   │   └────── 4th term (a₄ = 11)
                        │   │   └────────── 3rd term (a₃ = 8)
                        │   └────────────── 2nd term (a₂ = 5)
                        └────────────────── 1st term (a₁ = a = 2)
                        
Common Difference (d) = 5 - 2 = 8 - 5 = 11 - 8 = 3
```

**Key Components:**

| Term | Meaning | Symbol | Example |
|------|---------|--------|---------|
| **First Term** | The starting number of AP | a or a₁ | 2 |
| **Common Difference** | Fixed number added to get next term | d | 3 |
| **nth Term** | The term at position n | aₙ | a₅ = 14 |
| **Sum of n terms** | Sum of first n terms | Sₙ | S₅ = 40 |
| **Sequence** | List of numbers in order | - | 2, 5, 8, 11, ... |

---

## 2. Micro-topic Breakdown

This chapter is divided into the following key concepts:

```
Arithmetic Progressions
├── 5.1 Introduction to AP
│   ├── Definition and examples
│   ├── First term and common difference
│   └── Finite and infinite AP
├── 5.2 nth Term of an AP
│   ├── Formula: aₙ = a + (n-1)d
│   ├── Finding specific terms
│   └── Finding number of terms
├── 5.3 Sum of First n Terms
│   ├── Formula: Sₙ = n/2[2a + (n-1)d]
│   ├── Alternative: Sₙ = n/2(a + l)
│   └── Applications
└── 5.4 Applications of AP
    ├── Word problems
    ├── Real-life situations
    └── Problem-solving strategies
```

---

## 3. Concept Explanations

### 3.1 Introduction to AP

An arithmetic progression is a sequence where the difference between consecutive terms is constant.

**General Form:**

$$ a, a + d, a + 2d, a + 3d, ..., a + (n-1)d $$

where:
- $a$ = first term
- $d$ = common difference
- $n$ = number of terms

#### Examples of AP:

| Sequence | First Term (a) | Common Difference (d) | Is AP? |
|----------|---------------|----------------------|--------|
| 2, 5, 8, 11, 14, ... | 2 | 3 | ✅ Yes |
| 10, 7, 4, 1, -2, ... | 10 | -3 | ✅ Yes |
| 1, 1, 1, 1, 1, ... | 1 | 0 | ✅ Yes |
| 1, 2, 4, 8, 16, ... | 1 | Not constant | ❌ No |
| 1, 4, 9, 16, 25, ... | 1 | Not constant | ❌ No |

#### Types of AP:

| Type | Description | Example |
|------|-------------|---------|
| **Finite AP** | Has a last term | 2, 5, 8, 11, 14 |
| **Infinite AP** | Continues indefinitely | 2, 5, 8, 11, 14, ... |
| **Increasing AP** | d > 0 | 3, 7, 11, 15, ... |
| **Decreasing AP** | d < 0 | 20, 15, 10, 5, ... |
| **Constant AP** | d = 0 | 5, 5, 5, 5, ... |

---

### 3.2 nth Term of an AP

The **nth term** (general term) of an AP is given by:

$$ a_n = a + (n - 1)d $$

where:
- $a_n$ = nth term
- $a$ = first term
- $d$ = common difference
- $n$ = position of term

#### Derivation:

```
1st term: a₁ = a = a + (1-1)d
2nd term: a₂ = a + d = a + (2-1)d
3rd term: a₃ = a + 2d = a + (3-1)d
4th term: a₄ = a + 3d = a + (4-1)d
...
nth term: aₙ = a + (n-1)d
```

#### Finding nth Term from the End:

If l is the last term, the nth term from the end is:

$$ a_n (\text{from end}) = l - (n - 1)d $$

Or, if we reverse the AP, the new first term is l and common difference is -d.

---

### 3.3 Sum of First n Terms of an AP

The **sum of first n terms** is given by:

$$ S_n = \frac{n}{2}[2a + (n - 1)d] $$

#### Alternative Formula (when last term l is known):

$$ S_n = \frac{n}{2}(a + l) $$

where $l = a + (n-1)d$ is the last term.

#### Derivation:

```
Sₙ = a + (a+d) + (a+2d) + ... + [a+(n-1)d]     ... (i)
Sₙ = l + (l-d) + (l-2d) + ... + [l-(n-1)d]     ... (ii)

Adding (i) and (ii):
2Sₙ = (a+l) + (a+l) + ... + (a+l)    [n times]
2Sₙ = n(a+l)
Sₙ = n/2(a+l)

Since l = a + (n-1)d:
Sₙ = n/2[2a + (n-1)d]
```

---

### 3.4 Important Results

#### Sum of First n Natural Numbers:

$$ 1 + 2 + 3 + ... + n = \frac{n(n + 1)}{2} $$

#### Sum of First n Odd Numbers:

$$ 1 + 3 + 5 + ... + (2n-1) = n^2 $$

#### Sum of First n Even Numbers:

$$ 2 + 4 + 6 + ... + 2n = n(n + 1) $$

---

## 4. Guided Examples

### Example 1: Identifying AP

**Question:** Which of the following form an AP? Give reason.
(i) 4, 10, 16, 22, ...
(ii) 1, 3, 9, 27, ...
(iii) 5, 5, 5, 5, ...

**Step-by-Step Solution:**

**(i) 4, 10, 16, 22, ...**

| Check | Calculation | Result |
|-------|-------------|--------|
| a₂ - a₁ | 10 - 4 | 6 |
| a₃ - a₂ | 16 - 10 | 6 |
| a₄ - a₃ | 22 - 16 | 6 |

Since the difference is constant (d = 6), **it is an AP**.

**(ii) 1, 3, 9, 27, ...**

| Check | Calculation | Result |
|-------|-------------|--------|
| a₂ - a₁ | 3 - 1 | 2 |
| a₃ - a₂ | 9 - 3 | 6 |

Since the difference is not constant, **it is NOT an AP**.

**(iii) 5, 5, 5, 5, ...**

| Check | Calculation | Result |
|-------|-------------|--------|
| a₂ - a₁ | 5 - 5 | 0 |
| a₃ - a₂ | 5 - 5 | 0 |

Since the difference is constant (d = 0), **it is an AP** (constant AP).

---

### Example 2: Finding nth Term

**Question:** Find the 15th term of the AP: 3, 8, 13, 18, ...

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify a and d | a = 3, d = 8 - 3 = 5 |
| 2 | Use formula | $a_n = a + (n-1)d$ |
| 3 | Substitute | $a_{15} = 3 + (15-1) \times 5$ |
| 4 | Calculate | $a_{15} = 3 + 14 \times 5 = 3 + 70 = 73$ |

**Final Answer:** The 15th term is **73**

---

### Example 3: Finding Number of Terms

**Question:** How many terms are there in the AP: 7, 11, 15, ..., 83?

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify values | a = 7, d = 4, $a_n$ = 83 |
| 2 | Use formula | $a_n = a + (n-1)d$ |
| 3 | Substitute | $83 = 7 + (n-1) \times 4$ |
| 4 | Solve | $76 = (n-1) \times 4$ |
| | | $n - 1 = 19$ |
| | | $n = 20$ |

**Final Answer:** There are **20 terms** in the AP

---

### Example 4: Finding Sum of n Terms

**Question:** Find the sum of first 20 terms of the AP: 2, 7, 12, 17, ...

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify values | a = 2, d = 5, n = 20 |
| 2 | Use formula | $S_n = \frac{n}{2}[2a + (n-1)d]$ |
| 3 | Substitute | $S_{20} = \frac{20}{2}[2(2) + (20-1) \times 5]$ |
| 4 | Calculate | $S_{20} = 10[4 + 95] = 10 \times 99 = 990$ |

**Final Answer:** The sum of first 20 terms is **990**

---

### Example 5: Word Problem

**Question:** A man starts a job with a monthly salary of ₹20,000. He gets an annual increment of ₹1,500. Find his salary in the 10th year and total earnings in 10 years.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify AP | Salaries form an AP |
| 2 | Identify values | a = 20000, d = 1500, n = 10 |
| 3 | Find 10th year salary | $a_{10} = 20000 + (10-1) \times 1500$ |
| | | $a_{10} = 20000 + 13500 = 33500$ |
| 4 | Find total earnings | $S_{10} = \frac{10}{2}[2(20000) + (10-1) \times 1500]$ |
| | | $S_{10} = 5[40000 + 13500] = 5 \times 53500 = 267500$ |

**Final Answer:** 
- Salary in 10th year: **₹33,500**
- Total earnings in 10 years: **₹2,67,500**

---

## 5. Practice Questions

### SECTION A: Multiple Choice Questions (30 Questions - 1 Mark Each)

**Q1.** The common difference of the AP: 5, 2, -1, -4, ... is:
- (A) 3
- (B) -3
- (C) 7
- (D) -7

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) -3

**Explanation:** $d = 2 - 5 = -3$
</details>

---

**Q2.** The 10th term of the AP: 2, 7, 12, ... is:
- (A) 45
- (B) 47
- (C) 49
- (D) 51

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 47

**Explanation:** $a_{10} = 2 + (10-1) \times 5 = 2 + 45 = 47$
</details>

---

**Q3.** The sum of first n natural numbers is:
- (A) $\frac{n(n+1)}{2}$
- (B) $\frac{n(n-1)}{2}$
- (C) $n^2$
- (D) $n(n+1)$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $\frac{n(n+1)}{2}$

**Explanation:** This is the standard formula for sum of first n natural numbers.
</details>

---

**Q4.** Which term of the AP: 3, 8, 13, ... is 78?
- (A) 15th
- (B) 16th
- (C) 17th
- (D) 18th

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 16th

**Explanation:** $78 = 3 + (n-1) \times 5 \Rightarrow n = 16$
</details>

---

**Q5.** The sum of first 10 terms of the AP: 1, 3, 5, ... is:
- (A) 50
- (B) 100
- (C) 150
- (D) 200

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 100

**Explanation:** $S_{10} = \frac{10}{2}[2(1) + (10-1) \times 2] = 5[2 + 18] = 100$
</details>

---

**Q6.** If the nth term of an AP is $2n + 1$, then the common difference is:
- (A) 1
- (B) 2
- (C) 3
- (D) 4

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 2

**Explanation:** $a_1 = 3, a_2 = 5, d = 5 - 3 = 2$
</details>

---

**Q7.** The first term and common difference of an AP are 5 and 3 respectively. The 8th term is:
- (A) 24
- (B) 25
- (C) 26
- (D) 27

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 26

**Explanation:** $a_8 = 5 + (8-1) \times 3 = 5 + 21 = 26$
</details>

---

**Q8.** The sum of first 20 odd natural numbers is:
- (A) 200
- (B) 300
- (C) 400
- (D) 500

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 400

**Explanation:** Sum of first n odd numbers = $n^2 = 20^2 = 400$
</details>

---

**Q9.** Which of the following is NOT an AP?
- (A) 1, 3, 5, 7, ...
- (B) 2, 4, 8, 16, ...
- (C) 10, 5, 0, -5, ...
- (D) 7, 7, 7, 7, ...

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 2, 4, 8, 16, ...

**Explanation:** The difference is not constant (2, 4, 8).
</details>

---

**Q10.** The 5th term from the end of the AP: 2, 7, 12, ..., 97 is:
- (A) 72
- (B) 77
- (C) 82
- (D) 87

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 77

**Explanation:** $a_5 (\text{from end}) = 97 - (5-1) \times 5 = 97 - 20 = 77$
</details>

---

**Q11.** If $a = 3, d = 4, n = 15$, then $S_n$ is:
- (A) 435
- (B) 450
- (C) 465
- (D) 480

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 465

**Explanation:** $S_{15} = \frac{15}{2}[2(3) + (15-1) \times 4] = \frac{15}{2}[6 + 56] = 465$
</details>

---

**Q12.** The number of two-digit numbers divisible by 3 is:
- (A) 30
- (B) 33
- (C) 35
- (D) 40

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 30

**Explanation:** AP: 12, 15, 18, ..., 99. $99 = 12 + (n-1) \times 3 \Rightarrow n = 30$
</details>

---

**Q13.** The middle term of the AP: 6, 13, 20, ..., 216 is:
- (A) 108
- (B) 111
- (C) 114
- (D) 117

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 111

**Explanation:** n = 31, middle term = 16th term = $6 + 15 \times 7 = 111$
</details>

---

**Q14.** If the sum of n terms of an AP is $3n^2 + 5n$, then the common difference is:
- (A) 3
- (B) 5
- (C) 6
- (D) 8

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 6

**Explanation:** $S_n = 3n^2 + 5n$. $d = 2 \times 3 = 6$
</details>

---

**Q15.** The 11th term from the last term of the AP: 10, 7, 4, ..., -62 is:
- (A) -30
- (B) -32
- (C) -34
- (D) -36

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) -32

**Explanation:** $a_{11} (\text{from end}) = -62 - (11-1) \times (-3) = -62 + 30 = -32$
</details>

---

**Q16.** The sum of all natural numbers from 1 to 100 is:
- (A) 4050
- (B) 5050
- (C) 6050
- (D) 7050

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 5050

**Explanation:** $S_{100} = \frac{100 \times 101}{2} = 5050$
</details>

---

**Q17.** If $a_n = 3n - 2$, then $a_{10}$ is:
- (A) 25
- (B) 28
- (C) 30
- (D) 32

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 28

**Explanation:** $a_{10} = 3(10) - 2 = 28$
</details>

---

**Q18.** The first negative term of the AP: 24, 21, 18, ... is:
- (A) 10th
- (B) 11th
- (C) 12th
- (D) 13th

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 11th

**Explanation:** $a_{11} = 24 + 10 \times (-3) = -6$ (first negative)
</details>

---

**Q19.** The sum of first n even natural numbers is:
- (A) $n^2$
- (B) $n(n+1)$
- (C) $\frac{n(n+1)}{2}$
- (D) $2n^2$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $n(n+1)$

**Explanation:** Sum of first n even numbers = $2 + 4 + 6 + ... + 2n = n(n+1)$
</details>

---

**Q20.** If the 3rd term of an AP is 12 and the 7th term is 24, then the common difference is:
- (A) 2
- (B) 3
- (C) 4
- (D) 5

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 3

**Explanation:** $a_7 - a_3 = 4d \Rightarrow 24 - 12 = 4d \Rightarrow d = 3$
</details>

---

**Q21.** The sum of the AP: 5, 3, 1, -1, ... up to 10 terms is:
- (A) -40
- (B) -50
- (C) -60
- (D) -70

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) -40

**Explanation:** $S_{10} = \frac{10}{2}[2(5) + (10-1) \times (-2)] = 5[10 - 18] = -40$
</details>

---

**Q22.** Which term of the AP: 21, 18, 15, ... is -81?
- (A) 34th
- (B) 35th
- (C) 36th
- (D) 37th

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 35th

**Explanation:** $-81 = 21 + (n-1) \times (-3) \Rightarrow n = 35$
</details>

---

**Q23.** The sum of all two-digit odd numbers is:
- (A) 2450
- (B) 2475
- (C) 2500
- (D) 2525

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 2475

**Explanation:** AP: 11, 13, ..., 99. n = 45, $S_{45} = \frac{45}{2}(11 + 99) = 2475$
</details>

---

**Q24.** If $S_n = 2n^2 + 3n$, then the first term is:
- (A) 2
- (B) 3
- (C) 5
- (D) 7

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 5

**Explanation:** $a = S_1 = 2(1)^2 + 3(1) = 5$
</details>

---

**Q25.** The common difference of the AP: $\frac{1}{3}, \frac{5}{3}, \frac{9}{3}, ...$ is:
- (A) $\frac{1}{3}$
- (B) $\frac{2}{3}$
- (C) $\frac{4}{3}$
- (D) $\frac{5}{3}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) $\frac{4}{3}$

**Explanation:** $d = \frac{5}{3} - \frac{1}{3} = \frac{4}{3}$
</details>

---

**Q26.** The 20th term from the last term of the AP: 3, 8, 13, ..., 253 is:
- (A) 153
- (B) 158
- (C) 163
- (D) 168

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 158

**Explanation:** $a_{20} (\text{from end}) = 253 - (20-1) \times 5 = 253 - 95 = 158$
</details>

---

**Q27.** The sum of first 15 multiples of 8 is:
- (A) 960
- (B) 980
- (C) 1000
- (D) 1020

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 960

**Explanation:** AP: 8, 16, ..., 120. $S_{15} = \frac{15}{2}(8 + 120) = 960$
</details>

---

**Q28.** If the nth term of an AP is $5 - 2n$, then the common difference is:
- (A) -2
- (B) 2
- (C) -3
- (D) 3

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) -2

**Explanation:** $a_1 = 3, a_2 = 1, d = 1 - 3 = -2$
</details>

---

**Q29.** The number of terms in the AP: 18, $15\frac{1}{2}$, 13, ..., -47 is:
- (A) 25
- (B) 26
- (C) 27
- (D) 28

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 27

**Explanation:** $a = 18, d = -\frac{5}{2}, a_n = -47$. Solving gives $n = 27$
</details>

---

**Q30.** The sum of the first 100 positive integers is:
- (A) 4950
- (B) 5000
- (C) 5050
- (D) 5100

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 5050

**Explanation:** $S_{100} = \frac{100 \times 101}{2} = 5050$
</details>

---

### SECTION B: Short Answer Questions (20 Questions - 2-3 Marks Each)

**Q31.** Find the 31st term of an AP whose 11th term is 38 and the 16th term is 73.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given: $a_{11} = 38$ and $a_{16} = 73$

$$a + 10d = 38$$ ... (i)
$$a + 15d = 73$$ ... (ii)

Subtracting (i) from (ii):
$$5d = 35 \Rightarrow d = 7$$

From (i): $a + 70 = 38 \Rightarrow a = -32$

Now: $a_{31} = a + 30d = -32 + 30 \times 7 = -32 + 210 = 178$

**Answer:** 178
</details>

---

**Q32.** Find the sum of the AP: 2, 7, 12, ..., to 10 terms.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Here: $a = 2, d = 5, n = 10$

$$S_n = \frac{n}{2}[2a + (n-1)d]$$

$$S_{10} = \frac{10}{2}[2(2) + (10-1) \times 5]$$

$$S_{10} = 5[4 + 45] = 5 \times 49 = 245$$

**Answer:** 245
</details>

---

**Q33.** How many multiples of 4 lie between 10 and 250?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

First multiple of 4 after 10 = 12
Last multiple of 4 before 250 = 248

AP: 12, 16, 20, ..., 248

Here: $a = 12, d = 4, a_n = 248$

$$248 = 12 + (n-1) \times 4$$
$$236 = (n-1) \times 4$$
$$n - 1 = 59$$
$$n = 60$$

**Answer:** 60 multiples
</details>

---

**Q34.** Find the sum of all natural numbers between 100 and 500 which are divisible by 7.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

First number after 100 divisible by 7 = 105
Last number before 500 divisible by 7 = 497

AP: 105, 112, 119, ..., 497

Here: $a = 105, d = 7, l = 497$

Finding n:
$$497 = 105 + (n-1) \times 7$$
$$392 = (n-1) \times 7$$
$$n = 57$$

$$S_{57} = \frac{57}{2}(105 + 497) = \frac{57}{2} \times 602 = 17157$$

**Answer:** 17,157
</details>

---

**Q35.** The first term of an AP is 5, the last term is 45 and the sum is 400. Find the number of terms and the common difference.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given: $a = 5, l = 45, S_n = 400$

$$S_n = \frac{n}{2}(a + l)$$
$$400 = \frac{n}{2}(5 + 45)$$
$$400 = \frac{n}{2} \times 50$$
$$n = 16$$

Now: $l = a + (n-1)d$
$$45 = 5 + (16-1)d$$
$$40 = 15d$$
$$d = \frac{8}{3}$$

**Answer:** $n = 16, d = \frac{8}{3}$
</details>

---

**Q36.** Find the sum of first 51 terms of an AP whose 2nd and 3rd terms are 14 and 18 respectively.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given: $a_2 = 14, a_3 = 18$

$$d = a_3 - a_2 = 18 - 14 = 4$$

$$a = a_2 - d = 14 - 4 = 10$$

Now: $S_{51} = \frac{51}{2}[2(10) + (51-1) \times 4]$

$$S_{51} = \frac{51}{2}[20 + 200] = \frac{51}{2} \times 220 = 5610$$

**Answer:** 5610
</details>

---

**Q37.** If the sum of first 7 terms of an AP is 49 and that of 17 terms is 289, find the sum of first n terms.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given: $S_7 = 49, S_{17} = 289$

$$S_7 = \frac{7}{2}[2a + 6d] = 49$$
$$2a + 6d = 14$$ ... (i)

$$S_{17} = \frac{17}{2}[2a + 16d] = 289$$
$$2a + 16d = 34$$ ... (ii)

Subtracting (i) from (ii):
$$10d = 20 \Rightarrow d = 2$$

From (i): $2a + 12 = 14 \Rightarrow a = 1$

$$S_n = \frac{n}{2}[2(1) + (n-1) \times 2] = \frac{n}{2}[2 + 2n - 2] = n^2$$

**Answer:** $S_n = n^2$
</details>

---

**Q38.** Show that $a_1, a_2, ..., a_n$ form an AP where $a_n = 3 + 4n$. Also find the sum of first 15 terms.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

$a_n = 3 + 4n$

$a_1 = 3 + 4(1) = 7$
$a_2 = 3 + 4(2) = 11$
$a_3 = 3 + 4(3) = 15$

$d = a_2 - a_1 = 11 - 7 = 4$
$d = a_3 - a_2 = 15 - 11 = 4$

Since difference is constant, it forms an **AP**.

For sum of first 15 terms:
$a = 7, d = 4, n = 15$

$$S_{15} = \frac{15}{2}[2(7) + (15-1) \times 4] = \frac{15}{2}[14 + 56] = \frac{15}{2} \times 70 = 525$$

**Answer:** It is an AP, $S_{15} = 525$
</details>

---

**Q39.** Find the 20th term from the last term of the AP: 3, 8, 13, ..., 253.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Last term $l = 253$, common difference $d = 5$

**Method 1:** Using formula from end
$$a_{20} (\text{from end}) = l - (20-1)d = 253 - 19 \times 5 = 253 - 95 = 158$$

**Method 2:** Reversing the AP
New AP: 253, 248, 243, ... (d = -5)
$$a_{20} = 253 + (20-1) \times (-5) = 253 - 95 = 158$$

**Answer:** 158
</details>

---

**Q40.** The sum of 4th and 8th terms of an AP is 24 and the sum of 6th and 10th terms is 44. Find the first three terms.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given:
$$a_4 + a_8 = 24$$
$$(a + 3d) + (a + 7d) = 24$$
$$2a + 10d = 24$$ ... (i)

$$a_6 + a_{10} = 44$$
$$(a + 5d) + (a + 9d) = 44$$
$$2a + 14d = 44$$ ... (ii)

Subtracting (i) from (ii):
$$4d = 20 \Rightarrow d = 5$$

From (i): $2a + 50 = 24 \Rightarrow a = -13$

**First three terms:** -13, -8, -3

**Answer:** -13, -8, -3
</details>

---

**Q41.** In which year did Subba Rao's income reach ₹7000 if he started work in 1995 at ₹5000 with an annual increment of ₹200?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

AP of salaries: 5000, 5200, 5400, ...

Here: $a = 5000, d = 200, a_n = 7000$

$$7000 = 5000 + (n-1) \times 200$$
$$2000 = (n-1) \times 200$$
$$n - 1 = 10$$
$$n = 11$$

11th year from 1995 = 1995 + 10 = 2005

**Answer:** Year 2005
</details>

---

**Q42.** Ramkali saved ₹5 in the first week and increased her weekly savings by ₹1.75 each week. If in the nth week, her savings become ₹20.75, find n.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

AP of savings: 5, 6.75, 8.50, ...

Here: $a = 5, d = 1.75, a_n = 20.75$

$$20.75 = 5 + (n-1) \times 1.75$$
$$15.75 = (n-1) \times 1.75$$
$$n - 1 = 9$$
$$n = 10$$

**Answer:** n = 10 weeks
</details>

---

**Q43.** Find the sum of all three-digit natural numbers which are divisible by 13.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

First 3-digit number divisible by 13 = 104
Last 3-digit number divisible by 13 = 988

AP: 104, 117, 130, ..., 988

Here: $a = 104, d = 13, l = 988$

Finding n:
$$988 = 104 + (n-1) \times 13$$
$$884 = (n-1) \times 13$$
$$n = 69$$

$$S_{69} = \frac{69}{2}(104 + 988) = \frac{69}{2} \times 1092 = 37674$$

**Answer:** 37,674
</details>

---

**Q44.** If the sum of first n terms of an AP is $4n - n^2$, find the first term, sum of first two terms, and the 10th term.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given: $S_n = 4n - n^2$

**First term:** $a = S_1 = 4(1) - 1^2 = 3$

**Sum of first two terms:** $S_2 = 4(2) - 2^2 = 8 - 4 = 4$

**Second term:** $a_2 = S_2 - S_1 = 4 - 3 = 1$

**Common difference:** $d = a_2 - a_1 = 1 - 3 = -2$

**10th term:** $a_{10} = a + 9d = 3 + 9(-2) = 3 - 18 = -15$

**Answer:** $a = 3, S_2 = 4, a_{10} = -15$
</details>

---

**Q45.** A contract on construction job specifies a penalty for delay of completion beyond a certain date as follows: ₹200 for the first day, ₹250 for the second day, ₹300 for the third day, etc. How much money does the contractor have to pay as penalty if he delays the work by 30 days?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

AP of penalties: 200, 250, 300, ...

Here: $a = 200, d = 50, n = 30$

$$S_{30} = \frac{30}{2}[2(200) + (30-1) \times 50]$$

$$S_{30} = 15[400 + 1450] = 15 \times 1850 = 27750$$

**Answer:** ₹27,750
</details>

---

**Q46.** A sum of ₹700 is to be used to give seven cash prizes to students. If each prize is ₹20 less than the preceding prize, find the value of each prize.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let the first prize be ₹a.

AP: a, (a-20), (a-40), ..., (a-120)

Here: $a = a, d = -20, n = 7, S_7 = 700$

$$S_7 = \frac{7}{2}[2a + (7-1)(-20)] = 700$$

$$\frac{7}{2}[2a - 120] = 700$$

$$2a - 120 = 200$$

$$a = 160$$

**Prizes:** ₹160, ₹140, ₹120, ₹100, ₹80, ₹60, ₹40

**Answer:** ₹160, ₹140, ₹120, ₹100, ₹80, ₹60, ₹40
</details>

---

**Q47.** Find the sum of the first 15 multiples of 8.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

AP: 8, 16, 24, ..., 120

Here: $a = 8, d = 8, n = 15$

Last term: $l = 8 \times 15 = 120$

$$S_{15} = \frac{15}{2}(8 + 120) = \frac{15}{2} \times 128 = 15 \times 64 = 960$$

**Answer:** 960
</details>

---

**Q48.** The houses of a row are numbered consecutively from 1 to 49. Show that there is a value of x such that the sum of the numbers of the houses preceding the house numbered x is equal to the sum of the numbers following it. Find this value of x.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Sum of houses 1 to (x-1) = Sum of houses (x+1) to 49

$$\frac{(x-1)x}{2} = \frac{(49-x)(50+x)}{2}$$

$$x(x-1) = (49-x)(50+x)$$

$$x^2 - x = 2450 + 49x - 50x - x^2$$

$$x^2 - x = 2450 - x - x^2$$

$$2x^2 = 2450$$

$$x^2 = 1225$$

$$x = 35$$

**Answer:** x = 35
</details>

---

**Q49.** A small terrace at a football ground comprises of 15 steps each of which is 50 m long and built of solid concrete. Each step has a rise of $\frac{1}{4}$ m and a tread of $\frac{1}{2}$ m. Calculate the total volume of concrete required to build the terrace.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Volume of each step = Length × Width × Height

Widths form AP: $\frac{1}{2}, 1, \frac{3}{2}, ..., \text{to 15 terms}$

Here: $a = \frac{1}{2}, d = \frac{1}{2}, n = 15$

$$S_{15} = \frac{15}{2}[2(\frac{1}{2}) + (15-1) \times \frac{1}{2}] = \frac{15}{2}[1 + 7] = \frac{15}{2} \times 8 = 60$$

Total volume = Length × Sum of widths × Height
$$= 50 \times 60 \times \frac{1}{4} = 750 \text{ m}^3$$

**Answer:** 750 m³
</details>

---

**Q50.** If $m$ times the mth term of an AP is equal to $n$ times its nth term, prove that the $(m+n)$th term is zero.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** $m \cdot a_m = n \cdot a_n$

$$m[a + (m-1)d] = n[a + (n-1)d]$$

$$ma + m(m-1)d = na + n(n-1)d$$

$$ma - na = n(n-1)d - m(m-1)d$$

$$(m-n)a = [n^2 - n - m^2 + m]d$$

$$(m-n)a = [(n-m)(n+m) - (n-m)]d$$

$$(m-n)a = (n-m)[n+m-1]d$$

$$a = -(m+n-1)d$$

Now: $a_{m+n} = a + (m+n-1)d = -(m+n-1)d + (m+n-1)d = 0$

**Hence Proved.**
</details>

---

### SECTION C: Long Answer Questions (15 Questions - 5 Marks Each)

**Q51.** (a) Define an arithmetic progression. Write the general form and the formula for nth term.
(b) Find the 25th term of the AP: 5, $5\frac{1}{2}$, 6, $6\frac{1}{2}$, ...
(c) Which term of this AP is 100?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Definition:**

An **Arithmetic Progression (AP)** is a sequence of numbers in which each term is obtained by adding a fixed number (common difference) to the preceding term.

**General Form:** $a, a+d, a+2d, a+3d, ...$

**nth Term Formula:** $a_n = a + (n-1)d$

**(b) Finding 25th term:**

Here: $a = 5, d = \frac{1}{2}, n = 25$

$$a_{25} = 5 + (25-1) \times \frac{1}{2} = 5 + 12 = 17$$

**(c) Finding which term is 100:**

$$100 = 5 + (n-1) \times \frac{1}{2}$$
$$95 = (n-1) \times \frac{1}{2}$$
$$n - 1 = 190$$
$$n = 191$$

**Answer:** (a) Defined (b) 17 (c) 191st term
</details>

---

**Q52.** (a) Write the formula for sum of first n terms of an AP.
(b) Find the sum of all natural numbers between 1 and 100 which are divisible by 3.
(c) Verify your answer using alternative method.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Sum Formula:**

$$S_n = \frac{n}{2}[2a + (n-1)d]$$

Or: $$S_n = \frac{n}{2}(a + l)$$ where l is the last term.

**(b) Finding sum:**

AP: 3, 6, 9, ..., 99

Here: $a = 3, d = 3, l = 99$

Finding n:
$$99 = 3 + (n-1) \times 3$$
$$96 = (n-1) \times 3$$
$$n = 33$$

$$S_{33} = \frac{33}{2}(3 + 99) = \frac{33}{2} \times 102 = 1683$$

**(c) Verification:**

Using $S_n = \frac{n}{2}[2a + (n-1)d]$:
$$S_{33} = \frac{33}{2}[6 + 32 \times 3] = \frac{33}{2} \times 102 = 1683$$ ✓

**Answer:** (a) Formula stated (b) 1683 (c) Verified
</details>

---

**Q53.** (a) A ladder has rungs 25 cm apart. The rungs decrease uniformly in length from 45 cm at the bottom to 25 cm at the top. If the top and bottom rungs are $2\frac{1}{2}$ m apart, what is the length of the wood required for the rungs?
(b) How many rungs are there?
(c) Find the length of the middle rung.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding total length:**

Distance between top and bottom = $2\frac{1}{2}$ m = 250 cm

Number of gaps = $\frac{250}{25} = 10$

Number of rungs = 10 + 1 = 11

AP of lengths: 45, 43, 41, ..., 25

Here: $a = 45, l = 25, n = 11$

$$S_{11} = \frac{11}{2}(45 + 25) = \frac{11}{2} \times 70 = 385 \text{ cm}$$

**(b) Number of rungs:** 11

**(c) Middle rung (6th term):**

$$a_6 = 45 + (6-1) \times (-2) = 45 - 10 = 35 \text{ cm}$$

**Answer:** (a) 385 cm (b) 11 rungs (c) 35 cm
</details>

---

**Q54.** (a) The digits of a positive number are in AP. The sum of the digits is 15 and the number obtained by reversing the digits is 594 less than the original number. Find the number.
(b) Verify your answer.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding the number:**

Let the three-digit number be $100a + 10b + c$

Given: Digits are in AP, so $2b = a + c$ ... (i)

Sum: $a + b + c = 15$ ... (ii)

From (i) and (ii): $3b = 15 \Rightarrow b = 5$

So: $a + c = 10$ ... (iii)

Reversed number: $100c + 10b + a$

Given: $(100a + 10b + c) - (100c + 10b + a) = 594$

$$99a - 99c = 594$$
$$a - c = 6$$ ... (iv)

From (iii) and (iv): $a = 8, c = 2$

**Number:** 852

**(b) Verification:**

Digits 8, 5, 2 are in AP (d = -3) ✓
Sum = 8 + 5 + 2 = 15 ✓
852 - 258 = 594 ✓

**Answer:** (a) 852 (b) Verified
</details>

---

**Q55.** (a) The sum of the first n terms of an AP is given by $S_n = 3n^2 + 5n$. Find the AP and its 20th term.
(b) Verify that the sum formula gives correct results for n = 1, 2, 3.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding the AP:**

$S_1 = 3(1)^2 + 5(1) = 8$ → First term $a = 8$

$S_2 = 3(4) + 5(2) = 22$ → $a_2 = 22 - 8 = 14$

$S_3 = 3(9) + 5(3) = 42$ → $a_3 = 42 - 22 = 20$

**AP:** 8, 14, 20, ... (a = 8, d = 6)

**20th term:** $a_{20} = 8 + (20-1) \times 6 = 8 + 114 = 122$

**(b) Verification:**

For n = 1: $S_1 = 8$ ✓
For n = 2: $S_2 = \frac{2}{2}[16 + 6] = 22$ ✓
For n = 3: $S_3 = \frac{3}{2}[16 + 12] = 42$ ✓

**Answer:** (a) AP: 8, 14, 20, ..., $a_{20} = 122$ (b) Verified
</details>

---

**Q56.** (a) Two APs have the same common difference. The difference between their 100th terms is 100. What is the difference between their 1000th terms?
(b) Prove that the difference between their nth terms is always 100.
(c) Give an example to verify.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding the difference:**

Let the APs be:
AP₁: $a_1, a_1 + d, a_1 + 2d, ...$
AP₂: $a_2, a_2 + d, a_2 + 2d, ...$

Given: $a_{100}^{(1)} - a_{100}^{(2)} = 100$

$$(a_1 + 99d) - (a_2 + 99d) = 100$$
$$a_1 - a_2 = 100$$

Now: $a_{1000}^{(1)} - a_{1000}^{(2)} = (a_1 + 999d) - (a_2 + 999d) = a_1 - a_2 = 100$

**(b) Proof:**

For any n:
$$a_n^{(1)} - a_n^{(2)} = (a_1 + (n-1)d) - (a_2 + (n-1)d) = a_1 - a_2 = 100$$

**(c) Example:**

AP₁: 100, 105, 110, ... (a₁ = 100, d = 5)
AP₂: 0, 5, 10, ... (a₂ = 0, d = 5)

100th terms: 595 - 495 = 100 ✓
1000th terms: 5095 - 4995 = 100 ✓

**Answer:** (a) 100 (b) Proved (c) Example given
</details>

---

**Q57.** (a) A man saved ₹33,000 in 10 months. In each month after the first, he saved ₹100 more than he did in the preceding month. How much did he save in the first month?
(b) How much did he save in the last month?
(c) What was his average monthly savings?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding first month savings:**

AP of savings: a, (a+100), (a+200), ...

Here: $a = a, d = 100, n = 10, S_{10} = 33000$

$$S_{10} = \frac{10}{2}[2a + (10-1) \times 100] = 33000$$

$$5[2a + 900] = 33000$$

$$2a + 900 = 6600$$

$$a = 2850$$

**(b) Last month (10th term):**

$$a_{10} = 2850 + (10-1) \times 100 = 2850 + 900 = 3750$$

**(c) Average monthly savings:**

$$\text{Average} = \frac{33000}{10} = 3300$$

**Answer:** (a) ₹2,850 (b) ₹3,750 (c) ₹3,300
</details>

---

**Q58.** (a) The sum of the first n terms of an AP is equal to the sum of its first m terms (n ≠ m). Prove that the sum of its first (m+n) terms is zero.
(b) Verify with an example.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

Given: $S_n = S_m$

$$\frac{n}{2}[2a + (n-1)d] = \frac{m}{2}[2a + (m-1)d]$$

$$n[2a + (n-1)d] = m[2a + (m-1)d]$$

$$2an + n(n-1)d = 2am + m(m-1)d$$

$$2a(n-m) + [n^2 - n - m^2 + m]d = 0$$

$$2a(n-m) + [(n-m)(n+m) - (n-m)]d = 0$$

$$(n-m)[2a + (n+m-1)d] = 0$$

Since $n \neq m$: $2a + (n+m-1)d = 0$

Now: $S_{m+n} = \frac{m+n}{2}[2a + (m+n-1)d] = \frac{m+n}{2} \times 0 = 0$

**(b) Example:**

AP: -6, -3, 0, 3, 6, ...

$S_2 = -9, S_4 = -9$ (equal)

$S_6 = 0$ ✓

**Answer:** (a) Proved (b) Verified with example
</details>

---

**Q59.** (a) Draw an AP with first term 5 and common difference 3 showing the first 5 terms.
(b) Find the sum of these 5 terms using the formula.
(c) Verify by actual addition.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) AP Diagram:**

```
Number Line Representation:

    5    8    11   14   17
    ●────●────●────●────●
    │    │    │    │    │
    a₁   a₂   a₃   a₄   a₅
    
Common difference (d) = 3 between consecutive terms
```

**AP:** 5, 8, 11, 14, 17

**(b) Using formula:**

Here: $a = 5, d = 3, n = 5$

$$S_5 = \frac{5}{2}[2(5) + (5-1) \times 3] = \frac{5}{2}[10 + 12] = \frac{5}{2} \times 22 = 55$$

**(c) Verification:**

$$5 + 8 + 11 + 14 + 17 = 55$$ ✓

**Answer:** (a) 5, 8, 11, 14, 17 (b) 55 (c) Verified
</details>

---

**Q60.** (a) In a school, students decided to plant trees to reduce air pollution. Each section of each class will plant double the number of trees as the class number. If there are 1 to 12 classes and each class has 2 sections, find how many trees were planted.
(b) What value is demonstrated by the students?
(c) If each tree costs ₹150, find the total cost.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding total trees:**

Trees per section of class n = 2n

Each class has 2 sections, so trees per class = 4n

AP: 4, 8, 12, ..., to 12 terms

Here: $a = 4, d = 4, n = 12$

$$S_{12} = \frac{12}{2}[2(4) + (12-1) \times 4] = 6[8 + 44] = 6 \times 52 = 312$$

**(b) Value demonstrated:**

Environmental consciousness, social responsibility, teamwork

**(c) Total cost:**

$$312 \times 150 = ₹46,800$$

**Answer:** (a) 312 trees (b) Environmental awareness (c) ₹46,800
</details>

---

**Q61.** (a) Prove that the sum of first n odd natural numbers is $n^2$.
(b) Using this result, find the sum: 1 + 3 + 5 + ... + 99.
(c) Verify by AP formula.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

Odd numbers form an AP: 1, 3, 5, ..., (2n-1)

Here: $a = 1, d = 2$, last term $l = 2n-1$

$$S_n = \frac{n}{2}(a + l) = \frac{n}{2}(1 + 2n - 1) = \frac{n}{2} \times 2n = n^2$$

**(b) Finding sum:**

1 + 3 + 5 + ... + 99

Here: $2n - 1 = 99 \Rightarrow n = 50$

$$S_{50} = 50^2 = 2500$$

**(c) Verification using AP formula:**

$$S_{50} = \frac{50}{2}[2(1) + (50-1) \times 2] = 25[2 + 98] = 25 \times 100 = 2500$$ ✓

**Answer:** (a) Proved (b) 2500 (c) Verified
</details>

---

**Q62.** (a) The ratio of the sums of first m and n terms of an AP is $m^2 : n^2$. Show that the ratio of mth and nth terms is $(2m - 1) : (2n - 1)$.
(b) Verify with an example where m = 3 and n = 5.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

Given: $\frac{S_m}{S_n} = \frac{m^2}{n^2}$

$$\frac{\frac{m}{2}[2a + (m-1)d]}{\frac{n}{2}[2a + (n-1)d]} = \frac{m^2}{n^2}$$

$$\frac{2a + (m-1)d}{2a + (n-1)d} = \frac{m}{n}$$

$$n[2a + (m-1)d] = m[2a + (n-1)d]$$

$$2an + n(m-1)d = 2am + m(n-1)d$$

$$2a(n-m) = d[m(n-1) - n(m-1)]$$

$$2a(n-m) = d(mn - m - mn + n) = d(n-m)$$

$$2a = d$$

Now: $\frac{a_m}{a_n} = \frac{a + (m-1)d}{a + (n-1)d} = \frac{\frac{d}{2} + (m-1)d}{\frac{d}{2} + (n-1)d} = \frac{2m-1}{2n-1}$

**(b) Verification:**

AP with a = 1, d = 2: 1, 3, 5, 7, 9, ...

$S_3 = 9, S_5 = 25$. Ratio = 9:25 = $3^2 : 5^2$ ✓

$a_3 = 5, a_5 = 9$. Ratio = 5:9 = $(2×3-1) : (2×5-1)$ ✓

**Answer:** (a) Proved (b) Verified
</details>

---

**Q63.** (a) A thief runs with a uniform speed of 100 m/minute. After one minute, a policeman runs behind him. The policeman goes 100 m in the first minute and increases his speed by 10 m/minute every succeeding minute. After how many minutes will the policeman catch the thief?
(b) What distance does the thief cover?
(c) What value is highlighted in this problem?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding time:**

Let policeman catches after n minutes (after he starts).

Distance covered by thief in (n+1) minutes = $100(n+1)$ m

Distance covered by policeman in n minutes:
AP: 100, 110, 120, ... (n terms)

$$S_n = \frac{n}{2}[2(100) + (n-1) \times 10] = \frac{n}{2}[200 + 10n - 10] = \frac{n}{2}(190 + 10n)$$

Equating distances:
$$100(n+1) = \frac{n}{2}(190 + 10n)$$

$$200n + 200 = 190n + 10n^2$$

$$10n^2 - 10n - 200 = 0$$

$$n^2 - n - 20 = 0$$

$$(n-5)(n+4) = 0$$

$$n = 5 \text{ minutes}$$

**(b) Distance covered by thief:**

$$100(5+1) = 600 \text{ m}$$

**(c) Value highlighted:**

Crime doesn't pay, justice prevails, persistence leads to success

**Answer:** (a) 5 minutes (b) 600 m (c) Justice prevails
</details>

---

**Q64.** (a) State whether the following statements are true or false. Justify your answer.
(i) $a_n = 3n - 2$ represents an AP
(ii) The sum of first n natural numbers is an AP
(iii) An AP can have negative common difference

(b) Give one example of each case.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) True/False:**

**(i) True**

$a_1 = 1, a_2 = 4, a_3 = 7$
$d = 4-1 = 3, d = 7-4 = 3$ (constant)

**(ii) False**

Sum of first n natural numbers is a number, not a sequence.
However, the sequence of these sums (1, 3, 6, 10, ...) is NOT an AP (differences are 2, 3, 4, ... not constant).

**(iii) True**

Example: 10, 7, 4, 1, ... has d = -3 (negative)

**(b) Examples:**

(i) AP: 1, 4, 7, 10, ... (from $a_n = 3n-2$)
(ii) Sequence of sums: 1, 3, 6, 10, ... (not AP)
(iii) Decreasing AP: 20, 15, 10, 5, ... (d = -5)

**Answer:** (i) T (ii) F (iii) T, with examples
</details>

---

**Q65.** (a) Explain with examples how AP is used in real life.
(b) A manufacturer of TV sets produced 600 sets in the 3rd year and 700 sets in the 7th year. Assuming uniform increase, find:
(i) Production in the first year
(ii) Production in the 10th year
(iii) Total production in 7 years

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Real-life Applications of AP:**

**1. Finance:**
- Monthly installments with fixed increase
- Salary increments

**2. Construction:**
- Steps of a staircase
- Rungs of a ladder

**3. Sports:**
- Scoring patterns
- Training schedules

**4. Nature:**
- Growth patterns in plants
- Seating arrangements

**Example:** Monthly savings increasing by fixed amount.

**(b) Finding production:**

AP: $a_3 = 600, a_7 = 700$

$a + 2d = 600$ ... (i)
$a + 6d = 700$ ... (ii)

Subtracting: $4d = 100 \Rightarrow d = 25$

From (i): $a = 600 - 50 = 550$

**(i) First year:** 550 sets

**(ii) 10th year:** $a_{10} = 550 + 9 \times 25 = 775$ sets

**(iii) Total in 7 years:**

$$S_7 = \frac{7}{2}[2(550) + (7-1) \times 25] = \frac{7}{2}[1100 + 150] = \frac{7}{2} \times 1250 = 4375$$

**Answer:** (a) Explained (b)(i) 550 (ii) 775 (iii) 4375 sets
</details>

---

## 6. Exam-Oriented Preparation

### 📝 Important Formulas to Memorize

#### nth Term of an AP:

$$ a_n = a + (n - 1)d $$

#### Sum of First n Terms:

$$ S_n = \frac{n}{2}[2a + (n - 1)d] $$

Or (when last term l is known):

$$ S_n = \frac{n}{2}(a + l) $$

#### nth Term from End:

$$ a_n (\text{from end}) = l - (n - 1)d $$

#### Special Sums:

| Series | Sum |
|--------|-----|
| First n natural numbers | $\frac{n(n+1)}{2}$ |
| First n odd numbers | $n^2$ |
| First n even numbers | $n(n+1)$ |

---

### 🎯 Expected Question Patterns (CBSE Class 10)

#### 1 Mark Questions (MCQ/Very Short Answer):
- Find common difference or nth term
- Identify if sequence is AP
- Simple sum calculations
- Number of terms in given range

#### 2 Mark Questions (Short Answer):
- Find specific term using formula
- Sum of first n terms
- Word problems (simple)
- Find n given $a_n$

#### 3 Mark Questions (Long Answer):
- Complex word problems
- Finding sum with conditions
- Proving relationships
- Multi-step applications

#### 5 Mark Questions (Very Long Answer):
- Real-life application problems
- Proofs with examples
- Combined concepts
- Comprehensive word problems

---

### 💡 Exam Tips:

1. ✅ **Identify a and d correctly** before applying formulas
2. ✅ **Check if sequence is AP** by verifying constant difference
3. ✅ **Use appropriate formula** based on given information
4. ✅ **Convert units** consistently in word problems
5. ✅ **Verify answer** by substituting back
6. ✅ **Show all steps** in calculations
7. ✅ **Write units** in final answers
8. ✅ **Draw diagrams** for visualization when helpful

---

### 🔴 Common Mistakes to Avoid:

| Mistake | Correction |
|---------|------------|
| Using (n+1) instead of (n-1) | nth term: $a + (n-1)d$ |
| Forgetting $\frac{n}{2}$ in sum formula | Always include $\frac{n}{2}$ |
| Wrong sign for negative d | Be careful with decreasing AP |
| Counting terms incorrectly | Use $n = \frac{l-a}{d} + 1$ |
| Not checking if AP exists | Verify constant difference first |
| Missing units in word problems | Always include appropriate units |

---

### 📚 Previous Year Questions (CBSE Pattern)

**Q1 (CBSE 2024):** Find the 10th term of AP: 2, 7, 12, ...

**Answer:** 47

---

**Q2 (CBSE 2023):** Find the sum of first 20 terms of AP: 1, 3, 5, ...

**Answer:** 400

---

**Q3 (CBSE 2023):** How many multiples of 4 lie between 10 and 250?

**Answer:** 60

---

**Q4 (CBSE 2022):** Find the AP whose 3rd term is 16 and 7th term exceeds 5th term by 12.

**Answer:** 4, 10, 16, 22, ...

---

**Q5 (CBSE 2022):** A man saved ₹33000 in 10 months, increasing by ₹100 each month. Find first month savings.

**Answer:** ₹2,850

---

**Q6 (CBSE 2021):** Find the sum of all 3-digit numbers divisible by 13.

**Answer:** 37,674

---

**Q7 (CBSE 2021):** Which term of AP: 3, 15, 27, ... will be 132 more than its 54th term?

**Answer:** 65th term

---

**Q8 (CBSE 2020):** The houses are numbered 1 to 49. Find x such that sum before x equals sum after x.

**Answer:** x = 35

---

**Q9 (CBSE 2020):** Find sum of first 15 multiples of 8.

**Answer:** 960

---

**Q10 (CBSE 2019):** If $S_n = 3n^2 + 5n$, find the AP.

**Answer:** 8, 14, 20, ...

---

## 7. Revision Notes

### 📌 Quick Revision Sheet

#### Key Definitions:

| Term | Definition |
|------|------------|
| **AP** | Sequence with constant difference between consecutive terms |
| **First Term** | Starting number (a) |
| **Common Difference** | Fixed number added (d) |
| **nth Term** | Term at position n |
| **Sum of n terms** | Sum of first n terms |

---

#### Important Formulas:

**nth Term:**
$$ a_n = a + (n - 1)d $$

**Sum of n Terms:**
$$ S_n = \frac{n}{2}[2a + (n - 1)d] $$

**Alternative Sum:**
$$ S_n = \frac{n}{2}(a + l) $$

**nth Term from End:**
$$ a_n = l - (n - 1)d $$

---

#### Types of AP:

| Type | Condition | Example |
|------|-----------|---------|
| Increasing | d > 0 | 2, 5, 8, 11, ... |
| Decreasing | d < 0 | 20, 15, 10, 5, ... |
| Constant | d = 0 | 5, 5, 5, 5, ... |
| Finite | Has last term | 2, 5, 8, ..., 50 |
| Infinite | No last term | 2, 5, 8, ... |

---

#### Special Results:

```
Sum of first n natural numbers: n(n+1)/2
Sum of first n odd numbers: n²
Sum of first n even numbers: n(n+1)
```

---

### 🎓 Final Checklist Before Exam:

- [ ] I can identify if a sequence is an AP
- [ ] I can find the common difference
- [ ] I can find the nth term using formula
- [ ] I can find the sum of n terms
- [ ] I can solve word problems on AP
- [ ] I can find number of terms in a range
- [ ] I can find nth term from the end
- [ ] I know special sum formulas
- [ ] I can verify my answers
- [ ] I have practiced all 30 MCQs
- [ ] I have practiced all 20 Short Answer questions
- [ ] I have practiced all 15 Long Answer questions

---

### 📊 Quick Formula Sheet:

**General Form:**
$$ a, a+d, a+2d, a+3d, ..., a+(n-1)d $$

**nth Term:**
$$ a_n = a + (n-1)d $$

**Sum of n Terms:**
$$ S_n = \frac{n}{2}[2a + (n-1)d] = \frac{n}{2}(a+l) $$

**Common Difference:**
$$ d = a_{n} - a_{n-1} $$

**Number of Terms:**
$$ n = \frac{l-a}{d} + 1 $$

---

**Good luck with your studies! 🌟**

> Remember: Practice identifying 'a' and 'd' correctly before applying any formula!

---

**End of Learning Path - Arithmetic Progressions**
