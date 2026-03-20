# Constructions - Learning Path

## 1. Concept Introduction

### What are Geometric Constructions?

**Geometric Constructions** are the process of drawing geometric figures using only two instruments:
1. **Compass** - For drawing circles and arcs
2. **Straightedge (Ruler without markings)** - For drawing straight lines

**Everyday Applications:**
- 🏗️ Architecture and building design
- 🎨 Art and decorative patterns
- 🔧 Engineering drawings and blueprints
- 🗺️ Map making and surveying
- 💻 Computer graphics and CAD design
- 🔬 Scientific diagrams and illustrations

### Basic Construction Tools:

```
CONSTRUCTION TOOLS

    Compass              Straightedge
       /\                    _______
      /  \                  |       |
     /    \                 |_______|
    |      |
    |      |
    \      /
     \    /
      \  /
       \/
    Point
```

**Important Rules:**
| Tool | Purpose | Restrictions |
|------|---------|--------------|
| **Compass** | Draw circles, arcs, mark equal distances | Cannot measure lengths |
| **Straightedge** | Draw straight lines, join points | Cannot measure lengths (no markings) |

---

### Why Study Constructions?

1. **Develops precision** in drawing
2. **Understanding geometric properties** deeply
3. **Builds logical thinking** and step-by-step reasoning
4. **Foundation for advanced geometry** and engineering
5. **Historical significance** - Used by ancient Greeks

---

## 2. Micro-topic Breakdown

This chapter is divided into the following key concepts:

```
Constructions
├── 2.1 Basic Constructions
│   ├── Bisector of a line segment
│   ├── Perpendicular bisector
│   ├── Angle bisector
│   └── Constructing angles (30°, 45°, 60°, 90°)
├── 2.2 Division of a Line Segment
│   ├── Internal division in given ratio
│   ├── Justification using Basic Proportionality Theorem
│   └── Steps and construction
├── 2.3 Construction of Similar Triangles
│   ├── Triangle similar to given triangle
│   ├── Scale factor concept
│   ├── Sides larger than original
│   └── Sides smaller than original
└── 2.4 Construction of Tangents to a Circle
    ├── Tangents from external point
    ├── Justification using Pythagoras theorem
    └── Steps and construction
```

---

## 3. Concept Explanations

### 3.1 Basic Constructions

#### A. Perpendicular Bisector of a Line Segment

**Given:** A line segment AB

**To Construct:** Perpendicular bisector of AB

**Steps:**

```
Step 1: Draw line segment AB

    A ________________________ B

Step 2: With A as center and radius more than half of AB,
        draw arcs above and below AB

    A ________________________ B
         )                  (
         )                  (

Step 3: With same radius and B as center,
        draw arcs intersecting previous arcs

    A ________________________ B
         )    X           X    (
         )                  (
              X           X

Step 4: Join the intersection points P and Q

    A ________________________ B
         )    X-----------X    (
         )    P         Q      (
              X           X

    PQ is the perpendicular bisector
```

**Justification:**
- AP = BP (same radius)
- AQ = BQ (same radius)
- PQ = PQ (common)
- ΔAPQ ≅ ΔBPQ (SSS)
- Therefore, PQ bisects AB at 90°

---

#### B. Angle Bisector

**Given:** An angle ∠ABC

**To Construct:** Bisector of ∠ABC

**Steps:**

```
Step 1: Draw ∠ABC

         A
        /
       /
      /
     B ____________________ C

Step 2: With B as center, draw an arc cutting BA and BC at D and E

         A
        / 
       D  (arc)
      /E
     B ____________________ C

Step 3: With D and E as centers, draw intersecting arcs

         A
        / 
       D  X F
      /E
     B ____________________ C

Step 4: Join BF

         A
        /
       / 
      /  F
     B ____________________ C

    BF is the angle bisector
```

**Justification:**
- BD = BE (same radius)
- DF = EF (same radius)
- BF = BF (common)
- ΔBDF ≅ ΔBEF (SSS)
- Therefore, ∠ABF = ∠FBC

---

### 3.2 Division of a Line Segment

#### To divide a line segment AB in the ratio m:n

**Given:** Line segment AB and ratio m:n (e.g., 3:2)

**To Construct:** Point P on AB such that AP:PB = m:n

**Steps:**

```
Step 1: Draw line segment AB

    A ________________________ B

Step 2: Draw ray AX making acute angle with AB

         X
        /
       /
      /
     A ________________________ B

Step 3: Mark (m+n) equal points on AX
        (for 3:2, mark 5 points)

         X
        / A₁
       /   A₂
      /     A₃
     A _______A₄___________ B
                A₅

Step 4: Join A₅(m+n) to B

         X
        / A₁
       /   A₂
      /     A₃
     A _______A₄___________ B
                A₅
                  \
                   \
                    \
                     B

Step 5: Draw line through A₃(m) parallel to A₅B
        intersecting AB at P

         X
        / A₁
       /   A₂
      /     A₃
     A _______P______A₄___________ B
                |    A₅
                |   /
                |  /
                | /
                B

    AP:PB = 3:2
```

**Justification:**
By Basic Proportionality Theorem (Thales Theorem):
$$ \frac{AP}{PB} = \frac{AA_3}{A_3A_5} = \frac{3}{2} $$

---

### 3.3 Construction of Similar Triangles

#### To construct a triangle similar to given triangle with scale factor m/n

**Case 1: Scale factor < 1 (Sides smaller)**

**Given:** ΔABC, scale factor 3/4

**To Construct:** ΔAB'C' similar to ΔABC with sides 3/4 of corresponding sides

**Steps:**

```
Step 1: Draw ΔABC

         A
        / \
       /   \
      /     \
     B _______ C

Step 2: Draw ray BX making acute angle with BC

         A
        / \
       /   \
      /     \
     B _______ C
      \
       \
        X

Step 3: Mark 4 points (larger of m,n) on BX

         A
        / \
       /   \
      /     \
     B __B₁__B₂__B₃__B₄_______ C
      \
       \
        X

Step 4: Join B₄ to C

         A
        / \
       /   \
      /     \
     B __B₁__B₂__B₃__B₄_______ C
      \                      /
       \                    /
        \                  /
         X

Step 5: Draw line through B₃ parallel to B₄C
        intersecting BC at C'

         A
        / \
       /   \
      /     \
     B __B₁__B₂__B₃__C'__B₄_______ C
      \         |        /
       \        |       /
        \       |      /
         X

Step 6: Draw line through C' parallel to CA
        intersecting BA at A'

         A
        /|\
       / | \
      /  |  \
     /   C'  \
    B _________ C
     \
      \
       X

    ΔA'BC' is the required triangle
```

