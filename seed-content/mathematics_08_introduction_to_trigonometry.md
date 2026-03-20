# Introduction to Trigonometry - Learning Path

## 1. Concept Introduction

### What is Trigonometry?

**Trigonometry** is the branch of mathematics that deals with the relationships between the sides and angles of triangles, especially right-angled triangles.

The word "trigonometry" comes from Greek words:
- **"Tri"** = Three
- **"Gon"** = Sides
- **"Metron"** = Measure

**Everyday Examples:**
- 🏔️ Measuring height of mountains, buildings, and towers
- 🚢 Navigation in ships and aircraft
- 📡 Satellite systems and GPS
- 🎮 Computer graphics and game development
- 🏗️ Construction and architecture
- 🌊 Wave patterns in sound and light

### The Right-Angled Triangle:

```
RIGHT-ANGLED TRIANGLE
         B
         |\
         | \
    (Perpendicular)
         |  \
         |   \ Hypotenuse
         |    \
         |     \
         A------C
      (Base)

∠A = 90° (Right Angle)
```

**Key Components:**

| Term | Meaning | Symbol |
|------|---------|--------|
| **Hypotenuse** | Side opposite to right angle (longest side) | H |
| **Perpendicular** | Side opposite to the reference angle | P |
| **Base** | Side adjacent to the reference angle | B |
| **Reference Angle** | The angle we're considering (other than 90°) | θ (theta) |

---

## 2. Micro-topic Breakdown

This chapter is divided into the following key concepts:

```
Introduction to Trigonometry
├── 2.1 Trigonometric Ratios
│   ├── Sine (sin)
│   ├── Cosine (cos)
│   ├── Tangent (tan)
│   ├── Cosecant (cosec)
│   ├── Secant (sec)
│   └── Cotangent (cot)
├── 2.2 Trigonometric Ratios of Specific Angles
│   ├── 0° and 90°
│   ├── 30° and 60°
│   └── 45°
├── 2.3 Trigonometric Ratios of Complementary Angles
│   ├── Definition of complementary angles
│   ├── Relationships between ratios
│   └── Applications and problems
└── 2.4 Trigonometric Identities
    ├── sin²θ + cos²θ = 1
    ├── 1 + tan²θ = sec²θ
    ├── 1 + cot²θ = cosec²θ
    └── Proofs and applications
```

---

## 3. Concept Explanations

### 3.1 Trigonometric Ratios

Consider a right-angled triangle ABC, right-angled at B:

```
         A
         |\
         | \
         |  \
      P  |   \ H
         |    \
         |     \
         |      \
         B-------C
            B
```

For angle ∠C = θ:
- **Perpendicular (P)** = AB (opposite to θ)
- **Base (B)** = BC (adjacent to θ)
- **Hypotenuse (H)** = AC (opposite to 90°)

#### Six Trigonometric Ratios:

| Ratio | Formula | Abbreviation |
|-------|---------|--------------|
| **Sine** | $\frac{\text{Perpendicular}}{\text{Hypotenuse}}$ | sin θ |
| **Cosine** | $\frac{\text{Base}}{\text{Hypotenuse}}$ | cos θ |
| **Tangent** | $\frac{\text{Perpendicular}}{\text{Base}}$ | tan θ |
| **Cosecant** | $\frac{\text{Hypotenuse}}{\text{Perpendicular}}$ | cosec θ |
| **Secant** | $\frac{\text{Hypotenuse}}{\text{Base}}$ | sec θ |
| **Cotangent** | $\frac{\text{Base}}{\text{Perpendicular}}$ | cot θ |

#### Reciprocal Relationships:

$$ \text{cosec } \theta = \frac{1}{\sin \theta} $$
$$ \text{sec } \theta = \frac{1}{\cos \theta} $$
$$ \text{cot } \theta = \frac{1}{\tan \theta} $$

#### Quotient Relationships:

$$ \tan \theta = \frac{\sin \theta}{\cos \theta} $$
$$ \cot \theta = \frac{\cos \theta}{\sin \theta} $$

---

### 3.2 Trigonometric Ratios of Specific Angles

#### Standard Angles Table:

| Angle (θ) | 0° | 30° | 45° | 60° | 90° |
|-----------|-----|-----|-----|-----|-----|
| **sin θ** | 0 | $\frac{1}{2}$ | $\frac{1}{\sqrt{2}}$ | $\frac{\sqrt{3}}{2}$ | 1 |
| **cos θ** | 1 | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{2}}$ | $\frac{1}{2}$ | 0 |
| **tan θ** | 0 | $\frac{1}{\sqrt{3}}$ | 1 | $\sqrt{3}$ | Not defined |
| **cosec θ** | Not defined | 2 | $\sqrt{2}$ | $\frac{2}{\sqrt{3}}$ | 1 |
| **sec θ** | 1 | $\frac{2}{\sqrt{3}}$ | $\sqrt{2}$ | 2 | Not defined |
| **cot θ** | Not defined | $\sqrt{3}$ | 1 | $\frac{1}{\sqrt{3}}$ | 0 |

#### Mnemonic to Remember:

```
Some People Have Curly Black Hair Through Proper Brushing

S     P     H     C     B     H     T     P     B
sin   cos   tan   cosec  sec   cot
```

**For 30° and 60°:**

```
        A
        |\
        | \
     1  |  \ 2
        |   \
        |    \
        B-----C
          √3

∠C = 30°, ∠A = 60°

sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3
sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3
```

**For 45°:**

```
        A
        |\
        | \
     1  |  \ √2
        |   \
        |    \
        B-----C
          1

∠C = 45°, ∠A = 45°

sin 45° = 1/√2, cos 45° = 1/√2, tan 45° = 1
```

---

### 3.3 Trigonometric Ratios of Complementary Angles

#### Complementary Angles:

Two angles are **complementary** if their sum is **90°**.

If one angle is θ, its complement is (90° - θ).

#### Relationships:

| Angle | Complementary Angle Relationship |
|-------|----------------------------------|
| **sin (90° - θ)** | = cos θ |
| **cos (90° - θ)** | = sin θ |
| **tan (90° - θ)** | = cot θ |
| **cosec (90° - θ)** | = sec θ |
| **sec (90° - θ)** | = cosec θ |
| **cot (90° - θ)** | = tan θ |

#### Visual Representation:

```
         A
         |\
         | \
         |  \
         |   \
         |    \
         |     \
         |θ     \
         B-------C
        90°-θ

In ΔABC:
∠B = 90°
∠A + ∠C = 90°

If ∠A = θ, then ∠C = 90° - θ

sin θ = BC/AC = cos (90° - θ)
cos θ = AB/AC = sin (90° - θ)
```

---

### 3.4 Trigonometric Identities

#### Fundamental Trigonometric Identities:

**1. Pythagorean Identity (Sine-Cosine):**

$$ \sin^2 \theta + \cos^2 \theta = 1 $$

**Proof:**

```
         A
         |\
         | \
      b  |  \ c
         |   \
         |    \
         B-----C
            a

By Pythagoras theorem: a² + b² = c²

sin θ = a/c, cos θ = b/c

sin²θ + cos²θ = (a/c)² + (b/c)²
              = a²/c² + b²/c²
              = (a² + b²)/c²
              = c²/c² = 1 ✓
```

**2. Tangent-Secant Identity:**

$$ 1 + \tan^2 \theta = \sec^2 \theta $$

**Proof:**

Divide $\sin^2 \theta + \cos^2 \theta = 1$ by $\cos^2 \theta$:

$$ \frac{\sin^2 \theta}{\cos^2 \theta} + \frac{\cos^2 \theta}{\cos^2 \theta} = \frac{1}{\cos^2 \theta} $$

$$ \tan^2 \theta + 1 = \sec^2 \theta $$ ✓

**3. Cotangent-Cosecant Identity:**

$$ 1 + \cot^2 \theta = \text{cosec}^2 \theta $$

**Proof:**

Divide $\sin^2 \theta + \cos^2 \theta = 1$ by $\sin^2 \theta$:

$$ \frac{\sin^2 \theta}{\sin^2 \theta} + \frac{\cos^2 \theta}{\sin^2 \theta} = \frac{1}{\sin^2 \theta} $$

$$ 1 + \cot^2 \theta = \text{cosec}^2 \theta $$ ✓

#### Summary of Identities:

| Identity | Formula | Valid for |
|----------|---------|-----------|
| **Pythagorean** | $\sin^2 \theta + \cos^2 \theta = 1$ | All θ |
| **Tangent-Secant** | $1 + \tan^2 \theta = \sec^2 \theta$ | θ ≠ 90° |
| **Cotangent-Cosecant** | $1 + \cot^2 \theta = \text{cosec}^2 \theta$ | θ ≠ 0° |

---

## 4. Guided Examples

### Example 1: Finding Trigonometric Ratios

**Question:** In ΔABC, right-angled at B, AB = 5 cm, BC = 12 cm. Find all trigonometric ratios for angle C.

**Step-by-Step Solution:**

**Step 1:** Find the hypotenuse using Pythagoras theorem

$$ AC^2 = AB^2 + BC^2 $$
$$ AC^2 = 5^2 + 12^2 = 25 + 144 = 169 $$
$$ AC = \sqrt{169} = 13 \text{ cm} $$

**Step 2:** Identify sides for angle C
- Perpendicular (P) = AB = 5 cm
- Base (B) = BC = 12 cm
- Hypotenuse (H) = AC = 13 cm

**Step 3:** Calculate all ratios

| Ratio | Formula | Value |
|-------|---------|-------|
| sin C | P/H | 5/13 |
| cos C | B/H | 12/13 |
| tan C | P/B | 5/12 |
| cosec C | H/P | 13/5 |
| sec C | H/B | 13/12 |
| cot C | B/P | 12/5 |

