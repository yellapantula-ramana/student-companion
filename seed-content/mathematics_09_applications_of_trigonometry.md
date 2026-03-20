# Some Applications of Trigonometry - Learning Path

## 1. Concept Introduction

### What are Applications of Trigonometry?

**Trigonometry** has numerous practical applications in real life, especially in measuring heights and distances of objects that are difficult to measure directly.

The word "trigonometry" comes from Greek words:
- **"Tri"** = Three
- **"Gon"** = Sides
- **"Metron"** = Measure

**Everyday Applications:**
- 🏔️ Measuring height of mountains, buildings, and towers
- 🚢 Navigation in ships and aircraft
- 📡 Satellite systems and GPS technology
- 🎮 Computer graphics and game development
- 🏗️ Construction and architecture
- 🌊 Surveying land and mapping
- 🔭 Astronomy - measuring distances to stars and planets
- 📱 Mobile phone triangulation for location

### Key Terms in Applications:

```
LINE OF SIGHT
     ↓
     A (Object)
     |\
     | \
     |  \
     |   \
     |    \
     |     \
     |      \
     B-------C
    (Observer)

∠BAC = Angle of Elevation (looking up)
∠BCA = Angle of Depression (looking down)
```

**Important Definitions:**

| Term | Meaning | Diagram |
|------|---------|---------|
| **Line of Sight** | The line drawn from the eye of an observer to the point on the object viewed | Straight line from observer to object |
| **Angle of Elevation** | Angle formed by line of sight with horizontal when viewing an object **above** horizontal | Looking UP |
| **Angle of Depression** | Angle formed by line of sight with horizontal when viewing an object **below** horizontal | Looking DOWN |
| **Horizontal Level** | The horizontal line through the eye of the observer | Reference line |

---

## 2. Micro-topic Breakdown

This chapter is divided into the following key concepts:

```
Some Applications of Trigonometry
├── 2.1 Basic Concepts
│   ├── Line of Sight
│   ├── Angle of Elevation
│   ├── Angle of Depression
│   └── Horizontal Level
├── 2.2 Height and Distance Problems
│   ├── Finding height of objects
│   ├── Finding distance between objects
│   └── Finding length of objects
├── 2.3 Applications with Single Object
│   ├── Tower/Building problems
│   ├── Tree problems
│   └── Pole problems
├── 2.4 Applications with Multiple Objects
│   ├── Two towers/buildings
│   ├── Tower and shadow
│   └── Moving objects (cars, ships)
└── 2.5 Complex Applications
    ├── Objects with given angles from two points
    ├── Cloud and its reflection problems
    └── River width problems
```

---

## 3. Concept Explanations

### 3.1 Line of Sight

**Definition:**

The **line of sight** is the straight line drawn from the eye of an observer to the point on the object being viewed.

```
         Object (Top of Tower)
              *
             /
            /
           /  Line of Sight
          /
         /
        /
       * Eye of Observer
```

**Key Points:**
- Line of sight is always a straight line
- It connects the observer's eye to the object
- Used to form right-angled triangles for calculations

---

### 3.2 Angle of Elevation

**Definition:**

The **angle of elevation** is the angle formed by the line of sight with the horizontal level when the observer looks **upward** to view an object above the horizontal.

```
              A (Top of Tower)
              /|
             / |
            /  |
           /   | h (Height)
          /    |
         /θ    |
    O *--------* B
   (Observer)  (Foot)
   
   ∠AOB = θ = Angle of Elevation
   OB = Horizontal distance
   AB = Height of object
```

**Mathematical Representation:**

In right triangle OAB:
$$ \tan \theta = \frac{\text{Perpendicular}}{\text{Base}} = \frac{AB}{OB} = \frac{h}{d} $$

Where:
- θ = Angle of elevation
- h = Height of object
- d = Horizontal distance

---

### 3.3 Angle of Depression

**Definition:**

The **angle of depression** is the angle formed by the line of sight with the horizontal level when the observer looks **downward** to view an object below the horizontal.

```
   A (Top of Tower) *--------* H (Horizontal)
                     \       |
                      \      |
                       \     |
                        \    | h
                         \   |
                          \  |
                           \ |
                            \|
                             * O (Observer on ground)
                             
   ∠HAO = θ = Angle of Depression
   ∠AOB = θ (Alternate interior angles)
```

**Important Property:**

$$ \text{Angle of Depression} = \text{Angle of Elevation} $$

(They are alternate interior angles when horizontal lines are parallel)

---

### 3.4 Solving Height and Distance Problems

#### General Approach:

**Step 1:** Draw a clear diagram with all given information

**Step 2:** Identify the right-angled triangle(s)

**Step 3:** Label the known and unknown quantities

**Step 4:** Choose the appropriate trigonometric ratio

**Step 5:** Set up the equation and solve

**Step 6:** Verify the answer is reasonable

#### Common Trigonometric Ratios Used:

| Given | To Find | Ratio to Use |
|-------|---------|--------------|
| Angle & Base | Height | tan θ = P/B |
| Angle & Height | Base | tan θ = P/B |
| Angle & Hypotenuse | Height | sin θ = P/H |
| Angle & Hypotenuse | Base | cos θ = B/H |

---

### 3.5 Important Problem Types

#### Type 1: Single Object Problems
- Finding height of tower/building
- Finding distance from object
- Finding length of shadow

#### Type 2: Two Object Problems
- Two towers of different heights
- Tower and its shadow
- Moving objects (car, ship, balloon)

#### Type 3: Complex Problems
- Angles from two different points
- Cloud and its reflection
- River width problems
- Complementary angles problems

---

## 4. Guided Examples

### Example 1: Finding Height of a Tower

**Question:** From a point on the ground 30 m away from the foot of a tower, the angle of elevation of the top of the tower is 30°. Find the height of the tower.

**Step-by-Step Solution:**

**Step 1:** Draw the diagram

```
         A (Top of Tower)
         /|
        / |
       /  | h
      /   |
     /30° |
    B-----C
     30 m
```

**Step 2:** Identify the triangle
- Right triangle ABC, right-angled at C
- ∠B = 30° (angle of elevation)
- BC = 30 m (distance from tower)
- AC = h (height to find)

**Step 3:** Choose the ratio
$$ \tan 30° = \frac{\text{Perpendicular}}{\text{Base}} = \frac{AC}{BC} = \frac{h}{30} $$

**Step 4:** Solve for h
$$ \frac{1}{\sqrt{3}} = \frac{h}{30} $$
$$ h = \frac{30}{\sqrt{3}} = \frac{30\sqrt{3}}{3} = 10\sqrt{3} \text{ m} $$

**Final Answer:** Height of the tower = $10\sqrt{3}$ m ≈ 17.32 m

---

### Example 2: Finding Distance Using Angle of Depression

**Question:** From the top of a 75 m high lighthouse, the angle of depression of a ship on the water is 45°. Find the distance of the ship from the foot of the lighthouse.

**Step-by-Step Solution:**

**Step 1:** Draw the diagram

```
   A (Top of Lighthouse) *--------* H
                          \       |
                           \45°   |
                            \     | 75 m
                             \    |
                              \   |
                               \  |
                                \ |
                                 \|
                                  * B (Ship)
                                  |
                                  | d
                                  |
   Foot of Lighthouse -----------*
```

**Step 2:** Identify angles
- ∠HAB = 45° (angle of depression)
- ∠ABC = 45° (alternate interior angles)

**Step 3:** Choose the ratio
$$ \tan 45° = \frac{\text{Perpendicular}}{\text{Base}} = \frac{AC}{BC} = \frac{75}{d} $$

**Step 4:** Solve for d
$$ 1 = \frac{75}{d} $$
$$ d = 75 \text{ m} $$

**Final Answer:** Distance of ship from lighthouse = 75 m

---

### Example 3: Finding Length of a String

**Question:** A kite is flying at a height of 60 m above the ground. The string attached to the kite is temporarily tied to a point on the ground. The inclination of the string with the ground is 60°. Find the length of the string, assuming that there is no slack in the string.

**Step-by-Step Solution:**

**Step 1:** Draw the diagram

```
         K (Kite)
         /|
        / |
       /  | 60 m
      /   |
     /60° |
    G-----F
    
    GK = String length (l)
    KF = Height = 60 m
    ∠G = 60°
```

**Step 2:** Choose the ratio
$$ \sin 60° = \frac{\text{Perpendicular}}{\text{Hypotenuse}} = \frac{KF}{GK} = \frac{60}{l} $$

**Step 3:** Solve for l
$$ \frac{\sqrt{3}}{2} = \frac{60}{l} $$
$$ l = \frac{120}{\sqrt{3}} = \frac{120\sqrt{3}}{3} = 40\sqrt{3} \text{ m} $$

**Final Answer:** Length of the string = $40\sqrt{3}$ m ≈ 69.28 m

---

### Example 4: Two Angles from Same Point

**Question:** The angles of elevation of the top of a tower from two points at distances of 4 m and 9 m from the base of the tower and in the same straight line with it are complementary. Prove that the height of the tower is 6 m.

**Step-by-Step Solution:**

**Step 1:** Draw the diagram

