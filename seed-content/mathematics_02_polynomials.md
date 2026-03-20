# Polynomials - Learning Path

## 1. Concept Introduction

### What is a Polynomial?

A **polynomial** is an algebraic expression consisting of variables, coefficients, and non-negative integer exponents, combined using addition, subtraction, and multiplication.

**Everyday Examples:**
- 📐 Area calculations: $x^2 + 5x + 6$ square units
- 💹 Profit modeling: $-2x^2 + 100x - 500$ rupees
- 🎢 Roller coaster paths: Curves designed using polynomial functions
- 📈 Business forecasting: Revenue predictions using polynomial trends
- 🏗️ Bridge design: Parabolic arches using quadratic polynomials

### Understanding Polynomial Terms:

```
POLYNOMIAL: 4x³ - 2x² + 7x - 5
            │    │    │   │
            │    │    │   └── Constant term (-5)
            │    │    └────── Coefficient of x (7)
            │    └─────────── Coefficient of x² (-2)
            └──────────────── Coefficient of x³ (4)
```

**Key Components:**

| Term | Meaning | Example |
|------|---------|---------|
| **Variable** | Symbol that can take any value | x, y, t |
| **Coefficient** | Number multiplying the variable | In 5x, coefficient is 5 |
| **Constant** | Fixed value without variable | 7, -3, 0 |
| **Term** | Each part separated by + or - | 4x³, -2x², 7x, -5 |
| **Degree** | Highest power of variable | Degree of 4x³ - 2x² + 7x - 5 is 3 |

---

## 2. Micro-topic Breakdown

This chapter is divided into the following key concepts:

```
Polynomials
├── 2.1 Introduction to Polynomials
│   ├── Terms, coefficients, constants
│   ├── Degree of polynomial
│   └── Types of polynomials
├── 2.2 Types of Polynomials
│   ├── Based on number of terms
│   ├── Based on degree
│   └── Linear, quadratic, cubic polynomials
├── 2.3 Zeroes of a Polynomial
│   ├── Definition and meaning
│   ├── Geometrical meaning
│   └── Finding zeroes
├── 2.4 Relationship between Zeroes and Coefficients
│   ├── For linear polynomials
│   ├── For quadratic polynomials
│   └── For cubic polynomials
└── 2.5 Division Algorithm for Polynomials
    ├── Statement and proof
    ├── Euclidean division
    └── Applications and problems
```

---

## 3. Concept Explanations

### 3.1 Introduction to Polynomials

A polynomial in one variable **x** is an expression of the form:

$$ p(x) = a_nx^n + a_{n-1}x^{n-1} + ... + a_2x^2 + a_1x + a_0 $$

where:
- $a_0, a_1, a_2, ..., a_n$ are constants (coefficients)
- $n$ is a non-negative integer (degree)
- $a_n \neq 0$ (leading coefficient)

#### Examples of Polynomials:

| Expression | Is it a Polynomial? | Reason |
|------------|---------------------|--------|
| $3x^2 + 5x - 7$ | ✅ Yes | All powers are non-negative integers |
| $x^3 - 4x + 2$ | ✅ Yes | Valid polynomial |
| $\sqrt{x} + 2$ | ❌ No | Power $\frac{1}{2}$ is not an integer |
| $\frac{1}{x} + 3$ | ❌ No | Power is -1 (negative) |
| $5$ | ✅ Yes | Constant polynomial (degree 0) |

---

### 3.2 Types of Polynomials

#### A. Based on Number of Terms:

| Type | Definition | Examples |
|------|------------|----------|
| **Monomial** | One term | $5x$, $-3y^2$, $7$ |
| **Binomial** | Two terms | $x + 3$, $2x^2 - 5$ |
| **Trinomial** | Three terms | $x^2 + 5x + 6$, $3y^2 - 2y + 1$ |

#### B. Based on Degree:

| Type | Degree | General Form | Examples |
|------|--------|--------------|----------|
| **Constant** | 0 | $p(x) = c$ | $5$, $-3$ |
| **Linear** | 1 | $p(x) = ax + b$ | $2x + 3$, $x - 5$ |
| **Quadratic** | 2 | $p(x) = ax^2 + bx + c$ | $x^2 + 5x + 6$ |
| **Cubic** | 3 | $p(x) = ax^3 + bx^2 + cx + d$ | $x^3 - 6x^2 + 11x - 6$ |
| **Biquadratic** | 4 | $p(x) = ax^4 + ...$ | $x^4 + 2x^2 + 1$ |

#### Visual Representation of Polynomial Graphs:

```
Linear Polynomial (Degree 1)
y = 2x + 3
     |
   / |
  /  |
 /   |
-----+----- x
     |

Quadratic Polynomial (Degree 2) - Parabola
y = x² - 4
     |
     |     \
     |      \
-----+-------\---- x
    /|        \
   / |         \
  /  |          \

Cubic Polynomial (Degree 3)
y = x³ - 3x
     |   /
     |  /
-----+-----/--- x
    /|    /
   / |   /
  /  |  /
```

---

### 3.3 Zeroes of a Polynomial

#### Definition:

A real number **k** is called a **zero** (or root) of polynomial $p(x)$ if:

$$ p(k) = 0 $$

**Geometrical Meaning:** The zero of a polynomial is the x-coordinate where the graph intersects the x-axis.

#### Finding Zeroes:

**Example 1:** Find the zero of $p(x) = 2x + 3$

**Solution:**
$$p(x) = 0$$
$$2x + 3 = 0$$
$$2x = -3$$
$$x = -\frac{3}{2}$$

**Zero:** $x = -\frac{3}{2}$

**Example 2:** Find the zeroes of $p(x) = x^2 - 5x + 6$

**Solution:**
$$x^2 - 5x + 6 = 0$$
$$(x - 2)(x - 3) = 0$$
$$x = 2 \text{ or } x = 3$$

**Zeroes:** $x = 2$ and $x = 3$

#### Geometrical Interpretation:

| Polynomial Type | Graph | Maximum Zeroes |
|-----------------|-------|----------------|
| Linear | Straight line | 1 |
| Quadratic | Parabola | 2 |
| Cubic | S-curve | 3 |

```
Quadratic: y = (x-2)(x-3)
           Intersects x-axis at x=2 and x=3

    y
    |
    |      \
    |       \
----+--------\------ x
   2|3       \
    |         \
    |
```

---

### 3.4 Relationship between Zeroes and Coefficients

#### For Linear Polynomial $ax + b$:

$$ \text{Zero} = -\frac{b}{a} $$

**Example:** $p(x) = 2x - 6$
- $a = 2$, $b = -6$
- Zero $= -\frac{-6}{2} = 3$

---

#### For Quadratic Polynomial $ax^2 + bx + c$:

If $\alpha$ and $\beta$ are the zeroes, then:

$$ \alpha + \beta = -\frac{b}{a} \quad \text{(Sum of zeroes)} $$
$$ \alpha \beta = \frac{c}{a} \quad \text{(Product of zeroes)} $$

**Example:** $p(x) = x^2 - 5x + 6$
- $a = 1$, $b = -5$, $c = 6$
- Zeroes: $\alpha = 2$, $\beta = 3$

**Verification:**
- Sum: $\alpha + \beta = 2 + 3 = 5 = -\frac{-5}{1}$ ✓
- Product: $\alpha \beta = 2 \times 3 = 6 = \frac{6}{1}$ ✓

---

#### For Cubic Polynomial $ax^3 + bx^2 + cx + d$:

If $\alpha$, $\beta$, and $\gamma$ are the zeroes, then:

$$ \alpha + \beta + \gamma = -\frac{b}{a} \quad \text{(Sum of zeroes)} $$
$$ \alpha\beta + \beta\gamma + \gamma\alpha = \frac{c}{a} \quad \text{(Sum of products taken two at a time)} $$
$$ \alpha\beta\gamma = -\frac{d}{a} \quad \text{(Product of zeroes)} $$

**Example:** $p(x) = x^3 - 6x^2 + 11x - 6$
- $a = 1$, $b = -6$, $c = 11$, $d = -6$
- Zeroes: $\alpha = 1$, $\beta = 2$, $\gamma = 3$

**Verification:**
- Sum: $1 + 2 + 3 = 6 = -\frac{-6}{1}$ ✓
- Sum of products: $1\times2 + 2\times3 + 3\times1 = 2 + 6 + 3 = 11 = \frac{11}{1}$ ✓
- Product: $1 \times 2 \times 3 = 6 = -\frac{-6}{1}$ ✓