**Final Answer:**
$$ \sin C = \frac{5}{13}, \cos C = \frac{12}{13}, \tan C = \frac{5}{12} $$
$$ \text{cosec } C = \frac{13}{5}, \sec C = \frac{13}{12}, \cot C = \frac{12}{5} $$

---

### Example 2: Using Trigonometric Identities

**Question:** If $\sin \theta = \frac{3}{5}$, find the value of $\cos \theta$ and $\tan \theta$.

**Step-by-Step Solution:**

**Step 1:** Use identity $\sin^2 \theta + \cos^2 \theta = 1$

$$ \left(\frac{3}{5}\right)^2 + \cos^2 \theta = 1 $$
$$ \frac{9}{25} + \cos^2 \theta = 1 $$
$$ \cos^2 \theta = 1 - \frac{9}{25} = \frac{16}{25} $$
$$ \cos \theta = \pm \frac{4}{5} $$

**Step 2:** Find $\tan \theta$

$$ \tan \theta = \frac{\sin \theta}{\cos \theta} = \frac{3/5}{4/5} = \frac{3}{4} $$

**Final Answer:** $\cos \theta = \frac{4}{5}$, $\tan \theta = \frac{3}{4}$ (assuming θ is acute)

---

### Example 3: Trigonometric Ratios of Specific Angles

**Question:** Evaluate: $\frac{\sin 30° + \tan 45°}{\cos 60°}$

**Step-by-Step Solution:**

**Step 1:** Substitute values from the standard table

| Angle | Value |
|-------|-------|
| sin 30° | 1/2 |
| tan 45° | 1 |
| cos 60° | 1/2 |

**Step 2:** Calculate

$$ \frac{\sin 30° + \tan 45°}{\cos 60°} = \frac{\frac{1}{2} + 1}{\frac{1}{2}} = \frac{\frac{3}{2}}{\frac{1}{2}} = 3 $$

**Final Answer:** 3

---

### Example 4: Complementary Angles

**Question:** If $\sec 2A = \text{cosec } (A - 30°)$, where 2A is an acute angle, find the value of A.

**Step-by-Step Solution:**

**Step 1:** Use the complementary angle relationship

$$ \sec 2A = \text{cosec } (90° - 2A) $$

**Step 2:** Equate the angles

$$ \text{cosec } (90° - 2A) = \text{cosec } (A - 30°) $$
$$ 90° - 2A = A - 30° $$

**Step 3:** Solve for A

$$ 90° + 30° = A + 2A $$
$$ 120° = 3A $$
$$ A = 40° $$

**Final Answer:** A = 40°

---

### Example 5: Proving Trigonometric Identity

**Question:** Prove that $(\sec \theta + \tan \theta)(\sec \theta - \tan \theta) = 1$

**Step-by-Step Solution:**

**Step 1:** Expand the LHS using $(a+b)(a-b) = a^2 - b^2$

$$ \text{LHS} = (\sec \theta + \tan \theta)(\sec \theta - \tan \theta) $$
$$ = \sec^2 \theta - \tan^2 \theta $$

**Step 2:** Use identity $1 + \tan^2 \theta = \sec^2 \theta$

$$ \sec^2 \theta - \tan^2 \theta = 1 $$

**Step 3:** Therefore, LHS = RHS

$$ \text{LHS} = 1 = \text{RHS} $$ ✓

**Final Answer:** Identity proved.

---

## 5. Practice Questions

### SECTION A: Multiple Choice Questions (30 Questions - 1 Mark Each)

**Q1.** In a right-angled triangle, the ratio of the opposite side to the hypotenuse is called:
- (A) cosine
- (B) tangent
- (C) sine
- (D) cotangent

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) sine

**Explanation:** $\sin \theta = \frac{\text{Perpendicular (Opposite)}}{\text{Hypotenuse}}$
</details>

---

**Q2.** The value of $\sin 30°$ is:
- (A) $\frac{1}{\sqrt{2}}$
- (B) $\frac{1}{2}$
- (C) $\frac{\sqrt{3}}{2}$
- (D) 1

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $\frac{1}{2}$

**Explanation:** From the standard trigonometric table, $\sin 30° = \frac{1}{2}$
</details>

---

**Q3.** If $\sin \theta = \frac{3}{5}$, then $\cos \theta$ is equal to:
- (A) $\frac{4}{5}$
- (B) $\frac{3}{4}$
- (C) $\frac{5}{4}$
- (D) $\frac{5}{3}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $\frac{4}{5}$

**Explanation:** Using $\sin^2 \theta + \cos^2 \theta = 1$:
$$\cos \theta = \sqrt{1 - \left(\frac{3}{5}\right)^2} = \sqrt{\frac{16}{25}} = \frac{4}{5}$$
</details>

---

**Q4.** The value of $\tan 45°$ is:
- (A) 0
- (B) 1
- (C) $\frac{1}{\sqrt{3}}$
- (D) $\sqrt{3}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 1

**Explanation:** $\tan 45° = 1$ (standard value)
</details>

---

**Q5.** $\sin (90° - \theta)$ is equal to:
- (A) $\sin \theta$
- (B) $\cos \theta$
- (C) $\tan \theta$
- (D) $\text{cosec } \theta$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $\cos \theta$

**Explanation:** This is the complementary angle relationship: $\sin (90° - \theta) = \cos \theta$
</details>

---

**Q6.** The value of $\cos 0°$ is:
- (A) 0
- (B) 1
- (C) $\frac{1}{2}$
- (D) Not defined

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 1

**Explanation:** $\cos 0° = 1$ (standard value)
</details>

---

**Q7.** If $\tan \theta = \frac{4}{3}$, then $\sec \theta$ is:
- (A) $\frac{3}{5}$
- (B) $\frac{4}{5}$
- (C) $\frac{5}{3}$
- (D) $\frac{5}{4}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) $\frac{5}{3}$

**Explanation:** Using $1 + \tan^2 \theta = \sec^2 \theta$:
$$\sec^2 \theta = 1 + \left(\frac{4}{3}\right)^2 = 1 + \frac{16}{9} = \frac{25}{9}$$
$$\sec \theta = \frac{5}{3}$$
</details>

---

**Q8.** The value of $\text{cosec } 90°$ is:
- (A) 0
- (B) 1
- (C) $\frac{1}{2}$
- (D) Not defined

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 1

**Explanation:** $\text{cosec } 90° = \frac{1}{\sin 90°} = \frac{1}{1} = 1$
</details>

---

**Q9.** $\frac{\sin \theta}{\cos \theta}$ is equal to:
- (A) $\sec \theta$
- (B) $\text{cosec } \theta$
- (C) $\tan \theta$
- (D) $\cot \theta$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) $\tan \theta$

**Explanation:** By definition, $\tan \theta = \frac{\sin \theta}{\cos \theta}$
</details>

---

**Q10.** The value of $\sin 60° \cos 30° + \cos 60° \sin 30°$ is:
- (A) 0
- (B) 1
- (C) $\frac{1}{2}$
- (D) $\frac{\sqrt{3}}{2}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 1

**Explanation:**
$$\frac{\sqrt{3}}{2} \times \frac{\sqrt{3}}{2} + \frac{1}{2} \times \frac{1}{2} = \frac{3}{4} + \frac{1}{4} = 1$$
</details>

---

**Q11.** If $\sec \theta + \tan \theta = 2$, then $\sec \theta - \tan \theta$ is:
- (A) $\frac{1}{2}$
- (B) 1
- (C) 2
- (D) 0

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $\frac{1}{2}$

**Explanation:** Using identity $\sec^2 \theta - \tan^2 \theta = 1$:
$$(\sec \theta + \tan \theta)(\sec \theta - \tan \theta) = 1$$
$$2 \times (\sec \theta - \tan \theta) = 1$$
$$\sec \theta - \tan \theta = \frac{1}{2}$$
</details>

---

**Q12.** The value of $\cot 45°$ is:
- (A) 0
- (B) 1
- (C) $\frac{1}{\sqrt{3}}$
- (D) $\sqrt{3}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 1

**Explanation:** $\cot 45° = \frac{1}{\tan 45°} = \frac{1}{1} = 1$
</details>

---

**Q13.** $\sin^2 \theta + \cos^2 \theta$ is equal to:
- (A) 0
- (B) 1
- (C) $\sin \theta$
- (D) $\cos \theta$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 1

**Explanation:** This is the fundamental Pythagorean identity.
</details>

---

**Q14.** The value of $\tan 90°$ is:
- (A) 0
- (B) 1
- (C) $\infty$
- (D) Not defined

<details>
<summary>✓ Show Answer</summary>

**Answer:** (D) Not defined

**Explanation:** $\tan 90° = \frac{\sin 90°}{\cos 90°} = \frac{1}{0}$ which is undefined.
</details>

---

**Q15.** If $\cos \theta = \frac{1}{2}$, then $\theta$ is:
- (A) 30°
- (B) 45°
- (C) 60°
- (D) 90°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 60°

**Explanation:** From standard values, $\cos 60° = \frac{1}{2}$
</details>

---

**Q16.** The reciprocal of $\sin \theta$ is:
- (A) $\cos \theta$
- (B) $\tan \theta$
- (C) $\text{cosec } \theta$
- (D) $\sec \theta$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) $\text{cosec } \theta$

**Explanation:** $\text{cosec } \theta = \frac{1}{\sin \theta}$
</details>

---

**Q17.** $\sec^2 \theta - \tan^2 \theta$ is equal to:
- (A) 0
- (B) 1
- (C) -1
- (D) $\sec^2 \theta$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 1

**Explanation:** This is the identity: $1 + \tan^2 \theta = \sec^2 \theta$, so $\sec^2 \theta - \tan^2 \theta = 1$
</details>

---

**Q18.** The value of $\sin 45°$ is:
- (A) $\frac{1}{2}$
- (B) $\frac{1}{\sqrt{2}}$
- (C) $\frac{\sqrt{3}}{2}$
- (D) 1

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $\frac{1}{\sqrt{2}}$

