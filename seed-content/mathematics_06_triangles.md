# Triangles - Learning Path

## 1. Concept Introduction

### What is a Triangle?

A **triangle** is a closed figure formed by three line segments. It has three vertices, three sides, and three angles.

**Everyday Examples:**
- 🏠 Roof tops of houses
- 🚦 Traffic signal boards (warning signs)
- 🎸 Guitar picks
- 🏔️ Mountain peaks (triangular shape)
- 📐 Set squares used in geometry

### Understanding Triangles:

```
        A
       / \
      /   \
     /     \
    /       \
   B---------C
   
Vertices: A, B, C
Sides: AB, BC, CA
Angles: ∠A, ∠B, ∠C
```

**Key Components:**

| Term | Meaning | Symbol | Example |
|------|---------|--------|---------|
| **Vertices** | Corner points of triangle | A, B, C | Three vertices |
| **Sides** | Line segments forming triangle | AB, BC, CA | Three sides |
| **Angles** | Angles at vertices | ∠A, ∠B, ∠C | Sum = 180° |
| **Altitude** | Perpendicular from vertex to opposite side | h | Height |
| **Median** | Line from vertex to midpoint of opposite side | m | Divides side equally |

---

## 2. Micro-topic Breakdown

This chapter is divided into the following key concepts:

```
Triangles
├── 6.1 Introduction to Triangles
│   ├── Types of triangles
│   ├── Properties of triangles
│   └── Congruence vs Similarity
├── 6.2 Similar Figures
│   ├── Definition of similarity
│   ├── Conditions for similarity
│   └── Scale factor
├── 6.3 Similarity of Triangles
│   ├── AAA similarity criterion
│   ├── SSS similarity criterion
│   └── SAS similarity criterion
├── 6.4 Areas of Similar Triangles
│   ├── Ratio of areas theorem
│   └── Applications
├── 6.5 Pythagoras Theorem
│   ├── Statement and proof
│   ├── Converse of Pythagoras theorem
│   └── Applications
└── 6.6 Applications
    ├── Real-life problems
    └── Geometric constructions
```

---

## 3. Concept Explanations

### 3.1 Introduction to Triangles

#### Types of Triangles:

**Based on Sides:**

| Type | Description | Diagram |
|------|-------------|---------|
| **Equilateral** | All three sides equal | All sides = a |
| **Isosceles** | Two sides equal | AB = AC |
| **Scalene** | All sides different | AB ≠ BC ≠ CA |

**Based on Angles:**

| Type | Description | Angles |
|------|-------------|--------|
| **Acute** | All angles < 90° | All acute |
| **Right** | One angle = 90° | One right angle |
| **Obtuse** | One angle > 90° | One obtuse angle |

#### Properties of Triangles:

1. **Angle Sum Property:** Sum of all angles = 180°
   $$ \angle A + \angle B + \angle C = 180° $$

2. **Triangle Inequality:** Sum of any two sides > third side
   $$ AB + BC > CA $$
   $$ BC + CA > AB $$
   $$ CA + AB > BC $$

3. **Exterior Angle Property:** Exterior angle = Sum of two opposite interior angles

---

### 3.2 Similar Figures

Two figures are **similar** if they have the same shape but not necessarily the same size.

#### Conditions for Similarity:

For two polygons to be similar:
1. Corresponding angles are equal
2. Corresponding sides are in proportion (same ratio)

**Scale Factor:** The ratio of corresponding sides

$$ \text{Scale Factor} = \frac{\text{Side of Figure 1}}{\text{Corresponding Side of Figure 2}} $$

---

### 3.3 Similarity of Triangles

Two triangles are similar if their corresponding angles are equal and corresponding sides are proportional.

#### Criteria for Similarity:

**1. AAA (Angle-Angle-Angle) Similarity Criterion:**

If two triangles have all three corresponding angles equal, then their corresponding sides are proportional.

```
    A                    D
   / \                  / \
  /   \                /   \
 /     \              /     \
B-------C            E-------F

If ∠A = ∠D, ∠B = ∠E, ∠C = ∠F
Then: AB/DE = BC/EF = CA/FD
```

**2. SSS (Side-Side-Side) Similarity Criterion:**

If the corresponding sides of two triangles are proportional, then their corresponding angles are equal.

$$ \frac{AB}{DE} = \frac{BC}{EF} = \frac{CA}{FD} \Rightarrow \triangle ABC \sim \triangle DEF $$

**3. SAS (Side-Angle-Side) Similarity Criterion:**

If one angle of a triangle is equal to one angle of another triangle and the sides including these angles are proportional, then the triangles are similar.

$$ \frac{AB}{DE} = \frac{AC}{DF} \text{ and } \angle A = \angle D \Rightarrow \triangle ABC \sim \triangle DEF $$

---

### 3.4 Areas of Similar Triangles

#### Theorem:

The ratio of the areas of two similar triangles is equal to the **square of the ratio of their corresponding sides**.

$$ \frac{\text{Area}(\triangle ABC)}{\text{Area}(\triangle DEF)} = \left(\frac{AB}{DE}\right)^2 = \left(\frac{BC}{EF}\right)^2 = \left(\frac{CA}{FD}\right)^2 $$

#### Proof Outline:

```
    A                 D
   /|\                |\
  / | \               | \
 /  |  \              |  \
B---H---C            E---G---F

Draw altitudes AH and DG
Area = 1/2 × base × height
Ratio of areas = (BC × AH) / (EF × DG)
Since triangles are similar: BC/EF = AH/DG
Therefore: Ratio of areas = (BC/EF)²
```

---

### 3.5 Pythagoras Theorem

#### Statement:

In a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.

$$ \text{Hypotenuse}^2 = \text{Base}^2 + \text{Height}^2 $$

$$ c^2 = a^2 + b^2 $$

```
       A
      /|
     / |
  c /  | b
   /   |
  /____|
 B  a  C

AB² = BC² + AC²
c² = a² + b²
```

#### Converse of Pythagoras Theorem:

If in a triangle, the square of one side is equal to the sum of the squares of the other two sides, then the angle opposite the first side is a right angle.

$$ \text{If } c^2 = a^2 + b^2, \text{ then } \angle C = 90° $$

---

## 4. Guided Examples

### Example 1: Identifying Similar Triangles

**Question:** In the figure, DE || BC. Prove that $\triangle ADE \sim \triangle ABC$.

```
    A
   / \
  /   \
 D-----E
 /     \
B-------C
```

**Step-by-Step Solution:**

| Step | Action | Reasoning |
|------|--------|-----------|
| 1 | Identify given | DE || BC |
| 2 | Find angles | ∠ADE = ∠ABC (corresponding angles) |
| 3 | Find angles | ∠AED = ∠ACB (corresponding angles) |
| 4 | Common angle | ∠A = ∠A (common) |
| 5 | Apply criterion | All three angles equal |
| 6 | Conclusion | By AAA similarity, $\triangle ADE \sim \triangle ABC$ |

**Final Answer:** $\triangle ADE \sim \triangle ABC$ (by AAA similarity)

---

### Example 2: Using SSS Similarity