```
         A (Top of Tower)
         /|\
        / | \
       /  |  \
      /   |   \
     /θ   |h   \ (90°-θ)
    B-----C-----D
     4 m     9 m
```

**Step 2:** Set up equations
- Let height AC = h
- ∠ABC = θ (angle of elevation from B)
- ∠ADC = 90° - θ (complementary angle from D)

In ΔABC:
$$ \tan \theta = \frac{h}{4} \quad \text{...(1)} $$

In ΔADC:
$$ \tan (90° - \theta) = \frac{h}{9} $$
$$ \cot \theta = \frac{h}{9} \quad \text{...(2)} $$

**Step 3:** Multiply equations (1) and (2)
$$ \tan \theta \times \cot \theta = \frac{h}{4} \times \frac{h}{9} $$
$$ 1 = \frac{h^2}{36} $$
$$ h^2 = 36 $$
$$ h = 6 \text{ m} $$

**Final Answer:** Height of the tower = 6 m (Proved)

---

### Example 5: Moving Object Problem

**Question:** From the top of a 100 m high tower, a man observes two cars on the opposite sides of the tower with angles of depression 30° and 45° respectively. Find the distance between the cars.

**Step-by-Step Solution:**

**Step 1:** Draw the diagram

```
   A (Top of Tower)
   /|\
  / | \
 /  |  \
/30°|100|45°
B---C---D
   x    y
```

**Step 2:** Find distance x (car on 30° side)
$$ \tan 30° = \frac{100}{x} $$
$$ \frac{1}{\sqrt{3}} = \frac{100}{x} $$
$$ x = 100\sqrt{3} \text{ m} $$

**Step 3:** Find distance y (car on 45° side)
$$ \tan 45° = \frac{100}{y} $$
$$ 1 = \frac{100}{y} $$
$$ y = 100 \text{ m} $$

**Step 4:** Find total distance
$$ \text{Distance between cars} = x + y = 100\sqrt{3} + 100 = 100(\sqrt{3} + 1) \text{ m} $$

**Final Answer:** Distance between cars = $100(\sqrt{3} + 1)$ m ≈ 273.2 m

---

## 5. Practice Questions

### SECTION A: Multiple Choice Questions (30 Questions - 1 Mark Each)

**Q1.** The angle of elevation of the top of a tower from a point on the ground is 45°. If the distance of the point from the foot of the tower is 50 m, then the height of the tower is:
- (A) 25 m
- (B) 50 m
- (C) 50√3 m
- (D) 25√3 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 50 m

**Explanation:** 
$$\tan 45° = \frac{h}{50} \Rightarrow 1 = \frac{h}{50} \Rightarrow h = 50 \text{ m}$$
</details>

---

**Q2.** The angle of depression of an object from the top of a tower is 30°. The angle of elevation of the top of the tower from the object is:
- (A) 30°
- (B) 60°
- (C) 45°
- (D) 90°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 30°

**Explanation:** Angle of depression = Angle of elevation (alternate interior angles)
</details>

---

**Q3.** A ladder makes an angle of 60° with the ground when placed against a wall. If the foot of the ladder is 2 m away from the wall, then the length of the ladder is:
- (A) 4 m
- (B) 4√3 m
- (C) 2 m
- (D) 2√3 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 4 m

**Explanation:** 
$$\cos 60° = \frac{2}{l} \Rightarrow \frac{1}{2} = \frac{2}{l} \Rightarrow l = 4 \text{ m}$$
</details>

---

**Q4.** If the height of a tower and the distance of the point of observation from its foot are both increased by 10%, then the angle of elevation of its top:
- (A) Increases
- (B) Decreases
- (C) Remains unchanged
- (D) Becomes double

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Remains unchanged

**Explanation:** 
$$\tan \theta = \frac{1.1h}{1.1d} = \frac{h}{d}$$ (ratio remains same)
</details>

---

**Q5.** The shadow of a tower is equal to its height. The sun's altitude is:
- (A) 30°
- (B) 45°
- (C) 60°
- (D) 90°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 45°

**Explanation:** 
$$\tan \theta = \frac{h}{h} = 1 \Rightarrow \theta = 45°$$
</details>

---

**Q6.** From a point 20 m away from the foot of a tower, the angle of elevation of the top of the tower is 60°. The height of the tower is:
- (A) 20 m
- (B) 20√3 m
- (C) 10√3 m
- (D) 40 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 20√3 m

**Explanation:** 
$$\tan 60° = \frac{h}{20} \Rightarrow \sqrt{3} = \frac{h}{20} \Rightarrow h = 20\sqrt{3} \text{ m}$$
</details>

---

**Q7.** The angle of elevation of the top of a tower from a point on the ground 30 m away from the foot of the tower is 30°. The height of the tower is:
- (A) 30 m
- (B) 10√3 m
- (C) 10 m
- (D) 30√3 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 10√3 m

**Explanation:** 
$$\tan 30° = \frac{h}{30} \Rightarrow \frac{1}{\sqrt{3}} = \frac{h}{30} \Rightarrow h = 10\sqrt{3} \text{ m}$$
</details>

---

**Q8.** When the length of the shadow of a pole is equal to the height of the pole, then the elevation of the source of light is:
- (A) 30°
- (B) 45°
- (C) 60°
- (D) 90°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 45°

**Explanation:** When shadow = height, tan θ = 1, so θ = 45°
</details>

---

**Q9.** The angle of depression of a car from the top of a 75 m high tower is 30°. The distance of the car from the base of the tower is:
- (A) 75 m
- (B) 75√3 m
- (C) 25√3 m
- (D) 150 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 75√3 m

**Explanation:** 
$$\tan 30° = \frac{75}{d} \Rightarrow \frac{1}{\sqrt{3}} = \frac{75}{d} \Rightarrow d = 75\sqrt{3} \text{ m}$$
</details>

---

**Q10.** A kite is flying at a height of 30 m from the ground. The length of string from the kite to the ground is 60 m. The angle of elevation of the kite is:
- (A) 30°
- (B) 45°
- (C) 60°
- (D) 90°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 30°

**Explanation:** 
$$\sin \theta = \frac{30}{60} = \frac{1}{2} \Rightarrow \theta = 30°$$
</details>

---

**Q11.** The tops of two poles of height 20 m and 14 m are connected by a wire. If the wire makes an angle of 30° with the horizontal, then the length of the wire is:
- (A) 6 m
- (B) 12 m
- (C) 18 m
- (D) 20 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 12 m

**Explanation:** 
Difference in height = 20 - 14 = 6 m
$$\sin 30° = \frac{6}{l} \Rightarrow \frac{1}{2} = \frac{6}{l} \Rightarrow l = 12 \text{ m}$$
</details>

---

**Q12.** From the top of a cliff 20 m high, the angle of elevation of the top of a tower is found to be equal to the angle of depression of the foot of the tower. The height of the tower is:
- (A) 20 m
- (B) 40 m
- (C) 60 m
- (D) 80 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 40 m

**Explanation:** When angles are equal, height of tower = 2 × height of cliff = 40 m
</details>

---

**Q13.** If the sun's elevation changes from 30° to 60°, then the length of the shadow of a tower:
- (A) Increases
- (B) Decreases
- (C) Remains the same
- (D) Becomes double

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Decreases

**Explanation:** As angle increases, shadow length decreases (inverse relationship)
</details>

---

**Q14.** A tower subtends an angle of 30° at a point on the same level as its foot. At a second point h metres above the first, the depression of the foot of the tower is 60°. The height of the tower is:
- (A) h/3 m
- (B) h/√3 m
- (C) h√3 m
- (D) 3h m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) h/3 m

**Explanation:** Using trigonometric ratios in two triangles formed.
</details>

---

**Q15.** The angle of elevation of the top of a vertical tower from a point on the ground is 60°. From another point 10 m vertically above the first, its angle of elevation is 30°. The height of the tower is:
- (A) 5 m
- (B) 10 m
- (C) 15 m
- (D) 20 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 15 m

**Explanation:** Solving two equations with tan 60° and tan 30°.
</details>

---

**Q16.** A man on the top of a vertical observation tower observes a car moving at a uniform speed coming directly towards it. If it takes 12 minutes for the angle of depression to change from 30° to 45°, the time taken by the car to reach the tower is:
- (A) 6(√3 + 1) min
- (B) 6(√3 - 1) min
- (C) 12(√3 - 1) min
- (D) 18 min

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 6(√3 + 1) min

**Explanation:** Using speed = distance/time relationship with trigonometric ratios.
</details>

---

**Q17.** The length of the shadow of a tower standing on level ground is found to be 2x metres when the sun's altitude is 45°. The length of the shadow when the sun's altitude is 30° is:
- (A) 2x√3 m
- (B) x√3 m
- (C) 3x m
- (D) 4x m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 2x√3 m

**Explanation:** Height = 2x (when θ = 45°). When θ = 30°, shadow = h/tan 30° = 2x√3
</details>

---

**Q18.** Two poles are 10 m and 20 m high. The line joining their tops makes an angle of 15° with the horizontal. The distance between the poles is approximately:
- (A) 37.3 m
- (B) 35.3 m
- (C) 33.3 m
- (D) 31.3 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 37.3 m