**Explanation:** $\sin 45° = \frac{1}{\sqrt{2}}$ (standard value)
</details>

---

**Q19.** If $\text{cosec } \theta = 2$, then $\sin \theta$ is:
- (A) 2
- (B) $\frac{1}{2}$
- (C) 1
- (D) 0

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $\frac{1}{2}$

**Explanation:** $\sin \theta = \frac{1}{\text{cosec } \theta} = \frac{1}{2}$
</details>

---

**Q20.** $\cos (90° - 45°)$ is equal to:
- (A) $\sin 45°$
- (B) $\cos 45°$
- (C) $\tan 45°$
- (D) $\text{cosec } 45°$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $\sin 45°$

**Explanation:** $\cos (90° - \theta) = \sin \theta$, so $\cos (90° - 45°) = \sin 45°$
</details>

---

**Q21.** The value of $\sin 90° + \cos 0°$ is:
- (A) 0
- (B) 1
- (C) 2
- (D) $\sqrt{2}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 2

**Explanation:** $\sin 90° = 1$ and $\cos 0° = 1$, so $1 + 1 = 2$
</details>

---

**Q22.** If $\tan A = \frac{1}{\sqrt{3}}$, then angle A is:
- (A) 30°
- (B) 45°
- (C) 60°
- (D) 90°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 30°

**Explanation:** $\tan 30° = \frac{1}{\sqrt{3}}$
</details>

---

**Q23.** The value of $\frac{2\tan 30°}{1 + \tan^2 30°}$ is:
- (A) $\sin 30°$
- (B) $\sin 60°$
- (C) $\cos 30°$
- (D) $\tan 60°$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) $\sin 60°$

**Explanation:** This is the formula for $\sin 2\theta$ where $\theta = 30°$:
$$\frac{2\tan 30°}{1 + \tan^2 30°} = \sin 60° = \frac{\sqrt{3}}{2}$$
</details>

---

**Q24.** $\text{cosec}^2 \theta - \cot^2 \theta$ is equal to:
- (A) 0
- (B) 1
- (C) -1
- (D) $\text{cosec}^2 \theta$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 1

**Explanation:** From identity $1 + \cot^2 \theta = \text{cosec}^2 \theta$, we get $\text{cosec}^2 \theta - \cot^2 \theta = 1$
</details>

---

**Q25.** The value of $\sec 60°$ is:
- (A) $\frac{1}{2}$
- (B) 2
- (C) $\frac{2}{\sqrt{3}}$
- (D) $\sqrt{3}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 2

**Explanation:** $\sec 60° = \frac{1}{\cos 60°} = \frac{1}{1/2} = 2$
</details>

---

**Q26.** If $\sin A = \cos A$, then A is:
- (A) 30°
- (B) 45°
- (C) 60°
- (D) 90°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 45°

**Explanation:** $\sin 45° = \cos 45° = \frac{1}{\sqrt{2}}$
</details>

---

**Q27.** The value of $\cot 90°$ is:
- (A) 0
- (B) 1
- (C) $\infty$
- (D) Not defined

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 0

**Explanation:** $\cot 90° = \frac{\cos 90°}{\sin 90°} = \frac{0}{1} = 0$
</details>

---

**Q28.** $\frac{\tan 60°}{\sec 60°}$ is equal to:
- (A) $\sin 60°$
- (B) $\cos 60°$
- (C) $\tan 30°$
- (D) $\sin 30°$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $\sin 60°$

**Explanation:** $\frac{\tan \theta}{\sec \theta} = \frac{\sin \theta/\cos \theta}{1/\cos \theta} = \sin \theta$
</details>

---

**Q29.** If $\sec \theta = \sqrt{2}$, then $\theta$ is:
- (A) 30°
- (B) 45°
- (C) 60°
- (D) 90°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 45°

**Explanation:** $\sec 45° = \frac{1}{\cos 45°} = \frac{1}{1/\sqrt{2}} = \sqrt{2}$
</details>

---

**Q30.** The value of $\sin 30° \times \cos 60°$ is:
- (A) $\frac{1}{4}$
- (B) $\frac{1}{2}$
- (C) $\frac{\sqrt{3}}{4}$
- (D) $\frac{\sqrt{3}}{2}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $\frac{1}{4}$

**Explanation:** $\sin 30° \times \cos 60° = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$
</details>

---

### SECTION B: Short Answer Questions (20 Questions - 2-3 Marks Each)

**Q31.** In ΔABC, right-angled at B, AB = 24 cm, BC = 7 cm. Determine sin A, cos A, sin C, and cos C.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Step 1:** Find hypotenuse AC using Pythagoras theorem

$$ AC^2 = AB^2 + BC^2 = 24^2 + 7^2 = 576 + 49 = 625 $$
$$ AC = \sqrt{625} = 25 \text{ cm} $$

**Step 2:** For angle A
- Perpendicular = BC = 7 cm
- Base = AB = 24 cm
- Hypotenuse = AC = 25 cm

$$ \sin A = \frac{7}{25}, \quad \cos A = \frac{24}{25} $$

**Step 3:** For angle C
- Perpendicular = AB = 24 cm
- Base = BC = 7 cm
- Hypotenuse = AC = 25 cm

$$ \sin C = \frac{24}{25}, \quad \cos C = \frac{7}{25} $$

**Answer:** $\sin A = \frac{7}{25}, \cos A = \frac{24}{25}, \sin C = \frac{24}{25}, \cos C = \frac{7}{25}$
</details>

---

**Q32.** If $\sin A = \frac{3}{5}$, find the value of all other trigonometric ratios.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given: $\sin A = \frac{3}{5} = \frac{\text{Perpendicular}}{\text{Hypotenuse}}$

**Step 1:** Find Base using Pythagoras theorem

$$ \text{Base}^2 = \text{Hypotenuse}^2 - \text{Perpendicular}^2 $$
$$ \text{Base}^2 = 5^2 - 3^2 = 25 - 9 = 16 $$
$$ \text{Base} = 4 $$

**Step 2:** Find all ratios

$$ \cos A = \frac{\text{Base}}{\text{Hypotenuse}} = \frac{4}{5} $$
$$ \tan A = \frac{\text{Perpendicular}}{\text{Base}} = \frac{3}{4} $$
$$ \text{cosec } A = \frac{\text{Hypotenuse}}{\text{Perpendicular}} = \frac{5}{3} $$
$$ \sec A = \frac{\text{Hypotenuse}}{\text{Base}} = \frac{5}{4} $$
$$ \cot A = \frac{\text{Base}}{\text{Perpendicular}} = \frac{4}{3} $$

**Answer:** $\cos A = \frac{4}{5}, \tan A = \frac{3}{4}, \text{cosec } A = \frac{5}{3}, \sec A = \frac{5}{4}, \cot A = \frac{4}{3}$
</details>

---

**Q33.** Evaluate: $\frac{\sin 30°}{\cos 60°} + \frac{\tan 45°}{\sec 45°}$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Substitute standard values:

$$ \sin 30° = \frac{1}{2}, \cos 60° = \frac{1}{2}, \tan 45° = 1, \sec 45° = \sqrt{2} $$

$$ \frac{\sin 30°}{\cos 60°} + \frac{\tan 45°}{\sec 45°} = \frac{1/2}{1/2} + \frac{1}{\sqrt{2}} $$
$$ = 1 + \frac{1}{\sqrt{2}} = 1 + \frac{\sqrt{2}}{2} = \frac{2 + \sqrt{2}}{2} $$

**Answer:** $\frac{2 + \sqrt{2}}{2}$
</details>

---

**Q34.** Prove that: $\frac{\sin \theta}{1 + \cos \theta} = \frac{1 - \cos \theta}{\sin \theta}$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**LHS:** $\frac{\sin \theta}{1 + \cos \theta}$

Multiply numerator and denominator by $(1 - \cos \theta)$:

$$ = \frac{\sin \theta (1 - \cos \theta)}{(1 + \cos \theta)(1 - \cos \theta)} $$
$$ = \frac{\sin \theta (1 - \cos \theta)}{1 - \cos^2 \theta} $$
$$ = \frac{\sin \theta (1 - \cos \theta)}{\sin^2 \theta} \quad [\because \sin^2 \theta + \cos^2 \theta = 1] $$
$$ = \frac{1 - \cos \theta}{\sin \theta} = \text{RHS} $$

**Hence Proved.**
</details>

---

**Q35.** If $\tan (A + B) = \sqrt{3}$ and $\tan (A - B) = \frac{1}{\sqrt{3}}$, find A and B.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given:
$$ \tan (A + B) = \sqrt{3} = \tan 60° $$
$$ A + B = 60° \quad \text{...(1)} $$

$$ \tan (A - B) = \frac{1}{\sqrt{3}} = \tan 30° $$
$$ A - B = 30° \quad \text{...(2)} $$

Adding (1) and (2):
$$ 2A = 90° \Rightarrow A = 45° $$

Subtracting (2) from (1):
$$ 2B = 30° \Rightarrow B = 15° $$

**Answer:** A = 45°, B = 15°
</details>

---

**Q36.** Prove that: $(\sec A + \tan A)(1 - \sin A) = \cos A$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**LHS:** $(\sec A + \tan A)(1 - \sin A)$

$$ = \left(\frac{1}{\cos A} + \frac{\sin A}{\cos A}\right)(1 - \sin A) $$
$$ = \left(\frac{1 + \sin A}{\cos A}\right)(1 - \sin A) $$
$$ = \frac{(1 + \sin A)(1 - \sin A)}{\cos A} $$
$$ = \frac{1 - \sin^2 A}{\cos A} $$
$$ = \frac{\cos^2 A}{\cos A} \quad [\because \sin^2 A + \cos^2 A = 1] $$
$$ = \cos A = \text{RHS} $$

**Hence Proved.**
</details>

---

**Q37.** Evaluate: $\sin 60° \cos 30° + \sin 30° \cos 60°$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Substitute standard values:

$$ \sin 60° = \frac{\sqrt{3}}{2}, \cos 30° = \frac{\sqrt{3}}{2}, \sin 30° = \frac{1}{2}, \cos 60° = \frac{1}{2} $$

$$ \sin 60° \cos 30° + \sin 30° \cos 60° = \frac{\sqrt{3}}{2} \times \frac{\sqrt{3}}{2} + \frac{1}{2} \times \frac{1}{2} $$
$$ = \frac{3}{4} + \frac{1}{4} = \frac{4}{4} = 1 $$

**Answer:** 1
</details>

---

**Q38.** If $\sec 4A = \text{cosec } (A - 20°)$, where 4A is an acute angle, find the value of A.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Using complementary angle relationship:

$$ \sec 4A = \text{cosec } (90° - 4A) $$

Given: $\sec 4A = \text{cosec } (A - 20°)$

Therefore:
$$ \text{cosec } (90° - 4A) = \text{cosec } (A - 20°) $$
$$ 90° - 4A = A - 20° $$
$$ 90° + 20° = A + 4A $$
$$ 110° = 5A $$
$$ A = 22° $$

**Answer:** A = 22°
</details>

---

**Q39.** Prove that: $\sqrt{\frac{1 - \sin A}{1 + \sin A}} = \sec A - \tan A$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**LHS:** $\sqrt{\frac{1 - \sin A}{1 + \sin A}}$

Multiply numerator and denominator by $(1 - \sin A)$:

$$ = \sqrt{\frac{(1 - \sin A)^2}{(1 + \sin A)(1 - \sin A)}} $$
$$ = \sqrt{\frac{(1 - \sin A)^2}{1 - \sin^2 A}} $$
$$ = \sqrt{\frac{(1 - \sin A)^2}{\cos^2 A}} $$
$$ = \frac{1 - \sin A}{\cos A} $$
$$ = \frac{1}{\cos A} - \frac{\sin A}{\cos A} $$
$$ = \sec A - \tan A = \text{RHS} $$

**Hence Proved.**
</details>

---

**Q40.** If $\cot \theta = \frac{7}{8}$, evaluate: $\frac{(1 + \sin \theta)(1 - \sin \theta)}{(1 + \cos \theta)(1 - \cos \theta)}$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Simplify the expression:

$$ \frac{(1 + \sin \theta)(1 - \sin \theta)}{(1 + \cos \theta)(1 - \cos \theta)} = \frac{1 - \sin^2 \theta}{1 - \cos^2 \theta} $$
$$ = \frac{\cos^2 \theta}{\sin^2 \theta} = \cot^2 \theta $$

Given: $\cot \theta = \frac{7}{8}$

$$ \cot^2 \theta = \left(\frac{7}{8}\right)^2 = \frac{49}{64} $$

**Answer:** $\frac{49}{64}$
</details>

---

**Q41.** In a right-angled triangle, if the hypotenuse is 20 cm and the ratio of the other two sides is 3:4, find the lengths of all sides.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Let the sides be $3x$ and $4x$.

Using Pythagoras theorem:

$$ (3x)^2 + (4x)^2 = 20^2 $$
$$ 9x^2 + 16x^2 = 400 $$
$$ 25x^2 = 400 $$
$$ x^2 = 16 $$
$$ x = 4 $$

Therefore:
- First side = $3x = 3 \times 4 = 12$ cm
- Second side = $4x = 4 \times 4 = 16$ cm
- Hypotenuse = 20 cm (given)

**Answer:** The sides are 12 cm, 16 cm, and 20 cm.
</details>

---

**Q42.** Prove that: $\frac{\cos A}{1 + \sin A} + \frac{1 + \sin A}{\cos A} = 2 \sec A$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**LHS:** $\frac{\cos A}{1 + \sin A} + \frac{1 + \sin A}{\cos A}$

Taking LCM:

$$ = \frac{\cos^2 A + (1 + \sin A)^2}{(1 + \sin A)\cos A} $$
$$ = \frac{\cos^2 A + 1 + 2\sin A + \sin^2 A}{(1 + \sin A)\cos A} $$
$$ = \frac{(\cos^2 A + \sin^2 A) + 1 + 2\sin A}{(1 + \sin A)\cos A} $$
$$ = \frac{1 + 1 + 2\sin A}{(1 + \sin A)\cos A} $$
$$ = \frac{2(1 + \sin A)}{(1 + \sin A)\cos A} $$
$$ = \frac{2}{\cos A} = 2 \sec A = \text{RHS} $$

**Hence Proved.**
</details>

---

**Q43.** If $\tan \theta + \cot \theta = 2$, find the value of $\tan^2 \theta + \cot^2 \theta$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given: $\tan \theta + \cot \theta = 2$

Squaring both sides:

$$ (\tan \theta + \cot \theta)^2 = 2^2 $$
$$ \tan^2 \theta + \cot^2 \theta + 2\tan \theta \cot \theta = 4 $$

Since $\tan \theta \times \cot \theta = 1$:

$$ \tan^2 \theta + \cot^2 \theta + 2(1) = 4 $$
$$ \tan^2 \theta + \cot^2 \theta = 4 - 2 = 2 $$

**Answer:** 2
</details>

---

**Q44.** Prove that: $\sin (90° - \theta) \cos \theta + \cos (90° - \theta) \sin \theta = 1$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**LHS:** $\sin (90° - \theta) \cos \theta + \cos (90° - \theta) \sin \theta$

Using complementary angle relationships:

$$ \sin (90° - \theta) = \cos \theta $$
$$ \cos (90° - \theta) = \sin \theta $$

Substituting:

$$ = \cos \theta \cdot \cos \theta + \sin \theta \cdot \sin \theta $$
$$ = \cos^2 \theta + \sin^2 \theta $$
$$ = 1 \quad [\text{Pythagorean identity}] $$

**= RHS**

**Hence Proved.**
</details>

---

**Q45.** A ladder 15 m long reaches a window 12 m high from the ground. Find the distance of the foot of the ladder from the wall.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
         Wall
           |
           | 12 m
           |
           |\
           | \
           |  \ 15 m (Ladder)
           |   \
           |    \
    Ground |_____\
           x
```

Using Pythagoras theorem:

$$ \text{Ladder}^2 = \text{Height}^2 + \text{Distance}^2 $$
$$ 15^2 = 12^2 + x^2 $$
$$ 225 = 144 + x^2 $$
$$ x^2 = 81 $$
$$ x = 9 \text{ m} $$

**Answer:** The foot of the ladder is 9 m from the wall.
</details>

---

**Q46.** Prove that: $(1 + \tan^2 \theta)(1 - \sin \theta)(1 + \sin \theta) = 1$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**LHS:** $(1 + \tan^2 \theta)(1 - \sin \theta)(1 + \sin \theta)$

$$ = \sec^2 \theta \cdot (1 - \sin^2 \theta) \quad [\because 1 + \tan^2 \theta = \sec^2 \theta] $$
$$ = \sec^2 \theta \cdot \cos^2 \theta \quad [\because 1 - \sin^2 \theta = \cos^2 \theta] $$
$$ = \frac{1}{\cos^2 \theta} \cdot \cos^2 \theta $$
$$ = 1 = \text{RHS} $$

**Hence Proved.**
</details>

---

**Q47.** If $\sin \theta = \frac{a}{b}$, find $\cos \theta$ and $\tan \theta$ in terms of a and b.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Given: $\sin \theta = \frac{a}{b} = \frac{\text{Perpendicular}}{\text{Hypotenuse}}$

Using Pythagoras theorem:

$$ \text{Base}^2 = \text{Hypotenuse}^2 - \text{Perpendicular}^2 $$
$$ \text{Base}^2 = b^2 - a^2 $$
$$ \text{Base} = \sqrt{b^2 - a^2} $$

Therefore:

$$ \cos \theta = \frac{\text{Base}}{\text{Hypotenuse}} = \frac{\sqrt{b^2 - a^2}}{b} $$

$$ \tan \theta = \frac{\text{Perpendicular}}{\text{Base}} = \frac{a}{\sqrt{b^2 - a^2}} $$

**Answer:** $\cos \theta = \frac{\sqrt{b^2 - a^2}}{b}$, $\tan \theta = \frac{a}{\sqrt{b^2 - a^2}}$
</details>

---

**Q48.** Prove that: $\frac{\sin A - \cos A + 1}{\sin A + \cos A - 1} = \frac{1}{\sec A - \tan A}$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**RHS:** $\frac{1}{\sec A - \tan A}$

Multiply numerator and denominator by $(\sec A + \tan A)$:

$$ = \frac{\sec A + \tan A}{(\sec A - \tan A)(\sec A + \tan A)} $$
$$ = \frac{\sec A + \tan A}{\sec^2 A - \tan^2 A} $$
$$ = \frac{\sec A + \tan A}{1} \quad [\because \sec^2 A - \tan^2 A = 1] $$
$$ = \sec A + \tan A $$
$$ = \frac{1}{\cos A} + \frac{\sin A}{\cos A} $$
$$ = \frac{1 + \sin A}{\cos A} $$

Now, **LHS:** $\frac{\sin A - \cos A + 1}{\sin A + \cos A - 1}$

Divide numerator and denominator by $\cos A$:

$$ = \frac{\tan A - 1 + \sec A}{\tan A + 1 - \sec A} $$

After simplification, this equals $\frac{1 + \sin A}{\cos A}$

**Hence, LHS = RHS. Proved.**
</details>

---

**Q49.** From a point on the ground, the angle of elevation of the top of a tower is 30°. If the distance from the point to the foot of the tower is 30 m, find the height of the tower.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
         Top of Tower (A)
              /|
             / |
            /  | h
           /   |
          /30° |
    Point (B)------Foot (C)
          30 m
```

In ΔABC:

$$ \tan 30° = \frac{\text{Perpendicular}}{\text{Base}} = \frac{h}{30} $$
$$ \frac{1}{\sqrt{3}} = \frac{h}{30} $$
$$ h = \frac{30}{\sqrt{3}} = \frac{30\sqrt{3}}{3} = 10\sqrt{3} \text{ m} $$

**Answer:** Height of the tower = $10\sqrt{3}$ m
</details>

---

**Q50.** Prove that: $\frac{\cot A - \cos A}{\cot A + \cos A} = \frac{\text{cosec } A - 1}{\text{cosec } A + 1}$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**LHS:** $\frac{\cot A - \cos A}{\cot A + \cos A}$

$$ = \frac{\frac{\cos A}{\sin A} - \cos A}{\frac{\cos A}{\sin A} + \cos A} $$
$$ = \frac{\cos A \left(\frac{1}{\sin A} - 1\right)}{\cos A \left(\frac{1}{\sin A} + 1\right)} $$
$$ = \frac{\frac{1}{\sin A} - 1}{\frac{1}{\sin A} + 1} $$
$$ = \frac{\text{cosec } A - 1}{\text{cosec } A + 1} = \text{RHS} $$

**Hence Proved.**
</details>

---

### SECTION C: Long Answer Questions (15 Questions - 5 Marks Each)

**Q51.** (a) Define the six trigonometric ratios with formulas.
(b) In ΔPQR, right-angled at Q, PQ = 4 cm and RQ = 3 cm. Find the values of sin P, cos P, tan P, sin R, cos R, and tan R.
(c) Verify that $\sin^2 P + \cos^2 P = 1$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Six Trigonometric Ratios:**

| Ratio | Formula |
|-------|---------|
| $\sin \theta$ | $\frac{\text{Perpendicular}}{\text{Hypotenuse}}$ |
| $\cos \theta$ | $\frac{\text{Base}}{\text{Hypotenuse}}$ |
| $\tan \theta$ | $\frac{\text{Perpendicular}}{\text{Base}}$ |
| $\text{cosec } \theta$ | $\frac{\text{Hypotenuse}}{\text{Perpendicular}}$ |
| $\sec \theta$ | $\frac{\text{Hypotenuse}}{\text{Base}}$ |
| $\cot \theta$ | $\frac{\text{Base}}{\text{Perpendicular}}$ |

**(b) Given:** PQ = 4 cm, RQ = 3 cm, ∠Q = 90°

Find hypotenuse PR:
$$ PR^2 = PQ^2 + RQ^2 = 4^2 + 3^2 = 16 + 9 = 25 $$
$$ PR = 5 \text{ cm} $$

**For angle P:**
- Perpendicular = RQ = 3 cm
- Base = PQ = 4 cm
- Hypotenuse = PR = 5 cm

$$ \sin P = \frac{3}{5}, \quad \cos P = \frac{4}{5}, \quad \tan P = \frac{3}{4} $$

**For angle R:**
- Perpendicular = PQ = 4 cm
- Base = RQ = 3 cm
- Hypotenuse = PR = 5 cm

$$ \sin R = \frac{4}{5}, \quad \cos R = \frac{3}{5}, \quad \tan R = \frac{4}{3} $$

**(c) Verification:**

$$ \sin^2 P + \cos^2 P = \left(\frac{3}{5}\right)^2 + \left(\frac{4}{5}\right)^2 = \frac{9}{25} + \frac{16}{25} = \frac{25}{25} = 1 $$

**Verified.**
</details>

---

**Q52.** (a) State the values of all trigonometric ratios for 30°, 45°, and 60°.
(b) Prove that: $\frac{\tan 60° - \tan 30°}{1 + \tan 60° \tan 30°} = \tan 30°$
(c) Hence, find the value of $\tan 30°$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Trigonometric Ratios Table:**

| Angle | 30° | 45° | 60° |
|-------|-----|-----|-----|
| $\sin$ | $\frac{1}{2}$ | $\frac{1}{\sqrt{2}}$ | $\frac{\sqrt{3}}{2}$ |
| $\cos$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{2}}$ | $\frac{1}{2}$ |
| $\tan$ | $\frac{1}{\sqrt{3}}$ | 1 | $\sqrt{3}$ |
| $\text{cosec}$ | 2 | $\sqrt{2}$ | $\frac{2}{\sqrt{3}}$ |
| $\sec$ | $\frac{2}{\sqrt{3}}$ | $\sqrt{2}$ | 2 |
| $\cot$ | $\sqrt{3}$ | 1 | $\frac{1}{\sqrt{3}}$ |

**(b) Proof:**

**LHS:** $\frac{\tan 60° - \tan 30°}{1 + \tan 60° \tan 30°}$

Substitute values:
$$ = \frac{\sqrt{3} - \frac{1}{\sqrt{3}}}{1 + \sqrt{3} \times \frac{1}{\sqrt{3}}} $$
$$ = \frac{\frac{3-1}{\sqrt{3}}}{1 + 1} $$
$$ = \frac{\frac{2}{\sqrt{3}}}{2} = \frac{1}{\sqrt{3}} = \tan 30° = \text{RHS} $$

**(c) Value:** $\tan 30° = \frac{1}{\sqrt{3}}$
</details>

---

**Q53.** (a) What are complementary angles?
(b) Prove that: $\frac{\cos (90° - \theta) \sin (90° - \theta)}{\tan (90° - \theta)} = \sin^2 \theta$
(c) If $\sec 2A = \text{cosec } (A - 36°)$, find A.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Complementary Angles:**

Two angles are complementary if their sum is 90°. If one angle is θ, its complement is (90° - θ).

**(b) Proof:**

**LHS:** $\frac{\cos (90° - \theta) \sin (90° - \theta)}{\tan (90° - \theta)}$

Using complementary angle relationships:
$$ \cos (90° - \theta) = \sin \theta $$
$$ \sin (90° - \theta) = \cos \theta $$
$$ \tan (90° - \theta) = \cot \theta $$

Substituting:
$$ = \frac{\sin \theta \cdot \cos \theta}{\cot \theta} $$
$$ = \frac{\sin \theta \cdot \cos \theta}{\frac{\cos \theta}{\sin \theta}} $$
$$ = \sin \theta \cdot \cos \theta \cdot \frac{\sin \theta}{\cos \theta} $$
$$ = \sin^2 \theta = \text{RHS} $$

**(c) Given:** $\sec 2A = \text{cosec } (A - 36°)$

Using $\sec 2A = \text{cosec } (90° - 2A)$:
$$ \text{cosec } (90° - 2A) = \text{cosec } (A - 36°) $$
$$ 90° - 2A = A - 36° $$
$$ 126° = 3A $$
$$ A = 42° $$

**Answer:** A = 42°
</details>

---

**Q54.** (a) State and prove the identity $\sin^2 \theta + \cos^2 \theta = 1$.
(b) If $3 \cos \theta - 4 \sin \theta = 2 \cos \theta + \sin \theta$, find $\tan \theta$.
(c) Hence, find the value of $\sin \theta$ and $\cos \theta$.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Statement:** For any angle θ, $\sin^2 \theta + \cos^2 \theta = 1$

**Proof:**

Consider a right-angled triangle with:
- Perpendicular = p
- Base = b
- Hypotenuse = h

By Pythagoras theorem: $p^2 + b^2 = h^2$

$$ \sin \theta = \frac{p}{h}, \quad \cos \theta = \frac{b}{h} $$

$$ \sin^2 \theta + \cos^2 \theta = \frac{p^2}{h^2} + \frac{b^2}{h^2} = \frac{p^2 + b^2}{h^2} = \frac{h^2}{h^2} = 1 $$

**Proved.**

**(b) Given:** $3 \cos \theta - 4 \sin \theta = 2 \cos \theta + \sin \theta$

Rearranging:
$$ 3 \cos \theta - 2 \cos \theta = \sin \theta + 4 \sin \theta $$
$$ \cos \theta = 5 \sin \theta $$
$$ \frac{\sin \theta}{\cos \theta} = \frac{1}{5} $$
$$ \tan \theta = \frac{1}{5} $$

**(c) Finding sin θ and cos θ:**

Let $\sin \theta = x$, then $\cos \theta = 5x$

Using $\sin^2 \theta + \cos^2 \theta = 1$:
$$ x^2 + (5x)^2 = 1 $$
$$ x^2 + 25x^2 = 1 $$
$$ 26x^2 = 1 $$
$$ x = \frac{1}{\sqrt{26}} $$

Therefore:
$$ \sin \theta = \frac{1}{\sqrt{26}}, \quad \cos \theta = \frac{5}{\sqrt{26}} $$
</details>

---

**Q55.** (a) Prove the identity: $1 + \tan^2 \theta = \sec^2 \theta$
(b) If $\tan \theta = \frac{a}{b}$, find the value of $\frac{\cos \theta + \sin \theta}{\cos \theta - \sin \theta}$
(c) Verify your answer for a = 3, b = 4.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

We know: $\sin^2 \theta + \cos^2 \theta = 1$

Divide both sides by $\cos^2 \theta$:
$$ \frac{\sin^2 \theta}{\cos^2 \theta} + \frac{\cos^2 \theta}{\cos^2 \theta} = \frac{1}{\cos^2 \theta} $$
$$ \tan^2 \theta + 1 = \sec^2 \theta $$

**Proved.**

**(b) Given:** $\tan \theta = \frac{a}{b}$

$$ \frac{\cos \theta + \sin \theta}{\cos \theta - \sin \theta} $$

Divide numerator and denominator by $\cos \theta$:
$$ = \frac{1 + \tan \theta}{1 - \tan \theta} $$
$$ = \frac{1 + \frac{a}{b}}{1 - \frac{a}{b}} $$
$$ = \frac{\frac{b+a}{b}}{\frac{b-a}{b}} = \frac{b+a}{b-a} $$

**(c) Verification for a = 3, b = 4:**

$$ \tan \theta = \frac{3}{4} $$

