# Pair of Linear Equations in Two Variables - Learning Path

## 1. Concept Introduction

### What is a Linear Equation in Two Variables?

A **linear equation in two variables** is an equation that can be written in the form:

$$ ax + by + c = 0 $$

where **a**, **b**, and **c** are real numbers, and **a** and **b** are not both zero.

**Everyday Examples:**
- 🛒 Shopping: Cost of 2 pens and 3 notebooks is ₹50 → $2x + 3y = 50$
- 🚗 Travel: Distance = Speed × Time for two different journeys
- 💼 Business: Revenue from selling two products at different prices
- 🍎 Food: Calorie count from two different food items
- 🎫 Cinema: Total cost of adult and child tickets

### Understanding the Concept:

```
LINEAR EQUATION: 2x + 3y = 12
                 │   │    │
                 │   │    └── Constant term (12)
                 │   └─────── Coefficient of y (3)
                 └─────────── Coefficient of x (2)

A PAIR means TWO such equations considered together:
Equation 1: 2x + 3y = 12
Equation 2:  x -  y =  1
```

**Key Components:**

| Term | Meaning | Example |
|------|---------|---------|
| **Variable** | Unknown quantity | x, y |
| **Coefficient** | Number multiplying variable | In 2x, coefficient is 2 |
| **Constant** | Fixed value | 12, -5, 0 |
| **Solution** | Pair (x, y) that satisfies equation | (3, 2) for 2x + 3y = 12 |
| **Pair** | Two equations considered together | System of equations |

---

## 2. Micro-topic Breakdown

This chapter is divided into the following key concepts:

```
Pair of Linear Equations in Two Variables
├── 3.1 Introduction to Linear Equations
│   ├── General form: ax + by + c = 0
│   ├── Solution of a linear equation
│   └── Graphical representation
├── 3.2 Pair of Linear Equations
│   ├── Consistent equations
│   ├── Inconsistent equations
│   └── Dependent equations
├── 3.3 Graphical Method
│   ├── Plotting lines
│   ├── Intersection point
│   └── Interpretation of graphs
├── 3.4 Algebraic Methods
│   ├── Substitution method
│   ├── Elimination method
│   └── Cross-multiplication method
└── 3.5 Applications
    ├── Word problems
    ├── Real-life situations
    └── Equations reducible to linear form
```

---

## 3. Concept Explanations

### 3.1 Introduction to Linear Equations

A linear equation in two variables has the **general form**:

$$ ax + by + c = 0 $$

where $a$, $b$, $c$ are real numbers, and $a^2 + b^2 \neq 0$.

#### Examples:

| Equation | In Standard Form | a | b | c |
|----------|-----------------|---|---|---|
| $2x + 3y = 12$ | $2x + 3y - 12 = 0$ | 2 | 3 | -12 |
| $x - y = 5$ | $x - y - 5 = 0$ | 1 | -1 | -5 |
| $3x = 7y$ | $3x - 7y = 0$ | 3 | -7 | 0 |

#### Solution of a Linear Equation:

A **solution** is a pair of values $(x, y)$ that satisfies the equation.

**Example:** For $2x + 3y = 12$:
- If $x = 3$, then $2(3) + 3y = 12 \Rightarrow y = 2$
- Solution: $(3, 2)$

**Note:** A linear equation in two variables has **infinitely many solutions**.

---

### 3.2 Pair of Linear Equations

When we have **two** linear equations in the same variables:

$$ a_1x + b_1y + c_1 = 0 $$
$$ a_2x + b_2y + c_2 = 0 $$

#### Types of Pairs:

| Type | Condition | Number of Solutions | Graph |
|------|-----------|---------------------|-------|
| **Consistent (Unique)** | $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$ | One unique solution | Intersecting lines |
| **Consistent (Dependent)** | $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$ | Infinitely many | Coincident lines |
| **Inconsistent** | $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$ | No solution | Parallel lines |

#### Visual Representation:

```
CONSISTENT (Unique Solution)    CONSISTENT (Dependent)    INCONSISTENT (No Solution)
       y                              y                         y
       |                              |                         |
    \  |  /                       ----|----                  ----|----
     \ | /                         /   |   /                    |   |
      \|/                         /    |  /                     |   |
-------+------- x          -------+------- x            --------+------- x
       | \                    ---- | ----                     ----|----
       |  \                       |                              |
    Intersecting              Coincident                      Parallel
    One solution            Infinite solutions              No solution
```

---

### 3.3 Graphical Method

#### Steps to Solve Graphically:

1. Write both equations in slope-intercept form: $y = mx + c$
2. Find at least two points for each line
3. Plot the points and draw the lines
4. Find the point of intersection
5. The coordinates of intersection point is the solution

#### Example:

Solve graphically:
$$ x + y = 5 $$
$$ 2x - y = 4 $$

**Step 1:** Express y in terms of x

Equation 1: $y = 5 - x$
Equation 2: $y = 2x - 4$

**Step 2:** Find points

| For Eq 1 | x | 0 | 5 |
|----------|---|---|---|
| | y | 5 | 0 |

| For Eq 2 | x | 0 | 2 |
|----------|---|---|---|
| | y | -4 | 0 |

**Step 3-4:** Plot and find intersection

```
    y
    |
  5 + * (0,5)
    |  \
    |   \
    |    \      /
  0 +-----\----*---- x
    |      \  (3,2) 5
    |       \/
 -4 +       *
            (2,0)
```

**Solution:** $(3, 2)$

---

### 3.4 Algebraic Methods

#### Method 1: Substitution Method

**Steps:**
1. Express one variable in terms of the other from one equation
2. Substitute this expression in the second equation
3. Solve for the remaining variable
4. Substitute back to find the other variable

**Example:** Solve $x + 2y = 8$ and $2x - 3y = 2$

| Step | Action | Working |
|------|--------|---------|
| 1 | From Eq 1: express x | $x = 8 - 2y$ |
| 2 | Substitute in Eq 2 | $2(8 - 2y) - 3y = 2$ |
| 3 | Simplify | $16 - 4y - 3y = 2$ |
| 4 | Solve for y | $-7y = -14 \Rightarrow y = 2$ |
| 5 | Find x | $x = 8 - 2(2) = 4$ |

**Solution:** $(4, 2)$

---

#### Method 2: Elimination Method

**Steps:**
1. Multiply equations to make coefficients of one variable equal
2. Add or subtract to eliminate that variable
3. Solve for the remaining variable
4. Substitute back

**Example:** Solve $3x + 2y = 12$ and $x - y = 1$

| Step | Action | Working |
|------|--------|---------|
| 1 | Multiply Eq 2 by 2 | $2x - 2y = 2$ |
| 2 | Add to Eq 1 | $(3x + 2y) + (2x - 2y) = 12 + 2$ |
| 3 | Simplify | $5x = 14 \Rightarrow x = \frac{14}{5}$ |
| 4 | Substitute in Eq 2 | $\frac{14}{5} - y = 1$ |
| 5 | Solve for y | $y = \frac{14}{5} - 1 = \frac{9}{5}$ |

**Solution:** $(\frac{14}{5}, \frac{9}{5})$

---

#### Method 3: Cross-Multiplication Method

For equations:
$$ a_1x + b_1y + c_1 = 0 $$
$$ a_2x + b_2y + c_2 = 0 $$

**Formula:**

$$ \frac{x}{b_1c_2 - b_2c_1} = \frac{y}{c_1a_2 - c_2a_1} = \frac{1}{a_1b_2 - a_2b_1} $$

**Visual Aid:**

```
    x           y           1
  ───────  =  ───────  =  ────────
  b₁c₂-b₂c₁    c₁a₂-c₂a₁    a₁b₂-a₂b₁

Pattern for x:    b₁  c₁    b₁
                  b₂  c₂    b₂
              (Cover 'a' column)

Pattern for y:    c₁  a₁    c₁
                  c₂  a₂    c₂
              (Cover 'b' column)

Pattern for 1:    a₁  b₁    a₁
                  a₂  b₂    a₂
              (Cover 'c' column)
```

**Example:** Solve $2x + 3y - 11 = 0$ and $3x + 2y - 9 = 0$

Here: $a_1 = 2$, $b_1 = 3$, $c_1 = -11$
$a_2 = 3$, $b_2 = 2$, $c_2 = -9$

$$ \frac{x}{(3)(-9) - (2)(-11)} = \frac{y}{(-11)(3) - (-9)(2)} = \frac{1}{(2)(2) - (3)(3)} $$