**Justification:**
- C'A' || CA (by construction)
- Therefore, ΔA'BC' ~ ΔABC (AA similarity)
- Scale factor = BC'/BC = 3/4

---

### 3.4 Construction of Tangents to a Circle

#### To construct tangents from an external point P to a circle

**Given:** A circle with center O and external point P

**To Construct:** Tangents from P to the circle

**Steps:**

```
Step 1: Draw circle with center O and point P outside

              P
              
         . - - - .
       .'         '.
      /             \
     |       O       |
      \             /
       '.         .'
         ' - - - '

Step 2: Join OP and bisect it at M

              P
               \
                \
                 M
                /
               /
         . - -O- - .
       .'         '.
      /             \
     |               |
      \             /
       '.         .'
         ' - - - '

Step 3: With M as center and MO as radius,
        draw a circle intersecting given circle at T and T'

              P
               \
                \
                 M
                / \
               /   \
         . - T-O- -T'- .
       .'   /     \    '.
      /   /         \    \
     |   |           |   |
      \   \         /    /
       '.   \     /    .'
         ' - T - T' - '

Step 4: Join PT and PT'

              P
             / \
            /   \
           /     \
          /       \
         T---------T'
         . - - - .
       .'   O     '.
      /             \
     |               |
      \             /
       '.         .'
         ' - - - '

    PT and PT' are the required tangents
```

**Justification:**
- ∠OTP = 90° (angle in semicircle)
- OT ⊥ PT
- Therefore, PT is tangent (radius ⊥ tangent at point of contact)
- Similarly, PT' is tangent
- PT = PT' (tangents from external point)

---

## 4. Guided Examples

### Example 1: Division of Line Segment

**Question:** Draw a line segment of length 8 cm and divide it in the ratio 3:2. Measure the two parts.

**Step-by-Step Solution:**

**Step 1:** Draw line segment AB = 8 cm

**Step 2:** Draw ray AX making acute angle with AB

**Step 3:** Mark 5 points (3+2) on AX at equal distances
- A₁, A₂, A₃, A₄, A₅

**Step 4:** Join A₅ to B

**Step 5:** Draw line through A₃ parallel to A₅B intersecting AB at P

**Step 6:** Measure the parts
- AP = 4.8 cm (3/5 of 8)
- PB = 3.2 cm (2/5 of 8)

**Verification:**
$$ \frac{AP}{PB} = \frac{4.8}{3.2} = \frac{3}{2} $$ ✓

**Final Answer:** AP = 4.8 cm, PB = 3.2 cm

---

### Example 2: Construction of Similar Triangle (Smaller)

**Question:** Construct a triangle similar to ΔABC with sides 2/3 of corresponding sides of ΔABC, where AB = 6 cm, BC = 7 cm, and AC = 8 cm.

**Step-by-Step Solution:**

**Step 1:** Construct ΔABC with given measurements

**Step 2:** Draw ray BX making acute angle with BC

**Step 3:** Mark 3 points B₁, B₂, B₃ on BX (larger of 2,3)

**Step 4:** Join B₃ to C

**Step 5:** Draw line through B₂ parallel to B₃C intersecting BC at C'

**Step 6:** Draw line through C' parallel to CA intersecting BA at A'

**Step 7:** ΔA'BC' is the required triangle

**Measurements:**
- A'B = 2/3 × 6 = 4 cm
- BC' = 2/3 × 7 ≈ 4.67 cm
- A'C' = 2/3 × 8 ≈ 5.33 cm

**Final Answer:** ΔA'BC' with sides 2/3 of original triangle

---

### Example 3: Construction of Similar Triangle (Larger)

**Question:** Construct a triangle similar to ΔABC with sides 5/3 times the corresponding sides of ΔABC.

**Step-by-Step Solution:**

**Step 1:** Draw ΔABC

**Step 2:** Draw ray BX making acute angle with BC

**Step 3:** Mark 5 points B₁, B₂, B₃, B₄, B₅ on BX (larger of 5,3)

**Step 4:** Join B₃ to C

**Step 5:** Draw line through B₅ parallel to B₃C intersecting BC produced at C'

**Step 6:** Draw line through C' parallel to CA intersecting BA produced at A'

**Step 7:** ΔA'BC' is the required triangle

**Scale Factor:** 5/3 (sides are larger)

**Final Answer:** ΔA'BC' with sides 5/3 times the original

---

### Example 4: Tangents from External Point

**Question:** Draw a circle of radius 4 cm. From a point 7 cm away from the center, construct tangents to the circle. Measure the length of tangents.

**Step-by-Step Solution:**

**Step 1:** Draw circle with center O and radius 4 cm

**Step 2:** Mark point P such that OP = 7 cm

**Step 3:** Bisect OP at M

**Step 4:** With M as center and MO as radius, draw a circle

**Step 5:** Mark intersection points T and T' with original circle

**Step 6:** Join PT and PT'

**Step 7:** Measure PT and PT'

**Calculation:**
$$ PT = \sqrt{OP^2 - OT^2} = \sqrt{7^2 - 4^2} = \sqrt{49 - 16} = \sqrt{33} ≈ 5.74 \text{ cm} $$

**Final Answer:** Length of each tangent ≈ 5.74 cm

---

### Example 5: Tangents Inclined at an Angle

**Question:** Draw a circle of radius 5 cm. Construct two tangents inclined to each other at an angle of 60°.

**Step-by-Step Solution:**

**Step 1:** Draw circle with center O and radius 5 cm

**Step 2:** Draw radius OA

**Step 3:** Draw radius OB such that ∠AOB = 120° (180° - 60°)