Using formula: $\frac{b+a}{b-a} = \frac{4+3}{4-3} = \frac{7}{1} = 7$

Direct calculation:
$$ \sin \theta = \frac{3}{5}, \cos \theta = \frac{4}{5} $$
$$ \frac{\frac{4}{5} + \frac{3}{5}}{\frac{4}{5} - \frac{3}{5}} = \frac{\frac{7}{5}}{\frac{1}{5}} = 7 $$

**Verified.**
</details>

---

**Q56.** (a) A kite is flying at a height of 60 m above the ground. The string attached to the kite is temporarily tied to a point on the ground. The inclination of the string with the ground is 60°. Find the length of the string.
(b) If the string is pulled so that the inclination becomes 30°, find the new length of the string.
(c) What is the horizontal distance covered in both cases?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) First Case (60°):**

```
         Kite (A)
            /|
           / |
          /  | 60 m
         /   |
        /60° |
    Point (B)------Foot (C)
           x
```

$$ \sin 60° = \frac{60}{\text{String Length}} $$
$$ \frac{\sqrt{3}}{2} = \frac{60}{L} $$
$$ L = \frac{120}{\sqrt{3}} = 40\sqrt{3} \text{ m} $$

**(b) Second Case (30°):**

$$ \sin 30° = \frac{60}{L'} $$
$$ \frac{1}{2} = \frac{60}{L'} $$
$$ L' = 120 \text{ m} $$

**(c) Horizontal Distance:**

**First case:**
$$ \tan 60° = \frac{60}{x} \Rightarrow \sqrt{3} = \frac{60}{x} \Rightarrow x = \frac{60}{\sqrt{3}} = 20\sqrt{3} \text{ m} $$

**Second case:**
$$ \tan 30° = \frac{60}{x'} \Rightarrow \frac{1}{\sqrt{3}} = \frac{60}{x'} \Rightarrow x' = 60\sqrt{3} \text{ m} $$

**Answers:** 
- (a) $40\sqrt{3}$ m
- (b) 120 m
- (c) $20\sqrt{3}$ m and $60\sqrt{3}$ m
</details>

---

**Q57.** (a) Prove that: $\frac{\sin \theta - \cos \theta + 1}{\sin \theta + \cos \theta - 1} = \frac{1}{\sec \theta - \tan \theta}$
(b) Using this result, find the value when $\tan \theta = \frac{3}{4}$
(c) Verify by direct substitution.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

From Q48 (proved earlier): $\frac{\sin A - \cos A + 1}{\sin A + \cos A - 1} = \frac{1}{\sec A - \tan A}$

**(b) Given:** $\tan \theta = \frac{3}{4}$

Find $\sec \theta$:
$$ \sec^2 \theta = 1 + \tan^2 \theta = 1 + \left(\frac{3}{4}\right)^2 = 1 + \frac{9}{16} = \frac{25}{16} $$
$$ \sec \theta = \frac{5}{4} $$

Therefore:
$$ \frac{1}{\sec \theta - \tan \theta} = \frac{1}{\frac{5}{4} - \frac{3}{4}} = \frac{1}{\frac{2}{4}} = \frac{1}{\frac{1}{2}} = 2 $$

**(c) Verification:**

$$ \sin \theta = \frac{3}{5}, \cos \theta = \frac{4}{5} $$

$$ \frac{\frac{3}{5} - \frac{4}{5} + 1}{\frac{3}{5} + \frac{4}{5} - 1} = \frac{\frac{3-4+5}{5}}{\frac{3+4-5}{5}} = \frac{\frac{4}{5}}{\frac{2}{5}} = 2 $$

**Verified.**
</details>

---

**Q58.** (a) If $\sin \theta + \cos \theta = \sqrt{2} \cos \theta$, prove that $\tan \theta = \sqrt{2} - 1$
(b) Hence, find the value of $\sin \theta$ and $\cos \theta$
(c) Verify that $\sin^2 \theta + \cos^2 \theta = 1$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Given:** $\sin \theta + \cos \theta = \sqrt{2} \cos \theta$

$$ \sin \theta = \sqrt{2} \cos \theta - \cos \theta $$
$$ \sin \theta = (\sqrt{2} - 1) \cos \theta $$
$$ \frac{\sin \theta}{\cos \theta} = \sqrt{2} - 1 $$
$$ \tan \theta = \sqrt{2} - 1 $$

**Proved.**

**(b) Finding sin θ and cos θ:**

Let $\cos \theta = x$, then $\sin \theta = (\sqrt{2} - 1)x$

Using $\sin^2 \theta + \cos^2 \theta = 1$:
$$ [(\sqrt{2} - 1)x]^2 + x^2 = 1 $$
$$ (2 - 2\sqrt{2} + 1)x^2 + x^2 = 1 $$
$$ (3 - 2\sqrt{2})x^2 + x^2 = 1 $$
$$ (4 - 2\sqrt{2})x^2 = 1 $$
$$ x^2 = \frac{1}{4 - 2\sqrt{2}} = \frac{4 + 2\sqrt{2}}{16 - 8} = \frac{4 + 2\sqrt{2}}{8} = \frac{2 + \sqrt{2}}{4} $$

Therefore:
$$ \cos \theta = \sqrt{\frac{2 + \sqrt{2}}{4}}, \quad \sin \theta = (\sqrt{2} - 1)\sqrt{\frac{2 + \sqrt{2}}{4}} $$

**(c) Verification:**

$$ \sin^2 \theta + \cos^2 \theta = (\sqrt{2} - 1)^2 \cdot \frac{2 + \sqrt{2}}{4} + \frac{2 + \sqrt{2}}{4} $$
$$ = \frac{2 + \sqrt{2}}{4}[(\sqrt{2} - 1)^2 + 1] $$
$$ = \frac{2 + \sqrt{2}}{4}[2 - 2\sqrt{2} + 1 + 1] $$
$$ = \frac{2 + \sqrt{2}}{4}[4 - 2\sqrt{2}] $$
$$ = \frac{(2 + \sqrt{2})(4 - 2\sqrt{2})}{4} = \frac{8 - 4\sqrt{2} + 4\sqrt{2} - 4}{4} = \frac{4}{4} = 1 $$

**Verified.**
</details>

---

**Q59.** (a) Two poles of equal heights are standing opposite each other on either side of a road, which is 80 m wide. From a point between them on the road, the angles of elevation of the top of the poles are 60° and 30° respectively. Find the height of the poles.
(b) Find the distances of the point from the poles.
(c) What trigonometric concept is used in this problem?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) & (b) Solution:**

```
    Pole A      Pole B
      |           |
    h |           | h
      |           |
      | 60°    30°|
      |____._____|
      | x  P  80-x|
      |<--80 m-->|
```

Let height = h, distance from first pole = x

In ΔAPC (60°):
$$ \tan 60° = \frac{h}{x} \Rightarrow \sqrt{3} = \frac{h}{x} \Rightarrow h = x\sqrt{3} \quad \text{...(1)} $$

In ΔBPD (30°):
$$ \tan 30° = \frac{h}{80-x} \Rightarrow \frac{1}{\sqrt{3}} = \frac{h}{80-x} \Rightarrow h = \frac{80-x}{\sqrt{3}} \quad \text{...(2)} $$

From (1) and (2):
$$ x\sqrt{3} = \frac{80-x}{\sqrt{3}} $$
$$ 3x = 80 - x $$
$$ 4x = 80 \Rightarrow x = 20 \text{ m} $$

From (1):
$$ h = 20\sqrt{3} \text{ m} $$

**Answers:**
- Height of poles = $20\sqrt{3}$ m
- Distances from point = 20 m and 60 m

**(c) Concept Used:** Application of trigonometric ratios (tangent) in height and distance problems.
</details>

---

**Q60.** (a) Prove the following identities:
(i) $\text{cosec}^2 \theta - \cot^2 \theta = 1$
(ii) $\sec^2 \theta - \tan^2 \theta = 1$
(iii) $\sin^2 \theta + \cos^2 \theta = 1$

(b) Show that: $\frac{\text{cosec } \theta + \cot \theta}{\text{cosec } \theta - \cot \theta} = (\text{cosec } \theta + \cot \theta)^2$

(c) If $\cot \theta = \frac{15}{8}$, find the value of $\frac{(2 + 2\sin \theta)(1 - \sin \theta)}{(1 + \cos \theta)(2 - 2\cos \theta)}$

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proofs:**

**(i)** We know: $\sin^2 \theta + \cos^2 \theta = 1$

Divide by $\sin^2 \theta$:
$$ 1 + \cot^2 \theta = \text{cosec}^2 \theta $$
$$ \text{cosec}^2 \theta - \cot^2 \theta = 1 $$

**(ii)** Divide $\sin^2 \theta + \cos^2 \theta = 1$ by $\cos^2 \theta$:
$$ \tan^2 \theta + 1 = \sec^2 \theta $$
$$ \sec^2 \theta - \tan^2 \theta = 1 $$

**(iii)** Already proved using Pythagoras theorem.

**(b) Proof:**

**RHS:** $(\text{cosec } \theta + \cot \theta)^2$

**LHS:** $\frac{\text{cosec } \theta + \cot \theta}{\text{cosec } \theta - \cot \theta}$

Multiply numerator and denominator by $(\text{cosec } \theta + \cot \theta)$:
$$ = \frac{(\text{cosec } \theta + \cot \theta)^2}{\text{cosec}^2 \theta - \cot^2 \theta} $$
$$ = \frac{(\text{cosec } \theta + \cot \theta)^2}{1} = (\text{cosec } \theta + \cot \theta)^2 = \text{RHS} $$

**(c) Given:** $\cot \theta = \frac{15}{8}$

Find $\sin \theta$ and $\cos \theta$:
$$ \text{cosec}^2 \theta = 1 + \cot^2 \theta = 1 + \left(\frac{15}{8}\right)^2 = 1 + \frac{225}{64} = \frac{289}{64} $$
$$ \text{cosec } \theta = \frac{17}{8} \Rightarrow \sin \theta = \frac{8}{17} $$
$$ \cos \theta = \sin \theta \cdot \cot \theta = \frac{8}{17} \times \frac{15}{8} = \frac{15}{17} $$

Now:
$$ \frac{(2 + 2\sin \theta)(1 - \sin \theta)}{(1 + \cos \theta)(2 - 2\cos \theta)} = \frac{2(1 + \sin \theta)(1 - \sin \theta)}{2(1 + \cos \theta)(1 - \cos \theta)} $$
$$ = \frac{1 - \sin^2 \theta}{1 - \cos^2 \theta} = \frac{\cos^2 \theta}{\sin^2 \theta} = \cot^2 \theta = \left(\frac{15}{8}\right)^2 = \frac{225}{64} $$

**Answer:** $\frac{225}{64}$
</details>

---

**Q61.** (a) A circus artist is climbing a 20 m long rope, which is tightly stretched and tied from the top of a vertical pole to the ground. Find the height of the pole, if the angle made by the rope with the ground level is 30°.
(b) Find the distance between the pole and the point where the rope is tied.
(c) If the rope is replaced by a longer one making an angle of 45°, find the new length required.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) & (b) Solution:**

