# Magnetic Effects of Electric Current - Learning Path

## 1. Concept Introduction

### What are Magnetic Effects of Electric Current?

In this chapter, we learn about the **relationship between electricity and magnetism** - how electric current produces magnetic effects and how magnetic fields can produce electricity.

**Key Concepts:**
- **Magnetic Field** - Region around a magnet where magnetic force is experienced
- **Magnetic Field Lines** - Imaginary lines representing magnetic field
- **Electromagnetism** - Magnetic effect produced by electric current
- **Electric Motor** - Converts electrical energy to mechanical energy
- **Electromagnetic Induction** - Producing electricity from magnetism
- **Electric Generator** - Converts mechanical energy to electrical energy

**Everyday Examples:**
- 🧲 Refrigerator magnets sticking to door
- 🧭 Compass needle pointing north
- 🔊 Speakers in headphones and phones
- 🌀 Electric fans and mixers
- 💡 Power generation in power plants
- 🔌 Transformers charging your phone
- 🚂 Electric trains and metros

---

### Historical Background:

**Hans Christian Oersted (1820)** discovered that electric current produces magnetic effect.

**Observation:** A compass needle deflects when placed near a current-carrying wire.

**Significance:** This discovery linked electricity and magnetism, leading to:
- Electric motors
- Electric generators
- Transformers
- Electromagnets

---

## 2. Micro-topic Breakdown

This chapter is divided into the following key concepts:

```
Magnetic Effects of Electric Current
├── 2.1 Magnetic Field and Field Lines
│   ├── Properties of magnetic field lines
│   ├── Field due to bar magnet
│   └── Right-hand thumb rule
├── 2.2 Magnetic Field due to Current-Carrying Conductor
│   ├── Straight conductor
│   ├── Circular loop
│   └── Solenoid
├── 2.3 Force on Current-Carrying Conductor
│   ├── Fleming's Left-Hand Rule
│   ├── Electric motor
│   └── Commercial motors
├── 2.4 Electromagnetic Induction
│   ├── Induced current
│   ├── Fleming's Right-Hand Rule
│   └── AC and DC generators
└── 2.5 Domestic Electric Circuits
    ├── Live, neutral, earth wires
    ├── Short circuit and overloading
    └── Safety measures
```

---

## 3. Concept Explanations

### 3.1 Magnetic Field and Field Lines

#### Magnetic Field:

The **magnetic field** is the region around a magnet where its magnetic force can be experienced.

**Characteristics:**
- Vector quantity (has direction and magnitude)
- Stronger where field lines are crowded
- Weaker where field lines are spread

![Magnetic Field Lines Around Bar Magnet](/seed-content/magnetism_field_lines.svg)

**Figure: Magnetic field lines around a bar magnet showing N to S direction**

---

#### Magnetic Field Lines:

Imaginary lines used to represent magnetic field visually.

**Properties of Magnetic Field Lines:**

| Property | Description |
|----------|-------------|
| **Direction** | Emerge from North pole, merge at South pole |
| **Inside magnet** | South to North (complete closed loop) |
| **Never intersect** | Two lines never cross each other |
| **Crowded near poles** | Stronger field near poles |
| **Tangent gives direction** | Direction of field at any point |

**Why field lines never intersect:**
- If they intersect, compass would point in two directions
- Impossible for magnetic field to have two directions

---

#### Uniform vs Non-Uniform Magnetic Field:

**Uniform Field:**
- Parallel, equally spaced lines
- Same strength throughout
- Example: Inside a solenoid

```
|||||||||||||  (Parallel lines)
|||||||||||||
|||||||||||||
```

**Non-Uniform Field:**
- Curved, unequally spaced lines
- Varying strength
- Example: Around a bar magnet

---

### 3.2 Magnetic Field due to Current-Carrying Conductor

#### Oersted's Experiment:

**Observation:**
- Compass needle deflects near current-carrying wire
- Deflection reverses when current direction reverses
- Greater current = greater deflection

**Conclusion:** Electric current produces magnetic field.

---

#### Magnetic Field due to Straight Current-Carrying Conductor:

![Magnetic Field Around Current-Carrying Conductor](/seed-content/magnetism_current_field.svg)

**Characteristics:**
- Concentric circles around the wire
- Center at the wire
- Plane perpendicular to wire

**Right-Hand Thumb Rule:**

> Imagine holding the current-carrying conductor in your right hand with thumb pointing in direction of current. The direction in which fingers curl gives the direction of magnetic field lines.

```
     Current (I)
        ↑
        │
    ╭───┼───╮
   ╱    │    ╲
  │     │     │  → Magnetic Field
  │     │     │
   ╲    │    ╱
    ╰───┼───╯
        │
```

**Factors affecting field strength:**

| Factor | Relationship | Effect |
|--------|--------------|--------|
| Current (I) | B ∝ I | More current = stronger field |
| Distance (r) | B ∝ 1/r | Closer = stronger field |
| Direction | Right-hand rule | Determines field direction |

---

#### Magnetic Field due to Circular Loop:

**Characteristics:**
- Concentric circles at every point
- Straight lines at center
- Perpendicular to plane of loop

**Field at Center:**
- Directly proportional to current
- Directly proportional to number of turns
- Inversely proportional to radius

$$ B \propto \frac{nI}{r} $$

where n = number of turns, I = current, r = radius

---

#### Magnetic Field due to Solenoid:

**Solenoid:** Coil of many circular turns of insulated copper wire wrapped closely in cylindrical shape.

**Characteristics:**
- Uniform field inside (parallel lines)
- Similar to bar magnet outside
- One end = North, other = South

```
    S-pole                    N-pole
      ↓                         ↓
  ((((  → → → → → → → → →  ))))
      ↑                         ↑
   Field enters              Field exits
```

**Factors affecting solenoid field:**

| Factor | Effect |
|--------|--------|
| Number of turns | More turns = stronger field |
| Current | More current = stronger field |
| Core material | Soft iron core increases field |

**Uses of Solenoid:**
- Electromagnets
- Electric bells
- Relays and switches

---

### 3.3 Force on Current-Carrying Conductor in Magnetic Field

#### Force Experience:

When a current-carrying conductor is placed in a magnetic field, it experiences a **force**.

**Direction of Force:**
- Perpendicular to both current and field
- Given by Fleming's Left-Hand Rule

---

#### Fleming's Left-Hand Rule:

![Fleming's Left-Hand Rule and Electric Motor](/seed-content/magnetism_motor_rule.svg)

**Stretch thumb, forefinger and middle finger of left hand mutually perpendicular:**

| Finger | Represents | Symbol |
|--------|------------|--------|
| **Forefinger** | Magnetic Field | B |
| **Middle finger** | Current | I |
| **Thumb** | Force/Motion | F |

**Mnemonic:** **F**ather (Force), **M**other (Magnetic field), **C**hild (Current)

---

#### Electric Motor:

**Principle:** A current-carrying coil placed in magnetic field experiences force and rotates.

**Construction:**

| Part | Function |
|------|----------|
| **Armature** | Rectangular coil of insulated copper wire |
| **Magnet** | Provides magnetic field (horseshoe type) |
| **Split Ring** | Reverses current direction (commutator) |
| **Brushes** | Connect coil to battery (carbon) |
| **Battery** | Source of current |

**Working:**

1. Current flows through coil ABCD
2. Arms AB and CD experience forces
3. Forces are opposite (Fleming's rule)
4. Coil rotates
5. Split ring reverses current after half rotation
6. Continuous rotation in same direction

**Energy Conversion:**
$$ \text{Electrical Energy} \rightarrow \text{Mechanical Energy} $$

---

#### Commercial Motors:

**Differences from simple motor:**

| Feature | Simple Motor | Commercial Motor |
|---------|--------------|------------------|
| Magnet | Permanent | Electromagnet |
| Coil | Few turns | Many turns of fine wire |
| Core | Air/soft iron | Soft iron core |
| Power | Low | High |

**Applications:**
- Electric fans
- Mixers and grinders
- Washing machines
- Electric vehicles
- Computer hard drives

---

### 3.4 Electromagnetic Induction

#### Discovery:

**Michael Faraday (1831)** discovered electromagnetic induction.

**Observation:** Moving magnet near coil induces current.

---

#### Electromagnetic Induction:

The production of **induced current** in a coil due to relative motion between conductor and magnetic field.

![Electromagnetic Induction and Electric Generator](/seed-content/magnetism_induction_generator.svg)

**Key Points:**
- Relative motion is essential
- No motion = no induced current
- Faster motion = larger current
- Direction changes with motion direction

---

#### Fleming's Right-Hand Rule:

For direction of **induced current**:

| Finger | Represents |
|--------|------------|
| **Thumb** | Motion of conductor |
| **Forefinger** | Magnetic Field |
| **Middle finger** | Induced Current |

**Note:** Right hand for induced current (generator), Left hand for force (motor)

---

#### Electric Generator:

**Principle:** Electromagnetic induction - mechanical energy converts to electrical energy.

**Types:**

| Type | Component | Output |
|------|-----------|--------|
| **AC Generator** | Slip rings | Alternating Current |
| **DC Generator** | Split ring | Direct Current |

**Construction (AC Generator):**
- Rotating rectangular coil (armature)
- Strong horseshoe magnet
- Slip rings (R₁, R₂)
- Carbon brushes (B₁, B₂)
- Galvanometer (to detect current)

**Working:**

1. Coil rotates in magnetic field
2. Magnetic flux through coil changes
3. Induced current flows
4. Direction reverses every half rotation
5. AC output obtained

**Energy Conversion:**
$$ \text{Mechanical Energy} \rightarrow \text{Electrical Energy} $$

---

#### AC vs DC:

| Feature | AC (Alternating Current) | DC (Direct Current) |
|---------|-------------------------|---------------------|
| **Direction** | Reverses periodically | One direction only |
| **Magnitude** | Varies with time | Constant |
| **Frequency** | 50 Hz in India | Zero |
| **Transmission** | Long distance possible | Limited distance |
| **Source** | AC generator, mains | Battery, DC generator |
| **Uses** | Homes, offices, factories | Electronics, batteries |

---

### 3.5 Domestic Electric Circuits

#### Components:

**Live Wire (Positive):**
- Red insulation
- Potential: 220V (in India)
- Carries current to appliance

**Neutral Wire (Negative):**
- Black insulation
- Potential: 0V
- Returns current

**Earth Wire (Safety):**
- Green insulation
- Connected to metal body
- Prevents electric shock

---

#### Circuit Connection:

**Parallel Connection:**
- All appliances in parallel
- Same voltage (220V) across each
- Independent operation
- If one fails, others work

```
Live  ──┬────[Appliance 1]────┬────[Appliance 2]────┬──
        │                     │                     │
Neutral ──┴───────────────────┴─────────────────────┴──
```

---

#### Short Circuit:

**Cause:** Live and neutral wires touch directly.

**Effect:**
- Very low resistance
- Very high current flows
- Heating, fire hazard

**Prevention:** Fuse or MCB

---

#### Overloading:

**Cause:** Too many appliances connected to single circuit.

**Effect:**
- Current exceeds safe limit
- Wires overheat
- Fire hazard

**Prevention:**
- Don't connect too many appliances
- Use separate circuits for high-power devices
- Use proper fuse rating

---

#### Fuse:

**Safety device** that melts and breaks circuit when current exceeds safe limit.

**Characteristics:**
- Low melting point (tin-lead alloy)
- Connected in series with live wire
- Rating: 1A, 2A, 3A, 5A, 15A etc.

**Working:**
- Excess current → heats up → melts → circuit breaks

---

#### MCB (Miniature Circuit Breaker):

**Modern alternative to fuse:**
- Automatically switches off on overload
- Can be reset (no replacement needed)
- More sensitive and reliable

---

## 4. Guided Examples

### Example 1: Direction of Magnetic Field

**Question:** A current flows vertically upward in a straight wire. What is the direction of magnetic field at a point to the east of the wire?

**Step-by-Step Solution:**

**Step 1:** Identify given information
- Current direction: Vertically upward
- Point location: To the east of wire

**Step 2:** Apply Right-Hand Thumb Rule
- Hold wire in right hand
- Thumb points upward (current direction)
- Fingers curl around wire

**Step 3:** Determine field direction at east point
- Fingers curl from east → north → west → south
- At east point: Field points toward north

**Final Answer:** Magnetic field points toward **North**

---

### Example 2: Force on Current-Carrying Conductor

**Question:** An electron beam moves horizontally from back to front. A magnetic field acts vertically downward. Find the direction of force on the beam.

**Step-by-Step Solution:**

**Step 1:** Identify directions
- Electron motion: Back to front
- Conventional current: Front to back (opposite to electron flow)
- Magnetic field: Vertically downward

**Step 2:** Apply Fleming's Left-Hand Rule
- Forefinger (Field): Downward
- Middle finger (Current): Front to back
- Thumb gives force direction

**Step 3:** Position hand
- Forefinger down
- Middle finger pointing toward you
- Thumb points to the right

**Final Answer:** Force acts toward **Right**

---

### Example 3: Induced Current Direction

**Question:** A bar magnet with north pole facing a coil is moved toward the coil. What is the direction of induced current in the coil?

**Step-by-Step Solution:**

**Step 1:** Identify the change
- Magnet moves toward coil
- Magnetic flux through coil increases

**Step 2:** Apply Lenz's Law
- Induced current opposes the change
- Coil face must become north pole (to repel approaching north)

**Step 3:** Determine current direction
- For north pole, current must be anticlockwise (viewed from magnet side)

**Final Answer:** Induced current is **Anticlockwise** (as seen from magnet side)

---

### Example 4: Frequency of AC

**Question:** An AC generator coil rotates at 3000 revolutions per minute. What is the frequency of AC produced?

**Step-by-Step Solution:**

**Step 1:** Convert rpm to rps
$$ \text{rps} = \frac{3000}{60} = 50 \text{ rotations per second} $$

**Step 2:** Relate rotation to frequency
- One rotation = one complete cycle of AC
- Frequency = number of cycles per second

**Step 3:** Calculate frequency
$$ f = 50 \text{ Hz} $$

**Final Answer:** Frequency = **50 Hz** (standard in India)

---

### Example 5: Fuse Rating Calculation

**Question:** An electric geyser of 2000W is connected to 220V supply. What should be the minimum rating of fuse used?

**Step-by-Step Solution:**

**Step 1:** Identify given values
- Power (P) = 2000 W
- Voltage (V) = 220 V

**Step 2:** Calculate current using P = VI
$$ I = \frac{P}{V} = \frac{2000}{220} = 9.09 \text{ A} $$

**Step 3:** Choose fuse rating
- Fuse rating should be slightly higher than operating current
- Next standard rating: 10A

**Final Answer:** Minimum fuse rating = **10A**

---

## 5. Practice Questions

### SECTION A: Multiple Choice Questions (30 Questions - 1 Mark Each)

**Q1.** The magnetic field lines inside a solenoid are:
- (A) Curved
- (B) Parallel and straight
- (C) Circular
- (D) Elliptical

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Parallel and straight

**Explanation:** Inside a solenoid, the magnetic field is uniform, represented by parallel straight lines.
</details>

---

**Q2.** The direction of magnetic field around a straight current-carrying conductor is given by:
- (A) Fleming's Left-Hand Rule
- (B) Fleming's Right-Hand Rule
- (C) Right-Hand Thumb Rule
- (D) Lenz's Law

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Right-Hand Thumb Rule

**Explanation:** Right-Hand Thumb Rule gives the direction of magnetic field around a current-carrying conductor.
</details>

---

**Q3.** Magnetic field lines:
- (A) Intersect each other
- (B) Emerge from South pole
- (C) Never intersect
- (D) Are open curves

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Never intersect

**Explanation:** Field lines never intersect because at intersection point, compass would point in two directions.
</details>

---

**Q4.** The device used for producing electric current is called:
- (A) Motor
- (B) Generator
- (C) Galvanometer
- (D) Ammeter

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Generator

**Explanation:** Generator converts mechanical energy to electrical energy using electromagnetic induction.
</details>

---

**Q5.** The core of an electromagnet should be made of:
- (A) Steel
- (B) Soft iron
- (C) Copper
- (D) Aluminium

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Soft iron

**Explanation:** Soft iron has high permeability and low retentivity, making it ideal for electromagnets.
</details>

---

**Q6.** The frequency of AC supply in India is:
- (A) 60 Hz
- (B) 50 Hz
- (C) 100 Hz
- (D) 120 Hz

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 50 Hz

**Explanation:** In India, AC supply has frequency of 50 Hz (changes direction 100 times per second).
</details>

---

**Q7.** Fleming's Left-Hand Rule gives the direction of:
- (A) Induced current
- (B) Magnetic field
- (C) Force on conductor
- (D) Electric field

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Force on conductor

**Explanation:** Fleming's Left-Hand Rule is used for motors to find direction of force.
</details>

---

**Q8.** The insulation colour of earth wire is:
- (A) Red
- (B) Black
- (C) Green
- (D) Blue

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Green

**Explanation:** Earth wire has green insulation for safety identification.
</details>

---

**Q9.** A fuse should always be connected in:
- (A) Neutral wire
- (B) Earth wire
- (C) Live wire
- (D) Any wire

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Live wire

**Explanation:** Fuse is connected in live wire to break circuit during overload/short circuit.
</details>

---

**Q10.** The magnetic field strength inside a current-carrying solenoid:
- (A) Is zero
- (B) Is uniform
- (C) Varies from point to point
- (D) Is maximum at ends

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Is uniform

**Explanation:** Inside a long solenoid, magnetic field is uniform (same at all points).
</details>

---

**Q11.** An electric motor converts:
- (A) Mechanical to electrical energy
- (B) Electrical to mechanical energy
- (C) Heat to electrical energy
- (D) Chemical to electrical energy

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Electrical to mechanical energy

**Explanation:** Motor uses electrical energy to produce mechanical rotation.
</details>

---

**Q12.** The phenomenon of electromagnetic induction was discovered by:
- (A) Oersted
- (B) Ampere
- (C) Faraday
- (D) Volta

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Faraday

**Explanation:** Michael Faraday discovered electromagnetic induction in 1831.
</details>

---

**Q13.** The direction of induced current is given by:
- (A) Right-Hand Thumb Rule
- (B) Fleming's Left-Hand Rule
- (C) Fleming's Right-Hand Rule
- (D) Ohm's Law

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Fleming's Right-Hand Rule

**Explanation:** Fleming's Right-Hand Rule gives direction of induced current in generators.
</details>

---

**Q14.** In a domestic circuit, appliances are connected in:
- (A) Series
- (B) Parallel
- (C) Mixed
- (D) None of these

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Parallel

**Explanation:** Parallel connection ensures same voltage across all appliances and independent operation.
</details>

---

**Q15.** The potential of live wire in India is:
- (A) 110 V
- (B) 220 V
- (C) 440 V
- (D) 12 V

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 220 V

**Explanation:** In India, domestic supply is 220V at 50Hz frequency.
</details>

---

**Q16.** A current-carrying conductor experiences maximum force when angle between conductor and magnetic field is:
- (A) 0°
- (B) 45°
- (C) 90°
- (D) 180°

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 90°

**Explanation:** Force is maximum when conductor is perpendicular to magnetic field.
</details>

---

**Q17.** The split ring in a DC generator acts as a:
- (A) Conductor
- (B) Insulator
- (C) Rectifier
- (D) Amplifier

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Rectifier

**Explanation:** Split ring converts AC to DC by reversing connections every half cycle.
</details>

---

**Q18.** Overloading of circuit occurs when:
- (A) Voltage increases
- (B) Current exceeds safe limit
- (C) Resistance increases
- (D) Fuse melts

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Current exceeds safe limit

**Explanation:** Overloading is drawing more current than circuit can safely handle.
</details>

---

**Q19.** The magnetic field lines due to a straight current-carrying conductor are:
- (A) Straight lines
- (B) Concentric circles
- (C) Ellipses
- (D) Parabolas

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Concentric circles

**Explanation:** Field lines form concentric circles with conductor at center.
</details>

---

**Q20.** Commutator is used in:
- (A) AC generator only
- (B) DC generator only
- (C) Both AC and DC generators
- (D) Transformers

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) DC generator only

**Explanation:** Commutator (split ring) converts AC to DC, used in DC generators and motors.
</details>

---

**Q21.** The strength of magnetic field due to a current-carrying conductor:
- (A) Increases with distance
- (B) Decreases with distance
- (C) Is independent of distance
- (D) Is constant everywhere

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Decreases with distance

**Explanation:** Field strength is inversely proportional to distance from conductor.
</details>

---

**Q22.** Which wire has zero potential in domestic circuit?
- (A) Live wire
- (B) Neutral wire
- (C) Earth wire
- (D) Both (B) and (C)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (D) Both (B) and (C)

**Explanation:** Both neutral and earth wires are at zero potential.
</details>

---

**Q23.** The device that automatically disconnects circuit during overload is:
- (A) Fuse
- (B) MCB
- (C) Both (A) and (B)
- (D) Neither (A) nor (B)

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Both (A) and (B)

**Explanation:** Both fuse and MCB protect against overload.
</details>

---

**Q24.** In an electric motor, the direction of current in coil reverses after every:
- (A) One rotation
- (B) Half rotation
- (C) Quarter rotation
- (D) Two rotations

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Half rotation

**Explanation:** Split ring reverses current direction after every half rotation for continuous rotation.
</details>

---

**Q25.** The magnetic field inside a long straight solenoid carrying current:
- (A) Is zero
- (B) Decreases towards ends
- (C) Is same at all points
- (D) Increases towards ends

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Is same at all points

**Explanation:** Field is uniform inside a long solenoid.
</details>

---

**Q26.** An electron enters a magnetic field at right angles. The direction of force is:
- (A) To the right
- (B) To the left
- (C) Into the page
- (D) Out of the page

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Into the page

**Explanation:** Using Fleming's Left-Hand Rule (current opposite to electron flow), force is into the page.
</details>

---

**Q27.** The main advantage of AC over DC is:
- (A) AC is safer
- (B) AC can be transmitted over long distances
- (C) AC is cheaper
- (D) AC has constant voltage

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) AC can be transmitted over long distances