**Question:** Check if triangles with sides 3cm, 4cm, 5cm and 6cm, 8cm, 10cm are similar.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify sides | Triangle 1: 3, 4, 5 |
| | | Triangle 2: 6, 8, 10 |
| 2 | Find ratios | 3/6 = 1/2 |
| | | 4/8 = 1/2 |
| | | 5/10 = 1/2 |
| 3 | Compare ratios | All ratios equal (1/2) |
| 4 | Apply SSS | Corresponding sides proportional |
| 5 | Conclusion | Triangles are similar |

**Final Answer:** Yes, triangles are similar (by SSS similarity)

---

### Example 3: Area Ratio of Similar Triangles

**Question:** If $\triangle ABC \sim \triangle DEF$ and AB = 6cm, DE = 9cm, find the ratio of their areas.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify given | AB = 6cm, DE = 9cm |
| 2 | Find side ratio | AB/DE = 6/9 = 2/3 |
| 3 | Apply area theorem | Area ratio = (side ratio)² |
| 4 | Calculate | (2/3)² = 4/9 |
| 5 | Express ratio | Area(ABC) : Area(DEF) = 4 : 9 |

**Final Answer:** Ratio of areas = **4 : 9**

---

### Example 4: Pythagoras Theorem Application

**Question:** In a right triangle, if the hypotenuse is 13cm and one side is 5cm, find the third side.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify given | Hypotenuse c = 13cm, side a = 5cm |
| 2 | Apply theorem | $c^2 = a^2 + b^2$ |
| 3 | Substitute | $13^2 = 5^2 + b^2$ |
| 4 | Calculate | $169 = 25 + b^2$ |
| 5 | Solve | $b^2 = 144$ |
| 6 | Find b | $b = 12$cm |

**Final Answer:** Third side = **12 cm**

---

### Example 5: Real-life Application

**Question:** A ladder 10m long reaches a window 8m above the ground. Find the distance of the foot of the ladder from the base of the wall.

**Step-by-Step Solution:**

```
    Wall
     |
     | 8m
     |
     A
    /|
   / |
  /  |
10m  |
 /   |
B----C
  ?
```

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify triangle | Right triangle ABC |
| 2 | Identify sides | AB = 10m (hypotenuse), AC = 8m |
| 3 | Apply Pythagoras | $AB^2 = AC^2 + BC^2$ |
| 4 | Substitute | $10^2 = 8^2 + BC^2$ |
| 5 | Calculate | $100 = 64 + BC^2$ |
| 6 | Solve | $BC^2 = 36$ |
| 7 | Find BC | $BC = 6$m |

**Final Answer:** Distance = **6 meters**

---

## 5. Practice Questions

### SECTION A: Multiple Choice Questions (30 Questions - 1 Mark Each)

**Q1.** Two triangles are similar if their:
- (A) Areas are equal
- (B) Corresponding angles are equal
- (C) Corresponding sides are equal
- (D) Perimeters are equal

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Corresponding angles are equal

**Explanation:** For similarity, corresponding angles must be equal and corresponding sides proportional.
</details>

---

**Q2.** In $\triangle ABC$, if $AB^2 = AC^2 + BC^2$, then the right angle is at:
- (A) A
- (B) B
- (C) C
- (D) Cannot be determined

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) C

**Explanation:** By Pythagoras theorem, the right angle is opposite to the hypotenuse AB.
</details>

---

**Q3.** If $\triangle ABC \sim \triangle DEF$ and $\frac{AB}{DE} = \frac{2}{3}$, then $\frac{\text{Area}(ABC)}{\text{Area}(DEF)}$ is:
- (A) 2:3
- (B) 3:2
- (C) 4:9
- (D) 9:4

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 4:9

**Explanation:** Ratio of areas = (Ratio of sides)² = $(2/3)^2 = 4/9$
</details>

---

**Q4.** The sides of a triangle are 3cm, 4cm, and 5cm. The triangle is:
- (A) Acute angled
- (B) Right angled
- (C) Obtuse angled
- (D) Isosceles

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Right angled

**Explanation:** $3^2 + 4^2 = 9 + 16 = 25 = 5^2$ (satisfies Pythagoras theorem)
</details>

---

**Q5.** In the figure, if DE || BC, then $\triangle ADE$ and $\triangle ABC$ are similar by:
- (A) SSS
- (B) SAS
- (C) AAA
- (D) RHS

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) AAA

**Explanation:** Corresponding angles are equal when lines are parallel.
</details>

---

**Q6.** The ratio of areas of two similar triangles is 16:25. The ratio of their corresponding sides is:
- (A) 16:25
- (B) 25:16
- (C) 4:5
- (D) 5:4

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 4:5

**Explanation:** Ratio of sides = $\sqrt{\text{Ratio of areas}} = \sqrt{16/25} = 4/5$
</details>

---

**Q7.** In an equilateral triangle, all angles are:
- (A) 45°
- (B) 60°
- (C) 90°
- (D) 120°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 60°

**Explanation:** All angles in equilateral triangle are equal and sum to 180°.
</details>

---

**Q8.** If two triangles are congruent, then they are:
- (A) Similar
- (B) Not similar
- (C) May or may not be similar
- (D) None of these

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) Similar

**Explanation:** Congruent triangles have equal corresponding angles and sides (ratio 1:1).
</details>

---

**Q9.** The length of the altitude of an equilateral triangle of side 'a' is:
- (A) $\frac{\sqrt{3}}{2}a$
- (B) $\frac{a}{2}$
- (C) $\sqrt{3}a$
- (D) $\frac{a}{\sqrt{3}}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $\frac{\sqrt{3}}{2}a$

**Explanation:** Using Pythagoras theorem in half of equilateral triangle.
</details>

---

**Q10.** In $\triangle ABC$, if $\angle A = 90°$, AB = 12cm, AC = 5cm, then BC is:
- (A) 13cm
- (B) 17cm
- (C) 7cm
- (D) 11cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 13cm

**Explanation:** $BC = \sqrt{12^2 + 5^2} = \sqrt{144 + 25} = \sqrt{169} = 13$cm
</details>

---

**Q11.** Two isosceles triangles have equal angles and their areas are in ratio 16:25. The ratio of their corresponding heights is:
- (A) 16:25
- (B) 25:16
- (C) 4:5
- (D) 5:4

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 4:5

**Explanation:** Ratio of heights = Ratio of corresponding sides = $\sqrt{16/25} = 4/5$
</details>

---

**Q12.** Which of the following is NOT a criterion for similarity of triangles?
- (A) AAA
- (B) SSS
- (C) SAS
- (D) SSA

<details>
<summary>✓ Show Answer</summary>

**Answer:** (D) SSA

**Explanation:** SSA is not a valid criterion for similarity (or congruence).
</details>

---

**Q13.** In a right triangle, the hypotenuse is:
- (A) The smallest side
- (B) The largest side
- (C) Equal to one side
- (D) None of these

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) The largest side

**Explanation:** Hypotenuse is opposite to the right angle (90°), the largest angle.
</details>

---

**Q14.** If $\triangle ABC \sim \triangle DEF$ and $\angle A = 50°$, $\angle B = 60°$, then $\angle F$ is:
- (A) 50°
- (B) 60°
- (C) 70°
- (D) 80°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 70°

**Explanation:** $\angle C = 180° - 50° - 60° = 70°$. Since similar, $\angle F = \angle C = 70°$
</details>

---