**Step 4:** Draw perpendicular at A to OA

**Step 5:** Draw perpendicular at B to OB

**Step 6:** Mark intersection point P of the two perpendiculars

**Step 7:** PA and PB are the required tangents

**Justification:**
In quadrilateral OAPB:
- ∠OAP = ∠OBP = 90°
- ∠AOB = 120°
- ∠APB = 360° - 90° - 90° - 120° = 60°

**Final Answer:** Tangents PA and PB inclined at 60°

---

## 5. Practice Questions

### SECTION A: Multiple Choice Questions (30 Questions - 1 Mark Each)

**Q1.** To divide a line segment AB in the ratio 5:7, the minimum number of points to be marked on ray AX is:
- (A) 5
- (B) 7
- (C) 12
- (D) 2

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 12

**Explanation:** Total points = m + n = 5 + 7 = 12
</details>

---

**Q2.** To construct a triangle similar to given triangle with scale factor 3/5, we need to mark how many points on the ray?
- (A) 3
- (B) 5
- (C) 8
- (D) 2

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 5

**Explanation:** We mark the larger of m and n, which is 5.
</details>

---

**Q3.** The angle between a tangent and the radius through the point of contact is:
- (A) 45°
- (B) 60°
- (C) 90°
- (D) 180°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 90°

**Explanation:** Tangent is always perpendicular to radius at point of contact.
</details>

---

**Q4.** To draw a pair of tangents to a circle which are inclined at an angle of 45°, the angle between the radii at the points of contact should be:
- (A) 135°
- (B) 90°
- (C) 45°
- (D) 180°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 135°

**Explanation:** In quadrilateral: 90° + 90° + θ + 45° = 360°, so θ = 135°
</details>

---

**Q5.** In the construction of division of a line segment in ratio m:n, the ray AX makes an angle with AB that is:
- (A) 90°
- (B) 60°
- (C) Acute
- (D) Obtuse

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Acute

**Explanation:** The ray AX makes an acute angle with AB for convenient construction.
</details>

---

**Q6.** To construct tangents from a point outside the circle, we first need to:
- (A) Draw diameter
- (B) Bisect the line joining center and point
- (C) Draw perpendicular
- (D) Draw angle bisector

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Bisect the line joining center and point

**Explanation:** We bisect OP to find the center of the auxiliary circle.
</details>

---

**Q7.** The scale factor in construction of similar triangles is defined as the ratio of:
- (A) Areas
- (B) Corresponding sides
- (C) Perimeters
- (D) Angles

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Corresponding sides

**Explanation:** Scale factor = ratio of corresponding sides of similar triangles.
</details>

---

**Q8.** If scale factor is less than 1, the new triangle is:
- (A) Larger than original
- (B) Smaller than original
- (C) Equal to original
- (D) Cannot be determined

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Smaller than original

**Explanation:** Scale factor < 1 means sides are reduced.
</details>

---

**Q9.** To divide a line segment in ratio 2:3, the point of division lies:
- (A) Outside the segment
- (B) On the segment
- (C) At the midpoint
- (D) At one endpoint

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) On the segment

**Explanation:** For internal division, point lies on the segment.
</details>

---

**Q10.** The number of tangents that can be drawn from an external point to a circle is:
- (A) 1
- (B) 2
- (C) 3
- (D) Infinite

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 2

**Explanation:** Exactly two tangents can be drawn from an external point.
</details>

---

**Q11.** In constructing perpendicular bisector, the radius should be:
- (A) Equal to half the segment
- (B) Less than half the segment
- (C) More than half the segment
- (D) Equal to the segment

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) More than half the segment

**Explanation:** Radius must be more than half for arcs to intersect.
</details>

---

**Q12.** To construct an angle of 60°, we first construct:
- (A) Equilateral triangle
- (B) Isosceles triangle
- (C) Right triangle
- (D) Scalene triangle

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) Equilateral triangle

**Explanation:** Each angle of equilateral triangle is 60°.
</details>

---

**Q13.** If two tangents are inclined at 60°, the length of each tangent when radius is 6 cm is:
- (A) 6 cm
- (B) 6√3 cm
- (C) 3√3 cm
- (D) 12 cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 6√3 cm

**Explanation:** In right triangle, tan 30° = 6/l, so l = 6√3 cm
</details>

---

**Q14.** The point of intersection of perpendicular bisectors of a triangle is called:
- (A) Centroid
- (B) Orthocenter
- (C) Circumcenter
- (D) Incenter

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Circumcenter

**Explanation:** Circumcenter is equidistant from all vertices.
</details>

---

**Q15.** To construct a triangle similar with scale factor 7/4, the new triangle will be:
- (A) Smaller
- (B) Larger
- (C) Equal
- (D) Cannot say

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Larger

**Explanation:** Scale factor 7/4 > 1, so triangle is larger.
</details>

---

**Q16.** In division of line segment AB in ratio 3:4, if AB = 14 cm, then the larger part is:
- (A) 6 cm
- (B) 8 cm
- (C) 10 cm
- (D) 12 cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 8 cm

**Explanation:** Larger part = 4/7 × 14 = 8 cm
</details>

---

**Q17.** The instrument NOT used in geometric constructions is:
- (A) Compass
- (B) Protractor
- (C) Straightedge
- (D) Ruler without markings

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Protractor

**Explanation:** Protractor is used for measuring angles, not in pure constructions.
</details>

---

**Q18.** To construct tangents inclined at angle θ, the angle between radii is:
- (A) θ
- (B) 90° - θ
- (C) 180° - θ
- (D) 180° + θ

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 180° - θ

**Explanation:** In quadrilateral: 90° + 90° + (180°-θ) + θ = 360°
</details>

---

**Q19.** For constructing 30° angle, we bisect:
- (A) 90° angle
- (B) 60° angle
- (C) 45° angle
- (D) 120° angle

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 60° angle

**Explanation:** Bisecting 60° gives 30°.
</details>

---

**Q20.** The length of tangent from point 13 cm from center of circle (r = 5 cm) is:
- (A) 8 cm
- (B) 10 cm
- (C) 12 cm
- (D) 15 cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 12 cm

**Explanation:** l = √(13² - 5²) = √144 = 12 cm
</details>