$$ \frac{x}{-27 + 22} = \frac{y}{-33 + 18} = \frac{1}{4 - 9} $$

$$ \frac{x}{-5} = \frac{y}{-15} = \frac{1}{-5} $$

$$ x = 1, \quad y = 3 $$

**Solution:** $(1, 3)$

---

### 3.5 Equations Reducible to Linear Form

Some equations can be **transformed** into linear equations by substitution.

#### Example Type 1: Reciprocal Variables

**Problem:** Solve $\frac{2}{x} + \frac{3}{y} = 4$ and $\frac{5}{x} - \frac{2}{y} = 1$

**Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Substitute | Let $u = \frac{1}{x}$, $v = \frac{1}{y}$ |
| 2 | Rewrite equations | $2u + 3v = 4$ and $5u - 2v = 1$ |
| 3 | Solve (elimination) | Multiply Eq 1 by 2, Eq 2 by 3 |
| 4 | | $4u + 6v = 12$ and $15u - 6v = 3$ |
| 5 | Add | $19u = 15 \Rightarrow u = \frac{15}{19}$ |
| 6 | Find v | $v = \frac{14}{19}$ |
| 7 | Back substitute | $x = \frac{19}{15}$, $y = \frac{19}{14}$ |

---

## 4. Guided Examples

### Example 1: Identifying Type of Pair

**Question:** Determine whether the following pair of equations is consistent, inconsistent, or dependent:
$$ 2x + 3y = 8 $$
$$ 4x + 6y = 16 $$

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Write in standard form | $2x + 3y - 8 = 0$ and $4x + 6y - 16 = 0$ |
| 2 | Identify coefficients | $a_1 = 2$, $b_1 = 3$, $c_1 = -8$ |
| | | $a_2 = 4$, $b_2 = 6$, $c_2 = -16$ |
| 3 | Find ratios | $\frac{a_1}{a_2} = \frac{2}{4} = \frac{1}{2}$ |
| | | $\frac{b_1}{b_2} = \frac{3}{6} = \frac{1}{2}$ |
| | | $\frac{c_1}{c_2} = \frac{-8}{-16} = \frac{1}{2}$ |
| 4 | Compare | $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$ |
| 5 | Conclusion | **Dependent (Coincident lines)** |

**Answer:** The pair is **consistent with infinitely many solutions** (dependent)

---

### Example 2: Substitution Method

**Question:** Solve the system: $x + y = 14$ and $x - y = 4$

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | From Eq 1: express x | $x = 14 - y$ |
| 2 | Substitute in Eq 2 | $(14 - y) - y = 4$ |
| 3 | Simplify | $14 - 2y = 4$ |
| 4 | Solve for y | $-2y = -10 \Rightarrow y = 5$ |
| 5 | Find x | $x = 14 - 5 = 9$ |
| 6 | Verify | $9 + 5 = 14$ ✓, $9 - 5 = 4$ ✓ |

**Final Answer:** $x = 9$, $y = 5$ or $(9, 5)$

---

### Example 3: Elimination Method

**Question:** Solve: $3x + 4y = 10$ and $2x - 2y = 2$

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Multiply Eq 2 by 2 | $4x - 4y = 4$ |
| 2 | Add to Eq 1 | $(3x + 4y) + (4x - 4y) = 10 + 4$ |
| 3 | Simplify | $7x = 14$ |
| 4 | Solve for x | $x = 2$ |
| 5 | Substitute in Eq 1 | $3(2) + 4y = 10$ |
| 6 | Solve for y | $4y = 4 \Rightarrow y = 1$ |
| 7 | Verify | $3(2) + 4(1) = 10$ ✓, $2(2) - 2(1) = 2$ ✓ |

**Final Answer:** $x = 2$, $y = 1$ or $(2, 1)$

---

### Example 4: Cross-Multiplication Method

**Question:** Solve using cross-multiplication: $2x + y = 5$ and $3x + 2y = 8$

**Step-by-Step Solution:**

**Standard form:** $2x + y - 5 = 0$ and $3x + 2y - 8 = 0$

**Coefficients:** $a_1 = 2$, $b_1 = 1$, $c_1 = -5$
$a_2 = 3$, $b_2 = 2$, $c_2 = -8$

**Using formula:**

$$ \frac{x}{b_1c_2 - b_2c_1} = \frac{y}{c_1a_2 - c_2a_1} = \frac{1}{a_1b_2 - a_2b_1} $$

$$ \frac{x}{(1)(-8) - (2)(-5)} = \frac{y}{(-5)(3) - (-8)(2)} = \frac{1}{(2)(2) - (3)(1)} $$

$$ \frac{x}{-8 + 10} = \frac{y}{-15 + 16} = \frac{1}{4 - 3} $$

$$ \frac{x}{2} = \frac{y}{1} = \frac{1}{1} $$

$$ x = 2, \quad y = 1 $$

**Final Answer:** $x = 2$, $y = 1$ or $(2, 1)$

---

### Example 5: Word Problem

**Question:** A boat goes 30 km upstream and 44 km downstream in 10 hours. In 13 hours, it can go 40 km upstream and 55 km downstream. Find the speed of the boat in still water and the speed of the stream.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Define variables | Let speed of boat = $x$ km/h |
| | | Let speed of stream = $y$ km/h |
| 2 | Upstream speed | $(x - y)$ km/h |
| 3 | Downstream speed | $(x + y)$ km/h |
| 4 | Form equations | $\frac{30}{x-y} + \frac{44}{x+y} = 10$ |
| | | $\frac{40}{x-y} + \frac{55}{x+y} = 13$ |
| 5 | Substitute | Let $u = \frac{1}{x-y}$, $v = \frac{1}{x+y}$ |
| 6 | Linear equations | $30u + 44v = 10$ ... (i) |
| | | $40u + 55v = 13$ ... (ii) |
| 7 | Solve (elimination) | Multiply (i) by 4, (ii) by 3 |
| | | $120u + 176v = 40$ |
| | | $120u + 165v = 39$ |
| | | Subtract: $11v = 1 \Rightarrow v = \frac{1}{11}$ |
| 8 | Find u | $30u + 44(\frac{1}{11}) = 10 \Rightarrow u = \frac{1}{5}$ |
| 9 | Back substitute | $x - y = 5$ and $x + y = 11$ |
| 10 | Solve | $2x = 16 \Rightarrow x = 8$, $y = 3$ |

**Final Answer:** Speed of boat = **8 km/h**, Speed of stream = **3 km/h**

---

## 5. Practice Questions

### SECTION A: Multiple Choice Questions (30 Questions - 1 Mark Each)

**Q1.** The general form of a linear equation in two variables is:
- (A) $ax + by + c = 0$
- (B) $ax^2 + bx + c = 0$
- (C) $ax + by = c$
- (D) Both (A) and (C)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (D) Both (A) and (C)

**Explanation:** Both forms represent linear equations. $ax + by + c = 0$ is standard form, $ax + by = c$ is another valid form.
</details>

---

**Q2.** The pair of equations $x = 0$ and $y = 0$ represents:
- (A) Parallel lines
- (B) Coincident lines
- (C) Intersecting lines at (0, 0)
- (D) Perpendicular lines only

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Intersecting lines at (0, 0)

**Explanation:** $x = 0$ is y-axis, $y = 0$ is x-axis. They intersect at origin (0, 0).
</details>

---

**Q3.** If $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$, the lines are:
- (A) Intersecting
- (B) Parallel
- (C) Coincident
- (D) Perpendicular

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Parallel

**Explanation:** Equal slopes but different intercepts means parallel lines (no solution).
</details>

---

**Q4.** The solution of $x + y = 5$ and $x - y = 1$ is:
- (A) (2, 3)
- (B) (3, 2)
- (C) (4, 1)
- (D) (1, 4)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) (3, 2)

**Explanation:** Adding: $2x = 6 \Rightarrow x = 3$. Then $y = 5 - 3 = 2$.
</details>

---

**Q5.** The pair of equations $2x + 3y = 6$ and $4x + 6y = 12$ has:
- (A) No solution
- (B) Unique solution
- (C) Infinitely many solutions
- (D) Two solutions

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Infinitely many solutions

**Explanation:** $\frac{2}{4} = \frac{3}{6} = \frac{-6}{-12} = \frac{1}{2}$. Lines are coincident.
</details>