**Q15.** The sides of two similar triangles are in ratio 3:7. Their areas are in ratio:
- (A) 3:7
- (B) 7:3
- (C) 9:49
- (D) 49:9

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 9:49

**Explanation:** Area ratio = (Side ratio)² = $(3/7)^2 = 9/49$
</details>

---

**Q16.** In $\triangle PQR$, if $PQ^2 + QR^2 = PR^2$, then the right angle is at:
- (A) P
- (B) Q
- (C) R
- (D) Cannot say

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Q

**Explanation:** Right angle is opposite to hypotenuse PR.
</details>

---

**Q17.** The perimeter of two similar triangles are 30cm and 20cm. If one side of first triangle is 12cm, the corresponding side of second is:
- (A) 8cm
- (B) 10cm
- (C) 15cm
- (D) 18cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 8cm

**Explanation:** Ratio = 30:20 = 3:2. Corresponding side = $12 \times \frac{2}{3} = 8$cm
</details>

---

**Q18.** In an isosceles right triangle, the acute angles are:
- (A) 30°, 60°
- (B) 45°, 45°
- (C) 60°, 60°
- (D) 50°, 40°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 45°, 45°

**Explanation:** Both acute angles equal in isosceles right triangle. Sum = 90°, so each = 45°
</details>

---

**Q19.** If the areas of two similar triangles are equal, then the triangles are:
- (A) Similar only
- (B) Congruent
- (C) Equilateral
- (D) Isosceles

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Congruent

**Explanation:** Equal areas with similarity ratio 1:1 means congruent.
</details>

---

**Q20.** A triangle with sides 7cm, 24cm, 25cm is:
- (A) Acute angled
- (B) Right angled
- (C) Obtuse angled
- (D) Isosceles

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Right angled

**Explanation:** $7^2 + 24^2 = 49 + 576 = 625 = 25^2$
</details>

---

**Q21.** In $\triangle ABC$, DE || BC. If AD = 3cm, DB = 2cm, AE = 4.5cm, then EC is:
- (A) 2cm
- (B) 3cm
- (C) 4cm
- (D) 5cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 3cm

**Explanation:** By BPT: $\frac{AD}{DB} = \frac{AE}{EC} \Rightarrow \frac{3}{2} = \frac{4.5}{EC} \Rightarrow EC = 3$cm
</details>

---

**Q22.** The ratio of corresponding altitudes of two similar triangles is 5:7. The ratio of their areas is:
- (A) 5:7
- (B) 25:49
- (C) 7:5
- (D) 49:25

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 25:49

**Explanation:** Area ratio = (Altitude ratio)² = $(5/7)^2 = 25/49$
</details>

---

**Q23.** In a right triangle with legs 8cm and 15cm, the hypotenuse is:
- (A) 17cm
- (B) 23cm
- (C) 13cm
- (D) 21cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 17cm

**Explanation:** $\sqrt{8^2 + 15^2} = \sqrt{64 + 225} = \sqrt{289} = 17$cm
</details>

---

**Q24.** Two equilateral triangles are always:
- (A) Congruent
- (B) Similar
- (C) Equal in area
- (D) None of these

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Similar

**Explanation:** All angles are 60° in both, so they are similar (AAA criterion).
</details>

---

**Q25.** If $\triangle ABC \sim \triangle DEF$ and BC:EF = 4:5, then perimeter(ABC):perimeter(DEF) is:
- (A) 4:5
- (B) 5:4
- (C) 16:25
- (D) 25:16

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 4:5

**Explanation:** Ratio of perimeters = Ratio of corresponding sides
</details>

---

**Q26.** In $\triangle ABC$, if AB = AC and $\angle B = 50°$, then $\angle A$ is:
- (A) 50°
- (B) 60°
- (C) 80°
- (D) 100°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 80°

**Explanation:** $\angle C = \angle B = 50°$ (isosceles). $\angle A = 180° - 50° - 50° = 80°$
</details>

---

**Q27.** The sides of a triangle are in ratio 3:4:5. The triangle is:
- (A) Acute
- (B) Right
- (C) Obtuse
- (D) Isosceles

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Right

**Explanation:** $(3k)^2 + (4k)^2 = 9k^2 + 16k^2 = 25k^2 = (5k)^2$
</details>

---

**Q28.** In the figure, if $\triangle ABC \sim \triangle DEF$, AB = 9cm, DE = 6cm, and Area(ABC) = 81cm², then Area(DEF) is:
- (A) 36cm²
- (B) 54cm²
- (C) 24cm²
- (D) 48cm²

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 36cm²

**Explanation:** Side ratio = 9:6 = 3:2. Area ratio = 9:4. Area(DEF) = $81 \times \frac{4}{9} = 36$cm²
</details>

---

**Q29.** The length of diagonal of a square of side 10cm is:
- (A) 10cm
- (B) 10$\sqrt{2}$cm
- (C) 20cm
- (D) 5$\sqrt{2}$cm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 10$\sqrt{2}$cm

**Explanation:** Diagonal = $\sqrt{10^2 + 10^2} = \sqrt{200} = 10\sqrt{2}$cm
</details>

---

**Q30.** In a right triangle, if one acute angle is 30°, the other acute angle is:
- (A) 30°
- (B) 45°
- (C) 60°
- (D) 90°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 60°

**Explanation:** Sum of acute angles in right triangle = 90°. Other angle = 90° - 30° = 60°
</details>

---

### SECTION B: Short Answer Questions (20 Questions - 2-3 Marks Each)

**Q31.** In $\triangle ABC$, DE || BC. If AD = 4cm, DB = 6cm, and AE = 5cm, find EC.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

By Basic Proportionality Theorem (BPT):
$$\frac{AD}{DB} = \frac{AE}{EC}$$

$$\frac{4}{6} = \frac{5}{EC}$$

$$EC = \frac{5 \times 6}{4} = \frac{30}{4} = 7.5\text{cm}$$

**Answer:** EC = 7.5cm
</details>

---

**Q32.** Check whether the triangle with sides 5cm, 12cm, and 13cm is a right triangle.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Using Pythagoras theorem:
$$5^2 + 12^2 = 25 + 144 = 169$$
$$13^2 = 169$$

Since $5^2 + 12^2 = 13^2$, the triangle satisfies Pythagoras theorem.

**Answer:** Yes, it is a right triangle.
</details>

---

**Q33.** If $\triangle ABC \sim \triangle DEF$ and AB = 6cm, DE = 9cm, BC = 8cm, find EF.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Since triangles are similar:
$$\frac{AB}{DE} = \frac{BC}{EF}$$

$$\frac{6}{9} = \frac{8}{EF}$$

$$EF = \frac{8 \times 9}{6} = 12\text{cm}$$

**Answer:** EF = 12cm
</details>

---

**Q34.** Prove that in an isosceles right triangle, $AB^2 = 2AC^2$ where AC = BC.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** $\triangle ABC$ is isosceles right triangle with $\angle C = 90°$ and AC = BC

**To Prove:** $AB^2 = 2AC^2$

**Proof:**

By Pythagoras theorem:
$$AB^2 = AC^2 + BC^2$$

Since AC = BC:
$$AB^2 = AC^2 + AC^2$$
$$AB^2 = 2AC^2$$

**Hence Proved.**
</details>

---

**Q35.** The areas of two similar triangles are 64cm² and 121cm². Find the ratio of their corresponding sides.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Ratio of areas = 64:121

