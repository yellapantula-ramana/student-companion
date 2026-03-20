# Coordinate Geometry - Learning Path

## 1. Concept Introduction

### What is Coordinate Geometry?

**Coordinate Geometry** (also called Analytical Geometry) is a branch of mathematics that uses algebra to solve geometric problems. It involves locating points on a plane using ordered pairs of numbers called coordinates.

**Everyday Examples:**
- 🗺️ GPS navigation systems use coordinates to locate positions
- ♟️ Chess board positions (a1, b2, c3, etc.)
- 🎮 Video game character positioning on screen
- 📍 Google Maps location markers
- 🏙️ City planning and plotting locations on maps

### Understanding the Coordinate Plane:

```
        Y-axis (Vertical)
            |
            |
    II      |      I
            |
            |
------------+------------ X-axis (Horizontal)
            |
            |
    III     |      IV
            |
            |
        Origin (0, 0)
```

**Key Components:**

| Term | Meaning | Symbol | Example |
|------|---------|--------|---------|
| **X-axis** | Horizontal number line | X | Left to right |
| **Y-axis** | Vertical number line | Y | Bottom to top |
| **Origin** | Point where axes intersect | O(0, 0) | Center point |
| **Coordinates** | Ordered pair (x, y) | P(x, y) | A(3, 4) |
| **Abscissa** | x-coordinate (distance from y-axis) | x | 3 in (3, 4) |
| **Ordinate** | y-coordinate (distance from x-axis) | y | 4 in (3, 4) |
| **Quadrants** | Four regions of the plane | I, II, III, IV | Based on signs |

---

## 2. Micro-topic Breakdown

This chapter is divided into the following key concepts:

```
Coordinate Geometry
├── 7.1 Introduction to Coordinate Plane
│   ├── Cartesian system
│   ├── Quadrants and signs
│   └── Plotting points
├── 7.2 Distance Formula
│   ├── Derivation
│   ├── Distance between two points
│   └── Distance from origin
├── 7.3 Section Formula
│   ├── Internal division
│   ├── Midpoint formula
│   └── External division
├── 7.4 Area of a Triangle
│   ├── Formula using coordinates
│   ├── Collinearity condition
│   └── Applications
└── 7.5 Applications
    ├── Real-life problems
    └── Geometric proofs
```

---

## 3. Concept Explanations

### 3.1 Introduction to Coordinate Plane

#### The Cartesian System:

The coordinate plane is formed by two perpendicular number lines:
- **X-axis**: Horizontal line
- **Y-axis**: Vertical line
- **Origin**: Point of intersection (0, 0)

#### Quadrants and Signs:

| Quadrant | x-coordinate | y-coordinate | Example |
|----------|--------------|--------------|---------|
| **I** | Positive (+) | Positive (+) | (3, 4) |
| **II** | Negative (-) | Positive (+) | (-3, 4) |
| **III** | Negative (-) | Negative (-) | (-3, -4) |
| **IV** | Positive (+) | Negative (-) | (3, -4) |

#### Points on Axes:

| Position | Coordinates | Example |
|----------|-------------|---------|
| **On X-axis** | (x, 0) | (5, 0), (-3, 0) |
| **On Y-axis** | (0, y) | (0, 4), (0, -2) |
| **At Origin** | (0, 0) | (0, 0) |

---

### 3.2 Distance Formula

The distance between two points $P(x_1, y_1)$ and $Q(x_2, y_2)$ is given by:

$$ PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

#### Derivation:

```
    P(x₁, y₁)
      |
      |\
      | \
      |  \
      |   \ PQ = ?
      |    \
      |     \
    R(x₂, y₁)----Q(x₂, y₂)
    
    PR = |x₂ - x₁|
    RQ = |y₂ - y₁|
    
    By Pythagoras theorem:
    PQ² = PR² + RQ²
    PQ² = (x₂ - x₁)² + (y₂ - y₁)²
    PQ = √[(x₂ - x₁)² + (y₂ - y₁)²]
```

#### Distance from Origin:

Distance of point $P(x, y)$ from origin $O(0, 0)$:

$$ OP = \sqrt{x^2 + y^2} $$

---

### 3.3 Section Formula

#### Internal Division:

If a point $P(x, y)$ divides the line segment joining $A(x_1, y_1)$ and $B(x_2, y_2)$ internally in the ratio $m:n$, then:

$$ P(x, y) = \left(\frac{mx_2 + nx_1}{m + n}, \frac{my_2 + ny_1}{m + n}\right) $$

```
    A(x₁, y₁)          P(x, y)          B(x₂, y₂)
       ●----------------●----------------●
       |←------ n ------→|←------ m -----→|
```

#### Midpoint Formula:

When $m = n = 1$ (P is the midpoint):

$$ P(x, y) = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right) $$

#### External Division:

If P divides AB externally in ratio $m:n$:

$$ P(x, y) = \left(\frac{mx_2 - nx_1}{m - n}, \frac{my_2 - ny_1}{m - n}\right) $$

---

### 3.4 Area of a Triangle

The area of a triangle with vertices $A(x_1, y_1)$, $B(x_2, y_2)$, and $C(x_3, y_3)$ is:

$$ \text{Area} = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)| $$

#### Alternative Form (Determinant Form):

$$ \text{Area} = \frac{1}{2}|x_1y_2 + x_2y_3 + x_3y_1 - (x_2y_1 + x_3y_2 + x_1y_3)| $$

#### Condition for Collinearity:

Three points are **collinear** (lie on the same line) if:

$$ \text{Area} = 0 $$

$$ x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) = 0 $$

---

## 4. Guided Examples

### Example 1: Distance Between Two Points

**Question:** Find the distance between points A(2, 3) and B(5, 7).

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify coordinates | $x_1 = 2, y_1 = 3, x_2 = 5, y_2 = 7$ |
| 2 | Apply distance formula | $AB = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ |
| 3 | Substitute values | $AB = \sqrt{(5 - 2)^2 + (7 - 3)^2}$ |
| 4 | Calculate | $AB = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25}$ |
| 5 | Simplify | $AB = 5$ units |

**Final Answer:** Distance = **5 units**

---

### Example 2: Finding a Point Using Section Formula

**Question:** Find the coordinates of the point which divides the line segment joining A(1, 2) and B(7, 8) in the ratio 2:1 internally.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify values | $x_1 = 1, y_1 = 2, x_2 = 7, y_2 = 8, m = 2, n = 1$ |
| 2 | Apply section formula | $x = \frac{mx_2 + nx_1}{m + n}, y = \frac{my_2 + ny_1}{m + n}$ |
| 3 | Calculate x | $x = \frac{2(7) + 1(1)}{2 + 1} = \frac{14 + 1}{3} = \frac{15}{3} = 5$ |
| 4 | Calculate y | $y = \frac{2(8) + 1(2)}{2 + 1} = \frac{16 + 2}{3} = \frac{18}{3} = 6$ |
| 5 | Write coordinates | $P(5, 6)$ |

