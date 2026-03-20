# Real Numbers - Learning Path

## 1. Concept Introduction

### What are Real Numbers?

**Real numbers** are the set of all numbers that can be represented on a number line. They include both **rational** and **irrational** numbers.

**Everyday Examples:**
- 📏 Measuring length: 5.5 cm, √2 meters
- 💰 Money: ₹100, ₹50.75
- 🌡️ Temperature: -5°C, 37.5°C
- ⏱️ Time: 1.5 hours, 30 minutes
- 📊 Statistics: 66.67%, √3 ratio

### The Number System Hierarchy:

```
REAL NUMBERS (ℝ)
├── Rational Numbers (ℚ)
│   ├── Integers (ℤ)
│   │   ├── Natural Numbers (ℕ)
│   │   │   └── 1, 2, 3, 4, 5, ...
│   │   ├── Whole Numbers
│   │   │   └── 0, 1, 2, 3, 4, ...
│   │   └── Negative Integers
│   │       └── -1, -2, -3, -4, ...
│   └── Fractions/Decimals
│       ├── 1/2, 3/4, -5/7
│       └── Terminating/Recurring decimals
│           ├── 0.5, 0.75, 0.333...
│           └── 0.875, 2.25
└── Irrational Numbers
    ├── √2, √3, √5, √7, ...
    ├── π (pi), e (Euler's number)
    └── Non-terminating, non-recurring decimals
        └── 1.41421356..., 3.14159265...
```

---

## 2. Micro-topic Breakdown

This chapter is divided into the following key concepts:

```
Real Numbers
├── 2.1 Euclid's Division Lemma
│   ├── Statement and proof
│   ├── Euclid's Division Algorithm
│   └── Finding HCF using Euclid's algorithm
├── 2.2 The Fundamental Theorem of Arithmetic
│   ├── Prime factorization
│   ├── Finding HCF and LCM
│   └── Applications and problems
├── 2.3 Revisiting Irrational Numbers
│   ├── Proof of irrationality
│   ├── Operations on real numbers
│   └── Decimal expansions
└── 2.4 Decimal Expansions of Rational Numbers
    ├── Terminating decimals
    ├── Non-terminating recurring decimals
    └── Conditions for termination
```

---

## 3. Concept Explanations

### 3.1 Euclid's Division Lemma

**Euclid's Division Lemma** is a fundamental result in number theory.

**Statement:**

For any two positive integers **a** and **b**, there exist unique integers **q** (quotient) and **r** (remainder) such that:

$$ a = bq + r, \quad \text{where } 0 \leq r < b $$

#### Understanding the Lemma:

| Term | Meaning | Example |
|------|---------|---------|
| **a** | Dividend | 47 |
| **b** | Divisor | 5 |
| **q** | Quotient | 9 |
| **r** | Remainder | 2 |

**Verification:** 47 = 5 × 9 + 2 ✓

#### Euclid's Division Algorithm

This is a **step-by-step procedure** to find the **HCF (Highest Common Factor)** of two positive integers.

**Steps:**

1. Apply Euclid's Division Lemma on the larger number (a) and smaller number (b)
2. If remainder r = 0, then b is the HCF
3. If r ≠ 0, apply the lemma on b and r
4. Continue until remainder becomes 0
5. The divisor at this stage is the HCF

---

### 3.2 The Fundamental Theorem of Arithmetic

**Statement:**

> Every composite number can be expressed (factorized) as a product of primes, and this factorization is **unique**, apart from the order in which the prime factors occur.

**Example:**

$$ 32760 = 2^3 \times 3^2 \times 5 \times 7 \times 13 $$

This factorization is unique - no other combination of primes will give 32760.

#### Finding HCF and LCM using Prime Factorization

**For HCF:** Take the **lowest power** of common prime factors

**For LCM:** Take the **highest power** of all prime factors

**Example:** Find HCF and LCM of 12 and 18

$$ 12 = 2^2 \times 3^1 $$
$$ 18 = 2^1 \times 3^2 $$

| Prime | Power in 12 | Power in 18 | For HCF | For LCM |
|-------|-------------|-------------|---------|---------|
| 2 | 2 | 1 | 2¹ | 2² |
| 3 | 1 | 2 | 3¹ | 3² |

$$ \text{HCF}(12, 18) = 2^1 \times 3^1 = 6 $$
$$ \text{LCM}(12, 18) = 2^2 \times 3^2 = 36 $$

#### Important Relationship:

$$ \text{HCF}(a, b) \times \text{LCM}(a, b) = a \times b $$

**Verification:** 6 × 36 = 12 × 18 = 216 ✓

---

### 3.3 Revisiting Irrational Numbers

#### What is an Irrational Number?

A number that **cannot** be expressed in the form **p/q**, where p and q are integers and q ≠ 0.

**Characteristics:**
- Non-terminating decimal expansion
- Non-recurring (non-repeating) decimal expansion

**Examples:**

| Number | Decimal Expansion |
|--------|-------------------|
| √2 | 1.4142135623... |
| √3 | 1.7320508075... |
| π | 3.1415926535... |
| e | 2.7182818284... |

#### Proving a Number is Irrational

**Method:** Proof by Contradiction

**Example:** Prove that √2 is irrational.

**Proof:**

1. **Assume** √2 is rational
2. Then √2 = p/q where p, q are coprime integers (q ≠ 0)
3. Squaring: 2 = p²/q² → p² = 2q²
4. This means p² is divisible by 2, so p is divisible by 2
5. Let p = 2k for some integer k
6. Substituting: (2k)² = 2q² → 4k² = 2q² → q² = 2k²
7. This means q² is divisible by 2, so q is divisible by 2
8. Both p and q are divisible by 2, contradicting that they are coprime
9. **Therefore**, our assumption is wrong, and √2 is irrational ✓

---

### 3.4 Decimal Expansions of Rational Numbers

#### Types of Decimal Expansions:

| Type | Description | Example |
|------|-------------|---------|
| **Terminating** | Decimal ends after finite digits | 1/2 = 0.5 |
| **Non-terminating Recurring** | Decimal repeats infinitely | 1/3 = 0.333... = 0.̅3 |
| **Non-terminating Non-recurring** | Never ends, never repeats | √2 = 1.41421... |

#### When is a Rational Number Terminating?

A rational number **p/q** (in lowest terms) has a **terminating** decimal expansion if and only if:

$$ q = 2^n \times 5^m $$

where n and m are non-negative integers.

**Examples:**

| Fraction | Denominator | Form | Decimal | Type |
|----------|-------------|------|---------|------|
| 3/8 | 8 = 2³ | 2³ × 5⁰ | 0.375 | Terminating |
| 7/25 | 25 = 5² | 2⁰ × 5² | 0.28 | Terminating |
| 5/12 | 12 = 2² × 3 | Contains 3 | 0.41666... | Non-terminating |
| 11/30 | 30 = 2 × 3 × 5 | Contains 3 | 0.3666... | Non-terminating |

---

## 4. Guided Examples

### Example 1: Using Euclid's Division Algorithm

**Question:** Find the HCF of 135 and 225 using Euclid's Division Algorithm.

**Step-by-Step Solution:**

| Step | Action | Equation |
|------|--------|----------|
| 1 | Apply lemma on 225 and 135 | 225 = 135 × 1 + 90 |
| 2 | Apply lemma on 135 and 90 | 135 = 90 × 1 + 45 |
| 3 | Apply lemma on 90 and 45 | 90 = 45 × 2 + 0 |
| 4 | Remainder is 0, HCF = 45 | **HCF = 45** |

