# Circles - Learning Path

## 1. Concept Introduction

### What is a Circle?

A **circle** is a closed plane figure consisting of all points at a constant distance from a fixed point in the same plane.

**Key Definitions:**

| Term | Definition | Symbol/Notation |
|------|------------|-----------------|
| **Center** | The fixed point from which all points on the circle are equidistant | O |
| **Radius** | The constant distance from the center to any point on the circle | r |
| **Diameter** | A line segment passing through the center with endpoints on the circle | d = 2r |
| **Circumference** | The distance around the circle | C = 2πr |
| **Chord** | A line segment joining any two points on the circle | AB |
| **Arc** | A part of the circumference of a circle | arc AB |
| **Sector** | The region enclosed by two radii and an arc | Sector OAB |
| **Segment** | The region enclosed by a chord and an arc | Segment AB |

**Everyday Examples:**
- 🍕 Pizza slices (sectors)
- ⌚ Watch face (circle)
- 🎯 Target board (concentric circles)
- 🚗 Wheels (circles)
- 🪙 Coins (circles)
- 📀 CDs/DVDs (circles)

---

### Circle Components Diagram:

```
                    Circle with Center O
                         
                         B
                       /   \
                      /     \
                     /       \
              Radius /         \ Radius
                   /     O     \
                  /    (Center)  \
                 /       •        \
                /                  \
               A ------------------ C
                    Diameter (d)
                    
            Chord: Any line joining two points (e.g., AC)
            Radius: r (OA, OB, OC)
            Diameter: d = 2r (AC)
```

---

## 2. Micro-topic Breakdown

This chapter is divided into the following key concepts:

```
Circles
├── 2.1 Introduction to Circles
│   ├── Basic terms and definitions
│   ├── Circumference and area
│   └── Concentric circles
├── 2.2 Tangent to a Circle
│   ├── Definition and properties
│   ├── Number of tangents from a point
│   └── Theorems on tangents
├── 2.3 Properties of Tangents
│   ├── Tangent perpendicular to radius
│   ├── Lengths of tangents from external point
│   └── Applications and problems
├── 2.4 Secant of a Circle
│   ├── Definition
│   ├── Difference between tangent and secant
│   └── Intersecting secants theorem
└── 2.5 Number of Tangents from a Point
    ├── Point on the circle
    ├── Point outside the circle
    └── Point inside the circle
```

---

## 3. Concept Explanations

### 3.1 Introduction to Circles

#### Basic Properties:

**1. All radii of a circle are equal.**

If O is the center and A, B, C are points on the circle:
$$ OA = OB = OC = r $$

**2. Diameter is the longest chord.**

$$ \text{Diameter} = 2 \times \text{Radius} $$
$$ d = 2r $$

**3. Circumference Formula:**

$$ C = 2\pi r = \pi d $$

where π (pi) ≈ 22/7 or 3.14159...

**4. Area of a Circle:**

$$ A = \pi r^2 $$

---

### 3.2 Tangent to a Circle

#### Definition:

A **tangent** to a circle is a line that intersects the circle at **exactly one point**.

**Key Terms:**

| Term | Meaning |
|------|---------|
| **Point of Contact** | The point where the tangent touches the circle |
| **Normal** | The line perpendicular to the tangent at the point of contact (passes through center) |

```
              Tangent Line
        -------------------------
                        \
                         \
                          \
                    B      \
                     \      \
                      \      \
                       \      \
                        \      \
                         \      \
                    O ----•------ A
                   (Center)  Point of Contact
                          Radius
```

**In the diagram:**
- Line AB is the tangent
- Point A is the point of contact
- OA is the radius
- OA ⊥ AB (radius is perpendicular to tangent)

---

### 3.3 Properties of Tangents

#### Theorem 1: Tangent is Perpendicular to Radius

**Statement:**

The tangent at any point of a circle is **perpendicular** to the radius through the point of contact.

**Given:** A circle with center O, tangent AB at point P

**To Prove:** OP ⊥ AB

**Proof:**

```
              Tangent AB
        -------------------------
                        \
                         \
                          \
                    Q      P      R
                     \     |     /
                      \    |    /
                       \   |   /
                        \  |  /
                         \ | /
                          \|/
                           O
                        (Center)
```

1. Take any point Q on the tangent AB (other than P)
2. Join OQ
3. OQ intersects the circle at R
4. OR = OP (radii of same circle)
5. OQ = OR + RQ > OR
6. OQ > OP
7. OP is the shortest distance from O to AB
8. **Therefore,** OP ⊥ AB ✓

---

#### Theorem 2: Lengths of Tangents from External Point

**Statement:**

The lengths of tangents drawn from an **external point** to a circle are **equal**.

**Given:** A circle with center O, external point P, tangents PA and PB

**To Prove:** PA = PB

**Construction:** Join OA, OB, and OP

**Proof:**

```
                    P (External Point)
                   / \
                  /   \
                 /     \
                /       \
               /         \
              /           \
             A-------------B
              \           /
               \         /
                \       /
                 \     /
                  \   /
                   \ /
                    O
                 (Center)
```

In ΔOAP and ΔOBP:
- OA = OB (radii of same circle)
- OP = OP (common)
- ∠OAP = ∠OBP = 90° (tangent ⊥ radius)

**Therefore,** ΔOAP ≅ ΔOBP (RHS congruence)

**Hence,** PA = PB (CPCT) ✓

---

### 3.4 Secant of a Circle

#### Definition:

A **secant** is a line that intersects a circle at **two distinct points**.

```
              Secant Line
        -------------------------
           \              /
            \            /
             \          /
              A        B
               \      /
                \    /
                 \  /
                  \/
                   O
                (Center)
```

**Difference between Tangent and Secant:**

| Tangent | Secant |
|---------|--------|
| Intersects at 1 point | Intersects at 2 points |
| Touches the circle | Cuts through the circle |
| Perpendicular to radius | Not perpendicular |

---

### 3.5 Number of Tangents from a Point

#### Case 1: Point on the Circle

**Only ONE tangent** can be drawn from a point on the circle.

```
              Tangent
        -------------------------
                        \
                         \
                          \
                    • P (Point on circle)
                   / \
                  /   \
                 /     \
                O       \
             (Center)
```

---

#### Case 2: Point Outside the Circle

**Exactly TWO tangents** can be drawn from an external point.

```
                    P (External Point)
                   / \
                  /   \
                 /     \
                /       \
               /         \
              A           B
               \         /
                \       /
                 \     /
                  \   /
                   \ /
                    O
                 (Center)
```

**Properties:**
- PA = PB (lengths are equal)
- ∠APO = ∠BPO (tangents are equally inclined to OP)
- ∠AOP = ∠BOP (subtend equal angles at center)

---

#### Case 3: Point Inside the Circle

**NO tangent** can be drawn from a point inside the circle.

```
                    P (Internal Point)
                   /|\
                  / | \
                 /  |  \
                /   |   \
               /    |    \
              /     |     \
             /      |      \
            A-------O-------B
                     (Center)
```

Any line through P will intersect the circle at two points (secant), not touch at one point.

---

## 4. Guided Examples

### Example 1: Finding Length of Tangent

**Question:** A tangent PQ at a point P of a circle of radius 5 cm meets a line through the center O at a point Q so that OQ = 13 cm. Find the length PQ.

**Step-by-Step Solution:**

**Step 1:** Draw the diagram

```
                    Q
                    |
                    |
                    |
                    |
                    P •----• O
                   Tangent  Center
                           (r = 5 cm)
```

**Step 2:** Identify the right triangle
- ΔOPQ is right-angled at P (tangent ⊥ radius)
- OP = 5 cm (radius)
- OQ = 13 cm (given)
- PQ = ? (tangent length)