---

**Q6.** Which method is used when coefficients of one variable are same in both equations?
- (A) Substitution
- (B) Elimination by addition/subtraction
- (C) Cross-multiplication
- (D) Graphical

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Elimination by addition/subtraction

**Explanation:** Same coefficients allow direct elimination by adding or subtracting.
</details>

---

**Q7.** The graph of $y = 2x + 3$ passes through:
- (A) (0, 3)
- (B) (3, 0)
- (C) (1, 2)
- (D) (2, 1)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) (0, 3)

**Explanation:** When $x = 0$, $y = 3$. This is the y-intercept.
</details>

---

**Q8.** For what value of k will the equations $x + 2y = 3$ and $2x + ky = 6$ have infinitely many solutions?
- (A) 2
- (B) 3
- (C) 4
- (D) 6

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 4

**Explanation:** For infinite solutions: $\frac{1}{2} = \frac{2}{k} \Rightarrow k = 4$
</details>

---

**Q9.** The pair $x + y = 7$ and $x + y = 10$ has:
- (A) One solution
- (B) Two solutions
- (C) No solution
- (D) Infinite solutions

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) No solution

**Explanation:** Same slope, different intercepts → Parallel lines → No solution
</details>

---

**Q10.** In cross-multiplication method, $\frac{x}{b_1c_2 - b_2c_1} = \frac{y}{c_1a_2 - c_2a_1} =$ ?
- (A) $\frac{1}{a_1b_2 - a_2b_1}$
- (B) $\frac{1}{a_1b_1 - a_2b_2}$
- (C) $\frac{1}{a_2b_2 - a_1b_1}$
- (D) $\frac{1}{a_1a_2 - b_1b_2}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $\frac{1}{a_1b_2 - a_2b_1}$

**Explanation:** This is the standard cross-multiplication formula.
</details>

---

**Q11.** If the lines $2x + 3y = 5$ and $4x + ky = 10$ are coincident, then k = ?
- (A) 3
- (B) 4
- (C) 5
- (D) 6

<details>
<summary>✓ Show Answer</summary>

**Answer:** (D) 6

**Explanation:** For coincident: $\frac{2}{4} = \frac{3}{k} \Rightarrow k = 6$
</details>

---

**Q12.** The solution of $ax + by = a^2 - b^2$ and $bx + ay = 0$ is:
- (A) $(a, -b)$
- (B) $(a, b)$
- (C) $(-a, b)$
- (D) $(-a, -b)$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $(a, -b)$

**Explanation:** Substituting $(a, -b)$: $a(a) + b(-b) = a^2 - b^2$ ✓ and $b(a) + a(-b) = 0$ ✓
</details>

---

**Q13.** Which pair of equations represents parallel lines?
- (A) $x + y = 5$, $2x + 2y = 10$
- (B) $x + y = 5$, $x + y = 7$
- (C) $x + y = 5$, $x - y = 5$
- (D) $x + y = 5$, $2x - y = 3$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $x + y = 5$, $x + y = 7$

**Explanation:** Same coefficients of x and y but different constants → Parallel
</details>

---

**Q14.** The value of x in $\frac{2}{x} + \frac{3}{y} = 4$ and $\frac{5}{x} - \frac{2}{y} = 1$ after substitution is:
- (A) $\frac{15}{19}$
- (B) $\frac{19}{15}$
- (C) $\frac{19}{14}$
- (D) $\frac{14}{19}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $\frac{19}{15}$

**Explanation:** Let $u = \frac{1}{x}$. Solving gives $u = \frac{15}{19}$, so $x = \frac{19}{15}$
</details>

---

**Q15.** A pair of linear equations has a unique solution when the lines are:
- (A) Parallel
- (B) Intersecting
- (C) Coincident
- (D) None of these

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Intersecting

**Explanation:** Intersecting lines meet at exactly one point → Unique solution
</details>

---

**Q16.** The graph of $x = 5$ is a line:
- (A) Parallel to x-axis
- (B) Parallel to y-axis
- (C) Passing through origin
- (D) At 45° to axes

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Parallel to y-axis

**Explanation:** $x = 5$ is a vertical line 5 units from y-axis.
</details>

---

**Q17.** For the pair $3x - y = 5$ and $6x - 2y = k$ to be inconsistent, k must be:
- (A) 5
- (B) 10
- (C) Any value except 10
- (D) 0

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Any value except 10

**Explanation:** For inconsistent: $\frac{3}{6} = \frac{-1}{-2} \neq \frac{-5}{-k}$ → $k \neq 10$
</details>

---

**Q18.** The point of intersection of $x + y = 3$ and $x - y = 1$ is:
- (A) (1, 2)
- (B) (2, 1)
- (C) (3, 0)
- (D) (0, 3)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) (2, 1)

**Explanation:** Adding: $2x = 4 \Rightarrow x = 2$. Then $y = 1$.
</details>

---

**Q19.** If $x = 2$, $y = 1$ is a solution of $2x + 3y = k$, then k = ?
- (A) 5
- (B) 6
- (C) 7
- (D) 8

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 7

**Explanation:** $2(2) + 3(1) = 4 + 3 = 7$
</details>

---

**Q20.** The equations $\frac{x}{2} + \frac{y}{3} = 1$ and $\frac{x}{3} + \frac{y}{2} = 1$ have solution:
- (A) (1, 1)
- (B) (2, 2)
- (C) ($\frac{6}{5}$, $\frac{6}{5}$)
- (D) (3, 3)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) ($\frac{6}{5}$, $\frac{6}{5}$)

**Explanation:** Multiply by 6: $3x + 2y = 6$ and $2x + 3y = 6$. Solving gives $x = y = \frac{6}{5}$
</details>

---

**Q21.** Which method is most suitable for $x = 2y$ and $x + y = 9$?
- (A) Substitution
- (B) Elimination
- (C) Cross-multiplication
- (D) Graphical

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) Substitution

**Explanation:** $x$ is already expressed in terms of $y$, making substitution easiest.
</details>

---

**Q22.** The pair $2x + 3y = 7$ and $4x + 6y = 14$ represents:
- (A) Parallel lines
- (B) Intersecting lines
- (C) Coincident lines
- (D) Perpendicular lines

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Coincident lines

**Explanation:** $\frac{2}{4} = \frac{3}{6} = \frac{-7}{-14} = \frac{1}{2}$. All ratios equal → Coincident
</details>

---

**Q23.** If $ax + by = c$ and $px + qy = r$ have no solution, then:
- (A) $\frac{a}{p} = \frac{b}{q}$
- (B) $\frac{a}{p} \neq \frac{b}{q}$
- (C) $\frac{a}{p} = \frac{b}{q} \neq \frac{c}{r}$
- (D) $\frac{a}{p} = \frac{b}{q} = \frac{c}{r}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) $\frac{a}{p} = \frac{b}{q} \neq \frac{c}{r}$

**Explanation:** This is the condition for parallel lines (no solution).
</details>

---

**Q24.** The value of k for which $x + 2y = 3$ and $3x + ky = 9$ have infinite solutions is:
- (A) 2
- (B) 4
- (C) 6
- (D) 8

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 6

**Explanation:** $\frac{1}{3} = \frac{2}{k} \Rightarrow k = 6$
</details>

---

**Q25.** The area of the triangle formed by $x = 0$, $y = 0$, and $x + y = 6$ is:
- (A) 6 sq units
- (B) 12 sq units
- (C) 18 sq units
- (D) 36 sq units

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 18 sq units

**Explanation:** Vertices: (0,0), (6,0), (0,6). Area = $\frac{1}{2} \times 6 \times 6 = 18$
</details>

---

**Q26.** For what value of p does $3x + y = 1$ and $(2p-1)x + (p-1)y = 2p+1$ have no solution?
- (A) 1
- (B) 2
- (C) 3
- (D) 4

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 2

**Explanation:** For no solution: $\frac{3}{2p-1} = \frac{1}{p-1} \neq \frac{-1}{-2p-1}$. Solving gives $p = 2$
</details>

---

**Q27.** The solution of $99x + 101y = 499$ and $101x + 99y = 501$ is:
- (A) (2, 3)
- (B) (3, 2)
- (C) (1, 4)
- (D) (4, 1)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) (3, 2)

**Explanation:** Adding: $200x + 200y = 1000 \Rightarrow x + y = 5$. Subtracting: $2x - 2y = 2 \Rightarrow x - y = 1$. Solving: $x = 3, y = 2$
</details>