**Explanation:** AC voltage can be stepped up/down using transformers for efficient transmission.
</details>

---

**Q28.** Short circuit occurs when:
- (A) Live and neutral touch
- (B) Circuit is broken
- (C) Fuse melts
- (D) Switch is off

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) Live and neutral touch

**Explanation:** Direct contact between live and neutral causes very high current (short circuit).
</details>

---

**Q29.** The force on a current-carrying conductor in magnetic field is zero when:
- (A) Conductor is perpendicular to field
- (B) Conductor is parallel to field
- (C) Current is maximum
- (D) Field is strongest

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Conductor is parallel to field

**Explanation:** Force is zero when conductor is parallel (0° or 180°) to magnetic field.
</details>

---

**Q30.** The SI unit of magnetic field strength is:
- (A) Weber
- (B) Tesla
- (C) Henry
- (D) Faraday

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Tesla

**Explanation:** Tesla (T) is SI unit of magnetic field. 1 T = 1 N/(A·m)
</details>

---

### SECTION B: Short Answer Questions (20 Questions - 2-3 Marks Each)

**Q31.** What are magnetic field lines? List any three properties.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Magnetic field lines** are imaginary lines used to represent magnetic field visually.

**Properties:**
1. Emerge from North pole, merge at South pole
2. Never intersect each other
3. Closer lines indicate stronger field
4. Form closed continuous loops
5. Tangent at any point gives field direction
</details>