**Final Answer:** HCF(135, 225) = 45

---

### Example 2: Prime Factorization

**Question:** Express 140 as a product of its prime factors.

**Step-by-Step Solution:**

```
140
├── 2 × 70
│   ├── 2 × 35
│   │   ├── 5 × 7
│   │   └── 7 (prime)
```

$$ 140 = 2 \times 2 \times 5 \times 7 = 2^2 \times 5 \times 7 $$

**Final Answer:** $140 = 2^2 \times 5 \times 7$

---

### Example 3: Finding HCF and LCM

**Question:** Find the HCF and LCM of 26 and 91, and verify that LCM × HCF = product of the numbers.

**Solution:**

**Prime Factorization:**

$$ 26 = 2^1 \times 13^1 $$
$$ 91 = 7^1 \times 13^1 $$

**HCF:** Take lowest power of common primes
$$ \text{HCF} = 13^1 = 13 $$

**LCM:** Take highest power of all primes
$$ \text{LCM} = 2^1 \times 7^1 \times 13^1 = 182 $$

**Verification:**
$$ \text{LCM} \times \text{HCF} = 182 \times 13 = 2366 $$
$$ 26 \times 91 = 2366 $$

✅ Verified: LCM × HCF = Product of numbers

---

### Example 4: Proving Irrationality

**Question:** Prove that $3 + 2\sqrt{5}$ is irrational.

**Solution:**

1. **Assume** $3 + 2\sqrt{5}$ is rational
2. Then $3 + 2\sqrt{5} = \frac{p}{q}$ where p, q are coprime integers (q ≠ 0)
3. Rearranging: $2\sqrt{5} = \frac{p}{q} - 3 = \frac{p - 3q}{q}$
4. $\sqrt{5} = \frac{p - 3q}{2q}$
5. RHS is rational (ratio of integers)
6. But $\sqrt{5}$ is irrational (known fact)
7. This is a contradiction
8. **Therefore**, $3 + 2\sqrt{5}$ is irrational ✓

---

### Example 5: Decimal Expansion Type

**Question:** Without actually performing long division, state whether $\frac{13}{3125}$ has a terminating or non-terminating repeating decimal expansion.

**Solution:**

1. Factorize the denominator: $3125 = 5^5 = 2^0 \times 5^5$
2. This is of the form $2^n \times 5^m$ where n = 0, m = 5
3. **Conclusion:** The decimal expansion is **terminating**

---

## 5. Practice Questions

### SECTION A: Multiple Choice Questions (30 Questions - 1 Mark Each)

**Q1.** Euclid's Division Lemma states that for any two positive integers a and b, there exist unique integers q and r such that:
- (A) a = bq + r, where 0 < r < b
- (B) a = bq + r, where 0 ≤ r ≤ b
- (C) a = bq + r, where 0 ≤ r < b
- (D) a = bq + r, where 0 < r ≤ b

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) a = bq + r, where 0 ≤ r < b

**Explanation:** This is the exact statement of Euclid's Division Lemma. The remainder r is always less than the divisor b and non-negative.
</details>

---

**Q2.** The HCF of 96 and 404 is:
- (A) 2
- (B) 4
- (C) 6
- (D) 8

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 4

**Explanation:** 
$$96 = 2^5 \times 3$$
$$404 = 2^2 \times 101$$
$$\text{HCF} = 2^2 = 4$$
</details>

---

**Q3.** Which of the following is an irrational number?
- (A) 3.14
- (B) 3.141414...
- (C) 3.1415926535...
- (D) 22/7

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 3.1415926535...

**Explanation:** This is the non-terminating, non-recurring decimal expansion of π, which is irrational. Options A, B, and D are all rational.
</details>

---

**Q4.** The decimal expansion of $\frac{17}{8}$ is:
- (A) Terminating
- (B) Non-terminating repeating
- (C) Non-terminating non-repeating
- (D) None of these

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) Terminating

**Explanation:** $8 = 2^3$, which is of the form $2^n \times 5^m$. Hence, the decimal expansion is terminating.
</details>

---

**Q5.** If HCF(26, 169) = 13, then LCM(26, 169) is:
- (A) 26
- (B) 169
- (C) 338
- (D) 13

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 338

**Explanation:** 
$$\text{HCF} \times \text{LCM} = \text{Product of numbers}$$
$$13 \times \text{LCM} = 26 \times 169$$
$$\text{LCM} = \frac{26 \times 169}{13} = 2 \times 169 = 338$$
</details>

---

**Q6.** The prime factorization of 3825 is:
- (A) $3^2 \times 5^2 \times 17$
- (B) $3 \times 5^2 \times 17^2$
- (C) $3^2 \times 5 \times 17^2$
- (D) $3^3 \times 5^2 \times 17$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $3^2 \times 5^2 \times 17$

**Explanation:** 
$$3825 = 3 \times 1275 = 3 \times 3 \times 425 = 3^2 \times 5 \times 85 = 3^2 \times 5^2 \times 17$$
</details>

---

**Q7.** Which of the following rational numbers has a terminating decimal expansion?
- (A) $\frac{13}{343}$
- (B) $\frac{77}{210}$
- (C) $\frac{23}{2^3 \times 5^2}$
- (D) $\frac{129}{2^2 \times 3^2 \times 7^2}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) $\frac{23}{2^3 \times 5^2}$

**Explanation:** The denominator is of the form $2^n \times 5^m$, so the decimal expansion is terminating.
</details>

---

**Q8.** The smallest number by which $\sqrt{27}$ should be multiplied to get a rational number is:
- (A) $\sqrt{2}$
- (B) $\sqrt{3}$
- (C) 3
- (D) $\sqrt{27}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $\sqrt{3}$

**Explanation:** 
$$\sqrt{27} = \sqrt{9 \times 3} = 3\sqrt{3}$$
$$3\sqrt{3} \times \sqrt{3} = 3 \times 3 = 9 \text{ (rational)}$$
</details>

---

**Q9.** The HCF of two consecutive natural numbers is always:
- (A) 0
- (B) 1
- (C) 2
- (D) The smaller number

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 1

**Explanation:** Consecutive natural numbers are always coprime (have no common factor except 1).
</details>

---

**Q10.** If p is a prime number, then $\sqrt{p}$ is:
- (A) Rational
- (B) Irrational
- (C) Natural number
- (D) Integer

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Irrational

**Explanation:** The square root of any prime number is irrational (cannot be expressed as p/q form).
</details>

---

**Q11.** The LCM of $2^3 \times 3^2$ and $2^2 \times 3^3$ is:
- (A) $2^2 \times 3^2$
- (B) $2^3 \times 3^3$
- (C) $2^5 \times 3^5$
- (D) $2^3 \times 3^2$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $2^3 \times 3^3$

**Explanation:** LCM takes the highest power of each prime factor.
</details>

---

**Q12.** The decimal expansion of $\frac{1}{7}$ is:
- (A) 0.142857 (terminating)
- (B) $0.\overline{142857}$
- (C) 0.142857142857 (finite)
- (D) 0.1428

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $0.\overline{142857}$

**Explanation:** $\frac{1}{7} = 0.142857142857...$ = $0.\overline{142857}$ (non-terminating recurring)
</details>

---

**Q13.** Euclid's Division Algorithm can be used to find:
- (A) LCM of two numbers
- (B) HCF of two numbers
- (C) Product of two numbers
- (D) Sum of two numbers

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) HCF of two numbers

**Explanation:** Euclid's Division Algorithm is specifically designed to find the HCF of two positive integers.
</details>

---