---

**Q28.** If the sum of two numbers is 15 and their difference is 5, the numbers are:
- (A) 8, 7
- (B) 9, 6
- (C) 10, 5
- (D) 11, 4

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 10, 5

**Explanation:** $x + y = 15$, $x - y = 5$. Adding: $2x = 20 \Rightarrow x = 10$, $y = 5$
</details>

---

**Q29.** The pair $y = 0$ and $y = -7$ represents:
- (A) Intersecting lines
- (B) Parallel lines
- (C) Coincident lines
- (D) Perpendicular lines

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Parallel lines

**Explanation:** Both are horizontal lines with different y-intercepts → Parallel
</details>

---

**Q30.** In the elimination method, we eliminate one variable by:
- (A) Adding or subtracting equations
- (B) Multiplying only
- (C) Dividing only
- (D) Substituting

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) Adding or subtracting equations

**Explanation:** After making coefficients equal, we add or subtract to eliminate.
</details>

---

### SECTION B: Short Answer Questions (20 Questions - 2-3 Marks Each)

**Q31.** Solve the pair of equations: $x + y = 5$ and $2x - 3y = 4$ by substitution method.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

From Eq 1: $x = 5 - y$

Substitute in Eq 2:
$$2(5 - y) - 3y = 4$$
$$10 - 2y - 3y = 4$$
$$-5y = -6$$
$$y = \frac{6}{5}$$

Substitute back:
$$x = 5 - \frac{6}{5} = \frac{19}{5}$$

**Answer:** $x = \frac{19}{5}$, $y = \frac{6}{5}$
</details>

---

**Q32.** Determine whether the following pair has a unique solution, no solution, or infinitely many solutions:
$3x + 2y = 8$ and $6x + 4y = 16$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Comparing with $a_1x + b_1y + c_1 = 0$ and $a_2x + b_2y + c_2 = 0$:

$$\frac{a_1}{a_2} = \frac{3}{6} = \frac{1}{2}$$
$$\frac{b_1}{b_2} = \frac{2}{4} = \frac{1}{2}$$
$$\frac{c_1}{c_2} = \frac{-8}{-16} = \frac{1}{2}$$

Since $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$, the lines are **coincident**.

**Answer:** Infinitely many solutions
</details>

---

**Q33.** Solve by elimination method: $2x + 3y = 8$ and $3x - 2y = -1$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Multiply Eq 1 by 2 and Eq 2 by 3:
$$4x + 6y = 16$$
$$9x - 6y = -3$$

Add the equations:
$$13x = 13 \Rightarrow x = 1$$

Substitute in Eq 1:
$$2(1) + 3y = 8$$
$$3y = 6 \Rightarrow y = 2$$

**Answer:** $x = 1$, $y = 2$
</details>

---

**Q34.** For what value of k will the equations $2x + 3y = 7$ and $(k-1)x + (k+2)y = 3k$ have infinitely many solutions?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

For infinite solutions: $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$

$$\frac{2}{k-1} = \frac{3}{k+2} = \frac{-7}{-3k}$$

From first two ratios:
$$\frac{2}{k-1} = \frac{3}{k+2}$$
$$2(k+2) = 3(k-1)$$
$$2k + 4 = 3k - 3$$
$$k = 7$$

**Verification:** $\frac{2}{6} = \frac{3}{9} = \frac{7}{21} = \frac{1}{3}$ ✓

**Answer:** $k = 7$
</details>

---

**Q35.** Solve using cross-multiplication: $2x + y = 35$ and $3x + 4y = 65$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Standard form: $2x + y - 35 = 0$ and $3x + 4y - 65 = 0$

Using formula:
$$\frac{x}{(1)(-65) - (4)(-35)} = \frac{y}{(-35)(3) - (-65)(2)} = \frac{1}{(2)(4) - (3)(1)}$$

$$\frac{x}{-65 + 140} = \frac{y}{-105 + 130} = \frac{1}{8 - 3}$$

$$\frac{x}{75} = \frac{y}{25} = \frac{1}{5}$$

$$x = 15, \quad y = 5$$

**Answer:** $x = 15$, $y = 5$
</details>

---

**Q36.** The sum of two numbers is 95. If one exceeds the other by 15, find the numbers.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let the numbers be $x$ and $y$ where $x > y$.

$$x + y = 95$$ ... (i)
$$x - y = 15$$ ... (ii)

Adding (i) and (ii):
$$2x = 110 \Rightarrow x = 55$$

From (i): $55 + y = 95 \Rightarrow y = 40$

**Answer:** The numbers are 55 and 40
</details>

---

**Q37.** Draw the graph of $x + y = 4$ and $x - y = 2$. Find the point of intersection.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**For $x + y = 4$:**

| x | 0 | 4 |
|---|---|---|
| y | 4 | 0 |

**For $x - y = 2$:**

| x | 0 | 2 |
|---|---|---|
| y | -2 | 0 |

```
    y
    |
  4 + * (0,4)
    |  \
    |   \
  0 +----\--*---- x
    |     \(2,0) 4
    |      \
 -2 +       *
            (2,0)
```

**Solving algebraically:**
Adding: $2x = 6 \Rightarrow x = 3$
Then: $y = 1$

**Answer:** Point of intersection is $(3, 1)$
</details>

---

**Q38.** Solve: $\frac{2}{x} + \frac{3}{y} = 13$ and $\frac{5}{x} - \frac{4}{y} = -2$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let $u = \frac{1}{x}$ and $v = \frac{1}{y}$

$$2u + 3v = 13$$ ... (i)
$$5u - 4v = -2$$ ... (ii)

Multiply (i) by 4 and (ii) by 3:
$$8u + 12v = 52$$
$$15u - 12v = -6$$

Adding: $23u = 46 \Rightarrow u = 2$

From (i): $2(2) + 3v = 13 \Rightarrow v = 3$

Back substitute:
$$x = \frac{1}{u} = \frac{1}{2}, \quad y = \frac{1}{v} = \frac{1}{3}$$

**Answer:** $x = \frac{1}{2}$, $y = \frac{1}{3}$
</details>

---

**Q39.** Find the value of m for which the pair $mx + 2y = 5$ and $3x + y = 1$ has no solution.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

For no solution: $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$

$$\frac{m}{3} = \frac{2}{1} \neq \frac{-5}{-1}$$

$$\frac{m}{3} = 2 \Rightarrow m = 6$$

**Check:** $\frac{6}{3} = \frac{2}{1} = 2 \neq 5$ ✓

**Answer:** $m = 6$
</details>

---

**Q40.** Half the perimeter of a rectangular garden, whose length is 4 m more than its width, is 36 m. Find the dimensions.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let width = $x$ m, length = $y$ m

Given:
$$y = x + 4$$ ... (i)
$$x + y = 36$$ ... (ii) (half perimeter)

Substitute (i) in (ii):
$$x + (x + 4) = 36$$
$$2x = 32 \Rightarrow x = 16$$

From (i): $y = 16 + 4 = 20$

**Answer:** Width = 16 m, Length = 20 m
</details>

---

**Q41.** Solve: $152x - 378y = -74$ and $-378x + 152y = -604$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Adding the equations:
$$-226x - 226y = -678$$
$$x + y = 3$$ ... (i)

Subtracting Eq 2 from Eq 1:
$$530x - 530y = 530$$
$$x - y = 1$$ ... (ii)

Adding (i) and (ii):
$$2x = 4 \Rightarrow x = 2$$

From (i): $2 + y = 3 \Rightarrow y = 1$

**Answer:** $x = 2$, $y = 1$
</details>

---

**Q42.** Find the angles of a triangle if $\angle A + \angle B = 100°$ and $\angle B + \angle C = 140°$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let $\angle A$, $\angle B$, $\angle C$ be the angles.

$$\angle A + \angle B = 100°$$ ... (i)
$$\angle B + \angle C = 140°$$ ... (ii)
$$\angle A + \angle B + \angle C = 180°$$ ... (iii) (angle sum property)

From (iii) - (i): $\angle C = 80°$

From (iii) - (ii): $\angle A = 40°$

From (i): $40° + \angle B = 100° \Rightarrow \angle B = 60°$

**Answer:** $\angle A = 40°$, $\angle B = 60°$, $\angle C = 80°$
</details>

---

