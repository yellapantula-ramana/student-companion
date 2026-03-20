# Quadratic Equations - Learning Path

## 1. Concept Introduction

### What is a Quadratic Equation?

A **quadratic equation** is an equation of the form:

$$ ax^2 + bx + c = 0 $$

where **a**, **b**, and **c** are real numbers, and **a ≠ 0**.

**Everyday Examples:**
- 🏗️ Architecture: Designing parabolic arches and bridges
- 🎯 Sports: Trajectory of a ball thrown in the air
- 💰 Business: Profit maximization problems
- 🚀 Physics: Projectile motion calculations
- 📐 Geometry: Area problems involving squares

### Understanding Quadratic Equations:

```
QUADRATIC EQUATION: 2x² + 5x - 3 = 0
                    │   │    │   │
                    │   │    │   └── Constant term (-3)
                    │   │    └────── Coefficient of x (5)
                    │   └─────────── Coefficient of x² (2)
                    └─────────────── Degree = 2 (quadratic)
```

**Key Components:**

| Term | Meaning | Example |
|------|---------|---------|
| **Quadratic** | Polynomial of degree 2 | $ax^2 + bx + c$ |
| **Coefficient a** | Coefficient of $x^2$ (a ≠ 0) | In $2x^2$, a = 2 |
| **Coefficient b** | Coefficient of x | In $5x$, b = 5 |
| **Constant c** | Term without variable | -3, 7, 0 |
| **Root/Zero** | Value of x satisfying equation | x = 1, -3 |
| **Discriminant** | $D = b^2 - 4ac$ | Determines nature of roots |

---

## 2. Micro-topic Breakdown

This chapter is divided into the following key concepts:

```
Quadratic Equations
├── 4.1 Introduction to Quadratic Equations
│   ├── Standard form: ax² + bx + c = 0
│   ├── Identifying quadratic equations
│   └── Real-life applications
├── 4.2 Solution of Quadratic Equations
│   ├── By factorization
│   ├── By completing the square
│   └── By quadratic formula
├── 4.3 Nature of Roots
│   ├── Discriminant (D = b² - 4ac)
│   ├── Real and distinct roots
│   ├── Real and equal roots
│   └── No real roots (complex)
└── 4.4 Applications
    ├── Word problems
    ├── Geometry problems
    └── Physics applications
```

---

## 3. Concept Explanations

### 3.1 Introduction to Quadratic Equations

A quadratic equation in standard form is:

$$ ax^2 + bx + c = 0 \quad \text{where } a \neq 0 $$

#### Examples of Quadratic Equations:

| Equation | Standard Form | a | b | c |
|----------|--------------|---|---|---|
| $x^2 + 5x + 6 = 0$ | $x^2 + 5x + 6 = 0$ | 1 | 5 | 6 |
| $2x^2 - 3x = 5$ | $2x^2 - 3x - 5 = 0$ | 2 | -3 | -5 |
| $x^2 = 16$ | $x^2 - 16 = 0$ | 1 | 0 | -16 |
| $3x^2 - 7x = 0$ | $3x^2 - 7x + 0 = 0$ | 3 | -7 | 0 |

#### What is NOT a Quadratic Equation:

| Equation | Reason |
|----------|--------|
| $x^3 + 2x + 1 = 0$ | Degree is 3 (cubic) |
| $x + 5 = 0$ | Degree is 1 (linear) |
| $\sqrt{x} + 2x = 3$ | Contains $\sqrt{x}$ (not polynomial) |

---

### 3.2 Solution of Quadratic Equations

A **root** (or solution) of a quadratic equation is a value of x that satisfies the equation.

#### Method 1: By Factorization

**Steps:**
1. Write equation in standard form
2. Split the middle term to factorize
3. Express as product of two linear factors
4. Set each factor to zero and solve

**Example:** Solve $x^2 - 5x + 6 = 0$

| Step | Action | Working |
|------|--------|---------|
| 1 | Find two numbers | Product = 6, Sum = -5 |
| 2 | Numbers are | -2 and -3 |
| 3 | Split middle term | $x^2 - 2x - 3x + 6 = 0$ |
| 4 | Factor by grouping | $x(x - 2) - 3(x - 2) = 0$ |
| 5 | Take common factor | $(x - 2)(x - 3) = 0$ |
| 6 | Solve | $x = 2$ or $x = 3$ |

**Roots:** $x = 2, 3$

---

#### Method 2: By Completing the Square

**Steps:**
1. Divide by a (if a ≠ 1)
2. Move constant to RHS
3. Add $(\frac{b}{2a})^2$ to both sides
4. Write LHS as perfect square
5. Take square root and solve

**Example:** Solve $x^2 + 6x + 5 = 0$

| Step | Action | Working |
|------|--------|---------|
| 1 | Move constant | $x^2 + 6x = -5$ |
| 2 | Add $(\frac{6}{2})^2 = 9$ | $x^2 + 6x + 9 = -5 + 9$ |
| 3 | Perfect square | $(x + 3)^2 = 4$ |
| 4 | Take square root | $x + 3 = \pm 2$ |
| 5 | Solve | $x = -3 + 2 = -1$ or $x = -3 - 2 = -5$ |

**Roots:** $x = -1, -5$

---

#### Method 3: By Quadratic Formula

For $ax^2 + bx + c = 0$, the roots are given by:

$$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

**Example:** Solve $2x^2 - 7x + 3 = 0$

Here: $a = 2$, $b = -7$, $c = 3$

$$ x = \frac{-(-7) \pm \sqrt{(-7)^2 - 4(2)(3)}}{2(2)} $$

$$ x = \frac{7 \pm \sqrt{49 - 24}}{4} = \frac{7 \pm \sqrt{25}}{4} = \frac{7 \pm 5}{4} $$

$$ x = \frac{7 + 5}{4} = 3 \quad \text{or} \quad x = \frac{7 - 5}{4} = \frac{1}{2} $$

**Roots:** $x = 3, \frac{1}{2}$

---

### 3.3 Nature of Roots

The **discriminant** $D = b^2 - 4ac$ determines the nature of roots:

#### Visual Representation:

```
D > 0 (Two distinct real roots)
    y
    |
    |     /\
    |    /  \
    |   /    \
----+--/------\---- x
   / |        \
  /  |         \
 x₁  |         x₂
     |
Two intersection points with x-axis

D = 0 (Two equal real roots)
    y
    |
    |      _
    |     / \
    |    /   \
----+---/-----\---- x
       \     /
        \___/
          |
         x₁=x₂
One intersection point (touches x-axis)

D < 0 (No real roots)
    y
    |
    |    ___
    |   /   \
    |  /     \
----+---------\---- x
    |          \
    |           \
    |
No intersection with x-axis
```

#### Conditions:

| Discriminant | Nature of Roots | Graph |
|--------------|-----------------|-------|
| $D > 0$ | Two distinct real roots | Intersects x-axis at 2 points |
| $D = 0$ | Two equal real roots | Touches x-axis at 1 point |
| $D < 0$ | No real roots (complex) | Does not intersect x-axis |

#### Examples:

| Equation | a | b | c | D = b² - 4ac | Nature |
|----------|---|---|---|--------------|--------|
| $x^2 - 5x + 6 = 0$ | 1 | -5 | 6 | 25 - 24 = 1 > 0 | Two distinct real |
| $x^2 - 4x + 4 = 0$ | 1 | -4 | 4 | 16 - 16 = 0 | Two equal real |
| $x^2 + x + 1 = 0$ | 1 | 1 | 1 | 1 - 4 = -3 < 0 | No real roots |