---

### 3.5 Division Algorithm for Polynomials

#### Statement:

For any two polynomials $p(x)$ and $g(x)$ (where $g(x) \neq 0$), there exist unique polynomials $q(x)$ (quotient) and $r(x)$ (remainder) such that:

$$ p(x) = g(x) \times q(x) + r(x) $$

where either $r(x) = 0$ or degree of $r(x) <$ degree of $g(x)$.

#### Understanding the Algorithm:

| Term | Meaning | Degree Condition |
|------|---------|------------------|
| $p(x)$ | Dividend | - |
| $g(x)$ | Divisor | - |
| $q(x)$ | Quotient | deg(q) = deg(p) - deg(g) |
| $r(x)$ | Remainder | deg(r) < deg(g) or r = 0 |

#### Steps for Polynomial Division:

**Example:** Divide $p(x) = x^3 + 2x^2 - 5x - 6$ by $g(x) = x + 1$

```
Step 1: Arrange in descending order (already done)

Step 2: Divide first term
        x²
      _______
x + 1 ) x³ + 2x² - 5x - 6
        x³ +  x²
        -------
             x² - 5x

Step 3: Repeat
        x² +  x - 6
      _______
x + 1 ) x³ + 2x² - 5x - 6
        x³ +  x²
        -------
             x² - 5x
             x² +  x
             -------
                -6x - 6
                -6x - 6
                -------
                      0

Result: Quotient = x² + x - 6, Remainder = 0
```

**Verification:**
$$(x + 1)(x^2 + x - 6) + 0 = x^3 + x^2 - 6x + x^2 + x - 6 = x^3 + 2x^2 - 5x - 6$$ ✓

---

## 4. Guided Examples

### Example 1: Identifying Polynomials

**Question:** Which of the following are polynomials?
(i) $3x^2 - 5x + 2$
(ii) $\sqrt{x} + 3$
(iii) $x + \frac{1}{x}$
(iv) $7$

**Step-by-Step Solution:**

| Expression | Analysis | Polynomial? |
|------------|----------|-------------|
| (i) $3x^2 - 5x + 2$ | All powers are non-negative integers | ✅ Yes |
| (ii) $\sqrt{x} + 3$ | $\sqrt{x} = x^{1/2}$ (fractional power) | ❌ No |
| (iii) $x + \frac{1}{x}$ | $\frac{1}{x} = x^{-1}$ (negative power) | ❌ No |
| (iv) $7$ | Constant polynomial (degree 0) | ✅ Yes |

**Answer:** (i) and (iv) are polynomials

---

### Example 2: Finding Zeroes

**Question:** Find the zeroes of the quadratic polynomial $p(x) = x^2 - 3x - 10$.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Set $p(x) = 0$ | $x^2 - 3x - 10 = 0$ |
| 2 | Factorize | Find two numbers: product = -10, sum = -3 |
| 3 | Split middle term | $x^2 - 5x + 2x - 10 = 0$ |
| 4 | Take common factors | $x(x - 5) + 2(x - 5) = 0$ |
| 5 | Factor out | $(x + 2)(x - 5) = 0$ |
| 6 | Solve | $x = -2$ or $x = 5$ |

**Final Answer:** Zeroes are $x = -2$ and $x = 5$

**Verification:**
- Sum: $-2 + 5 = 3 = -\frac{-3}{1}$ ✓
- Product: $-2 \times 5 = -10 = \frac{-10}{1}$ ✓

---

### Example 3: Relationship between Zeroes and Coefficients

**Question:** Find a quadratic polynomial whose zeroes are 3 and -2.

**Step-by-Step Solution:**

Given: $\alpha = 3$, $\beta = -2$

| Calculation | Formula | Result |
|-------------|---------|--------|
| Sum of zeroes | $\alpha + \beta$ | $3 + (-2) = 1$ |
| Product of zeroes | $\alpha \beta$ | $3 \times (-2) = -6$ |

**Using the formula:**
$$p(x) = x^2 - (\text{sum})x + (\text{product})$$
$$p(x) = x^2 - (1)x + (-6)$$
$$p(x) = x^2 - x - 6$$

**Final Answer:** $p(x) = x^2 - x - 6$

---

### Example 4: Division Algorithm

**Question:** Divide $2x^3 + x^2 - 5x + 3$ by $x - 1$ and verify the division algorithm.

**Step-by-Step Solution:**

```
         2x² + 3x - 2
       _______________
x - 1 ) 2x³ +  x² - 5x + 3
        2x³ - 2x²
        ---------
             3x² - 5x
             3x² - 3x
             -------
                 -2x + 3
                 -2x + 2
                 -------
                       1
```

**Result:**
- Quotient: $q(x) = 2x^2 + 3x - 2$
- Remainder: $r(x) = 1$

**Verification:**
$$p(x) = g(x) \times q(x) + r(x)$$
$$(x - 1)(2x^2 + 3x - 2) + 1$$
$$= 2x^3 + 3x^2 - 2x - 2x^2 - 3x + 2 + 1$$
$$= 2x^3 + x^2 - 5x + 3$$ ✓

**Answer:** Quotient = $2x^2 + 3x - 2$, Remainder = $1$

---

### Example 5: Finding All Zeroes

**Question:** If two zeroes of $p(x) = x^4 - 6x^3 - 26x^2 + 138x - 35$ are $2 + \sqrt{3}$ and $2 - \sqrt{3}$, find the other zeroes.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Given zeroes | $\alpha = 2 + \sqrt{3}$, $\beta = 2 - \sqrt{3}$ |
| 2 | Find factor | $(x - \alpha)(x - \beta) = (x - 2 - \sqrt{3})(x - 2 + \sqrt{3})$ |
| 3 | Simplify | $= (x-2)^2 - (\sqrt{3})^2 = x^2 - 4x + 4 - 3 = x^2 - 4x + 1$ |
| 4 | Divide $p(x)$ by this factor | Using division algorithm |
| 5 | Get quotient | $x^2 - 2x - 35$ |
| 6 | Factorize quotient | $(x - 7)(x + 5)$ |
| 7 | Find remaining zeroes | $x = 7$ and $x = -5$ |

**Final Answer:** All four zeroes are $2 + \sqrt{3}$, $2 - \sqrt{3}$, $7$, and $-5$

---

## 5. Practice Questions

### SECTION A: Multiple Choice Questions (30 Questions - 1 Mark Each)

**Q1.** The degree of the polynomial $3x^4 - 2x^3 + 5x - 7$ is:
- (A) 2
- (B) 3
- (C) 4
- (D) 5

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 4

**Explanation:** The degree is the highest power of the variable. Here, the highest power is 4.
</details>

---

**Q2.** A polynomial of degree 2 is called:
- (A) Linear polynomial
- (B) Quadratic polynomial
- (C) Cubic polynomial
- (D) Biquadratic polynomial

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Quadratic polynomial

**Explanation:** Degree 2 polynomials are called quadratic (from Latin 'quadratus' meaning square).
</details>

---

**Q3.** The zero of the polynomial $p(x) = 3x - 6$ is:
- (A) 1
- (B) 2
- (C) 3
- (D) -2

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 2

**Explanation:** $3x - 6 = 0 \Rightarrow 3x = 6 \Rightarrow x = 2$
</details>

---

**Q4.** If $\alpha$ and $\beta$ are zeroes of $x^2 - 5x + 6$, then $\alpha + \beta$ equals:
- (A) 5
- (B) -5
- (C) 6
- (D) -6

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 5

**Explanation:** For $ax^2 + bx + c$, sum of zeroes = $-\frac{b}{a} = -\frac{-5}{1} = 5$
</details>

---

**Q5.** The product of zeroes of $2x^2 - 8x + 6$ is:
- (A) 3
- (B) -3
- (C) 4
- (D) -4

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 3

**Explanation:** Product of zeroes = $\frac{c}{a} = \frac{6}{2} = 3$
</details>

---

**Q6.** A polynomial with one term is called:
- (A) Binomial
- (B) Trinomial
- (C) Monomial
- (D) Constant

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Monomial

**Explanation:** Mono means one. Example: $5x^2$, $-3y$
</details>

---

**Q7.** The graph of a linear polynomial is:
- (A) A parabola
- (B) A straight line
- (C) A circle
- (D) A hyperbola

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) A straight line

**Explanation:** Linear polynomial $y = ax + b$ always gives a straight line.
</details>

---