**Explanation:** 
$$\tan 15° = \frac{10}{d} \Rightarrow d = \frac{10}{\tan 15°} ≈ 37.3 \text{ m}$$
</details>

---

**Q19.** From the top of a lighthouse, the angles of depression of two ships on opposite sides are observed to be 30° and 45°. If the height of the lighthouse is h, then the distance between the ships is:
- (A) h(√3 + 1)
- (B) h(√3 - 1)
- (C) h(1 + 1/√3)
- (D) h(√3 + 1)/√3

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) h(√3 + 1)

**Explanation:** 
Distance = h/tan 30° + h/tan 45° = h√3 + h = h(√3 + 1)
</details>

---

**Q20.** A balloon is connected to a meteorological station by a cable of length 200 m inclined at 60° to the horizontal. The height of the balloon from the ground is:
- (A) 100 m
- (B) 100√3 m
- (C) 200 m
- (D) 200√3 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 100√3 m

**Explanation:** 
$$\sin 60° = \frac{h}{200} \Rightarrow \frac{\sqrt{3}}{2} = \frac{h}{200} \Rightarrow h = 100\sqrt{3} \text{ m}$$
</details>

---

**Q21.** The angle of elevation of a cloud from a point h metres above a lake is α and the angle of depression of its reflection in the lake is β. The height of the cloud is:
- (A) $\frac{h(\tan \beta + \tan \alpha)}{\tan \beta - \tan \alpha}$
- (B) $\frac{h(\tan \beta - \tan \alpha)}{\tan \beta + \tan \alpha}$
- (C) $\frac{h(\sin \beta + \sin \alpha)}{\sin \beta - \sin \alpha}$
- (D) $\frac{h(\cos \beta + \cos \alpha)}{\cos \beta - \cos \alpha}$

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) $\frac{h(\tan \beta + \tan \alpha)}{\tan \beta - \tan \alpha}$

**Explanation:** Standard formula derived using trigonometric relationships.
</details>

---

**Q22.** A tree breaks due to storm and the broken part bends so that the top of the tree touches the ground making an angle of 30° with the ground. The distance between the foot of the tree and the point where the top touches the ground is 8 m. The height of the tree is:
- (A) 8 m
- (B) 8√3 m
- (C) 4√3 m
- (D) 12 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 8√3 m

**Explanation:** Using trigonometric ratios in the right triangle formed.
</details>

---

**Q23.** From the top of a 50 m high building, the angle of depression of the top and bottom of a tower are observed to be 30° and 60° respectively. The height of the tower is:
- (A) 50 m
- (B) 100/3 m
- (C) 150 m
- (D) 200/3 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 100/3 m

**Explanation:** Solving using two right triangles formed by the angles.
</details>

---

**Q24.** A person observes the angle of elevation of the top of a tower to be 45°. He walks 20 m towards the tower and finds the angle of elevation to be 60°. The height of the tower is:
- (A) 10(√3 + 3) m
- (B) 20(√3 + 3) m
- (C) 30(√3 + 1) m
- (D) 40(√3 - 1) m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 10(√3 + 3) m

**Explanation:** Setting up two equations with tan 45° and tan 60°.
</details>

---

**Q25.** The angle of elevation of the top of a tower from the top and bottom of a tree are 60° and 45° respectively. If the height of the tower is 30 m, then the height of the tree is:
- (A) 10(3 - √3) m
- (B) 15(3 - √3) m
- (C) 20(√3 - 1) m
- (D) 25(3 - √3) m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 10(3 - √3) m

**Explanation:** Using trigonometric relationships in two triangles.
</details>

---

**Q26.** A vertical stick 20 m long casts a shadow 10 m long on the ground. At the same time, a tower casts a shadow 50 m long on the ground. The height of the tower is:
- (A) 100 m
- (B) 120 m
- (C) 25 m
- (D) 200 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 100 m

**Explanation:** 
$$\frac{\text{Stick}}{\text{Shadow}} = \frac{\text{Tower}}{\text{Shadow}} \Rightarrow \frac{20}{10} = \frac{h}{50} \Rightarrow h = 100 \text{ m}$$
</details>

---

**Q27.** From the top of a cliff 90 m high, the angles of depression of the top and bottom of a tower are observed to be 30° and 60° respectively. The height of the tower is:
- (A) 45 m
- (B) 50 m
- (C) 60 m
- (D) 75 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 60 m

**Explanation:** Using trigonometric ratios in two right triangles.
</details>

---

**Q28.** A man is watching from the top of a tower a boat speeding away from the tower. The angle of depression changes from 45° to 30° in 10 seconds. If the height of the tower is 100 m, the speed of the boat is:
- (A) 36(√3 - 1) km/h
- (B) 18(√3 - 1) km/h
- (C) 36(√3 + 1) km/h
- (D) 18(√3 + 1) km/h

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 36(√3 - 1) km/h

**Explanation:** Distance = 100(√3 - 1) m in 10 seconds, convert to km/h.
</details>

---

**Q29.** The angle of elevation of the top of a tower from a point on the ground is 30°. After walking 100 m towards the tower, the angle of elevation becomes 60°. The height of the tower is:
- (A) 50 m
- (B) 50√3 m
- (C) 100 m
- (D) 100√3 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 50√3 m

**Explanation:** Solving two equations formed by tan 30° and tan 60°.
</details>

---

**Q30.** A circus artist is climbing a 20 m long rope, which is tightly stretched and tied from the top of a vertical pole to the ground. If the angle made by the rope with the ground level is 30°, then the height of the pole is:
- (A) 10 m
- (B) 20 m
- (C) 10√3 m
- (D) 20√3 m

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) 10 m

**Explanation:** 
$$\sin 30° = \frac{h}{20} \Rightarrow \frac{1}{2} = \frac{h}{20} \Rightarrow h = 10 \text{ m}$$
</details>

---

### SECTION B: Short Answer Questions (20 Questions - 2-3 Marks Each)

**Q31.** A circus artist is climbing a 20 m long rope, which is tightly stretched and tied from the top of a vertical pole to the ground. Find the height of the pole, if the angle made by the rope with the ground level is 30°.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
         Top of Pole (A)
              /|
             / |
            /  | h
           /   |
          /30° |
    Point (B)------Foot (C)
         20 m
```

In ΔABC:
$$ \sin 30° = \frac{h}{20} $$
$$ \frac{1}{2} = \frac{h}{20} $$
$$ h = 10 \text{ m} $$

**Answer:** Height of the pole = 10 m
</details>

---

**Q32.** From the top of a 75 m high lighthouse, the angles of depression of two ships are 30° and 45°. If one ship is exactly behind the other on the same side of the lighthouse, find the distance between the two ships.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
   A (Top of Lighthouse)
   /|\
  / | \
 /45°|75|30°
B---C---D
   x   y
```

For ship at 45°:
$$ \tan 45° = \frac{75}{x} \Rightarrow x = 75 \text{ m} $$

For ship at 30°:
$$ \tan 30° = \frac{75}{y} \Rightarrow \frac{1}{\sqrt{3}} = \frac{75}{y} \Rightarrow y = 75\sqrt{3} \text{ m} $$

Distance between ships:
$$ y - x = 75\sqrt{3} - 75 = 75(\sqrt{3} - 1) \text{ m} $$

**Answer:** $75(\sqrt{3} - 1)$ m
</details>

---

**Q33.** A kite is flying at a height of 60 m above the ground. The string attached to the kite is temporarily tied to a point on the ground. The inclination of the string with the ground is 60°. Find the length of the string.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
         Kite (K)
         /|
        / |
       /  | 60 m
      /   |
     /60° |
    G-----F
    
    GK = String length (l)
```

In ΔGKF:
$$ \sin 60° = \frac{60}{l} $$
$$ \frac{\sqrt{3}}{2} = \frac{60}{l} $$
$$ l = \frac{120}{\sqrt{3}} = 40\sqrt{3} \text{ m} $$

**Answer:** Length of string = $40\sqrt{3}$ m
</details>

---

**Q34.** A 1.5 m tall boy is standing at some distance from a 30 m tall building. The angle of elevation from his eyes to the top of the building increases from 30° to 60° as he walks towards the building. Find the distance he walked towards the building.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Effective height = 30 - 1.5 = 28.5 m

```
         Top of Building (A)
         /|\
        / | \
       /60°|28.5|30°
      D----C----B
         x    y
```

Initial position (30°):
$$ \tan 30° = \frac{28.5}{y} \Rightarrow y = 28.5\sqrt{3} \text{ m} $$

Final position (60°):
$$ \tan 60° = \frac{28.5}{x} \Rightarrow x = \frac{28.5}{\sqrt{3}} \text{ m} $$

Distance walked:
$$ y - x = 28.5\sqrt{3} - \frac{28.5}{\sqrt{3}} = 28.5\left(\sqrt{3} - \frac{1}{\sqrt{3}}\right) = 28.5 \times \frac{2}{\sqrt{3}} = 19\sqrt{3} \text{ m} $$

**Answer:** $19\sqrt{3}$ m
</details>

---

**Q35.** The angle of elevation of the top of a tower from a point on the ground, which is 30 m away from the foot of the tower, is 30°. Find the height of the tower.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
         A (Top of Tower)
         /|
        / |
       /  | h
      /30°|
    B-----C
     30 m
```