**Step 3:** Apply Pythagoras theorem
$$ OQ^2 = OP^2 + PQ^2 $$
$$ 13^2 = 5^2 + PQ^2 $$
$$ 169 = 25 + PQ^2 $$
$$ PQ^2 = 144 $$
$$ PQ = 12 \text{ cm} $$

**Final Answer:** Length of tangent PQ = 12 cm

---

### Example 2: Tangents from External Point

**Question:** From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the center is 25 cm. Find the radius of the circle.

**Step-by-Step Solution:**

**Step 1:** Draw the diagram

```
                    Q (External Point)
                   /
                  /
                 / 25 cm
                /
               /
              P •----• O
             Tangent  Center
             24 cm    (r = ?)
```

**Step 2:** Identify the right triangle
- ΔOPQ is right-angled at P
- PQ = 24 cm (tangent)
- OQ = 25 cm (distance from center)
- OP = r (radius to find)

**Step 3:** Apply Pythagoras theorem
$$ OQ^2 = OP^2 + PQ^2 $$
$$ 25^2 = r^2 + 24^2 $$
$$ 625 = r^2 + 576 $$
$$ r^2 = 49 $$
$$ r = 7 \text{ cm} $$

**Final Answer:** Radius of the circle = 7 cm

---

### Example 3: Angle Between Tangents

**Question:** Two tangents TP and TQ are drawn to a circle with center O such that ∠POQ = 110°. Find ∠PTQ.

**Step-by-Step Solution:**

**Step 1:** Draw the diagram

```
                    T (External Point)
                   / \
                  /   \
                 /     \
                /       \
               /         \
              P •---------• Q
               \    110°  /
                \   O    /
                 \      /
                  \    /
                   \  /
                    \/
                 (Center)
```

**Step 2:** Use properties of tangents
- ∠OPT = 90° (tangent ⊥ radius)
- ∠OQT = 90° (tangent ⊥ radius)

**Step 3:** In quadrilateral OPTQ
Sum of angles = 360°
$$ ∠OPT + ∠OQT + ∠POQ + ∠PTQ = 360° $$
$$ 90° + 90° + 110° + ∠PTQ = 360° $$
$$ 290° + ∠PTQ = 360° $$
$$ ∠PTQ = 70° $$

**Final Answer:** ∠PTQ = 70°

---

### Example 4: Tangents Inclined at an Angle

**Question:** Prove that the tangents drawn at the ends of a diameter of a circle are parallel.

**Step-by-Step Solution:**

**Step 1:** Draw the diagram

```
              Tangent at A
        ------------------------- A
               \                  |
                \                 |
                 \                |
                  \               |
                   \              |
                    \             |
                     \            |
                      \           |
                       \          |
                        \         |
                         \        |
                          \       |
                           \      |
                            \     |
                             \    |
                              \   |
                               \  |
                                \ |
                                 \|
                                  B
        -------------------------
              Tangent at B
```

**Step 2:** Given information
- AB is a diameter
- Tangents at A and B

**Step 3:** Proof
- OA ⊥ Tangent at A (radius ⊥ tangent)
- OB ⊥ Tangent at B (radius ⊥ tangent)
- OA and OB are on the same line (diameter)
- Both tangents are perpendicular to the same line AB
- **Therefore,** the tangents are parallel ✓

**Final Answer:** Tangents at ends of diameter are parallel (Proved)

---

### Example 5: Lengths of Tangents from External Point

**Question:** A circle is inscribed in a triangle ABC touching the sides AB, BC, and CA at points D, E, and F respectively. If AB = 12 cm, BC = 8 cm, and CA = 10 cm, find the lengths of AD, BE, and CF.

**Step-by-Step Solution:**

**Step 1:** Draw the diagram

```
                    A
                   / \
                  /   \
                 /  F  \
                /       \
               /    •    \
              /   /   \   \
             /  /       \  \
            D / /         \ \ E
             /             \
            B---------------C
```

**Step 2:** Use tangent properties
Let AD = AF = x
Let BD = BE = y
Let CE = CF = z

**Step 3:** Set up equations
AB = AD + DB = x + y = 12 ... (1)
BC = BE + EC = y + z = 8 ... (2)
CA = CF + FA = z + x = 10 ... (3)

**Step 4:** Solve the system
Adding all equations:
$$ 2(x + y + z) = 30 $$
$$ x + y + z = 15 $$

From (1): z = 15 - 12 = 3
From (2): x = 15 - 8 = 7
From (3): y = 15 - 10 = 5

**Step 5:** Find required lengths
AD = x = 7 cm
BE = y = 5 cm
CF = z = 3 cm

**Final Answer:** AD = 7 cm, BE = 5 cm, CF = 3 cm

---

## 5. Practice Questions

### SECTION A: Multiple Choice Questions (30 Questions - 1 Mark Each)

**Q1.** The length of the tangent from a point P to a circle of radius 3 cm is 4 cm. The distance of P from the center of the circle is:
- (A) 3 cm
- (B) 4 cm
- (C) 5 cm
- (D) 7 cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 5 cm

**Explanation:** 
Using Pythagoras theorem: $d^2 = r^2 + l^2 = 3^2 + 4^2 = 9 + 16 = 25$
$d = 5$ cm
</details>

---

**Q2.** The number of tangents that can be drawn from a point on the circle is:
- (A) 0
- (B) 1
- (C) 2
- (D) Infinite

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 1

**Explanation:** Only one tangent can be drawn from a point on the circle.
</details>

---

**Q3.** The number of tangents that can be drawn from a point inside the circle is:
- (A) 0
- (B) 1
- (C) 2
- (D) Infinite

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 0

**Explanation:** No tangent can be drawn from a point inside the circle.
</details>

---

**Q4.** The lengths of tangents drawn from an external point to a circle are:
- (A) Equal
- (B) Unequal
- (C) Perpendicular
- (D) Parallel

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) Equal

**Explanation:** This is a fundamental theorem: tangents from an external point are equal in length.
</details>

---

**Q5.** A tangent to a circle is perpendicular to:
- (A) The chord
- (B) The diameter
- (C) The radius through the point of contact
- (D) Any radius

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) The radius through the point of contact

**Explanation:** The tangent at any point is perpendicular to the radius through that point.
</details>

---

**Q6.** The maximum number of tangents that can be drawn from an external point to a circle is:
- (A) 1
- (B) 2
- (C) 3
- (D) 4

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 2

**Explanation:** Exactly two tangents can be drawn from an external point.
</details>

---

**Q7.** If the angle between two radii of a circle is 100°, then the angle between the tangents at the ends of the radii is:
- (A) 80°
- (B) 100°
- (C) 70°
- (D) 90°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 80°

**Explanation:** 
In quadrilateral formed: 90° + 90° + 100° + θ = 360°
θ = 80°
</details>

---

**Q8.** A line that intersects a circle at two distinct points is called a:
- (A) Tangent
- (B) Secant
- (C) Chord
- (D) Diameter

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Secant

**Explanation:** A secant intersects the circle at two points.
</details>

---

**Q9.** The length of the tangent from a point 13 cm away from the center of a circle of radius 5 cm is:
- (A) 8 cm
- (B) 10 cm
- (C) 12 cm
- (D) 15 cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 12 cm

**Explanation:** 
$l^2 = d^2 - r^2 = 13^2 - 5^2 = 169 - 25 = 144$
$l = 12$ cm
</details>

---

**Q10.** Two tangents are inclined at an angle of 80°. The angle subtended by the line segment joining the points of contact at the center is:
- (A) 100°
- (B) 80°
- (C) 90°
- (D) 110°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 100°