**Q8.** If one zero of $x^2 - 4x + k$ is 3, then the value of k is:
- (A) 1
- (B) 2
- (C) 3
- (D) 4

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 3

**Explanation:** Substitute $x = 3$: $9 - 12 + k = 0 \Rightarrow k = 3$
</details>

---

**Q9.** The number of zeroes a cubic polynomial can have at most is:
- (A) 1
- (B) 2
- (C) 3
- (D) 4

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 3

**Explanation:** A polynomial of degree n has at most n zeroes.
</details>

---

**Q10.** If the sum of zeroes is 4 and product is -21, the quadratic polynomial is:
- (A) $x^2 + 4x - 21$
- (B) $x^2 - 4x - 21$
- (C) $x^2 - 4x + 21$
- (D) $x^2 + 4x + 21$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $x^2 - 4x - 21$

**Explanation:** $p(x) = x^2 - (\text{sum})x + (\text{product}) = x^2 - 4x + (-21)$
</details>

---

**Q11.** The degree of a constant polynomial is:
- (A) 0
- (B) 1
- (C) -1
- (D) Not defined

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 0

**Explanation:** Constant polynomial $p(x) = c = cx^0$ has degree 0.
</details>

---

**Q12.** Which of the following is a binomial?
- (A) $x^2 + 3x + 2$
- (B) $5x$
- (C) $x + 7$
- (D) $8$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) $x + 7$

**Explanation:** Binomial has exactly two terms.
</details>

---

**Q13.** The zeroes of $x^2 - 9$ are:
- (A) 3, -3
- (B) 9, -9
- (C) 3, 3
- (D) 0, 9

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 3, -3

**Explanation:** $x^2 - 9 = (x+3)(x-3) = 0 \Rightarrow x = 3, -3$
</details>

---

**Q14.** If $\alpha, \beta, \gamma$ are zeroes of a cubic polynomial, then $\alpha\beta\gamma$ equals:
- (A) $\frac{d}{a}$
- (B) $-\frac{d}{a}$
- (C) $\frac{c}{a}$
- (D) $-\frac{c}{a}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $-\frac{d}{a}$

**Explanation:** For $ax^3 + bx^2 + cx + d$, product of zeroes = $-\frac{d}{a}$
</details>

---

**Q15.** When $x^3 + 3x^2 + 3x + 1$ is divided by $x + 1$, the remainder is:
- (A) 0
- (B) 1
- (C) -1
- (D) 2

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 0

**Explanation:** $x^3 + 3x^2 + 3x + 1 = (x+1)^3$, so it's exactly divisible.
</details>

---

**Q16.** The graph of $y = x^2$ opens:
- (A) Upwards
- (B) Downwards
- (C) Left
- (D) Right

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) Upwards

**Explanation:** When coefficient of $x^2$ is positive, parabola opens upwards.
</details>

---

**Q17.** A polynomial of degree 3 is called:
- (A) Linear
- (B) Quadratic
- (C) Cubic
- (D) Quartic

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Cubic

**Explanation:** Degree 3 polynomials are called cubic polynomials.
</details>

---

**Q18.** If $p(x) = x^2 - 5x + 6$, then $p(2)$ equals:
- (A) 0
- (B) 1
- (C) 2
- (D) 6

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 0

**Explanation:** $p(2) = 4 - 10 + 6 = 0$ (2 is a zero)
</details>

---

**Q19.** The quotient when $x^3 - 8$ is divided by $x - 2$ is:
- (A) $x^2 + 2x + 4$
- (B) $x^2 - 2x + 4$
- (C) $x^2 + 2x - 4$
- (D) $x^2 - 2x - 4$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $x^2 + 2x + 4$

**Explanation:** $x^3 - 8 = (x-2)(x^2 + 2x + 4)$
</details>

---

**Q20.** Which of the following expressions is NOT a polynomial?
- (A) $3x^2 + \sqrt{2}$
- (B) $x + \frac{1}{x}$
- (C) $5x^3 - 2x + 1$
- (D) $7$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $x + \frac{1}{x}$

**Explanation:** $\frac{1}{x} = x^{-1}$ has negative exponent, not allowed in polynomials.
</details>

---

**Q21.** The number of polynomials having zeroes 2 and 5 is:
- (A) 1
- (B) 2
- (C) 3
- (D) More than 3

<details>
<summary>✓ Show Answer</summary>

**Answer:** (D) More than 3

**Explanation:** Infinitely many: $k(x^2 - 7x + 10)$ for any non-zero k.
</details>

---

**Q22.** If the zeroes of $ax^2 + bx + c$ are equal, then:
- (A) $b^2 - 4ac > 0$
- (B) $b^2 - 4ac = 0$
- (C) $b^2 - 4ac < 0$
- (D) $b^2 - 4ac \geq 0$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $b^2 - 4ac = 0$

**Explanation:** Equal roots occur when discriminant = 0.
</details>

---

**Q23.** The degree of $5x^3y^2 + 3x^2y - 7xy^3$ is:
- (A) 3
- (B) 4
- (C) 5
- (D) 6

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 5

**Explanation:** Highest sum of powers: $3 + 2 = 5$ in $5x^3y^2$
</details>

---

**Q24.** If $\alpha$ and $\beta$ are zeroes of $x^2 - p(x+1) - c$, then $(\alpha + 1)(\beta + 1)$ equals:
- (A) 1 - c
- (B) 1 + c
- (C) c - 1
- (D) -1 - c

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 1 - c

**Explanation:** $(\alpha+1)(\beta+1) = \alpha\beta + \alpha + \beta + 1 = -c + p + 1 - p = 1 - c$
</details>

---

**Q25.** A quadratic polynomial with zeroes $2\sqrt{3}$ and $-2\sqrt{3}$ is:
- (A) $x^2 - 12$
- (B) $x^2 + 12$
- (C) $x^2 - 4\sqrt{3}$
- (D) $x^2 + 4\sqrt{3}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $x^2 - 12$

**Explanation:** Sum = 0, Product = $-12$. Polynomial: $x^2 - 0x + (-12) = x^2 - 12$
</details>

---

**Q26.** The remainder when $x^4 + x^3 - 2x^2 + x + 1$ is divided by $x - 1$ is:
- (A) 0
- (B) 1
- (C) 2
- (D) 3

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 2

**Explanation:** By Remainder Theorem: $p(1) = 1 + 1 - 2 + 1 + 1 = 2$
</details>

---

**Q27.** If two zeroes of a cubic polynomial are 0, then the polynomial is:
- (A) $ax^3 + bx^2$
- (B) $ax^3 + bx$
- (C) $ax^3 + c$
- (D) $ax^3 + bx + c$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $ax^3 + bx^2$

**Explanation:** Two zeroes being 0 means $x^2$ is a factor, so no constant or x term.
</details>

---

**Q28.** The graph of a quadratic polynomial intersects the x-axis at:
- (A) Exactly one point
- (B) At most two points
- (C) Exactly two points
- (D) At most one point

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) At most two points

**Explanation:** Can intersect at 0, 1, or 2 points depending on discriminant.
</details>

---

**Q29.** If $x + 2$ is a factor of $x^3 - 2x^2 + kx + 8$, then k equals:
- (A) -4
- (B) 4
- (C) 2
- (D) -2

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 4

**Explanation:** $p(-2) = 0 \Rightarrow -8 - 8 - 2k + 8 = 0 \Rightarrow k = 4$
</details>

---

**Q30.** The degree of the remainder when a polynomial of degree 5 is divided by a polynomial of degree 3 is:
- (A) At most 2
- (B) At most 3
- (C) Exactly 2
- (D) Exactly 3

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) At most 2

**Explanation:** Degree of remainder < Degree of divisor. So degree < 3, meaning at most 2.
</details>

---

### SECTION B: Short Answer Questions (20 Questions - 2-3 Marks Each)

**Q31.** Verify that 2 and -3 are zeroes of the polynomial $x^2 + x - 6$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given: $p(x) = x^2 + x - 6$

**For x = 2:**
$$p(2) = 2^2 + 2 - 6 = 4 + 2 - 6 = 0$$ ✓

**For x = -3:**
$$p(-3) = (-3)^2 + (-3) - 6 = 9 - 3 - 6 = 0$$ ✓

**Therefore**, both 2 and -3 are zeroes of the polynomial.
</details>

---

**Q32.** Find a quadratic polynomial with sum of zeroes = 4 and product of zeroes = 1.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given:
- Sum of zeroes = 4
- Product of zeroes = 1