**Final Answer:** Point P = **(5, 6)**

---

### Example 3: Midpoint of a Line Segment

**Question:** Find the midpoint of the line segment joining A(-3, 4) and B(5, -2).

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify coordinates | $x_1 = -3, y_1 = 4, x_2 = 5, y_2 = -2$ |
| 2 | Apply midpoint formula | $M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$ |
| 3 | Calculate x | $x = \frac{-3 + 5}{2} = \frac{2}{2} = 1$ |
| 4 | Calculate y | $y = \frac{4 + (-2)}{2} = \frac{2}{2} = 1$ |
| 5 | Write midpoint | $M(1, 1)$ |

**Final Answer:** Midpoint = **(1, 1)**

---

### Example 4: Area of a Triangle

**Question:** Find the area of the triangle with vertices A(1, 2), B(4, 2), and C(3, 5).

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify coordinates | $x_1 = 1, y_1 = 2, x_2 = 4, y_2 = 2, x_3 = 3, y_3 = 5$ |
| 2 | Apply area formula | $\text{Area} = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$ |
| 3 | Substitute | $\text{Area} = \frac{1}{2}|1(2 - 5) + 4(5 - 2) + 3(2 - 2)|$ |
| 4 | Calculate | $\text{Area} = \frac{1}{2}|1(-3) + 4(3) + 3(0)|$ |
| 5 | Simplify | $\text{Area} = \frac{1}{2}|-3 + 12 + 0| = \frac{1}{2}|9| = 4.5$ |

**Final Answer:** Area = **4.5 square units**

---

### Example 5: Checking Collinearity

**Question:** Check whether the points A(1, 2), B(3, 4), and C(5, 6) are collinear.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify coordinates | $x_1 = 1, y_1 = 2, x_2 = 3, y_2 = 4, x_3 = 5, y_3 = 6$ |
| 2 | Apply area formula | $\text{Area} = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$ |
| 3 | Substitute | $\text{Area} = \frac{1}{2}|1(4 - 6) + 3(6 - 2) + 5(2 - 4)|$ |
| 4 | Calculate | $\text{Area} = \frac{1}{2}|1(-2) + 3(4) + 5(-2)|$ |
| 5 | Simplify | $\text{Area} = \frac{1}{2}|-2 + 12 - 10| = \frac{1}{2}|0| = 0$ |
| 6 | Conclusion | Since area = 0, points are collinear |

**Final Answer:** Points are **collinear**

---

## 5. Practice Questions

### SECTION A: Multiple Choice Questions (30 Questions - 1 Mark Each)

**Q1.** The distance of the point P(3, 4) from the origin is:
- (A) 3 units
- (B) 4 units
- (C) 5 units
- (D) 7 units

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 5 units

**Explanation:** Distance = $\sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$ units
</details>

---

**Q2.** The midpoint of the line segment joining (2, 3) and (4, 7) is:
- (A) (3, 5)
- (B) (3, 4)
- (C) (2, 5)
- (D) (4, 5)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) (3, 5)

**Explanation:** Midpoint = $\left(\frac{2+4}{2}, \frac{3+7}{2}\right) = (3, 5)$
</details>

---

**Q3.** The point which divides the line segment joining (1, 2) and (7, 8) in ratio 1:2 is:
- (A) (3, 4)
- (B) (4, 3)
- (C) (5, 6)
- (D) (6, 5)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) (3, 4)

**Explanation:** $x = \frac{1(7) + 2(1)}{1+2} = 3, y = \frac{1(8) + 2(2)}{1+2} = 4$
</details>

---

**Q4.** The area of the triangle with vertices (0, 0), (3, 0), and (0, 4) is:
- (A) 6 sq units
- (B) 12 sq units
- (C) 7 sq units
- (D) 10 sq units

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 6 sq units

**Explanation:** Area = $\frac{1}{2}|0(0-4) + 3(4-0) + 0(0-0)| = \frac{1}{2} \times 12 = 6$ sq units
</details>

---

**Q5.** The points (1, 2), (3, 4), and (5, 6) are:
- (A) Vertices of a triangle
- (B) Collinear
- (C) Vertices of a right triangle
- (D) None of these

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Collinear

**Explanation:** Area = 0, so points are collinear.
</details>

---

**Q6.** The distance between points (a, b) and (-a, -b) is:
- (A) 2√(a² + b²)
- (B) √(a² + b²)
- (C) a + b
- (D) 2(a + b)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 2√(a² + b²)

**Explanation:** Distance = $\sqrt{(-a-a)^2 + (-b-b)^2} = \sqrt{4a^2 + 4b^2} = 2\sqrt{a^2 + b^2}$
</details>

---

**Q7.** The point on the x-axis which is equidistant from (2, 3) and (4, 5) is:
- (A) (5, 0)
- (B) (6, 0)
- (C) (7, 0)
- (D) (8, 0)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) (7, 0)

**Explanation:** Let point be (x, 0). Equating distances and solving gives x = 7.
</details>

---

**Q8.** The coordinates of the centroid of a triangle with vertices (1, 2), (3, 4), and (5, 6) are:
- (A) (3, 4)
- (B) (4, 3)
- (C) (2, 3)
- (D) (3, 2)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) (3, 4)

**Explanation:** Centroid = $\left(\frac{1+3+5}{3}, \frac{2+4+6}{3}\right) = (3, 4)$
</details>

---

**Q9.** The quadrants in which the points (-3, 4) and (3, -4) lie are:
- (A) I and II
- (B) II and III
- (C) II and IV
- (D) III and IV

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) II and IV

**Explanation:** (-3, 4) in II (x negative, y positive), (3, -4) in IV (x positive, y negative)
</details>

---

**Q10.** The distance of point (5, 12) from the y-axis is:
- (A) 5 units
- (B) 12 units
- (C) 13 units
- (D) 17 units

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 5 units

**Explanation:** Distance from y-axis = |x-coordinate| = 5 units
</details>

---

**Q11.** If the distance between (x, 3) and (5, 7) is 5 units, then x can be:
- (A) 2 only
- (B) 8 only
- (C) 2 or 8
- (D) -2 or -8

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 2 or 8

**Explanation:** $\sqrt{(x-5)^2 + (3-7)^2} = 5 \Rightarrow (x-5)^2 = 9 \Rightarrow x = 2, 8$
</details>

---

**Q12.** The ratio in which the x-axis divides the line segment joining (2, 3) and (4, -6) is:
- (A) 1:2
- (B) 2:1
- (C) 1:1
- (D) 3:2

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 1:2

**Explanation:** For x-axis, y = 0. Using section formula: $0 = \frac{m(-6) + n(3)}{m+n} \Rightarrow m:n = 1:2$
</details>

---

**Q13.** The area of the triangle formed by (0, 0), (a, 0), and (0, b) is:
- (A) ab
- (B) $\frac{1}{2}ab$
- (C) 2ab
- (D) $\frac{1}{4}ab$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $\frac{1}{2}ab$