---

### 3.4 Relationship Between Roots and Coefficients

For $ax^2 + bx + c = 0$ with roots $\alpha$ and $\beta$:

$$ \alpha + \beta = -\frac{b}{a} \quad \text{(Sum of roots)} $$
$$ \alpha\beta = \frac{c}{a} \quad \text{(Product of roots)} $$

**Example:** For $x^2 - 5x + 6 = 0$:
- Roots: $\alpha = 2$, $\beta = 3$
- Sum: $2 + 3 = 5 = -\frac{-5}{1}$ ✓
- Product: $2 \times 3 = 6 = \frac{6}{1}$ ✓

---

## 4. Guided Examples

### Example 1: Identifying Quadratic Equations

**Question:** Check whether the following are quadratic equations:
(i) $(x + 1)^2 = 2(x - 3)$
(ii) $x^2 - 2x = (-2)(3 - x)$
(iii) $(x - 2)(x + 1) = (x - 1)(x + 3)$

**Step-by-Step Solution:**

**(i)** $(x + 1)^2 = 2(x - 3)$
$$x^2 + 2x + 1 = 2x - 6$$
$$x^2 + 2x + 1 - 2x + 6 = 0$$
$$x^2 + 7 = 0$$

This is of the form $ax^2 + bx + c = 0$ where $a = 1, b = 0, c = 7$.

**Answer:** ✅ Yes, it is a quadratic equation.

**(ii)** $x^2 - 2x = (-2)(3 - x)$
$$x^2 - 2x = -6 + 2x$$
$$x^2 - 4x + 6 = 0$$

This is of the form $ax^2 + bx + c = 0$.

**Answer:** ✅ Yes, it is a quadratic equation.

**(iii)** $(x - 2)(x + 1) = (x - 1)(x + 3)$
$$x^2 - x - 2 = x^2 + 2x - 3$$
$$x^2 - x - 2 - x^2 - 2x + 3 = 0$$
$$-3x + 1 = 0$$

This is of degree 1 (linear), not degree 2.

**Answer:** ❌ No, it is NOT a quadratic equation.

---

### Example 2: Solving by Factorization

**Question:** Solve $2x^2 - 5x + 3 = 0$ by factorization.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Find two numbers | Product = $2 \times 3 = 6$, Sum = -5 |
| 2 | Numbers are | -2 and -3 |
| 3 | Split middle term | $2x^2 - 2x - 3x + 3 = 0$ |
| 4 | Factor by grouping | $2x(x - 1) - 3(x - 1) = 0$ |
| 5 | Take common factor | $(2x - 3)(x - 1) = 0$ |
| 6 | Solve | $x = \frac{3}{2}$ or $x = 1$ |

**Final Answer:** $x = \frac{3}{2}, 1$

---

### Example 3: Solving by Completing the Square

**Question:** Solve $x^2 + 4x - 5 = 0$ by completing the square.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Move constant | $x^2 + 4x = 5$ |
| 2 | Add $(\frac{4}{2})^2 = 4$ | $x^2 + 4x + 4 = 5 + 4$ |
| 3 | Perfect square | $(x + 2)^2 = 9$ |
| 4 | Take square root | $x + 2 = \pm 3$ |
| 5 | Solve | $x = -2 + 3 = 1$ or $x = -2 - 3 = -5$ |

**Final Answer:** $x = 1, -5$

---

### Example 4: Solving by Quadratic Formula

**Question:** Solve $3x^2 - 2x + 1 = 0$ using the quadratic formula.

**Step-by-Step Solution:**

Here: $a = 3$, $b = -2$, $c = 1$

**Discriminant:**
$$D = b^2 - 4ac = (-2)^2 - 4(3)(1) = 4 - 12 = -8$$

Since $D < 0$, the equation has **no real roots** (complex roots).

**Using formula:**
$$x = \frac{-(-2) \pm \sqrt{-8}}{2(3)} = \frac{2 \pm 2i\sqrt{2}}{6} = \frac{1 \pm i\sqrt{2}}{3}$$

**Final Answer:** No real roots (Complex roots: $\frac{1 \pm i\sqrt{2}}{3}$)

---

### Example 5: Finding Nature of Roots

**Question:** Find the nature of roots of $4x^2 - 12x + 9 = 0$.

**Step-by-Step Solution:**

Here: $a = 4$, $b = -12$, $c = 9$

**Discriminant:**
$$D = b^2 - 4ac = (-12)^2 - 4(4)(9) = 144 - 144 = 0$$

Since $D = 0$, the equation has **two equal real roots**.

**Finding roots:**
$$x = \frac{-b}{2a} = \frac{12}{8} = \frac{3}{2}$$

**Final Answer:** Two equal real roots: $x = \frac{3}{2}, \frac{3}{2}$

---

### Example 6: Word Problem

**Question:** The area of a rectangular plot is 528 m². The length of the plot is 1 more than twice its breadth. Find the length and breadth.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Define variables | Let breadth = $x$ m |
| 2 | Express length | Length = $(2x + 1)$ m |
| 3 | Form equation | Area = Length × Breadth |
| | | $x(2x + 1) = 528$ |
| 4 | Simplify | $2x^2 + x - 528 = 0$ |
| 5 | Solve by formula | $a = 2, b = 1, c = -528$ |
| | | $D = 1 + 4224 = 4225 = 65^2$ |
| | | $x = \frac{-1 \pm 65}{4}$ |
| 6 | Select positive value | $x = \frac{64}{4} = 16$ (breadth can't be negative) |
| 7 | Find length | Length = $2(16) + 1 = 33$ m |

**Final Answer:** Breadth = **16 m**, Length = **33 m**

---

## 5. Practice Questions

### SECTION A: Multiple Choice Questions (30 Questions - 1 Mark Each)

**Q1.** Which of the following is a quadratic equation?
- (A) $x + 5 = 0$
- (B) $x^2 + 3x + 2 = 0$
- (C) $x^3 - 2x + 1 = 0$
- (D) $2x - 3 = 0$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $x^2 + 3x + 2 = 0$

**Explanation:** A quadratic equation has degree 2 (highest power of x is 2).
</details>

---

**Q2.** The roots of $x^2 - 4 = 0$ are:
- (A) 2, -2
- (B) 4, -4
- (C) 2, 2
- (D) 0, 4

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 2, -2

**Explanation:** $x^2 = 4 \Rightarrow x = \pm 2$
</details>

---

**Q3.** The discriminant of $x^2 + 4x + 4 = 0$ is:
- (A) 0
- (B) 4
- (C) 8
- (D) 16

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 0

**Explanation:** $D = b^2 - 4ac = 16 - 16 = 0$
</details>

---

**Q4.** If the discriminant is positive, the roots are:
- (A) Real and equal
- (B) Real and distinct
- (C) Complex
- (D) No roots

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Real and distinct

**Explanation:** D > 0 gives two distinct real roots.
</details>

---

**Q5.** The quadratic formula is:
- (A) $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
- (B) $x = \frac{b \pm \sqrt{b^2 - 4ac}}{2a}$
- (C) $x = \frac{-b \pm \sqrt{b^2 + 4ac}}{2a}$
- (D) $x = \frac{-b \pm \sqrt{4ac - b^2}}{2a}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

**Explanation:** This is the standard quadratic formula.
</details>

---

**Q6.** The roots of $x^2 - 5x + 6 = 0$ are:
- (A) 2, 3
- (B) -2, -3
- (C) 1, 6
- (D) -1, -6

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 2, 3

**Explanation:** $(x-2)(x-3) = 0 \Rightarrow x = 2, 3$
</details>

---

**Q7.** For what value of k does $x^2 + kx + 9 = 0$ have equal roots?
- (A) ±3
- (B) ±6
- (C) ±9
- (D) ±12

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) ±6