**Using the formula:**
$$p(x) = x^2 - (\text{sum})x + (\text{product})$$
$$p(x) = x^2 - 4x + 1$$

**Answer:** $p(x) = x^2 - 4x + 1$

(Note: Any non-zero multiple $k(x^2 - 4x + 1)$ is also valid)
</details>

---

**Q33.** Divide $3x^3 + x^2 + 2x + 5$ by $x^2 + 2x + 1$ and find the quotient and remainder.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
          3x - 5
        _______________
x²+2x+1 ) 3x³ +  x² + 2x + 5
          3x³ + 6x² + 3x
          -------------
               -5x² -  x + 5
               -5x² - 10x - 5
               -------------
                      9x + 10
```

**Quotient:** $3x - 5$
**Remainder:** $9x + 10$

**Verification:**
$$(x^2 + 2x + 1)(3x - 5) + (9x + 10) = 3x^3 + x^2 + 2x + 5$$ ✓
</details>

---

**Q34.** If $\alpha$ and $\beta$ are zeroes of $2x^2 - 7x + 3$, find the value of $\frac{1}{\alpha} + \frac{1}{\beta}$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given: $2x^2 - 7x + 3$
- $a = 2$, $b = -7$, $c = 3$

**Sum of zeroes:** $\alpha + \beta = -\frac{b}{a} = \frac{7}{2}$

**Product of zeroes:** $\alpha\beta = \frac{c}{a} = \frac{3}{2}$

$$\frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta} = \frac{7/2}{3/2} = \frac{7}{3}$$

**Answer:** $\frac{7}{3}$
</details>

---

**Q35.** Find the zeroes of $3x^2 - 5x - 2$ and verify the relationship with coefficients.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Finding zeroes:**
$$3x^2 - 5x - 2 = 0$$
$$3x^2 - 6x + x - 2 = 0$$
$$3x(x - 2) + 1(x - 2) = 0$$
$$(3x + 1)(x - 2) = 0$$

**Zeroes:** $x = -\frac{1}{3}$ and $x = 2$

**Verification:**
- Sum: $-\frac{1}{3} + 2 = \frac{5}{3} = -\frac{-5}{3}$ ✓
- Product: $-\frac{1}{3} \times 2 = -\frac{2}{3} = \frac{-2}{3}$ ✓
</details>

---

**Q36.** On dividing $x^3 - 3x^2 + x + 2$ by a polynomial $g(x)$, the quotient and remainder were $x - 2$ and $-2x + 4$ respectively. Find $g(x)$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Using Division Algorithm:
$$p(x) = g(x) \times q(x) + r(x)$$

$$x^3 - 3x^2 + x + 2 = g(x) \times (x - 2) + (-2x + 4)$$

$$g(x) \times (x - 2) = x^3 - 3x^2 + x + 2 - (-2x + 4)$$

$$g(x) \times (x - 2) = x^3 - 3x^2 + 3x - 2$$

Dividing $x^3 - 3x^2 + 3x - 2$ by $(x - 2)$:

$$g(x) = x^2 - x + 1$$

**Answer:** $g(x) = x^2 - x + 1$
</details>

---

**Q37.** Find the zeroes of the polynomial $x^2 - 3$ and verify the sum and product.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Finding zeroes:**
$$x^2 - 3 = 0$$
$$x^2 = 3$$
$$x = \pm\sqrt{3}$$

**Zeroes:** $\sqrt{3}$ and $-\sqrt{3}$

**Verification:**
- Sum: $\sqrt{3} + (-\sqrt{3}) = 0 = -\frac{0}{1}$ ✓
- Product: $\sqrt{3} \times (-\sqrt{3}) = -3 = \frac{-3}{1}$ ✓
</details>

---

**Q38.** If the zeroes of $x^3 - 3x^2 + x + 1$ are $a-b$, $a$, and $a+b$, find $a$ and $b$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given zeroes: $a-b$, $a$, $a+b$

**Sum of zeroes:**
$$(a-b) + a + (a+b) = 3a = -\frac{-3}{1} = 3$$
$$a = 1$$

**Product of zeroes:**
$$(a-b)(a)(a+b) = a(a^2 - b^2) = -\frac{1}{1} = -1$$

Substituting $a = 1$:
$$1(1 - b^2) = -1$$
$$1 - b^2 = -1$$
$$b^2 = 2$$
$$b = \pm\sqrt{2}$$

**Answer:** $a = 1$, $b = \pm\sqrt{2}$
</details>

---

**Q39.** Give examples of:
(i) A monomial of degree 5
(ii) A binomial of degree 3
(iii) A trinomial of degree 2

<details>
<summary>✓ Show Answer</summary>

**Answer:**

(i) **Monomial of degree 5:** $3x^5$ or $-2y^5$

(ii) **Binomial of degree 3:** $x^3 + 2$ or $5x^3 - x$

(iii) **Trinomial of degree 2:** $x^2 + 3x + 2$ or $2y^2 - 5y + 1$

(Note: Multiple correct answers possible)
</details>

---

**Q40.** Find the value of $k$ if $x - 1$ is a factor of $x^3 + 2x^2 + kx + 6$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

If $x - 1$ is a factor, then $p(1) = 0$

$$p(1) = 1^3 + 2(1)^2 + k(1) + 6 = 0$$
$$1 + 2 + k + 6 = 0$$
$$k + 9 = 0$$
$$k = -9$$

**Answer:** $k = -9$
</details>

---

**Q41.** Check whether $x^2 + 3x + 1$ is a factor of $3x^4 + 5x^3 - 7x^2 + 2x + 2$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Divide $3x^4 + 5x^3 - 7x^2 + 2x + 2$ by $x^2 + 3x + 1$:

```
          3x² - 4x + 2
        _________________
x²+3x+1 ) 3x⁴ + 5x³ - 7x² + 2x + 2
          3x⁴ + 9x³ + 3x²
          ---------------
               -4x³ - 10x² + 2x
               -4x³ - 12x² - 4x
               ----------------
                      2x² + 6x + 2
                      2x² + 6x + 2
                      ------------
                             0