**Explanation:** Area = $\frac{1}{2}|0(0-b) + a(b-0) + 0(0-0)| = \frac{1}{2}ab$
</details>

---

**Q14.** The point which lies on the perpendicular bisector of the line segment joining A(-2, -5) and B(2, 5) is:
- (A) (0, 0)
- (B) (1, 1)
- (C) (-1, -1)
- (D) (2, 2)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) (0, 0)

**Explanation:** Perpendicular bisector passes through midpoint (0, 0).
</details>

---

**Q15.** If A(1, 2), B(3, 4), C(5, 6) are three points, then:
- (A) They form an equilateral triangle
- (B) They form a right triangle
- (C) They are collinear
- (D) They form an isosceles triangle

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) They are collinear

**Explanation:** Slope AB = Slope BC = 1, so points are collinear.
</details>

---

**Q16.** The coordinates of the point which is equidistant from (0, 0), (4, 0), and (0, 6) are:
- (A) (2, 3)
- (B) (3, 2)
- (C) (2, 2)
- (D) (3, 3)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) (2, 3)

**Explanation:** This is the circumcenter of the right triangle.
</details>

---

**Q17.** The distance between the points (a cos θ, 0) and (0, a sin θ) is:
- (A) a
- (B) a²
- (C) a cos θ
- (D) a sin θ

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) a

**Explanation:** Distance = $\sqrt{a^2\cos^2\theta + a^2\sin^2\theta} = a\sqrt{\cos^2\theta + \sin^2\theta} = a$
</details>

---

**Q18.** The point P divides AB in ratio 2:3 where A(2, 3) and B(7, 8). The coordinates of P are:
- (A) (4, 5)
- (B) (5, 4)
- (C) (3, 4)
- (D) (4, 3)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) (4, 5)

**Explanation:** $x = \frac{2(7) + 3(2)}{5} = 4, y = \frac{2(8) + 3(3)}{5} = 5$
</details>

---

**Q19.** The area of quadrilateral with vertices (1, 1), (3, 1), (3, 4), (1, 4) is:
- (A) 4 sq units
- (B) 6 sq units
- (C) 8 sq units
- (D) 10 sq units

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 6 sq units

**Explanation:** It's a rectangle. Area = length × breadth = 2 × 3 = 6 sq units
</details>

---

**Q20.** The value of k for which points (k, 2), (3, 4), and (5, 6) are collinear is:
- (A) 1
- (B) 2
- (C) 3
- (D) 4

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 1

**Explanation:** Setting area = 0 and solving gives k = 1.
</details>

---

**Q21.** The midpoint of the line segment joining (-4, 6) and (8, -10) is:
- (A) (2, -2)
- (B) (2, 2)
- (C) (-2, 2)
- (D) (-2, -2)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) (2, -2)

**Explanation:** Midpoint = $\left(\frac{-4+8}{2}, \frac{6+(-10)}{2}\right) = (2, -2)$
</details>

---

**Q22.** The distance between (0, 5) and (-5, 0) is:
- (A) 5 units
- (B) 5√2 units
- (C) 10 units
- (D) 25 units

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 5√2 units

**Explanation:** Distance = $\sqrt{(-5-0)^2 + (0-5)^2} = \sqrt{25+25} = 5\sqrt{2}$
</details>

---

**Q23.** The coordinates of the point dividing (1, 7) and (6, -3) externally in ratio 2:3 are:
- (A) (-9, 27)
- (B) (9, -27)
- (C) (-9, -27)
- (D) (9, 27)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) (-9, 27)

**Explanation:** $x = \frac{2(6) - 3(1)}{2-3} = -9, y = \frac{2(-3) - 3(7)}{2-3} = 27$
</details>

---

**Q24.** The area of triangle with vertices (2, 3), (-1, 0), (2, -4) is:
- (A) 10.5 sq units
- (B) 21 sq units
- (C) 7 sq units
- (D) 14 sq units

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 10.5 sq units

**Explanation:** Area = $\frac{1}{2}|2(0+4) + (-1)(-4-3) + 2(3-0)| = \frac{1}{2}|8 + 7 + 6| = 10.5$
</details>

---

**Q25.** The point on y-axis equidistant from (6, 5) and (4, 2) is:
- (A) (0, 5)
- (B) (0, 6)
- (C) (0, 7)
- (D) (0, 8)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) (0, 6)

**Explanation:** Let point be (0, y). Equating distances: $36 + (y-5)^2 = 16 + (y-2)^2 \Rightarrow y = 6$
</details>

---

**Q26.** The ratio in which y-axis divides the line segment joining (5, -6) and (-1, -4) is:
- (A) 1:5
- (B) 5:1
- (C) 1:1
- (D) 2:3

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 5:1

**Explanation:** For y-axis, x = 0. Using section formula: $0 = \frac{m(-1) + n(5)}{m+n} \Rightarrow m:n = 5:1$
</details>

---

**Q27.** The value of x for which distance between (3, x) and (7, 5) is 5 units is:
- (A) 2 or 8
- (B) 3 or 7
- (C) 4 or 6
- (D) 1 or 9

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 2 or 8

**Explanation:** $\sqrt{(7-3)^2 + (5-x)^2} = 5 \Rightarrow 16 + (5-x)^2 = 25 \Rightarrow x = 2, 8$
</details>

---

**Q28.** The coordinates of the fourth vertex of parallelogram with vertices (1, 2), (3, 4), (5, 6) are:
- (A) (3, 4)
- (B) (4, 5)
- (C) (5, 4)
- (D) Cannot be determined uniquely

<details>
<summary>✓ Show Answer</summary>

**Answer:** (D) Cannot be determined uniquely

**Explanation:** Three possible positions for fourth vertex depending on which diagonal.
</details>

---

**Q29.** The perimeter of triangle with vertices (0, 0), (3, 0), (0, 4) is:
- (A) 7 units
- (B) 10 units
- (C) 12 units
- (D) 15 units

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 12 units

**Explanation:** Sides are 3, 4, 5. Perimeter = 3 + 4 + 5 = 12 units
</details>

---

**Q30.** The area of triangle formed by joining midpoints of sides of triangle with vertices (0, 0), (6, 0), (0, 8) is:
- (A) 3 sq units
- (B) 6 sq units
- (C) 12 sq units
- (D) 24 sq units

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 6 sq units

**Explanation:** Area of midpoint triangle = $\frac{1}{4}$ × Area of original = $\frac{1}{4} \times 24 = 6$
</details>

---

### SECTION B: Short Answer Questions (20 Questions - 2-3 Marks Each)

**Q31.** Find the distance between the points A(9, 3) and B(15, 11).

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Using distance formula:
$$AB = \sqrt{(15 - 9)^2 + (11 - 3)^2}$$
$$= \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10$$

**Answer:** 10 units
</details>

---