---

**Q32.** State Right-Hand Thumb Rule. How is it used?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Right-Hand Thumb Rule:** Imagine holding current-carrying conductor in right hand with thumb pointing in current direction. The curled fingers give direction of magnetic field lines.

**Use:** To find direction of magnetic field around straight current-carrying conductor.
</details>

---

**Q33.** Why don't two magnetic field lines intersect?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Two magnetic field lines never intersect because:

1. At intersection point, compass needle would point in two directions
2. Magnetic field can have only one direction at a point
3. This is physically impossible

Hence, field lines never cross each other.
</details>

---

**Q34.** Draw magnetic field lines around a bar magnet.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
         N                           S
    ┌─────────┐                 ┌─────────┐
    │    N    │                 │    S    │
    │         │                 │         │
    └─────────┘                 └─────────┘
      )   (                       )   (
     )     (                     )     (
    )       (                   )       (
   )         (                 )         (
```

**Key points:**
- Lines emerge from N pole
- Lines merge at S pole
- Crowded near poles (stronger field)
- Never intersect
</details>

---

**Q35.** What is a solenoid? Draw its magnetic field pattern.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Solenoid:** Coil of many circular turns of insulated copper wire wrapped closely in cylindrical shape.

**Field pattern:**
```
    S                       N
    ↓                       ↓
((((  → → → → → → → →  ))))
    ↑                       ↑
```

**Characteristics:**
- Uniform field inside (parallel lines)
- Similar to bar magnet outside
- One end = North, other = South
</details>

---

**Q36.** State Fleming's Left-Hand Rule with diagram.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Fleming's Left-Hand Rule:** Stretch thumb, forefinger and middle finger of left hand mutually perpendicular.

- **Forefinger** → Magnetic Field
- **Middle finger** → Current
- **Thumb** → Force/Motion

**Mnemonic:** F-B-I (Force, Field, Current)

Used for finding direction of force in electric motors.
</details>

---

**Q37.** What is the function of split ring in electric motor?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Function of Split Ring (Commutator):**

1. Reverses direction of current in coil after every half rotation
2. Ensures continuous rotation in same direction
3. Acts as a mechanical rectifier
4. Maintains contact with brushes while rotating

Without split ring, coil would oscillate instead of rotating continuously.
</details>

---

**Q38.** Differentiate between AC and DC.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

| AC (Alternating Current) | DC (Direct Current) |
|--------------------------|---------------------|
| Direction changes periodically | Direction constant |
| Magnitude varies with time | Magnitude constant |
| Frequency 50 Hz in India | Zero frequency |
| Can be transmitted long distance | Limited transmission |
| Used in homes, offices | Used in batteries, electronics |
| Produced by AC generator | Produced by battery, DC generator |
</details>

---

**Q39.** What is electromagnetic induction? Who discovered it?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Electromagnetic Induction:** Production of induced current in a coil due to relative motion between conductor and magnetic field.

**Discovered by:** Michael Faraday (1831)

**Key requirement:** Relative motion between coil and magnet

**Application:** Electric generators, transformers
</details>

---

**Q40.** State Fleming's Right-Hand Rule. Where is it used?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Fleming's Right-Hand Rule:** Stretch thumb, forefinger and middle finger of right hand mutually perpendicular.

- **Thumb** → Motion of conductor
- **Forefinger** → Magnetic Field
- **Middle finger** → Induced Current

**Used in:** Electric generators to find direction of induced current.
</details>

---

**Q41.** What is the role of earth wire in domestic circuits?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Role of Earth Wire:**

1. Safety measure to prevent electric shock
2. Connected to metal body of appliances
3. Provides low resistance path to ground
4. If live wire touches metal body, current flows to earth
5. Prevents user from getting shock
6. Green insulation for identification
</details>

---

**Q42.** What is short circuit? What causes it?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Short Circuit:** Direct contact between live and neutral wires.

**Causes:**
1. Damaged insulation
2. Faulty appliances
3. Loose connections
4. Worn out wires

**Effect:** Very low resistance → Very high current → Heating → Fire hazard

**Protection:** Fuse or MCB breaks circuit
</details>

---

**Q43.** Why are appliances connected in parallel in domestic circuits?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Reasons for parallel connection:**

1. Same voltage (220V) across all appliances
2. Independent operation (on/off)
3. If one fails, others continue working
4. Each appliance draws current as per its requirement
5. Total resistance decreases
6. Suitable for appliances of different power ratings
</details>

---

**Q44.** What is overloading? How can it be prevented?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Overloading:** Drawing more current than circuit can safely handle.

**Causes:**
- Too many appliances connected
- High-power appliances on same circuit

**Prevention:**
1. Don't connect too many appliances
2. Use separate circuits for high-power devices
3. Use proper fuse rating
4. Use MCB instead of fuse
5. Regular inspection of wiring
</details>

---

**Q45.** Explain the working of a fuse.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Fuse:** Safety device that melts and breaks circuit during overload/short circuit.

**Working:**
1. Made of low melting point alloy (tin-lead)
2. Connected in series with live wire
3. Normal current: Fuse remains intact
4. Excess current: Fuse heats up → melts → breaks circuit
5. Protects appliances from damage

**Rating:** Selected based on appliance power (1A, 5A, 15A etc.)
</details>

---

**Q46.** An electric oven of 2 kW is operated in 220V circuit. What current does it draw? What fuse rating should be used?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:**
- Power (P) = 2 kW = 2000 W
- Voltage (V) = 220 V

**Current:**
$$ I = \frac{P}{V} = \frac{2000}{220} = 9.09 \text{ A} $$

**Fuse rating:** Next standard rating = **10A**
</details>

---

**Q47.** What happens to displacement of rod AB if:
(i) Current is increased
(ii) Stronger magnet is used
(iii) Length of rod is increased

<details>
<summary>✓ Show Answer</summary>

**Answer:**

Displacement depends on force: F = BIL

**(i) Current increased:** Force increases → More displacement

**(ii) Stronger magnet:** Magnetic field (B) increases → More displacement

**(iii) Longer rod:** Length (L) increases → More displacement

All three increase the force on conductor.
</details>

---

**Q48.** Name two devices that use electric motor and two that use electric generator.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Devices using Electric Motor:**
1. Electric fan
2. Washing machine
3. Mixer-grinder
4. Electric vehicle

**Devices using Electric Generator:**
1. Power plants (thermal, hydro)
2. Inverters
3. Emergency backup generators
4. Bicycle dynamo
</details>

---

**Q49.** What is the frequency of AC in India? Why is AC preferred for long distance transmission?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Frequency in India:** 50 Hz

**AC preferred for transmission because:**
1. Voltage can be stepped up using transformers
2. High voltage = low current = less power loss
3. Can be transmitted over long distances efficiently
4. Voltage can be stepped down at consumer end
5. Economical for long distance transmission
</details>

---

**Q50.** What is MCB? How is it better than fuse?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**MCB (Miniature Circuit Breaker):** Automatic switch that disconnects circuit during overload/short circuit.

**Advantages over fuse:**
1. Can be reset (no replacement needed)
2. More sensitive and accurate
3. Faster operation
4. Can be manually switched on/off
5. More reliable
6. Longer life
7. No fire hazard from melting
</details>

---

### SECTION C: Long Answer Questions (15 Questions - 5 Marks Each)

**Q51.** (a) What is a solenoid? Draw magnetic field lines due to current-carrying solenoid.
(b) How does it behave like a bar magnet?
(c) Can you determine North and South poles? Explain.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Solenoid:**

Coil of many circular turns of insulated copper wire wrapped closely in cylindrical shape.

**Field lines:**
```
    S                       N
    ↓                       ↓
((((  → → → → → → → →  ))))
```

**(b) Behaves like bar magnet:**
- Field pattern similar to bar magnet
- One end acts as North, other as South
- Attracts magnetic materials
- Field lines emerge from one end, enter other end

**(c) Determining poles:**
- Bring North pole of bar magnet near one end
- If repulsion → That end is North
- If attraction → That end is South
- End where current flows anticlockwise = North
- End where current flows clockwise = South
</details>

---

**Q52.** (a) Describe Oersted's experiment with diagram.
(b) What conclusion was drawn?
(c) How does deflection change if:
    (i) Current is increased
    (ii) Distance is increased
    (iii) Current direction is reversed

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Oersted's Experiment:**

**Setup:**
- Straight wire connected to battery
- Compass placed below wire
- Switch to complete circuit

**Observation:**
- When current flows, compass needle deflects
- Deflection reverses when current reverses

**(b) Conclusion:**
Electric current produces magnetic field around conductor.

**(c) Changes:**
**(i) Current increased:** Greater deflection (stronger field)
**(ii) Distance increased:** Smaller deflection (weaker field)
**(iii) Current reversed:** Deflection reverses direction
</details>

---

**Q53.** (a) Explain principle, construction and working of electric motor.
(b) What is the function of split ring?
(c) Name four appliances using electric motor.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Electric Motor:**

**Principle:** Current-carrying coil in magnetic field experiences force and rotates.

**Construction:**
- **Armature:** Rectangular coil of insulated copper wire
- **Magnet:** Strong horseshoe magnet
- **Split Ring:** Acts as commutator
- **Brushes:** Carbon brushes for connection
- **Battery:** Source of current

**Working:**
1. Current flows through coil ABCD
2. Arms AB and CD experience forces (Fleming's rule)
3. Forces are opposite → coil rotates
4. After half rotation, split ring reverses current
5. Continuous rotation in same direction

**(b) Split Ring Function:**
- Reverses current direction after every half rotation
- Ensures continuous rotation in one direction

**(c) Appliances:**
1. Electric fan
2. Washing machine
3. Mixer-grinder
4. Electric vehicle
</details>

---

**Q54.** (a) What is electromagnetic induction?
(b) Describe activity to show induced current.
(c) State Fleming's Right-Hand Rule.
(d) Give two applications.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Electromagnetic Induction:**

Production of induced current in coil due to relative motion between conductor and magnetic field.

**(b) Activity:**
- Take coil connected to galvanometer
- Move bar magnet toward coil → deflection one way
- Move magnet away → deflection opposite way
- Hold magnet stationary → no deflection
- Conclusion: Relative motion induces current

**(c) Fleming's Right-Hand Rule:**
- Thumb → Motion
- Forefinger → Field
- Middle finger → Induced Current

**(d) Applications:**
1. Electric generators
2. Transformers
3. Induction cooktops
4. Wireless charging
</details>

---

**Q55.** (a) Describe construction and working of AC generator.
(b) How is it converted to DC generator?
(c) What is frequency of AC in India?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) AC Generator:**

**Construction:**
- Rotating rectangular coil (armature)
- Strong horseshoe magnet
- Two slip rings (R₁, R₂)
- Two carbon brushes (B₁, B₂)
- Galvanometer

**Working:**
1. Coil rotates in magnetic field
2. Magnetic flux changes
3. Induced current flows
4. Direction reverses every half rotation
5. AC output obtained through slip rings

**(b) Conversion to DC:**
- Replace slip rings with split ring commutator
- Split ring reverses connections every half cycle
- Output becomes unidirectional (DC)

**(c) Frequency in India:** 50 Hz
</details>

---

**Q56.** (a) Draw schematic diagram of domestic electric circuit.
(b) What are the three wires used?
(c) Why are appliances connected in parallel?
(d) What is the potential difference in India?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Domestic Circuit:**
```
Live (220V)  ──┬────[Bulb]────┬────[Fan]────┬────[TV]────┬──
               │              │             │            │
Neutral (0V)  ──┴─────────────┴─────────────┴────────────┴──
               │
Earth ─────────┴──[to metal bodies]
```

**(b) Three wires:**
1. **Live** (Red) - 220V
2. **Neutral** (Black) - 0V
3. **Earth** (Green) - Safety

**(c) Parallel connection:**
- Same voltage across all
- Independent operation
- One failure doesn't affect others

**(d) Potential difference:** 220V at 50Hz
</details>

---

**Q57.** (a) What is short circuit? Explain with cause and effect.
(b) What is overloading?
(c) How does fuse protect circuit?
(d) What is MCB?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Short Circuit:**

**Definition:** Direct contact between live and neutral wires.

**Causes:**
- Damaged insulation
- Faulty appliances
- Loose connections

**Effects:**
- Very low resistance
- Very high current
- Heating → Fire hazard

**(b) Overloading:**
- Drawing more current than safe limit
- Too many appliances on single circuit

**(c) Fuse protection:**
- Melts when current exceeds rating
- Breaks circuit
- Prevents damage and fire

**(d) MCB:**
- Miniature Circuit Breaker
- Automatic switch
- Can be reset (unlike fuse)
</details>

---

**Q58.** (a) State factors affecting magnetic field due to straight conductor.
(b) How does field change if:
    (i) Current is doubled
    (ii) Distance is halved
    (iii) Direction is reversed
(c) Draw field pattern.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Factors:**
1. Current (I): B ∝ I
2. Distance (r): B ∝ 1/r
3. Direction of current

**(b) Changes:**
**(i) Current doubled:** Field strength doubles
**(ii) Distance halved:** Field strength doubles
**(iii) Direction reversed:** Field direction reverses (clockwise ↔ anticlockwise)

**(c) Field pattern:**
```
        Current ↑
           │
       ╭───┼───╮
      ╱    │    ╲
     │     │     │  → Concentric circles
     │     │     │
      ╲    │    ╱
       ╰───┼───╯
```
</details>

---

**Q59.** (a) Compare electric motor and electric generator.
(b) What energy conversion takes place in each?
(c) State the rules used in each.
(d) Give two differences in construction.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Comparison:**

| Motor | Generator |
|-------|-----------|
| Converts electrical → mechanical | Converts mechanical → electrical |
| Uses Fleming's Left-Hand Rule | Uses Fleming's Right-Hand Rule |
| Needs battery | Produces current |
| Split ring reverses current | Slip rings/split ring for output |

**(b) Energy conversion:**
- **Motor:** Electrical → Mechanical
- **Generator:** Mechanical → Electrical

**(c) Rules:**
- **Motor:** Fleming's Left-Hand Rule
- **Generator:** Fleming's Right-Hand Rule

**(d) Construction differences:**
1. Motor has battery, generator has load
2. Motor uses split ring, AC generator uses slip rings
</details>

---

**Q60.** (a) What is earth wire? Why is it necessary?
(b) How does it prevent electric shock?
(c) What happens if earth wire is not connected?
(d) Why is green colour used?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Earth Wire:**

Safety wire connected to metal body of appliances and earthed.

**Necessary because:**
- Prevents electric shock
- Protects from faulty insulation
- Safety measure for users

**(b) Prevention of shock:**
- If live wire touches metal body, current flows to earth
- User doesn't get shock (low resistance path)
- Fuse melts due to high current

**(c) Without earth wire:**
- Metal body becomes live
- User gets severe shock
- Can be fatal

**(d) Green colour:**
- Standard colour code
- Easy identification
- Safety regulation
</details>

---

**Q61.** (a) Explain why magnetic field lines are crowded near poles.
(b) What does crowding indicate?
(c) Draw field lines showing uniform and non-uniform field.
(d) Where is field strongest and weakest?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Crowded near poles:**
- Magnetic field is strongest near poles
- More lines per unit area
- Indicates higher field strength

**(b) Crowding indicates:**
- Strength of magnetic field
- Closer lines = stronger field
- Spread lines = weaker field

**(c) Field patterns:**

**Uniform:**
```
|||||||||||  (Parallel, equal spacing)
|||||||||||
```

**Non-uniform:**
```
  )))))))  (Curved, unequal spacing)
   )))))