**Q43.** Check whether the lines $5x - 4y + 8 = 0$ and $7x + 6y - 9 = 0$ intersect, are parallel, or coincident.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Compare ratios:
$$\frac{a_1}{a_2} = \frac{5}{7}$$
$$\frac{b_1}{b_2} = \frac{-4}{6} = -\frac{2}{3}$$

Since $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$, the lines **intersect** at a unique point.

**Answer:** Intersecting lines (unique solution)
</details>

---

**Q44.** Solve: $\frac{a}{x} - \frac{b}{y} = 0$ and $\frac{ab^2}{x} + \frac{a^2b}{y} = a^2 + b^2$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let $u = \frac{1}{x}$ and $v = \frac{1}{y}$

$$au - bv = 0$$ ... (i)
$$ab^2u + a^2bv = a^2 + b^2$$ ... (ii)

From (i): $au = bv \Rightarrow u = \frac{bv}{a}$

Substitute in (ii):
$$ab^2\left(\frac{bv}{a}\right) + a^2bv = a^2 + b^2$$
$$b^3v + a^2bv = a^2 + b^2$$
$$bv(b^2 + a^2) = a^2 + b^2$$
$$v = \frac{1}{b}$$

Then: $u = \frac{1}{a}$

Back substitute: $x = a$, $y = b$

**Answer:** $x = a$, $y = b$
</details>

---

**Q45.** A fraction becomes $\frac{9}{11}$ if 2 is added to both numerator and denominator. If 3 is added to both, it becomes $\frac{5}{6}$. Find the fraction.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let the fraction be $\frac{x}{y}$.

$$\frac{x+2}{y+2} = \frac{9}{11} \Rightarrow 11x + 22 = 9y + 18 \Rightarrow 11x - 9y = -4$$ ... (i)

$$\frac{x+3}{y+3} = \frac{5}{6} \Rightarrow 6x + 18 = 5y + 15 \Rightarrow 6x - 5y = -3$$ ... (ii)

Multiply (i) by 5 and (ii) by 9:
$$55x - 45y = -20$$
$$54x - 45y = -27$$

Subtract: $x = 7$

From (ii): $42 - 5y = -3 \Rightarrow y = 9$

**Answer:** The fraction is $\frac{7}{9}$
</details>

---

**Q46.** Five years hence, the age of Jacob will be three times that of his son. Five years ago, Jacob's age was seven times that of his son. Find their present ages.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let Jacob's present age = $x$ years, Son's present age = $y$ years

Five years hence:
$$x + 5 = 3(y + 5)$$
$$x - 3y = 10$$ ... (i)

Five years ago:
$$x - 5 = 7(y - 5)$$
$$x - 7y = -30$$ ... (ii)

Subtract (ii) from (i):
$$4y = 40 \Rightarrow y = 10$$

From (i): $x - 30 = 10 \Rightarrow x = 40$

**Answer:** Jacob = 40 years, Son = 10 years
</details>

---

**Q47.** Solve graphically: $2x + y = 6$ and $2x - y + 2 = 0$. Find the area of the triangle formed by these lines and the x-axis.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**For $2x + y = 6$:**

| x | 0 | 3 |
|---|---|---|
| y | 6 | 0 |

**For $2x - y + 2 = 0$ i.e., $y = 2x + 2$:**

| x | 0 | -1 |
|---|---|---|
| y | 2 | 0 |

**Intersection:** Adding equations: $4x + 2 = 8 \Rightarrow x = 1, y = 4$

**Vertices of triangle:** (1, 4), (3, 0), (-1, 0)

**Base** = 3 - (-1) = 4 units
**Height** = 4 units

**Area** = $\frac{1}{2} \times 4 \times 4 = 8$ sq units

**Answer:** Area = 8 sq units
</details>

---

**Q48.** If $2x + y = 23$ and $4x - y = 19$, find the values of $x + 2y$ and $5y - 2x$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Adding the equations:
$$6x = 42 \Rightarrow x = 7$$

Substitute in Eq 1:
$$14 + y = 23 \Rightarrow y = 9$$

Now:
$$x + 2y = 7 + 2(9) = 25$$
$$5y - 2x = 5(9) - 2(7) = 45 - 14 = 31$$

**Answer:** $x + 2y = 25$, $5y - 2x = 31$
</details>

---

**Q49.** Determine the values of x and y if ABCD is a cyclic quadrilateral where $\angle A = (2x + 4)°$, $\angle B = (y + 3)°$, $\angle C = (2y + 10)°$, $\angle D = (4x - 5)°$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

In cyclic quadrilateral, opposite angles are supplementary:

$$\angle A + \angle C = 180°$$
$$(2x + 4) + (2y + 10) = 180$$
$$2x + 2y = 166 \Rightarrow x + y = 83$$ ... (i)

$$\angle B + \angle D = 180°$$
$$(y + 3) + (4x - 5) = 180$$
$$4x + y = 182$$ ... (ii)

Subtract (i) from (ii):
$$3x = 99 \Rightarrow x = 33$$

From (i): $33 + y = 83 \Rightarrow y = 50$

**Answer:** $x = 33$, $y = 50$
</details>

---

**Q50.** A train covered a certain distance at a uniform speed. If the train had been 10 km/h faster, it would have taken 2 hours less. If slower by 10 km/h, it would take 3 hours more. Find the distance.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let speed = $x$ km/h, time = $t$ hours, distance = $d$ km

$$d = xt$$ ... (i)

Faster case: $d = (x + 10)(t - 2)$
$$xt = xt - 2x + 10t - 20$$
$$2x - 10t = -20$$ ... (ii)

Slower case: $d = (x - 10)(t + 3)$
$$xt = xt + 3x - 10t - 30$$
$$3x - 10t = 30$$ ... (iii)

Subtract (ii) from (iii): $x = 50$

From (ii): $100 - 10t = -20 \Rightarrow t = 12$

From (i): $d = 50 \times 12 = 600$ km

**Answer:** Distance = 600 km
</details>

---

### SECTION C: Long Answer Questions (15 Questions - 5 Marks Each)

**Q51.** (a) Explain the three conditions for a pair of linear equations to be consistent, inconsistent, or dependent.
(b) For what values of p does $px + 3y = p - 3$ and $12x + py = p$ have:
(i) Unique solution (ii) No solution

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Three Conditions:**

For equations $a_1x + b_1y + c_1 = 0$ and $a_2x + b_2y + c_2 = 0$:

| Condition | Type | Solutions | Graph |
|-----------|------|-----------|-------|
| $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$ | Consistent | Unique | Intersecting |
| $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$ | Consistent (Dependent) | Infinite | Coincident |
| $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$ | Inconsistent | None | Parallel |

**(b) Given:** $px + 3y - (p-3) = 0$ and $12x + py - p = 0$

Here: $a_1 = p$, $b_1 = 3$, $c_1 = -(p-3)$
$a_2 = 12$, $b_2 = p$, $c_2 = -p$

**(i) For unique solution:**

$$\frac{a_1}{a_2} \neq \frac{b_1}{b_2} \Rightarrow \frac{p}{12} \neq \frac{3}{p}$$
$$p^2 \neq 36 \Rightarrow p \neq \pm 6$$

**Answer:** All real values except $p = \pm 6$

**(ii) For no solution:**

$$\frac{p}{12} = \frac{3}{p} \neq \frac{-(p-3)}{-p}$$

From first equality: $p^2 = 36 \Rightarrow p = \pm 6$

For $p = 6$: $\frac{6}{12} = \frac{3}{6} = \frac{1}{2}$ and $\frac{-(6-3)}{-6} = \frac{-3}{-6} = \frac{1}{2}$

This gives infinite solutions, not no solution.

For $p = -6$: $\frac{-6}{12} = \frac{3}{-6} = -\frac{1}{2}$ and $\frac{-(-6-3)}{6} = \frac{9}{6} = \frac{3}{2}$

Since $-\frac{1}{2} \neq \frac{3}{2}$, this gives no solution.

**Answer:** $p = -6$
</details>

---

**Q52.** (a) Solve by cross-multiplication: $x + 2y + 1 = 0$ and $2x - 3y - 12 = 0$
(b) Verify your answer by substitution
(c) Find the value of m for which $y = mx - 3$ passes through the solution point

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Cross-multiplication method:**

Standard form: $x + 2y + 1 = 0$ and $2x - 3y - 12 = 0$