**Explanation:** 
90° + 90° + 80° + θ = 360°
θ = 100°
</details>

---

**Q11.** The tangents drawn at the ends of a diameter of a circle are:
- (A) Perpendicular
- (B) Intersecting
- (C) Parallel
- (D) Coincident

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Parallel

**Explanation:** Both tangents are perpendicular to the same diameter, hence parallel.
</details>

---

**Q12.** If two tangents are drawn from an external point P to a circle with center O, then:
- (A) OP bisects the angle between the tangents
- (B) OP is perpendicular to the tangents
- (C) OP is parallel to the tangents
- (D) OP = tangent length

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) OP bisects the angle between the tangents

**Explanation:** The line from center to external point bisects the angle between tangents.
</details>

---

**Q13.** A circle can have at most ______ parallel tangents.
- (A) 1
- (B) 2
- (C) 3
- (D) 4

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 2

**Explanation:** A circle can have at most 2 parallel tangents (at opposite ends of a diameter).
</details>

---

**Q14.** The common point of a tangent to a circle and the circle is called the:
- (A) Center
- (B) Point of contact
- (C) External point
- (D) Internal point

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Point of contact

**Explanation:** The point where tangent touches the circle is the point of contact.
</details>

---

**Q15.** If the radius of a circle is 7 cm and the length of tangent from an external point is 24 cm, then the distance of the point from the center is:
- (A) 25 cm
- (B) 31 cm
- (C) 17 cm
- (D) 20 cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 25 cm

**Explanation:** 
$d^2 = r^2 + l^2 = 7^2 + 24^2 = 49 + 576 = 625$
$d = 25$ cm
</details>

---

**Q16.** In two concentric circles, the chord of the larger circle which touches the smaller circle is:
- (A) Bisected at the point of contact
- (B) Perpendicular to the radius
- (C) Equal to the diameter
- (D) Both (A) and (B)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (D) Both (A) and (B)

**Explanation:** The chord is bisected and perpendicular to the radius at the point of contact.
</details>

---

**Q17.** The angle between a tangent and the radius through the point of contact is:
- (A) 45°
- (B) 60°
- (C) 90°
- (D) 180°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 90°

**Explanation:** The tangent is always perpendicular to the radius at the point of contact.
</details>

---

**Q18.** A quadrilateral ABCD circumscribes a circle. If AB = 6 cm, BC = 7 cm, and CD = 4 cm, then AD is:
- (A) 3 cm
- (B) 4 cm
- (C) 5 cm
- (D) 6 cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 3 cm

**Explanation:** 
For circumscribing quadrilateral: AB + CD = BC + AD
6 + 4 = 7 + AD
AD = 3 cm
</details>

---

**Q19.** The distance between two parallel tangents of a circle of radius 5 cm is:
- (A) 5 cm
- (B) 10 cm
- (C) 15 cm
- (D) 20 cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 10 cm

**Explanation:** Distance between parallel tangents = diameter = 2r = 10 cm
</details>

---

**Q20.** If TP and TQ are two tangents to a circle with center O such that ∠POQ = 120°, then ∠PTQ is:
- (A) 30°
- (B) 60°
- (C) 90°
- (D) 120°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 60°

**Explanation:** 
90° + 90° + 120° + ∠PTQ = 360°
∠PTQ = 60°
</details>

---

**Q21.** The length of a tangent from a point 10 cm away from the center of a circle is 8 cm. The radius of the circle is:
- (A) 4 cm
- (B) 5 cm
- (C) 6 cm
- (D) 7 cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 6 cm

**Explanation:** 
$r^2 = d^2 - l^2 = 10^2 - 8^2 = 100 - 64 = 36$
$r = 6$ cm
</details>

---

**Q22.** Two circles touch each other externally at C and AB is a common tangent to the circles. Then ∠ACB is:
- (A) 60°
- (B) 45°
- (C) 30°
- (D) 90°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (D) 90°

**Explanation:** The angle in a semicircle is 90°.
</details>

---

**Q23.** If a chord AB subtends an angle of 60° at the center of a circle, then the angle between the tangents at A and B is:
- (A) 60°
- (B) 120°
- (C) 90°
- (D) 30°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 120°

**Explanation:** 
90° + 90° + 60° + θ = 360°
θ = 120°
</details>

---

**Q24.** The number of secants that can be drawn from a point outside the circle is:
- (A) 0
- (B) 1
- (C) 2
- (D) Infinite

<details>
<summary>✓ Show Answer</summary>

**Answer:** (D) Infinite

**Explanation:** Infinite secants can be drawn from an external point.
</details>

---

**Q25.** A triangle ABC circumscribes a circle of radius 4 cm. If BD = 8 cm and DC = 6 cm, then AB is:
- (A) 12 cm
- (B) 14 cm
- (C) 15 cm
- (D) 16 cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 14 cm

**Explanation:** Using tangent properties and solving the equations.
</details>

---

**Q26.** The perimeter of a triangle circumscribing a circle is 30 cm. If one side is 10 cm and the point of contact divides it in ratio 2:3, then the other two sides are:
- (A) 8 cm, 12 cm
- (B) 9 cm, 11 cm
- (C) 10 cm, 10 cm
- (D) 7 cm, 13 cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 8 cm, 12 cm

**Explanation:** Using tangent length properties from vertices.
</details>

---

**Q27.** If the angle between two tangents drawn from a point P to a circle of radius a is 60°, then OP is:
- (A) a
- (B) 2a
- (C) a√3
- (D) 2a/√3

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 2a

**Explanation:** 
In right triangle, sin 30° = a/OP
OP = 2a
</details>

---

**Q28.** The area of a circle inscribed in a square of side 10 cm is:
- (A) 25π cm²
- (B) 50π cm²
- (C) 75π cm²
- (D) 100π cm²

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 25π cm²

**Explanation:** 
Radius = 10/2 = 5 cm
Area = π(5)² = 25π cm²
</details>

---

**Q29.** Two tangents PA and PB are drawn from an external point P such that ∠APB = 50°. Then ∠OAB is:
- (A) 25°
- (B) 50°
- (C) 65°
- (D) 75°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 25°

**Explanation:** 
∠AOB = 180° - 50° = 130°
In ΔOAB: ∠OAB = (180° - 130°)/2 = 25°
</details>

---

**Q30.** The length of the chord of a circle of radius 10 cm which touches a concentric circle of radius 6 cm is:
- (A) 8 cm
- (B) 12 cm
- (C) 16 cm
- (D) 20 cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 16 cm

**Explanation:** 
Half chord = √(10² - 6²) = √64 = 8 cm
Full chord = 16 cm
</details>

---

### SECTION B: Short Answer Questions (20 Questions - 2-3 Marks Each)

**Q31.** Find the length of the tangent from a point which is at a distance of 17 cm from the center of a circle of radius 8 cm.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given: d = 17 cm, r = 8 cm

Using Pythagoras theorem:
$$ l^2 = d^2 - r^2 $$
$$ l^2 = 17^2 - 8^2 $$
$$ l^2 = 289 - 64 $$
$$ l^2 = 225 $$
$$ l = 15 \text{ cm} $$

**Answer:** Length of tangent = 15 cm
</details>

---

**Q32.** Prove that the tangents drawn at the ends of a diameter of a circle are parallel.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** AB is a diameter of a circle with center O. Tangents are drawn at A and B.

**To Prove:** Tangents are parallel

**Proof:**
1. Let the tangents at A and B be PQ and RS respectively.
2. OA ⊥ PQ (tangent ⊥ radius at point of contact)
3. OB ⊥ RS (tangent ⊥ radius at point of contact)
4. OA and OB lie on the same line AB (diameter)
5. Both PQ and RS are perpendicular to the same line AB
6. **Therefore,** PQ || RS (lines perpendicular to the same line are parallel)