**Explanation:** For equal roots, D = 0. $k^2 - 36 = 0 \Rightarrow k = \pm 6$
</details>

---

**Q8.** The sum of roots of $2x^2 - 8x + 3 = 0$ is:
- (A) 4
- (B) -4
- (C) 8
- (D) -8

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 4

**Explanation:** Sum = $-\frac{b}{a} = -\frac{-8}{2} = 4$
</details>

---

**Q9.** The product of roots of $x^2 - 7x + 12 = 0$ is:
- (A) 7
- (B) -7
- (C) 12
- (D) -12

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 12

**Explanation:** Product = $\frac{c}{a} = \frac{12}{1} = 12$
</details>

---

**Q10.** The nature of roots of $x^2 + x + 1 = 0$ is:
- (A) Real and distinct
- (B) Real and equal
- (C) No real roots
- (D) Rational

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) No real roots

**Explanation:** $D = 1 - 4 = -3 < 0$
</details>

---

**Q11.** Which method is used to solve $x^2 = 25$?
- (A) Factorization
- (B) Completing square
- (C) Direct square root
- (D) Quadratic formula

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Direct square root

**Explanation:** $x = \pm 5$ directly by taking square root.
</details>

---

**Q12.** The roots of $x^2 - 6x + 9 = 0$ are:
- (A) 3, -3
- (B) 3, 3
- (C) -3, -3
- (D) 6, 0

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 3, 3

**Explanation:** $(x-3)^2 = 0 \Rightarrow x = 3, 3$ (equal roots)
</details>

---

**Q13.** If one root of $x^2 - 5x + k = 0$ is 2, then k = ?
- (A) 6
- (B) -6
- (C) 10
- (D) -10

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 6

**Explanation:** Substitute x = 2: $4 - 10 + k = 0 \Rightarrow k = 6$
</details>

---

**Q14.** The equation $x^2 + 0x + 0 = 0$ has roots:
- (A) 0, 0
- (B) 1, 0
- (C) 0, -1
- (D) 1, 1

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 0, 0

**Explanation:** $x^2 = 0 \Rightarrow x = 0, 0$
</details>

---

**Q15.** For $ax^2 + bx + c = 0$, if $b^2 - 4ac < 0$, the roots are:
- (A) Real
- (B) Rational
- (C) Complex
- (D) Integer

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Complex

**Explanation:** Negative discriminant gives complex (imaginary) roots.
</details>

---

**Q16.** The roots of $x^2 - 3x - 10 = 0$ are:
- (A) 5, -2
- (B) -5, 2
- (C) 5, 2
- (D) -5, -2

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 5, -2

**Explanation:** $(x-5)(x+2) = 0 \Rightarrow x = 5, -2$
</details>

---

**Q17.** To complete the square for $x^2 + 8x$, we add:
- (A) 4
- (B) 8
- (C) 16
- (D) 64

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 16

**Explanation:** Add $(\frac{8}{2})^2 = 16$
</details>

---

**Q18.** The equation $2x^2 - 4x + 3 = 0$ has:
- (A) Two real roots
- (B) One real root
- (C) No real roots
- (D) Infinite roots

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) No real roots

**Explanation:** $D = 16 - 24 = -8 < 0$
</details>

---

**Q19.** If roots are 3 and -4, the quadratic equation is:
- (A) $x^2 + x - 12 = 0$
- (B) $x^2 - x - 12 = 0$
- (C) $x^2 + x + 12 = 0$
- (D) $x^2 - x + 12 = 0$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $x^2 + x - 12 = 0$

**Explanation:** Sum = -1, Product = -12. Equation: $x^2 - (-1)x + (-12) = 0$
</details>

---

**Q20.** The value of x in $x^2 - 16 = 0$ is:
- (A) 4
- (B) -4
- (C) ±4
- (D) 16

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) ±4

**Explanation:** $x^2 = 16 \Rightarrow x = \pm 4$
</details>

---

**Q21.** The discriminant of $3x^2 - 2x + 1 = 0$ is:
- (A) 8
- (B) -8
- (C) 16
- (D) -16

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) -8

**Explanation:** $D = 4 - 12 = -8$
</details>

---

**Q22.** Which of the following has real and equal roots?
- (A) $x^2 - 4x + 4 = 0$
- (B) $x^2 - 5x + 6 = 0$
- (C) $x^2 + x + 1 = 0$
- (D) $x^2 - 9 = 0$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $x^2 - 4x + 4 = 0$

**Explanation:** $D = 16 - 16 = 0$ (equal roots)
</details>

---

**Q23.** The sum of roots of $x^2 + 7x + 12 = 0$ is:
- (A) 7
- (B) -7
- (C) 12
- (D) -12

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) -7

**Explanation:** Sum = $-\frac{b}{a} = -\frac{7}{1} = -7$
</details>

---

**Q24.** The roots of $x^2 + 5x = 0$ are:
- (A) 0, 5
- (B) 0, -5
- (C) 5, -5
- (D) 1, 5

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 0, -5

**Explanation:** $x(x + 5) = 0 \Rightarrow x = 0, -5$
</details>

---

**Q25.** For equal roots, the condition is:
- (A) $b^2 - 4ac > 0$
- (B) $b^2 - 4ac = 0$
- (C) $b^2 - 4ac < 0$
- (D) $b^2 - 4ac \geq 0$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $b^2 - 4ac = 0$

**Explanation:** Equal roots occur when discriminant is zero.
</details>

---

**Q26.** The equation $x^2 + 2x + 5 = 0$ has:
- (A) Real roots
- (B) Rational roots
- (C) Complex roots
- (D) Integer roots

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Complex roots

**Explanation:** $D = 4 - 20 = -16 < 0$
</details>

---

**Q27.** If the product of roots is -15 and sum is 2, the equation is:
- (A) $x^2 - 2x - 15 = 0$
- (B) $x^2 + 2x - 15 = 0$
- (C) $x^2 - 2x + 15 = 0$
- (D) $x^2 + 2x + 15 = 0$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $x^2 - 2x - 15 = 0$

**Explanation:** $x^2 - (\text{sum})x + (\text{product}) = 0$
</details>

---

**Q28.** The roots of $4x^2 - 1 = 0$ are:
- (A) $\frac{1}{2}, -\frac{1}{2}$
- (B) $\frac{1}{4}, -\frac{1}{4}$
- (C) 1, -1
- (D) 2, -2

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $\frac{1}{2}, -\frac{1}{2}$

**Explanation:** $x^2 = \frac{1}{4} \Rightarrow x = \pm \frac{1}{2}$
</details>

---

**Q29.** The quadratic equation with roots 0 and 1 is:
- (A) $x^2 - x = 0$
- (B) $x^2 + x = 0$
- (C) $x^2 - 1 = 0$
- (D) $x^2 + 1 = 0$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $x^2 - x = 0$