**Q14.** The sum of a rational and an irrational number is:
- (A) Rational
- (B) Irrational
- (C) Integer
- (D) Natural number

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Irrational

**Explanation:** The sum of a rational and irrational number is always irrational.
</details>

---

**Q15.** Which of the following is NOT a rational number?
- (A) 0
- (B) $\frac{0}{5}$
- (C) $\frac{5}{0}$
- (D) $-\frac{5}{3}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) $\frac{5}{0}$

**Explanation:** Division by zero is undefined, so $\frac{5}{0}$ is not a valid number.
</details>

---

**Q16.** The HCF of 6, 72, and 120 is:
- (A) 6
- (B) 12
- (C) 18
- (D) 24

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 6

**Explanation:** 
$$6 = 2 \times 3$$
$$72 = 2^3 \times 3^2$$
$$120 = 2^3 \times 3 \times 5$$
$$\text{HCF} = 2 \times 3 = 6$$
</details>

---

**Q17.** The product of two irrational numbers:
- (A) Is always irrational
- (B) Is always rational
- (C) Can be rational or irrational
- (D) Is always an integer

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Can be rational or irrational

**Explanation:** 
- $\sqrt{2} \times \sqrt{2} = 2$ (rational)
- $\sqrt{2} \times \sqrt{3} = \sqrt{6}$ (irrational)
</details>

---

**Q18.** The number $\frac{\sqrt{2}}{3}$ is:
- (A) Rational
- (B) Irrational
- (C) Integer
- (D) Natural number

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Irrational

**Explanation:** An irrational number divided by a non-zero rational number is irrational.
</details>

---

**Q19.** If two numbers are co-prime, their HCF is:
- (A) 0
- (B) 1
- (C) 2
- (D) Their product

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 1

**Explanation:** Co-prime numbers have no common factor except 1.
</details>

---

**Q20.** The decimal expansion of $\frac{7}{75}$ is:
- (A) Terminating
- (B) Non-terminating repeating
- (C) Non-terminating non-repeating
- (D) Cannot be determined

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Non-terminating repeating

**Explanation:** $75 = 3 \times 5^2$. Since it contains a prime factor 3 (other than 2 or 5), the decimal is non-terminating repeating.
</details>

---

**Q21.** The largest number that divides 70 and 125 leaving remainders 5 and 8 respectively is:
- (A) 13
- (B) 65
- (C) 875
- (D) 17

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 13

**Explanation:** 
Required number divides (70-5)=65 and (125-8)=117
$$\text{HCF}(65, 117) = 13$$
</details>

---

**Q22.** The least number divisible by all numbers from 1 to 10 is:
- (A) 10
- (B) 100
- (C) 2520
- (D) 5040

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 2520

**Explanation:** LCM(1, 2, 3, ..., 10) = $2^3 \times 3^2 \times 5 \times 7 = 2520$
</details>

---

**Q23.** Which of the following is equal to $1.\overline{6}$?
- (A) $\frac{5}{3}$
- (B) $\frac{3}{5}$
- (C) $\frac{8}{5}$
- (D) $\frac{16}{10}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $\frac{5}{3}$

**Explanation:** 
Let $x = 1.\overline{6} = 1.666...$
$10x = 16.666...$
$10x - x = 16.666... - 1.666... = 15$
$9x = 15$
$x = \frac{15}{9} = \frac{5}{3}$
</details>

---

**Q24.** The HCF of two consecutive even numbers is:
- (A) 1
- (B) 2
- (C) 4
- (D) The smaller number

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 2

**Explanation:** Consecutive even numbers differ by 2 and share only 2 as a common factor.
</details>

---

**Q25.** If n is a natural number, then $n^2 - n$ is always divisible by:
- (A) 2 only
- (B) 3 only
- (C) Both 2 and 3
- (D) None of these

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 2 only

**Explanation:** 
$$n^2 - n = n(n-1)$$
This is the product of two consecutive numbers, so it's always even (divisible by 2).
</details>

---

**Q26.** The number of prime factors in the prime factorization of 1001 is:
- (A) 2
- (B) 3
- (C) 4
- (D) 5

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 3

**Explanation:** 
$$1001 = 7 \times 11 \times 13$$
There are 3 prime factors.
</details>

---

**Q27.** The value of $0.\overline{3} + 0.\overline{6}$ is:
- (A) 0.9
- (B) 1
- (C) $0.\overline{9}$
- (D) Both (B) and (C)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (D) Both (B) and (C)

**Explanation:** 
$$0.\overline{3} = \frac{1}{3}, \quad 0.\overline{6} = \frac{2}{3}$$
$$\frac{1}{3} + \frac{2}{3} = 1 = 0.\overline{9}$$
</details>

---

**Q28.** If HCF(a, b) = 12 and a × b = 1800, then LCM(a, b) is:
- (A) 120
- (B) 150
- (C) 180
- (D) 200

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 150

**Explanation:** 
$$\text{HCF} \times \text{LCM} = a \times b$$
$$12 \times \text{LCM} = 1800$$
$$\text{LCM} = \frac{1800}{12} = 150$$
</details>

---

**Q29.** The decimal representation of $\frac{3}{40}$ is:
- (A) 0.075
- (B) 0.75
- (C) 0.0075
- (D) 0.0375

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 0.075

**Explanation:** 
$$\frac{3}{40} = \frac{3}{2^3 \times 5} = \frac{3 \times 5^2}{2^3 \times 5 \times 5^2} = \frac{75}{1000} = 0.075$$
</details>

---

**Q30.** The number $\sqrt{144}$ is:
- (A) Rational
- (B) Irrational
- (C) Prime
- (D) None of these

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) Rational

**Explanation:** 
$$\sqrt{144} = 12 = \frac{12}{1}$$
This is a rational number (also an integer).
</details>

---

### SECTION B: Short Answer Questions (20 Questions - 2-3 Marks Each)

**Q31.** Use Euclid's Division Algorithm to find the HCF of 196 and 38220.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Applying Euclid's Division Algorithm:

**Step 1:** 38220 = 196 × 195 + 0

Since the remainder is 0, the divisor (196) is the HCF.

**Answer:** HCF(196, 38220) = 196
</details>

---

**Q32.** Express 429 as a product of its prime factors.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Using factor tree method:

$$429 = 3 \times 143 = 3 \times 11 \times 13$$

**Answer:** $429 = 3 \times 11 \times 13$
</details>

---

**Q33.** Find the HCF and LCM of 144 and 198 by prime factorization method.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Prime Factorization:**

$$144 = 2^4 \times 3^2$$
$$198 = 2^1 \times 3^2 \times 11^1$$

**HCF:** Take lowest power of common primes
$$\text{HCF} = 2^1 \times 3^2 = 2 \times 9 = 18$$

**LCM:** Take highest power of all primes
$$\text{LCM} = 2^4 \times 3^2 \times 11^1 = 16 \times 9 \times 11 = 1584$$

**Answer:** HCF = 18, LCM = 1584
</details>

---

**Q34.** Prove that $\sqrt{5}$ is irrational.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Proof by Contradiction:**

1. **Assume** $\sqrt{5}$ is rational
2. Then $\sqrt{5} = \frac{p}{q}$ where p, q are coprime integers (q ≠ 0)
3. Squaring: $5 = \frac{p^2}{q^2}$ → $p^2 = 5q^2$
4. This means $p^2$ is divisible by 5, so p is divisible by 5
5. Let $p = 5k$ for some integer k
6. Substituting: $(5k)^2 = 5q^2$ → $25k^2 = 5q^2$ → $q^2 = 5k^2$
7. This means $q^2$ is divisible by 5, so q is divisible by 5
8. Both p and q are divisible by 5, contradicting that they are coprime
9. **Therefore**, $\sqrt{5}$ is irrational ✓
</details>