```

**Remainder = 0**, so $x^2 + 3x + 1$ **is a factor**. ✓
</details>

---

**Q42.** Find a cubic polynomial with the sum of zeroes = 2, sum of products of zeroes taken two at a time = -7, and product of zeroes = -14.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given:
- $\alpha + \beta + \gamma = 2$
- $\alpha\beta + \beta\gamma + \gamma\alpha = -7$
- $\alpha\beta\gamma = -14$

**Cubic polynomial:**
$$p(x) = x^3 - (\text{sum})x^2 + (\text{sum of products})x - (\text{product})$$
$$p(x) = x^3 - 2x^2 + (-7)x - (-14)$$
$$p(x) = x^3 - 2x^2 - 7x + 14$$

**Answer:** $p(x) = x^3 - 2x^2 - 7x + 14$
</details>

---

**Q43.** If $\alpha$ and $\beta$ are zeroes of $x^2 - 6x + k$ such that $\alpha - \beta = 2$, find k.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given: $x^2 - 6x + k$
- $\alpha + \beta = 6$ ... (i)
- $\alpha - \beta = 2$ ... (ii)

Adding (i) and (ii):
$$2\alpha = 8 \Rightarrow \alpha = 4$$

From (i): $4 + \beta = 6 \Rightarrow \beta = 2$

**Product:** $\alpha\beta = 4 \times 2 = 8 = \frac{k}{1}$

**Answer:** $k = 8$
</details>

---

**Q44.** Find the zeroes of $4x^2 - 9$ and verify the relationship with coefficients.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Finding zeroes:**
$$4x^2 - 9 = 0$$
$$(2x + 3)(2x - 3) = 0$$
$$x = \frac{3}{2} \text{ or } x = -\frac{3}{2}$$

**Verification:**
- Sum: $\frac{3}{2} + (-\frac{3}{2}) = 0 = -\frac{0}{4}$ ✓
- Product: $\frac{3}{2} \times (-\frac{3}{2}) = -\frac{9}{4} = \frac{-9}{4}$ ✓
</details>

---

**Q45.** Obtain all other zeroes of $3x^4 + 6x^3 - 2x^2 - 10x - 5$ if two of its zeroes are $\sqrt{\frac{5}{3}}$ and $-\sqrt{\frac{5}{3}}$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given zeroes: $\sqrt{\frac{5}{3}}$ and $-\sqrt{\frac{5}{3}}$

**Factor:** $(x - \sqrt{\frac{5}{3}})(x + \sqrt{\frac{5}{3}}) = x^2 - \frac{5}{3}$

Multiply by 3: $3x^2 - 5$

**Dividing:**
$$(3x^4 + 6x^3 - 2x^2 - 10x - 5) \div (3x^2 - 5) = x^2 + 2x + 1$$

$$x^2 + 2x + 1 = (x + 1)^2$$

**Other zeroes:** $x = -1, -1$ (repeated)

**Answer:** All zeroes are $\sqrt{\frac{5}{3}}$, $-\sqrt{\frac{5}{3}}$, $-1$, $-1$
</details>

---

**Q46.** What must be added to $x^3 - 3x^2 + 6x - 15$ so that it is completely divisible by $x - 3$?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let $k$ be added to make it divisible.

$$p(x) = x^3 - 3x^2 + 6x - 15 + k$$

For divisibility by $x - 3$: $p(3) = 0$

$$p(3) = 27 - 27 + 18 - 15 + k = 0$$
$$3 + k = 0$$
$$k = -3$$

**Answer:** $-3$ must be added (or 3 must be subtracted)
</details>

---

**Q47.** If the polynomial $x^4 - 6x^3 + 16x^2 - 25x + 10$ is divided by $x^2 - 2x + k$, the remainder comes out to be $x + a$. Find $k$ and $a$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Using division algorithm and comparing coefficients:

After division, remainder = $(2k - 9)x + (10 - 8k + k^2)$

Given remainder = $x + a$

**Comparing:**
$$2k - 9 = 1 \Rightarrow k = 5$$
$$a = 10 - 8(5) + 5^2 = 10 - 40 + 25 = -5$$

**Answer:** $k = 5$, $a = -5$
</details>

---

**Q48.** Find the zeroes of $6x^2 - 7x - 3$ and verify the sum and product of zeroes.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Finding zeroes:**
$$6x^2 - 7x - 3 = 0$$
$$6x^2 - 9x + 2x - 3 = 0$$
$$3x(2x - 3) + 1(2x - 3) = 0$$
$$(3x + 1)(2x - 3) = 0$$

**Zeroes:** $x = -\frac{1}{3}$ and $x = \frac{3}{2}$

**Verification:**
- Sum: $-\frac{1}{3} + \frac{3}{2} = \frac{-2 + 9}{6} = \frac{7}{6} = -\frac{-7}{6}$ ✓
- Product: $-\frac{1}{3} \times \frac{3}{2} = -\frac{1}{2} = \frac{-3}{6}$ ✓
</details>

---

**Q49.** Draw the graph of $y = x^2 - 4$ and find its zeroes from the graph.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Table of values:**

| x | -3 | -2 | -1 | 0 | 1 | 2 | 3 |
|---|----|----|----|---|---|---|---|
| y | 5 | 0 | -3 | -4 | -3 | 0 | 5 |

```
    y
    |
  5 + *           *
    |
  0 +----*-------*---- x
   -2   |       2
 -4 +    *
    |
```

**Zeroes from graph:** The parabola intersects x-axis at $x = -2$ and $x = 2$

**Answer:** Zeroes are $-2$ and $2$
</details>

---

**Q50.** Find the value of $\frac{\alpha^2}{\beta} + \frac{\beta^2}{\alpha}$ if $\alpha$ and $\beta$ are zeroes of $2x^2 - 5x + 3$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given: $2x^2 - 5x + 3$
- $\alpha + \beta = \frac{5}{2}$
- $\alpha\beta = \frac{3}{2}$

$$\frac{\alpha^2}{\beta} + \frac{\beta^2}{\alpha} = \frac{\alpha^3 + \beta^3}{\alpha\beta}$$

$$\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)$$

$$= \left(\frac{5}{2}\right)^3 - 3\left(\frac{3}{2}\right)\left(\frac{5}{2}\right)$$

$$= \frac{125}{8} - \frac{45}{4} = \frac{125 - 90}{8} = \frac{35}{8}$$

$$\frac{\alpha^2}{\beta} + \frac{\beta^2}{\alpha} = \frac{35/8}{3/2} = \frac{35}{8} \times \frac{2}{3} = \frac{35}{12}$$

**Answer:** $\frac{35}{12}$
</details>

---

### SECTION C: Long Answer Questions (15 Questions - 5 Marks Each)

**Q51.** (a) State the relationship between zeroes and coefficients of a quadratic polynomial.
(b) Find the zeroes of $4x^2 - 4x - 3$ and verify the relationship.
(c) Form a quadratic polynomial whose zeroes are double the zeroes of the given polynomial.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Relationship for $ax^2 + bx + c$:**

If $\alpha$ and $\beta$ are zeroes:
- Sum of zeroes: $\alpha + \beta = -\frac{b}{a}$
- Product of zeroes: $\alpha\beta = \frac{c}{a}$

**(b) Finding zeroes of $4x^2 - 4x - 3$:**

$$4x^2 - 4x - 3 = 0$$
$$4x^2 - 6x + 2x - 3 = 0$$
$$2x(2x - 3) + 1(2x - 3) = 0$$
$$(2x + 1)(2x - 3) = 0$$

**Zeroes:** $\alpha = -\frac{1}{2}$, $\beta = \frac{3}{2}$

**Verification:**
- Sum: $-\frac{1}{2} + \frac{3}{2} = 1 = -\frac{-4}{4}$ ✓
- Product: $-\frac{1}{2} \times \frac{3}{2} = -\frac{3}{4} = \frac{-3}{4}$ ✓

**(c) New polynomial with double zeroes:**

New zeroes: $2\alpha = -1$, $2\beta = 3$

- New sum: $-1 + 3 = 2$
- New product: $-1 \times 3 = -3$

**New polynomial:** $p(x) = x^2 - 2x - 3$

**Answer:** $x^2 - 2x - 3$
</details>

---

**Q52.** (a) State the Division Algorithm for polynomials.
(b) Divide $3x^3 + x^2 + 2x + 5$ by $3x - 5$ and verify the algorithm.
(c) What is the degree of quotient and remainder?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Division Algorithm:**

For polynomials $p(x)$ and $g(x)$ ($g(x) \neq 0$), there exist unique polynomials $q(x)$ and $r(x)$ such that:
$$p(x) = g(x) \times q(x) + r(x)$$
where $r(x) = 0$ or degree of $r(x) <$ degree of $g(x)$.

**(b) Division:**

```
          x² + 2x + 4
        _______________
3x - 5 ) 3x³ +  x² + 2x + 5
         3x³ - 5x²
         ---------
              6x² + 2x
              6x² - 10x
              --------
                   12x + 5
                   12x - 20
                   -------
                        25
```

**Quotient:** $x^2 + 2x + 4$
**Remainder:** $25$

**Verification:**
$$(3x - 5)(x^2 + 2x + 4) + 25 = 3x^3 + 6x^2 + 12x - 5x^2 - 10x - 20 + 25 = 3x^3 + x^2 + 2x + 5$$ ✓

**(c) Degrees:**
- Degree of quotient = 2 (= 3 - 1)
- Degree of remainder = 0 (< 1)
</details>

---

**Q53.** (a) If $\alpha, \beta, \gamma$ are zeroes of $ax^3 + bx^2 + cx + d$, write the relationships.
(b) Verify for $x^3 - 4x^2 + x + 6$ with zeroes 2, 3, and -1.
(c) Find a cubic polynomial with zeroes 1, 2, and 3.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Relationships for $ax^3 + bx^2 + cx + d$:**

- $\alpha + \beta + \gamma = -\frac{b}{a}$
- $\alpha\beta + \beta\gamma + \gamma\alpha = \frac{c}{a}$
- $\alpha\beta\gamma = -\frac{d}{a}$

**(b) Verification for $x^3 - 4x^2 + x + 6$:**

Given zeroes: $\alpha = 2$, $\beta = 3$, $\gamma = -1$

- Sum: $2 + 3 + (-1) = 4 = -\frac{-4}{1}$ ✓
- Sum of products: $2(3) + 3(-1) + (-1)(2) = 6 - 3 - 2 = 1 = \frac{1}{1}$ ✓
- Product: $2 \times 3 \times (-1) = -6 = -\frac{6}{1}$ ✓

**(c) Cubic polynomial with zeroes 1, 2, 3:**

- Sum: $1 + 2 + 3 = 6$
- Sum of products: $1(2) + 2(3) + 3(1) = 2 + 6 + 3 = 11$
- Product: $1 \times 2 \times 3 = 6$

**Polynomial:** $p(x) = x^3 - 6x^2 + 11x - 6$
</details>

---

**Q54.** (a) Explain the geometrical meaning of zeroes of a polynomial with diagrams.
(b) How many zeroes can a linear, quadratic, and cubic polynomial have at most?
(c) Can a polynomial have no zeroes? Give an example.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Geometrical Meaning:**

The zeroes of a polynomial $p(x)$ are the x-coordinates where the graph $y = p(x)$ intersects the x-axis.

```
Linear: y = 2x - 4      Quadratic: y = x² - 4     Cubic: y = x³ - x
     |                        |   \                    |   /
     |   /                    |    \                   |  /