```

**(d) Field strength:**
- **Strongest:** Near poles (crowded lines)
- **Weakest:** Away from poles (spread lines)
</details>

---

**Q62.** (a) Derive expression for force on current-carrying conductor in magnetic field.
(b) When is force maximum and minimum?
(c) What happens if:
    (i) Current direction reversed
    (ii) Field direction reversed
    (iii) Both reversed

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Force expression:**

$$ F = BIL \sin\theta $$

where:
- F = Force
- B = Magnetic field
- I = Current
- L = Length of conductor
- θ = Angle between conductor and field

**(b) Force:**
- **Maximum:** θ = 90° (perpendicular), F = BIL
- **Minimum:** θ = 0° or 180° (parallel), F = 0

**(c) Changes:**
**(i) Current reversed:** Force direction reverses
**(ii) Field reversed:** Force direction reverses
**(iii) Both reversed:** Force direction remains same
</details>

---

**Q63.** (a) What are the characteristics of magnetic field due to circular loop?
(b) How does field at center depend on:
    (i) Current
    (ii) Radius
    (iii) Number of turns
(c) Why is field straight at center?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Characteristics:**
- Concentric circles at every point
- Straight lines at center
- Perpendicular to plane of loop
- Stronger near wire

**(b) Dependence:**
**(i) Current:** B ∝ I (more current = stronger field)
**(ii) Radius:** B ∝ 1/r (smaller radius = stronger field)
**(iii) Turns:** B ∝ n (more turns = stronger field)

$$ B \propto \frac{nI}{r} $$

**(c) Straight at center:**
- All field contributions add up
- Symmetric from all sides
- Resultant is straight line perpendicular to plane
</details>

---

**Q64.** (a) Explain domestic wiring with diagram.
(b) What is the purpose of main switch?
(c) Why are two separate circuits used (5A and 15A)?
(d) What precautions should be taken?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Domestic Wiring:**
```
Power Line → Meter → Main Switch → Fuse → Distribution Box
                                      │
                              ┌───────┴───────┐
                          5A Circuit      15A Circuit
                          (Lights)       (Heavy appliances)