---

**Q35.** Without actually performing long division, state whether $\frac{64}{455}$ has a terminating or non-terminating repeating decimal expansion. Give reason.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Factorize the denominator:

$$455 = 5 \times 91 = 5 \times 7 \times 13$$

Since the denominator contains prime factors other than 2 and 5 (specifically 7 and 13), the decimal expansion is **non-terminating repeating**.

**Answer:** Non-terminating repeating (denominator has prime factors 7 and 13)
</details>

---

**Q36.** The HCF of 65 and 117 is expressible in the form 65m - 117. Find the value of m.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

First, find HCF(65, 117):

$$65 = 5 \times 13$$
$$117 = 3^2 \times 13$$
$$\text{HCF} = 13$$

Given: $65m - 117 = 13$

$$65m = 13 + 117 = 130$$
$$m = \frac{130}{65} = 2$$

**Answer:** m = 2
</details>

---

**Q37.** Find the LCM and HCF of 12, 15, and 21 by prime factorization.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Prime Factorization:**

$$12 = 2^2 \times 3^1$$
$$15 = 3^1 \times 5^1$$
$$21 = 3^1 \times 7^1$$

**HCF:** Take lowest power of common primes
$$\text{HCF} = 3^1 = 3$$

**LCM:** Take highest power of all primes
$$\text{LCM} = 2^2 \times 3^1 \times 5^1 \times 7^1 = 4 \times 3 \times 5 \times 7 = 420$$

**Answer:** HCF = 3, LCM = 420
</details>

---

**Q38.** Prove that $5 - \sqrt{3}$ is irrational.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Proof by Contradiction:**

1. **Assume** $5 - \sqrt{3}$ is rational
2. Then $5 - \sqrt{3} = \frac{p}{q}$ where p, q are coprime integers (q ≠ 0)
3. Rearranging: $\sqrt{3} = 5 - \frac{p}{q} = \frac{5q - p}{q}$
4. RHS is rational (ratio of integers)
5. But $\sqrt{3}$ is irrational (known fact)
6. This is a contradiction
7. **Therefore**, $5 - \sqrt{3}$ is irrational ✓
</details>

---

**Q39.** Explain why $7 \times 11 \times 13 + 13$ is a composite number.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

$$7 \times 11 \times 13 + 13 = 13(7 \times 11 + 1) = 13(77 + 1) = 13 \times 78 = 13 \times 2 \times 3 \times 13$$

$$= 2 \times 3 \times 13^2$$

Since the number has more than 2 factors (1, 2, 3, 13, 26, 39, 169, ...), it is a **composite number**.

**Answer:** It has factors other than 1 and itself (can be factored as $2 \times 3 \times 13^2$)
</details>

---

**Q40.** Can $6^n$ end with the digit 0 for any natural number n? Give reason.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**No**, $6^n$ cannot end with the digit 0 for any natural number n.

**Reason:**

For a number to end with 0, it must be divisible by 5 (have 5 as a factor).

$$6^n = (2 \times 3)^n = 2^n \times 3^n$$

The prime factorization of $6^n$ contains only 2 and 3, never 5.

**Therefore**, $6^n$ can never end with the digit 0.
</details>

---

**Q41.** Two tankers contain 850 litres and 680 litres of kerosene oil respectively. Find the maximum capacity of a container which can measure the kerosene oil of both the tankers when used an exact number of times.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

The maximum capacity of the container = HCF(850, 680)

**Prime Factorization:**

$$850 = 2 \times 5^2 \times 17$$
$$680 = 2^3 \times 5 \times 17$$

$$\text{HCF} = 2^1 \times 5^1 \times 17^1 = 2 \times 5 \times 17 = 170$$

**Answer:** Maximum capacity = 170 litres
</details>

---

**Q42.** In a school, there are two sections of Class X with 32 and 36 students respectively. Find the minimum number of books required for their class library so that they can be distributed equally among students of both sections.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Minimum number of books = LCM(32, 36)

**Prime Factorization:**

$$32 = 2^5$$
$$36 = 2^2 \times 3^2$$

$$\text{LCM} = 2^5 \times 3^2 = 32 \times 9 = 288$$

**Answer:** Minimum 288 books required
</details>

---

**Q43.** Write the decimal expansion of $\frac{15}{1600}$ and state whether it is terminating.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

$$\frac{15}{1600} = \frac{15}{2^6 \times 5^2} = \frac{15 \times 5^4}{2^6 \times 5^2 \times 5^4} = \frac{15 \times 625}{10^6} = \frac{9375}{1000000} = 0.009375$$

**Answer:** 0.009375 (Terminating decimal)
</details>

---

**Q44.** Prove that $\sqrt{2} + \sqrt{3}$ is irrational.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Proof by Contradiction:**

1. **Assume** $\sqrt{2} + \sqrt{3}$ is rational
2. Let $\sqrt{2} + \sqrt{3} = r$ where r is rational
3. Squaring both sides: $(\sqrt{2} + \sqrt{3})^2 = r^2$
4. $2 + 3 + 2\sqrt{6} = r^2$
5. $5 + 2\sqrt{6} = r^2$
6. $2\sqrt{6} = r^2 - 5$
7. $\sqrt{6} = \frac{r^2 - 5}{2}$
8. RHS is rational, but $\sqrt{6}$ is irrational
9. This is a contradiction
10. **Therefore**, $\sqrt{2} + \sqrt{3}$ is irrational ✓
</details>

---

**Q45.** Find the HCF of 81 and 237 and express it as a linear combination of 81 and 237.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Using Euclid's Algorithm:**

237 = 81 × 2 + 75
81 = 75 × 1 + 6
75 = 6 × 12 + 3
6 = 3 × 2 + 0

**HCF = 3**

**Expressing as linear combination:**

3 = 75 - 6 × 12
3 = 75 - (81 - 75) × 12
3 = 75 - 81 × 12 + 75 × 12
3 = 75 × 13 - 81 × 12
3 = (237 - 81 × 2) × 13 - 81 × 12
3 = 237 × 13 - 81 × 26 - 81 × 12
3 = 237 × 13 - 81 × 38

**Answer:** HCF = 3 = 237 × 13 + 81 × (-38)
</details>

---

**Q46.** Three bells toll at intervals of 9, 12, and 15 minutes respectively. If they start tolling together, after what time will they next toll together?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Time when they toll together again = LCM(9, 12, 15)

**Prime Factorization:**

$$9 = 3^2$$
$$12 = 2^2 \times 3$$
$$15 = 3 \times 5$$

$$\text{LCM} = 2^2 \times 3^2 \times 5 = 4 \times 9 \times 5 = 180 \text{ minutes}$$

**Answer:** 180 minutes (or 3 hours)
</details>

---

**Q47.** Determine whether $\frac{257}{5000}$ has a terminating decimal expansion. If yes, write its decimal expansion.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Factorize denominator: $5000 = 5^4 \times 2^3 = 2^3 \times 5^4$

Since denominator is of the form $2^n \times 5^m$, the decimal expansion is **terminating**.

$$\frac{257}{5000} = \frac{257}{2^3 \times 5^4} = \frac{257 \times 2}{2^4 \times 5^4} = \frac{514}{10000} = 0.0514$$

**Answer:** Yes, terminating. Decimal expansion = 0.0514
</details>

---

**Q48.** Check whether $4^n$ can end with the digit 0 for any natural number n.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**No**, $4^n$ cannot end with the digit 0 for any natural number n.