-----+--/---- x          -----+-----\---- x       -----+\/---- x
     | /  (2,0)              |      \                 |/\
     |/                  -2 / \      2              -1  0  1
   (2,0)                      \
```

**(b) Maximum Number of Zeroes:**

| Type | Degree | Maximum Zeroes |
|------|--------|----------------|
| Linear | 1 | 1 |
| Quadratic | 2 | 2 |
| Cubic | 3 | 3 |

**(c) Polynomial with No Zeroes:**

Yes, a polynomial can have no real zeroes.

**Example:** $p(x) = x^2 + 1$

- $x^2 + 1 = 0 \Rightarrow x^2 = -1$ (no real solution)
- Graph lies entirely above x-axis
</details>

---

**Q55.** (a) Find all zeroes of $2x^4 - 3x^3 - 3x^2 + 6x - 2$ if two zeroes are $\sqrt{2}$ and $-\sqrt{2}$.
(b) Verify the sum of all zeroes.
(c) Verify the product of all zeroes.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding all zeroes:**

Given: $\sqrt{2}$ and $-\sqrt{2}$ are zeroes

**Factor:** $(x - \sqrt{2})(x + \sqrt{2}) = x^2 - 2$

**Dividing:**
$$(2x^4 - 3x^3 - 3x^2 + 6x - 2) \div (x^2 - 2) = 2x^2 - 3x + 1$$

**Factorizing quotient:**
$$2x^2 - 3x + 1 = (2x - 1)(x - 1)$$

**All zeroes:** $\sqrt{2}$, $-\sqrt{2}$, $\frac{1}{2}$, $1$

**(b) Sum verification:**
$$\sqrt{2} + (-\sqrt{2}) + \frac{1}{2} + 1 = \frac{3}{2} = -\frac{-3}{2}$$ ✓

**(c) Product verification:**
$$\sqrt{2} \times (-\sqrt{2}) \times \frac{1}{2} \times 1 = -2 \times \frac{1}{2} = -1 = -\frac{-2}{2}$$ ✓
</details>

---

**Q56.** (a) Prove that $(a + b + c)^3 - a^3 - b^3 - c^3 = 3(a + b)(b + c)(c + a)$.
(b) If $\alpha$ and $\beta$ are zeroes of $x^2 - p(x + 1) - c$, show that $(\alpha + 1)(\beta + 1) = 1 - c$.
(c) Find k if sum of zeroes of $kx^2 - 2x + 3k$ equals their product.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

LHS = $(a + b + c)^3 - a^3 - b^3 - c^3$

Using identity: $(x + y)^3 = x^3 + y^3 + 3xy(x + y)$

Let $x = a + b$, $y = c$:
$$(a + b + c)^3 = (a + b)^3 + c^3 + 3(a + b)c(a + b + c)$$

Substituting and simplifying:
$$= (a^3 + b^3 + 3ab(a + b)) + c^3 + 3c(a + b)(a + b + c) - a^3 - b^3 - c^3$$
$$= 3ab(a + b) + 3c(a + b)(a + b + c)$$
$$= 3(a + b)[ab + c(a + b + c)]$$
$$= 3(a + b)(ab + ac + bc + c^2)$$
$$= 3(a + b)[a(b + c) + c(b + c)]$$
$$= 3(a + b)(b + c)(a + c)$$ ✓

**(b) Proof:**

Given: $x^2 - p(x + 1) - c = x^2 - px - p - c$

- $\alpha + \beta = p$
- $\alpha\beta = -p - c$

$$(\alpha + 1)(\beta + 1) = \alpha\beta + \alpha + \beta + 1 = (-p - c) + p + 1 = 1 - c$$ ✓

**(c) Finding k:**

Given: Sum = Product

$$\frac{2}{k} = \frac{3k}{k} = 3$$

$$\frac{2}{k} = 3 \Rightarrow k = \frac{2}{3}$$
</details>

---

**Q57.** (a) What must be subtracted from $x^3 - 6x^2 - 15x + 80$ so that the result is exactly divisible by $x^2 + x - 12$?
(b) What must be added to $4x^4 + 2x^3 - 2x^2 + x - 1$ so that it's divisible by $x^2 + 2x - 3$?
(c) Explain the method used.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding what to subtract:**

Divide $x^3 - 6x^2 - 15x + 80$ by $x^2 + x - 12$:

```
          x - 7
        _____________
x²+x-12 ) x³ - 6x² - 15x + 80
          x³ +  x² - 12x
          -------------
              -7x² -  3x + 80
              -7x² -  7x + 84
              -------------
                      4x - 4