Ratio of sides = $\sqrt{\text{Ratio of areas}}$

$$= \sqrt{\frac{64}{121}} = \frac{8}{11}$$

**Answer:** Ratio of corresponding sides = 8:11
</details>

---

**Q36.** In $\triangle ABC$, if $\angle B = 90°$, AB = 7cm, and AC = 25cm, find BC.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

By Pythagoras theorem:
$$AC^2 = AB^2 + BC^2$$

$$25^2 = 7^2 + BC^2$$

$$625 = 49 + BC^2$$

$$BC^2 = 576$$

$$BC = 24\text{cm}$$

**Answer:** BC = 24cm
</details>

---

**Q37.** Prove that the line drawn parallel to one side of a triangle divides the other two sides proportionally.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** $\triangle ABC$ with DE || BC

**To Prove:** $\frac{AD}{DB} = \frac{AE}{EC}$

**Proof:**

Join BE and CD.

Draw EF ⊥ AB and DG ⊥ AC.

Area($\triangle ADE$) = $\frac{1}{2} \times AD \times EF$
Area($\triangle DBE$) = $\frac{1}{2} \times DB \times EF$

$$\frac{\text{Area}(ADE)}{\text{Area}(DBE)} = \frac{AD}{DB}$$ ... (i)

Similarly:
$$\frac{\text{Area}(ADE)}{\text{Area}(DEC)} = \frac{AE}{EC}$$ ... (ii)

Since $\triangle DBE$ and $\triangle DEC$ are on same base DE and between same parallels:
Area($\triangle DBE$) = Area($\triangle DEC$)

From (i) and (ii):
$$\frac{AD}{DB} = \frac{AE}{EC}$$

**Hence Proved.**
</details>

---

**Q38.** A ladder 15m long reaches a window 12m high. Find the distance of the foot of the ladder from the wall.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let distance from wall = x m

By Pythagoras theorem:
$$15^2 = 12^2 + x^2$$

$$225 = 144 + x^2$$

$$x^2 = 81$$

$$x = 9\text{m}$$

**Answer:** Distance = 9m
</details>

---

**Q39.** In the figure, if $\triangle ABC \sim \triangle PQR$, $\angle A = 60°$, $\angle B = 70°$, find $\angle R$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

In $\triangle ABC$:
$$\angle C = 180° - 60° - 70° = 50°$$

Since $\triangle ABC \sim \triangle PQR$:
$$\angle R = \angle C = 50°$$

**Answer:** $\angle R = 50°$
</details>

---

**Q40.** Prove that in an equilateral triangle, three times the square of one side is equal to four times the square of one altitude.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** Equilateral $\triangle ABC$ with side 'a' and altitude AD

**To Prove:** $3a^2 = 4AD^2$

**Proof:**

In right $\triangle ABD$:
$$AB^2 = AD^2 + BD^2$$

$$a^2 = AD^2 + \left(\frac{a}{2}\right)^2$$

$$a^2 = AD^2 + \frac{a^2}{4}$$

$$AD^2 = a^2 - \frac{a^2}{4} = \frac{3a^2}{4}$$

$$4AD^2 = 3a^2$$

**Hence Proved.**
</details>

---

**Q41.** If $\triangle ABC \sim \triangle DEF$, AB = 5cm, BC = 6cm, CA = 7cm, and DE = 10cm, find the perimeter of $\triangle DEF$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Ratio of similarity:
$$\frac{AB}{DE} = \frac{5}{10} = \frac{1}{2}$$

Perimeter($\triangle ABC$) = 5 + 6 + 7 = 18cm

Since ratio of perimeters = ratio of sides:
$$\frac{\text{Perimeter}(ABC)}{\text{Perimeter}(DEF)} = \frac{1}{2}$$

$$\text{Perimeter}(DEF) = 18 \times 2 = 36\text{cm}$$

**Answer:** Perimeter = 36cm
</details>

---

**Q42.** In $\triangle ABC$, AD ⊥ BC. Prove that $AB^2 + CD^2 = AC^2 + BD^2$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Proof:**

In right $\triangle ABD$:
$$AB^2 = AD^2 + BD^2$$ ... (i)

In right $\triangle ACD$:
$$AC^2 = AD^2 + CD^2$$ ... (ii)

Subtracting (ii) from (i):
$$AB^2 - AC^2 = BD^2 - CD^2$$

$$AB^2 + CD^2 = AC^2 + BD^2$$

**Hence Proved.**
</details>

---

**Q43.** The sides of two similar triangles are in ratio 5:8. If the area of smaller triangle is 75cm², find the area of larger triangle.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Ratio of sides = 5:8

Ratio of areas = $(5/8)^2 = 25/64$

Let area of larger triangle = x cm²

$$\frac{75}{x} = \frac{25}{64}$$

$$x = \frac{75 \times 64}{25} = 192\text{cm}^2$$

**Answer:** Area = 192cm²
</details>

---

**Q44.** Prove that the sum of squares of sides of a rhombus is equal to the sum of squares of its diagonals.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** Rhombus ABCD with diagonals AC and BD intersecting at O

**To Prove:** $AB^2 + BC^2 + CD^2 + DA^2 = AC^2 + BD^2$

**Proof:**

In right $\triangle AOB$:
$$AB^2 = OA^2 + OB^2$$

Similarly:
$$BC^2 = OB^2 + OC^2$$
$$CD^2 = OC^2 + OD^2$$
$$DA^2 = OD^2 + OA^2$$

Adding all:
$$AB^2 + BC^2 + CD^2 + DA^2 = 2(OA^2 + OB^2 + OC^2 + OD^2)$$

Since diagonals bisect each other:
OA = OC and OB = OD

$$= 2(2OA^2 + 2OB^2) = 4(OA^2 + OB^2)$$

$$= (2OA)^2 + (2OB)^2 = AC^2 + BD^2$$

**Hence Proved.**
</details>

---

**Q45.** In $\triangle ABC$, if AB = 6$\sqrt{3}$cm, AC = 12cm, and BC = 6cm, find $\angle B$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Check if Pythagoras theorem applies:
$$AB^2 + BC^2 = (6\sqrt{3})^2 + 6^2 = 108 + 36 = 144$$
$$AC^2 = 12^2 = 144$$

Since $AB^2 + BC^2 = AC^2$, $\triangle ABC$ is right angled at B.

**Answer:** $\angle B = 90°$
</details>

---

**Q46.** A girl of height 90cm is walking away from a lamp-post at 1.2m/s. If the lamp is 3.6m above ground, find the length of her shadow after 4 seconds.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Distance walked in 4s = 1.2 × 4 = 4.8m

Let shadow length = x m

Using similar triangles:
$$\frac{3.6}{0.9} = \frac{4.8 + x}{x}$$

$$4 = \frac{4.8 + x}{x}$$

$$4x = 4.8 + x$$

$$3x = 4.8$$

$$x = 1.6\text{m}$$

**Answer:** Shadow length = 1.6m
</details>

---

**Q47.** Prove that in a right triangle, the square of hypotenuse is equal to sum of squares of other two sides.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** Right $\triangle ABC$ with $\angle B = 90°$

**To Prove:** $AC^2 = AB^2 + BC^2$

**Construction:** Draw BD ⊥ AC

**Proof:**

$\triangle ADB \sim \triangle ABC$ (AA similarity)