**Reason:**

$$4^n = (2^2)^n = 2^{2n}$$

The prime factorization contains only 2, never 5.

For a number to end with 0, it must have both 2 and 5 as factors.

**Therefore**, $4^n$ can never end with the digit 0.
</details>

---

**Q49.** The length, breadth, and height of a room are 8 m 25 cm, 6 m 75 cm, and 4 m 50 cm respectively. Determine the longest rod which can measure the three dimensions of the room exactly.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Convert to cm:
- Length = 825 cm
- Breadth = 675 cm
- Height = 450 cm

Longest rod = HCF(825, 675, 450)

**Prime Factorization:**

$$825 = 3 \times 5^2 \times 11$$
$$675 = 3^3 \times 5^2$$
$$450 = 2 \times 3^2 \times 5^2$$

$$\text{HCF} = 3^1 \times 5^2 = 3 \times 25 = 75$$

**Answer:** Longest rod = 75 cm
</details>

---

**Q50.** Without actually performing long division, state whether $\frac{29}{343}$ has a terminating or non-terminating repeating decimal expansion.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Factorize denominator: $343 = 7^3$

Since the denominator contains prime factor 7 (not of the form $2^n \times 5^m$), the decimal expansion is **non-terminating repeating**.

**Answer:** Non-terminating repeating decimal expansion
</details>

---

### SECTION C: Long Answer Questions (15 Questions - 5 Marks Each)

**Q51.** (a) State Euclid's Division Lemma.
(b) Use Euclid's Division Algorithm to find the HCF of 4052 and 12576.
(c) Verify your answer by prime factorization method.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Euclid's Division Lemma:**

For any two positive integers a and b, there exist unique integers q and r such that:
$$a = bq + r, \text{ where } 0 \leq r < b$$

**(b) Using Euclid's Algorithm:**

12576 = 4052 × 3 + 420
4052 = 420 × 9 + 272
420 = 272 × 1 + 148
272 = 148 × 1 + 124
148 = 124 × 1 + 24
124 = 24 × 5 + 4
24 = 4 × 6 + 0

**HCF = 4**

**(c) Verification by Prime Factorization:**

$$4052 = 2^2 \times 1013$$
$$12576 = 2^5 \times 3 \times 131$$

$$\text{HCF} = 2^2 = 4$$ ✓

**Verified:** HCF(4052, 12576) = 4
</details>

---

**Q52.** (a) State the Fundamental Theorem of Arithmetic.
(b) Find the HCF and LCM of 96 and 404 by prime factorization method.
(c) Verify that HCF × LCM = Product of the numbers.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Fundamental Theorem of Arithmetic:**

Every composite number can be expressed as a product of primes, and this factorization is unique, apart from the order in which the prime factors occur.

**(b) Prime Factorization:**

$$96 = 2^5 \times 3^1$$
$$404 = 2^2 \times 101^1$$

**HCF:** $2^2 = 4$

**LCM:** $2^5 \times 3 \times 101 = 32 \times 3 \times 101 = 9696$

**(c) Verification:**

$$\text{HCF} \times \text{LCM} = 4 \times 9696 = 38784$$
$$96 \times 404 = 38784$$

✓ **Verified:** HCF × LCM = Product of numbers
</details>

---

**Q53.** (a) Define rational and irrational numbers.
(b) Prove that $\sqrt{7}$ is irrational.
(c) Is $\sqrt{7} + 2$ rational or irrational? Justify.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Definitions:**

**Rational Number:** A number that can be expressed in the form $\frac{p}{q}$ where p and q are integers and q ≠ 0.

**Irrational Number:** A number that cannot be expressed in the form $\frac{p}{q}$. It has non-terminating, non-recurring decimal expansion.

**(b) Proof that $\sqrt{7}$ is irrational:**

1. **Assume** $\sqrt{7}$ is rational
2. Then $\sqrt{7} = \frac{p}{q}$ where p, q are coprime integers (q ≠ 0)
3. Squaring: $7 = \frac{p^2}{q^2}$ → $p^2 = 7q^2$
4. This means $p^2$ is divisible by 7, so p is divisible by 7
5. Let $p = 7k$ for some integer k
6. Substituting: $(7k)^2 = 7q^2$ → $49k^2 = 7q^2$ → $q^2 = 7k^2$
7. This means $q^2$ is divisible by 7, so q is divisible by 7
8. Both p and q are divisible by 7, contradicting that they are coprime
9. **Therefore**, $\sqrt{7}$ is irrational ✓

**(c) $\sqrt{7} + 2$ is irrational** because the sum of a rational number (2) and an irrational number ($\sqrt{7}$) is always irrational.
</details>

---

**Q54.** (a) What condition must the denominator satisfy for a rational number to have a terminating decimal expansion?
(b) Without performing long division, determine the type of decimal expansion for:
(i) $\frac{13}{125}$ (ii) $\frac{11}{30}$ (iii) $\frac{7}{64}$
(c) Write the decimal expansion of $\frac{13}{125}$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Condition for Terminating Decimal:**

A rational number $\frac{p}{q}$ (in lowest terms) has a terminating decimal expansion if and only if the prime factorization of q is of the form $2^n \times 5^m$, where n and m are non-negative integers.

**(b) Type of Decimal Expansion:**

(i) $\frac{13}{125}$: $125 = 5^3 = 2^0 \times 5^3$ → **Terminating**

(ii) $\frac{11}{30}$: $30 = 2 \times 3 \times 5$ (contains 3) → **Non-terminating repeating**

(iii) $\frac{7}{64}$: $64 = 2^6 = 2^6 \times 5^0$ → **Terminating**

**(c) Decimal Expansion:**

$$\frac{13}{125} = \frac{13 \times 8}{125 \times 8} = \frac{104}{1000} = 0.104$$

**Answer:** 0.104
</details>

---

**Q55.** (a) Find the HCF and LCM of 30, 72, and 432 by prime factorization.
(b) Show that HCF × LCM ≠ Product of the three numbers.
(c) Explain why the formula HCF × LCM = Product works only for two numbers.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Prime Factorization:**

$$30 = 2^1 \times 3^1 \times 5^1$$
$$72 = 2^3 \times 3^2$$
$$432 = 2^4 \times 3^3$$

**HCF:** $2^1 \times 3^1 = 6$

**LCM:** $2^4 \times 3^3 \times 5^1 = 16 \times 27 \times 5 = 2160$

**(b) Verification:**

$$\text{HCF} \times \text{LCM} = 6 \times 2160 = 12960$$
$$\text{Product} = 30 \times 72 \times 432 = 933120$$

$$12960 \neq 933120$$ ✓

**(c) Explanation:**

The formula HCF × LCM = Product is derived from the relationship between two numbers and their common factors. For three or more numbers, this relationship doesn't hold because:
- HCF takes only the common factors of ALL numbers
- LCM takes the highest powers from ALL numbers
- The product includes all factors with their multiplicities
- These don't balance out the same way for three or more numbers
</details>

---

**Q56.** (a) Prove that $3 + 2\sqrt{5}$ is irrational.
(b) Prove that $\frac{1}{\sqrt{2}}$ is irrational.
(c) Is $2\sqrt{3} - 5$ rational or irrational? Justify.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof that $3 + 2\sqrt{5}$ is irrational:**