**Explanation:** Sum = 1, Product = 0. Equation: $x^2 - x = 0$
</details>

---

**Q30.** The maximum number of roots a quadratic equation can have is:
- (A) 1
- (B) 2
- (C) 3
- (D) Infinite

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 2

**Explanation:** A quadratic equation has at most 2 roots.
</details>

---

### SECTION B: Short Answer Questions (20 Questions - 2-3 Marks Each)

**Q31.** Check whether $(x + 1)^2 = 2(x - 3)$ is a quadratic equation.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Expanding LHS:
$$(x + 1)^2 = x^2 + 2x + 1$$

Equation becomes:
$$x^2 + 2x + 1 = 2x - 6$$
$$x^2 + 2x + 1 - 2x + 6 = 0$$
$$x^2 + 7 = 0$$

This is of the form $ax^2 + bx + c = 0$ where $a = 1, b = 0, c = 7$.

**Answer:** Yes, it is a quadratic equation.
</details>

---

**Q32.** Find the roots of $x^2 - 3x - 10 = 0$ by factorization.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

$$x^2 - 3x - 10 = 0$$

Finding two numbers: Product = -10, Sum = -3
Numbers are -5 and 2

$$x^2 - 5x + 2x - 10 = 0$$
$$x(x - 5) + 2(x - 5) = 0$$
$$(x + 2)(x - 5) = 0$$

$$x = -2 \text{ or } x = 5$$

**Answer:** $x = -2, 5$
</details>

---

**Q33.** Solve by completing the square: $x^2 + 6x + 5 = 0$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

$$x^2 + 6x = -5$$

Add $(\frac{6}{2})^2 = 9$ to both sides:
$$x^2 + 6x + 9 = -5 + 9$$
$$(x + 3)^2 = 4$$

Taking square root:
$$x + 3 = \pm 2$$

$$x = -3 + 2 = -1 \text{ or } x = -3 - 2 = -5$$

**Answer:** $x = -1, -5$
</details>

---

**Q34.** Find the discriminant and nature of roots of $2x^2 - 4x + 3 = 0$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Here: $a = 2$, $b = -4$, $c = 3$

**Discriminant:**
$$D = b^2 - 4ac = (-4)^2 - 4(2)(3) = 16 - 24 = -8$$

Since $D < 0$, the equation has **no real roots** (complex roots).

**Answer:** $D = -8$, No real roots
</details>

---

**Q35.** Find the value of k for which $kx^2 - 4x + 2 = 0$ has equal roots.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

For equal roots, $D = 0$

$$D = b^2 - 4ac = (-4)^2 - 4(k)(2) = 0$$
$$16 - 8k = 0$$
$$8k = 16$$
$$k = 2$$

**Answer:** $k = 2$
</details>

---

**Q36.** Solve using quadratic formula: $2x^2 + x - 6 = 0$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Here: $a = 2$, $b = 1$, $c = -6$

**Discriminant:**
$$D = 1^2 - 4(2)(-6) = 1 + 48 = 49$$

**Using formula:**
$$x = \frac{-1 \pm \sqrt{49}}{2(2)} = \frac{-1 \pm 7}{4}$$

$$x = \frac{-1 + 7}{4} = \frac{6}{4} = \frac{3}{2} \text{ or } x = \frac{-1 - 7}{4} = -2$$

**Answer:** $x = \frac{3}{2}, -2$
</details>

---

**Q37.** Find the sum and product of roots of $3x^2 - 5x + 2 = 0$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Here: $a = 3$, $b = -5$, $c = 2$

**Sum of roots:**
$$\alpha + \beta = -\frac{b}{a} = -\frac{-5}{3} = \frac{5}{3}$$

**Product of roots:**
$$\alpha\beta = \frac{c}{a} = \frac{2}{3}$$

**Answer:** Sum = $\frac{5}{3}$, Product = $\frac{2}{3}$
</details>

---

**Q38.** Determine whether $x^2 - 6x + 9 = 0$ has real and equal roots.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Here: $a = 1$, $b = -6$, $c = 9$

**Discriminant:**
$$D = (-6)^2 - 4(1)(9) = 36 - 36 = 0$$

Since $D = 0$, the equation has **real and equal roots**.

**Root:** $x = \frac{-b}{2a} = \frac{6}{2} = 3$

**Answer:** Yes, real and equal roots: $x = 3, 3$
</details>

---

**Q39.** Find a quadratic equation whose roots are 2 and -3.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Sum of roots:** $2 + (-3) = -1$

**Product of roots:** $2 \times (-3) = -6$

**Equation:**
$$x^2 - (\text{sum})x + (\text{product}) = 0$$
$$x^2 - (-1)x + (-6) = 0$$
$$x^2 + x - 6 = 0$$

**Answer:** $x^2 + x - 6 = 0$
</details>

---

**Q40.** Solve: $x^2 - 45 = 0$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

$$x^2 = 45$$
$$x = \pm \sqrt{45} = \pm \sqrt{9 \times 5} = \pm 3\sqrt{5}$$

**Answer:** $x = 3\sqrt{5}, -3\sqrt{5}$
</details>

---

**Q41.** The sum of two numbers is 15 and their product is 56. Find the numbers by forming a quadratic equation.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let the numbers be $x$ and $y$.

$$x + y = 15$$ ... (i)
$$xy = 56$$ ... (ii)

**Quadratic equation:**
$$t^2 - 15t + 56 = 0$$

$$(t - 7)(t - 8) = 0$$

$$t = 7 \text{ or } t = 8$$

**Answer:** The numbers are 7 and 8.
</details>

---

**Q42.** Find the value of p for which $px^2 - 2\sqrt{5}px + 15 = 0$ has equal roots.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

For equal roots, $D = 0$

$$D = (-2\sqrt{5}p)^2 - 4(p)(15) = 0$$
$$20p^2 - 60p = 0$$
$$20p(p - 3) = 0$$

$$p = 0 \text{ or } p = 3$$

Since $p \neq 0$ (for quadratic), $p = 3$.

**Answer:** $p = 3$
</details>

---

**Q43.** Solve: $x^2 - (\sqrt{3} + 1)x + \sqrt{3} = 0$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

$$x^2 - \sqrt{3}x - x + \sqrt{3} = 0$$
$$x(x - \sqrt{3}) - 1(x - \sqrt{3}) = 0$$
$$(x - 1)(x - \sqrt{3}) = 0$$

$$x = 1 \text{ or } x = \sqrt{3}$$

**Answer:** $x = 1, \sqrt{3}$
</details>

---

**Q44.** A natural number when increased by 12 equals 160 times its reciprocal. Find the number.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let the number be $x$.

$$x + 12 = \frac{160}{x}$$
$$x^2 + 12x = 160$$
$$x^2 + 12x - 160 = 0$$

$$(x + 20)(x - 8) = 0$$

$$x = -20 \text{ or } x = 8$$

Since x is a natural number, $x = 8$.

**Answer:** The number is 8.
</details>

---

**Q45.** Find the roots of $\frac{1}{x+4} - \frac{1}{x-7} = \frac{11}{30}$, $x \neq -4, 7$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

$$\frac{(x-7) - (x+4)}{(x+4)(x-7)} = \frac{11}{30}$$
$$\frac{-11}{x^2 - 3x - 28} = \frac{11}{30}$$

$$-11 \times 30 = 11(x^2 - 3x - 28)$$
$$-30 = x^2 - 3x - 28$$
$$x^2 - 3x + 2 = 0$$