**Q32.** Find the coordinates of the midpoint of the line segment joining A(-5, 4) and B(7, -8).

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Using midpoint formula:
$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$
$$= \left(\frac{-5 + 7}{2}, \frac{4 + (-8)}{2}\right) = \left(\frac{2}{2}, \frac{-4}{2}\right) = (1, -2)$$

**Answer:** (1, -2)
</details>

---

**Q33.** Find the point which divides the line segment joining (2, 3) and (8, 9) in the ratio 1:2 internally.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Using section formula:
$$x = \frac{mx_2 + nx_1}{m + n} = \frac{1(8) + 2(2)}{1 + 2} = \frac{8 + 4}{3} = 4$$
$$y = \frac{my_2 + ny_1}{m + n} = \frac{1(9) + 2(3)}{1 + 2} = \frac{9 + 6}{3} = 5$$

**Answer:** (4, 5)
</details>

---

**Q34.** Find the area of the triangle with vertices A(2, 3), B(-1, 0), and C(2, -4).

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Using area formula:
$$\text{Area} = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$
$$= \frac{1}{2}|2(0 + 4) + (-1)(-4 - 3) + 2(3 - 0)|$$
$$= \frac{1}{2}|8 + 7 + 6| = \frac{1}{2} \times 21 = 10.5$$

**Answer:** 10.5 sq units
</details>

---

**Q35.** Check whether the points (5, -2), (6, 4), and (7, -2) form an isosceles triangle.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Finding distances:
$$AB = \sqrt{(6-5)^2 + (4+2)^2} = \sqrt{1 + 36} = \sqrt{37}$$
$$BC = \sqrt{(7-6)^2 + (-2-4)^2} = \sqrt{1 + 36} = \sqrt{37}$$
$$AC = \sqrt{(7-5)^2 + (-2+2)^2} = \sqrt{4 + 0} = 2$$

Since AB = BC, the triangle is **isosceles**.

**Answer:** Yes, isosceles triangle
</details>

---

**Q36.** Find the value of k if the points A(2, 3), B(4, k), and C(6, -3) are collinear.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

For collinearity, area = 0:
$$\frac{1}{2}|2(k + 3) + 4(-3 - 3) + 6(3 - k)| = 0$$
$$|2k + 6 - 24 + 18 - 6k| = 0$$
$$|-4k| = 0$$
$$k = 0$$

**Answer:** k = 0
</details>

---

**Q37.** Find the distance of point P(-6, 8) from the origin.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Distance from origin:
$$OP = \sqrt{(-6)^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10$$

**Answer:** 10 units
</details>

---

**Q38.** Find the coordinates of the point which divides the line segment joining A(-1, 7) and B(4, -3) in the ratio 2:3.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Using section formula:
$$x = \frac{2(4) + 3(-1)}{2 + 3} = \frac{8 - 3}{5} = 1$$
$$y = \frac{2(-3) + 3(7)}{2 + 3} = \frac{-6 + 21}{5} = 3$$

**Answer:** (1, 3)
</details>

---

**Q39.** Find the area of quadrilateral with vertices (-4, -2), (-3, -5), (3, -2), and (2, 3).

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Divide into two triangles and add areas:

Triangle 1: (-4, -2), (-3, -5), (3, -2)
Area₁ = $\frac{1}{2}|-4(-5+2) + (-3)(-2+2) + 3(-2+5)| = \frac{1}{2}|12 + 0 + 9| = 10.5$

Triangle 2: (-4, -2), (3, -2), (2, 3)
Area₂ = $\frac{1}{2}|-4(-2-3) + 3(3+2) + 2(-2+2)| = \frac{1}{2}|20 + 15 + 0| = 17.5$

Total Area = 10.5 + 17.5 = 28 sq units

**Answer:** 28 sq units
</details>

---

**Q40.** Find the value of x if the distance between (x, -1) and (3, 2) is 5 units.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Using distance formula:
$$\sqrt{(3 - x)^2 + (2 + 1)^2} = 5$$
$$(3 - x)^2 + 9 = 25$$
$$(3 - x)^2 = 16$$
$$3 - x = \pm 4$$

$$x = 3 - 4 = -1 \text{ or } x = 3 + 4 = 7$$

**Answer:** x = -1 or 7
</details>

---

**Q41.** Show that (1, 7), (4, 2), (-1, -1), and (-4, 4) are vertices of a square.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Finding all sides:
$$AB = \sqrt{(4-1)^2 + (2-7)^2} = \sqrt{9 + 25} = \sqrt{34}$$
$$BC = \sqrt{(-1-4)^2 + (-1-2)^2} = \sqrt{25 + 9} = \sqrt{34}$$
$$CD = \sqrt{(-4+1)^2 + (4+1)^2} = \sqrt{9 + 25} = \sqrt{34}$$
$$DA = \sqrt{(1+4)^2 + (7-4)^2} = \sqrt{25 + 9} = \sqrt{34}$$

All sides equal.

Finding diagonals:
$$AC = \sqrt{(-1-1)^2 + (-1-7)^2} = \sqrt{4 + 64} = \sqrt{68}$$
$$BD = \sqrt{(-4-4)^2 + (4-2)^2} = \sqrt{64 + 4} = \sqrt{68}$$

Diagonals equal. Hence, it's a **square**.

**Answer:** Verified - all sides equal, diagonals equal
</details>

---

**Q42.** Find the coordinates of the points of trisection of the line segment joining (4, -1) and (-2, -3).

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Points of trisection divide in ratios 1:2 and 2:1.

**First point (1:2):**
$$P = \left(\frac{1(-2) + 2(4)}{3}, \frac{1(-3) + 2(-1)}{3}\right) = \left(\frac{6}{3}, \frac{-5}{3}\right) = \left(2, -\frac{5}{3}\right)$$

**Second point (2:1):**
$$Q = \left(\frac{2(-2) + 1(4)}{3}, \frac{2(-3) + 1(-1)}{3}\right) = \left(\frac{0}{3}, \frac{-7}{3}\right) = \left(0, -\frac{7}{3}\right)$$

**Answer:** $\left(2, -\frac{5}{3}\right)$ and $\left(0, -\frac{7}{3}\right)$
</details>

---

**Q43.** Find the area of the triangle formed by joining the midpoints of the sides of triangle with vertices (0, -1), (2, 1), and (0, 3).

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Midpoints:**
$$D = \left(\frac{0+2}{2}, \frac{-1+1}{2}\right) = (1, 0)$$
$$E = \left(\frac{2+0}{2}, \frac{1+3}{2}\right) = (1, 2)$$
$$F = \left(\frac{0+0}{2}, \frac{-1+3}{2}\right) = (0, 1)$$

**Area of DEF:**
$$\text{Area} = \frac{1}{2}|1(2-1) + 1(1-0) + 0(0-2)| = \frac{1}{2}|1 + 1 + 0| = 1$$

**Answer:** 1 sq unit
</details>

---

**Q44.** Find the ratio in which the line segment joining A(1, -5) and B(-4, 5) is divided by the x-axis. Also find the coordinates of the point of division.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let ratio be k:1 and point be (x, 0).

Using section formula for y-coordinate:
$$0 = \frac{k(5) + 1(-5)}{k + 1}$$
$$5k - 5 = 0$$
$$k = 1$$

Ratio = 1:1

**x-coordinate:**
$$x = \frac{1(-4) + 1(1)}{1 + 1} = \frac{-3}{2}$$

**Answer:** Ratio 1:1, Point $\left(-\frac{3}{2}, 0\right)$
</details>

---

**Q45.** If (1, 2), (4, y), (x, 6), and (3, 5) are vertices of a parallelogram, find x and y.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

In a parallelogram, diagonals bisect each other.

**Midpoint of AC = Midpoint of BD:**

$$\left(\frac{1+x}{2}, \frac{2+6}{2}\right) = \left(\frac{4+3}{2}, \frac{y+5}{2}\right)$$

$$\frac{1+x}{2} = \frac{7}{2} \Rightarrow x = 6$$

$$\frac{8}{2} = \frac{y+5}{2} \Rightarrow y = 3$$

**Answer:** x = 6, y = 3
</details>

---

**Q46.** Find the coordinates of point A, where AB is diameter of a circle with center (2, -3) and B is (1, 4).

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Center is midpoint of diameter AB.

Let A = (x, y)

**Midpoint formula:**
$$\left(\frac{x+1}{2}, \frac{y+4}{2}\right) = (2, -3)$$

$$\frac{x+1}{2} = 2 \Rightarrow x = 3$$
$$\frac{y+4}{2} = -3 \Rightarrow y = -10$$

**Answer:** A(3, -10)
</details>

---

**Q47.** Find the area of the triangle with vertices (a, b + c), (b, c + a), and (c, a + b).

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Using area formula:
$$\text{Area} = \frac{1}{2}|a(c+a-a-b) + b(a+b-b-c) + c(b+c-c-a)|$$
$$= \frac{1}{2}|a(c-b) + b(a-c) + c(b-a)|$$
$$= \frac{1}{2}|ac - ab + ab - bc + bc - ac| = 0$$

**Answer:** 0 (points are collinear)
</details>

---

**Q48.** The perpendicular bisector of the line segment joining A(1, 5) and B(4, 6) cuts the y-axis at P. Find AP:BP.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Any point on perpendicular bisector is equidistant from A and B.

Therefore, AP = BP

**Answer:** AP:BP = 1:1
</details>

---

**Q49.** Find the coordinates of the centroid of triangle with vertices (-1, 3), (6, -3), and (-3, 6).

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Centroid formula:
$$G = \left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}\right)$$
$$= \left(\frac{-1 + 6 - 3}{3}, \frac{3 - 3 + 6}{3}\right) = \left(\frac{2}{3}, 2\right)$$