1. **Assume** $3 + 2\sqrt{5}$ is rational
2. Then $3 + 2\sqrt{5} = \frac{p}{q}$ where p, q are coprime integers (q ≠ 0)
3. $2\sqrt{5} = \frac{p}{q} - 3 = \frac{p - 3q}{q}$
4. $\sqrt{5} = \frac{p - 3q}{2q}$
5. RHS is rational, but $\sqrt{5}$ is irrational
6. Contradiction
7. **Therefore**, $3 + 2\sqrt{5}$ is irrational ✓

**(b) Proof that $\frac{1}{\sqrt{2}}$ is irrational:**

1. **Assume** $\frac{1}{\sqrt{2}}$ is rational
2. Then $\frac{1}{\sqrt{2}} = \frac{p}{q}$ where p, q are coprime integers (q ≠ 0)
3. $\sqrt{2} = \frac{q}{p}$
4. RHS is rational, but $\sqrt{2}$ is irrational
5. Contradiction
6. **Therefore**, $\frac{1}{\sqrt{2}}$ is irrational ✓

**(c) $2\sqrt{3} - 5$ is irrational** because:
- $2\sqrt{3}$ is irrational (product of rational and irrational)
- $2\sqrt{3} - 5$ is the sum of irrational and rational
- Sum of rational and irrational is always irrational
</details>

---

**Q57.** (a) Three persons step off together on a morning walk. Their steps measure 80 cm, 85 cm, and 90 cm respectively. What is the minimum distance each should walk so that all can cover the same distance in complete steps?
(b) Find the HCF of their step lengths.
(c) Explain the difference between using HCF and LCM in real-life problems.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Minimum distance = LCM(80, 85, 90)**

**Prime Factorization:**

$$80 = 2^4 \times 5$$
$$85 = 5 \times 17$$
$$90 = 2 \times 3^2 \times 5$$

$$\text{LCM} = 2^4 \times 3^2 \times 5 \times 17 = 16 \times 9 \times 5 \times 17 = 12240 \text{ cm}$$

**Answer:** 122.4 meters

**(b) HCF(80, 85, 90):**

$$\text{HCF} = 5$$

**(c) Difference between HCF and LCM applications:**

| HCF Applications | LCM Applications |
|------------------|-----------------|
| Finding maximum/longest/largest | Finding minimum/least/smallest |
| Dividing into equal parts | Finding when events coincide |
| Measuring exact dimensions | Repeating events together |
| Example: Longest rod to measure | Example: When bells toll together |
</details>

---

**Q58.** (a) Write the prime factorization of 1001, 1002, and 1003.
(b) Find the HCF and LCM of these three numbers.
(c) Are these numbers co-prime to each other? Explain.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Prime Factorization:**

$$1001 = 7 \times 11 \times 13$$
$$1002 = 2 \times 3 \times 167$$
$$1003 = 17 \times 59$$

**(b) HCF and LCM:**

**HCF:** No common prime factor among all three
$$\text{HCF} = 1$$

**LCM:** Product of all prime factors
$$\text{LCM} = 2 \times 3 \times 7 \times 11 \times 13 \times 17 \times 59 \times 167$$
$$= 1001 \times 1002 \times 1003 = 1006011006$$

**(c) Co-primality:**

- **Pairwise:** (1001, 1002), (1002, 1003), and (1001, 1003) are all co-prime (HCF = 1 for each pair)
- **All three together:** They are co-prime as a set (HCF of all three = 1)

**Note:** Three consecutive numbers are always co-prime as a set.
</details>

---

**Q59.** (a) Explain the method to prove a number is irrational with an example.
(b) Prove that $\sqrt{11}$ is irrational.
(c) Without proof, state whether the following are rational or irrational:
(i) $\pi$ (ii) $0.101001000100001...$ (iii) $\sqrt{16}$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Method to Prove Irrationality:**

**Proof by Contradiction:**
1. Assume the number is rational
2. Express it as p/q where p, q are coprime integers
3. Manipulate the equation algebraically
4. Show that both p and q must have a common factor
5. This contradicts the assumption that p and q are coprime
6. Therefore, the original assumption is wrong, and the number is irrational

**(b) Proof that $\sqrt{11}$ is irrational:**

1. **Assume** $\sqrt{11}$ is rational
2. Then $\sqrt{11} = \frac{p}{q}$ where p, q are coprime integers (q ≠ 0)
3. Squaring: $11 = \frac{p^2}{q^2}$ → $p^2 = 11q^2$
4. This means $p^2$ is divisible by 11, so p is divisible by 11
5. Let $p = 11k$ for some integer k
6. Substituting: $(11k)^2 = 11q^2$ → $121k^2 = 11q^2$ → $q^2 = 11k^2$
7. This means $q^2$ is divisible by 11, so q is divisible by 11
8. Both p and q are divisible by 11, contradicting that they are coprime
9. **Therefore**, $\sqrt{11}$ is irrational ✓

**(c) Classification:**

(i) $\pi$ - **Irrational** (non-terminating, non-recurring)
(ii) $0.101001000100001...$ - **Irrational** (non-terminating, non-recurring pattern)
(iii) $\sqrt{16} = 4$ - **Rational** (can be written as 4/1)
</details>

---

**Q60.** (a) State the conditions under which a rational number $\frac{p}{q}$ has:
(i) Terminating decimal expansion
(ii) Non-terminating repeating decimal expansion

(b) For each of the following, write the type of decimal expansion without actual division:
(i) $\frac{23}{2^3 \times 5^2}$ (ii) $\frac{17}{2^2 \times 3}$ (iii) $\frac{99}{200}$ (iv) $\frac{31}{128}$ (v) $\frac{43}{210}$

(c) Write the decimal expansion of $\frac{99}{200}$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Conditions:**

(i) **Terminating:** Denominator q (in lowest terms) is of the form $2^n \times 5^m$, where n, m are non-negative integers.

(ii) **Non-terminating repeating:** Denominator q (in lowest terms) contains prime factors other than 2 and 5.

**(b) Type of Decimal Expansion:**

(i) $\frac{23}{2^3 \times 5^2}$ - **Terminating** (form $2^n \times 5^m$)

(ii) $\frac{17}{2^2 \times 3}$ - **Non-terminating repeating** (contains 3)

(iii) $\frac{99}{200} = \frac{99}{2^3 \times 5^2}$ - **Terminating** (form $2^n \times 5^m$)

(iv) $\frac{31}{128} = \frac{31}{2^7}$ - **Terminating** (form $2^n \times 5^m$)

(v) $\frac{43}{210} = \frac{43}{2 \times 3 \times 5 \times 7}$ - **Non-terminating repeating** (contains 3 and 7)

**(c) Decimal Expansion:**

$$\frac{99}{200} = \frac{99 \times 5}{200 \times 5} = \frac{495}{1000} = 0.495$$

**Answer:** 0.495
</details>

---

**Q61.** (a) Find the HCF of 963 and 657 and express it as a linear combination of these numbers.
(b) Verify your answer.
(c) Can every linear combination of two numbers give their HCF? Explain.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Using Euclid's Algorithm:**

963 = 657 × 1 + 306
657 = 306 × 2 + 45
306 = 45 × 6 + 36
45 = 36 × 1 + 9
36 = 9 × 4 + 0

**HCF = 9**

**Expressing as linear combination:**

9 = 45 - 36 × 1
9 = 45 - (306 - 45 × 6) × 1
9 = 45 - 306 + 45 × 6
9 = 45 × 7 - 306
9 = (657 - 306 × 2) × 7 - 306
9 = 657 × 7 - 306 × 14 - 306
9 = 657 × 7 - 306 × 15
9 = 657 × 7 - (963 - 657) × 15
9 = 657 × 7 - 963 × 15 + 657 × 15
9 = 657 × 22 - 963 × 15