```

**Remainder = $4x - 4$**

**Answer:** Subtract $4x - 4$

**(b) Finding what to add:**

Divide $4x^4 + 2x^3 - 2x^2 + x - 1$ by $x^2 + 2x - 3$:

Remainder = $61x - 65$

To make divisible, add $-(61x - 65) = -61x + 65$

**Answer:** Add $-61x + 65$

**(c) Method:**

Use Division Algorithm: $p(x) = g(x) \times q(x) + r(x)$

To make divisible: Subtract or add $-r(x)$
</details>

---

**Q58.** (a) If the zeroes of $x^3 - 3x^2 + x + 1$ are $a-b$, $a$, $a+b$, find a and b.
(b) Verify all three relationships between zeroes and coefficients.
(c) Find the value of $(a-b)(a)(a+b)$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding a and b:**

Given zeroes: $a-b$, $a$, $a+b$

**Sum:** $(a-b) + a + (a+b) = 3a = -\frac{-3}{1} = 3$

$$a = 1$$

**Product:** $(a-b)(a)(a+b) = a(a^2 - b^2) = -\frac{1}{1} = -1$

$$1(1 - b^2) = -1$$
$$b^2 = 2$$
$$b = \pm\sqrt{2}$$

**Answer:** $a = 1$, $b = \pm\sqrt{2}$

**(b) Verification:**

Zeroes: $1-\sqrt{2}$, $1$, $1+\sqrt{2}$

- Sum: $(1-\sqrt{2}) + 1 + (1+\sqrt{2}) = 3$ ✓
- Sum of products: $(1-\sqrt{2})(1) + (1)(1+\sqrt{2}) + (1+\sqrt{2})(1-\sqrt{2}) = 1-\sqrt{2} + 1+\sqrt{2} + 1-2 = 1$ ✓
- Product: $(1-\sqrt{2})(1)(1+\sqrt{2}) = 1-2 = -1$ ✓

**(c) Value:** $(a-b)(a)(a+b) = -1$
</details>

---

**Q59.** (a) Obtain all zeroes of $x^4 - 3x^3 - x^2 + 9x - 6$ if two zeroes are $-\sqrt{3}$ and $\sqrt{3}$.
(b) Verify the sum of all zeroes equals $-\frac{b}{a}$.
(c) How many maximum zeroes can a degree 4 polynomial have?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding all zeroes:**

Given: $-\sqrt{3}$ and $\sqrt{3}$

**Factor:** $(x + \sqrt{3})(x - \sqrt{3}) = x^2 - 3$

**Dividing:**
$$(x^4 - 3x^3 - x^2 + 9x - 6) \div (x^2 - 3) = x^2 - 3x + 2$$

$$x^2 - 3x + 2 = (x - 1)(x - 2)$$

**All zeroes:** $-\sqrt{3}$, $\sqrt{3}$, $1$, $2$

**(b) Sum verification:**
$$-\sqrt{3} + \sqrt{3} + 1 + 2 = 3 = -\frac{-3}{1}$$ ✓

**(c) Maximum zeroes:**

A degree 4 polynomial can have at most **4 zeroes**.
</details>

---

**Q60.** (a) State and prove the Division Algorithm for polynomials with an example.
(b) If $p(x)$ is divided by $g(x) = x - a$, what is the remainder? Prove.
(c) Use this to find remainder when $x^3 - 6x^2 + 11x - 6$ is divided by $x - 2$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Division Algorithm:**

**Statement:** For polynomials $p(x)$ and $g(x)$ ($g(x) \neq 0$), there exist unique polynomials $q(x)$ and $r(x)$ such that:
$$p(x) = g(x) \times q(x) + r(x)$$
where $r(x) = 0$ or deg($r$) < deg($g$).

**Proof:** By long division method (existence) and uniqueness follows from degree conditions.

**Example:** $p(x) = x^3 + 2x^2 - 5x - 6$, $g(x) = x + 1$

Result: $q(x) = x^2 + x - 6$, $r(x) = 0$

**(b) Remainder Theorem:**

When $p(x)$ is divided by $x - a$, remainder = $p(a)$

**Proof:** $p(x) = (x-a)q(x) + r$

Put $x = a$: $p(a) = 0 \times q(a) + r = r$

**(c) Finding remainder:**

$$p(2) = 8 - 24 + 22 - 6 = 0$$

**Answer:** Remainder = 0 (so $x - 2$ is a factor)
</details>

---

**Q61.** (a) Find the zeroes of $5x^2 - 8x - 4$ and verify the relationship with coefficients.
(b) Form a quadratic polynomial whose zeroes are reciprocals of the zeroes of given polynomial.
(c) Verify your answer.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding zeroes:**

$$5x^2 - 8x - 4 = 0$$
$$5x^2 - 10x + 2x - 4 = 0$$
$$5x(x - 2) + 2(x - 2) = 0$$
$$(5x + 2)(x - 2) = 0$$

**Zeroes:** $\alpha = -\frac{2}{5}$, $\beta = 2$

**Verification:**
- Sum: $-\frac{2}{5} + 2 = \frac{8}{5} = -\frac{-8}{5}$ ✓
- Product: $-\frac{2}{5} \times 2 = -\frac{4}{5} = \frac{-4}{5}$ ✓

**(b) New polynomial with reciprocal zeroes:**

New zeroes: $-\frac{5}{2}$ and $\frac{1}{2}$

- New sum: $-\frac{5}{2} + \frac{1}{2} = -2$
- New product: $-\frac{5}{2} \times \frac{1}{2} = -\frac{5}{4}$

**New polynomial:** $p(x) = x^2 + 2x - \frac{5}{4}$ or $4x^2 + 8x - 5$

**(c) Verification:**

Zeroes of $4x^2 + 8x - 5$:
$$x = \frac{-8 \pm \sqrt{64 + 80}}{8} = \frac{-8 \pm 12}{8} = -\frac{5}{2}, \frac{1}{2}$$ ✓
</details>

---

**Q62.** (a) Explain the types of polynomials based on degree with examples and graphs.
(b) Can a quadratic polynomial have both zeroes equal? Give condition and example.
(c) Draw the graph of $y = x^2 - 2x - 3$ and mark the zeroes.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Types based on degree:**

| Type | Degree | Example | Graph Shape |
|------|--------|---------|-------------|
| Constant | 0 | $y = 5$ | Horizontal line |
| Linear | 1 | $y = 2x + 1$ | Straight line |
| Quadratic | 2 | $y = x^2$ | Parabola |
| Cubic | 3 | $y = x^3$ | S-curve |

**(b) Equal zeroes condition:**

Yes, when discriminant $b^2 - 4ac = 0$

**Example:** $x^2 - 4x + 4 = (x - 2)^2$

Zeroes: $x = 2, 2$ (both equal)

**(c) Graph of $y = x^2 - 2x - 3$:**

**Zeroes:** $(x-3)(x+1) = 0 \Rightarrow x = 3, -1$

**Vertex:** $x = \frac{-b}{2a} = 1$, $y = 1 - 2 - 3 = -4$

```
    y
    |
    |           \
    |            \
----+-------------\---- x
   -1|            3
    |      *
    |    (1,-4)