**Hence Proved.**
</details>

---

**Q33.** From a point Q, the length of the tangent to a circle is 15 cm and the distance of Q from the center is 17 cm. Find the radius of the circle.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given: Tangent length (l) = 15 cm, Distance from center (d) = 17 cm

Using Pythagoras theorem:
$$ d^2 = r^2 + l^2 $$
$$ 17^2 = r^2 + 15^2 $$
$$ 289 = r^2 + 225 $$
$$ r^2 = 64 $$
$$ r = 8 \text{ cm} $$

**Answer:** Radius = 8 cm
</details>

---

**Q34.** Two tangents TP and TQ are drawn to a circle with center O such that ∠POQ = 130°. Find ∠PTQ.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

In quadrilateral OPTQ:
- ∠OPT = 90° (tangent ⊥ radius)
- ∠OQT = 90° (tangent ⊥ radius)
- ∠POQ = 130° (given)

Sum of angles in quadrilateral = 360°
$$ ∠OPT + ∠OQT + ∠POQ + ∠PTQ = 360° $$
$$ 90° + 90° + 130° + ∠PTQ = 360° $$
$$ 310° + ∠PTQ = 360° $$
$$ ∠PTQ = 50° $$

**Answer:** ∠PTQ = 50°
</details>

---

**Q35.** Prove that the lengths of tangents drawn from an external point to a circle are equal.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** A circle with center O, external point P, tangents PA and PB

**To Prove:** PA = PB

**Construction:** Join OA, OB, and OP

**Proof:**
In ΔOAP and ΔOBP:
1. OA = OB (radii of same circle)
2. OP = OP (common)
3. ∠OAP = ∠OBP = 90° (tangent ⊥ radius)

**Therefore,** ΔOAP ≅ ΔOBP (RHS congruence rule)

**Hence,** PA = PB (CPCT)

**Proved.**
</details>

---

**Q36.** A circle is inscribed in a triangle ABC having sides AB = 10 cm, BC = 12 cm, and CA = 8 cm. Find the lengths of AD, BE, and CF where D, E, F are points of contact on AB, BC, and CA respectively.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let AD = AF = x
Let BD = BE = y
Let CE = CF = z

From the given information:
- x + y = 10 ... (1)
- y + z = 12 ... (2)
- z + x = 8 ... (3)

Adding all equations:
$$ 2(x + y + z) = 30 $$
$$ x + y + z = 15 $$

From (1): z = 15 - 10 = 5 cm
From (2): x = 15 - 12 = 3 cm
From (3): y = 15 - 8 = 7 cm

**Answer:** AD = 3 cm, BE = 7 cm, CF = 5 cm
</details>

---

**Q37.** In Fig., PQ is a chord of length 8 cm of a circle of radius 5 cm. The tangents at P and Q intersect at a point T. Find the length TP.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
                    T
                   / \
                  /   \
                 /     \
                P-------Q
                 \     /
                  \   /
                   \ /
                    O
```

Given: PQ = 8 cm, OP = 5 cm

Let M be the midpoint of PQ.
PM = MQ = 4 cm

In ΔOPM:
$$ OM^2 = OP^2 - PM^2 = 5^2 - 4^2 = 25 - 16 = 9 $$
$$ OM = 3 \text{ cm} $$

Let TM = h and TP = l

In ΔTPM and ΔOPM (similar triangles):
$$ \frac{TP}{OP} = \frac{PM}{OM} $$
$$ \frac{l}{5} = \frac{4}{3} $$
$$ l = \frac{20}{3} \text{ cm} $$

**Answer:** TP = $\frac{20}{3}$ cm
</details>

---

**Q38.** Prove that the perpendicular at the point of contact to the tangent to a circle passes through the center.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** A circle with center O, tangent AB at point P

**To Prove:** The perpendicular at P to AB passes through O

**Proof:**
1. Let the perpendicular at P to AB be line PQ.
2. We know that the radius OP is perpendicular to tangent AB at P.
3. From a point P on line AB, only one perpendicular can be drawn.
4. **Therefore,** PQ and OP must be the same line.
5. **Hence,** the perpendicular at P passes through O.

**Proved.**
</details>

---

**Q39.** Two concentric circles are of radii 5 cm and 3 cm. Find the length of the chord of the larger circle which touches the smaller circle.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
              A---------B
               \       /
                \     /
                 \   /
                  \ /
                   O
```

Given: R = 5 cm, r = 3 cm

Let AB be the chord of larger circle touching smaller circle at M.

OM ⊥ AB (radius to point of contact)
OM = 3 cm, OA = 5 cm

In ΔOMA:
$$ AM^2 = OA^2 - OM^2 = 5^2 - 3^2 = 25 - 9 = 16 $$
$$ AM = 4 \text{ cm} $$

Since OM bisects AB:
$$ AB = 2 \times AM = 2 \times 4 = 8 \text{ cm} $$

**Answer:** Length of chord = 8 cm
</details>

---

**Q40.** A quadrilateral ABCD is drawn to circumscribe a circle. Prove that AB + CD = AD + BC.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** Quadrilateral ABCD circumscribes a circle, touching at points P, Q, R, S on AB, BC, CD, DA respectively.

**To Prove:** AB + CD = AD + BC

**Proof:**
1. AP = AS (tangents from A)
2. BP = BQ (tangents from B)
3. CQ = CR (tangents from C)
4. DR = DS (tangents from D)

Adding all equations:
$$ AP + BP + CQ + DR = AS + BQ + CR + DS $$
$$ (AP + BP) + (CQ + DR) = (AS + DS) + (BQ + CQ) $$
$$ AB + CD = AD + BC $$

**Hence Proved.**
</details>

---

**Q41.** In two concentric circles, prove that a chord of the larger circle which is tangent to the smaller circle is bisected at the point of contact.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** Two concentric circles with center O. Chord AB of larger circle touches smaller circle at P.

**To Prove:** AP = PB

**Proof:**
1. Join OP, OA, and OB.
2. OP ⊥ AB (tangent ⊥ radius at point of contact)
3. In ΔOAP and ΔOBP:
   - OA = OB (radii of larger circle)
   - OP = OP (common)
   - ∠OPA = ∠OPB = 90°
4. ΔOAP ≅ ΔOBP (RHS congruence)
5. AP = PB (CPCT)

**Hence Proved.**
</details>

---

**Q42.** From an external point P, two tangents PA and PB are drawn to a circle with center O. If ∠APB = 70°, find ∠AOB.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

In quadrilateral OAPB:
- ∠OAP = 90° (tangent ⊥ radius)
- ∠OBP = 90° (tangent ⊥ radius)
- ∠APB = 70° (given)

Sum of angles = 360°
$$ ∠OAP + ∠OBP + ∠APB + ∠AOB = 360° $$
$$ 90° + 90° + 70° + ∠AOB = 360° $$
$$ 250° + ∠AOB = 360° $$
$$ ∠AOB = 110° $$

**Answer:** ∠AOB = 110°
</details>

---

**Q43.** A triangle ABC is drawn to circumscribe a circle of radius 4 cm such that the segments BD and DC into which BC is divided by the point of contact D are of lengths 8 cm and 6 cm respectively. Find the sides AB and AC.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let the points of contact be D on BC, E on AC, and F on AB.

Given: BD = 8 cm, DC = 6 cm, radius = 4 cm

Let AF = AE = x

Then:
- BF = BD = 8 cm (tangents from B)
- CE = CD = 6 cm (tangents from C)
- AB = AF + FB = x + 8
- AC = AE + EC = x + 6
- BC = 8 + 6 = 14 cm