**Answer:** HCF = 9 = 657 × 22 + 963 × (-15)

**(b) Verification:**

$$657 \times 22 + 963 \times (-15) = 14454 - 14445 = 9$$ ✓

**(c) Not every linear combination gives HCF:**

- Only specific linear combinations (using Extended Euclidean Algorithm) give HCF
- General form: $ax + by$ can give any multiple of HCF(a,b)
- The smallest positive value of $ax + by$ is the HCF itself
</details>

---

**Q62.** (a) Find the LCM and HCF of 17, 23, and 29.
(b) Verify that HCF × LCM ≠ Product of the three numbers.
(c) What is special about these three numbers?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Prime Factorization:**

$$17 = 17$$
$$23 = 23$$
$$29 = 29$$

All three are prime numbers.

**HCF:** No common factor
$$\text{HCF} = 1$$

**LCM:** Product of all primes
$$\text{LCM} = 17 \times 23 \times 29 = 11339$$

**(b) Verification:**

$$\text{HCF} \times \text{LCM} = 1 \times 11339 = 11339$$
$$\text{Product} = 17 \times 23 \times 29 = 11339$$

In this special case, they are equal because HCF = 1.

**(c) Special Property:**

- All three numbers (17, 23, 29) are **prime numbers**
- They are **pairwise co-prime** (HCF of any pair = 1)
- For pairwise co-prime numbers, LCM = Product of numbers
- These are consecutive prime numbers (no prime between them)
</details>

---

**Q63.** (a) A rectangular courtyard is 18 m 72 cm long and 13 m 20 cm broad. It is to be paved with square tiles of the same size. Find the least possible number of such tiles.
(b) What is the side length of each tile?
(c) Calculate the total area covered by the tiles.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) & (b) Finding tile size:**

Convert to cm:
- Length = 1872 cm
- Breadth = 1320 cm

For least number of tiles, each tile should be as large as possible.

Side of square tile = HCF(1872, 1320)

**Prime Factorization:**

$$1872 = 2^4 \times 3^2 \times 13$$
$$1320 = 2^3 \times 3 \times 5 \times 11$$

$$\text{HCF} = 2^3 \times 3 = 8 \times 3 = 24 \text{ cm}$$

**Side of each tile = 24 cm**

**Number of tiles:**

$$\text{Along length} = \frac{1872}{24} = 77$$
$$\text{Along breadth} = \frac{1320}{24} = 55$$
$$\text{Total tiles} = 77 \times 55 = 4235$$

**Answer:** Least possible number of tiles = 4235

**(c) Total area:**

$$\text{Area of courtyard} = 1872 \times 1320 = 2471040 \text{ cm}^2 = 247.104 \text{ m}^2$$

**Answer:** 247.104 m²
</details>

---

**Q64.** (a) Prove that one and only one out of n, n+2, and n+4 is divisible by 3, where n is any positive integer.
(b) Using this result, explain why the product of any three consecutive integers is divisible by 6.
(c) Is $n^3 - n$ always divisible by 6? Justify.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

Any positive integer n can be written as:
- $n = 3q$ or
- $n = 3q + 1$ or
- $n = 3q + 2$ (where q is an integer)

**Case 1:** If $n = 3q$ (divisible by 3)
- n is divisible by 3
- n+2 = 3q+2 (not divisible by 3)
- n+4 = 3q+4 = 3(q+1)+1 (not divisible by 3)

**Case 2:** If $n = 3q+1$
- n = 3q+1 (not divisible by 3)
- n+2 = 3q+3 = 3(q+1) (divisible by 3)
- n+4 = 3q+5 = 3(q+1)+2 (not divisible by 3)

**Case 3:** If $n = 3q+2$
- n = 3q+2 (not divisible by 3)
- n+2 = 3q+4 = 3(q+1)+1 (not divisible by 3)
- n+4 = 3q+6 = 3(q+2) (divisible by 3)

**Therefore**, in all cases, exactly one of n, n+2, n+4 is divisible by 3. ✓

**(b) Product of three consecutive integers:**

Let the integers be n, n+1, n+2

- One of them is divisible by 2 (every alternate number is even)
- One of them is divisible by 3 (from part a, with adjustment)

Since 2 and 3 are coprime, the product is divisible by 2 × 3 = 6.

**(c) $n^3 - n$ is always divisible by 6:**

$$n^3 - n = n(n^2 - 1) = n(n-1)(n+1)$$

This is the product of three consecutive integers: (n-1), n, (n+1)

From part (b), product of three consecutive integers is divisible by 6.

**Therefore**, $n^3 - n$ is always divisible by 6. ✓
</details>

---

**Q65.** (a) Classify the following numbers as rational or irrational:
(i) $\sqrt{225}$ (ii) $0.3796$ (iii) $1.101001000100001...$ (iv) $\sqrt{50}$ (v) $\frac{\sqrt{27}}{\sqrt{3}}$

(b) Simplify and classify:
(i) $(\sqrt{5} + \sqrt{2})^2$ (ii) $(\sqrt{5} - \sqrt{2})(\sqrt{5} + \sqrt{2})$

(c) Represent $\sqrt{5}$ on the number line.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Classification:**

(i) $\sqrt{225} = 15$ - **Rational** (integer)

(ii) $0.3796$ - **Rational** (terminating decimal = $\frac{3796}{10000}$)

(iii) $1.101001000100001...$ - **Irrational** (non-terminating, non-recurring)

(iv) $\sqrt{50} = 5\sqrt{2}$ - **Irrational** ($\sqrt{2}$ is irrational)

(v) $\frac{\sqrt{27}}{\sqrt{3}} = \sqrt{\frac{27}{3}} = \sqrt{9} = 3$ - **Rational** (integer)

**(b) Simplification:**

(i) $(\sqrt{5} + \sqrt{2})^2 = 5 + 2 + 2\sqrt{10} = 7 + 2\sqrt{10}$ - **Irrational**

(ii) $(\sqrt{5} - \sqrt{2})(\sqrt{5} + \sqrt{2}) = 5 - 2 = 3$ - **Rational**

**(c) Representing $\sqrt{5}$ on Number Line:**

**Steps:**
1. Draw a number line and mark O at 0, A at 2
2. Draw AB perpendicular to OA at A, with AB = 1 unit
3. Join OB. By Pythagoras theorem, $OB = \sqrt{2^2 + 1^2} = \sqrt{5}$
4. With O as center and OB as radius, draw an arc cutting the number line at P
5. Point P represents $\sqrt{5}$ on the number line
</details>

---

## 6. Exam-Oriented Preparation

### 📝 Important Formulas & Theorems to Memorize

#### Euclid's Division Lemma:

$$ a = bq + r, \quad \text{where } 0 \leq r < b $$

#### Fundamental Theorem of Arithmetic:

Every composite number can be uniquely factorized as:

$$ n = p_1^{a_1} \times p_2^{a_2} \times ... \times p_k^{a_k} $$

where $p_1, p_2, ..., p_k$ are prime numbers.

#### HCF and LCM Relationship:

$$ \text{HCF}(a, b) \times \text{LCM}(a, b) = a \times b $$

#### Condition for Terminating Decimal:

$$ \frac{p}{q} \text{ terminates if } q = 2^n \times 5^m $$

---

### 🎯 Expected Question Patterns (CBSE Class 10)

#### 1 Mark Questions (MCQ/Very Short Answer):
- Identify rational/irrational numbers
- Find HCF or LCM of two numbers
- State whether decimal expansion terminates
- Apply Euclid's Division Lemma
- Prime factorization of small numbers