$$\frac{AD}{AB} = \frac{AB}{AC}$$

$$AB^2 = AD \times AC$$ ... (i)

Similarly, $\triangle BDC \sim \triangle ABC$:

$$\frac{CD}{BC} = \frac{BC}{AC}$$

$$BC^2 = CD \times AC$$ ... (ii)

Adding (i) and (ii):
$$AB^2 + BC^2 = AC(AD + CD) = AC \times AC = AC^2$$

**Hence Proved.**
</details>

---

**Q48.** In $\triangle ABC$, AB = AC = 13cm and BC = 10cm. Find the altitude from A to BC.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let AD be the altitude.

Since $\triangle ABC$ is isosceles, D is midpoint of BC.

BD = DC = 5cm

In right $\triangle ABD$:
$$AB^2 = AD^2 + BD^2$$

$$13^2 = AD^2 + 5^2$$

$$169 = AD^2 + 25$$

$$AD^2 = 144$$

$$AD = 12\text{cm}$$

**Answer:** Altitude = 12cm
</details>

---

**Q49.** If $\triangle ABC \sim \triangle DEF$ and their perimeters are 32cm and 24cm respectively, and AB = 8cm, find DE.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Ratio of perimeters = Ratio of sides

$$\frac{32}{24} = \frac{8}{DE}$$

$$\frac{4}{3} = \frac{8}{DE}$$

$$DE = \frac{8 \times 3}{4} = 6\text{cm}$$

**Answer:** DE = 6cm
</details>

---

**Q50.** Prove that the ratio of areas of two similar triangles is equal to the ratio of squares of their corresponding medians.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:** $\triangle ABC \sim \triangle DEF$ with medians AM and DN

**To Prove:** $\frac{\text{Area}(ABC)}{\text{Area}(DEF)} = \frac{AM^2}{DN^2}$

**Proof:**

Since $\triangle ABC \sim \triangle DEF$:

$$\frac{AB}{DE} = \frac{BC}{EF} = \frac{AC}{DF}$$ ... (i)

And $\angle B = \angle E$

In $\triangle ABM$ and $\triangle DEN$:

$$\frac{AB}{DE} = \frac{BM}{EN}$$ (from (i), since BM = BC/2, EN = EF/2)

$\angle B = \angle E$

$\triangle ABM \sim \triangle DEN$ (SAS)

$$\frac{AM}{DN} = \frac{AB}{DE}$$

$$\frac{\text{Area}(ABC)}{\text{Area}(DEF)} = \left(\frac{AB}{DE}\right)^2 = \frac{AM^2}{DN^2}$$

**Hence Proved.**
</details>

---

### SECTION C: Long Answer Questions (15 Questions - 5 Marks Each)

**Q51.** (a) State and prove Pythagoras theorem.
(b) In a right triangle, if the altitude is drawn to the hypotenuse, prove that the two triangles formed are similar to the original triangle and to each other.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Pythagoras Theorem:**

**Statement:** In a right triangle, the square of the hypotenuse is equal to the sum of squares of the other two sides.

**Given:** Right $\triangle ABC$ with $\angle B = 90°$

**To Prove:** $AC^2 = AB^2 + BC^2$

**Construction:** Draw BD ⊥ AC

**Proof:**

$\triangle ADB \sim \triangle ABC$ (AA similarity)

$$\frac{AD}{AB} = \frac{AB}{AC}$$

$$AB^2 = AD \times AC$$ ... (i)

$\triangle BDC \sim \triangle ABC$ (AA similarity)

$$\frac{CD}{BC} = \frac{BC}{AC}$$

$$BC^2 = CD \times AC$$ ... (ii)

Adding (i) and (ii):
$$AB^2 + BC^2 = AC(AD + CD) = AC^2$$

**Hence Proved.**

**(b) Similarity of formed triangles:**

**Given:** Right $\triangle ABC$, BD ⊥ AC

**To Prove:** $\triangle ADB \sim \triangle ABC \sim \triangle BDC$

**Proof:**

In $\triangle ADB$ and $\triangle ABC$:
- $\angle A = \angle A$ (common)
- $\angle ADB = \angle ABC = 90°$

$\triangle ADB \sim \triangle ABC$ (AA)

Similarly, $\triangle BDC \sim \triangle ABC$ (AA)

Therefore, $\triangle ADB \sim \triangle BDC \sim \triangle ABC$

**Hence Proved.**
</details>

---

**Q52.** (a) State the criteria for similarity of triangles.
(b) Prove that the ratio of areas of two similar triangles is equal to the square of the ratio of their corresponding sides.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Criteria for Similarity:**

**1. AAA (Angle-Angle-Angle):** If corresponding angles are equal, triangles are similar.

**2. SSS (Side-Side-Side):** If corresponding sides are proportional, triangles are similar.

**3. SAS (Side-Angle-Side):** If one angle equal and including sides proportional, triangles are similar.

**(b) Area Ratio Theorem:**

**Given:** $\triangle ABC \sim \triangle DEF$

**To Prove:** $\frac{\text{Area}(ABC)}{\text{Area}(DEF)} = \left(\frac{AB}{DE}\right)^2$

**Construction:** Draw AL ⊥ BC and DM ⊥ EF

**Proof:**

$$\text{Area}(ABC) = \frac{1}{2} \times BC \times AL$$
$$\text{Area}(DEF) = \frac{1}{2} \times EF \times DM$$

$$\frac{\text{Area}(ABC)}{\text{Area}(DEF)} = \frac{BC \times AL}{EF \times DM}$$ ... (i)

In $\triangle ALC$ and $\triangle DMF$:
- $\angle C = \angle F$ (similar triangles)
- $\angle L = \angle M = 90°$

$\triangle ALC \sim \triangle DMF$ (AA)

$$\frac{AL}{DM} = \frac{AC}{DF} = \frac{BC}{EF}$$ ... (ii)

From (i) and (ii):
$$\frac{\text{Area}(ABC)}{\text{Area}(DEF)} = \left(\frac{BC}{EF}\right)^2 = \left(\frac{AB}{DE}\right)^2$$

**Hence Proved.**
</details>

---

**Q53.** (a) A ladder 10m long reaches a window 8m above the ground. Find the distance of the foot of the ladder from the base of the wall.
(b) If the ladder is moved so that it reaches a window 6m high, how far is the foot from the wall now?
(c) By how much distance has the foot moved?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) First position:**

Ladder = 10m, Height = 8m

By Pythagoras:
$$10^2 = 8^2 + x^2$$
$$100 = 64 + x^2$$
$$x^2 = 36$$
$$x = 6\text{m}$$

**(b) Second position:**

Ladder = 10m, Height = 6m

$$10^2 = 6^2 + y^2$$
$$100 = 36 + y^2$$
$$y^2 = 64$$
$$y = 8\text{m}$$

**(c) Distance moved:**

$$8 - 6 = 2\text{m}$$

**Answer:** (a) 6m (b) 8m (c) 2m
</details>

---

**Q54.** (a) Prove that in an equilateral triangle, the altitude divides the triangle into two congruent right triangles.
(b) Find the altitude of an equilateral triangle of side 12cm.
(c) Find its area.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

**Given:** Equilateral $\triangle ABC$ with altitude AD

**To Prove:** $\triangle ABD \cong \triangle ACD$