Using the formula for area of triangle with inscribed circle:
Area = rs (where s = semi-perimeter)

Also, using Heron's formula and solving:
x = 7 cm

Therefore:
- AB = 7 + 8 = 15 cm
- AC = 7 + 6 = 13 cm

**Answer:** AB = 15 cm, AC = 13 cm
</details>

---

**Q44.** Prove that opposite sides of a quadrilateral circumscribing a circle subtend supplementary angles at the center of the circle.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** Quadrilateral ABCD circumscribes a circle with center O, touching at P, Q, R, S.

**To Prove:** ∠AOB + ∠COD = 180° and ∠BOC + ∠DOA = 180°

**Proof:**
1. Join OA, OB, OC, OD, OP, OQ, OR, OS.
2. In ΔOAP and ΔOAS:
   - OP = OS (radii)
   - OA = OA (common)
   - AP = AS (tangents from A)
3. ΔOAP ≅ ΔOAS (SSS)
4. ∠AOP = ∠AOS (CPCT)

Similarly:
- ∠BOQ = ∠BOP
- ∠COR = ∠COQ
- ∠DOS = ∠DOR

Adding all angles around O:
$$ 2(∠AOP + ∠BOP + ∠COQ + ∠DOR) = 360° $$
$$ ∠AOB + ∠COD = 180° $$

**Hence Proved.**
</details>

---

**Q45.** Find the locus of the center of a circle which touches two intersecting lines.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** Two intersecting lines l and m intersecting at point O.

**To Find:** Locus of center of circle touching both lines

**Solution:**
1. Let C be the center of a circle touching both lines.
2. Draw perpendiculars CP and CQ from C to lines l and m.
3. CP = CQ (radii of the same circle)
4. C is equidistant from both lines.
5. The locus of points equidistant from two intersecting lines is the **angle bisector**.

**Answer:** The locus is the angle bisector of the angle between the two lines.
</details>

---

**Q46.** Two tangents PA and PB are drawn from an external point P to a circle with center O. Prove that ∠APB = 2∠OAB.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** Tangents PA and PB from external point P

**To Prove:** ∠APB = 2∠OAB

**Proof:**
1. In ΔOAP: ∠OAP = 90° (tangent ⊥ radius)
2. Let ∠OAB = θ
3. Then ∠PAB = 90° - θ
4. In ΔPAB: PA = PB (tangents from external point)
5. ∠PBA = ∠PAB = 90° - θ (isosceles triangle)
6. ∠APB = 180° - (90° - θ) - (90° - θ) = 2θ
7. ∠APB = 2∠OAB

**Hence Proved.**
</details>

---

**Q47.** A circle is inscribed in an isosceles triangle ABC with AB = AC. Prove that the point of contact on BC bisects BC.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** Isosceles ΔABC with AB = AC. Circle touches at D, E, F on BC, CA, AB.

**To Prove:** BD = DC

**Proof:**
1. Let AF = AE = x (tangents from A)
2. Let BF = BD = y (tangents from B)
3. Let CD = CE = z (tangents from C)
4. AB = AF + FB = x + y
5. AC = AE + EC = x + z
6. Given AB = AC
7. x + y = x + z
8. y = z
9. BD = DC

**Hence Proved.**
</details>

---

**Q48.** The tangent at a point C of a circle and a diameter AB when extended intersect at P. If ∠PCA = 110°, find ∠CBA.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
                    P
                   /
                  /
                 /
                C
               / \
              /   \
             A-----B
              \   /
               \ /
                O