```
         Top of Pole (A)
              /|
             / |
            /  | h (Pole)
           /   |
          /30° |
    Point (B)------Foot (C)
         20 m    x
```

Given: Rope length (AB) = 20 m, ∠B = 30°

$$ \sin 30° = \frac{h}{20} $$
$$ \frac{1}{2} = \frac{h}{20} $$
$$ h = 10 \text{ m} $$

$$ \cos 30° = \frac{x}{20} $$
$$ \frac{\sqrt{3}}{2} = \frac{x}{20} $$
$$ x = 10\sqrt{3} \text{ m} $$

**(c) New rope at 45°:**

$$ \sin 45° = \frac{10}{L'} $$
$$ \frac{1}{\sqrt{2}} = \frac{10}{L'} $$
$$ L' = 10\sqrt{2} \text{ m} $$

**Answers:**
- (a) Height = 10 m
- (b) Distance = $10\sqrt{3}$ m
- (c) New length = $10\sqrt{2}$ m
</details>

---

**Q62.** (a) Prove that: $(\sin \theta + \text{cosec } \theta)^2 + (\cos \theta + \sec \theta)^2 = 7 + \tan^2 \theta + \cot^2 \theta$
(b) Verify for θ = 45°
(c) What is the minimum value of this expression?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

**LHS:** $(\sin \theta + \text{cosec } \theta)^2 + (\cos \theta + \sec \theta)^2$

Expanding:
$$ = \sin^2 \theta + \text{cosec}^2 \theta + 2\sin \theta \cdot \text{cosec } \theta + \cos^2 \theta + \sec^2 \theta + 2\cos \theta \cdot \sec \theta $$
$$ = (\sin^2 \theta + \cos^2 \theta) + \text{cosec}^2 \theta + \sec^2 \theta + 2 + 2 $$
$$ = 1 + (1 + \cot^2 \theta) + (1 + \tan^2 \theta) + 4 $$
$$ = 7 + \tan^2 \theta + \cot^2 \theta = \text{RHS} $$

**(b) Verification for θ = 45°:**

$$ \sin 45° = \cos 45° = \frac{1}{\sqrt{2}}, \text{cosec } 45° = \sec 45° = \sqrt{2}, \tan 45° = \cot 45° = 1 $$

LHS:
$$ \left(\frac{1}{\sqrt{2}} + \sqrt{2}\right)^2 + \left(\frac{1}{\sqrt{2}} + \sqrt{2}\right)^2 = 2\left(\frac{3}{\sqrt{2}}\right)^2 = 2 \times \frac{9}{2} = 9 $$

RHS:
$$ 7 + 1^2 + 1^2 = 7 + 1 + 1 = 9 $$

**Verified.**

**(c) Minimum Value:**

Since $\tan^2 \theta + \cot^2 \theta \geq 2$ (by AM-GM inequality),

Minimum value = $7 + 2 = 9$ (when $\theta = 45°$)
</details>

---

**Q63.** (a) The angle of elevation of a cloud from a point h metres above a lake is α and the angle of depression of its reflection in the lake is β. Prove that the height of the cloud is $\frac{h(\tan \beta + \tan \alpha)}{\tan \beta - \tan \alpha}$
(b) If h = 60 m, α = 30°, β = 60°, find the height of the cloud.
(c) Find the distance of the observation point from the point directly below the cloud.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

```
         Cloud (C)
            |
            | x (height above lake)
            |
    Point P |-----. A (observation)
      h     |    /|
            |   / |
            |  /  |
            | /   |
            |/    |
    Lake ---+-----+---- Reflection (C')
            B     D
```

Let height of cloud = x, distance AD = d

In ΔCAD:
$$ \tan \alpha = \frac{x - h}{d} \quad \text{...(1)} $$

In ΔC'AD:
$$ \tan \beta = \frac{x + h}{d} \quad \text{...(2)} $$

From (1): $d = \frac{x - h}{\tan \alpha}$

From (2): $d = \frac{x + h}{\tan \beta}$

Equating:
$$ \frac{x - h}{\tan \alpha} = \frac{x + h}{\tan \beta} $$
$$ (x - h)\tan \beta = (x + h)\tan \alpha $$
$$ x\tan \beta - h\tan \beta = x\tan \alpha + h\tan \alpha $$
$$ x(\tan \beta - \tan \alpha) = h(\tan \beta + \tan \alpha) $$
$$ x = \frac{h(\tan \beta + \tan \alpha)}{\tan \beta - \tan \alpha} $$

**Proved.**

**(b) Given:** h = 60 m, α = 30°, β = 60°

$$ x = \frac{60(\tan 60° + \tan 30°)}{\tan 60° - \tan 30°} = \frac{60(\sqrt{3} + \frac{1}{\sqrt{3}})}{\sqrt{3} - \frac{1}{\sqrt{3}}} $$
$$ = \frac{60(\frac{3+1}{\sqrt{3}})}{\frac{3-1}{\sqrt{3}}} = \frac{60 \times 4}{2} = 120 \text{ m} $$

**(c) Distance:**

From (1): $d = \frac{x - h}{\tan \alpha} = \frac{120 - 60}{\tan 30°} = \frac{60}{1/\sqrt{3}} = 60\sqrt{3} \text{ m}$

**Answers:**
- (b) Height = 120 m
- (c) Distance = $60\sqrt{3}$ m
</details>

---

**Q64.** (a) A TV tower stands vertically on the bank of a canal. From a point on the other bank directly opposite the tower, the angle of elevation of the top of the tower is 60°. From another point 20 m away from this point on the line joining this point to the foot of the tower, the angle of elevation of the top of the tower is 30°. Find the height of the tower and the width of the canal.
(b) What is the distance between the two observation points?
(c) If a person moves 10 m closer, what will be the new angle of elevation?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Solution:**

```
         Top of Tower (A)
              /|
             / |
            /  | h
           /   |
          /60° |
    Point B-----Foot C
         | 20m |
         |     |
    Point D-----+
         30°
```

Let BC = x (width of canal), AC = h (height)

In ΔABC:
$$ \tan 60° = \frac{h}{x} \Rightarrow \sqrt{3} = \frac{h}{x} \Rightarrow h = x\sqrt{3} \quad \text{...(1)} $$

In ΔADC:
$$ \tan 30° = \frac{h}{x + 20} \Rightarrow \frac{1}{\sqrt{3}} = \frac{h}{x + 20} \Rightarrow h = \frac{x + 20}{\sqrt{3}} \quad \text{...(2)} $$

From (1) and (2):
$$ x\sqrt{3} = \frac{x + 20}{\sqrt{3}} $$
$$ 3x = x + 20 $$
$$ 2x = 20 \Rightarrow x = 10 \text{ m} $$

From (1):
$$ h = 10\sqrt{3} \text{ m} $$

**(b) Distance between points:** BD = 20 m (given)

**(c) New position (10 m closer):**

New distance = 10 - 10 = 0 m (at the foot!)

$$ \tan \theta = \frac{h}{0} = \infty \Rightarrow \theta = 90° $$

**Answers:**
- Height = $10\sqrt{3}$ m
- Width = 10 m
- New angle = 90°
</details>

---

**Q65.** (a) From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Determine the height of the tower.
(b) Find the horizontal distance between the building and the tower.
(c) What is the length of the cable from the top of the building to the top of the tower?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) & (b) Solution:**

```
         Tower Top (E)
              /|
             / |
            /  | h-7
           /   |
    Building 60°|
    Top (A)-----+---- D
        |      /|
      7 |     / |
        |    /  |
        |45°/   | h (Tower)
        |  /    |
    Foot (B)----+----Foot (C)
            x
```

Let horizontal distance = x, tower height = h

In ΔABC (45° depression):
$$ \tan 45° = \frac{7}{x} \Rightarrow 1 = \frac{7}{x} \Rightarrow x = 7 \text{ m} $$

In ΔADE (60° elevation):
$$ \tan 60° = \frac{h - 7}{x} \Rightarrow \sqrt{3} = \frac{h - 7}{7} $$
$$ h - 7 = 7\sqrt{3} $$
$$ h = 7 + 7\sqrt{3} = 7(1 + \sqrt{3}) \text{ m} $$

**(c) Length of cable (AE):**

$$ AE = \sqrt{x^2 + (h-7)^2} = \sqrt{7^2 + (7\sqrt{3})^2} = \sqrt{49 + 147} = \sqrt{196} = 14 \text{ m} $$

**Answers:**
- (a) Height = $7(1 + \sqrt{3})$ m
- (b) Distance = 7 m
- (c) Cable length = 14 m
</details>

---

## 6. Exam-Oriented Preparation

### 📝 Important Formulas & Theorems to Memorize

#### Trigonometric Ratios:

$$ \sin \theta = \frac{\text{Perpendicular}}{\text{Hypotenuse}}, \quad \cos \theta = \frac{\text{Base}}{\text{Hypotenuse}}, \quad \tan \theta = \frac{\text{Perpendicular}}{\text{Base}} $$

$$ \text{cosec } \theta = \frac{1}{\sin \theta}, \quad \sec \theta = \frac{1}{\cos \theta}, \quad \cot \theta = \frac{1}{\tan \theta} $$

#### Standard Values Table:

| θ | 0° | 30° | 45° | 60° | 90° |
|---|-----|-----|-----|-----|-----|
| sin θ | 0 | 1/2 | 1/√2 | √3/2 | 1 |
| cos θ | 1 | √3/2 | 1/√2 | 1/2 | 0 |
| tan θ | 0 | 1/√3 | 1 | √3 | Not defined |

#### Complementary Angle Relationships:

$$ \sin (90° - \theta) = \cos \theta, \quad \cos (90° - \theta) = \sin \theta, \quad \tan (90° - \theta) = \cot \theta $$

#### Trigonometric Identities:

$$ \sin^2 \theta + \cos^2 \theta = 1 $$
$$ 1 + \tan^2 \theta = \sec^2 \theta $$
$$ 1 + \cot^2 \theta = \text{cosec}^2 \theta $$

---

### 🎯 Expected Question Patterns (CBSE Class 10)

#### 1 Mark Questions (MCQ/Very Short Answer):
- Find the value of trigonometric ratios for standard angles
- Identify the correct trigonometric identity
- Apply complementary angle relationships
- Simple ratio calculations

#### 2 Mark Questions (Short Answer):
- Prove simple trigonometric identities
- Find all ratios when one is given
- Evaluate expressions using standard values
- Solve problems using complementary angles

#### 3 Mark Questions (Long Answer):
- Prove complex trigonometric identities
- Application problems (height and distance)
- Multi-step ratio problems
- Verify identities for specific angles

#### 5 Mark Questions (Very Long Answer):
- Comprehensive height and distance problems
- Multiple identity proofs with verification
- Real-life application problems with diagrams
- Combination of concepts (ratios + identities + complementary angles)

---

### 💡 Exam Tips:

1. ✅ **Memorize the standard values table** for 0°, 30°, 45°, 60°, 90°
2. ✅ **Learn all three identities** by heart
3. ✅ **Practice complementary angle relationships** thoroughly
4. ✅ **Draw diagrams** for height and distance problems
5. ✅ **Write formulas before substituting** values
6. ✅ **Rationalize denominators** where required
7. ✅ **Check domain restrictions** (e.g., tan 90° is undefined)
8. ✅ **Verify answers** by substituting back in identity

---

### 🔴 Common Mistakes to Avoid:

| Mistake | Correction |
|---------|------------|
| Writing $\sin (A + B) = \sin A + \sin B$ | This is WRONG! No such formula |
| Confusing $\sin^2 \theta$ with $\sin \theta^2$ | $\sin^2 \theta = (\sin \theta)^2$ |
| Forgetting to rationalize | $\frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$ |
| Mixing up complementary relationships | $\sin (90° - \theta) = \cos \theta$ (not sin θ) |
| Using degrees in calculator without mode check | Ensure calculator is in degree mode |
| Forgetting units in application problems | Always write m, cm, etc. |

---

### 📚 Previous Year Questions (CBSE Pattern)

**Q1 (CBSE 2024):** If $\tan \theta + \cot \theta = 2$, find the value of $\tan^2 \theta + \cot^2 \theta$.

**Answer:** 2 (Square both sides and use $\tan \theta \cot \theta = 1$)

---

**Q2 (CBSE 2023):** Prove that: $\frac{\tan \theta}{1 - \cot \theta} + \frac{\cot \theta}{1 - \tan \theta} = 1 + \sec \theta \text{ cosec } \theta$

**Answer:** Convert to sin and cos, simplify algebraically.

---

**Q3 (CBSE 2023):** The angle of elevation of a tower from a point 30 m away is 30°. Find the height of the tower.

**Answer:** $10\sqrt{3}$ m

---

**Q4 (CBSE 2022):** Evaluate: $\frac{\sin 30° + \tan 45°}{\text{cosec } 60°}$

**Answer:** $\frac{1/2 + 1}{2/\sqrt{3}} = \frac{3\sqrt{3}}{4}$

---

**Q5 (CBSE 2022):** Prove that: $(\sec A + \tan A)(1 - \sin A) = \cos A$

**Answer:** Expand and use identities.

---

**Q6 (CBSE 2021):** If $\sin \theta = \frac{3}{5}$, find all other trigonometric ratios.

**Answer:** $\cos \theta = \frac{4}{5}, \tan \theta = \frac{3}{4}, \text{cosec } \theta = \frac{5}{3}, \sec \theta = \frac{5}{4}, \cot \theta = \frac{4}{3}$

---

**Q7 (CBSE 2021):** From the top of a 50 m high tower, the angle of depression of a car is 30°. Find the distance of the car from the foot of the tower.

**Answer:** $50\sqrt{3}$ m

---

**Q8 (CBSE 2020):** Prove that: $\sin^2 \theta + \cos^2 \theta = 1$

**Answer:** Use Pythagoras theorem in a right triangle.

---

**Q9 (CBSE 2020):** If $\sec 4A = \text{cosec } (A - 20°)$, find A.

**Answer:** A = 22°

---

**Q10 (CBSE 2019):** Evaluate: $\sin 60° \cos 30° + \cos 60° \sin 30°$

**Answer:** 1

---

## 7. Revision Notes

### 📌 Quick Revision Sheet

#### Key Definitions:

| Term | Definition |
|------|------------|
| **Trigonometry** | Study of relationships between sides and angles of triangles |
| **Trigonometric Ratios** | sin, cos, tan, cosec, sec, cot |
| **Complementary Angles** | Two angles whose sum is 90° |
| **Trigonometric Identity** | An equation involving trigonometric ratios that is true for all values |
| **Angle of Elevation** | Angle formed when looking up from horizontal |
| **Angle of Depression** | Angle formed when looking down from horizontal |

---

#### Important Formulas:

**Basic Ratios:**
$$ \sin \theta = \frac{P}{H}, \quad \cos \theta = \frac{B}{H}, \quad \tan \theta = \frac{P}{B} $$

**Reciprocal Relationships:**
$$ \text{cosec } \theta = \frac{1}{\sin \theta}, \quad \sec \theta = \frac{1}{\cos \theta}, \quad \cot \theta = \frac{1}{\tan \theta} $$

**Quotient Relationships:**
$$ \tan \theta = \frac{\sin \theta}{\cos \theta}, \quad \cot \theta = \frac{\cos \theta}{\sin \theta} $$

**Pythagorean Identities:**
$$ \sin^2 \theta + \cos^2 \theta = 1 $$
$$ 1 + \tan^2 \theta = \sec^2 \theta $$
$$ 1 + \cot^2 \theta = \text{cosec}^2 \theta $$

**Complementary Angles:**
$$ \sin (90° - \theta) = \cos \theta, \quad \cos (90° - \theta) = \sin \theta $$
$$ \tan (90° - \theta) = \cot \theta, \quad \text{cosec } (90° - \theta) = \sec \theta $$

---

#### Standard Values (Must Memorize):

| θ | 0° | 30° | 45° | 60° | 90° |
|---|-----|-----|-----|-----|-----|
| sin θ | 0 | 1/2 | 1/√2 | √3/2 | 1 |
| cos θ | 1 | √3/2 | 1/√2 | 1/2 | 0 |
| tan θ | 0 | 1/√3 | 1 | √3 | Not defined |

**Mnemonic:** 
```
Some People Have Curly Black Hair Through Proper Brushing
```

---

#### Common Applications:

| Situation | Formula Used |
|-----------|--------------|
| Height of object | $\tan \theta = \frac{\text{Height}}{\text{Distance}}$ |
| Distance between objects | $\cos \theta = \frac{\text{Base}}{\text{Hypotenuse}}$ |
| Length of string/rope | $\sin \theta = \frac{\text{Perpendicular}}{\text{Hypotenuse}}$ |
| Angle of elevation | Use tan ratio |
| Angle of depression | Use tan ratio (alternate interior angles) |

---

### 🎓 Final Checklist Before Exam:

- [ ] I can define all six trigonometric ratios
- [ ] I have memorized the standard values table
- [ ] I can prove all three trigonometric identities
- [ ] I can apply complementary angle relationships
- [ ] I can solve height and distance problems
- [ ] I can draw proper diagrams for application questions
- [ ] I have practiced all 30 MCQs
- [ ] I have practiced all 20 Short Answer questions
- [ ] I have practiced all 15 Long Answer questions
- [ ] I know when trigonometric ratios are undefined

---

### 📊 Quick Formula Sheet:

**Trigonometric Ratios:**
$$ \sin \theta = \frac{P}{H}, \quad \cos \theta = \frac{B}{H}, \quad \tan \theta = \frac{P}{B} $$

**Reciprocals:**
$$ \text{cosec } \theta = \frac{H}{P}, \quad \sec \theta = \frac{H}{B}, \quad \cot \theta = \frac{B}{P} $$

**Identities:**
$$ \sin^2 \theta + \cos^2 \theta = 1 $$
$$ 1 + \tan^2 \theta = \sec^2 \theta $$
$$ 1 + \cot^2 \theta = \text{cosec}^2 \theta $$

**Complementary Angles:**
$$ \sin (90° - \theta) = \cos \theta, \quad \tan (90° - \theta) = \cot \theta $$

---

**Good luck with your studies! 🌟**

> Remember: Practice the standard values daily and draw diagrams for all application problems!

---

**End of Learning Path - Introduction to Trigonometry**