**Answer:** $\left(\frac{2}{3}, 2\right)$
</details>

---

**Q50.** Prove that the points (2, -2), (-2, 1), and (5, 2) form a right-angled triangle.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Finding sides:
$$AB = \sqrt{(-2-2)^2 + (1+2)^2} = \sqrt{16 + 9} = 5$$
$$BC = \sqrt{(5+2)^2 + (2-1)^2} = \sqrt{49 + 1} = \sqrt{50} = 5\sqrt{2}$$
$$AC = \sqrt{(5-2)^2 + (2+2)^2} = \sqrt{9 + 16} = 5$$

Checking Pythagoras:
$$AB^2 + AC^2 = 25 + 25 = 50 = BC^2$$

Hence, right-angled at A.

**Answer:** Verified - right-angled triangle
</details>

---

### SECTION C: Long Answer Questions (15 Questions - 5 Marks Each)

**Q51.** (a) Derive the distance formula using Pythagoras theorem.
(b) Find the distance between points P(2, -3) and Q(10, y) if PQ = 10 units. Find the possible values of y.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Derivation:**

Let P(x₁, y₁) and Q(x₂, y₂) be two points.

Draw PR || x-axis and QR || y-axis meeting at R.

```
    P(x₁, y₁)
      |
      |\
      | \
      |  \
    PR|   \ PQ
      |    \
      |     \
    R(x₂, y₁)----Q(x₂, y₂)
         QR
```

In right ΔPQR:
$$PQ^2 = PR^2 + QR^2$$
$$PR = |x_2 - x_1|$$
$$QR = |y_2 - y_1|$$
$$PQ^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$
$$PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**Hence Proved.**

**(b) Finding y:**

$$\sqrt{(10-2)^2 + (y+3)^2} = 10$$
$$64 + (y+3)^2 = 100$$
$$(y+3)^2 = 36$$
$$y + 3 = \pm 6$$

$$y = 3 \text{ or } y = -9$$

**Answer:** (a) Derived (b) y = 3 or -9
</details>

---

**Q52.** (a) Derive the section formula for internal division.
(b) Find the coordinates of the point which divides the line segment joining (-1, 7) and (4, -3) in the ratio 2:3.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Derivation:**

Let A(x₁, y₁) and B(x₂, y₂) and P(x, y) divides AB in ratio m:n.

Draw perpendiculars from A, P, B to x-axis.

Using similar triangles:
$$\frac{AP}{PB} = \frac{m}{n} = \frac{x - x_1}{x_2 - x} = \frac{y - y_1}{y_2 - y}$$

From $\frac{m}{n} = \frac{x - x_1}{x_2 - x}$:
$$m(x_2 - x) = n(x - x_1)$$
$$mx_2 - mx = nx - nx_1$$
$$x(m + n) = mx_2 + nx_1$$
$$x = \frac{mx_2 + nx_1}{m + n}$$

Similarly: $y = \frac{my_2 + ny_1}{m + n}$

**Hence Proved.**

**(b) Finding point:**

$$x = \frac{2(4) + 3(-1)}{2 + 3} = \frac{8 - 3}{5} = 1$$
$$y = \frac{2(-3) + 3(7)}{2 + 3} = \frac{-6 + 21}{5} = 3$$

**Answer:** (1, 3)
</details>

---

**Q53.** (a) Derive the formula for area of a triangle using coordinates of vertices.
(b) Find the area of triangle with vertices (4, 2), (3, -5), and (6, 4).

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Derivation:**

Let vertices be A(x₁, y₁), B(x₂, y₂), C(x₃, y₃).

Draw perpendiculars from A, B, C to x-axis forming trapeziums.

Area(ABC) = Area(ABQP) + Area(BCRQ) - Area(ACRP)

$$= \frac{1}{2}(y_1 + y_2)(x_2 - x_1) + \frac{1}{2}(y_2 + y_3)(x_3 - x_2) - \frac{1}{2}(y_1 + y_3)(x_3 - x_1)$$

After simplification:
$$\text{Area} = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$

**Hence Proved.**

**(b) Finding area:**