#### 2 Mark Questions (Short Answer):
- Use Euclid's Algorithm to find HCF
- Find HCF and LCM by prime factorization
- Prove simple irrationality statements
- Determine type of decimal expansion
- Word problems on HCF/LCM

#### 3 Mark Questions (Long Answer):
- Prove irrationality with detailed steps
- Express HCF as linear combination
- Complex word problems involving HCF/LCM
- Verify HCF × LCM = Product relationship

#### 5 Mark Questions (Very Long Answer):
- Multi-part questions combining concepts
- Euclid's Algorithm + verification + applications
- Irrationality proofs + classification + number line representation
- Comprehensive problems with real-life contexts

---

### 💡 Exam Tips:

1. ✅ **Always show steps** in Euclid's Division Algorithm
2. ✅ **Write prime factorization clearly** with exponents
3. ✅ **Mention the contradiction** in irrationality proofs
4. ✅ **Check denominator form** for decimal expansion type
5. ✅ **Verify HCF × LCM = Product** when asked
6. ✅ **Use proper notation** for recurring decimals ($0.\overline{3}$)
7. ✅ **State theorems before applying** them
8. ✅ **Draw number line neatly** when representing irrational numbers

---

### 🔴 Common Mistakes to Avoid:

| Mistake | Correction |
|---------|------------|
| Writing $0 \leq r \leq b$ in Euclid's Lemma | Write $0 \leq r < b$ |
| Forgetting to verify HCF × LCM = Product | Always verify when asked |
| Not stating "proof by contradiction" | Mention the proof method |
| Confusing HCF and LCM applications | HCF = maximum, LCM = minimum |
| Writing $\sqrt{4}$ as irrational | $\sqrt{4} = 2$ is rational |
| Incorrect prime factorization | Double-check by multiplying back |
| Forgetting q ≠ 0 in rational definition | Always mention q ≠ 0 |

---

### 📚 Previous Year Questions (CBSE Pattern)

**Q1 (CBSE 2024):** Prove that $\sqrt{3}$ is irrational.

**Answer:** Use proof by contradiction method (same as $\sqrt{2}$ proof).

---

**Q2 (CBSE 2023):** Find the HCF of 96 and 404 by prime factorization method. Hence find their LCM.

**Answer:** HCF = 4, LCM = 9696

---

**Q3 (CBSE 2023):** Without actual division, determine whether $\frac{13}{3125}$ has a terminating decimal expansion.

**Answer:** Yes, $3125 = 5^5 = 2^0 \times 5^5$

---

**Q4 (CBSE 2022):** Use Euclid's Division Algorithm to find the HCF of 135 and 225.

**Answer:** HCF = 45

---

**Q5 (CBSE 2022):** Prove that $5 + 3\sqrt{2}$ is irrational.

**Answer:** Use proof by contradiction, assuming it equals p/q.

---

**Q6 (CBSE 2021):** Find the LCM and HCF of 12, 15, and 21 by prime factorization.

**Answer:** HCF = 3, LCM = 420

---

**Q7 (CBSE 2021):** Explain why $7 \times 11 \times 13 + 13$ is composite.

**Answer:** $13(77+1) = 13 \times 78$ has factors other than 1 and itself.

---

**Q8 (CBSE 2020):** Can $6^n$ end with digit 0 for any natural number n?

**Answer:** No, because $6^n = 2^n \times 3^n$ has no factor of 5.

---

**Q9 (CBSE 2020):** Write the decimal expansion of $\frac{17}{8}$.

**Answer:** $0.125$ (terminating)

---

**Q10 (CBSE 2019):** Three bells toll at intervals of 9, 12, 15 minutes. When will they toll together?

**Answer:** LCM(9, 12, 15) = 180 minutes = 3 hours

---

## 7. Revision Notes

### 📌 Quick Revision Sheet

#### Key Definitions:

| Term | Definition |
|------|------------|
| **Real Numbers** | All rational and irrational numbers |
| **Rational Numbers** | Numbers of form p/q, q ≠ 0 |
| **Irrational Numbers** | Non-terminating, non-recurring decimals |
| **Euclid's Lemma** | a = bq + r, 0 ≤ r < b |
| **HCF** | Highest common factor |
| **LCM** | Least common multiple |
| **Co-prime** | Numbers with HCF = 1 |
| **Composite** | Number with more than 2 factors |

---

#### Important Theorems:

**1. Euclid's Division Lemma:**

For positive integers a, b: $a = bq + r, \quad 0 \leq r < b$

**2. Fundamental Theorem of Arithmetic:**

Every composite number has a unique prime factorization.

**3. HCF-LCM Relationship:**

$$\text{HCF}(a,b) \times \text{LCM}(a,b) = a \times b$$

**4. Terminating Decimal Condition:**

$$\frac{p}{q} \text{ terminates iff } q = 2^n \times 5^m$$

---

#### Common Irrational Numbers:

| Number | Value (approx.) |
|--------|-----------------|
| $\sqrt{2}$ | 1.41421356... |
| $\sqrt{3}$ | 1.73205080... |
| $\sqrt{5}$ | 2.23606797... |
| $\pi$ | 3.14159265... |
| $e$ | 2.71828182... |

---

#### Prime Numbers (1 to 100):

```
2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
73, 79, 83, 89, 97
```

**Total:** 25 prime numbers

---

#### Divisibility Rules:

| Number | Rule |
|--------|------|
| 2 | Last digit is even |
| 3 | Sum of digits divisible by 3 |
| 4 | Last two digits divisible by 4 |
| 5 | Last digit is 0 or 5 |
| 6 | Divisible by both 2 and 3 |
| 9 | Sum of digits divisible by 9 |
| 10 | Last digit is 0 |
| 11 | Difference of alternate digits = 0 or multiple of 11 |

---

#### Properties of HCF and LCM:

| Property | Statement |
|----------|-----------|
| HCF ≤ Numbers | HCF is never greater than the given numbers |
| LCM ≥ Numbers | LCM is never smaller than the given numbers |
| Co-prime | HCF = 1, LCM = Product |
| One divides other | HCF = smaller, LCM = larger |

---

### 🎓 Final Checklist Before Exam:

- [ ] I can state and apply Euclid's Division Lemma
- [ ] I can find HCF using Euclid's Algorithm
- [ ] I can find HCF and LCM by prime factorization
- [ ] I know the Fundamental Theorem of Arithmetic
- [ ] I can prove $\sqrt{2}$, $\sqrt{3}$, $\sqrt{5}$ are irrational
- [ ] I can determine if decimal expansion terminates
- [ ] I can verify HCF × LCM = Product
- [ ] I can solve word problems on HCF and LCM
- [ ] I know the difference between rational and irrational
- [ ] I have practiced all 30 MCQs
- [ ] I have practiced all 20 Short Answer questions
- [ ] I have practiced all 15 Long Answer questions

---

### 📊 Quick Formula Sheet:

**Euclid's Division Lemma:**
$$ a = bq + r, \quad 0 \leq r < b $$

**HCF-LCM Relationship:**
$$ \text{HCF}(a,b) \times \text{LCM}(a,b) = a \times b $$

**Terminating Decimal:**
$$ \frac{p}{q} \text{ terminates if } q = 2^n \times 5^m $$

**Rational Number:**
$$ \frac{p}{q} \text{ where } p,q \in \mathbb{Z}, q \neq 0 $$

---

**Good luck with your studies! 🌟**

> Remember: Practice prime factorization and Euclid's Algorithm daily to master this chapter!

---

**End of Learning Path - Real Numbers**