$$\frac{x}{(2)(-12) - (-3)(1)} = \frac{y}{(1)(2) - (-12)(1)} = \frac{1}{(1)(-3) - (2)(2)}$$

$$\frac{x}{-24 + 3} = \frac{y}{2 + 12} = \frac{1}{-3 - 4}$$

$$\frac{x}{-21} = \frac{y}{14} = \frac{1}{-7}$$

$$x = 3, \quad y = -2$$

**(b) Verification:**

Eq 1: $3 + 2(-2) + 1 = 3 - 4 + 1 = 0$ ✓
Eq 2: $2(3) - 3(-2) - 12 = 6 + 6 - 12 = 0$ ✓

**(c) For $y = mx - 3$ to pass through (3, -2):**

$$-2 = m(3) - 3$$
$$3m = 1 \Rightarrow m = \frac{1}{3}$$

**Answer:** (a) $x = 3$, $y = -2$ (b) Verified (c) $m = \frac{1}{3}$
</details>

---

**Q53.** (a) A part of monthly hostel charges is fixed and the remaining depends on the number of days one has taken food in the mess. Student A takes food for 20 days and pays ₹1000; Student B takes food for 26 days and pays ₹1180. Find the fixed charges and cost per day.
(b) If Student C pays ₹1270, for how many days did C take food?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Forming equations:**

Let fixed charge = ₹$x$, Cost per day = ₹$y$

For Student A: $x + 20y = 1000$ ... (i)
For Student B: $x + 26y = 1180$ ... (ii)

Subtract (i) from (ii):
$$6y = 180 \Rightarrow y = 30$$

From (i): $x + 600 = 1000 \Rightarrow x = 400$

**Fixed charges = ₹400, Cost per day = ₹30**

**(b) For Student C:**

$$400 + 30d = 1270$$
$$30d = 870 \Rightarrow d = 29$$

**Answer:** (a) Fixed = ₹400, Per day = ₹30 (b) 29 days
</details>

---

**Q54.** (a) Solve: $\frac{10}{x+y} + \frac{2}{x-y} = 4$ and $\frac{15}{x+y} - \frac{5}{x-y} = -2$
(b) Verify your solution
(c) Find the value of $\frac{x}{y}$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Substitution method:**

Let $u = \frac{1}{x+y}$ and $v = \frac{1}{x-y}$

$$10u + 2v = 4$$ ... (i)
$$15u - 5v = -2$$ ... (ii)

Multiply (i) by 5 and (ii) by 2:
$$50u + 10v = 20$$
$$30u - 10v = -4$$

Adding: $80u = 16 \Rightarrow u = \frac{1}{5}$

From (i): $2 + 2v = 4 \Rightarrow v = 1$

Now: $x + y = 5$ and $x - y = 1$

Adding: $2x = 6 \Rightarrow x = 3$
Then: $y = 2$

**(b) Verification:**

$$\frac{10}{5} + \frac{2}{1} = 2 + 2 = 4$$ ✓
$$\frac{15}{5} - \frac{5}{1} = 3 - 5 = -2$$ ✓

**(c) $\frac{x}{y} = \frac{3}{2}$**

**Answer:** (a) $x = 3$, $y = 2$ (b) Verified (c) $\frac{3}{2}$
</details>

---

**Q55.** (a) Draw the graphs of $x - y + 1 = 0$ and $3x + 2y - 12 = 0$
(b) Find the coordinates of the vertices of the triangle formed by these lines and the x-axis
(c) Calculate the area of this triangle

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) For graphing:**

**Line 1:** $x - y + 1 = 0 \Rightarrow y = x + 1$

| x | 0 | -1 |
|---|---|---|
| y | 1 | 0 |

**Line 2:** $3x + 2y - 12 = 0 \Rightarrow y = \frac{12-3x}{2}$

| x | 0 | 4 |
|---|---|---|
| y | 6 | 0 |

**Intersection:** Solving algebraically:
From Line 1: $y = x + 1$
Substitute in Line 2: $3x + 2(x+1) = 12$
$5x = 10 \Rightarrow x = 2$, $y = 3$

**(b) Vertices:**
- Intersection of lines: $(2, 3)$
- Line 1 meets x-axis: $(-1, 0)$
- Line 2 meets x-axis: $(4, 0)$

**(c) Area:**
Base = 4 - (-1) = 5 units
Height = 3 units

Area = $\frac{1}{2} \times 5 \times 3 = 7.5$ sq units

**Answer:** (b) Vertices: (2,3), (-1,0), (4,0) (c) Area = 7.5 sq units
</details>

---

**Q56.** (a) A boat goes 30 km upstream and 44 km downstream in 10 hours. In 13 hours, it can go 40 km upstream and 55 km downstream. Find the speed of boat in still water and speed of stream.
(b) How long would it take to go 50 km downstream?
(c) What is the ratio of upstream speed to downstream speed?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Forming equations:**

Let speed of boat = $x$ km/h, speed of stream = $y$ km/h

Upstream speed = $(x-y)$ km/h, Downstream speed = $(x+y)$ km/h

$$\frac{30}{x-y} + \frac{44}{x+y} = 10$$ ... (i)
$$\frac{40}{x-y} + \frac{55}{x+y} = 13$$ ... (ii)

Let $u = \frac{1}{x-y}$, $v = \frac{1}{x+y}$

$$30u + 44v = 10$$ ... (iii)
$$40u + 55v = 13$$ ... (iv)

Multiply (iii) by 4 and (iv) by 3:
$$120u + 176v = 40$$
$$120u + 165v = 39$$

Subtract: $11v = 1 \Rightarrow v = \frac{1}{11}$

From (iii): $30u + 4 = 10 \Rightarrow u = \frac{1}{5}$

So: $x - y = 5$ and $x + y = 11$

Solving: $x = 8$, $y = 3$

**(b) Time for 50 km downstream:**

Time = $\frac{50}{x+y} = \frac{50}{11}$ hours ≈ 4.55 hours

**(c) Ratio:**

Upstream : Downstream = $(x-y) : (x+y) = 5 : 11$

**Answer:** (a) Boat = 8 km/h, Stream = 3 km/h (b) $\frac{50}{11}$ hours (c) 5:11
</details>

---

**Q57.** (a) Solve by elimination: $23x + 35y = 103$ and $35x + 23y = 97$
(b) Verify by cross-multiplication method
(c) Find $x + y$ and $x - y$ without finding x and y individually

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Elimination method:**

Adding equations:
$$58x + 58y = 200$$
$$x + y = \frac{100}{29}$$ ... (i)

Subtracting:
$$12x - 12y = -6$$
$$x - y = -\frac{1}{2}$$ ... (ii)

Adding (i) and (ii):
$$2x = \frac{100}{29} - \frac{1}{2} = \frac{200-29}{58} = \frac{171}{58}$$
$$x = \frac{171}{116} = 2$$

From (i): $y = \frac{100}{29} - 2 = \frac{100-58}{29} = \frac{42}{29} = 3$

**Answer:** $x = 2$, $y = 3$

**(b) Cross-multiplication:** (Verification gives same result)

**(c) From above:**
$$x + y = 5$$
$$x - y = -1$$

**Answer:** (a) $x = 2$, $y = 3$ (b) Verified (c) $x+y = 5$, $x-y = -1$
</details>

---

**Q58.** (a) The sum of the digits of a two-digit number is 9. Also, nine times this number is twice the number obtained by reversing the digits. Find the number.
(b) What is the difference between the original number and reversed number?
(c) Verify the given condition.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Forming equations:**

Let unit digit = $x$, tens digit = $y$

Original number = $10y + x$
Reversed number = $10x + y$

Given:
$$x + y = 9$$ ... (i)
$$9(10y + x) = 2(10x + y)$$
$$90y + 9x = 20x + 2y$$
$$88y = 11x$$
$$x = 8y$$ ... (ii)

From (i): $8y + y = 9 \Rightarrow y = 1$
Then: $x = 8$

**Original number = 18**

**(b) Difference:**

Reversed - Original = $81 - 18 = 63$

**(c) Verification:**

Nine times original = $9 \times 18 = 162$
Twice reversed = $2 \times 81 = 162$ ✓

**Answer:** (a) 18 (b) 63 (c) Verified
</details>

---

**Q59.** (a) Places A and B are 100 km apart on a highway. One car starts from A and another from B at the same time. If they travel in same direction, they meet in 5 hours. If they travel towards each other, they meet in 1 hour. Find their speeds.
(b) How far from A do they meet when traveling in same direction?
(c) What is the ratio of their speeds?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Forming equations:**