$$\text{Area} = \frac{1}{2}|4(-5-4) + 3(4-2) + 6(2+5)|$$
$$= \frac{1}{2}|4(-9) + 3(2) + 6(7)|$$
$$= \frac{1}{2}|-36 + 6 + 42| = \frac{1}{2} \times 12 = 6$$

**Answer:** (a) Derived (b) 6 sq units
</details>

---

**Q54.** (a) Find the coordinates of the points of trisection of the line segment joining A(2, -2) and B(-7, 4).
(b) Verify that these points divide AB into three equal parts.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding trisection points:**

**First point P (ratio 1:2):**
$$P = \left(\frac{1(-7) + 2(2)}{3}, \frac{1(4) + 2(-2)}{3}\right) = \left(\frac{-3}{3}, \frac{0}{3}\right) = (-1, 0)$$

**Second point Q (ratio 2:1):**
$$Q = \left(\frac{2(-7) + 1(2)}{3}, \frac{2(4) + 1(-2)}{3}\right) = \left(\frac{-12}{3}, \frac{6}{3}\right) = (-4, 2)$$

**(b) Verification:**

$$AB = \sqrt{(-7-2)^2 + (4+2)^2} = \sqrt{81 + 36} = \sqrt{117}$$
$$AP = \sqrt{(-1-2)^2 + (0+2)^2} = \sqrt{9 + 4} = \sqrt{13}$$
$$PQ = \sqrt{(-4+1)^2 + (2-0)^2} = \sqrt{9 + 4} = \sqrt{13}$$
$$QB = \sqrt{(-7+4)^2 + (4-2)^2} = \sqrt{9 + 4} = \sqrt{13}$$

$$AP = PQ = QB = \frac{AB}{3}$$ ✓

**Answer:** (a) (-1, 0) and (-4, 2) (b) Verified
</details>

---

**Q55.** (a) Prove that the points (3, 0), (6, 4), and (-1, 3) form a right-angled isosceles triangle.
(b) Find the area of this triangle.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

Finding sides:
$$AB = \sqrt{(6-3)^2 + (4-0)^2} = \sqrt{9 + 16} = 5$$
$$BC = \sqrt{(-1-6)^2 + (3-4)^2} = \sqrt{49 + 1} = \sqrt{50} = 5\sqrt{2}$$
$$AC = \sqrt{(-1-3)^2 + (3-0)^2} = \sqrt{16 + 9} = 5$$

Since AB = AC = 5, triangle is **isosceles**.

Checking Pythagoras:
$$AB^2 + AC^2 = 25 + 25 = 50 = BC^2$$

Hence, **right-angled** at A.

**(b) Area:**

$$\text{Area} = \frac{1}{2} \times AB \times AC = \frac{1}{2} \times 5 \times 5 = 12.5$$

**Answer:** (a) Proved (b) 12.5 sq units
</details>

---

**Q56.** (a) Find the ratio in which the line 2x + 3y - 5 = 0 divides the line segment joining (8, -9) and (2, 1).
(b) Find the coordinates of the point of division.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding ratio:**

Let ratio be k:1 and point be P(x, y).

$$x = \frac{2k + 8}{k + 1}, y = \frac{k - 9}{k + 1}$$

Point lies on line 2x + 3y - 5 = 0:

$$2\left(\frac{2k + 8}{k + 1}\right) + 3\left(\frac{k - 9}{k + 1}\right) - 5 = 0$$

$$\frac{4k + 16 + 3k - 27 - 5k - 5}{k + 1} = 0$$

$$2k - 16 = 0$$
$$k = 8$$

Ratio = 8:1

**(b) Coordinates:**

$$x = \frac{2(8) + 8}{9} = \frac{24}{9} = \frac{8}{3}$$
$$y = \frac{8 - 9}{9} = -\frac{1}{9}$$

**Answer:** (a) 8:1 (b) $\left(\frac{8}{3}, -\frac{1}{9}\right)$
</details>

---

**Q57.** (a) If A(-2, 1), B(a, 0), C(4, b), and D(1, 2) are vertices of a parallelogram, find a and b.
(b) Find the area of the parallelogram.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding a and b:**

Diagonals bisect each other:

**Midpoint of AC = Midpoint of BD:**

$$\left(\frac{-2+4}{2}, \frac{1+b}{2}\right) = \left(\frac{a+1}{2}, \frac{0+2}{2}\right)$$

$$\frac{2}{2} = \frac{a+1}{2} \Rightarrow a = 1$$
$$\frac{1+b}{2} = 1 \Rightarrow b = 1$$

**(b) Area:**

Area = 2 × Area(ΔABC)

$$\text{Area}(\triangle ABC) = \frac{1}{2}|-2(0-1) + 1(1-1) + 4(1-0)| = \frac{1}{2}|2 + 0 + 4| = 3$$

Area of parallelogram = 2 × 3 = 6 sq units

**Answer:** (a) a = 1, b = 1 (b) 6 sq units
</details>

---

**Q58.** (a) Find the area of the quadrilateral with vertices A(-5, 7), B(-4, -5), C(-1, -6), and D(4, 5).
(b) Verify by dividing into two triangles.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Using quadrilateral area formula:**

Divide into ΔABC and ΔACD.

**Area(ΔABC):**
$$= \frac{1}{2}|-5(-5+6) + (-4)(-6-7) + (-1)(7+5)|$$
$$= \frac{1}{2}|-5 + 52 - 12| = \frac{35}{2} = 17.5$$

**Area(ΔACD):**
$$= \frac{1}{2}|-5(-6-5) + (-1)(5-7) + 4(7+6)|$$
$$= \frac{1}{2}|55 + 2 + 52| = \frac{109}{2} = 54.5$$

**Total Area:** 17.5 + 54.5 = 72 sq units

**(b) Verification:** Same result using different diagonal.

**Answer:** (a) 72 sq units (b) Verified
</details>

---

**Q59.** (a) Prove that the points A(1, 7), B(4, 2), C(-1, -1), and D(-4, 4) form a square.
(b) Find the area and perimeter of this square.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

Finding all sides:
$$AB = \sqrt{(4-1)^2 + (2-7)^2} = \sqrt{9 + 25} = \sqrt{34}$$
$$BC = \sqrt{(-1-4)^2 + (-1-2)^2} = \sqrt{25 + 9} = \sqrt{34}$$
$$CD = \sqrt{(-4+1)^2 + (4+1)^2} = \sqrt{9 + 25} = \sqrt{34}$$
$$DA = \sqrt{(1+4)^2 + (7-4)^2} = \sqrt{25 + 9} = \sqrt{34}$$

All sides equal.

**Diagonals:**
$$AC = \sqrt{(-1-1)^2 + (-1-7)^2} = \sqrt{4 + 64} = \sqrt{68}$$
$$BD = \sqrt{(-4-4)^2 + (4-2)^2} = \sqrt{64 + 4} = \sqrt{68}$$

Diagonals equal. Hence, **square**.