In ΔABC:
$$ \tan 30° = \frac{h}{30} $$
$$ \frac{1}{\sqrt{3}} = \frac{h}{30} $$
$$ h = \frac{30}{\sqrt{3}} = 10\sqrt{3} \text{ m} $$

**Answer:** Height of tower = $10\sqrt{3}$ m
</details>

---

**Q36.** A contractor plans to install two slides for children to play in a park. For the children below the age of 5 years, she prefers to have a slide whose top is at a height of 1.5 m, and is inclined at an angle of 30° to the ground. For the elder children, she wants to have a steep slide at a height of 3 m, and inclined at an angle of 60° to the ground. What should be the length of the slide in each case?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**For younger children (1.5 m, 30°):**

```
      /|
     / | 1.5 m
    /  |
   /30°|
  -----
    l₁
```

$$ \sin 30° = \frac{1.5}{l_1} \Rightarrow \frac{1}{2} = \frac{1.5}{l_1} \Rightarrow l_1 = 3 \text{ m} $$

**For elder children (3 m, 60°):**

$$ \sin 60° = \frac{3}{l_2} \Rightarrow \frac{\sqrt{3}}{2} = \frac{3}{l_2} \Rightarrow l_2 = \frac{6}{\sqrt{3}} = 2\sqrt{3} \text{ m} $$

**Answer:** Lengths are 3 m and $2\sqrt{3}$ m respectively.
</details>

---

**Q37.** A tower casts a shadow of 50 m when the sun's elevation is 30°. Find the height of the tower.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
         A (Top of Tower)
         /|
        / |
       /  | h
      /30°|
    B-----C
     50 m
```

In ΔABC:
$$ \tan 30° = \frac{h}{50} $$
$$ \frac{1}{\sqrt{3}} = \frac{h}{50} $$
$$ h = \frac{50}{\sqrt{3}} = \frac{50\sqrt{3}}{3} \text{ m} $$

**Answer:** Height of tower = $\frac{50\sqrt{3}}{3}$ m
</details>

---

**Q38.** From the top of a 100 m high lighthouse, the angle of depression of a ship is 45°. Find the distance of the ship from the lighthouse.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
   A (Top of Lighthouse) *--------* H
                          \       |
                           \45°   |
                            \     | 100 m
                             \    |
                              \   |
                               \  |
                                \ |
                                 \|
                                  * B (Ship)
                                  |
                                  | d
```

Angle of depression = Angle of elevation = 45°

$$ \tan 45° = \frac{100}{d} $$
$$ 1 = \frac{100}{d} $$
$$ d = 100 \text{ m} $$

**Answer:** Distance = 100 m
</details>

---

**Q39.** The angle of elevation of the top of a building from the foot of a tower is 30° and the angle of elevation of the top of the tower from the foot of the building is 60°. If the tower is 50 m high, find the height of the building.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
    Tower          Building
      A              D
      |\            /|
      | \          / |
   50 |  \        /  | h
      |   \      /   |
      |60° \    / 30°|
      B-----C-------E
         d      d
```

In ΔABC:
$$ \tan 60° = \frac{50}{d} \Rightarrow \sqrt{3} = \frac{50}{d} \Rightarrow d = \frac{50}{\sqrt{3}} $$

In ΔBDE:
$$ \tan 30° = \frac{h}{d} \Rightarrow \frac{1}{\sqrt{3}} = \frac{h}{50/\sqrt{3}} \Rightarrow h = \frac{50}{3} \text{ m} $$

**Answer:** Height of building = $\frac{50}{3}$ m = 16.67 m
</details>

---

**Q40.** Two poles of equal heights are standing opposite each other on either side of a road, which is 80 m wide. From a point between them on the road, the angles of elevation of the top of the poles are 60° and 30° respectively. Find the height of the poles.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

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

Let distance from first pole = x

In first triangle:
$$ \tan 60° = \frac{h}{x} \Rightarrow \sqrt{3} = \frac{h}{x} \Rightarrow h = x\sqrt{3} \quad \text{...(1)} $$

In second triangle:
$$ \tan 30° = \frac{h}{80-x} \Rightarrow \frac{1}{\sqrt{3}} = \frac{h}{80-x} \Rightarrow h = \frac{80-x}{\sqrt{3}} \quad \text{...(2)} $$

From (1) and (2):
$$ x\sqrt{3} = \frac{80-x}{\sqrt{3}} $$
$$ 3x = 80 - x $$
$$ 4x = 80 \Rightarrow x = 20 \text{ m} $$

From (1):
$$ h = 20\sqrt{3} \text{ m} $$

**Answer:** Height of poles = $20\sqrt{3}$ m
</details>

---

**Q41.** A TV tower stands vertically on the bank of a canal. From a point on the other bank directly opposite the tower, the angle of elevation of the top of the tower is 60°. From another point 20 m away from this point on the line joining this point to the foot of the tower, the angle of elevation of the top of the tower is 30°. Find the height of the tower and the width of the canal.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

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

Let BC = x (width of canal)

In ΔABC:
$$ \tan 60° = \frac{h}{x} \Rightarrow \sqrt{3} = \frac{h}{x} \Rightarrow h = x\sqrt{3} \quad \text{...(1)} $$

In ΔADC:
$$ \tan 30° = \frac{h}{x+20} \Rightarrow \frac{1}{\sqrt{3}} = \frac{h}{x+20} \Rightarrow h = \frac{x+20}{\sqrt{3}} \quad \text{...(2)} $$

From (1) and (2):
$$ x\sqrt{3} = \frac{x+20}{\sqrt{3}} $$
$$ 3x = x + 20 $$
$$ 2x = 20 \Rightarrow x = 10 \text{ m} $$

From (1):
$$ h = 10\sqrt{3} \text{ m} $$

**Answer:** Height = $10\sqrt{3}$ m, Width of canal = 10 m
</details>

---

**Q42.** As observed from the top of a 75 m high lighthouse from the sea-level, the angles of depression of two ships are 30° and 45°. If one ship is exactly behind the other on the same side of the lighthouse, find the distance between the two ships.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
   A (Top of Lighthouse)
   /|\
  / | \
 /45°|75|30°
B---C---D
   x   y
```

For nearer ship (45°):
$$ \tan 45° = \frac{75}{x} \Rightarrow x = 75 \text{ m} $$

For farther ship (30°):
$$ \tan 30° = \frac{75}{y} \Rightarrow \frac{1}{\sqrt{3}} = \frac{75}{y} \Rightarrow y = 75\sqrt{3} \text{ m} $$

Distance between ships:
$$ y - x = 75\sqrt{3} - 75 = 75(\sqrt{3} - 1) \text{ m} $$

**Answer:** $75(\sqrt{3} - 1)$ m
</details>

---

**Q43.** A 1.2 m tall girl spots a balloon moving with the wind in a horizontal line at a height of 88.2 m from the ground. The angle of elevation of the balloon from the eyes of the girl at any instant is 60°. After some time, the angle of elevation reduces to 30°. Find the distance travelled by the balloon during the interval.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Effective height = 88.2 - 1.2 = 87 m

```
   Balloon positions
   A         B
    \       /
     \     /
      \   /
     60°\ /30°
        \/
         G (Girl's eyes)
```

Initial distance (60°):
$$ \tan 60° = \frac{87}{x} \Rightarrow \sqrt{3} = \frac{87}{x} \Rightarrow x = \frac{87}{\sqrt{3}} \text{ m} $$

Final distance (30°):
$$ \tan 30° = \frac{87}{y} \Rightarrow \frac{1}{\sqrt{3}} = \frac{87}{y} \Rightarrow y = 87\sqrt{3} \text{ m} $$

Distance travelled:
$$ y - x = 87\sqrt{3} - \frac{87}{\sqrt{3}} = 87\left(\sqrt{3} - \frac{1}{\sqrt{3}}\right) = 87 \times \frac{2}{\sqrt{3}} = 58\sqrt{3} \text{ m} $$

**Answer:** $58\sqrt{3}$ m
</details>

---

**Q44.** A straight highway leads to the foot of a tower. A man standing at the top of the tower observes a car at an angle of depression of 30°, which is approaching the foot of the tower with a uniform speed. Six seconds later, the angle of depression of the car is found to be 60°. Find the time taken by the car to reach the foot of the tower from this point.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
   A (Top of Tower)
   /|\
  / | \
 /30°|h|60°
D---C---B
   6s   t