```

**Zeroes marked at:** $(-1, 0)$ and $(3, 0)$
</details>

---

**Q63.** (a) If $\alpha$ and $\beta$ are zeroes of $ax^2 + bx + c$, find the value of:
(i) $\alpha^2 + \beta^2$ (ii) $\alpha^3 + \beta^3$ (iii) $\frac{1}{\alpha^2} + \frac{1}{\beta^2}$

(b) Apply to find these values for $2x^2 - 5x + 3$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) General formulas:**

Given: $\alpha + \beta = -\frac{b}{a}$, $\alpha\beta = \frac{c}{a}$

(i) $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = \frac{b^2}{a^2} - \frac{2c}{a} = \frac{b^2 - 2ac}{a^2}$

(ii) $\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta) = \frac{-b^3 + 3abc}{a^3}$

(iii) $\frac{1}{\alpha^2} + \frac{1}{\beta^2} = \frac{\alpha^2 + \beta^2}{(\alpha\beta)^2} = \frac{b^2 - 2ac}{c^2}$

**(b) For $2x^2 - 5x + 3$:**

$a = 2$, $b = -5$, $c = 3$

- $\alpha + \beta = \frac{5}{2}$
- $\alpha\beta = \frac{3}{2}$

(i) $\alpha^2 + \beta^2 = \left(\frac{5}{2}\right)^2 - 2\left(\frac{3}{2}\right) = \frac{25}{4} - 3 = \frac{13}{4}$

(ii) $\alpha^3 + \beta^3 = \left(\frac{5}{2}\right)^3 - 3\left(\frac{3}{2}\right)\left(\frac{5}{2}\right) = \frac{125}{8} - \frac{45}{4} = \frac{35}{8}$

(iii) $\frac{1}{\alpha^2} + \frac{1}{\beta^2} = \frac{13/4}{(3/2)^2} = \frac{13/4}{9/4} = \frac{13}{9}$
</details>

---

**Q64.** (a) Find all zeroes of $3x^4 + 6x^3 - 2x^2 - 10x - 5$ given that two zeroes are $\sqrt{\frac{5}{3}}$ and $-\sqrt{\frac{5}{3}}$.
(b) Verify the division algorithm for this case.
(c) What is the degree of the quotient obtained?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding all zeroes:**

Given zeroes: $\sqrt{\frac{5}{3}}$ and $-\sqrt{\frac{5}{3}}$

**Factor:** $\left(x - \sqrt{\frac{5}{3}}\right)\left(x + \sqrt{\frac{5}{3}}\right) = x^2 - \frac{5}{3}$

Multiply by 3: $3x^2 - 5$

**Division:**
$$(3x^4 + 6x^3 - 2x^2 - 10x - 5) \div (3x^2 - 5) = x^2 + 2x + 1 = (x + 1)^2$$

**All zeroes:** $\sqrt{\frac{5}{3}}$, $-\sqrt{\frac{5}{3}}$, $-1$, $-1$

**(b) Verification:**

$$(3x^2 - 5)(x^2 + 2x + 1) + 0 = 3x^4 + 6x^3 + 3x^2 - 5x^2 - 10x - 5 = 3x^4 + 6x^3 - 2x^2 - 10x - 5$$ ✓

**(c) Degree of quotient:**

Degree = 2 (= 4 - 2)
</details>

---

**Q65.** (a) Prove that a polynomial of degree n has at most n zeroes.
(b) Give examples of polynomials with:
(i) No zeroes (ii) One zero (iii) Two zeroes (iv) Three zeroes

(c) Can a polynomial have more zeroes than its degree? Justify.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

By Fundamental Theorem of Algebra, a polynomial of degree n can be factored as:
$$p(x) = a(x - r_1)(x - r_2)...(x - r_n)$$

where $r_1, r_2, ..., r_n$ are the zeroes (some may be repeated or complex).

Since there are exactly n linear factors, there can be at most n real zeroes.

**(b) Examples:**

(i) **No zeroes:** $x^2 + 1$ (always positive)

(ii) **One zero:** $x - 5$ (zero at x = 5) or $x^2$ (zero at x = 0, repeated)

(iii) **Two zeroes:** $x^2 - 5x + 6 = (x-2)(x-3)$ (zeroes at 2 and 3)

(iv) **Three zeroes:** $x^3 - 6x^2 + 11x - 6 = (x-1)(x-2)(x-3)$ (zeroes at 1, 2, 3)

**(c) More zeroes than degree?**

**No**, a polynomial cannot have more zeroes than its degree.

**Justification:** If a polynomial of degree n had (n+1) distinct zeroes, it would need (n+1) linear factors, making its degree at least (n+1), which is a contradiction.
</details>

---

## 6. Exam-Oriented Preparation

### 📝 Important Formulas & Theorems to Memorize

#### Types of Polynomials:

| Type | General Form | Degree |
|------|--------------|--------|
| Linear | $ax + b$ | 1 |
| Quadratic | $ax^2 + bx + c$ | 2 |
| Cubic | $ax^3 + bx^2 + cx + d$ | 3 |

#### Zeroes and Coefficients (Quadratic):

$$ \alpha + \beta = -\frac{b}{a} \quad \text{(Sum)} $$
$$ \alpha\beta = \frac{c}{a} \quad \text{(Product)} $$

#### Zeroes and Coefficients (Cubic):

$$ \alpha + \beta + \gamma = -\frac{b}{a} $$
$$ \alpha\beta + \beta\gamma + \gamma\alpha = \frac{c}{a} $$
$$ \alpha\beta\gamma = -\frac{d}{a} $$

#### Division Algorithm:

$$ p(x) = g(x) \times q(x) + r(x) $$

#### Forming Quadratic Polynomial:

$$ p(x) = x^2 - (\text{sum})x + (\text{product}) $$

---

### 🎯 Expected Question Patterns (CBSE Class 10)

#### 1 Mark Questions (MCQ/Very Short Answer):
- Identify degree and type of polynomial
- Find zero of linear polynomial
- Sum/product of zeroes from coefficients
- Identify polynomial graphs
- Remainder using Remainder Theorem

#### 2 Mark Questions (Short Answer):
- Verify zeroes and relationships
- Form quadratic polynomial from zeroes
- Simple polynomial division
- Find k given a factor

#### 3 Mark Questions (Long Answer):
- Find all zeroes given some zeroes
- Verify division algorithm
- Complex relationships between zeroes

#### 5 Mark Questions (Very Long Answer):
- Multi-part questions combining concepts
- Finding all zeroes of degree 4 polynomials
- Proofs with applications
- Graph-based problems with algebraic verification

---

### 💡 Exam Tips:

1. ✅ **Always arrange** polynomials in descending order before dividing
2. ✅ **Verify zeroes** by substituting back in original polynomial
3. ✅ **Check degree conditions** in division algorithm
4. ✅ **Use formulas** for sum and product of zeroes
5. ✅ **Draw neat graphs** with proper scales
6. ✅ **Mention all steps** in long division
7. ✅ **Verify answers** using relationships
8. ✅ **Write general form** before finding specific polynomials

---

### 🔴 Common Mistakes to Avoid:

| Mistake | Correction |
|---------|------------|
| Wrong sign in sum formula | Sum = $-\frac{b}{a}$ (don't forget negative) |
| Product = $-\frac{c}{a}$ | Product = $\frac{c}{a}$ (positive for quadratic) |
| Degree of remainder ≥ divisor | Degree of remainder must be < degree of divisor |
| Forgetting ± in square roots | Both $+\sqrt{3}$ and $-\sqrt{3}$ are zeroes |
| Incorrect factor from zeroes | Factor is $(x - \text{zero})$, not $(x + \text{zero})$ |

---

### 📚 Previous Year Questions (CBSE Pattern)

**Q1 (CBSE 2024):** Find the zeroes of $x^2 - 3x - 10$ and verify the relationship.

**Answer:** Zeroes: 5, -2. Sum = 3, Product = -10 ✓

---

**Q2 (CBSE 2023):** If one zero of $x^2 - 4x + k$ is 3, find k.

**Answer:** k = 3

---

**Q3 (CBSE 2023):** Divide $x^3 - 3x^2 + 5x - 3$ by $x^2 - 2$.

**Answer:** Quotient = $x - 3$, Remainder = $7x - 9$

---

**Q4 (CBSE 2022):** Find a quadratic polynomial with zeroes 2 and -5.

**Answer:** $x^2 + 3x - 10$

---

**Q5 (CBSE 2022):** If $\alpha, \beta$ are zeroes of $2x^2 - 7x + 3$, find $\frac{1}{\alpha} + \frac{1}{\beta}$.

**Answer:** $\frac{7}{3}$

---

**Q6 (CBSE 2021):** Obtain all zeroes of $x^4 - 5x^3 + 2x^2 + 8x - 8$ given two zeroes are 2 and -1.

**Answer:** All zeroes: 2, -1, 2, 2

---

**Q7 (CBSE 2021):** What must be added to $x^3 - 3x^2 + 6x - 15$ to make it divisible by $x - 3$?

**Answer:** -3

---

**Q8 (CBSE 2020):** Verify that 1, 2, 3 are zeroes of $x^3 - 6x^2 + 11x - 6$.

**Answer:** Verified by substitution and relationships

---

**Q9 (CBSE 2020):** Draw graph of $y = x^2 - 4$ and find zeroes.

**Answer:** Zeroes at x = -2, 2

---

**Q10 (CBSE 2019):** If sum of zeroes equals product, find k in $kx^2 - 2x + 3k$.

**Answer:** k = $\frac{2}{3}$

---

## 7. Revision Notes

### 📌 Quick Revision Sheet

#### Key Definitions:

| Term | Definition |
|------|------------|
| **Polynomial** | Expression with variables, coefficients, non-negative integer powers |
| **Degree** | Highest power of variable |
| **Zero** | Value of x for which p(x) = 0 |
| **Monomial** | One term |
| **Binomial** | Two terms |
| **Trinomial** | Three terms |

---

#### Important Formulas:

**Quadratic $ax^2 + bx + c$:**
- Sum of zeroes: $-\frac{b}{a}$
- Product of zeroes: $\frac{c}{a}$
- Polynomial: $x^2 - (\text{sum})x + (\text{product})$

**Cubic $ax^3 + bx^2 + cx + d$:**
- Sum: $-\frac{b}{a}$
- Sum of products: $\frac{c}{a}$
- Product: $-\frac{d}{a}$

**Division Algorithm:**
$$p(x) = g(x) \times q(x) + r(x)$$

---

#### Maximum Number of Zeroes:

| Degree | Type | Maximum Zeroes |
|--------|------|----------------|
| 1 | Linear | 1 |
| 2 | Quadratic | 2 |
| 3 | Cubic | 3 |
| n | General | n |

---

#### Graph Shapes:

```
Linear: Straight line      Quadratic: Parabola      Cubic: S-curve
     /                            \                      /
    /                              \                    /
---/---                        -----\/----          ---/\/---
```

---

#### Common Identities:

- $(a + b)^2 = a^2 + 2ab + b^2$
- $(a - b)^2 = a^2 - 2ab + b^2$
- $a^2 - b^2 = (a + b)(a - b)$
- $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$
- $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$
- $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$

---

### 🎓 Final Checklist Before Exam:

- [ ] I can identify degree and type of any polynomial
- [ ] I can find zeroes of linear and quadratic polynomials
- [ ] I know the relationship between zeroes and coefficients
- [ ] I can form polynomial from given zeroes
- [ ] I can perform polynomial long division
- [ ] I can verify division algorithm
- [ ] I can find all zeroes given some zeroes
- [ ] I understand geometrical meaning of zeroes
- [ ] I can draw graphs of linear and quadratic polynomials
- [ ] I have practiced all 30 MCQs
- [ ] I have practiced all 20 Short Answer questions
- [ ] I have practiced all 15 Long Answer questions

---

### 📊 Quick Formula Sheet:

**Zero of Linear Polynomial:**
$$ ax + b = 0 \Rightarrow x = -\frac{b}{a} $$

**Quadratic Zeroes Relationships:**
$$ \alpha + \beta = -\frac{b}{a}, \quad \alpha\beta = \frac{c}{a} $$

**Cubic Zeroes Relationships:**
$$ \alpha + \beta + \gamma = -\frac{b}{a} $$
$$ \alpha\beta + \beta\gamma + \gamma\alpha = \frac{c}{a} $$
$$ \alpha\beta\gamma = -\frac{d}{a} $$

**Forming Quadratic:**
$$ p(x) = x^2 - (\text{sum})x + (\text{product}) $$

**Division Algorithm:**
$$ p(x) = g(x) \times q(x) + r(x) $$

**Remainder Theorem:**
$$ \text{Remainder when divided by } (x-a) = p(a) $$

---

**Good luck with your studies! 🌟**

> Remember: Practice polynomial division and zeroes relationships daily to master this chapter!

---

**End of Learning Path - Polynomials**