---

**Q21.** In similar triangle construction, if scale factor is 1, then:
- (A) Triangles are congruent
- (B) Triangles are different
- (C) One is larger
- (D) One is smaller

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) Triangles are congruent

**Explanation:** Scale factor 1 means equal corresponding sides.
</details>

---

**Q22.** To draw perpendicular at a point on a line, we use:
- (A) Angle bisector method
- (B) Perpendicular bisector method
- (C) Both (A) and (B)
- (D) None of these

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Both (A) and (B)

**Explanation:** Both methods can be used.
</details>

---

**Q23.** The justification for division of line segment uses:
- (A) Pythagoras theorem
- (B) Basic Proportionality Theorem
- (C) Angle sum property
- (D) Congruence

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Basic Proportionality Theorem

**Explanation:** Thales theorem justifies the ratio.
</details>

---

**Q24.** To construct 45° angle, we bisect:
- (A) 60°
- (B) 90°
- (C) 120°
- (D) 30°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 90°

**Explanation:** Bisecting 90° gives 45°.
</details>

---

**Q25.** If tangents from P are 8 cm each and radius is 6 cm, then OP is:
- (A) 8 cm
- (B) 10 cm
- (C) 12 cm
- (D) 14 cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 10 cm

**Explanation:** OP = √(8² + 6²) = √100 = 10 cm
</details>

---

**Q26.** In constructing similar triangle with scale factor 2/5, we mark points on ray:
- (A) 2
- (B) 5
- (C) 7
- (D) 3

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 5

**Explanation:** We mark the larger number, which is 5.
</details>

---

**Q27.** The tangents drawn at the ends of a diameter are:
- (A) Perpendicular
- (B) Intersecting
- (C) Parallel
- (D) Coincident

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Parallel

**Explanation:** Both perpendicular to same diameter.
</details>

---

**Q28.** To construct a right triangle, we need minimum:
- (A) 2 sides
- (B) 1 side and 1 angle
- (C) 2 angles
- (D) Any of these

<details>
<summary>✓ Show Answer</summary>

**Answer:** (D) Any of these

**Explanation:** Any combination can construct a right triangle.
</details>

---

**Q29.** The point where angle bisectors of triangle meet is called:
- (A) Centroid
- (B) Orthocenter
- (C) Circumcenter
- (D) Incenter

<details>
<summary>✓ Show Answer</summary>

**Answer:** (D) Incenter

**Explanation:** Incenter is center of inscribed circle.
</details>

---

**Q30.** For external division of line segment in ratio 2:3, the point lies:
- (A) On the segment
- (B) Outside the segment
- (C) At midpoint
- (D) At endpoint

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Outside the segment

**Explanation:** External division means point is outside.
</details>

---

### SECTION B: Short Answer Questions (20 Questions - 2-3 Marks Each)

**Q31.** Draw a line segment of length 7.6 cm and divide it in the ratio 5:8. Measure the two parts.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Steps:**
1. Draw AB = 7.6 cm
2. Draw ray AX making acute angle
3. Mark 13 points (5+8) on AX
4. Join A₁₃ to B
5. Draw line through A₅ parallel to A₁₃B

**Measurements:**
- First part = 5/13 × 7.6 = 2.92 cm
- Second part = 8/13 × 7.6 = 4.68 cm

**Answer:** Parts are 2.92 cm and 4.68 cm
</details>

---

**Q32.** Construct a triangle similar to ΔABC with sides 3/4 of corresponding sides, where AB = 5 cm, BC = 6 cm, AC = 7 cm.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Steps:**
1. Construct ΔABC with given sides
2. Draw ray BX at acute angle to BC
3. Mark 4 points B₁, B₂, B₃, B₄
4. Join B₄ to C
5. Draw line through B₃ parallel to B₄C meeting BC at C'
6. Draw line through C' parallel to CA meeting BA at A'

**New sides:**
- A'B = 3/4 × 5 = 3.75 cm
- BC' = 3/4 × 6 = 4.5 cm
- A'C' = 3/4 × 7 = 5.25 cm

**Answer:** ΔA'BC' with sides 3.75 cm, 4.5 cm, 5.25 cm
</details>

---

**Q33.** Draw a circle of radius 5 cm. From a point 8 cm away from center, construct tangents and measure their lengths.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Steps:**
1. Draw circle with center O, radius 5 cm
2. Mark P such that OP = 8 cm
3. Bisect OP at M
4. Draw circle with center M, radius MO
5. Join intersection points to P

**Length calculation:**
$$ PT = \sqrt{OP^2 - OT^2} = \sqrt{8^2 - 5^2} = \sqrt{64 - 25} = \sqrt{39} ≈ 6.24 \text{ cm} $$

**Answer:** Length of each tangent ≈ 6.24 cm
</details>

---

**Q34.** Construct two tangents to a circle of radius 4 cm inclined at 60° to each other.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Steps:**
1. Draw circle with center O, radius 4 cm
2. Draw radius OA
3. Draw radius OB such that ∠AOB = 120°
4. Draw perpendicular at A to OA
5. Draw perpendicular at B to OB
6. Mark intersection P

**Justification:**
∠APB = 360° - 90° - 90° - 120° = 60°

**Answer:** Tangents PA and PB inclined at 60°
</details>

---

**Q35.** Divide a line segment of 10 cm in ratio 2:3 and verify using Basic Proportionality Theorem.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Construction:**
1. Draw AB = 10 cm
2. Draw ray AX
3. Mark 5 points
4. Join A₅ to B
5. Draw parallel through A₂

**Parts:**
- First part = 2/5 × 10 = 4 cm
- Second part = 3/5 × 10 = 6 cm

**Verification:**
$$ \frac{AP}{PB} = \frac{4}{6} = \frac{2}{3} $$ ✓

**Answer:** Parts are 4 cm and 6 cm
</details>

---

**Q36.** Construct an isosceles triangle with base 6 cm and altitude 4 cm. Then construct another triangle with sides 3/2 times the corresponding sides.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Steps for isosceles triangle:**
1. Draw base BC = 6 cm
2. Draw perpendicular bisector
3. Mark A at 4 cm from BC
4. Join AB and AC