**Proof:**

In $\triangle ABD$ and $\triangle ACD$:
- AB = AC (equilateral)
- AD = AD (common)
- BD = CD (altitude bisects base in equilateral)

$\triangle ABD \cong \triangle ACD$ (SSS)

**Hence Proved.**

**(b) Altitude:**

In right $\triangle ABD$:
$$AB^2 = AD^2 + BD^2$$
$$12^2 = AD^2 + 6^2$$
$$144 = AD^2 + 36$$
$$AD^2 = 108$$
$$AD = 6\sqrt{3}\text{cm}$$

**(c) Area:**

$$\text{Area} = \frac{1}{2} \times \text{base} \times \text{height}$$
$$= \frac{1}{2} \times 12 \times 6\sqrt{3} = 36\sqrt{3}\text{cm}^2$$

**Answer:** (b) $6\sqrt{3}$cm (c) $36\sqrt{3}$cm²
</details>

---

**Q55.** (a) In $\triangle ABC$, DE || BC and AD:DB = 3:5. If AC = 16cm, find AE and EC.
(b) Prove that $\frac{\text{Area}(\triangle ADE)}{\text{Area}(\triangle ABC)} = \frac{9}{64}$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding AE and EC:**

AD:DB = 3:5

So, $\frac{AD}{AB} = \frac{3}{8}$

Since DE || BC:
$$\frac{AE}{AC} = \frac{AD}{AB} = \frac{3}{8}$$

$$AE = \frac{3}{8} \times 16 = 6\text{cm}$$

$$EC = 16 - 6 = 10\text{cm}$$

**(b) Area Ratio:**

$\triangle ADE \sim \triangle ABC$ (AAA)

$$\frac{\text{Area}(ADE)}{\text{Area}(ABC)} = \left(\frac{AD}{AB}\right)^2 = \left(\frac{3}{8}\right)^2 = \frac{9}{64}$$

**Answer:** (a) AE = 6cm, EC = 10cm (b) Proved
</details>

---

**Q56.** (a) Prove that the sum of squares of diagonals of a parallelogram is equal to the sum of squares of its sides.
(b) In a rhombus, if diagonals are 24cm and 10cm, find the side length.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

**Given:** Parallelogram ABCD with diagonals AC and BD

**To Prove:** $AC^2 + BD^2 = AB^2 + BC^2 + CD^2 + DA^2$

**Construction:** Draw AL ⊥ DC and BM ⊥ DC

**Proof:**

In right $\triangle ALC$:
$$AC^2 = AL^2 + LC^2$$

In right $\triangle BMD$:
$$BD^2 = BM^2 + MD^2$$

Since AL = BM and using properties of parallelogram:

After algebraic manipulation:
$$AC^2 + BD^2 = 2(AB^2 + BC^2)$$

Since AB = CD and BC = DA:
$$AC^2 + BD^2 = AB^2 + BC^2 + CD^2 + DA^2$$

**Hence Proved.**

**(b) Side of rhombus:**

Diagonals bisect at right angles.

Half diagonals: 12cm and 5cm

Side = $\sqrt{12^2 + 5^2} = \sqrt{144 + 25} = \sqrt{169} = 13$cm

**Answer:** (b) 13cm
</details>

---

**Q57.** (a) Two poles of heights 6m and 11m stand on a plane ground. If the distance between their feet is 12m, find the distance between their tops.
(b) What concept is used?
(c) If a third pole of 8m is placed midway, find its distance from the top of 6m pole.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Distance between tops:**

```
A       B
|       |
| 6m    | 11m
|       |
C-------D
   12m
```

Draw BE || CD

AE = 11 - 6 = 5m
BE = 12m

In right $\triangle ABE$:
$$AB^2 = AE^2 + BE^2$$
$$AB^2 = 5^2 + 12^2 = 25 + 144 = 169$$
$$AB = 13\text{m}$$

**(b) Concept:** Pythagoras theorem

**(c) Third pole distance:**

Midway point is 6m from first pole.

Height difference = 8 - 6 = 2m

Distance = $\sqrt{6^2 + 2^2} = \sqrt{36 + 4} = \sqrt{40} = 2\sqrt{10}$m

**Answer:** (a) 13m (b) Pythagoras theorem (c) $2\sqrt{10}$m
</details>

---

**Q58.** (a) Prove that in a right triangle, the altitude to the hypotenuse divides the triangle into two triangles similar to each other and to the original triangle.
(b) Hence prove that $AD^2 = BD \times DC$ where AD is the altitude.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

**Given:** Right $\triangle ABC$, $\angle BAC = 90°$, AD ⊥ BC

**To Prove:** $\triangle DBA \sim \triangle ABC \sim \triangle DAC$

**Proof:**

In $\triangle DBA$ and $\triangle ABC$:
- $\angle B = \angle B$ (common)
- $\angle BDA = \angle BAC = 90°$

$\triangle DBA \sim \triangle ABC$ (AA)

Similarly, $\triangle DAC \sim \triangle ABC$ (AA)

Therefore, $\triangle DBA \sim \triangle DAC$

**Hence Proved.**

**(b) Proof:**

Since $\triangle DBA \sim \triangle DAC$:

$$\frac{BD}{AD} = \frac{AD}{DC}$$

$$AD^2 = BD \times DC$$

**Hence Proved.**
</details>

---

**Q59.** (a) $\triangle ABC$ and $\triangle DBC$ are on the same base BC and on opposite sides of BC. If AD intersects BC at O, prove that $\frac{\text{Area}(\triangle ABC)}{\text{Area}(\triangle DBC)} = \frac{AO}{DO}$.
(b) If Area(ABC) = 60cm², Area(DBC) = 40cm², and AO = 9cm, find DO.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

**Construction:** Draw AL ⊥ BC and DM ⊥ BC

**Proof:**

$$\frac{\text{Area}(ABC)}{\text{Area}(DBC)} = \frac{\frac{1}{2} \times BC \times AL}{\frac{1}{2} \times BC \times DM} = \frac{AL}{DM}$$ ... (i)

In $\triangle ALO$ and $\triangle DMO$:
- $\angle AOL = \angle DOM$ (vertically opposite)
- $\angle L = \angle M = 90°$

$\triangle ALO \sim \triangle DMO$ (AA)

$$\frac{AL}{DM} = \frac{AO}{DO}$$ ... (ii)

From (i) and (ii):
$$\frac{\text{Area}(ABC)}{\text{Area}(DBC)} = \frac{AO}{DO}$$

**Hence Proved.**

**(b) Finding DO:**

$$\frac{60}{40} = \frac{9}{DO}$$

$$\frac{3}{2} = \frac{9}{DO}$$

$$DO = \frac{9 \times 2}{3} = 6\text{cm}$$

**Answer:** (b) DO = 6cm
</details>

---

**Q60.** (a) State and prove the converse of Pythagoras theorem.
(b) Check if a triangle with sides 7cm, 24cm, 25cm is a right triangle.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Converse of Pythagoras Theorem:**

**Statement:** If in a triangle, the square of one side is equal to the sum of squares of the other two sides, then the angle opposite the first side is a right angle.

**Given:** $\triangle ABC$ with $AC^2 = AB^2 + BC^2$

**To Prove:** $\angle B = 90°$