```

Given: ∠PCA = 110°

1. ∠PCO = 90° (tangent ⊥ radius)
2. ∠OCA = ∠PCA - ∠PCO = 110° - 90° = 20°
3. In ΔOAC: OA = OC (radii)
4. ∠OAC = ∠OCA = 20° (isosceles triangle)
5. ∠AOC = 180° - 20° - 20° = 140°
6. ∠ABC = ∠AOC/2 = 140°/2 = 70° (angle at center = 2 × angle at circumference)

**Answer:** ∠CBA = 70°
</details>

---

**Q49.** If the sides of a parallelogram touch a circle, prove that the parallelogram is a rhombus.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** Parallelogram ABCD touches a circle at P, Q, R, S.

**To Prove:** ABCD is a rhombus (all sides equal)

**Proof:**
1. AP = AS (tangents from A)
2. BP = BQ (tangents from B)
3. CQ = CR (tangents from C)
4. DR = DS (tangents from D)

Adding:
$$ AP + BP + CQ + DR = AS + BQ + CR + DS $$
$$ AB + CD = AD + BC $$

But in parallelogram: AB = CD and AD = BC

Therefore: 2AB = 2AD
AB = AD

**Hence,** all sides are equal. ABCD is a rhombus.

**Proved.**
</details>

---

**Q50.** Prove that the angle between the two tangents drawn from an external point to a circle is supplementary to the angle subtended by the line segment joining the points of contact at the center.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** Tangents PA and PB from external point P to circle with center O.

**To Prove:** ∠APB + ∠AOB = 180°

**Proof:**
1. In quadrilateral OAPB:
2. ∠OAP = 90° (tangent ⊥ radius)
3. ∠OBP = 90° (tangent ⊥ radius)
4. Sum of angles in quadrilateral = 360°
5. ∠OAP + ∠OBP + ∠APB + ∠AOB = 360°
6. 90° + 90° + ∠APB + ∠AOB = 360°
7. ∠APB + ∠AOB = 180°

**Hence Proved.**
</details>

---

### SECTION C: Long Answer Questions (15 Questions - 5 Marks Each)

**Q51.** (a) State and prove the theorem: "The tangent at any point of a circle is perpendicular to the radius through the point of contact."
(b) A tangent PQ at a point P of a circle of radius 6 cm meets a line through the center O at a point Q so that OQ = 10 cm. Find the length PQ.
(c) Verify your answer using Pythagoras theorem.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Theorem and Proof:**

**Statement:** The tangent at any point of a circle is perpendicular to the radius through the point of contact.

**Proof:**
1. Let AB be the tangent at point P, and O be the center.
2. Take any point Q on AB (other than P).
3. Join OQ.
4. OQ intersects the circle at R.
5. OR = OP (radii of same circle)
6. OQ = OR + RQ > OR
7. OQ > OP
8. OP is the shortest distance from O to AB.
9. **Therefore,** OP ⊥ AB ✓

**(b) Given:** r = 6 cm, OQ = 10 cm

In right ΔOPQ:
$$ OQ^2 = OP^2 + PQ^2 $$
$$ 10^2 = 6^2 + PQ^2 $$
$$ 100 = 36 + PQ^2 $$
$$ PQ^2 = 64 $$
$$ PQ = 8 \text{ cm} $$

**(c) Verification:**
$$ 6^2 + 8^2 = 36 + 64 = 100 = 10^2 $$ ✓

**Answer:** PQ = 8 cm
</details>

---

**Q52.** (a) Prove that the lengths of tangents drawn from an external point to a circle are equal.
(b) Two tangents TP and TQ are drawn to a circle with center O such that ∠PTQ = 60°. Find ∠POQ.
(c) If TP = 12 cm, find the radius of the circle.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

**Given:** Circle with center O, external point T, tangents TP and TQ

**To Prove:** TP = TQ

**Construction:** Join OP, OQ, and OT

**Proof:**
In ΔOPT and ΔOQT:
1. OP = OQ (radii)
2. OT = OT (common)
3. ∠OPT = ∠OQT = 90° (tangent ⊥ radius)
4. ΔOPT ≅ ΔOQT (RHS)
5. TP = TQ (CPCT)

**Proved.**

**(b) In quadrilateral OPTQ:**
$$ ∠OPT + ∠OQT + ∠PTQ + ∠POQ = 360° $$
$$ 90° + 90° + 60° + ∠POQ = 360° $$
$$ ∠POQ = 120° $$

**(c) In right ΔOPT:**
$$ \tan 30° = \frac{OP}{TP} $$
$$ \frac{1}{\sqrt{3}} = \frac{r}{12} $$
$$ r = \frac{12}{\sqrt{3}} = 4\sqrt{3} \text{ cm} $$

**Answers:**
- (b) ∠POQ = 120°
- (c) Radius = $4\sqrt{3}$ cm
</details>

---

**Q53.** (a) A circle is inscribed in a triangle ABC touching the sides AB, BC, and CA at points D, E, and F respectively. Prove that AD + BE + CF = AF + BD + CE.
(b) If AB = 14 cm, BC = 13 cm, and CA = 15 cm, find AD, BE, and CF.
(c) Verify that AD + BE + CF equals the semi-perimeter.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

Let AD = AF = x
Let BD = BE = y
Let CE = CF = z

Then:
- AD + BE + CF = x + y + z
- AF + BD + CE = x + y + z

**Therefore,** AD + BE + CF = AF + BD + CE ✓

**(b) Given:** AB = 14, BC = 13, CA = 15

Equations:
- x + y = 14 ... (1)
- y + z = 13 ... (2)
- z + x = 15 ... (3)

Adding: 2(x + y + z) = 42
x + y + z = 21

From (1): z = 21 - 14 = 7
From (2): x = 21 - 13 = 8
From (3): y = 21 - 15 = 6

**Therefore:** AD = 8 cm, BE = 6 cm, CF = 7 cm

**(c) Semi-perimeter:**
$$ s = \frac{14 + 13 + 15}{2} = 21 \text{ cm} $$

AD + BE + CF = 8 + 6 + 7 = 21 cm = s ✓

**Answers:**
- (b) AD = 8 cm, BE = 6 cm, CF = 7 cm
- (c) Verified: Sum = 21 cm = semi-perimeter
</details>

---

**Q54.** (a) Prove that opposite sides of a quadrilateral circumscribing a circle subtend supplementary angles at the center.
(b) In a quadrilateral ABCD circumscribing a circle, if ∠AOB = 100°, find ∠COD.
(c) If AB = 8 cm, BC = 10 cm, CD = 12 cm, find AD.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

**Given:** Quadrilateral ABCD circumscribes circle with center O

**To Prove:** ∠AOB + ∠COD = 180°

Using tangent properties and angle sum around center O:
$$ ∠AOB + ∠BOC + ∠COD + ∠DOA = 360° $$

By congruent triangles formed by tangents:
$$ ∠AOB + ∠COD = 180° $$
$$ ∠BOC + ∠DOA = 180° $$

**Proved.**

**(b) Given:** ∠AOB = 100°

$$ ∠COD = 180° - 100° = 80° $$

**(c) For circumscribing quadrilateral:**
AB + CD = BC + AD
8 + 12 = 10 + AD
AD = 10 cm

**Answers:**
- (b) ∠COD = 80°
- (c) AD = 10 cm
</details>

---

**Q55.** (a) Two concentric circles have radii 10 cm and 6 cm. Find the length of the chord of the larger circle which touches the smaller circle.
(b) Prove that the chord is bisected at the point of contact.
(c) Find the area of the triangle formed by the chord and the center.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Solution:**

Given: R = 10 cm, r = 6 cm

Let AB be the chord touching smaller circle at M.

In ΔOMA:
$$ AM^2 = OA^2 - OM^2 = 10^2 - 6^2 = 100 - 36 = 64 $$
$$ AM = 8 \text{ cm} $$

Chord AB = 2 × AM = 16 cm

**(b) Proof:**

OM ⊥ AB (tangent ⊥ radius)
In ΔOAM and ΔOBM:
- OA = OB (radii)
- OM = OM (common)
- ∠OMA = ∠OMB = 90°

ΔOAM ≅ ΔOBM (RHS)
AM = BM (CPCT)

**Therefore,** chord is bisected.

**(c) Area of ΔOAB:**

Base AB = 16 cm, Height OM = 6 cm

$$ \text{Area} = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 16 \times 6 = 48 \text{ cm}^2 $$

**Answers:**
- (a) 16 cm
- (b) Proved
- (c) 48 cm²
</details>

---

**Q56.** (a) From a point P outside a circle with center O, two tangents PA and PB are drawn. If ∠APB = 80°, find ∠AOB.
(b) Prove that OP is the perpendicular bisector of AB.
(c) If PA = 15 cm and OA = 9 cm, find OP.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) In quadrilateral OAPB:**
$$ ∠OAP + ∠OBP + ∠APB + ∠AOB = 360° $$
$$ 90° + 90° + 80° + ∠AOB = 360° $$
$$ ∠AOB = 110° $$

**(b) Proof:**

In ΔOAP and ΔOBP:
- OA = OB (radii)
- PA = PB (tangents from P)
- OP = OP (common)

ΔOAP ≅ ΔOBP (SSS)
∠AOP = ∠BOP (CPCT)

In ΔOAM and ΔOBM (where M is intersection of OP and AB):
- OA = OB
- ∠AOM = ∠BOM
- OM = OM

ΔOAM ≅ ΔOBM (SAS)
AM = BM and ∠OMA = ∠OMB = 90°

**Therefore,** OP is perpendicular bisector of AB.

**(c) In right ΔOAP:**
$$ OP^2 = OA^2 + PA^2 = 9^2 + 15^2 = 81 + 225 = 306 $$
$$ OP = \sqrt{306} = 3\sqrt{34} \text{ cm} $$

**Answers:**
- (a) ∠AOB = 110°
- (b) Proved
- (c) $3\sqrt{34}$ cm
</details>

---

**Q57.** (a) Prove that the tangents drawn at the ends of a chord of a circle make equal angles with the chord.
(b) If a chord makes an angle of 30° with the tangent at one end, find the angle subtended by the chord at the center.
(c) What is the angle subtended at any point on the alternate segment?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

**Given:** Chord AB, tangents at A and B meet at P

**To Prove:** ∠PAB = ∠PBA

**Proof:**
1. PA = PB (tangents from external point)
2. In ΔPAB: PA = PB
3. ∠PAB = ∠PBA (angles opposite equal sides)

**Proved.**

**(b) Given:** ∠PAB = 30°

∠OAB = 90° - 30° = 60° (tangent ⊥ radius)

In ΔOAB: OA = OB (radii)
∠OBA = ∠OAB = 60°

∠AOB = 180° - 60° - 60° = 60°

**(c) Angle at alternate segment:**

By alternate segment theorem:
Angle in alternate segment = ∠PAB = 30°

**Answers:**
- (b) ∠AOB = 60°
- (c) 30°
</details>

---

**Q58.** (a) A circle touches the side BC of a triangle ABC at P and touches AB and AC when produced at Q and R respectively. Prove that AQ = (Perimeter of ΔABC)/2.
(b) If AB = 10 cm, BC = 12 cm, and CA = 8 cm, find AQ.
(c) Find the length of BP and CP.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

Let the circle touch BC at P, AB produced at Q, and AC produced at R.

Tangents from A: AQ = AR
Tangents from B: BQ = BP
Tangents from C: CR = CP

Perimeter of ΔABC:
$$ AB + BC + CA = AB + (BP + CP) + CA $$
$$ = AB + BQ + CR + CA $$
$$ = (AB + BQ) + (CA + CR) $$
$$ = AQ + AR $$
$$ = 2AQ $$

**Therefore,** AQ = Perimeter/2 ✓

**(b) Perimeter = 10 + 12 + 8 = 30 cm**

$$ AQ = \frac{30}{2} = 15 \text{ cm} $$

**(c) Let BP = BQ = x and CP = CR = y**

x + y = 12 (BC)
AQ = AB + BQ = 10 + x = 15
x = 5 cm

y = 12 - 5 = 7 cm

**Answers:**
- (b) AQ = 15 cm
- (c) BP = 5 cm, CP = 7 cm
</details>

---

**Q59.** (a) Two circles touch each other externally at C. Prove that the common tangent at C bisects the other two common tangents.
(b) If the radii of the circles are 5 cm and 3 cm, find the length of the direct common tangent.
(c) Find the distance between the centers.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

Let the common tangent at C meet the other tangents at P and Q.

PC = QC (tangents from P to first circle)
PC = QC (tangents from Q to second circle)

**Therefore,** P and Q coincide, and the tangent at C bisects PQ.

**(b) Length of direct common tangent:**

$$ l = \sqrt{d^2 - (r_1 - r_2)^2} $$

where d = distance between centers = 5 + 3 = 8 cm

$$ l = \sqrt{8^2 - (5-3)^2} = \sqrt{64 - 4} = \sqrt{60} = 2\sqrt{15} \text{ cm} $$

**(c) Distance between centers:**

$$ d = r_1 + r_2 = 5 + 3 = 8 \text{ cm} $$

**Answers:**
- (b) $2\sqrt{15}$ cm
- (c) 8 cm
</details>

---

**Q60.** (a) State and prove the alternate segment theorem.
(b) In the given figure, if ∠BCD = 50°, find ∠BAD.
(c) Verify using the angle sum property of cyclic quadrilateral.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Alternate Segment Theorem:**

**Statement:** The angle between a tangent and a chord through the point of contact is equal to the angle in the alternate segment.

**Proof:**
1. Let tangent at A make angle θ with chord AB.
2. ∠OAB = 90° - θ (tangent ⊥ radius)
3. In ΔOAB: ∠AOB = 180° - 2(90° - θ) = 2θ
4. Angle at circumference = ∠AOB/2 = θ
5. **Therefore,** angle between tangent and chord = angle in alternate segment ✓

**(b) Given:** ∠BCD = 50°

By alternate segment theorem:
∠BAD = ∠BCD = 50°

**(c) Verification:**

In cyclic quadrilateral ABCD:
∠BAD + ∠BCD = 180° (if opposite angles)

But here, both angles are in the same segment, so they are equal.

**Answers:**
- (b) ∠BAD = 50°
- (c) Verified by alternate segment theorem
</details>

---

**Q61.** (a) From an external point P, a tangent PT and a secant PAB are drawn to a circle. Prove that PT² = PA × PB.
(b) If PT = 12 cm and PA = 8 cm, find AB.
(c) Verify your answer.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

**Given:** Tangent PT, secant PAB

**To Prove:** PT² = PA × PB

**Construction:** Join TA and TB

**Proof:**
In ΔPTA and ΔPBT:
1. ∠P = ∠P (common)
2. ∠PTA = ∠PBT (alternate segment theorem)
3. ΔPTA ~ ΔPBT (AA similarity)
4. PT/PB = PA/PT
5. PT² = PA × PB

**Proved.**

**(b) Given:** PT = 12 cm, PA = 8 cm

$$ PT^2 = PA \times PB $$
$$ 12^2 = 8 \times PB $$
$$ 144 = 8 \times PB $$
$$ PB = 18 \text{ cm} $$

AB = PB - PA = 18 - 8 = 10 cm

**(c) Verification:**

PT² = 144
PA × PB = 8 × 18 = 144 ✓

**Answers:**
- (b) AB = 10 cm
- (c) Verified: 144 = 144
</details>

---

**Q62.** (a) Two tangents PA and PB are drawn from an external point P to a circle with center O. Prove that OAPB is a cyclic quadrilateral.
(b) If ∠APB = 70°, find all angles of quadrilateral OAPB.
(c) Find the area of OAPB if PA = 10 cm and OA = 6 cm.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

In quadrilateral OAPB:
- ∠OAP = 90° (tangent ⊥ radius)
- ∠OBP = 90° (tangent ⊥ radius)
- ∠OAP + ∠OBP = 180°

Since opposite angles are supplementary, OAPB is cyclic.

**Proved.**

**(b) Given:** ∠APB = 70°

∠AOB = 360° - 90° - 90° - 70° = 110°

Angles of OAPB:
- ∠OAP = 90°
- ∠OBP = 90°
- ∠APB = 70°
- ∠AOB = 110°

**(c) Area of OAPB:**

Area = 2 × Area of ΔOAP
$$ = 2 \times \frac{1}{2} \times OA \times PA $$
$$ = 6 \times 10 = 60 \text{ cm}^2 $$

**Answers:**
- (b) 90°, 90°, 70°, 110°
- (c) 60 cm²
</details>

---

**Q63.** (a) A circle is inscribed in a right triangle ABC right-angled at B. If AB = 8 cm and BC = 6 cm, find the radius of the inscribed circle.
(b) Find the length of the hypotenuse AC.
(c) Verify using the formula r = (a + b - c)/2 for right triangle.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) & (b) Solution:**

Using Pythagoras theorem:
$$ AC^2 = AB^2 + BC^2 = 8^2 + 6^2 = 64 + 36 = 100 $$
$$ AC = 10 \text{ cm} $$

For inscribed circle in right triangle:
$$ r = \frac{\text{Area}}{s} $$

where s = semi-perimeter = (8 + 6 + 10)/2 = 12 cm

Area = $\frac{1}{2} \times 8 \times 6 = 24 \text{ cm}^2$

$$ r = \frac{24}{12} = 2 \text{ cm} $$

**(c) Verification:**

Using formula r = (a + b - c)/2:
$$ r = \frac{8 + 6 - 10}{2} = \frac{4}{2} = 2 \text{ cm} $$ ✓

**Answers:**
- (a) r = 2 cm
- (b) AC = 10 cm
- (c) Verified: r = 2 cm
</details>

---

**Q64.** (a) Prove that the parallelogram circumscribing a circle is a rhombus.
(b) If the diagonals of such a rhombus are 16 cm and 12 cm, find the radius of the inscribed circle.
(c) Find the side of the rhombus.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

**Given:** Parallelogram ABCD circumscribes a circle

**To Prove:** ABCD is a rhombus

Using tangent properties:
AB + CD = AD + BC

But in parallelogram: AB = CD and AD = BC

Therefore: 2AB = 2AD
AB = AD

**Hence,** all sides equal. ABCD is a rhombus.

**(b) Diagonals:** d₁ = 16 cm, d₂ = 12 cm

Area of rhombus = $\frac{1}{2} \times d_1 \times d_2 = \frac{1}{2} \times 16 \times 12 = 96 \text{ cm}^2$

Side of rhombus:
$$ a = \sqrt{\left(\frac{d_1}{2}\right)^2 + \left(\frac{d_2}{2}\right)^2} = \sqrt{8^2 + 6^2} = \sqrt{100} = 10 \text{ cm} $$

Semi-perimeter: s = 2a = 20 cm

$$ r = \frac{\text{Area}}{s} = \frac{96}{20} = 4.8 \text{ cm} $$

**(c) Side of rhombus = 10 cm**

**Answers:**
- (b) r = 4.8 cm
- (c) Side = 10 cm
</details>

---

**Q65.** (a) Two circles of radii 5 cm and 3 cm touch each other externally. Find the length of the direct common tangent.
(b) If the circles touch internally, find the length of the transverse common tangent.
(c) Prove that the point of contact divides the line joining centers in the ratio of radii.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) External touch:**

Distance between centers: d = 5 + 3 = 8 cm

Length of direct common tangent:
$$ l = \sqrt{d^2 - (r_1 - r_2)^2} = \sqrt{8^2 - (5-3)^2} = \sqrt{64 - 4} = \sqrt{60} = 2\sqrt{15} \text{ cm} $$

**(b) Internal touch:**

Distance between centers: d = 5 - 3 = 2 cm

Length of transverse common tangent:
$$ l = \sqrt{d^2 - (r_1 - r_2)^2} $$

But for internal touch, transverse tangent doesn't exist (d < r₁ - r₂ is not satisfied).

**(c) Proof:**

Let circles touch at C.

O₁C = r₁, O₂C = r₂

O₁C : O₂C = r₁ : r₂

**Therefore,** C divides O₁O₂ in ratio r₁ : r₂.

**Answers:**
- (a) $2\sqrt{15}$ cm
- (b) Not applicable for internal touch
- (c) Proved: Ratio = r₁ : r₂
</details>

---

## 6. Exam-Oriented Preparation

### 📝 Important Formulas & Theorems to Memorize

#### Basic Circle Formulas:

$$ \text{Circumference} = 2\pi r $$
$$ \text{Area} = \pi r^2 $$
$$ \text{Diameter} = 2r $$

#### Tangent Properties:

**1. Tangent is Perpendicular to Radius:**
$$ \text{Tangent} \perp \text{Radius at point of contact} $$

**2. Lengths of Tangents from External Point:**
$$ PA = PB $$

**3. Length of Tangent:**
$$ l = \sqrt{d^2 - r^2} $$

where d = distance from center, r = radius

---

### 🎯 Expected Question Patterns (CBSE Class 10)

#### 1 Mark Questions (MCQ/Very Short Answer):
- Finding length of tangent
- Number of tangents from a point
- Angle between tangent and radius
- Basic properties of tangents

#### 2 Mark Questions (Short Answer):
- Proving tangents are equal
- Finding angles using tangent properties
- Simple chord and tangent problems
- Circumscribing triangle/ quadrilateral problems

#### 3 Mark Questions (Long Answer):
- Proving theorems on tangents
- Complex problems with multiple tangents
- Concentric circles problems
- Inscribed circle in triangle problems

#### 5 Mark Questions (Very Long Answer):
- Comprehensive problems combining multiple concepts
- Proof-based questions with calculations
- Real-life application problems
- Circle with triangle/quadrilateral combinations

---

### 💡 Exam Tips:

1. ✅ **Remember: Tangent ⊥ Radius** at point of contact
2. ✅ **Tangents from external point are equal** in length
3. ✅ **Draw clear diagrams** with all tangents and radii
4. ✅ **Use Pythagoras theorem** for right triangles formed
5. ✅ **For circumscribing quadrilateral:** AB + CD = AD + BC
6. ✅ **Angle sum in quadrilateral** = 360°
7. ✅ **Mark right angles** where tangent meets radius
8. ✅ **Use congruent triangles** for proving equality

---

### 🔴 Common Mistakes to Avoid:

| Mistake | Correction |
|---------|------------|
| Forgetting tangent ⊥ radius | Always mark 90° at point of contact |
| Assuming all chords are equal | Only tangents from same point are equal |
| Wrong angle sum in quadrilateral | Sum = 360°, not 180° |
| Confusing secant with tangent | Secant cuts at 2 points, tangent at 1 point |
| Forgetting units in answer | Always write cm, m, etc. |

---

### 📚 Previous Year Questions (CBSE Pattern)

**Q1 (CBSE 2024):** From a point P, the length of the tangent to a circle is 15 cm and the distance of P from the center is 17 cm. Find the radius.

**Answer:** 8 cm

---

**Q2 (CBSE 2023):** Two tangents are inclined at 70°. Find the angle subtended at the center.

**Answer:** 110°

---

**Q3 (CBSE 2023):** Prove that tangents from an external point are equal.

**Answer:** Use RHS congruence.

---

**Q4 (CBSE 2022):** A circle touches all sides of a quadrilateral. Prove that opposite sides subtend supplementary angles at center.

**Answer:** Use tangent properties and angle sum.

---

**Q5 (CBSE 2022):** Find the length of chord of larger circle (r = 5) touching smaller circle (r = 3).

**Answer:** 8 cm

---

**Q6 (CBSE 2021):** Triangle ABC circumscribes a circle. Find AD, BE, CF given sides.

**Answer:** Use tangent length properties.

---

**Q7 (CBSE 2021):** Prove that tangents at ends of diameter are parallel.

**Answer:** Both perpendicular to same line.

---

**Q8 (CBSE 2020):** Quadrilateral ABCD circumscribes a circle. If AB = 6, BC = 7, CD = 4, find AD.

**Answer:** 3 cm

---

**Q9 (CBSE 2020):** Two concentric circles, radii 5 cm and 3 cm. Find chord length.

**Answer:** 8 cm

---

**Q10 (CBSE 2019):** Tangent PQ at P of circle (r = 5) meets line through O at Q. OQ = 13. Find PQ.

**Answer:** 12 cm

---

## 7. Revision Notes

### 📌 Quick Revision Sheet

#### Key Definitions:

| Term | Definition |
|------|------------|
| **Tangent** | Line intersecting circle at exactly one point |
| **Secant** | Line intersecting circle at two points |
| **Point of Contact** | Point where tangent touches circle |
| **Chord** | Line segment joining two points on circle |
| **Circumscribing** | Figure drawn around circle (circle inside) |
| **Inscribed** | Figure drawn inside circle (circle outside) |

---

#### Important Theorems:

**1. Tangent-Radius Theorem:**
Tangent is perpendicular to radius at point of contact.

**2. Equal Tangents Theorem:**
Tangents from external point are equal in length.

**3. Circumscribing Quadrilateral:**
AB + CD = AD + BC

---

#### Key Formulas:

**Length of Tangent:**
$$ l = \sqrt{d^2 - r^2} $$

**Circumference:**
$$ C = 2\pi r $$

**Area:**
$$ A = \pi r^2 $$

**For Right Triangle:**
$$ r = \frac{a + b - c}{2} $$

---

#### Number of Tangents:

| Point Position | Number of Tangents |
|----------------|-------------------|
| On the circle | 1 |
| Outside circle | 2 |
| Inside circle | 0 |

---

#### Important Results:

- Tangents at ends of diameter are **parallel**
- Chord touching smaller concentric circle is **bisected** at point of contact
- Parallelogram circumscribing circle is a **rhombus**
- Opposite sides of circumscribing quadrilateral subtend **supplementary** angles at center

---

### 🎓 Final Checklist Before Exam:

- [ ] I know the tangent-radius theorem
- [ ] I can prove tangents from external point are equal
- [ ] I can find length of tangent using Pythagoras
- [ ] I know properties of circumscribing figures
- [ ] I can solve concentric circles problems
- [ ] I remember angle sum in quadrilateral = 360°
- [ ] I have practiced all 30 MCQs
- [ ] I have practiced all 20 Short Answer questions
- [ ] I have practiced all 15 Long Answer questions
- [ ] I always draw diagrams with right angles marked

---

### 📊 Quick Formula Sheet:

**Tangent Length:**
$$ l = \sqrt{d^2 - r^2} $$

**Circumscribing Quadrilateral:**
$$ AB + CD = AD + BC $$

**Right Triangle (inscribed circle):**
$$ r = \frac{a + b - c}{2} $$

**Angle in Quadrilateral:**
$$ ∠APB + ∠AOB = 180° $$

---

**Good luck with your studies! 🌟**

> Remember: Always mark the right angle where tangent meets radius!

---

**End of Learning Path - Circles**