```

Let height = h, speed = v

Initial position (30°):
$$ \tan 30° = \frac{h}{DB} \Rightarrow DB = h\sqrt{3} $$

After 6 seconds (60°):
$$ \tan 60° = \frac{h}{CB} \Rightarrow CB = \frac{h}{\sqrt{3}} $$

Distance covered in 6 seconds:
$$ DC = DB - CB = h\sqrt{3} - \frac{h}{\sqrt{3}} = \frac{2h}{\sqrt{3}} $$

Speed:
$$ v = \frac{2h/\sqrt{3}}{6} = \frac{h}{3\sqrt{3}} $$

Time to cover CB:
$$ t = \frac{CB}{v} = \frac{h/\sqrt{3}}{h/3\sqrt{3}} = 3 \text{ seconds} $$

**Answer:** 3 seconds
</details>

---

**Q45.** The angles of elevation of the top of a tower from two points at distances of 4 m and 9 m from the base of the tower and in the same straight line with it are complementary. Prove that the height of the tower is 6 m.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
         A (Top of Tower)
         /|\
        / | \
       /  |  \
      /θ   |h  \ (90°-θ)
    B-----C-----D
     4 m     9 m
```

Let height AC = h

In ΔABC:
$$ \tan \theta = \frac{h}{4} \quad \text{...(1)} $$

In ΔADC:
$$ \tan (90° - \theta) = \frac{h}{9} $$
$$ \cot \theta = \frac{h}{9} \quad \text{...(2)} $$

Multiplying (1) and (2):
$$ \tan \theta \times \cot \theta = \frac{h}{4} \times \frac{h}{9} $$
$$ 1 = \frac{h^2}{36} $$
$$ h^2 = 36 $$
$$ h = 6 \text{ m} $$

**Answer:** Height = 6 m (Proved)
</details>

---

**Q46.** From the top of a 50 m high tower, the angles of depression of the top and bottom of a pole are observed to be 45° and 60° respectively. Find the height of the pole.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
   Tower          Pole
     A              D
     |\            /|
     | \          / |
  50 |  \45°    /   | h
     |   \    /60°  |
     |    \  /      |
     |     \/       |
     B-----C-------E
          x
```

In ΔABC:
$$ \tan 60° = \frac{50}{x} \Rightarrow x = \frac{50}{\sqrt{3}} $$

Height difference:
$$ 50 - h = x \tan 45° = \frac{50}{\sqrt{3}} \times 1 = \frac{50}{\sqrt{3}} $$

Therefore:
$$ h = 50 - \frac{50}{\sqrt{3}} = 50\left(1 - \frac{1}{\sqrt{3}}\right) = 50\left(\frac{\sqrt{3} - 1}{\sqrt{3}}\right) \text{ m} $$

**Answer:** $50\left(\frac{\sqrt{3} - 1}{\sqrt{3}}\right)$ m
</details>

---

**Q47.** A man on the top of a vertical tower observes a car moving at a uniform speed coming directly towards it. If it takes 12 minutes for the angle of depression to change from 30° to 45°, how soon after this will the car reach the tower?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
   A (Top of Tower)
   /|\
  / | \
 /30°|h|45°
D---C---B
 12min  t
```

Let height = h, speed = v

At 30°:
$$ DB = h\sqrt{3} $$

At 45°:
$$ CB = h $$

Distance covered in 12 min:
$$ DC = h\sqrt{3} - h = h(\sqrt{3} - 1) $$

Speed:
$$ v = \frac{h(\sqrt{3} - 1)}{12} $$

Time to cover CB:
$$ t = \frac{h}{v} = \frac{h}{h(\sqrt{3} - 1)/12} = \frac{12}{\sqrt{3} - 1} = \frac{12(\sqrt{3} + 1)}{2} = 6(\sqrt{3} + 1) \text{ minutes} $$

**Answer:** $6(\sqrt{3} + 1)$ minutes
</details>

---

**Q48.** Prove that the height of a tower is $\sqrt{ab}$ metres, if the angles of elevation of the top of the tower from two points at distances a and b metres from the base and in the same straight line with it are complementary.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
         A (Top of Tower)
         /|\
        / | \
       /  |  \
      /θ   |h  \ (90°-θ)
    B-----C-----D
     a         b
```

Let height AC = h

In ΔABC:
$$ \tan \theta = \frac{h}{a} \quad \text{...(1)} $$

In ΔADC:
$$ \tan (90° - \theta) = \frac{h}{b} $$
$$ \cot \theta = \frac{h}{b} \quad \text{...(2)} $$

Multiplying (1) and (2):
$$ \tan \theta \times \cot \theta = \frac{h}{a} \times \frac{h}{b} $$
$$ 1 = \frac{h^2}{ab} $$
$$ h^2 = ab $$
$$ h = \sqrt{ab} \text{ m} $$

**Answer:** Height = $\sqrt{ab}$ m (Proved)
</details>

---

**Q49.** The shadow of a tower standing on level ground is found to be 40 m longer when the sun's altitude is 30° than when it is 60°. Find the height of the tower.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
    Sun at 60°: Shadow = x
    Sun at 30°: Shadow = x + 40
    
         A
        /|\
       / | \
      /60°|h|30°
     /    |  \
    B-----C---D
      x   x+40
```

When sun's altitude = 60°:
$$ \tan 60° = \frac{h}{x} \Rightarrow \sqrt{3} = \frac{h}{x} \Rightarrow x = \frac{h}{\sqrt{3}} $$

When sun's altitude = 30°:
$$ \tan 30° = \frac{h}{x+40} \Rightarrow \frac{1}{\sqrt{3}} = \frac{h}{x+40} \Rightarrow x + 40 = h\sqrt{3} $$

Substituting:
$$ \frac{h}{\sqrt{3}} + 40 = h\sqrt{3} $$
$$ 40 = h\sqrt{3} - \frac{h}{\sqrt{3}} = h\left(\sqrt{3} - \frac{1}{\sqrt{3}}\right) = h \times \frac{2}{\sqrt{3}} $$
$$ h = \frac{40\sqrt{3}}{2} = 20\sqrt{3} \text{ m} $$

**Answer:** Height = $20\sqrt{3}$ m
</details>

---

**Q50.** From the top of a building 60 m high, the angles of elevation and depression of the top and foot of a lamp post are 30° and 60° respectively. Find the horizontal distance between the building and the lamp post.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
   Building       Lamp Post
     A              D
     |\            /|
     | \          / |
  60 |  \30°    /   | h
     |   \    /60°  |
     |    \  /      |
     |     \/       |
     B-----C-------E
          x
```

In ΔABC:
$$ \tan 60° = \frac{60}{x} \Rightarrow \sqrt{3} = \frac{60}{x} \Rightarrow x = \frac{60}{\sqrt{3}} = 20\sqrt{3} \text{ m} $$

**Answer:** Horizontal distance = $20\sqrt{3}$ m
</details>

---

### SECTION C: Long Answer Questions (15 Questions - 5 Marks Each)

**Q51.** (a) Define angle of elevation and angle of depression with the help of a diagram.
(b) From the top of a 100 m high tower, the angle of depression of the top and bottom of a building are observed to be 45° and 60° respectively. Find the height of the building.
(c) Find the horizontal distance between the tower and the building.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Definitions:**

**Angle of Elevation:** The angle formed by the line of sight with the horizontal when the object being viewed is above the horizontal level.

**Angle of Depression:** The angle formed by the line of sight with the horizontal when the object being viewed is below the horizontal level.

```
         Object (above)
            /|
           / |
          /  | Angle of Elevation
         /   |
    ----*----*---- Horizontal
         \   |
          \  | Angle of Depression
           \ |
            \|
         Object (below)
```

**(b) & (c) Solution:**

```
   Tower          Building
     A              D
     |\            /|
     | \          / |
 100 |  \45°    /   | h
     |   \    /60°  |
     |    \  /      |
     |     \/       |
     B-----C-------E
          x
```

In ΔABC:
$$ \tan 60° = \frac{100}{x} \Rightarrow \sqrt{3} = \frac{100}{x} \Rightarrow x = \frac{100}{\sqrt{3}} \text{ m} $$

Height difference:
$$ 100 - h = x \tan 45° = \frac{100}{\sqrt{3}} \times 1 = \frac{100}{\sqrt{3}} $$

Therefore:
$$ h = 100 - \frac{100}{\sqrt{3}} = 100\left(1 - \frac{1}{\sqrt{3}}\right) = 100\left(\frac{\sqrt{3} - 1}{\sqrt{3}}\right) \text{ m} $$

**Answers:**
- (b) Height of building = $100\left(\frac{\sqrt{3} - 1}{\sqrt{3}}\right)$ m ≈ 42.26 m
- (c) Horizontal distance = $\frac{100}{\sqrt{3}}$ m ≈ 57.74 m
</details>

---

**Q52.** (a) A kite is flying at a height of 75 m above the ground. The string attached to the kite is temporarily tied to a point on the ground. The inclination of the string with the ground is 60°. Find the length of the string.
(b) If the string is pulled so that the inclination becomes 30°, find the new length of the string required.
(c) What is the horizontal distance covered in both cases?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) First Case (60°):**

```
         Kite (K)
         /|
        / |
       /  | 75 m
      /   |
     /60° |
    G-----F
    
    GK = String length (l₁)