**Construction:** Draw $\triangle DEF$ with $\angle E = 90°$, DE = AB, EF = BC

**Proof:**

In right $\triangle DEF$:
$$DF^2 = DE^2 + EF^2 = AB^2 + BC^2$$

But $AC^2 = AB^2 + BC^2$ (given)

So, $DF = AC$

$\triangle ABC \cong \triangle DEF$ (SSS)

Therefore, $\angle B = \angle E = 90°$

**Hence Proved.**

**(b) Verification:**

$$7^2 + 24^2 = 49 + 576 = 625 = 25^2$$

Since $7^2 + 24^2 = 25^2$, it is a right triangle.

**Answer:** (b) Yes, right triangle
</details>

---

**Q61.** (a) In an equilateral triangle ABC, D is a point on BC such that BD = $\frac{1}{3}$BC. Prove that $9AD^2 = 7AB^2$.
(b) If AB = 6cm, find AD.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

**Given:** Equilateral $\triangle ABC$, BD = $\frac{1}{3}$BC

**Construction:** Draw AE ⊥ BC

**Proof:**

Let AB = BC = CA = a

Then BD = $\frac{a}{3}$, DC = $\frac{2a}{3}$

BE = EC = $\frac{a}{2}$ (altitude bisects base)

DE = BE - BD = $\frac{a}{2} - \frac{a}{3} = \frac{a}{6}$

In right $\triangle ABE$:
$$AE^2 = AB^2 - BE^2 = a^2 - \frac{a^2}{4} = \frac{3a^2}{4}$$

In right $\triangle ADE$:
$$AD^2 = AE^2 + DE^2$$
$$AD^2 = \frac{3a^2}{4} + \frac{a^2}{36} = \frac{27a^2 + a^2}{36} = \frac{28a^2}{36} = \frac{7a^2}{9}$$

$$9AD^2 = 7a^2 = 7AB^2$$

**Hence Proved.**

**(b) Finding AD:**

$$9AD^2 = 7 \times 36 = 252$$
$$AD^2 = 28$$
$$AD = 2\sqrt{7}\text{cm}$$

**Answer:** (b) $2\sqrt{7}$cm
</details>

---

**Q62.** (a) Prove that three times the square of one side of an equilateral triangle is equal to four times the square of one altitude.
(b) Hence find the altitude of an equilateral triangle of side 8cm.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

**Given:** Equilateral $\triangle ABC$ with side 'a' and altitude AD

**To Prove:** $3a^2 = 4AD^2$

**Proof:**

In right $\triangle ABD$:
$$AB^2 = AD^2 + BD^2$$

$$a^2 = AD^2 + \left(\frac{a}{2}\right)^2$$

$$a^2 = AD^2 + \frac{a^2}{4}$$

$$AD^2 = a^2 - \frac{a^2}{4} = \frac{3a^2}{4}$$

$$4AD^2 = 3a^2$$

**Hence Proved.**

**(b) Finding altitude:**

$$4AD^2 = 3 \times 64 = 192$$
$$AD^2 = 48$$
$$AD = 4\sqrt{3}\text{cm}$$

**Answer:** (b) $4\sqrt{3}$cm
</details>

---

**Q63.** (a) In $\triangle ABC$, if AB = AC and D is a point on BC produced, prove that $AD^2 = AC^2 + BD \times CD$.
(b) If AB = 10cm, BC = 12cm, and BD = 5cm, find AD.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

**Given:** Isosceles $\triangle ABC$ with AB = AC, D on BC produced

**Construction:** Draw AE ⊥ BC

**Proof:**

In right $\triangle AED$:
$$AD^2 = AE^2 + ED^2$$

$$AD^2 = AE^2 + (EC + CD)^2$$

$$AD^2 = AE^2 + EC^2 + 2EC \times CD + CD^2$$

In right $\triangle AEC$:
$$AC^2 = AE^2 + EC^2$$

So:
$$AD^2 = AC^2 + 2EC \times CD + CD^2$$

Since BE = EC and BD = BE + ED:

After simplification:
$$AD^2 = AC^2 + BD \times CD$$

**Hence Proved.**

**(b) Finding AD:**

BC = 12cm, so EC = 6cm
BD = 5cm, so CD = BD - BC = 5 - 12 = -7cm (D is between B and C)

$$AD^2 = 10^2 + 5 \times (-7) = 100 - 35 = 65$$
$$AD = \sqrt{65}\text{cm}$$

**Answer:** (b) $\sqrt{65}$cm
</details>

---

**Q64.** (a) Two triangles ABC and DEF are similar. If area(ABC) = 144cm², area(DEF) = 81cm², and the longest side of $\triangle ABC$ is 24cm, find the longest side of $\triangle DEF$.
(b) Find the ratio of their perimeters.
(c) If the altitude of $\triangle ABC$ is 12cm, find the corresponding altitude of $\triangle DEF$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Finding longest side:**

Ratio of areas = 144:81 = 16:9

Ratio of sides = $\sqrt{16/9} = 4/3$

$$\frac{24}{\text{Longest side of DEF}} = \frac{4}{3}$$

Longest side of DEF = $24 \times \frac{3}{4} = 18$cm

**(b) Ratio of perimeters:**

Ratio of perimeters = Ratio of sides = 4:3

**(c) Finding altitude:**

$$\frac{\text{Altitude of ABC}}{\text{Altitude of DEF}} = \frac{4}{3}$$

$$\frac{12}{\text{Altitude of DEF}} = \frac{4}{3}$$

Altitude of DEF = $12 \times \frac{3}{4} = 9$cm

**Answer:** (a) 18cm (b) 4:3 (c) 9cm
</details>

---

**Q65.** (a) Draw a right triangle and prove that the square of the hypotenuse is equal to the sum of squares of the other two sides using similarity.
(b) A fly is sitting on one corner of a room 12m long, 9m wide, and 8m high. What is the distance to the diagonally opposite corner?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof using Similarity:**

**Given:** Right $\triangle ABC$, $\angle B = 90°$, BD ⊥ AC

**To Prove:** $AC^2 = AB^2 + BC^2$

**Proof:**

$\triangle ADB \sim \triangle ABC$

$$\frac{AD}{AB} = \frac{AB}{AC}$$

$$AB^2 = AD \times AC$$ ... (i)

$\triangle BDC \sim \triangle ABC$

$$\frac{CD}{BC} = \frac{BC}{AC}$$

$$BC^2 = CD \times AC$$ ... (ii)

Adding (i) and (ii):
$$AB^2 + BC^2 = AC(AD + CD) = AC^2$$

**Hence Proved.**

**(b) Distance in room:**

```
    H________G
   /|       /|
  /_|______/ |
 E  |     F  |
 |  |_____|__|
 |  /     |  /
 |/_D_____|/C
 A        B
```

First find diagonal of floor:
$$AC = \sqrt{12^2 + 9^2} = \sqrt{144 + 81} = \sqrt{225} = 15\text{m}$$

Now find space diagonal:
$$AG = \sqrt{AC^2 + CG^2} = \sqrt{15^2 + 8^2} = \sqrt{225 + 64} = \sqrt{289} = 17\text{m}$$

**Answer:** (b) 17m
</details>

---

## 6. Exam-Oriented Preparation

### 📝 Important Theorems to Memorize

#### Pythagoras Theorem:

$$ c^2 = a^2 + b^2 $$