```

**(b) Main Switch:**
- Disconnects entire house supply
- For maintenance/emergency
- Safety cutoff

**(c) Two circuits:**
- **5A:** Lights, fans (low power)
- **15A:** AC, geyser, heater (high power)
- Prevents overloading
- Separate protection

**(d) Precautions:**
1. Use proper fuse rating
2. Don't overload circuits
3. Regular inspection
4. Use earth wire
5. Keep hands dry
6. Use MCB instead of fuse
</details>

---

**Q65.** (a) Describe the experiment to study magnetic field due to current-carrying conductor.
(b) What observations are made?
(c) What conclusions are drawn?
(d) How will field change if conductor is bent into circular loop?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Experiment:**
- Pass straight wire through cardboard
- Connect to battery
- Sprinkle iron filings
- Tap cardboard gently
- Observe pattern

**(b) Observations:**
- Filings form concentric circles
- Circles centered at wire
- Crowded near wire
- Pattern reverses with current reversal

**(c) Conclusions:**
- Current produces magnetic field
- Field is circular around conductor
- Direction given by Right-Hand Thumb Rule
- Strength decreases with distance

**(d) Circular loop:**
- Field becomes straight at center
- Concentric circles elsewhere
- Stronger field at center
- Acts like magnetic dipole
</details>

---

## 6. Exam-Oriented Preparation

### 📝 Important Rules & Formulas to Memorize

#### Right-Hand Thumb Rule:
> Thumb = Current, Fingers = Magnetic Field

#### Fleming's Left-Hand Rule (Motor):
> **F**ather = **F**orce (Thumb)
> **M**other = **M**agnetic Field (Forefinger)
> **C**hild = **C**urrent (Middle finger)

#### Fleming's Right-Hand Rule (Generator):
> Thumb = Motion
> Forefinger = Field
> Middle finger = Induced Current

#### Force on Conductor:
$$ F = BIL \sin\theta $$

Maximum when θ = 90°, Zero when θ = 0° or 180°

---

### 🎯 Expected Question Patterns (CBSE Class 10)

#### 1 Mark Questions (MCQ/Very Short Answer):
- Identify rule for given situation
- Direction of field/current/force
- Properties of field lines
- Colour coding of wires
- Frequency of AC in India
- Device names (motor, generator, fuse)

#### 2 Mark Questions (Short Answer):
- State and explain rules
- Draw field patterns
- Differences between AC and DC
- Function of components
- Simple numerical on fuse rating

#### 3 Mark Questions (Long Answer):
- Working of electric motor
- Working of electric generator
- Electromagnetic induction activity
- Domestic circuit explanation
- Factors affecting field strength

#### 5 Mark Questions (Very Long Answer):
- Complete motor/generator with diagram
- Compare motor and generator
- Domestic wiring with safety measures
- Comprehensive numerical problems
- Multiple concept integration

---

### 💡 Exam Tips:

1. ✅ **Draw clear diagrams** - Label all parts properly
2. ✅ **Use proper hand rules** - Left for motor, Right for generator
3. ✅ **Mention direction** - Always specify direction in answers
4. ✅ **Write formulas** - F = BIL for force questions
5. ✅ **State principles** - Motor/generator working principles
6. ✅ **Safety first** - Mention fuse, earth wire in domestic circuits
7. ✅ **Units matter** - Tesla for field, Ampere for current
8. ✅ **Practice diagrams** - Motor, generator, field patterns

---

### 🔴 Common Mistakes to Avoid:

| Mistake | Correction |
|---------|------------|
| Using left hand for generator | Right hand for induced current |
| Confusing slip rings and split ring | Slip rings = AC, Split ring = DC |
| Wrong finger assignment | Practice F-B-I mnemonic |
| Forgetting to label diagrams | Always label N, S, current, force |
| Not mentioning relative motion | Essential for induction |
| Wrong wire colours | Live=Red, Neutral=Black, Earth=Green |
| Confusing motor and generator | Motor: electrical→mechanical |

---

### 📚 Previous Year Questions (CBSE Pattern)

**Q1 (CBSE 2024):** State Fleming's Left-Hand Rule. Name one device that works on this principle.

**Answer:** Stretch thumb, forefinger and middle finger mutually perpendicular. Forefinger=Field, Middle finger=Current, Thumb=Force. Device: Electric motor.

---

**Q2 (CBSE 2024):** What is the frequency of AC in India? Why is AC preferred over DC for transmission?

**Answer:** 50 Hz. AC can be stepped up/down using transformers for efficient long-distance transmission.

---

**Q3 (CBSE 2023):** Draw magnetic field lines around a bar magnet. Why don't they intersect?

**Answer:** Field lines emerge from N, merge at S. Never intersect because field can't have two directions at one point.

---

**Q4 (CBSE 2023):** What is electromagnetic induction? Who discovered it?

**Answer:** Production of induced current due to relative motion between conductor and magnetic field. Discovered by Michael Faraday (1831).

---

**Q5 (CBSE 2022):** Differentiate between AC and DC generator.

**Answer:** AC uses slip rings, produces alternating current. DC uses split ring commutator, produces direct current.

---

**Q6 (CBSE 2022):** What is short circuit? How does fuse protect?

**Answer:** Live-neutral direct contact. Fuse melts on excess current, breaks circuit, prevents damage.

---

**Q7 (CBSE 2021):** State Right-Hand Thumb Rule. What happens if current is reversed?

**Answer:** Thumb=current, fingers=field direction. If current reverses, field direction also reverses.

---

**Q8 (CBSE 2021):** Why are appliances connected in parallel?

**Answer:** Same voltage across all, independent operation, one failure doesn't affect others.

---

**Q9 (CBSE 2020):** Describe working of electric motor with diagram.

**Answer:** Current-carrying coil in magnetic field experiences force (Fleming's rule). Split ring reverses current for continuous rotation.

---

**Q10 (CBSE 2020):** What is earth wire? Why is it important?

**Answer:** Safety wire connected to metal body and earth. Prevents electric shock by providing low resistance path to ground.

---

## 7. Revision Notes

### 📌 Quick Revision Sheet

#### Key Definitions:

| Term | Definition |
|------|------------|
| **Magnetic Field** | Region around magnet where force is experienced |
| **Field Lines** | Imaginary lines representing magnetic field |
| **Electromagnetism** | Magnetic effect produced by electric current |
| **Electromagnetic Induction** | Production of induced current by changing magnetic field |
| **Motor** | Converts electrical → mechanical energy |
| **Generator** | Converts mechanical → electrical energy |

---

#### Important Rules:

**Right-Hand Thumb Rule:**
- Thumb = Current direction
- Fingers = Magnetic field direction

**Fleming's Left-Hand Rule (Motor):**
- Thumb = Force
- Forefinger = Field
- Middle finger = Current

**Fleming's Right-Hand Rule (Generator):**
- Thumb = Motion
- Forefinger = Field
- Middle finger = Induced Current

---

#### Field Patterns:

| Conductor Type | Field Pattern |
|----------------|---------------|
| Straight wire | Concentric circles |
| Circular loop | Straight at center, circles elsewhere |
| Solenoid | Uniform inside, like bar magnet outside |
| Bar magnet | N to S (outside), S to N (inside) |

---

#### Devices Comparison:

| Device | Principle | Energy Conversion | Rule Used |
|--------|-----------|-------------------|-----------|
| **Motor** | Force on current-carrying conductor | Electrical → Mechanical | Left-Hand |
| **AC Generator** | Electromagnetic induction | Mechanical → Electrical | Right-Hand |
| **DC Generator** | Electromagnetic induction | Mechanical → Electrical | Right-Hand |

---

#### Domestic Circuit:

| Wire | Colour | Potential | Function |
|------|--------|-----------|----------|
| **Live** | Red | 220V | Carries current to appliance |
| **Neutral** | Black | 0V | Returns current |
| **Earth** | Green | 0V | Safety, prevents shock |

**Frequency:** 50 Hz in India

**Connection:** Parallel for all appliances

---

#### Safety Devices:

| Device | Function | Advantage |
|--------|----------|-----------|
| **Fuse** | Melts on excess current | Cheap, simple |
| **MCB** | Switches off automatically | Resettable, reliable |
| **Earth wire** | Provides path to ground | Prevents shock |

---

#### Important Formulas:

**Force on conductor:**
$$ F = BIL \sin\theta $$

**Maximum force:** θ = 90°, F = BIL

**Minimum force:** θ = 0° or 180°, F = 0

---

### 🎓 Final Checklist Before Exam:

- [ ] I know all three hand rules and when to use each
- [ ] I can draw field patterns for all conductor types
- [ ] I understand motor working with split ring function
- [ ] I understand generator working (AC vs DC)
- [ ] I know electromagnetic induction principle
- [ ] I can explain domestic wiring and safety
- [ ] I know wire colours and their functions
- [ ] I can solve numerical on fuse rating
- [ ] I have practiced all 30 MCQs
- [ ] I have practiced all 20 Short Answer questions
- [ ] I have practiced all 15 Long Answer questions

---

### 📊 Quick Formula Sheet:

**Force on Conductor:**
$$ F = BIL \sin\theta $$

**Field due to straight conductor:**
$$ B \propto \frac{I}{r} $$

**Field at center of circular loop:**
$$ B \propto \frac{nI}{r} $$

**Power:**
$$ P = VI $$

**Frequency (India):**
$$ f = 50 \text{ Hz} $$

---

**Good luck with your studies! 🌟**

> Remember: Left hand for Motor, Right hand for Generator!

---

**End of Learning Path - Magnetic Effects of Electric Current**