```

$$ \sin 60° = \frac{75}{l_1} \Rightarrow \frac{\sqrt{3}}{2} = \frac{75}{l_1} \Rightarrow l_1 = \frac{150}{\sqrt{3}} = 50\sqrt{3} \text{ m} $$

Horizontal distance:
$$ \cos 60° = \frac{d_1}{l_1} \Rightarrow \frac{1}{2} = \frac{d_1}{50\sqrt{3}} \Rightarrow d_1 = 25\sqrt{3} \text{ m} $$

**(b) Second Case (30°):**

$$ \sin 30° = \frac{75}{l_2} \Rightarrow \frac{1}{2} = \frac{75}{l_2} \Rightarrow l_2 = 150 \text{ m} $$

Horizontal distance:
$$ \cos 30° = \frac{d_2}{l_2} \Rightarrow \frac{\sqrt{3}}{2} = \frac{d_2}{150} \Rightarrow d_2 = 75\sqrt{3} \text{ m} $$

**(c) Horizontal distances:**
- First case: $25\sqrt{3}$ m
- Second case: $75\sqrt{3}$ m

**Answers:**
- (a) $50\sqrt{3}$ m
- (b) 150 m
- (c) $25\sqrt{3}$ m and $75\sqrt{3}$ m
</details>

---

**Q53.** (a) Two poles of equal heights are standing opposite each other on either side of a road, which is 80 m wide. From a point between them on the road, the angles of elevation of the top of the poles are 60° and 30° respectively. Find the height of the poles.
(b) Find the distances of the point from the poles.
(c) What trigonometric concept is primarily used in this problem?

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

Let distance from first pole = x

In first triangle:
$$ \tan 60° = \frac{h}{x} \Rightarrow \sqrt{3} = \frac{h}{x} \Rightarrow h = x\sqrt{3} \quad \text{...(1)} $$

In second triangle:
$$ \tan 30° = \frac{h}{80-x} \Rightarrow \frac{1}{\sqrt{3}} = \frac{h}{80-x} \Rightarrow h = \frac{80-x}{\sqrt{3}} \quad \text{...(2)} $$

From (1) and (2):
$$ x\sqrt{3} = \frac{80-x}{\sqrt{3}} $$
$$ 3x = 80 - x $$
$$ 4x = 80 \Rightarrow x = 20 \text{ m} $$

From (1):
$$ h = 20\sqrt{3} \text{ m} $$

Distances from point:
- From first pole = 20 m
- From second pole = 80 - 20 = 60 m

**(c) Concept Used:** Application of tangent ratio in right-angled triangles for height and distance problems.

**Answers:**
- (a) Height = $20\sqrt{3}$ m
- (b) Distances = 20 m and 60 m
- (c) Tangent ratio application
</details>

---

**Q54.** (a) From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Determine the height of the tower.
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

**Q55.** (a) The angle of elevation of a cloud from a point h metres above a lake is α and the angle of depression of its reflection in the lake is β. Prove that the height of the cloud is $\frac{h(\tan \beta + \tan \alpha)}{\tan \beta - \tan \alpha}$
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

$$ x = \frac{60(\tan 60° + \tan 30°)}{\tan 60° - \tan 30°} = \frac{60(\sqrt{3} + \frac{1}{\sqrt{3}})}{\sqrt{3} - \frac{1}{\sqrt{3}}} = \frac{60(\frac{4}{\sqrt{3}})}{\frac{2}{\sqrt{3}}} = 120 \text{ m} $$

**(c) Distance:**

From (1): $d = \frac{x - h}{\tan \alpha} = \frac{120 - 60}{\tan 30°} = \frac{60}{1/\sqrt{3}} = 60\sqrt{3} \text{ m}$

**Answers:**
- (b) Height = 120 m
- (c) Distance = $60\sqrt{3}$ m
</details>

---

**Q56.** (a) A TV tower stands vertically on the bank of a canal. From a point on the other bank directly opposite the tower, the angle of elevation of the top of the tower is 60°. From another point 20 m away from this point on the line joining this point to the foot of the tower, the angle of elevation of the top of the tower is 30°. Find the height of the tower and the width of the canal.
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

Let BC = x (width of canal)

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
- (a) Height = $10\sqrt{3}$ m, Width = 10 m
- (b) 20 m
- (c) 90°
</details>

---

**Q57.** (a) A man on the top of a vertical observation tower observes a car moving at a uniform speed coming directly towards it. If it takes 12 minutes for the angle of depression to change from 30° to 45°, how soon after this will the car reach the tower?
(b) Find the total time taken by the car to reach the tower from the initial position.
(c) If the height of the tower is 100 m, find the speed of the car.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Solution:**

```
   A (Top of Tower)
   /|\
  / | \
 /30°|h|45°
D---C---B
 12min  t
```

Let height = h, speed = v

At 30°:
$$ DB = h\sqrt{3} $$

At 45°:
$$ CB = h $$

Distance covered in 12 min:
$$ DC = h\sqrt{3} - h = h(\sqrt{3} - 1) $$

Speed:
$$ v = \frac{h(\sqrt{3} - 1)}{12} $$

Time to cover CB:
$$ t = \frac{h}{v} = \frac{h}{h(\sqrt{3} - 1)/12} = \frac{12}{\sqrt{3} - 1} = \frac{12(\sqrt{3} + 1)}{2} = 6(\sqrt{3} + 1) \text{ minutes} $$

**(b) Total time:**

$$ 12 + 6(\sqrt{3} + 1) = 12 + 6\sqrt{3} + 6 = 18 + 6\sqrt{3} \text{ minutes} $$

**(c) Speed with h = 100 m:**

$$ v = \frac{100(\sqrt{3} - 1)}{12} \text{ m/min} = \frac{100(\sqrt{3} - 1)}{12} \times \frac{60}{1000} \text{ km/h} = \frac{(\sqrt{3} - 1)}{2} \text{ km/h} $$

**Answers:**
- (a) $6(\sqrt{3} + 1)$ minutes
- (b) $18 + 6\sqrt{3}$ minutes
- (c) $\frac{(\sqrt{3} - 1)}{2}$ km/h
</details>

---

**Q58.** (a) The angle of elevation of the top of a tower from a point on the ground is 30°. After walking 100 m towards the tower, the angle of elevation becomes 60°. Find the height of the tower.
(b) Find the distance of the tower from the initial point.
(c) What would be the angle of elevation if the person walks another 50 m towards the tower?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) & (b) Solution:**

```
         A (Top of Tower)
         /|\
        / | \
       /60°|h|30°
      /    |  \
     D-----C---B
       100 m  x
```

Let BC = x, height = h

In ΔABC:
$$ \tan 30° = \frac{h}{100 + x} \Rightarrow \frac{1}{\sqrt{3}} = \frac{h}{100 + x} \Rightarrow h = \frac{100 + x}{\sqrt{3}} \quad \text{...(1)} $$

In ΔADC:
$$ \tan 60° = \frac{h}{x} \Rightarrow \sqrt{3} = \frac{h}{x} \Rightarrow h = x\sqrt{3} \quad \text{...(2)} $$

From (1) and (2):
$$ x\sqrt{3} = \frac{100 + x}{\sqrt{3}} $$
$$ 3x = 100 + x $$
$$ 2x = 100 \Rightarrow x = 50 \text{ m} $$

From (2):
$$ h = 50\sqrt{3} \text{ m} $$

Initial distance = 100 + 50 = 150 m

**(c) After walking another 50 m:**

New distance = 50 - 50 = 0 m (at the foot!)

$$ \tan \theta = \frac{h}{0} = \infty \Rightarrow \theta = 90° $$

**Answers:**
- (a) $50\sqrt{3}$ m
- (b) 150 m
- (c) 90°
</details>

---

**Q59.** (a) From the top of a cliff 90 m high, the angles of depression of the top and bottom of a tower are observed to be 30° and 60° respectively. Find the height of the tower.
(b) Find the horizontal distance between the cliff and the tower.
(c) What is the difference in height between the cliff and the tower?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) & (b) Solution:**

```
   Cliff          Tower
     A              D
     |\            /|
     | \          / |
  90 |  \30°    /   | h
     |   \    /60°  |
     |    \  /      |
     |     \/       |
     B-----C-------E
          x
```

In ΔABC:
$$ \tan 60° = \frac{90}{x} \Rightarrow \sqrt{3} = \frac{90}{x} \Rightarrow x = \frac{90}{\sqrt{3}} = 30\sqrt{3} \text{ m} $$

Height difference:
$$ 90 - h = x \tan 30° = 30\sqrt{3} \times \frac{1}{\sqrt{3}} = 30 \text{ m} $$

Therefore:
$$ h = 90 - 30 = 60 \text{ m} $$

**(c) Difference in height:**

$$ 90 - 60 = 30 \text{ m} $$

**Answers:**
- (a) 60 m
- (b) $30\sqrt{3}$ m
- (c) 30 m
</details>

---

**Q60.** (a) A vertical tower stands on a horizontal plane and is surmounted by a vertical flagstaff of height h. At a point on the plane, the angles of elevation of the bottom and top of the flagstaff are α and β respectively. Prove that the height of the tower is $\frac{h \tan \alpha}{\tan \beta - \tan \alpha}$
(b) If h = 7 m, α = 30°, β = 45°, find the height of the tower.
(c) Find the distance of the point from the tower.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

```
         Flagstaff Top (C)
              /|
             / |
            /  | h
           /   |
    Tower Top (B)
         /|    |
        / |    |
       /β |    | H (Tower)
      /   |    |
     /α   |    |
    A-----D----+
         x