$$(x - 1)(x - 2) = 0$$

$$x = 1 \text{ or } x = 2$$

**Answer:** $x = 1, 2$
</details>

---

**Q46.** The altitude of a right triangle is 7 cm less than its base. If the hypotenuse is 13 cm, find the other two sides.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let base = $x$ cm, then altitude = $(x - 7)$ cm

By Pythagoras theorem:
$$x^2 + (x - 7)^2 = 13^2$$
$$x^2 + x^2 - 14x + 49 = 169$$
$$2x^2 - 14x - 120 = 0$$
$$x^2 - 7x - 60 = 0$$

$$(x - 12)(x + 5) = 0$$

$$x = 12 \text{ (side can't be negative)}$$

Base = 12 cm, Altitude = 5 cm

**Answer:** Base = 12 cm, Altitude = 5 cm
</details>

---

**Q47.** Solve: $4x^2 + 4\sqrt{3}x + 3 = 0$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Here: $a = 4$, $b = 4\sqrt{3}$, $c = 3$

**Discriminant:**
$$D = (4\sqrt{3})^2 - 4(4)(3) = 48 - 48 = 0$$

Since $D = 0$, roots are equal.

$$x = \frac{-b}{2a} = \frac{-4\sqrt{3}}{8} = -\frac{\sqrt{3}}{2}$$

**Answer:** $x = -\frac{\sqrt{3}}{2}, -\frac{\sqrt{3}}{2}$
</details>

---

**Q48.** Is it possible to design a rectangular park of perimeter 80 m and area 400 m²? If so, find its length and breadth.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let length = $x$ m, breadth = $y$ m

$$2(x + y) = 80 \Rightarrow x + y = 40$$ ... (i)
$$xy = 400$$ ... (ii)

From (i): $y = 40 - x$

Substitute in (ii):
$$x(40 - x) = 400$$
$$40x - x^2 = 400$$
$$x^2 - 40x + 400 = 0$$
$$(x - 20)^2 = 0$$

$$x = 20$$

Then $y = 20$

**Answer:** Yes, possible. Length = 20 m, Breadth = 20 m (square park)
</details>

---

**Q49.** Find the consecutive positive integers whose sum of squares is 365.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let the integers be $x$ and $(x + 1)$.

$$x^2 + (x + 1)^2 = 365$$
$$x^2 + x^2 + 2x + 1 = 365$$
$$2x^2 + 2x - 364 = 0$$
$$x^2 + x - 182 = 0$$

$$(x + 14)(x - 13) = 0$$

$$x = 13 \text{ (positive integer)}$$

The integers are 13 and 14.

**Answer:** 13 and 14
</details>

---

**Q50.** If the roots of $ax^2 + bx + c = 0$ are equal, prove that $b^2 = 4ac$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Proof:**

For equal roots, the discriminant must be zero.

$$D = b^2 - 4ac = 0$$

Therefore:
$$b^2 = 4ac$$

**Hence Proved.**

Alternatively, using quadratic formula:
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

For equal roots, $\sqrt{b^2 - 4ac} = 0$

$$b^2 - 4ac = 0$$
$$b^2 = 4ac$$ ✓
</details>

---

### SECTION C: Long Answer Questions (15 Questions - 5 Marks Each)

**Q51.** (a) Explain the three methods of solving quadratic equations with examples.
(b) Solve $x^2 - 8x + 15 = 0$ by all three methods.
(c) Verify that all methods give the same roots.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Three Methods:**

**1. Factorization Method:**
- Split middle term and factorize
- Set each factor to zero

**2. Completing the Square:**
- Add $(\frac{b}{2})^2$ to both sides
- Write as perfect square and solve

**3. Quadratic Formula:**
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**(b) Solving $x^2 - 8x + 15 = 0$:**

**Method 1 - Factorization:**
$$x^2 - 3x - 5x + 15 = 0$$
$$x(x - 3) - 5(x - 3) = 0$$
$$(x - 3)(x - 5) = 0$$
$$x = 3, 5$$

**Method 2 - Completing Square:**
$$x^2 - 8x = -15$$
$$x^2 - 8x + 16 = -15 + 16$$
$$(x - 4)^2 = 1$$
$$x - 4 = \pm 1$$
$$x = 3, 5$$

**Method 3 - Quadratic Formula:**
$a = 1, b = -8, c = 15$
$$x = \frac{8 \pm \sqrt{64 - 60}}{2} = \frac{8 \pm 2}{2}$$
$$x = 3, 5$$

**(c) Verification:** All three methods give $x = 3, 5$ ✓

**Answer:** Roots are $x = 3, 5$ by all methods
</details>

---

**Q52.** (a) Define discriminant and explain its significance.
(b) Find the discriminant and nature of roots for:
(i) $2x^2 - 6x + 3 = 0$ (ii) $x^2 - 4x + 4 = 0$ (iii) $x^2 + x + 1 = 0$
(c) Draw rough sketches showing the three cases.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Discriminant:**

For $ax^2 + bx + c = 0$, the discriminant is $D = b^2 - 4ac$.

**Significance:**
- Determines nature of roots without solving
- D > 0: Two distinct real roots
- D = 0: Two equal real roots
- D < 0: No real roots (complex)

**(b) Finding discriminant:**

**(i)** $2x^2 - 6x + 3 = 0$
$$D = (-6)^2 - 4(2)(3) = 36 - 24 = 12 > 0$$
**Two distinct real roots**

**(ii)** $x^2 - 4x + 4 = 0$
$$D = (-4)^2 - 4(1)(4) = 16 - 16 = 0$$
**Two equal real roots**

**(iii)** $x^2 + x + 1 = 0$
$$D = 1^2 - 4(1)(1) = 1 - 4 = -3 < 0$$
**No real roots (complex)**

**(c) Sketches:**

```
D > 0:        D = 0:        D < 0:
   /\             _            ___
  /  \           / \          /   \
 /    \         /   \        /     \
/      \       /     \      /       \
--x₁--x₂--    --x₁=x₂--    ---------
```

**Answer:** (i) D = 12, distinct (ii) D = 0, equal (iii) D = -3, complex
</details>

---

**Q53.** (a) A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less for the same journey. Find the speed of the train.
(b) Verify your answer.
(c) How long does the journey take at the original speed?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Forming equation:**

Let original speed = $x$ km/h

Time at original speed = $\frac{360}{x}$ hours
Time at increased speed = $\frac{360}{x + 5}$ hours

Given:
$$\frac{360}{x} - \frac{360}{x + 5} = 1$$

$$360\left(\frac{x + 5 - x}{x(x + 5)}\right) = 1$$

$$360(5) = x^2 + 5x$$

$$x^2 + 5x - 1800 = 0$$

$$(x + 45)(x - 40) = 0$$

$$x = 40 \text{ (speed can't be negative)}$$

**Original speed = 40 km/h**

**(b) Verification:**

At 40 km/h: Time = $\frac{360}{40} = 9$ hours
At 45 km/h: Time = $\frac{360}{45} = 8$ hours
Difference = 1 hour ✓

**(c) Journey time:**

$$\text{Time} = \frac{360}{40} = 9 \text{ hours}$$

**Answer:** (a) 40 km/h (b) Verified (c) 9 hours
</details>

---

**Q54.** (a) Prove that if the roots of $ax^2 + bx + c = 0$ are in the ratio m:n, then $(m + n)^2 ac = mn b^2$.
(b) Apply this to find k if roots of $kx^2 + 6x + 9 = 0$ are in ratio 1:1.
(c) Verify your answer.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

Let roots be $m\alpha$ and $n\alpha$.

**Sum:** $m\alpha + n\alpha = -\frac{b}{a}$
$$\alpha(m + n) = -\frac{b}{a}$$ ... (i)

**Product:** $(m\alpha)(n\alpha) = \frac{c}{a}$
$$mn\alpha^2 = \frac{c}{a}$$ ... (ii)

From (i): $\alpha = -\frac{b}{a(m + n)}$

Substitute in (ii):
$$mn\left(-\frac{b}{a(m + n)}\right)^2 = \frac{c}{a}$$

$$\frac{mnb^2}{a^2(m + n)^2} = \frac{c}{a}$$

$$(m + n)^2 ac = mn b^2$$ ✓

**(b) Application:**

m:n = 1:1, so m = 1, n = 1

$$(1 + 1)^2 (k)(9) = (1)(1)(6)^2$$
$$4 \times 9k = 36$$
$$k = 1$$

**(c) Verification:**

For $x^2 + 6x + 9 = 0$: $(x + 3)^2 = 0$
Roots: -3, -3 (ratio 1:1) ✓

**Answer:** (a) Proved (b) k = 1 (c) Verified
</details>

---

**Q55.** (a) The diagonal of a rectangular field is 60 meters more than the shorter side. If the longer side is 30 meters more than the shorter side, find the sides of the field.
(b) Find the area of the field.
(c) Verify using Pythagoras theorem.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Forming equation:**

Let shorter side = $x$ m

Longer side = $(x + 30)$ m
Diagonal = $(x + 60)$ m

By Pythagoras theorem:
$$x^2 + (x + 30)^2 = (x + 60)^2$$

$$x^2 + x^2 + 60x + 900 = x^2 + 120x + 3600$$

$$x^2 - 60x - 2700 = 0$$

$$(x - 90)(x + 30) = 0$$

$$x = 90 \text{ (side can't be negative)}$$

**Sides:** Shorter = 90 m, Longer = 120 m

**(b) Area:**

$$\text{Area} = 90 \times 120 = 10800 \text{ m}^2$$

**(c) Verification:**

$$90^2 + 120^2 = 8100 + 14400 = 22500 = 150^2$$

Diagonal = 150 m = 90 + 60 ✓

**Answer:** (a) 90 m, 120 m (b) 10800 m² (c) Verified
</details>

---

**Q56.** (a) Solve for x: $\frac{1}{a + b + x} = \frac{1}{a} + \frac{1}{b} + \frac{1}{x}$ where $a \neq 0, b \neq 0, x \neq 0$.
(b) Verify your solution.
(c) Find x when a = 2 and b = 3.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Solving:**

$$\frac{1}{a + b + x} = \frac{1}{a} + \frac{1}{b} + \frac{1}{x}$$

$$\frac{1}{a + b + x} - \frac{1}{x} = \frac{1}{a} + \frac{1}{b}$$

$$\frac{x - (a + b + x)}{x(a + b + x)} = \frac{a + b}{ab}$$

$$\frac{-(a + b)}{x(a + b + x)} = \frac{a + b}{ab}$$

$$\frac{-1}{x(a + b + x)} = \frac{1}{ab}$$

$$-ab = x(a + b) + x^2$$

$$x^2 + (a + b)x + ab = 0$$

$$(x + a)(x + b) = 0$$

$$x = -a \text{ or } x = -b$$

**(b) Verification:**

For $x = -a$: LHS = $\frac{1}{b}$, RHS = $\frac{1}{a} + \frac{1}{b} - \frac{1}{a} = \frac{1}{b}$ ✓

**(c) When a = 2, b = 3:**

$$x = -2 \text{ or } x = -3$$

**Answer:** (a) $x = -a, -b$ (b) Verified (c) $x = -2, -3$
</details>

---

**Q57.** (a) A motor boat whose speed is 18 km/h in still water takes 1 hour more to go 24 km upstream than to return downstream to the same spot. Find the speed of the stream.
(b) Verify your answer.
(c) What is the total time for the round trip?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Forming equation:**

Let speed of stream = $x$ km/h

Upstream speed = $(18 - x)$ km/h
Downstream speed = $(18 + x)$ km/h

Given:
$$\frac{24}{18 - x} - \frac{24}{18 + x} = 1$$

$$24\left(\frac{18 + x - 18 + x}{(18 - x)(18 + x)}\right) = 1$$

$$24(2x) = 324 - x^2$$

$$x^2 + 48x - 324 = 0$$

$$(x + 54)(x - 6) = 0$$

$$x = 6 \text{ (speed can't be negative)}$$

**Speed of stream = 6 km/h**

**(b) Verification:**

Upstream: $\frac{24}{12} = 2$ hours
Downstream: $\frac{24}{24} = 1$ hour
Difference = 1 hour ✓

**(c) Total time:**

$$2 + 1 = 3 \text{ hours}$$

**Answer:** (a) 6 km/h (b) Verified (c) 3 hours
</details>

---

**Q58.** (a) If the roots of $x^2 + px + q = 0$ differ by 1, prove that $p^2 = 4q + 1$.
(b) Apply to find p if roots of $x^2 + px + 6 = 0$ differ by 1.
(c) Find the roots in each case.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

Let roots be $\alpha$ and $(\alpha + 1)$.

**Sum:** $\alpha + \alpha + 1 = -p$
$$2\alpha + 1 = -p$$
$$\alpha = \frac{-p - 1}{2}$$ ... (i)

**Product:** $\alpha(\alpha + 1) = q$ ... (ii)

Substitute (i) in (ii):
$$\left(\frac{-p - 1}{2}\right)\left(\frac{-p - 1}{2} + 1\right) = q$$

$$\left(\frac{-p - 1}{2}\right)\left(\frac{-p + 1}{2}\right) = q$$

$$\frac{p^2 - 1}{4} = q$$

$$p^2 = 4q + 1$$ ✓

**(b) Application:**

$$p^2 = 4(6) + 1 = 25$$
$$p = \pm 5$$

**(c) Roots:**

For $p = -5$: $x^2 - 5x + 6 = 0 \Rightarrow x = 2, 3$ (differ by 1) ✓
For $p = 5$: $x^2 + 5x + 6 = 0 \Rightarrow x = -2, -3$ (differ by 1) ✓

**Answer:** (a) Proved (b) $p = \pm 5$ (c) 2, 3 or -2, -3
</details>

---

**Q59.** (a) A cottage industry produces a certain number of pottery articles in a day. The cost of production of each article is 3 more than twice the number of articles produced. If the total cost of production is ₹90, find the number of articles and the cost of each article.
(b) Verify your answer.
(c) What would be the cost if production is doubled?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Forming equation:**

Let number of articles = $x$

Cost per article = ₹$(2x + 3)$

Total cost:
$$x(2x + 3) = 90$$
$$2x^2 + 3x - 90 = 0$$

$$(2x + 15)(x - 6) = 0$$

$$x = 6 \text{ (can't be negative)}$$

**Number of articles = 6**
**Cost per article = ₹15**

**(b) Verification:**

$$6 \times 15 = 90$$ ✓

**(c) If production doubled:**

New production = 12 articles
New cost per article = $2(12) + 3 = ₹27$
Total cost = $12 \times 27 = ₹324$

**Answer:** (a) 6 articles, ₹15 each (b) Verified (c) ₹324
</details>

---

**Q60.** (a) State and prove the quadratic formula.
(b) Solve $3x^2 - 2\sqrt{6}x + 2 = 0$ using the formula.
(c) Verify the nature of roots using discriminant.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Quadratic Formula:**

**Statement:** For $ax^2 + bx + c = 0$, the roots are:
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Proof by Completing Square:**

$$ax^2 + bx + c = 0$$

Divide by a:
$$x^2 + \frac{b}{a}x + \frac{c}{a} = 0$$

$$x^2 + \frac{b}{a}x = -\frac{c}{a}$$

Add $(\frac{b}{2a})^2$:
$$x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} = -\frac{c}{a} + \frac{b^2}{4a^2}$$

$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}$$

$$x + \frac{b}{2a} = \pm \frac{\sqrt{b^2 - 4ac}}{2a}$$

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$ ✓

**(b) Solving $3x^2 - 2\sqrt{6}x + 2 = 0$:**

$a = 3, b = -2\sqrt{6}, c = 2$

$$x = \frac{2\sqrt{6} \pm \sqrt{24 - 24}}{6} = \frac{2\sqrt{6}}{6} = \frac{\sqrt{6}}{3}$$

**(c) Discriminant:**

$$D = 24 - 24 = 0$$

Two equal real roots ✓

**Answer:** (a) Proved (b) $x = \frac{\sqrt{6}}{3}, \frac{\sqrt{6}}{3}$ (c) D = 0, equal roots
</details>

---

**Q61.** (a) The difference of squares of two numbers is 180. The square of the smaller number is 8 times the larger number. Find the two numbers.
(b) Verify your answer.
(c) Find the sum of the two numbers.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Forming equations:**

Let larger number = $x$, smaller number = $y$

$$x^2 - y^2 = 180$$ ... (i)
$$y^2 = 8x$$ ... (ii)

Substitute (ii) in (i):
$$x^2 - 8x = 180$$
$$x^2 - 8x - 180 = 0$$

$$(x - 18)(x + 10) = 0$$

$$x = 18 \text{ (since } y^2 = 8x \text{ must be positive)}$$

From (ii): $y^2 = 144 \Rightarrow y = \pm 12$

**Numbers:** 18 and 12, or 18 and -12

**(b) Verification:**

For 18, 12: $18^2 - 12^2 = 324 - 144 = 180$ ✓
$12^2 = 144 = 8 \times 18$ ✓

**(c) Sum:**

$$18 + 12 = 30 \text{ or } 18 + (-12) = 6$$

**Answer:** (a) 18, 12 or 18, -12 (b) Verified (c) 30 or 6
</details>

---

**Q62.** (a) A takes 6 days less than B to finish a work. If both A and B together can finish it in 4 days, find the time taken by each to finish the work alone.
(b) Verify your answer.
(c) What fraction of work does each do in one day?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Forming equation:**

Let B takes $x$ days, then A takes $(x - 6)$ days

A's 1 day work = $\frac{1}{x - 6}$
B's 1 day work = $\frac{1}{x}$

Together:
$$\frac{1}{x - 6} + \frac{1}{x} = \frac{1}{4}$$

$$\frac{x + x - 6}{x(x - 6)} = \frac{1}{4}$$

$$4(2x - 6) = x^2 - 6x$$

$$x^2 - 14x + 24 = 0$$

$$(x - 12)(x - 2) = 0$$

$$x = 12 \text{ (x = 2 gives negative time for A)}$$

**B takes 12 days, A takes 6 days**

**(b) Verification:**

A's rate = $\frac{1}{6}$, B's rate = $\frac{1}{12}$
Together = $\frac{1}{6} + \frac{1}{12} = \frac{1}{4}$ (4 days) ✓

**(c) Work per day:**

A: $\frac{1}{6}$ of work
B: $\frac{1}{12}$ of work

**Answer:** (a) A = 6 days, B = 12 days (b) Verified (c) $\frac{1}{6}$ and $\frac{1}{12}$
</details>

---

**Q63.** (a) Prove that a quadratic equation cannot have more than 2 roots.
(b) Can $x^2 = 0$ be considered to have 2 roots? Explain.
(c) Give an example of a quadratic with exactly 1 distinct root.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

Let $ax^2 + bx + c = 0$ where $a \neq 0$.

By quadratic formula:
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

This gives at most 2 values:
- $x_1 = \frac{-b + \sqrt{D}}{2a}$
- $x_2 = \frac{-b - \sqrt{D}}{2a}$

When D > 0: Two distinct roots
When D = 0: Two equal roots (one distinct value)
When D < 0: No real roots

Therefore, a quadratic has **at most 2 roots**. ✓

**(b) $x^2 = 0$:**

Yes, it has 2 roots: $x = 0, 0$ (two equal roots)

The equation can be written as $(x - 0)(x - 0) = 0$

**(c) Example with 1 distinct root:**

$$x^2 - 4x + 4 = 0$$
$$(x - 2)^2 = 0$$

Root: $x = 2$ (repeated twice, but only 1 distinct value)

**Answer:** (a) Proved (b) Yes, 0, 0 (c) $x^2 - 4x + 4 = 0$
</details>

---

**Q64.** (a) Solve: $x^2 - (\sqrt{2} + 1)x + \sqrt{2} = 0$
(b) Verify the relationship between roots and coefficients.
(c) Form a new quadratic whose roots are squares of the original roots.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Solving:**

$$x^2 - \sqrt{2}x - x + \sqrt{2} = 0$$
$$x(x - \sqrt{2}) - 1(x - \sqrt{2}) = 0$$
$$(x - 1)(x - \sqrt{2}) = 0$$

**Roots:** $x = 1, \sqrt{2}$

**(b) Verification:**

Here: $a = 1, b = -(\sqrt{2} + 1), c = \sqrt{2}$

**Sum:** $1 + \sqrt{2} = -\frac{-(\sqrt{2} + 1)}{1}$ ✓

**Product:** $1 \times \sqrt{2} = \frac{\sqrt{2}}{1}$ ✓

**(c) New quadratic:**

New roots: $1^2 = 1$ and $(\sqrt{2})^2 = 2$

Sum = 3, Product = 2

**New equation:** $x^2 - 3x + 2 = 0$

**Answer:** (a) $x = 1, \sqrt{2}$ (b) Verified (c) $x^2 - 3x + 2 = 0$
</details>

---

**Q65.** (a) Explain with examples how quadratic equations are used in real life.
(b) A ball is thrown upward from a building 60 m high with initial velocity 20 m/s. The height h after t seconds is given by $h = 60 + 20t - 5t^2$. Find when the ball hits the ground.
(c) Verify your answer.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Real-life Applications:**

**1. Physics - Projectile Motion:**
- Trajectory of thrown objects
- Maximum height calculations

**2. Business - Profit Maximization:**
- Revenue = Price × Quantity
- Finding optimal price

**3. Geometry - Area Problems:**
- Finding dimensions given area

**4. Engineering - Parabolic Structures:**
- Bridge arches, satellite dishes

**Example:** Finding dimensions of a rectangle with given area and perimeter.

**(b) Solving:**

When ball hits ground, $h = 0$:

$$60 + 20t - 5t^2 = 0$$
$$5t^2 - 20t - 60 = 0$$
$$t^2 - 4t - 12 = 0$$

$$(t - 6)(t + 2) = 0$$

$$t = 6 \text{ seconds (time can't be negative)}$$

**(c) Verification:**

$$h = 60 + 20(6) - 5(36) = 60 + 120 - 180 = 0$$ ✓

**Answer:** (a) Explained (b) 6 seconds (c) Verified
</details>

---

## 6. Exam-Oriented Preparation

### 📝 Important Formulas & Methods to Memorize

#### Standard Form:

$$ ax^2 + bx + c = 0 \quad \text{where } a \neq 0 $$

#### Quadratic Formula:

$$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

#### Discriminant and Nature of Roots:

| Discriminant (D) | Nature of Roots |
|------------------|-----------------|
| $D > 0$ | Two distinct real roots |
| $D = 0$ | Two equal real roots |
| $D < 0$ | No real roots (complex) |

#### Sum and Product of Roots:

For roots $\alpha$ and $\beta$:
$$ \alpha + \beta = -\frac{b}{a} $$
$$ \alpha\beta = \frac{c}{a} $$

#### Forming Quadratic Equation:

$$ x^2 - (\text{sum})x + (\text{product}) = 0 $$

---

### 🎯 Expected Question Patterns (CBSE Class 10)

#### 1 Mark Questions (MCQ/Very Short Answer):
- Identify quadratic equations
- Find discriminant value
- Determine nature of roots
- Simple root finding

#### 2 Mark Questions (Short Answer):
- Solve by factorization
- Find value of parameter for equal roots
- Verify roots satisfy equation
- Form equation from given roots

#### 3 Mark Questions (Long Answer):
- Solve by completing square
- Word problems (area, numbers)
- Prove relationships between roots

#### 5 Mark Questions (Very Long Answer):
- Complex word problems (trains, boats, work)
- Multi-step applications
- Prove and apply theorems

---

### 💡 Exam Tips:

1. ✅ **Always write in standard form** before identifying a, b, c
2. ✅ **Check discriminant** before solving to know nature of roots
3. ✅ **Verify roots** by substituting back in original equation
4. ✅ **Reject negative values** for length, time, speed in word problems
5. ✅ **Show all steps** in completing the square method
6. ✅ **Mention formula** before using quadratic formula
7. ✅ **Draw diagrams** for geometry-based problems
8. ✅ **Write units** in final answers for word problems

---

### 🔴 Common Mistakes to Avoid:

| Mistake | Correction |
|---------|------------|
| Wrong sign in quadratic formula | Use $-b$ not $b$ in numerator |
| Forgetting ± in square root | Always write $\pm$ when taking square root |
| D = b² - 4ac sign errors | Be careful with negative coefficients |
| Not checking a ≠ 0 | Verify it's actually quadratic |
| Accepting negative time/distance | Reject physically impossible solutions |
| Wrong factorization | Verify by expanding factors |
| Missing units in word problems | Always include appropriate units |

---

### 📚 Previous Year Questions (CBSE Pattern)

**Q1 (CBSE 2024):** Find roots of $x^2 - 5x + 6 = 0$ by factorization.

**Answer:** $x = 2, 3$

---

**Q2 (CBSE 2023):** Find k for which $x^2 + kx + 9 = 0$ has equal roots.

**Answer:** $k = \pm 6$

---

**Q3 (CBSE 2023):** A train travels 360 km. If speed was 5 km/h more, it would take 1 hour less. Find speed.

**Answer:** 40 km/h

---

**Q4 (CBSE 2022):** Solve by completing square: $x^2 + 4x - 5 = 0$

**Answer:** $x = 1, -5$

---

**Q5 (CBSE 2022):** Find discriminant of $2x^2 - 6x + 3 = 0$

**Answer:** $D = 12$

---

**Q6 (CBSE 2021):** The diagonal of a rectangular field is 60 m more than shorter side. Longer side is 30 m more than shorter side. Find sides.

**Answer:** 90 m, 120 m

---

**Q7 (CBSE 2021):** Solve using quadratic formula: $2x^2 + x - 6 = 0$

**Answer:** $x = \frac{3}{2}, -2$

---

**Q8 (CBSE 2020):** A motor boat takes 1 hour more to go 24 km upstream than downstream. Speed in still water is 18 km/h. Find stream speed.

**Answer:** 6 km/h

---

**Q9 (CBSE 2020):** Find nature of roots of $x^2 + x + 1 = 0$

**Answer:** No real roots (complex)

---

**Q10 (CBSE 2019):** Sum of two numbers is 15, product is 56. Find numbers.

**Answer:** 7 and 8

---

## 7. Revision Notes

### 📌 Quick Revision Sheet

#### Key Definitions:

| Term | Definition |
|------|------------|
| **Quadratic Equation** | Equation of degree 2: $ax^2 + bx + c = 0$ |
| **Roots** | Values of x satisfying the equation |
| **Discriminant** | $D = b^2 - 4ac$ |
| **Real Roots** | When $D \geq 0$ |
| **Complex Roots** | When $D < 0$ |

---

#### Important Formulas:

**Quadratic Formula:**
$$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

**Sum of Roots:**
$$ \alpha + \beta = -\frac{b}{a} $$

**Product of Roots:**
$$ \alpha\beta = \frac{c}{a} $$

**Form Equation:**
$$ x^2 - (\text{sum})x + (\text{product}) = 0 $$

---

#### Nature of Roots:

```
D > 0: Two distinct real roots
       Graph intersects x-axis at 2 points

D = 0: Two equal real roots
       Graph touches x-axis at 1 point

D < 0: No real roots (complex)
       Graph does not intersect x-axis
```

---

#### Methods of Solving:

| Method | Best Used When |
|--------|----------------|
| Factorization | Easy to split middle term |
| Completing Square | When coefficient of x is even |
| Quadratic Formula | Any general case |

---

#### Common Identities:

- $(a + b)^2 = a^2 + 2ab + b^2$
- $(a - b)^2 = a^2 - 2ab + b^2$
- $a^2 - b^2 = (a + b)(a - b)$

---

### 🎓 Final Checklist Before Exam:

- [ ] I can identify a quadratic equation
- [ ] I can solve by factorization method
- [ ] I can solve by completing the square
- [ ] I can solve using quadratic formula
- [ ] I can find discriminant and nature of roots
- [ ] I can form quadratic from given roots
- [ ] I can solve word problems
- [ ] I know sum and product of roots formulas
- [ ] I can verify my solutions
- [ ] I have practiced all 30 MCQs
- [ ] I have practiced all 20 Short Answer questions
- [ ] I have practiced all 15 Long Answer questions

---

### 📊 Quick Formula Sheet:

**Standard Form:**
$$ ax^2 + bx + c = 0, \quad a \neq 0 $$

**Quadratic Formula:**
$$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

**Discriminant:**
$$ D = b^2 - 4ac $$

**Nature of Roots:**
$$ D > 0 \Rightarrow \text{Two distinct real roots} $$
$$ D = 0 \Rightarrow \text{Two equal real roots} $$
$$ D < 0 \Rightarrow \text{No real roots (complex)} $$

**Sum and Product:**
$$ \alpha + \beta = -\frac{b}{a}, \quad \alpha\beta = \frac{c}{a} $$

---

**Good luck with your studies! 🌟**

> Remember: Practice identifying the nature of roots using discriminant before solving!

---

**End of Learning Path - Quadratic Equations**