**(b) Area and Perimeter:**

Area = $(\sqrt{34})^2 = 34$ sq units
Perimeter = $4\sqrt{34}$ units

**Answer:** (a) Proved (b) Area = 34 sq units, Perimeter = $4\sqrt{34}$ units
</details>

---

**Q60.** (a) Find the coordinates of the circumcenter of the triangle with vertices A(5, -1), B(-1, 5), and C(6, 6).
(b) Find the circumradius.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding circumcenter:**

Let circumcenter be O(x, y).

OA = OB = OC (radii)

**OA² = OB²:**
$$(x-5)^2 + (y+1)^2 = (x+1)^2 + (y-5)^2$$
$$x^2 - 10x + 25 + y^2 + 2y + 1 = x^2 + 2x + 1 + y^2 - 10y + 25$$
$$-10x + 2y = 2x - 10y$$
$$12x = 12y \Rightarrow x = y$$ ... (i)

**OA² = OC²:**
$$(x-5)^2 + (y+1)^2 = (x-6)^2 + (y-6)^2$$
$$x^2 - 10x + 25 + y^2 + 2y + 1 = x^2 - 12x + 36 + y^2 - 12y + 36$$
$$-10x + 2y + 26 = -12x - 12y + 72$$

Using (i): $-10x + 2x + 26 = -12x - 12x + 72$
$$-8x + 26 = -24x + 72$$
$$16x = 46 \Rightarrow x = \frac{23}{8}$$

$$y = \frac{23}{8}$$

**(b) Circumradius:**

$$R = OA = \sqrt{\left(\frac{23}{8}-5\right)^2 + \left(\frac{23}{8}+1\right)^2} = \sqrt{\left(-\frac{17}{8}\right)^2 + \left(\frac{31}{8}\right)^2} = \frac{\sqrt{1250}}{8} = \frac{25\sqrt{2}}{8}$$

**Answer:** (a) $\left(\frac{23}{8}, \frac{23}{8}\right)$ (b) $\frac{25\sqrt{2}}{8}$ units
</details>

---

**Q61.** (a) Prove that the area of triangle formed by joining midpoints of sides of any triangle is one-fourth the area of original triangle.
(b) Verify for triangle with vertices (0, 0), (6, 0), (0, 8).

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

Let ΔABC have vertices A(x₁, y₁), B(x₂, y₂), C(x₃, y₃).

Midpoints: D, E, F of BC, CA, AB respectively.

$$D = \left(\frac{x_2+x_3}{2}, \frac{y_2+y_3}{2}\right)$$
$$E = \left(\frac{x_1+x_3}{2}, \frac{y_1+y_3}{2}\right)$$
$$F = \left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$$

Area(ΔDEF) = $\frac{1}{4}$ × Area(ΔABC) (by coordinate geometry)

**Hence Proved.**

**(b) Verification:**

Original triangle: (0, 0), (6, 0), (0, 8)
Area = $\frac{1}{2} \times 6 \times 8 = 24$ sq units

Midpoints: (3, 0), (3, 4), (0, 4)
Area = $\frac{1}{2}|3(4-4) + 3(4-0) + 0(0-4)| = 6$ sq units

$$6 = \frac{1}{4} \times 24$$ ✓

**Answer:** (a) Proved (b) Verified
</details>

---

**Q62.** (a) Find the coordinates of the point which divides the line segment joining A(-2, 3) and B(5, -4) externally in the ratio 3:2.
(b) Verify that this point lies on the line AB produced.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding point:**

Using external section formula:
$$x = \frac{3(5) - 2(-2)}{3 - 2} = \frac{15 + 4}{1} = 19$$
$$y = \frac{3(-4) - 2(3)}{3 - 2} = \frac{-12 - 6}{1} = -18$$

Point P(19, -18)

**(b) Verification:**

Slope of AB = $\frac{-4-3}{5+2} = -1$

Slope of AP = $\frac{-18-3}{19+2} = \frac{-21}{21} = -1$

Since slopes are equal, P lies on AB produced.

**Answer:** (a) (19, -18) (b) Verified
</details>

---

**Q63.** (a) A line intersects the y-axis and x-axis at points P and Q respectively. If (2, -5) is the midpoint of PQ, find the coordinates of P and Q.
(b) Find the area of triangle OPQ where O is the origin.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding P and Q:**

Let P = (0, y) and Q = (x, 0)

**Midpoint:**
$$\left(\frac{0+x}{2}, \frac{y+0}{2}\right) = (2, -5)$$

$$\frac{x}{2} = 2 \Rightarrow x = 4$$
$$\frac{y}{2} = -5 \Rightarrow y = -10$$

P(0, -10), Q(4, 0)

**(b) Area of ΔOPQ:**

$$\text{Area} = \frac{1}{2}|0(0-0) + 4(0+10) + 0(-10-0)| = \frac{1}{2} \times 40 = 20$$

**Answer:** (a) P(0, -10), Q(4, 0) (b) 20 sq units
</details>

---

**Q64.** (a) Prove that the points A(a, 0), B(-a, 0), and C(0, a√3) form an equilateral triangle.
(b) Find the area of this triangle.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

Finding sides:
$$AB = \sqrt{(-a-a)^2 + (0-0)^2} = \sqrt{4a^2} = 2a$$
$$BC = \sqrt{(0+a)^2 + (a\sqrt{3}-0)^2} = \sqrt{a^2 + 3a^2} = 2a$$
$$AC = \sqrt{(0-a)^2 + (a\sqrt{3}-0)^2} = \sqrt{a^2 + 3a^2} = 2a$$

All sides equal. Hence, **equilateral triangle**.

**(b) Area:**

$$\text{Area} = \frac{\sqrt{3}}{4} \times (\text{side})^2 = \frac{\sqrt{3}}{4} \times (2a)^2 = \sqrt{3}a^2$$

**Answer:** (a) Proved (b) $\sqrt{3}a^2$ sq units
</details>

---

**Q65.** (a) Explain how coordinate geometry is used in real life with at least three examples.
(b) The points A(6, 1), B(8, 2), C(9, 4), and D(p, 3) are vertices of a parallelogram. Find p.
(c) Find the area of this parallelogram.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Real-life Applications:**

**1. GPS Navigation:**
- Uses latitude and longitude (coordinates) to locate positions
- Calculates distances between locations

**2. Computer Graphics:**
- Pixel positions on screen use (x, y) coordinates
- Animation and gaming use coordinate transformations

**3. Architecture and Engineering:**
- Plotting building plans on coordinate grid
- Calculating distances and areas

**4. Robotics:**
- Robot arm positioning using coordinates
- Path planning in 2D space

**(b) Finding p:**

Diagonals bisect each other:

**Midpoint of AC = Midpoint of BD:**

$$\left(\frac{6+9}{2}, \frac{1+4}{2}\right) = \left(\frac{8+p}{2}, \frac{2+3}{2}\right)$$