Let speed of car from A = $x$ km/h, speed from B = $y$ km/h (assume $x > y$)

**Same direction:** Relative speed = $(x - y)$ km/h
$$x - y = \frac{100}{5} = 20$$ ... (i)

**Towards each other:** Relative speed = $(x + y)$ km/h
$$x + y = \frac{100}{1} = 100$$ ... (ii)

Adding (i) and (ii):
$$2x = 120 \Rightarrow x = 60$$

From (ii): $y = 40$

**Speeds: 60 km/h and 40 km/h**

**(b) Distance from A (same direction):**

Distance = Speed × Time = $60 \times 5 = 300$ km

**(c) Ratio:**

$x : y = 60 : 40 = 3 : 2$

**Answer:** (a) 60 km/h, 40 km/h (b) 300 km (c) 3:2
</details>

---

**Q60.** (a) Prove that if $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$, then the pair of equations has infinitely many solutions.
(b) Give an example with actual equations
(c) Draw the graph to illustrate

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

Given: $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2} = k$ (say)

Then: $a_1 = ka_2$, $b_1 = kb_2$, $c_1 = kc_2$

Equation 1: $a_1x + b_1y + c_1 = 0$
Substituting: $ka_2x + kb_2y + kc_2 = 0$
Dividing by k: $a_2x + b_2y + c_2 = 0$

This is identical to Equation 2. Hence, both equations represent the same line (coincident).

Every point on this line satisfies both equations → Infinitely many solutions.

**(b) Example:**

$2x + 3y - 6 = 0$ and $4x + 6y - 12 = 0$

Here: $\frac{2}{4} = \frac{3}{6} = \frac{-6}{-12} = \frac{1}{2}$

Both represent the same line: $2x + 3y = 6$

Solutions: (0, 2), (3, 0), (1.5, 1), ... (infinitely many)

**(c) Graph:**

```
    y
    |
  2 + * (0,2)
    |  \
    |   \
    |    \
  0 +-----\---- x
    |      \
    |       \
    |        * (3,0)
```

Both lines coincide (overlap completely).

**Answer:** Proved with example and graph
</details>

---

**Q61.** (a) Solve for x and y: $\frac{x}{a} + \frac{y}{b} = a + b$ and $\frac{x}{a^2} + \frac{y}{b^2} = 2$
(b) Verify that $x = a^2$ and $y = b^2$ satisfy the equations
(c) Find the value of $\frac{x}{y}$ when $a = 2$ and $b = 3$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Solving:**

Multiply first equation by $\frac{1}{a}$:
$$\frac{x}{a^2} + \frac{y}{ab} = 1 + \frac{b}{a}$$ ... (i)

Second equation:
$$\frac{x}{a^2} + \frac{y}{b^2} = 2$$ ... (ii)

Subtract (i) from (ii):
$$y\left(\frac{1}{b^2} - \frac{1}{ab}\right) = 2 - 1 - \frac{b}{a}$$
$$y\left(\frac{a-b}{ab^2}\right) = \frac{a-b}{a}$$

$$y = b^2$$

Substitute in first equation:
$$\frac{x}{a} + \frac{b^2}{b} = a + b$$
$$\frac{x}{a} + b = a + b$$
$$x = a^2$$

**(b) Verification:**

Eq 1: $\frac{a^2}{a} + \frac{b^2}{b} = a + b$ ✓
Eq 2: $\frac{a^2}{a^2} + \frac{b^2}{b^2} = 1 + 1 = 2$ ✓

**(c) When $a = 2$, $b = 3$:**

$$\frac{x}{y} = \frac{a^2}{b^2} = \frac{4}{9}$$

**Answer:** (a) $x = a^2$, $y = b^2$ (b) Verified (c) $\frac{4}{9}$
</details>

---

**Q62.** (a) The angles of a triangle are $(x - 40)°$, $(x - 20)°$, and $(\frac{1}{2}x - 10)°$. Find x and all three angles.
(b) Verify using angle sum property
(c) Classify the triangle based on angles

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding x:**

Sum of angles = 180°

$$(x - 40) + (x - 20) + \left(\frac{1}{2}x - 10\right) = 180$$
$$2x + \frac{1}{2}x - 70 = 180$$
$$\frac{5x}{2} = 250$$
$$x = 100$$

**Angles:**
- $\angle A = 100 - 40 = 60°$
- $\angle B = 100 - 20 = 80°$
- $\angle C = \frac{100}{2} - 10 = 40°$

**(b) Verification:**

$60° + 80° + 40° = 180°$ ✓

**(c) Classification:**

All angles are less than 90° → **Acute-angled triangle**

All angles are different → **Scalene triangle**

**Answer:** (a) $x = 100$, Angles: 60°, 80°, 40° (b) Verified (c) Acute scalene triangle
</details>

---

**Q63.** (a) A railway half ticket costs half the full fare but the reservation charges are the same. A reserved first class ticket from station A to B costs ₹2530 and a reserved first class ticket with half fare costs ₹1370. Find the full basic fare and reservation charges.
(b) What would be the cost of 2 half tickets?
(c) How much would be saved by buying 2 half tickets instead of 1 full ticket?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Forming equations:**

Let basic fare = ₹$x$, Reservation charge = ₹$y$

Full ticket: $x + y = 2530$ ... (i)
Half ticket: $\frac{x}{2} + y = 1370$ ... (ii)

Multiply (ii) by 2:
$$x + 2y = 2740$$ ... (iii)

Subtract (i) from (iii):
$$y = 210$$

From (i): $x + 210 = 2530 \Rightarrow x = 2320$

**Basic fare = ₹2320, Reservation = ₹210**

**(b) Cost of 2 half tickets:**

$$2 \times 1370 = ₹2740$$

**(c) Savings:**

$$2740 - 2530 = ₹210$$

**Answer:** (a) Fare = ₹2320, Reservation = ₹210 (b) ₹2740 (c) ₹210
</details>

---

**Q64.** (a) Solve: $ax + by = a - b$ and $bx - ay = a + b$
(b) Verify that $x = 1$ and $y = -1$ is the solution
(c) For what value of a and b will the solution be $x = 2$, $y = -1$?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Solving:**

Multiply Eq 1 by $a$ and Eq 2 by $b$:
$$a^2x + aby = a^2 - ab$$
$$b^2x - aby = ab + b^2$$

Adding:
$$(a^2 + b^2)x = a^2 + b^2$$
$$x = 1$$

Substitute in Eq 1:
$$a + by = a - b$$
$$by = -b$$
$$y = -1$$

**(b) Verification:**

Eq 1: $a(1) + b(-1) = a - b$ ✓
Eq 2: $b(1) - a(-1) = b + a = a + b$ ✓

**(c) For $x = 2$, $y = -1$:**

From Eq 1: $2a - b = a - b \Rightarrow a = 0$
From Eq 2: $2b + a = a + b \Rightarrow b = 0$

But if $a = b = 0$, equations become $0 = 0$ (trivial).

**Answer:** (a) $x = 1$, $y = -1$ (b) Verified (c) Not possible for non-trivial case
</details>

---

**Q65.** (a) Explain with examples how to identify whether a pair of linear equations has:
(i) Unique solution (ii) No solution (iii) Infinitely many solutions

(b) Create one example of each type with actual equations

(c) Draw rough sketches of all three cases

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Identification Method:**

For $a_1x + b_1y + c_1 = 0$ and $a_2x + b_2y + c_2 = 0$:

**(i) Unique Solution:** $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$

Example: $x + y = 3$ and $2x - y = 1$
$\frac{1}{2} \neq \frac{1}{-1}$ → Intersecting lines

**(ii) No Solution:** $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$

Example: $x + y = 3$ and $x + y = 5$
$\frac{1}{1} = \frac{1}{1} \neq \frac{-3}{-5}$ → Parallel lines

**(iii) Infinitely Many:** $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$

Example: $x + y = 3$ and $2x + 2y = 6$
$\frac{1}{2} = \frac{1}{2} = \frac{-3}{-6}$ → Coincident lines

**(b) Examples:**

(i) Unique: $2x + 3y = 7$ and $x - y = 1$ (Solution: $x = 2, y = 1$)

(ii) No solution: $2x + 3y = 5$ and $4x + 6y = 7$

(iii) Infinite: $x + 2y = 4$ and $2x + 4y = 8$