```

Let height of tower = H, distance = x

In ΔABD:
$$ \tan \alpha = \frac{H}{x} \Rightarrow x = \frac{H}{\tan \alpha} \quad \text{...(1)} $$

In ΔACD:
$$ \tan \beta = \frac{H + h}{x} \Rightarrow x = \frac{H + h}{\tan \beta} \quad \text{...(2)} $$

From (1) and (2):
$$ \frac{H}{\tan \alpha} = \frac{H + h}{\tan \beta} $$
$$ H \tan \beta = (H + h) \tan \alpha $$
$$ H \tan \beta = H \tan \alpha + h \tan \alpha $$
$$ H(\tan \beta - \tan \alpha) = h \tan \alpha $$
$$ H = \frac{h \tan \alpha}{\tan \beta - \tan \alpha} $$

**Proved.**

**(b) Given:** h = 7 m, α = 30°, β = 45°

$$ H = \frac{7 \times \tan 30°}{\tan 45° - \tan 30°} = \frac{7 \times \frac{1}{\sqrt{3}}}{1 - \frac{1}{\sqrt{3}}} = \frac{\frac{7}{\sqrt{3}}}{\frac{\sqrt{3} - 1}{\sqrt{3}}} = \frac{7}{\sqrt{3} - 1} = \frac{7(\sqrt{3} + 1)}{2} \text{ m} $$

**(c) Distance:**

$$ x = \frac{H}{\tan \alpha} = \frac{7(\sqrt{3} + 1)/2}{1/\sqrt{3}} = \frac{7\sqrt{3}(\sqrt{3} + 1)}{2} = \frac{7(3 + \sqrt{3})}{2} \text{ m} $$

**Answers:**
- (b) $\frac{7(\sqrt{3} + 1)}{2}$ m
- (c) $\frac{7(3 + \sqrt{3})}{2}$ m
</details>

---

**Q61.** (a) A balloon is connected to a meteorological station by a cable of length 200 m inclined at 60° to the horizontal. Find the height of the balloon from the ground.
(b) If the cable is replaced by a new one inclined at 45°, find the new length of cable required to reach the same height.
(c) What is the horizontal distance covered in both cases?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) First Case (60°):**

```
         Balloon (B)
         /|
        / |
       /  | h
      /   |
     /60° |
    G-----F
    
    BG = 200 m
```

$$ \sin 60° = \frac{h}{200} \Rightarrow \frac{\sqrt{3}}{2} = \frac{h}{200} \Rightarrow h = 100\sqrt{3} \text{ m} $$

Horizontal distance:
$$ \cos 60° = \frac{d_1}{200} \Rightarrow \frac{1}{2} = \frac{d_1}{200} \Rightarrow d_1 = 100 \text{ m} $$

**(b) Second Case (45°):**

$$ \sin 45° = \frac{h}{l_2} \Rightarrow \frac{1}{\sqrt{2}} = \frac{100\sqrt{3}}{l_2} \Rightarrow l_2 = 100\sqrt{6} \text{ m} $$

**(c) Horizontal distances:**

First case: 100 m

Second case:
$$ \cos 45° = \frac{d_2}{l_2} \Rightarrow \frac{1}{\sqrt{2}} = \frac{d_2}{100\sqrt{6}} \Rightarrow d_2 = 100\sqrt{3} \text{ m} $$

**Answers:**
- (a) $100\sqrt{3}$ m
- (b) $100\sqrt{6}$ m
- (c) 100 m and $100\sqrt{3}$ m
</details>

---

**Q62.** (a) From a point on a bridge across a river, the angles of depression of the banks on opposite sides of the river are 30° and 45° respectively. If the bridge is at a height of 3 m from the banks, find the width of the river.
(b) Find the distance of the point from each bank.
(c) What trigonometric ratios are used in this problem?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) & (b) Solution:**

```
         Point P (on bridge)
         /|\
        / | \
       /30°|3m|45°
      /    |  \
     /     |   \
    A------B----C
     x     3    y
```

In ΔPBA (30°):
$$ \tan 30° = \frac{3}{x} \Rightarrow \frac{1}{\sqrt{3}} = \frac{3}{x} \Rightarrow x = 3\sqrt{3} \text{ m} $$

In ΔPBC (45°):
$$ \tan 45° = \frac{3}{y} \Rightarrow 1 = \frac{3}{y} \Rightarrow y = 3 \text{ m} $$

Width of river:
$$ x + y = 3\sqrt{3} + 3 = 3(\sqrt{3} + 1) \text{ m} $$

Distances from point to banks:
- To bank A: $\sqrt{x^2 + 3^2} = \sqrt{27 + 9} = \sqrt{36} = 6 \text{ m}$
- To bank C: $\sqrt{y^2 + 3^2} = \sqrt{9 + 9} = \sqrt{18} = 3\sqrt{2} \text{ m}$

**(c) Ratios Used:** Tangent ratio for finding horizontal distances.

**Answers:**
- (a) $3(\sqrt{3} + 1)$ m
- (b) 6 m and $3\sqrt{2}$ m
- (c) Tangent ratio
</details>

---

**Q63.** (a) The angles of elevation of the top of a tower from two points at distances a and b (a > b) from its foot and in the same straight line from it are 30° and 60° respectively. Prove that the height of the tower is $\frac{\sqrt{3}(a - b)}{2}$
(b) If a = 50 m and b = 30 m, find the height of the tower.
(c) Find the distance between the two points.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

```
         A (Top of Tower)
         /|\
        / | \
       /60°|h|30°
      /    |  \
     C-----B---D
       b      a
```

Let height = h

In ΔABC:
$$ \tan 60° = \frac{h}{b} \Rightarrow \sqrt{3} = \frac{h}{b} \Rightarrow h = b\sqrt{3} \quad \text{...(1)} $$

In ΔABD:
$$ \tan 30° = \frac{h}{a} \Rightarrow \frac{1}{\sqrt{3}} = \frac{h}{a} \Rightarrow h = \frac{a}{\sqrt{3}} \quad \text{...(2)} $$

From (1) and (2):
$$ b\sqrt{3} = \frac{a}{\sqrt{3}} $$
$$ 3b = a $$
$$ a - b = 2b $$
$$ b = \frac{a - b}{2} $$

From (1):
$$ h = \frac{a - b}{2} \times \sqrt{3} = \frac{\sqrt{3}(a - b)}{2} $$

**Proved.**

**(b) Given:** a = 50 m, b = 30 m

$$ h = \frac{\sqrt{3}(50 - 30)}{2} = \frac{\sqrt{3} \times 20}{2} = 10\sqrt{3} \text{ m} $$

**(c) Distance between points:**

$$ a - b = 50 - 30 = 20 \text{ m} $$

**Answers:**
- (b) $10\sqrt{3}$ m
- (c) 20 m
</details>

---

**Q64.** (a) A man standing on the deck of a ship, which is 10 m above water level, observes the angle of elevation of the top of a hill as 60° and the angle of depression of the base of the hill as 30°. Find the distance of the hill from the ship.
(b) Find the height of the hill.
(c) What is the total height observed from water level?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) & (b) Solution:**

```
   Ship           Hill
     A              D
     |\            /|
     | \          / |
  10 |  \60°    /   | h
     |   \    /30°  |
     |    \  /      |
     |     \/       |
     B-----C-------E
          x
```

In ΔABC:
$$ \tan 30° = \frac{10}{x} \Rightarrow \frac{1}{\sqrt{3}} = \frac{10}{x} \Rightarrow x = 10\sqrt{3} \text{ m} $$

In ΔACD:
$$ \tan 60° = \frac{h - 10}{x} \Rightarrow \sqrt{3} = \frac{h - 10}{10\sqrt{3}} $$
$$ h - 10 = 30 $$
$$ h = 40 \text{ m} $$

**(c) Total height from water level:**

$$ 40 \text{ m} $$

**Answers:**
- (a) $10\sqrt{3}$ m
- (b) 40 m
- (c) 40 m
</details>

---

**Q65.** (a) A tower subtends an angle α at a point A on the same level as the foot of the tower. At a point B, h metres vertically above A, the angle of depression of the foot of the tower is β. Prove that the height of the tower is $h \tan \alpha \cot \beta$
(b) If h = 20 m, α = 60°, β = 30°, find the height of the tower.
(c) Find the distance of point A from the foot of the tower.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Proof:**

```
         Tower Top (T)
            /|
           / |
          /  | H
         /   |
        /α   |
    A *------* F (Foot)
      |     /
    h |    / β (depression)
      |   /
    B *  /
```

Let distance AF = d

In ΔTAF:
$$ \tan \alpha = \frac{H}{d} \Rightarrow d = \frac{H}{\tan \alpha} \quad \text{...(1)} $$

In ΔBAF:
$$ \tan \beta = \frac{d}{h} \Rightarrow d = h \tan \beta \quad \text{...(2)} $$

From (1) and (2):
$$ \frac{H}{\tan \alpha} = h \tan \beta $$
$$ H = h \tan \alpha \tan \beta $$

Wait, let me reconsider the diagram:

```
         T
         |\
         | \
       H |  \
         |   \
         |    \
         F-----A
          \    |
           \   | h
            \  |
             \ |
              \|
               B