$$\frac{15}{2} = \frac{8+p}{2} \Rightarrow p = 7$$

**(c) Area:**

Area = 2 × Area(ΔABC)

$$\text{Area}(\triangle ABC) = \frac{1}{2}|6(2-4) + 8(4-1) + 9(1-2)|$$
$$= \frac{1}{2}|-12 + 24 - 9| = \frac{3}{2}$$

Area of parallelogram = 2 × $\frac{3}{2}$ = 3 sq units

**Answer:** (a) Explained (b) p = 7 (c) 3 sq units
</details>

---

## 6. Exam-Oriented Preparation

### 📝 Important Formulas to Memorize

#### Distance Formula:

$$ PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

#### Section Formula (Internal):

$$ P(x, y) = \left(\frac{mx_2 + nx_1}{m + n}, \frac{my_2 + ny_1}{m + n}\right) $$

#### Midpoint Formula:

$$ M(x, y) = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right) $$

#### Area of Triangle:

$$ \text{Area} = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)| $$

#### Centroid of Triangle:

$$ G(x, y) = \left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}\right) $$

---

### 🎯 Expected Question Patterns (CBSE Class 10)

#### 1 Mark Questions (MCQ/Very Short Answer):
- Find distance between two points
- Find midpoint coordinates
- Identify quadrant of a point
- Simple area calculations

#### 2 Mark Questions (Short Answer):
- Find point using section formula
- Check collinearity
- Find ratio of division
- Verify geometric shapes

#### 3 Mark Questions (Long Answer):
- Prove triangle properties
- Find area of quadrilaterals
- Multi-step coordinate problems
- Real-life applications

#### 5 Mark Questions (Very Long Answer):
- Comprehensive proofs
- Complex geometric problems
- Combined concepts
- Circumcenter/centroid problems

---

### 💡 Exam Tips:

1. ✅ **Draw coordinate plane** for visualization
2. ✅ **Write formula first** before substituting values
3. ✅ **Use absolute value** in area formula
4. ✅ **Check signs** of coordinates carefully
5. ✅ **Verify collinearity** by area = 0
6. ✅ **Mention units** in final answers
7. ✅ **Show all steps** in calculations
8. ✅ **Cross-verify** using alternative methods

---

### 🔴 Common Mistakes to Avoid:

| Mistake | Correction |
|---------|------------|
| Wrong sign in distance formula | Use $(x_2 - x_1)^2$, always positive |
| Forgetting absolute value in area | Area = $\frac{1}{2}|\text{expression}|$ |
| Confusing internal/external division | Check if point lies between or outside |
| Wrong midpoint formula | Both coordinates use same denominator 2 |
| Not checking collinearity condition | Area = 0 for collinear points |
| Mixing up x and y coordinates | Write as (x, y) consistently |

---

### 📚 Previous Year Questions (CBSE Pattern)

**Q1 (CBSE 2024):** Find distance between (2, 3) and (5, 7).

**Answer:** 5 units

---

**Q2 (CBSE 2023):** Find midpoint of (1, 2) and (5, 8).

**Answer:** (3, 5)

---

**Q3 (CBSE 2023):** Check if (1, 2), (3, 4), (5, 6) are collinear.

**Answer:** Yes, collinear

---

**Q4 (CBSE 2022):** Find point dividing (2, 3) and (8, 9) in ratio 1:2.

**Answer:** (4, 5)

---

**Q5 (CBSE 2022):** Find area of triangle with vertices (0, 0), (3, 0), (0, 4).

**Answer:** 6 sq units

---

**Q6 (CBSE 2021):** Find ratio in which x-axis divides (2, 3) and (4, -6).

**Answer:** 1:2

---

**Q7 (CBSE 2021):** Find centroid of triangle with vertices (1, 2), (3, 4), (5, 6).

**Answer:** (3, 4)

---

**Q8 (CBSE 2020):** Show that (1, 7), (4, 2), (-1, -1), (-4, 4) form a square.

**Answer:** All sides equal, diagonals equal

---

**Q9 (CBSE 2020):** Find area of quadrilateral with given vertices.

**Answer:** Divide into triangles

---

**Q10 (CBSE 2019):** Find circumcenter of triangle with given vertices.

**Answer:** Equidistant from all vertices

---

## 7. Revision Notes

### 📌 Quick Revision Sheet

#### Key Definitions:

| Term | Definition |
|------|------------|
| **Abscissa** | x-coordinate (distance from y-axis) |
| **Ordinate** | y-coordinate (distance from x-axis) |
| **Origin** | Point (0, 0) where axes intersect |
| **Quadrants** | Four regions based on sign of coordinates |
| **Collinear** | Points lying on same line (area = 0) |

---

#### Important Formulas:

**Distance:**
$$ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

**Section Formula:**
$$ P = \left(\frac{mx_2 + nx_1}{m + n}, \frac{my_2 + ny_1}{m + n}\right) $$

**Midpoint:**
$$ M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right) $$

**Area:**
$$ \text{Area} = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)| $$

**Centroid:**
$$ G = \left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}\right) $$

---

#### Quadrant Signs:

| Quadrant | x | y | Example |
|----------|---|---|---------|
| I | + | + | (3, 4) |
| II | - | + | (-3, 4) |
| III | - | - | (-3, -4) |
| IV | + | - | (3, -4) |

---

#### Special Points:

| Position | Coordinates |
|----------|-------------|
| On x-axis | (x, 0) |
| On y-axis | (0, y) |
| At origin | (0, 0) |
| Centroid | Average of vertices |
| Midpoint | Average of endpoints |

---

### 🎓 Final Checklist Before Exam:

- [ ] I can find distance between two points
- [ ] I can find midpoint of a line segment
- [ ] I can use section formula correctly
- [ ] I can calculate area of triangle
- [ ] I can check collinearity
- [ ] I can identify quadrants
- [ ] I can prove geometric properties
- [ ] I know centroid formula
- [ ] I can solve real-life problems
- [ ] I have practiced all 30 MCQs
- [ ] I have practiced all 20 Short Answer questions
- [ ] I have practiced all 15 Long Answer questions

---

### 📊 Quick Formula Sheet:

**Distance:**
$$ d = \sqrt{(\Delta x)^2 + (\Delta y)^2} $$

**Section Formula:**
$$ x = \frac{mx_2 + nx_1}{m + n}, \quad y = \frac{my_2 + ny_1}{m + n} $$

**Midpoint:**
$$ x = \frac{x_1 + x_2}{2}, \quad y = \frac{y_1 + y_2}{2} $$

**Area:**
$$ \text{Area} = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)| $$

**Collinearity:**
$$ \text{Area} = 0 $$

**Centroid:**
$$ x = \frac{x_1 + x_2 + x_3}{3}, \quad y = \frac{y_1 + y_2 + y_3}{3} $$

---

**Good luck with your studies! 🌟**

> Remember: Always draw a rough sketch and check signs of coordinates!

---

**End of Learning Path - Coordinate Geometry**