**For larger triangle:**
1. Draw ray BX
2. Mark 3 points (larger of 3,2)
3. Join B₂ to C
4. Draw parallel through B₃

**New dimensions:**
- Base = 3/2 × 6 = 9 cm
- Altitude = 3/2 × 4 = 6 cm

**Answer:** Triangle with base 9 cm, altitude 6 cm
</details>

---

**Q37.** Draw a circle with center O and radius 6 cm. Take point P at distance 10 cm from O. Construct tangents and verify using Pythagoras theorem.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Construction:** Standard tangent construction

**Verification:**
$$ PT^2 = OP^2 - OT^2 $$
$$ PT^2 = 10^2 - 6^2 = 100 - 36 = 64 $$
$$ PT = 8 \text{ cm} $$

**Answer:** Tangent length = 8 cm (verified)
</details>

---

**Q38.** Construct a triangle ABC with AB = 5 cm, ∠B = 60°, BC = 7 cm. Then construct similar triangle with scale factor 2/3.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Steps:**
1. Draw AB = 5 cm
2. Construct 60° at B
3. Cut BC = 7 cm
4. Join AC

**For similar triangle:**
- Mark 3 points on ray
- Join B₃ to C
- Draw parallel through B₂

**New sides:**
- A'B = 2/3 × 5 ≈ 3.33 cm
- BC' = 2/3 × 7 ≈ 4.67 cm

**Answer:** ΔA'BC' with sides 2/3 of original
</details>

---

**Q39.** Prove that the tangents drawn from an external point to a circle are equal in length.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** Circle with center O, external point P, tangents PA and PB

**To Prove:** PA = PB

**Construction:** Join OA, OB, OP

**Proof:**
In ΔOAP and ΔOBP:
- OA = OB (radii)
- OP = OP (common)
- ∠OAP = ∠OBP = 90°

ΔOAP ≅ ΔOBP (RHS)

PA = PB (CPCT)

**Proved.**
</details>

---

**Q40.** Construct perpendicular bisector of a line segment 8 cm long. Justify the construction.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Steps:**
1. Draw AB = 8 cm
2. With A as center, radius > 4 cm, draw arcs
3. With same radius and B as center, draw intersecting arcs
4. Join intersection points

**Justification:**
- AP = BP, AQ = BQ (same radius)
- PQ = PQ (common)
- ΔAPQ ≅ ΔBPQ (SSS)
- PQ bisects AB at 90°

**Answer:** Perpendicular bisector constructed and justified
</details>

---

**Q41.** Draw a pair of tangents to a circle of radius 5 cm which are inclined at 45°.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Steps:**
1. Draw circle, radius 5 cm
2. Draw radii OA and OB with ∠AOB = 135°
3. Draw perpendiculars at A and B
4. Mark intersection P

**Justification:**
∠APB = 360° - 90° - 90° - 135° = 45°

**Answer:** Tangents inclined at 45°
</details>

---

**Q42.** Construct a right triangle with sides 4 cm and 3 cm containing right angle. Then construct similar triangle with sides 5/3 times.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Steps:**
1. Draw BC = 3 cm
2. Construct 90° at B
3. Cut BA = 4 cm
4. Join AC

**For larger triangle:**
- Mark 5 points
- Join B₃ to C
- Draw parallel through B₅

**New sides:**
- 5/3 × 3 = 5 cm
- 5/3 × 4 ≈ 6.67 cm

**Answer:** Triangle with sides 5 cm and 6.67 cm
</details>

---

**Q43.** Divide a line segment of 9 cm internally in ratio 4:5. Write the lengths of parts.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Construction:** Standard division method with 9 points

**Lengths:**
- First part = 4/9 × 9 = 4 cm
- Second part = 5/9 × 9 = 5 cm

**Answer:** Parts are 4 cm and 5 cm
</details>

---

**Q44.** Construct tangents from a point on the concentric circle of radius 8 cm to a circle of radius 5 cm. Measure and verify.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Construction:**
1. Draw both circles with common center O
2. Take point P on larger circle
3. Bisect OP
4. Draw auxiliary circle
5. Join tangents

**Verification:**
$$ PT = \sqrt{8^2 - 5^2} = \sqrt{64 - 25} = \sqrt{39} ≈ 6.24 \text{ cm} $$

**Answer:** Tangent length ≈ 6.24 cm
</details>

---

**Q45.** Construct an equilateral triangle of side 6 cm. Then construct similar triangle with scale factor 3/4.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Steps:**
1. Draw BC = 6 cm
2. Draw arcs from B and C with radius 6 cm
3. Mark intersection A
4. Join AB and AC

**For smaller triangle:**
- Mark 4 points
- Join B₄ to C
- Draw parallel through B₃

**New side:** 3/4 × 6 = 4.5 cm

**Answer:** Equilateral triangle with side 4.5 cm
</details>

---

**Q46.** Justify why we mark (m+n) points for dividing line segment in ratio m:n.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Justification:**

By Basic Proportionality Theorem:
If AₘAₙ || AB, then:
$$ \frac{AA_m}{A_mA_{m+n}} = \frac{AP}{PB} $$

Since points are equidistant:
$$ \frac{AA_m}{A_mA_{m+n}} = \frac{m}{n} $$

Therefore:
$$ \frac{AP}{PB} = \frac{m}{n} $$

**Answer:** (m+n) points ensure correct ratio by BPT
</details>

---

**Q47.** Construct tangents from external point P to circle with center O. If OP = 13 cm and radius = 5 cm, find tangent length.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Construction:** Standard method

**Calculation:**
$$ PT = \sqrt{OP^2 - OT^2} = \sqrt{13^2 - 5^2} = \sqrt{169 - 25} = \sqrt{144} = 12 \text{ cm} $$

**Answer:** Tangent length = 12 cm
</details>

---

**Q48.** Construct a triangle with sides 5 cm, 6 cm, 7 cm. Then construct similar triangle with sides 7/5 times.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Steps:**
1. Construct ΔABC with given sides
2. Draw ray BX
3. Mark 7 points (larger)
4. Join B₅ to C
5. Draw parallel through B₇