```

Angle of depression from B to F = β

In ΔTAF:
$$ \tan \alpha = \frac{H}{d} \quad \text{...(1)} $$

In ΔBAF:
$$ \tan \beta = \frac{d}{h} \Rightarrow d = h \tan \beta \quad \text{...(2)} $$

From (1) and (2):
$$ \tan \alpha = \frac{H}{h \tan \beta} $$
$$ H = h \tan \alpha \tan \beta $$

But the question asks for $h \tan \alpha \cot \beta$

Let me reconsider: If angle of depression from B to F is β, then:

In ΔBAF:
$$ \tan \beta = \frac{h}{d} \Rightarrow d = \frac{h}{\tan \beta} = h \cot \beta $$

From (1):
$$ H = d \tan \alpha = h \cot \beta \tan \alpha = h \tan \alpha \cot \beta $$

**Proved.**

**(b) Given:** h = 20 m, α = 60°, β = 30°

$$ H = 20 \times \tan 60° \times \cot 30° = 20 \times \sqrt{3} \times \sqrt{3} = 20 \times 3 = 60 \text{ m} $$

**(c) Distance:**

$$ d = h \cot \beta = 20 \times \sqrt{3} = 20\sqrt{3} \text{ m} $$

**Answers:**
- (b) 60 m
- (c) $20\sqrt{3}$ m
</details>

---

## 6. Exam-Oriented Preparation

### 📝 Important Formulas & Theorems to Memorize

#### Basic Trigonometric Ratios:

$$ \sin \theta = \frac{\text{Perpendicular}}{\text{Hypotenuse}}, \quad \cos \theta = \frac{\text{Base}}{\text{Hypotenuse}}, \quad \tan \theta = \frac{\text{Perpendicular}}{\text{Base}} $$

#### Key Relationships:

$$ \text{Angle of Elevation} = \text{Angle of Depression} \text{ (Alternate interior angles)} $$

#### Standard Values:

| θ | 30° | 45° | 60° |
|---|-----|-----|-----|
| sin θ | 1/2 | 1/√2 | √3/2 |
| cos θ | √3/2 | 1/√2 | 1/2 |
| tan θ | 1/√3 | 1 | √3 |

---

### 🎯 Expected Question Patterns (CBSE Class 10)

#### 1 Mark Questions (MCQ/Very Short Answer):
- Simple height/distance calculations
- Identifying correct trigonometric ratio
- Shadow and elevation problems
- Basic angle relationships

#### 2 Mark Questions (Short Answer):
- Single object height/distance problems
- Two-angle problems from same point
- Simple moving object problems
- Complementary angle proofs

#### 3 Mark Questions (Long Answer):
- Multi-step height and distance problems
- Tower and building combinations
- Moving objects with time calculations
- Complex diagram-based problems

#### 5 Mark Questions (Very Long Answer):
- Comprehensive application problems
- Multiple objects with different angles
- Cloud and reflection problems
- Real-life scenario problems with diagrams

---

### 💡 Exam Tips:

1. ✅ **Always draw a clear diagram** with all given information
2. ✅ **Label angles correctly** (elevation vs depression)
3. ✅ **Identify the right-angled triangle** in the problem
4. ✅ **Choose the correct trigonometric ratio** (sin, cos, tan)
5. ✅ **Write units** in the final answer (m, cm, etc.)
6. ✅ **Use √3 ≈ 1.732** when numerical value is asked
7. ✅ **Check if answer is reasonable** (height can't be negative)
8. ✅ **Mention alternate interior angles** when using depression angle

---

### 🔴 Common Mistakes to Avoid:

| Mistake | Correction |
|---------|------------|
| Confusing angle of elevation with depression | Elevation = looking UP, Depression = looking DOWN |
| Using wrong trigonometric ratio | Identify which sides are given/required |
| Forgetting to draw diagram | Always draw a labeled diagram first |
| Not converting units | Keep all measurements in same unit |
| Wrong angle identification | Angle of depression = Angle of elevation (alternate angles) |
| Forgetting units in answer | Always write m, cm, etc. |

---

### 📚 Previous Year Questions (CBSE Pattern)

**Q1 (CBSE 2024):** The angle of elevation of the top of a tower from a point on the ground is 30°. If the distance of the point from the foot of the tower is 30 m, find the height of the tower.

**Answer:** $10\sqrt{3}$ m

---

**Q2 (CBSE 2023):** From the top of a 50 m high building, the angle of depression of a car on the ground is 45°. Find the distance of the car from the foot of the building.

**Answer:** 50 m

---

**Q3 (CBSE 2023):** A kite is flying at a height of 60 m above the ground. The string attached to the kite makes an angle of 60° with the ground. Find the length of the string.

**Answer:** $40\sqrt{3}$ m

---

**Q4 (CBSE 2022):** The angles of elevation of the top of a tower from two points at distances of 4 m and 9 m from the base are complementary. Prove that the height is 6 m.

**Answer:** Use tan θ × cot θ = 1

---

**Q5 (CBSE 2022):** Two poles of equal height stand on opposite sides of an 80 m wide road. From a point between them, angles of elevation are 60° and 30°. Find the height.

**Answer:** $20\sqrt{3}$ m

---

**Q6 (CBSE 2021):** A tower casts a shadow of 40 m when the sun's altitude is 45°. Find the height of the tower.

**Answer:** 40 m

---

**Q7 (CBSE 2021):** From the top of a lighthouse, the angles of depression of two ships are 30° and 45°. If the height is 75 m, find the distance between the ships.

**Answer:** $75(\sqrt{3} - 1)$ m

---

**Q8 (CBSE 2020):** A ladder makes an angle of 60° with the ground when placed against a wall. If the foot is 2 m from the wall, find the length of the ladder.

**Answer:** 4 m

---

**Q9 (CBSE 2020):** The shadow of a tower is 50 m longer when sun's altitude is 30° than when it is 60°. Find the height of the tower.

**Answer:** $25\sqrt{3}$ m

---

**Q10 (CBSE 2019):** A circus artist climbs a 20 m rope inclined at 30° to the ground. Find the height of the pole.

**Answer:** 10 m

---

## 7. Revision Notes

### 📌 Quick Revision Sheet

#### Key Definitions:

| Term | Definition |
|------|------------|
| **Line of Sight** | Line from observer's eye to the object |
| **Angle of Elevation** | Angle formed when looking UP from horizontal |
| **Angle of Depression** | Angle formed when looking DOWN from horizontal |
| **Horizontal Level** | Reference horizontal line through observer's eye |

---

#### Important Properties:

**1. Alternate Interior Angles:**
$$ \text{Angle of Elevation} = \text{Angle of Depression} $$

**2. Trigonometric Ratios:**
$$ \tan \theta = \frac{\text{Height}}{\text{Distance}} $$
$$ \sin \theta = \frac{\text{Height}}{\text{Hypotenuse}} $$
$$ \cos \theta = \frac{\text{Distance}}{\text{Hypotenuse}} $$

---

#### Problem-Solving Steps:

1. **Draw** a clear diagram
2. **Label** all given information
3. **Identify** the right-angled triangle
4. **Choose** appropriate trigonometric ratio
5. **Set up** the equation
6. **Solve** for the unknown
7. **Verify** the answer

---

#### Standard Results:

| Situation | Formula/Result |
|-----------|----------------|
| Shadow = Height | Sun's altitude = 45° |
| Complementary angles at distances a, b | Height = $\sqrt{ab}$ |
| Cloud height from lake | $\frac{h(\tan \beta + \tan \alpha)}{\tan \beta - \tan \alpha}$ |
| Moving object time ratio | Distance ratio = Time ratio |

---

### 🎓 Final Checklist Before Exam:

- [ ] I can define line of sight, angle of elevation, and depression
- [ ] I can draw proper diagrams for all types of problems
- [ ] I can identify which trigonometric ratio to use
- [ ] I can solve single object problems
- [ ] I can solve two object problems
- [ ] I can handle moving object problems
- [ ] I can prove complementary angle results
- [ ] I have practiced all 30 MCQs
- [ ] I have practiced all 20 Short Answer questions
- [ ] I have practiced all 15 Long Answer questions
- [ ] I always include units in my answers

---

### 📊 Quick Formula Sheet:

**Basic Ratios:**
$$ \tan \theta = \frac{\text{Perpendicular}}{\text{Base}}, \quad \sin \theta = \frac{\text{Perpendicular}}{\text{Hypotenuse}} $$

**Key Property:**
$$ \text{Angle of Depression} = \text{Angle of Elevation} $$

**Standard Values:**
$$ \tan 30° = \frac{1}{\sqrt{3}}, \quad \tan 45° = 1, \quad \tan 60° = \sqrt{3} $$

**Complementary Angles:**
$$ \text{If angles are complementary: } h = \sqrt{ab} $$

---

**Good luck with your studies! 🌟**

> Remember: Always draw a diagram first and label all angles and distances correctly!

---

**End of Learning Path - Some Applications of Trigonometry**