**(c) Sketches:**

```
Unique          No Solution        Infinite
  y                y                  y
  | \              |----              |----
  |  \             |----              |----
  |   \            |                  |
--+----+-- x   --+----+-- x       --+----+-- x
  |                |                  |
Intersecting      Parallel         Coincident
```

**Answer:** Explained with examples and sketches
</details>

---

## 6. Exam-Oriented Preparation

### 📝 Important Formulas & Methods to Memorize

#### General Form:

$$ ax + by + c = 0 \quad \text{(where } a^2 + b^2 \neq 0\text{)} $$

#### Conditions for Solutions:

| Condition | Type | Solutions |
|-----------|------|-----------|
| $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$ | Consistent | Unique |
| $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$ | Dependent | Infinite |
| $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$ | Inconsistent | None |

#### Cross-Multiplication Formula:

$$ \frac{x}{b_1c_2 - b_2c_1} = \frac{y}{c_1a_2 - c_2a_1} = \frac{1}{a_1b_2 - a_2b_1} $$

#### Solution Methods:

| Method | Best Used When |
|--------|----------------|
| Substitution | One variable has coefficient 1 |
| Elimination | Coefficients can be easily matched |
| Cross-multiplication | Any general case |
| Graphical | Visual understanding needed |

---

### 🎯 Expected Question Patterns (CBSE Class 10)

#### 1 Mark Questions (MCQ/Very Short Answer):
- Identify type of solution from coefficients
- Find value of k for specific condition
- Simple substitution to verify solution
- Identify method suitable for given pair

#### 2 Mark Questions (Short Answer):
- Solve by specified method
- Form equations from simple statements
- Find unknown parameter value
- Graph-based intersection problems

#### 3 Mark Questions (Long Answer):
- Word problems (age, digits, fractions)
- Equations reducible to linear form
- Area calculations with graphs
- Multi-step applications

#### 5 Mark Questions (Very Long Answer):
- Complex word problems (boats, trains, work)
- Prove and verify type solutions
- Multiple part questions with verification
- Real-life scenario modeling

---

### 💡 Exam Tips:

1. ✅ **Always write in standard form** before comparing ratios
2. ✅ **Check your answer** by substituting in both equations
3. ✅ **Draw neat graphs** with proper scale and labeling
4. ✅ **Define variables clearly** in word problems
5. ✅ **Write units** in final answers for word problems
6. ✅ **Show all steps** in cross-multiplication method
7. ✅ **Verify conditions** before concluding type of solution
8. ✅ **Practice mental math** for faster calculations

---

### 🔴 Common Mistakes to Avoid:

| Mistake | Correction |
|---------|------------|
| Wrong sign in standard form | Write as $ax + by + c = 0$ carefully |
| Confusing $\frac{c_1}{c_2}$ sign | Include negative sign from standard form |
| Arithmetic errors in elimination | Double-check addition/subtraction |
| Forgetting to back-substitute | Always find both variables |
| Not verifying word problem answers | Check if answer makes practical sense |
| Incorrect graph scales | Use consistent scale on both axes |
| Missing units in final answer | Always include units (km, ₹, years, etc.) |

---

### 📚 Previous Year Questions (CBSE Pattern)

**Q1 (CBSE 2024):** Solve: $x + y = 5$ and $2x - 3y = 4$

**Answer:** $x = \frac{19}{5}$, $y = \frac{6}{5}$

---

**Q2 (CBSE 2023):** For what value of k will $3x + y = 1$ and $(2k-1)x + (k-1)y = 2k+1$ have no solution?

**Answer:** $k = 2$

---

**Q3 (CBSE 2023):** The sum of digits of a two-digit number is 9. Nine times the number is twice the reversed number. Find the number.

**Answer:** 18

---

**Q4 (CBSE 2022):** Solve by cross-multiplication: $2x + y = 35$ and $3x + 4y = 65$

**Answer:** $x = 15$, $y = 5$

---

**Q5 (CBSE 2022):** A boat goes 30 km upstream and 44 km downstream in 10 hours. Find speeds.

**Answer:** Boat = 8 km/h, Stream = 3 km/h

---

**Q6 (CBSE 2021):** Draw graph of $x + y = 4$ and $x - y = 2$. Find intersection point.

**Answer:** (3, 1)

---

**Q7 (CBSE 2021):** Five years hence, Jacob's age will be three times his son's age. Five years ago, Jacob was seven times his son's age. Find present ages.

**Answer:** Jacob = 40 years, Son = 10 years

---

**Q8 (CBSE 2020):** Solve: $\frac{2}{x} + \frac{3}{y} = 13$ and $\frac{5}{x} - \frac{4}{y} = -2$

**Answer:** $x = \frac{1}{2}$, $y = \frac{1}{3}$

---

**Q9 (CBSE 2020):** Check whether $5x - 4y + 8 = 0$ and $7x + 6y - 9 = 0$ intersect.

**Answer:** Yes, intersecting lines (unique solution)

---

**Q10 (CBSE 2019):** A fraction becomes $\frac{9}{11}$ if 2 is added to both terms. If 3 is added, it becomes $\frac{5}{6}$. Find the fraction.

**Answer:** $\frac{7}{9}$

---

## 7. Revision Notes

### 📌 Quick Revision Sheet

#### Key Definitions:

| Term | Definition |
|------|------------|
| **Linear Equation** | Equation of degree 1 in two variables |
| **Solution** | Pair (x, y) satisfying the equation |
| **Consistent** | Has at least one solution |
| **Inconsistent** | Has no solution |
| **Dependent** | Infinitely many solutions |

---

#### Important Conditions:

**For $a_1x + b_1y + c_1 = 0$ and $a_2x + b_2y + c_2 = 0$:**

| Type | Condition | Graph |
|------|-----------|-------|
| Unique | $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$ | Intersecting |
| Infinite | $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$ | Coincident |
| No solution | $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$ | Parallel |

---

#### Methods of Solution:

**1. Substitution:**
- Express one variable in terms of other
- Substitute and solve

**2. Elimination:**
- Make coefficients equal
- Add or subtract

**3. Cross-Multiplication:**
$$ \frac{x}{b_1c_2 - b_2c_1} = \frac{y}{c_1a_2 - c_2a_1} = \frac{1}{a_1b_2 - a_2b_1} $$

---

#### Common Word Problem Types:

| Type | Variables | Key Relations |
|------|-----------|---------------|
| Age | Present ages | Past/Future adjustments |
| Digits | Unit, tens digits | Place value (10y + x) |
| Fractions | Numerator, denominator | Addition/subtraction |
| Speed | Speed, time, distance | Distance = Speed × Time |
| Work | Days, efficiency | Work = Rate × Time |

---

#### Graph Types:

```
Intersecting:      Parallel:         Coincident:
   \                  ----              ----
    \                 ----              ----
-----\----       ------+------       ------+------
      \                                   
```

---

### 🎓 Final Checklist Before Exam:

- [ ] I can identify the type of solution from coefficients
- [ ] I can solve by substitution method
- [ ] I can solve by elimination method
- [ ] I can solve by cross-multiplication method
- [ ] I can form equations from word problems
- [ ] I can draw graphs and find intersection
- [ ] I can solve equations reducible to linear form
- [ ] I can verify my solutions
- [ ] I know all three conditions for solutions
- [ ] I have practiced all 30 MCQs
- [ ] I have practiced all 20 Short Answer questions
- [ ] I have practiced all 15 Long Answer questions

---

### 📊 Quick Formula Sheet:

**Standard Form:**
$$ a_1x + b_1y + c_1 = 0 $$
$$ a_2x + b_2y + c_2 = 0 $$

**Solution Conditions:**
$$ \text{Unique: } \frac{a_1}{a_2} \neq \frac{b_1}{b_2} $$
$$ \text{Infinite: } \frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2} $$
$$ \text{No solution: } \frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2} $$

**Cross-Multiplication:**
$$ \frac{x}{b_1c_2 - b_2c_1} = \frac{y}{c_1a_2 - c_2a_1} = \frac{1}{a_1b_2 - a_2b_1} $$

**Distance-Speed-Time:**
$$ \text{Distance} = \text{Speed} \times \text{Time} $$

---

**Good luck with your studies! 🌟**

> Remember: Practice forming equations from word problems daily to master this chapter!

---

**End of Learning Path - Pair of Linear Equations in Two Variables**