**New sides:**
- 7/5 × 5 = 7 cm
- 7/5 × 6 = 8.4 cm
- 7/5 × 7 = 9.8 cm

**Answer:** Triangle with sides 7 cm, 8.4 cm, 9.8 cm
</details>

---

**Q49.** Draw angle of 60° and bisect it. Measure the resulting angles.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Steps:**
1. Draw ∠ABC = 60° (equilateral triangle method)
2. Bisect using standard method
3. Measure parts

**Result:**
Each angle = 30°

**Answer:** Two angles of 30° each
</details>

---

**Q50.** Construct perpendicular to a line from a point outside it. Justify.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Steps:**
1. Draw line l and point P outside
2. With P as center, draw arc cutting l at A and B
3. With A and B as centers, draw intersecting arcs
4. Join P to intersection

**Justification:**
- PA = PB (same radius)
- QA = QB (same radius)
- PQ is perpendicular bisector of AB

**Answer:** Perpendicular constructed and justified
</details>

---

### SECTION C: Long Answer Questions (15 Questions - 5 Marks Each)

**Q51.** (a) Draw a line segment of length 8.4 cm and divide it internally in the ratio 3:4.
(b) Measure the two parts and verify the ratio.
(c) Justify the construction using Basic Proportionality Theorem.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Construction:**
1. Draw AB = 8.4 cm
2. Draw ray AX at acute angle
3. Mark 7 points (3+4) at equal distances
4. Join A₇ to B
5. Draw line through A₃ parallel to A₇B

**(b) Measurement:**
- First part = 3/7 × 8.4 = 3.6 cm
- Second part = 4/7 × 8.4 = 4.8 cm

**Verification:**
$$ \frac{3.6}{4.8} = \frac{3}{4} $$ ✓

**(c) Justification:**

By Basic Proportionality Theorem:
In ΔAA₇B, since A₃P || A₇B:
$$ \frac{AP}{PB} = \frac{AA_3}{A_3A_7} = \frac{3}{4} $$

**Answer:** Parts are 3.6 cm and 4.8 cm
</details>

---

**Q52.** (a) Construct a triangle ABC with BC = 7 cm, ∠B = 45°, ∠A = 105°.
(b) Construct similar triangle with sides 4/3 times the corresponding sides.
(c) Justify the construction.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Construction:**
∠C = 180° - 105° - 45° = 30°
1. Draw BC = 7 cm
2. Construct 45° at B
3. Construct 30° at C
4. Mark intersection A

**(b) For larger triangle:**
1. Draw ray BX
2. Mark 4 points
3. Join B₃ to C
4. Draw parallel through B₄

**(c) Justification:**

By construction, C'A' || CA
Therefore, ΔA'BC' ~ ΔABC (AA similarity)

Scale factor = BC'/BC = 4/3

**Answer:** ΔA'BC' with scale factor 4/3
</details>

---

**Q53.** (a) Draw a circle of radius 6 cm.
(b) From a point 10 cm away from center, construct pair of tangents.
(c) Measure the length of tangents and verify using Pythagoras theorem.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) & (b) Construction:**
1. Draw circle with center O, radius 6 cm
2. Mark P such that OP = 10 cm
3. Bisect OP at M
4. Draw circle with center M, radius MO
5. Join intersection points to P

**(c) Measurement & Verification:**

By measurement: PT ≈ 8 cm

By calculation:
$$ PT = \sqrt{OP^2 - OT^2} = \sqrt{10^2 - 6^2} = \sqrt{100 - 36} = \sqrt{64} = 8 \text{ cm} $$

**Verified.**

**Answer:** Tangent length = 8 cm
</details>

---

**Q54.** (a) Construct two tangents to a circle of radius 5 cm inclined at 60° to each other.
(b) Measure the distance between points of contact.
(c) Find the length of each tangent.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Construction:**
1. Draw circle, radius 5 cm
2. Draw radii with 120° between them
3. Draw perpendiculars at endpoints
4. Mark intersection P

**(b) Distance between contact points:**

In ΔOAB (isosceles with ∠AOB = 120°):
$$ AB = 2 \times 5 \times \sin 60° = 10 \times \frac{\sqrt{3}}{2} = 5\sqrt{3} \text{ cm} $$

**(c) Length of tangent:**

In right ΔOAP:
$$ \tan 30° = \frac{5}{PA} $$
$$ PA = \frac{5}{\tan 30°} = 5\sqrt{3} \text{ cm} $$

**Answers:**
- (b) 5√3 cm
- (c) 5√3 cm
</details>

---

**Q55.** (a) Construct a right triangle with sides 6 cm and 8 cm containing right angle.
(b) Construct similar triangle with sides 3/5 times.
(c) Find the area of both triangles and verify the ratio.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Construction:**
1. Draw BC = 8 cm
2. Construct 90° at B
3. Cut BA = 6 cm
4. Join AC

**(b) For smaller triangle:**
1. Mark 5 points on ray
2. Join B₅ to C
3. Draw parallel through B₃

**(c) Area calculation:**

Original area = 1/2 × 6 × 8 = 24 cm²

New sides: 3/5 × 6 = 3.6 cm, 3/5 × 8 = 4.8 cm

New area = 1/2 × 3.6 × 4.8 = 8.64 cm²

**Ratio:**
$$ \frac{8.64}{24} = 0.36 = \left(\frac{3}{5}\right)^2 $$ ✓

**Answer:** Areas in ratio 9:25
</details>

---

**Q56.** (a) Draw a circle of radius 4 cm.
(b) Construct tangents from an external point P such that OP = 9 cm.
(c) Prove that the tangents are equal and find their length.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) & (b) Construction:** Standard tangent construction

**(c) Proof:**

In ΔOAP and ΔOBP:
- OA = OB (radii)
- OP = OP (common)
- ∠OAP = ∠OBP = 90°

ΔOAP ≅ ΔOBP (RHS)

PA = PB (CPCT)

**Length:**
$$ PA = \sqrt{OP^2 - OA^2} = \sqrt{9^2 - 4^2} = \sqrt{81 - 16} = \sqrt{65} \text{ cm} $$

**Answer:** Tangents equal, length = √65 cm
</details>