#### Basic Proportionality Theorem (BPT):

If DE || BC in $\triangle ABC$:
$$ \frac{AD}{DB} = \frac{AE}{EC} $$

#### Area of Similar Triangles:

$$ \frac{\text{Area}(\triangle ABC)}{\text{Area}(\triangle DEF)} = \left(\frac{AB}{DE}\right)^2 $$

#### Criteria for Similarity:

| Criterion | Condition |
|-----------|-----------|
| AAA | All angles equal |
| SSS | Sides proportional |
| SAS | One angle equal, including sides proportional |

---

### 🎯 Expected Question Patterns (CBSE Class 10)

#### 1 Mark Questions (MCQ/Very Short Answer):
- Identify similar triangles
- Apply Pythagoras theorem
- Find ratio of areas/sides
- Angle calculations

#### 2 Mark Questions (Short Answer):
- Prove simple relationships
- Find missing sides using BPT
- Verify right triangles
- Basic similarity proofs

#### 3 Mark Questions (Long Answer):
- Prove Pythagoras theorem
- Area ratio problems
- Multi-step similarity proofs
- Real-life applications

#### 5 Mark Questions (Very Long Answer):
- Comprehensive proofs
- Complex applications
- Combined concepts
- Construction-based problems

---

### 💡 Exam Tips:

1. ✅ **Draw neat diagrams** with proper labeling
2. ✅ **Write given and to prove** clearly in proofs
3. ✅ **Mention similarity criterion** used (AAA, SSS, SAS)
4. ✅ **Show all steps** in Pythagoras calculations
5. ✅ **Write units** in final answers
6. ✅ **Verify right angle** before using Pythagoras
7. ✅ **Use proper notation** for similarity ($\sim$)
8. ✅ **State theorems** before applying them

---

### 🔴 Common Mistakes to Avoid:

| Mistake | Correction |
|---------|------------|
| Using Pythagoras in non-right triangle | Verify right angle first |
| Wrong correspondence in similarity | Match vertices correctly |
| Forgetting to square in area ratio | Area ratio = (side ratio)² |
| Incorrect BPT application | Ensure line is parallel |
| Not mentioning criterion | Always state AAA/SSS/SAS |
| Wrong altitude formula | Altitude bisects in equilateral |

---

### 📚 Previous Year Questions (CBSE Pattern)

**Q1 (CBSE 2024):** Prove Pythagoras theorem.

**Answer:** Standard proof using similarity.

---

**Q2 (CBSE 2023):** In $\triangle ABC$, DE || BC. If AD = 3cm, DB = 5cm, AE = 4.5cm, find EC.

**Answer:** EC = 7.5cm

---

**Q3 (CBSE 2023):** Areas of similar triangles are 64cm² and 121cm². Find ratio of sides.

**Answer:** 8:11

---

**Q4 (CBSE 2022):** Check if 5cm, 12cm, 13cm form a right triangle.

**Answer:** Yes ($5^2 + 12^2 = 13^2$)

---

**Q5 (CBSE 2022):** Ladder 15m reaches window 12m high. Find distance from wall.

**Answer:** 9m

---

**Q6 (CBSE 2021):** Prove area ratio theorem for similar triangles.

**Answer:** Standard proof with altitudes.

---

**Q7 (CBSE 2021):** $\triangle ABC \sim \triangle DEF$, AB = 6cm, DE = 9cm. Find area ratio.

**Answer:** 4:9

---

**Q8 (CBSE 2020):** Prove that altitude to hypotenuse creates similar triangles.

**Answer:** Standard proof using AA similarity.

---

**Q9 (CBSE 2020):** Find altitude of equilateral triangle of side 10cm.

**Answer:** $5\sqrt{3}$cm

---

**Q10 (CBSE 2019):** Two poles 6m and 11m, distance 12m. Find distance between tops.

**Answer:** 13m

---

## 7. Revision Notes

### 📌 Quick Revision Sheet

#### Key Definitions:

| Term | Definition |
|------|------------|
| **Similar Triangles** | Corresponding angles equal, sides proportional |
| **Congruent Triangles** | Corresponding angles and sides equal |
| **Altitude** | Perpendicular from vertex to opposite side |
| **Median** | Line from vertex to midpoint of opposite side |
| **Hypotenuse** | Side opposite to right angle |

---

#### Important Theorems:

**Pythagoras Theorem:**
$$ c^2 = a^2 + b^2 $$

**Converse:**
If $c^2 = a^2 + b^2$, then right angle opposite to c.

**BPT (Thales Theorem):**
If DE || BC: $\frac{AD}{DB} = \frac{AE}{EC}$

**Area Ratio:**
$$ \frac{\text{Area}_1}{\text{Area}_2} = \left(\frac{\text{Side}_1}{\text{Side}_2}\right)^2 $$

---

#### Similarity Criteria:

```
AAA: All angles equal
SSS: Sides proportional
SAS: One angle equal, including sides proportional
```

---

#### Special Triangles:

| Type | Properties |
|------|------------|
| **Equilateral** | All sides equal, all angles 60° |
| **Isosceles** | Two sides equal, base angles equal |
| **Right** | One angle 90°, $c^2 = a^2 + b^2$ |
| **30-60-90** | Sides in ratio $1 : \sqrt{3} : 2$ |

---

#### Common Pythagorean Triplets:

| Sides | Verification |
|-------|--------------|
| 3, 4, 5 | $9 + 16 = 25$ |
| 5, 12, 13 | $25 + 144 = 169$ |
| 7, 24, 25 | $49 + 576 = 625$ |
| 8, 15, 17 | $64 + 225 = 289$ |
| 9, 40, 41 | $81 + 1600 = 1681$ |

---

### 🎓 Final Checklist Before Exam:

- [ ] I can state and prove Pythagoras theorem
- [ ] I can identify similar triangles using AAA, SSS, SAS
- [ ] I can apply BPT correctly
- [ ] I can find area ratios of similar triangles
- [ ] I can solve real-life problems using Pythagoras
- [ ] I can prove relationships in triangles
- [ ] I know Pythagorean triplets
- [ ] I can draw proper diagrams
- [ ] I mention similarity criteria in proofs
- [ ] I have practiced all 30 MCQs
- [ ] I have practiced all 20 Short Answer questions
- [ ] I have practiced all 15 Long Answer questions

---

### 📊 Quick Formula Sheet:

**Pythagoras Theorem:**
$$ \text{Hypotenuse}^2 = \text{Base}^2 + \text{Height}^2 $$

**Similarity Ratio:**
$$ \frac{AB}{DE} = \frac{BC}{EF} = \frac{AC}{DF} $$

**Area Ratio:**
$$ \frac{\text{Area}_1}{\text{Area}_2} = \left(\frac{\text{Side}_1}{\text{Side}_2}\right)^2 $$

**BPT:**
$$ \text{If DE || BC: } \frac{AD}{DB} = \frac{AE}{EC} $$

**Equilateral Triangle Altitude:**
$$ h = \frac{\sqrt{3}}{2}a $$

**Equilateral Triangle Area:**
$$ \text{Area} = \frac{\sqrt{3}}{4}a^2 $$

---

**Good luck with your studies! 🌟**

> Remember: Always draw diagrams and mention similarity criteria in proofs!

---

**End of Learning Path - Triangles**