---

**Q57.** (a) Construct an isosceles triangle with base 8 cm and altitude 5 cm.
(b) Construct similar triangle with sides 5/4 times.
(c) Find the altitude of new triangle.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Construction:**
1. Draw base BC = 8 cm
2. Draw perpendicular bisector
3. Mark A at 5 cm
4. Join AB and AC

**(b) For larger triangle:**
1. Mark 5 points
2. Join B₄ to C
3. Draw parallel through B₅

**(c) New altitude:**

$$ \text{New altitude} = \frac{5}{4} \times 5 = 6.25 \text{ cm} $$

**Answer:** Altitude = 6.25 cm
</details>

---

**Q58.** (a) Divide a line segment of 12 cm in ratio 5:3 externally.
(b) Measure the segments.
(c) Verify the ratio.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Construction:**
1. Draw AB = 12 cm
2. Draw ray AX
3. Mark 5 points in one direction, 3 in opposite
4. Join and draw parallel

**(b) Measurement:**
- External division point P
- AP = 5/2 × 12 = 30 cm
- BP = 3/2 × 12 = 18 cm

**(c) Verification:**
$$ \frac{AP}{BP} = \frac{30}{18} = \frac{5}{3} $$ ✓

**Answer:** AP = 30 cm, BP = 18 cm
</details>

---

**Q59.** (a) Construct tangents from point P to circle with center O.
(b) If ∠APB = 50°, find ∠AOB.
(c) Prove that OAPB is a cyclic quadrilateral.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Construction:** Standard method

**(b) Angle calculation:**

In quadrilateral OAPB:
$$ ∠AOB = 360° - 90° - 90° - 50° = 130° $$

**(c) Proof:**

In quadrilateral OAPB:
- ∠OAP + ∠OBP = 90° + 90° = 180°

Since opposite angles are supplementary, OAPB is cyclic.

**Answer:** ∠AOB = 130°, OAPB is cyclic
</details>

---

**Q60.** (a) Construct triangle ABC with AB = 6 cm, BC = 8 cm, AC = 10 cm.
(b) Construct similar triangle with scale factor 1/2.
(c) Verify that area ratio equals square of scale factor.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Construction:** SSS construction

**(b) For smaller triangle:**
1. Mark 2 points
2. Join B₂ to C
3. Draw parallel through B₁

**(c) Verification:**

Original area (Heron's formula):
s = (6+8+10)/2 = 24/2 = 12
$$ A = \sqrt{12(12-6)(12-8)(12-10)} = \sqrt{12 \times 6 \times 4 \times 2} = 24 \text{ cm}^2 $$

New sides: 3 cm, 4 cm, 5 cm
New area = 1/2 × 3 × 4 = 6 cm²

**Ratio:**
$$ \frac{6}{24} = \frac{1}{4} = \left(\frac{1}{2}\right)^2 $$ ✓

**Answer:** Area ratio = 1:4
</details>

---

**Q61.** (a) Draw concentric circles of radii 4 cm and 7 cm.
(b) Construct tangent from point on larger circle to smaller circle.
(c) Measure and verify the tangent length.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) & (b) Construction:**
1. Draw both circles with center O
2. Take P on larger circle
3. Bisect OP
4. Draw auxiliary circle
5. Join tangent

**(c) Verification:**

$$ PT = \sqrt{OP^2 - OT^2} = \sqrt{7^2 - 4^2} = \sqrt{49 - 16} = \sqrt{33} ≈ 5.74 \text{ cm} $$

**Answer:** Tangent length ≈ 5.74 cm
</details>

---

**Q62.** (a) Construct perpendicular bisector of chord AB of circle.
(b) Prove it passes through center.
(c) If AB = 10 cm and distance from center is 3 cm, find radius.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Construction:** Standard perpendicular bisector

**(b) Proof:**

Perpendicular from center bisects chord.
Conversely, perpendicular bisector of chord passes through center.

**(c) Radius calculation:**

In right triangle:
$$ r^2 = 5^2 + 3^2 = 25 + 9 = 34 $$
$$ r = \sqrt{34} \text{ cm} $$

**Answer:** Radius = √34 cm
</details>

---

**Q63.** (a) Construct pair of tangents inclined at 75°.
(b) Find angle between radii.
(c) If radius is 6 cm, find length of tangents.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Construction:**
1. Draw circle, radius 6 cm
2. Draw radii with 105° between them
3. Draw perpendiculars

**(b) Angle between radii:**

$$ ∠AOB = 180° - 75° = 105° $$

**(c) Tangent length:**

In right ΔOAP:
$$ \tan 37.5° = \frac{6}{PA} $$
$$ PA = \frac{6}{\tan 37.5°} ≈ 7.85 \text{ cm} $$

**Answers:**
- (b) 105°
- (c) ≈ 7.85 cm
</details>

---

**Q64.** (a) Construct triangle with sides 7 cm, 8 cm, 9 cm.
(b) Construct similar triangle with area 4/9 of original.
(c) What is the scale factor?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Construction:** SSS method

**(b) Scale factor from area ratio:**

$$ \text{Scale factor}^2 = \frac{4}{9} $$
$$ \text{Scale factor} = \frac{2}{3} $$

**(c) Construction:**
1. Mark 3 points
2. Join B₃ to C
3. Draw parallel through B₂

**New sides:**
- 2/3 × 7 ≈ 4.67 cm
- 2/3 × 8 ≈ 5.33 cm
- 2/3 × 9 = 6 cm

**Answer:** Scale factor = 2/3
</details>

---

**Q65.** (a) State the steps to construct tangents from external point P to circle with center O.
(b) Justify why the construction gives tangents.
(c) If OP = 15 cm and tangent length = 12 cm, find radius.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Steps:**
1. Join OP and bisect at M
2. Draw circle with center M, radius MO
3. Mark intersection points T and T'
4. Join PT and PT'

**(b) Justification:**

∠OTP = 90° (angle in semicircle)
OT ⊥ PT
Therefore, PT is tangent (radius ⊥ tangent)

Similarly, PT' is tangent.

**(c) Radius calculation:**

$$ r^2 = OP^2 - PT^2 = 15^2 - 12^2 = 225 - 144 = 81 $$
$$ r = 9 \text{ cm} $$

**Answer:** Radius = 9 cm
</details>

---

## 6. Exam-Oriented Preparation

### 📝 Important Formulas & Theorems to Memorize

#### Basic Proportionality Theorem (Thales Theorem):

If a line is drawn parallel to one side of a triangle intersecting the other two sides, then:
$$ \frac{AD}{DB} = \frac{AE}{EC} $$

#### Scale Factor:

$$ \text{Scale Factor} = \frac{\text{Side of new triangle}}{\text{Corresponding side of original triangle}} $$

#### Tangent Length:

$$ \text{Tangent Length} = \sqrt{d^2 - r^2} $$

where d = distance from center, r = radius

#### Angle Relationship:

$$ \text{Angle between tangents} + \text{Angle between radii} = 180° $$

---

### 🎯 Expected Question Patterns (CBSE Class 10)

#### 1 Mark Questions (MCQ/Very Short Answer):
- Number of points to mark for given ratio
- Scale factor identification
- Angle between tangent and radius
- Basic construction steps

#### 2 Mark Questions (Short Answer):
- Division of line segment
- Constructing tangents with measurements
- Basic similar triangle construction
- Justification of simple constructions

#### 3 Mark Questions (Long Answer):
- Similar triangle with scale factor
- Tangents with specific angle
- Multi-step constructions
- Construction with verification

#### 5 Mark Questions (Very Long Answer):
- Comprehensive construction problems
- Construction with proof/justification
- Combination of multiple concepts
- Real-life application problems

---

### 💡 Exam Tips:

1. ✅ **Use sharp pencil** for clear, thin lines
2. ✅ **Keep compass tight** for accurate arcs
3. ✅ **Mark all points clearly** with labels
4. ✅ **Show construction lines** (don't erase)
5. ✅ **Write steps of construction** clearly
6. ✅ **Justify when asked** using proper theorems
7. ✅ **Measure accurately** with ruler
8. ✅ **Keep figure clean** and well-organized

---

### 🔴 Common Mistakes to Avoid:

| Mistake | Correction |
|---------|------------|
| Using marked ruler | Use only straightedge (unmarked) |
| Erasing construction lines | Keep all arcs and lines visible |
| Wrong number of points | Mark max(m,n) for similar triangles |
| Forgetting justification | Write proof when asked |
| Inaccurate measurements | Use sharp tools, measure carefully |

---

### 📚 Previous Year Questions (CBSE Pattern)

**Q1 (CBSE 2024):** Divide a line segment of 7 cm in ratio 3:2.

**Answer:** Parts are 4.2 cm and 2.8 cm

---

**Q2 (CBSE 2023):** Construct tangents from point 8 cm from center of circle (r = 5 cm).

**Answer:** Tangent length = √39 cm

---

**Q3 (CBSE 2023):** Construct similar triangle with scale factor 2/3.

**Answer:** Mark 3 points, use 2nd point for parallel.

---

**Q4 (CBSE 2022):** Draw tangents inclined at 60° to circle of radius 4 cm.

**Answer:** Angle between radii = 120°

---

**Q5 (CBSE 2022):** Justify division of line segment construction.

**Answer:** Uses Basic Proportionality Theorem.

---

**Q6 (CBSE 2021):** Construct right triangle 3-4-5, then similar with scale 3/2.

**Answer:** New sides 4.5, 6, 7.5 cm

---

**Q7 (CBSE 2021):** Find tangent length if OP = 13 cm, r = 5 cm.

**Answer:** 12 cm

---

**Q8 (CBSE 2020):** Construct perpendicular bisector of 8 cm segment.

**Answer:** Radius > 4 cm for arcs

---

**Q9 (CBSE 2020):** Scale factor 5/4 means triangle is:

**Answer:** Larger

---

**Q10 (CBSE 2019):** Angle between tangents is 45°. Find angle between radii.

**Answer:** 135°

---

## 7. Revision Notes

### 📌 Quick Revision Sheet

#### Key Construction Steps:

| Construction | Key Points |
|--------------|------------|
| **Division of segment** | Mark (m+n) points, join last to end |
| **Similar triangle (<1)** | Mark larger number, join to vertex |
| **Similar triangle (>1)** | Extend sides, mark larger number |
| **Tangents from point** | Bisect OP, draw auxiliary circle |

---

#### Important Theorems:

**1. Basic Proportionality Theorem:**
$$ \frac{AD}{DB} = \frac{AE}{EC} $$

**2. Tangent Properties:**
- Tangent ⊥ Radius at contact
- Tangents from external point equal

**3. Similar Triangles:**
- Corresponding angles equal
- Corresponding sides proportional

---

#### Scale Factor Rules:

| Scale Factor | New Triangle | Points to Mark |
|--------------|--------------|----------------|
| < 1 | Smaller | Larger number |
| > 1 | Larger | Larger number |
| = 1 | Congruent | Either number |

---

#### Angle Relationships:

$$ \text{∠between tangents} + \text{∠between radii} = 180° $$

---

### 🎓 Final Checklist Before Exam:

- [ ] I know steps for division of line segment
- [ ] I can construct similar triangles (both cases)
- [ ] I can construct tangents from external point
- [ ] I know justification for each construction
- [ ] I keep construction lines visible
- [ ] I use proper instruments correctly
- [ ] I have practiced all 30 MCQs
- [ ] I have practiced all 20 Short Answer questions
- [ ] I have practiced all 15 Long Answer questions
- [ ] I can complete constructions accurately in time

---

### 📊 Quick Formula Sheet:

**Division Ratio:**
$$ \frac{AP}{PB} = \frac{m}{n} $$

**Scale Factor:**
$$ k = \frac{\text{New side}}{\text{Original side}} $$

**Tangent Length:**
$$ l = \sqrt{d^2 - r^2} $$

**Angle Relationship:**
$$ θ_{\text{tangents}} + θ_{\text{radii}} = 180° $$

---

**Good luck with your studies! 🌟**

> Remember: Practice constructions with proper instruments for accuracy!

---

**End of Learning Path - Constructions**
