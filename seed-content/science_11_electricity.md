# Electricity - Learning Path

## 1. Concept Introduction

### What is Electricity?

**Electricity** is a form of energy resulting from the existence of charged particles (such as electrons or protons), either statically as an accumulation of charge or dynamically as a current.

**Everyday Examples:**
- 💡 **Lighting:** Electric bulbs, tube lights
- 📱 **Electronics:** Mobile phones, computers, TVs
- 🏠 **Appliances:** Refrigerator, washing machine, AC
- 🔋 **Batteries:** Powering devices
- ⚡ **Power Grid:** Supplying electricity to homes

### Electric Current and Circuit:

**Electric Current:** Flow of electric charge through a conductor.

```
ELECTRIC CURRENT FLOW

    Battery/Cell
    ┌─────────┐
    │  +   -  │
    └───┬─┬───┘
        │ │
        │ │
    ┌───┴─┴───┐
    │         │
    │  Load   │ ← Current flows
    │ (Bulb)  │   through circuit
    │         │
    └───┬─┬───┘
        │ │
        │ │
    ┌───┴─┴───┐
    │  Switch │
    └─────────┘
    
    Conventional Current: + to -
    Electron Flow: - to +
```

**Key Components:**

| Term | Definition | Symbol | Unit |
|------|------------|--------|------|
| **Electric Current** | Rate of flow of charge | I | Ampere (A) |
| **Electric Charge** | Property of matter | Q | Coulomb (C) |
| **Electric Potential** | Work done per unit charge | V | Volt (V) |
| **Potential Difference** | Difference in potential | V | Volt (V) |
| **Resistance** | Opposition to current flow | R | Ohm (Ω) |

---

## 2. Micro-topic Breakdown

This chapter is divided into the following key concepts:

```
Electricity
├── 11.1 Electric Current and Circuit
│   ├── Definition and formula
│   ├── Electric circuit
│   └── Direction of current
├── 11.2 Electric Potential and Potential Difference
│   ├── Definition
│   ├── Formula
│   └── Measurement
├── 11.3 Ohm's Law
│   ├── Statement
│   ├── Formula
│   └── Verification
├── 11.4 Resistance and Resistivity
│   ├── Factors affecting resistance
│   ├── Resistivity
│   └── Combination of resistors
├── 11.5 Heating Effect of Electric Current
│   ├── Joule's law
│   ├── Applications
│   └── Electric power
└── 11.6 Applications
    ├── Domestic circuits
    ├── Electric appliances
    └── Energy consumption
```

---

## 3. Concept Explanations

### 11.1 Electric Current and Circuit

**Electric Current (I):** Rate of flow of electric charge through a cross-section of a conductor.

**Formula:**
$$ I = \frac{Q}{t} $$

Where:
- **I** = Electric current (Ampere)
- **Q** = Electric charge (Coulomb)
- **t** = Time (second)

**1 Ampere:** When 1 Coulomb of charge flows through a conductor in 1 second.

```
ELECTRIC CIRCUIT COMPONENTS

    ┌─────────────────────────────────────────┐
    │  Cell/Battery    →    Provides energy   │
    │  Switch/Key      →    On/Off control    │
    │  Bulb            →    Load/Indicator    │
    │  Resistor        →    Limits current    │
    │  Ammeter         →    Measures current  │
    │  Voltmeter       →    Measures voltage  │
    │  Rheostat        →    Varies resistance │
    └─────────────────────────────────────────┘
```

**Circuit Diagram Symbols:**

```
CIRCUIT SYMBOLS

    Cell:         ─|├─
    
    Battery:      ─|├|├─
    
    Switch (Open):  ─⚪─
    
    Switch (Closed): ─══─
    
    Bulb:         ─⊗─
    
    Resistor:     ─⚡⚡⚡─
    
    Ammeter:      ─Ⓐ─
    
    Voltmeter:    ─Ⓥ─
    
    Rheostat:     ─⚡⚡⚡─
                   ↑
```

---

### 11.2 Electric Potential and Potential Difference

**Electric Potential (V):** Work done in bringing a unit positive charge from infinity to a point.

**Formula:**
$$ V = \frac{W}{Q} $$

Where:
- **V** = Electric potential (Volt)
- **W** = Work done (Joule)
- **Q** = Charge (Coulomb)

**1 Volt:** When 1 Joule of work is done in moving 1 Coulomb of charge.

**Potential Difference:** Difference in electric potential between two points.

```
POTENTIAL DIFFERENCE

    Point A          Point B
    (Higher V)       (Lower V)
        │               │
        │               │
    ────┴───────┬───────┴────
                │
            ┌───┴───┐
            │       │
            │  R    │ ← Current flows
            │       │   from high to low
            └───┬───┘   potential
                │
    ────────────┴────────────
    
    V = V_A - V_B
    Current flows from A to B
```

**Measurement:**
- **Voltmeter** measures potential difference
- Connected in **parallel** across component
- High resistance (draws minimal current)

---

### 11.3 Ohm's Law

**Statement:** The current flowing through a conductor is directly proportional to the potential difference across its ends, provided temperature and other physical conditions remain constant.

**Formula:**
$$ V \propto I $$
$$ V = IR $$

Where:
- **V** = Potential difference (Volt)
- **I** = Current (Ampere)
- **R** = Resistance (Ohm, Ω)

**Verification Circuit:**

```
OHM'S LAW VERIFICATION CIRCUIT

         ┌─────Ⓐ─────┐
         │           │
    ─|├──┤           ├───
    Cell │           │   R (Resistor)
         │           │
         └─────Ⓥ─────┘
         
    Ammeter (A) in series
    Voltmeter (V) in parallel
    
    Vary voltage, measure current
    Plot V vs I graph
    Straight line through origin
    Slope = Resistance (R)
```

**V-I Graph:**

```
V-I GRAPH FOR OHMIC CONDUCTOR

    V (Volt)
    │
    │      /
    │     /
    │    /  ← Straight line
    │   /   Slope = R
    │  /
    │ /
    │/
    └───────────── I (Ampere)
    
    Slope = V/I = R (Resistance)
    Constant R = Ohmic conductor
```

---

### 11.4 Resistance and Resistivity

**Resistance (R):** Opposition offered by a conductor to the flow of current.

**Formula:**
$$ R = \frac{V}{I} $$

**Unit:** Ohm (Ω)

**1 Ohm:** When 1 Ampere current flows through a conductor with 1 Volt potential difference.

#### Factors Affecting Resistance:

```
FACTORS AFFECTING RESISTANCE

    R ∝ L (Length)
    ─────────────
    Longer wire → More resistance
    
    R ∝ 1/A (Area)
    ──────────────
    Thicker wire → Less resistance
    
    R ∝ ρ (Material)
    ────────────────
    Different materials → Different ρ
    
    R ∝ 1/T (Temperature)
    ─────────────────────
    Higher temp → More resistance (metals)
```

**Formula:**
$$ R = \rho \frac{L}{A} $$

Where:
- **ρ** = Resistivity (Ω·m)
- **L** = Length (m)
- **A** = Cross-sectional area (m²)

---

#### Resistivity:

**Definition:** Resistance of a material of unit length and unit cross-sectional area.

**Formula:**
$$ \rho = \frac{RA}{L} $$

**Unit:** Ohm-meter (Ω·m)

**Resistivity of Common Materials:**

| Material | Resistivity (Ω·m) | Use |
|----------|------------------|-----|
| **Silver** | 1.59 × 10⁻⁸ | Best conductor |
| **Copper** | 1.68 × 10⁻⁸ | Electric wires |
| **Aluminium** | 2.65 × 10⁻⁸ | Power transmission |
| **Tungsten** | 5.60 × 10⁻⁸ | Bulb filament |
| **Nichrome** | 1.10 × 10⁻⁶ | Heating elements |
| **Glass** | 10¹⁰ - 10¹⁴ | Insulator |
| **Rubber** | 10¹³ - 10¹⁶ | Insulator |

---

#### Combination of Resistors:

**1. Series Combination:**

```
SERIES COMBINATION

    ──⚡⚡⚡──⚡⚡⚡──⚡⚡⚡──
       R₁      R₂      R₃
    
    Same current through all
    I = I₁ = I₂ = I₃
    
    Voltage divides
    V = V₁ + V₂ + V₃
    
    Equivalent Resistance:
    Rₛ = R₁ + R₂ + R₃
    
    Rₛ > Largest individual R
```

**Characteristics:**
- Same current through all resistors
- Voltage divides across resistors
- Total resistance = Sum of individual resistances
- If one breaks, circuit breaks

**2. Parallel Combination:**

```
PARALLEL COMBINATION

         ┌──⚡⚡⚡──┐
         │   R₁   │
    ─────┼──⚡⚡⚡──┼─────
         │   R₂   │
         ├──⚡⚡⚡──┤
         │   R₃   │
         └────────┘
    
    Same voltage across all
    V = V₁ = V₂ = V₃
    
    Current divides
    I = I₁ + I₂ + I₃
    
    Equivalent Resistance:
    1/Rₚ = 1/R₁ + 1/R₂ + 1/R₃
    
    Rₚ < Smallest individual R
```

**Characteristics:**
- Same voltage across all resistors
- Current divides through resistors
- Reciprocal of total = Sum of reciprocals
- If one breaks, others continue working

---

### 11.5 Heating Effect of Electric Current

**Joule's Law of Heating:**

When current flows through a conductor, heat is produced.

**Formula:**
$$ H = I²Rt $$

Where:
- **H** = Heat produced (Joule)
- **I** = Current (Ampere)
- **R** = Resistance (Ohm)
- **t** = Time (second)

**Factors Affecting Heat:**

```
HEAT PRODUCTION FACTORS

    H ∝ I² (Current squared)
    ───────────────────────
    Double current → 4× heat
    
    H ∝ R (Resistance)
    ──────────────────
    More resistance → More heat
    
    H ∝ t (Time)
    ────────────
    Longer time → More heat
```

**Applications:**

| Appliance | Heating Element | Use |
|-----------|----------------|-----|
| **Electric Bulb** | Tungsten filament | Lighting |
| **Electric Iron** | Nichrome coil | Ironing |
| **Electric Heater** | Nichrome coil | Heating |
| **Toaster** | Nichrome wires | Toasting |
| **Electric Fuse** | Low melting alloy | Safety |

---

#### Electric Power:

**Definition:** Rate at which electric energy is consumed or produced.

**Formula:**
$$ P = \frac{W}{t} = VI $$

Also:
$$ P = I²R = \frac{V²}{R} $$

**Unit:** Watt (W)

**1 Watt:** When 1 Ampere current flows through 1 Volt potential difference.

**Commercial Unit:**

**1 Kilowatt-hour (kWh):**
$$ 1 \text{ kWh} = 1000 \text{ W} \times 3600 \text{ s} = 3.6 \times 10^6 \text{ J} $$

**Electric Energy Consumed:**
$$ E = P \times t $$

Where:
- **E** = Energy (kWh)
- **P** = Power (kW)
- **t** = Time (hours)

---

### 11.6 Domestic Electric Circuits

**Supply:**
- **Voltage:** 220V (India)
- **Frequency:** 50 Hz
- **Wires:** Live (Red), Neutral (Black), Earth (Green)

```
DOMESTIC CIRCUIT

    Main Supply (220V)
         │
         │
    ┌────┴────┐
    │  Meter  │
    └────┬────┘
         │
    ┌────┴────┐
    │  Fuse   │
    └────┬────┘
         │
    ┌────┴────┐
    │  MCB    │
    └────┬────┘
         │
    ┌────┴────┐
    │Parallel │
    │Circuits │
    └─────────┘
         │
    ┌────┴────┐
    │ Appliances│
    │ in parallel│
    └─────────┘
```

**Features:**
- All appliances in **parallel**
- Each appliance has **independent switch**
- **Fuse/MCB** for safety
- **Earthing** for protection

**Safety Measures:**

1. **Fuse:**
   - Low melting alloy wire
   - Melts on excess current
   - Breaks circuit

2. **MCB (Miniature Circuit Breaker):**
   - Automatic switch
   - Trips on overload
   - Can be reset

3. **Earthing:**
   - Green wire
   - Connects to ground
   - Prevents electric shock

---

## 4. Guided Examples

### Example 1: Current Calculation

**Question:** If 120 C of charge flows through a conductor in 2 minutes, calculate the current.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify given values | Q = 120 C, t = 2 min = 120 s |
| 2 | Apply current formula | I = Q/t |
| 3 | Substitute values | I = 120/120 |
| 4 | Calculate | I = 1 A |

**Final Answer:** Current = 1 A

---

### Example 2: Ohm's Law Application

**Question:** A potential difference of 12 V is applied across a resistor of 24 Ω. Calculate the current flowing.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify given values | V = 12 V, R = 24 Ω |
| 2 | Apply Ohm's law | V = IR, so I = V/R |
| 3 | Substitute values | I = 12/24 |
| 4 | Calculate | I = 0.5 A |

**Final Answer:** Current = 0.5 A

---

### Example 3: Resistance Calculation

**Question:** Calculate the resistance of a copper wire of length 2 m and cross-sectional area 1 mm². (Resistivity of copper = 1.68 × 10⁻⁸ Ω·m)

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify given values | L = 2 m, A = 1 mm² = 10⁻⁶ m², ρ = 1.68 × 10⁻⁸ Ω·m |
| 2 | Apply resistance formula | R = ρL/A |
| 3 | Substitute values | R = (1.68 × 10⁻⁸ × 2)/(10⁻⁶) |
| 4 | Calculate | R = 3.36 × 10⁻² Ω = 0.0336 Ω |

**Final Answer:** Resistance = 0.0336 Ω

---

### Example 4: Series Combination

**Question:** Three resistors of 2 Ω, 3 Ω, and 5 Ω are connected in series. Find the equivalent resistance.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify given values | R₁ = 2 Ω, R₂ = 3 Ω, R₃ = 5 Ω |
| 2 | Apply series formula | Rₛ = R₁ + R₂ + R₃ |
| 3 | Substitute values | Rₛ = 2 + 3 + 5 |
| 4 | Calculate | Rₛ = 10 Ω |

**Final Answer:** Equivalent resistance = 10 Ω

---

### Example 5: Parallel Combination

**Question:** Two resistors of 4 Ω and 12 Ω are connected in parallel. Find the equivalent resistance.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify given values | R₁ = 4 Ω, R₂ = 12 Ω |
| 2 | Apply parallel formula | 1/Rₚ = 1/R₁ + 1/R₂ |
| 3 | Substitute values | 1/Rₚ = 1/4 + 1/12 |
| 4 | Calculate | 1/Rₚ = (3+1)/12 = 4/12 = 1/3 |
| 5 | Find Rₚ | Rₚ = 3 Ω |

**Final Answer:** Equivalent resistance = 3 Ω

---

### Example 6: Heating Effect

**Question:** Calculate the heat produced when a current of 5 A flows through a 10 Ω resistor for 2 minutes.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify given values | I = 5 A, R = 10 Ω, t = 2 min = 120 s |
| 2 | Apply Joule's law | H = I²Rt |
| 3 | Substitute values | H = 5² × 10 × 120 |
| 4 | Calculate | H = 25 × 10 × 120 = 30,000 J |

**Final Answer:** Heat produced = 30,000 J = 30 kJ

---

### Example 7: Electric Power and Energy

**Question:** An electric bulb of 100 W is used for 5 hours daily. Calculate the energy consumed in kWh per day.

**Step-by-Step Solution:**

| Step | Action | Working |
|------|--------|---------|
| 1 | Identify given values | P = 100 W = 0.1 kW, t = 5 h |
| 2 | Apply energy formula | E = P × t |
| 3 | Substitute values | E = 0.1 × 5 |
| 4 | Calculate | E = 0.5 kWh |

**Final Answer:** Energy consumed = 0.5 kWh per day

---

## 5. Practice Questions

### SECTION A: Multiple Choice Questions (30 Questions - 1 Mark Each)

**Q1.** The SI unit of electric current is:
- (A) Volt
- (B) Coulomb
- (C) Ampere
- (D) Ohm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Ampere

**Explanation:** Ampere (A) is the SI unit of electric current.
</details>

---

**Q2.** The device used to measure potential difference is:
- (A) Ammeter
- (B) Voltmeter
- (C) Galvanometer
- (D) Rheostat

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Voltmeter

**Explanation:** Voltmeter measures potential difference, connected in parallel.
</details>

---

**Q3.** According to Ohm's law:
- (A) V ∝ I
- (B) V ∝ I²
- (C) V ∝ 1/I
- (D) V ∝ 1/I²

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) V ∝ I

**Explanation:** V = IR, voltage is directly proportional to current.
</details>

---

**Q4.** The resistance of a conductor depends on:
- (A) Length only
- (B) Area only
- (C) Material only
- (D) All of these

<details>
<summary>✓ Show Answer</summary>

**Answer:** (D) All of these

**Explanation:** R = ρL/A, depends on length, area, and material (resistivity).
</details>

---

**Q5.** The resistivity of a wire depends on:
- (A) Length
- (B) Area
- (C) Material
- (D) All of these

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Material

**Explanation:** Resistivity is a property of material, independent of dimensions.
</details>

---

**Q6.** When resistors are connected in series:
- (A) Current is same
- (B) Voltage is same
- (C) Resistance decreases
- (D) Power increases

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) Current is same

**Explanation:** Same current flows through all resistors in series.
</details>

---

**Q7.** The equivalent resistance of parallel combination is:
- (A) More than largest resistance
- (B) Less than smallest resistance
- (C) Equal to sum of resistances
- (D) Equal to average

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Less than smallest resistance

**Explanation:** 1/Rₚ = 1/R₁ + 1/R₂ + ..., Rₚ is always less than smallest R.
</details>

---

**Q8.** The heating effect of current is given by:
- (A) H = I²Rt
- (B) H = IRt
- (C) H = IR²t
- (D) H = VIt

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) H = I²Rt

**Explanation:** Joule's law of heating: H = I²Rt
</details>

---

**Q9.** The commercial unit of electric energy is:
- (A) Watt
- (B) Joule
- (C) Kilowatt-hour
- (D) Volt

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Kilowatt-hour

**Explanation:** kWh is the commercial unit (1 kWh = 3.6 × 10⁶ J)
</details>

---

**Q10.** The filament of an electric bulb is made of:
- (A) Copper
- (B) Aluminium
- (C) Tungsten
- (D) Nichrome

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Tungsten

**Explanation:** Tungsten has high melting point (3380°C), suitable for filament.
</details>

---

**Q11.** An electric fuse works on the principle of:
- (A) Magnetic effect
- (B) Heating effect
- (C) Chemical effect
- (D) Mechanical effect

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Heating effect

**Explanation:** Fuse wire melts due to heating effect when excess current flows.
</details>

---

**Q12.** The resistance of a conductor increases with:
- (A) Decrease in length
- (B) Increase in area
- (C) Increase in temperature
- (D) Decrease in temperature

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Increase in temperature

**Explanation:** For metals, resistance increases with temperature.
</details>

---

**Q13.** The SI unit of resistivity is:
- (A) Ohm
- (B) Ohm-meter
- (C) Ohm/meter
- (D) Meter/Ohm

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Ohm-meter

**Explanation:** Resistivity ρ = RA/L, unit is Ω·m
</details>

---

**Q14.** In a parallel combination, the potential difference across each resistor is:
- (A) Different
- (B) Same
- (C) Zero
- (D) Infinite

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Same

**Explanation:** Same voltage across all resistors in parallel.
</details>

---

**Q15.** The power consumed by a device is given by:
- (A) P = VI
- (B) P = V/I
- (C) P = I/V
- (D) P = V²I

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) P = VI

**Explanation:** Electric power P = VI = I²R = V²/R
</details>

---

**Q16.** The material used for making heating elements is:
- (A) Copper
- (B) Aluminium
- (C) Nichrome
- (D) Silver

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Nichrome

**Explanation:** Nichrome has high resistivity and high melting point.
</details>

---

**Q17.** If the length of a wire is doubled, its resistance becomes:
- (A) Double
- (B) Half
- (C) Four times
- (D) One-fourth

<details>
<summary>✓ Show Answer</summary>

**Answer:** (A) Double

**Explanation:** R ∝ L, doubling length doubles resistance.
</details>

---

**Q18.** The ammeter is connected in a circuit:
- (A) In parallel
- (B) In series
- (C) Either way
- (D) Not connected

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) In series

**Explanation:** Ammeter measures current, must be in series.
</details>

---

**Q19.** The resistance of an ideal voltmeter is:
- (A) Zero
- (B) Infinite
- (C) 1 Ω
- (D) 100 Ω

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Infinite

**Explanation:** Ideal voltmeter has infinite resistance to draw no current.
</details>

---

**Q20.** The work done in moving 2 C charge through 10 V potential difference is:
- (A) 5 J
- (B) 10 J
- (C) 20 J
- (D) 40 J

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 20 J

**Explanation:** W = QV = 2 × 10 = 20 J
</details>

---

**Q21.** The equivalent resistance of two 10 Ω resistors in parallel is:
- (A) 20 Ω
- (B) 10 Ω
- (C) 5 Ω
- (D) 2 Ω

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 5 Ω

**Explanation:** 1/R = 1/10 + 1/10 = 2/10, R = 5 Ω
</details>

---

**Q22.** The current in a circuit is 2 A and resistance is 5 Ω. The voltage is:
- (A) 2.5 V
- (B) 5 V
- (C) 10 V
- (D) 20 V

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) 10 V

**Explanation:** V = IR = 2 × 5 = 10 V
</details>

---

**Q23.** The power of a device consuming 100 J energy in 10 s is:
- (A) 1 W
- (B) 10 W
- (C) 100 W
- (D) 1000 W

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 10 W

**Explanation:** P = E/t = 100/10 = 10 W
</details>

---

**Q24.** In domestic circuits, appliances are connected in:
- (A) Series
- (B) Parallel
- (C) Combination
- (D) None

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Parallel

**Explanation:** Parallel connection ensures same voltage and independent operation.
</details>

---

**Q25.** The color of earth wire is:
- (A) Red
- (B) Black
- (C) Green
- (D) Blue

<details>
<summary>✓ Show Answer</summary>

**Answer:** (C) Green

**Explanation:** Green wire is for earthing (safety).
</details>

---

**Q26.** The frequency of AC supply in India is:
- (A) 25 Hz
- (B) 50 Hz
- (C) 60 Hz
- (D) 100 Hz

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 50 Hz

**Explanation:** India uses 220V, 50 Hz AC supply.
</details>

---

**Q27.** The device used to protect circuits from overload is:
- (A) Switch
- (B) Fuse
- (C) Bulb
- (D) Resistor

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Fuse

**Explanation:** Fuse melts on excess current, protects circuit.
</details>

---

**Q28.** If the current through a resistor is doubled, the heat produced becomes:
- (A) Double
- (B) Four times
- (C) Half
- (D) Same

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) Four times

**Explanation:** H ∝ I², doubling current quadruples heat.
</details>

---

**Q29.** The resistance of a wire of length 1 m, area 1 m², and resistivity 1 Ω·m is:
- (A) 0.5 Ω
- (B) 1 Ω
- (C) 2 Ω
- (D) 4 Ω

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 1 Ω

**Explanation:** R = ρL/A = 1 × 1/1 = 1 Ω
</details>

---

**Q30.** 1 kWh is equal to:
- (A) 3.6 × 10³ J
- (B) 3.6 × 10⁶ J
- (C) 3.6 × 10⁹ J
- (D) 3.6 × 10¹² J

<details>
<summary>✓ Show Answer</summary>

**Answer:** (B) 3.6 × 10⁶ J

**Explanation:** 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J
</details>

---

### SECTION B: Short Answer Questions (20 Questions - 2-3 Marks Each)

**Q31.** Define electric current. Write its SI unit.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Electric Current:**

**Definition:** Rate of flow of electric charge through a cross-section of a conductor.

**Formula:**
$$ I = \frac{Q}{t} $$

Where:
- I = Current (Ampere)
- Q = Charge (Coulomb)
- t = Time (second)

**SI Unit:** Ampere (A)

**1 Ampere:** When 1 Coulomb of charge flows through a conductor in 1 second.
</details>

---

**Q32.** What is potential difference? Write its SI unit.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Potential Difference:**

**Definition:** Work done in moving a unit positive charge from one point to another.

**Formula:**
$$ V = \frac{W}{Q} $$

Where:
- V = Potential difference (Volt)
- W = Work done (Joule)
- Q = Charge (Coulomb)

**SI Unit:** Volt (V)

**1 Volt:** When 1 Joule of work is done in moving 1 Coulomb of charge.
</details>

---

**Q33.** State Ohm's law. Write its formula.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Ohm's Law:**

**Statement:** The current flowing through a conductor is directly proportional to the potential difference across its ends, provided temperature and other physical conditions remain constant.

**Formula:**
$$ V \propto I $$
$$ V = IR $$

Where:
- V = Potential difference (Volt)
- I = Current (Ampere)
- R = Resistance (Ohm)

**Condition:** Temperature must remain constant.
</details>

---

**Q34.** Define resistance. What is its SI unit?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Resistance:**

**Definition:** Opposition offered by a conductor to the flow of electric current.

**Formula:**
$$ R = \frac{V}{I} $$

Where:
- R = Resistance (Ohm)
- V = Potential difference (Volt)
- I = Current (Ampere)

**SI Unit:** Ohm (Ω)

**1 Ohm:** When 1 Ampere current flows through a conductor with 1 Volt potential difference.
</details>

---

**Q35.** What are the factors affecting resistance of a conductor?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Factors Affecting Resistance:**

1. **Length (L):**
   - R ∝ L
   - Longer wire → More resistance

2. **Cross-sectional Area (A):**
   - R ∝ 1/A
   - Thicker wire → Less resistance

3. **Nature of Material (ρ):**
   - Different materials have different resistivity
   - R ∝ ρ

4. **Temperature (T):**
   - For metals: R increases with T
   - For semiconductors: R decreases with T

**Formula:**
$$ R = \rho \frac{L}{A} $$
</details>

---

**Q36.** Differentiate between resistivity and resistance.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

| Resistance | Resistivity |
|------------|-------------|
| Opposition to current flow | Property of material |
| Depends on dimensions | Independent of dimensions |
| Symbol: R | Symbol: ρ |
| Unit: Ohm (Ω) | Unit: Ohm-meter (Ω·m) |
| R = V/I | ρ = RA/L |
| Changes with size | Constant for material |
</details>

---

**Q37.** Draw a circuit diagram to verify Ohm's law.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

```
OHM'S LAW VERIFICATION CIRCUIT

         ┌─────Ⓐ─────┐
         │           │
    ─|├──┤           ├───
    Cell │           │   R (Resistor)
         │           │
         └─────Ⓥ─────┘
         
    Components:
    - Cell/Battery
    - Ammeter (A) in series
    - Voltmeter (V) in parallel
    - Resistor (R)
    - Switch (not shown)
    
    Procedure:
    1. Vary voltage using rheostat
    2. Measure current and voltage
    3. Plot V vs I graph
    4. Straight line confirms Ohm's law
```
</details>

---

**Q38.** Two resistors of 6 Ω and 3 Ω are connected in series. Find the equivalent resistance.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:**
- R₁ = 6 Ω
- R₂ = 3 Ω

**Series Combination:**
$$ R_s = R_1 + R_2 $$
$$ R_s = 6 + 3 $$
$$ R_s = 9 \text{ Ω} $$

**Answer:** Equivalent resistance = 9 Ω
</details>

---

**Q39.** Two resistors of 6 Ω and 3 Ω are connected in parallel. Find the equivalent resistance.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:**
- R₁ = 6 Ω
- R₂ = 3 Ω

**Parallel Combination:**
$$ \frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} $$
$$ \frac{1}{R_p} = \frac{1}{6} + \frac{1}{3} $$
$$ \frac{1}{R_p} = \frac{1+2}{6} = \frac{3}{6} = \frac{1}{2} $$

$$ R_p = 2 \text{ Ω} $$

**Answer:** Equivalent resistance = 2 Ω
</details>

---

**Q40.** State Joule's law of heating.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Joule's Law of Heating:**

**Statement:** The heat produced in a resistor is:
1. Directly proportional to square of current (I²)
2. Directly proportional to resistance (R)
3. Directly proportional to time (t)

**Formula:**
$$ H = I^2Rt $$

Where:
- H = Heat produced (Joule)
- I = Current (Ampere)
- R = Resistance (Ohm)
- t = Time (second)

**Also:**
$$ H = VIt = \frac{V^2t}{R} $$
</details>

---

**Q41.** Define electric power. Write its SI unit.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Electric Power:**

**Definition:** Rate at which electric energy is consumed or produced.

**Formula:**
$$ P = \frac{W}{t} = VI $$

Also:
$$ P = I^2R = \frac{V^2}{R} $$

Where:
- P = Power (Watt)
- V = Voltage (Volt)
- I = Current (Ampere)
- R = Resistance (Ohm)

**SI Unit:** Watt (W)

**1 Watt:** When 1 Ampere current flows through 1 Volt potential difference.
</details>

---

**Q42.** What is the commercial unit of electric energy? Write its relation with joule.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Commercial Unit:**

**Kilowatt-hour (kWh)**

**Definition:** Energy consumed by a 1 kW device in 1 hour.

**Relation with Joule:**
$$ 1 \text{ kWh} = 1000 \text{ W} \times 3600 \text{ s} $$
$$ 1 \text{ kWh} = 3.6 \times 10^6 \text{ J} $$

**Usage:**
- Electricity bills
- Energy meters
- Commercial calculations
</details>

---

**Q43.** Why is tungsten used for making bulb filaments?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Reasons:**

1. **High melting point:**
   - 3380°C
   - Can glow white-hot without melting

2. **High resistivity:**
   - Produces more heat
   - Glows brightly

3. **Low vapor pressure:**
   - Doesn't evaporate easily
   - Long life

4. **Ductile:**
   - Can be drawn into thin wires
   - Easy to manufacture

5. **Economical:**
   - Relatively cheap
   - Easily available
</details>

---

**Q44.** Why are domestic circuits connected in parallel?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Reasons:**

1. **Same voltage:**
   - All appliances get 220V
   - Proper functioning

2. **Independent operation:**
   - Each appliance has own switch
   - Can be used independently

3. **Current division:**
   - Each draws required current
   - No interference

4. **Fault tolerance:**
   - If one fails, others work
   - Continuous supply

5. **Lower resistance:**
   - Total resistance less
   - Efficient power distribution
</details>

---

**Q45.** What is the function of a fuse in a circuit?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Function of Fuse:**

**Safety device** that protects circuit from overload and short circuit.

**Working:**
- Made of low melting alloy (tin-lead)
- Connected in series
- Melts when excess current flows
- Breaks the circuit
- Prevents damage/fire

**Characteristics:**
- Low melting point
- High resistivity
- Rated for specific current
- One-time use (replace after blowing)

**Rating:**
- Selected based on appliance power
- Example: 5A for lights, 15A for AC
</details>

---

**Q46.** Calculate the current flowing through a bulb of resistance 1200 Ω connected to 220 V supply.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:**
- R = 1200 Ω
- V = 220 V

**Ohm's Law:**
$$ I = \frac{V}{R} $$
$$ I = \frac{220}{1200} $$
$$ I = 0.183 \text{ A} $$

**Answer:** Current = 0.183 A
</details>

---

**Q47.** An electric heater consumes 1000 W power when connected to 220 V supply. Calculate the current drawn.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:**
- P = 1000 W
- V = 220 V

**Power Formula:**
$$ P = VI $$
$$ I = \frac{P}{V} $$
$$ I = \frac{1000}{220} $$
$$ I = 4.55 \text{ A} $$

**Answer:** Current drawn = 4.55 A
</details>

---

**Q48.** How much energy is consumed by a 100 W bulb used for 10 hours?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Given:**
- P = 100 W = 0.1 kW
- t = 10 hours

**Energy Formula:**
$$ E = P \times t $$
$$ E = 0.1 \times 10 $$
$$ E = 1 \text{ kWh} $$

**In Joules:**
$$ E = 1 \times 3.6 \times 10^6 = 3.6 \times 10^6 \text{ J} $$

**Answer:** Energy = 1 kWh = 3.6 × 10⁶ J
</details>

---

**Q49.** What is earthing? Why is it done?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Earthing:**

**Definition:** Connecting the metallic body of an appliance to earth through a wire.

**Purpose:**

1. **Safety:**
   - Prevents electric shock
   - Provides path for leakage current

2. **Protection:**
   - In case of insulation failure
   - Current flows to earth
   - Fuse blows, circuit breaks

3. **Stability:**
   - Maintains constant potential
   - Prevents voltage fluctuations

**Wire Color:** Green

**Connection:**
- Connected to metallic body
- Other end to earth pit
- Deep underground
</details>

---

**Q50.** Why does the cord of an electric heater not glow while the heating element does?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**Reason:**

**Heating Element:**
- Made of nichrome
- High resistance
- More heat produced (H ∝ R)
- Glows red-hot

**Cord:**
- Made of copper
- Very low resistance
- Less heat produced
- Doesn't glow

**Explanation:**
- Same current flows through both (series)
- H = I²Rt
- Higher R → More heat
- Nichrome R >> Copper R
- Element glows, cord doesn't
</details>

---

### SECTION C: Long Answer Questions (15 Questions - 5 Marks Each)

**Q51.** (a) State Ohm's law.
(b) Describe an activity to verify Ohm's law.
(c) Draw the V-I graph.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Ohm's Law:**

**Statement:** The current flowing through a conductor is directly proportional to the potential difference across its ends, provided temperature and other physical conditions remain constant.

**Formula:**
$$ V \propto I $$
$$ V = IR $$

Where R is resistance (constant for given conductor at constant temperature)

**(b) Activity to Verify:**

**Apparatus:**
- Battery, ammeter, voltmeter
- Resistor, rheostat, switch
- Connecting wires

**Circuit:**
```
         ┌─────Ⓐ─────┐
         │           │
    ─|├──┤           ├───
    Cell │           │   R
         │           │
         └─────Ⓥ─────┘
```

**Procedure:**
1. Connect circuit as shown
2. Close switch, note I and V
3. Vary rheostat, take multiple readings
4. Calculate V/I for each reading
5. V/I is constant (= R)
6. Plot V vs I graph

**Observation:**
- V/I is constant
- Graph is straight line through origin

**Conclusion:**
- V ∝ I
- Ohm's law verified

**(c) V-I Graph:**

```
    V (Volt)
    │
    │      /
    │     /
    │    /  ← Straight line
    │   /   through origin
    │  /
    │ /
    │/
    └───────────── I (Ampere)
    
    Slope = V/I = R (Resistance)
    Constant slope = Constant R
```
</details>

---

**Q52.** (a) Define resistance.
(b) What are the factors affecting resistance?
(c) Derive the formula R = ρL/A.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Resistance:**

**Definition:** Opposition offered by a conductor to the flow of electric current.

**Formula:**
$$ R = \frac{V}{I} $$

**SI Unit:** Ohm (Ω)

**(b) Factors Affecting Resistance:**

1. **Length (L):**
   - R ∝ L
   - Longer wire → More resistance
   - More collisions for electrons

2. **Cross-sectional Area (A):**
   - R ∝ 1/A
   - Thicker wire → Less resistance
   - More space for electron flow

3. **Nature of Material (ρ):**
   - Different materials have different resistivity
   - Conductors: Low ρ
   - Insulators: High ρ

4. **Temperature (T):**
   - For metals: R increases with T
   - Atoms vibrate more, more collisions

**(c) Derivation:**

From experiments:
- R ∝ L (length)
- R ∝ 1/A (area)

Combining:
$$ R \propto \frac{L}{A} $$
$$ R = \rho \frac{L}{A} $$

Where ρ is constant of proportionality called **resistivity**.

**Resistivity:**
$$ \rho = \frac{RA}{L} $$

**Unit:** Ω·m
</details>

---

**Q53.** (a) Derive the formula for equivalent resistance of series combination.
(b) Three resistors of 2 Ω, 3 Ω, and 5 Ω are connected in series. Find equivalent resistance.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Derivation for Series:**

```
Series Circuit:

    ──⚡⚡⚡──⚡⚡⚡──⚡⚡⚡──
       R₁      R₂      R₃
    
    I = I₁ = I₂ = I₃ (same current)
    V = V₁ + V₂ + V₃ (voltage divides)
```

**By Ohm's Law:**
- V₁ = I₁R₁ = IR₁
- V₂ = I₂R₂ = IR₂
- V₃ = I₃R₃ = IR₃

**Total Voltage:**
$$ V = V_1 + V_2 + V_3 $$
$$ V = IR_1 + IR_2 + IR_3 $$
$$ V = I(R_1 + R_2 + R_3) $$

**For Equivalent Resistance Rₛ:**
$$ V = IR_s $$

**Comparing:**
$$ IR_s = I(R_1 + R_2 + R_3) $$
$$ R_s = R_1 + R_2 + R_3 $$

**For n resistors:**
$$ R_s = R_1 + R_2 + R_3 + ... + R_n $$

**(b) Calculation:**

**Given:**
- R₁ = 2 Ω
- R₂ = 3 Ω
- R₃ = 5 Ω

**Series Combination:**
$$ R_s = R_1 + R_2 + R_3 $$
$$ R_s = 2 + 3 + 5 $$
$$ R_s = 10 \text{ Ω} $$

**Answer:** Equivalent resistance = 10 Ω
</details>

---

**Q54.** (a) Derive the formula for equivalent resistance of parallel combination.
(b) Three resistors of 2 Ω, 4 Ω, and 4 Ω are connected in parallel. Find equivalent resistance.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Derivation for Parallel:**

```
Parallel Circuit:

         ┌──⚡⚡⚡──┐
         │   R₁   │
    ─────┼──⚡⚡⚡──┼─────
         │   R₂   │
         ├──⚡⚡⚡──┤
         │   R₃   │
         └────────┘
    
    V = V₁ = V₂ = V₃ (same voltage)
    I = I₁ + I₂ + I₃ (current divides)
```

**By Ohm's Law:**
- I₁ = V₁/R₁ = V/R₁
- I₂ = V₂/R₂ = V/R₂
- I₃ = V₃/R₃ = V/R₃

**Total Current:**
$$ I = I_1 + I_2 + I_3 $$
$$ I = \frac{V}{R_1} + \frac{V}{R_2} + \frac{V}{R_3} $$

**For Equivalent Resistance Rₚ:**
$$ I = \frac{V}{R_p} $$

**Comparing:**
$$ \frac{V}{R_p} = \frac{V}{R_1} + \frac{V}{R_2} + \frac{V}{R_3} $$

**Dividing by V:**
$$ \frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} $$

**For n resistors:**
$$ \frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + ... + \frac{1}{R_n} $$

**(b) Calculation:**

**Given:**
- R₁ = 2 Ω
- R₂ = 4 Ω
- R₃ = 4 Ω

**Parallel Combination:**
$$ \frac{1}{R_p} = \frac{1}{2} + \frac{1}{4} + \frac{1}{4} $$
$$ \frac{1}{R_p} = \frac{2+1+1}{4} = \frac{4}{4} = 1 $$

$$ R_p = 1 \text{ Ω} $$

**Answer:** Equivalent resistance = 1 Ω
</details>

---

**Q55.** (a) State Joule's law of heating.
(b) Derive the formula H = I²Rt.
(c) Give two applications.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Joule's Law:**

**Statement:** The heat produced in a resistor is:
1. Directly proportional to square of current (I²)
2. Directly proportional to resistance (R)
3. Directly proportional to time (t)

**(b) Derivation:**

**Work Done:**
When charge Q moves through potential difference V:
$$ W = QV $$

**Current:**
$$ I = \frac{Q}{t} $$
$$ Q = It $$

**Substituting:**
$$ W = (It)V = VIt $$

**By Ohm's Law:**
$$ V = IR $$

**Therefore:**
$$ W = (IR)It = I^2Rt $$

**Heat Produced:**
Work done appears as heat:
$$ H = W = I^2Rt $$

**Also:**
$$ H = VIt = \frac{V^2t}{R} $$

**(c) Applications:**

**1. Electric Bulb:**
- Tungsten filament
- High resistance
- Glows when current flows
- Light and heat produced

**2. Electric Iron:**
- Nichrome heating element
- Converts electrical energy to heat
- Used for ironing clothes

**3. Electric Heater:**
- Nichrome coil
- Produces heat for warming
- Room heaters, water heaters

**4. Electric Fuse:**
- Low melting alloy wire
- Melts on excess current
- Protects circuit
</details>

---

**Q56.** (a) Define electric power.
(b) Derive the formula P = VI.
(c) An electric bulb is rated 100 W, 220 V. Calculate its resistance.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Electric Power:**

**Definition:** Rate at which electric energy is consumed or produced.

**Formula:**
$$ P = \frac{W}{t} $$

**SI Unit:** Watt (W)

**(b) Derivation:**

**Work Done:**
$$ W = QV $$

**Power:**
$$ P = \frac{W}{t} = \frac{QV}{t} $$

**Current:**
$$ I = \frac{Q}{t} $$

**Therefore:**
$$ P = VI $$

**Also:**
$$ P = I^2R \text{ (using V = IR)} $$
$$ P = \frac{V^2}{R} \text{ (using I = V/R)} $$

**(c) Calculation:**

**Given:**
- P = 100 W
- V = 220 V

**Formula:**
$$ P = \frac{V^2}{R} $$
$$ R = \frac{V^2}{P} $$

**Calculation:**
$$ R = \frac{220^2}{100} $$
$$ R = \frac{48400}{100} $$
$$ R = 484 \text{ Ω} $$

**Answer:** Resistance = 484 Ω
</details>

---

**Q57.** (a) Draw a labelled diagram of domestic electric circuit.
(b) Explain the function of fuse and earthing.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Domestic Circuit Diagram:**

```
DOMESTIC ELECTRIC CIRCUIT

    Main Supply (220V, 50Hz)
         │
         │ Live (Red)
         │
    ┌────┴────┐
    │  Meter  │ ← Records consumption
    └────┬────┘
         │
    ┌────┴────┐
    │  Fuse/  │ ← Safety device
    │   MCB   │
    └────┬────┘
         │
    ┌────┴────┐
    │  Main   │ ← On/Off control
    │ Switch  │
    └────┬────┘
         │
    ┌────┴────┐
    │Parallel │
    │Circuits │
    │         │
    ├──⚡⚡⚡──┤ ← Lights
    ├──⚡⚡⚡──┤ ← Fans
    ├──⚡⚡⚡──┤ ← Appliances
    └─────────┘
         │
         │ Neutral (Black)
         │
    ─────┴─────
    
    Earth Wire (Green)
    Connected to all appliances
```

**(b) Functions:**

**Fuse:**

**Purpose:** Safety device

**Working:**
- Made of tin-lead alloy (low melting point)
- Connected in series
- Melts when excess current flows
- Breaks the circuit
- Prevents damage/fire

**Types:**
- Cartridge fuse
- Rewirable fuse

**Rating:** Selected based on load

**Earthing:**

**Purpose:** Protection from electric shock

**Working:**
- Green wire connected to metallic body
- Other end connected to earth pit
- In case of leakage, current flows to earth
- Fuse blows, circuit breaks
- Prevents shock to user

**Importance:**
- Essential for safety
- Mandatory for all appliances
- Prevents fatal accidents
</details>

---

**Q58.** (a) Why are series arrangements not used for domestic circuits?
(b) Give three reasons.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Series Not Used:**

Domestic circuits use **parallel** arrangement, not series.

**(b) Reasons:**

**1. Different Voltage Requirements:**
- In series, voltage divides
- Each appliance gets less than 220V
- Appliances won't work properly
- In parallel, all get 220V

**2. Independent Operation:**
- In series, all must be ON
- Can't use appliances independently
- In parallel, each has own switch
- Independent operation possible

**3. Current Requirement:**
- Different appliances need different currents
- In series, same current through all
- Some may not work properly
- In parallel, each draws required current

**4. Fault Tolerance:**
- In series, if one fails, all stop
- Entire circuit breaks
- In parallel, others continue working
- Reliable supply

**5. Total Resistance:**
- Series: R increases
- Current decreases
- Power loss increases
- Parallel: R decreases
- Efficient power distribution

**Conclusion:** Parallel arrangement is essential for proper, safe, and efficient domestic power distribution.
</details>

---

**Q59.** (a) Calculate the equivalent resistance when 4 Ω, 8 Ω, and 8 Ω are connected in parallel.
(b) If this combination is connected to 12 V battery, find the total current.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Equivalent Resistance:**

**Given:**
- R₁ = 4 Ω
- R₂ = 8 Ω
- R₃ = 8 Ω

**Parallel Combination:**
$$ \frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} $$
$$ \frac{1}{R_p} = \frac{1}{4} + \frac{1}{8} + \frac{1}{8} $$
$$ \frac{1}{R_p} = \frac{2+1+1}{8} = \frac{4}{8} = \frac{1}{2} $$

$$ R_p = 2 \text{ Ω} $$

**(b) Total Current:**

**Given:**
- V = 12 V
- Rₚ = 2 Ω

**Ohm's Law:**
$$ I = \frac{V}{R} $$
$$ I = \frac{12}{2} $$
$$ I = 6 \text{ A} $$

**Answer:** 
(a) Equivalent resistance = 2 Ω
(b) Total current = 6 A
</details>

---

**Q60.** (a) An electric heater of resistance 10 Ω draws 15 A current. Calculate the heat produced in 2 hours.
(b) Also calculate the power consumed.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Heat Produced:**

**Given:**
- R = 10 Ω
- I = 15 A
- t = 2 hours = 7200 s

**Joule's Law:**
$$ H = I^2Rt $$
$$ H = 15^2 \times 10 \times 7200 $$
$$ H = 225 \times 10 \times 7200 $$
$$ H = 16,200,000 \text{ J} $$
$$ H = 1.62 \times 10^7 \text{ J} $$

**(b) Power Consumed:**

**Formula:**
$$ P = I^2R $$
$$ P = 15^2 \times 10 $$
$$ P = 225 \times 10 $$
$$ P = 2250 \text{ W} $$
$$ P = 2.25 \text{ kW} $$

**Energy in kWh:**
$$ E = P \times t $$
$$ E = 2.25 \times 2 $$
$$ E = 4.5 \text{ kWh} $$

**Answer:** 
(a) Heat = 1.62 × 10⁷ J
(b) Power = 2.25 kW, Energy = 4.5 kWh
</details>

---

**Q61.** (a) Derive the expression for electrical energy consumed.
(b) Calculate the cost of running a 1000 W heater for 10 hours daily for 30 days at ₹5 per kWh.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Electrical Energy:**

**Power:**
$$ P = \frac{W}{t} $$

**Energy:**
$$ W = Pt $$

**Also:**
$$ W = VIt = I^2Rt = \frac{V^2t}{R} $$

**Commercial Unit:**
$$ E = P \times t $$

Where:
- E = Energy (kWh)
- P = Power (kW)
- t = Time (hours)

**Relation:**
$$ 1 \text{ kWh} = 3.6 \times 10^6 \text{ J} $$

**(b) Cost Calculation:**

**Given:**
- P = 1000 W = 1 kW
- t = 10 hours/day × 30 days = 300 hours
- Rate = ₹5 per kWh

**Energy Consumed:**
$$ E = P \times t $$
$$ E = 1 \times 300 $$
$$ E = 300 \text{ kWh} $$

**Cost:**
$$ \text{Cost} = E \times \text{Rate} $$
$$ \text{Cost} = 300 \times 5 $$
$$ \text{Cost} = ₹1500 $$

**Answer:** Cost = ₹1500
</details>

---

**Q62.** (a) Explain the heating effect of electric current with activity.
(b) Name four appliances based on this effect.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Heating Effect:**

**Definition:** When current flows through a conductor, electrical energy is converted to heat energy.

**Activity:**

**Apparatus:**
- Battery, switch, ammeter
- Nichrome wire, thermometer
- Calorimeter with water

**Procedure:**
1. Immerse nichrome wire in water
2. Note initial temperature
3. Pass current for fixed time
4. Note final temperature
5. Calculate temperature rise
6. Repeat for different currents

**Observation:**
- Temperature rises
- More current → More rise
- H ∝ I²

**Conclusion:**
- Electrical energy → Heat energy
- Verified: H = I²Rt

**(b) Appliances:**

**1. Electric Bulb:**
- Tungsten filament
- Glows when heated
- Light and heat

**2. Electric Iron:**
- Nichrome element
- Heats metal base
- Irons clothes

**3. Electric Heater:**
- Nichrome coil
- Radiates heat
- Warms room

**4. Electric Toaster:**
- Nichrome wires
- Toasts bread
- Browning by heat

**5. Electric Kettle:**
- Immersion rod
- Heats water
- Boils quickly

**6. Electric Fuse:**
- Low melting wire
- Melts on overload
- Protects circuit
</details>

---

**Q63.** (a) What is the difference between kilowatt and kilowatt-hour?
(b) An electric motor takes 5 A from 220 V line. Determine the power and energy consumed in 2 hours.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Difference:**

| Kilowatt (kW) | Kilowatt-hour (kWh) |
|---------------|---------------------|
| Unit of power | Unit of energy |
| Rate of energy consumption | Total energy consumed |
| 1 kW = 1000 W | 1 kWh = 3.6 × 10⁶ J |
| Instantaneous value | Accumulated value |
| Like speed of car | Like distance travelled |

**Example:**
- 1 kW device running for 1 hour = 1 kWh
- Power × Time = Energy

**(b) Calculation:**

**Given:**
- I = 5 A
- V = 220 V
- t = 2 hours

**Power:**
$$ P = VI $$
$$ P = 220 \times 5 $$
$$ P = 1100 \text{ W} $$
$$ P = 1.1 \text{ kW} $$

**Energy:**
$$ E = P \times t $$
$$ E = 1.1 \times 2 $$
$$ E = 2.2 \text{ kWh} $$

**In Joules:**
$$ E = 2.2 \times 3.6 \times 10^6 $$
$$ E = 7.92 \times 10^6 \text{ J} $$

**Answer:** 
Power = 1.1 kW, Energy = 2.2 kWh = 7.92 × 10⁶ J
</details>

---

**Q64.** (a) Three resistors of 6 Ω, 6 Ω, and 3 Ω are to be connected to get equivalent resistance of 1.5 Ω. Show the combination.
(b) Verify your answer.

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Combination:**

**Analysis:**
- Required R = 1.5 Ω
- Individual R values: 6 Ω, 6 Ω, 3 Ω
- 1.5 Ω < smallest (3 Ω)
- Must be parallel combination

**Arrangement:**
```
    All three in parallel:
    
         ┌──6Ω──┐
         │      │
    ─────┼──6Ω──┼─────
         │      │
         ├──3Ω──┤
         └──────┘
```

**(b) Verification:**

**Parallel Formula:**
$$ \frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} $$
$$ \frac{1}{R_p} = \frac{1}{6} + \frac{1}{6} + \frac{1}{3} $$
$$ \frac{1}{R_p} = \frac{1+1+2}{6} = \frac{4}{6} = \frac{2}{3} $$

$$ R_p = \frac{3}{2} = 1.5 \text{ Ω} $$

**Verified:** Equivalent resistance = 1.5 Ω ✓

**Answer:** All three resistors in parallel give 1.5 Ω
</details>

---

**Q65.** (a) Explain the advantages of parallel connection over series connection.
(b) Why is it not advisable to connect multiple high-power appliances to a single socket?

<details>
<summary>✓ Show Answer</summary>

**Answer:**

**(a) Advantages of Parallel:**

**1. Same Voltage:**
- All appliances get 220V
- Proper functioning
- Series: Voltage divides

**2. Independent Operation:**
- Each has own switch
- Can use independently
- Series: All must be ON

**3. Current Division:**
- Each draws required current
- No interference
- Series: Same current

**4. Fault Tolerance:**
- If one fails, others work
- Continuous supply
- Series: All stop

**5. Lower Resistance:**
- Total R less than smallest
- Efficient distribution
- Series: R increases

**6. Power Distribution:**
- Each gets full power
- Optimal performance
- Series: Power divides

**(b) Multiple High-Power Appliances:**

**Problem:**

**Current Overload:**
- Each appliance draws current
- Total current = Sum of all
- May exceed socket rating

**Example:**
- Socket rating: 15 A
- AC: 10 A
- Heater: 10 A
- Total: 20 A > 15 A

**Consequences:**

1. **Overheating:**
   - Wires heat up (H ∝ I²)
   - Insulation melts
   - Fire hazard

2. **Fuse Blows:**
   - Excess current
   - Fuse melts
   - Power cut

3. **Voltage Drop:**
   - High current draw
   - Voltage decreases
   - Appliances damaged

4. **Wire Damage:**
   - Overheating
   - Insulation failure
   - Short circuit

**Solution:**
- Use separate circuits
- Distribute load
- Use appropriate rating
- Install MCB for protection
</details>

---

## 6. Exam-Oriented Preparation

### 📝 Important Formulas to Memorize

**Ohm's Law:**
$$ V = IR $$

**Resistance:**
$$ R = \rho \frac{L}{A} $$

**Series Combination:**
$$ R_s = R_1 + R_2 + R_3 $$

**Parallel Combination:**
$$ \frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} $$

**Joule's Law:**
$$ H = I^2Rt $$

**Electric Power:**
$$ P = VI = I^2R = \frac{V^2}{R} $$

**Electric Energy:**
$$ E = Pt $$

---

### 🎯 Expected Question Patterns (CBSE Class 10)

#### 1 Mark Questions (MCQ/Very Short Answer):
- Define terms
- Identify units
- Name materials
- Give examples

#### 2 Mark Questions (Short Answer):
- State laws
- Draw circuits
- Explain phenomena
- Simple calculations

#### 3 Mark Questions (Long Answer):
- Derive formulas
- Numerical problems
- Compare concepts
- Applications

#### 5 Mark Questions (Very Long Answer):
- Complete numericals with reasoning
- Circuit analysis
- Comprehensive explanations
- Multiple concepts

---

### 💡 Exam Tips:

1. ✅ **Write formulas** before substitution
2. ✅ **Convert units** properly (W to kW, s to h)
3. ✅ **Draw circuits** with proper symbols
4. ✅ **Mention units** in final answers
5. ✅ **Show all steps** in calculations
6. ✅ **Use proper symbols** (V, I, R, P)
7. ✅ **Check calculations** for series/parallel
8. ✅ **Practice numericals** regularly

---

### 🔴 Common Mistakes to Avoid:

| Mistake | Correction |
|---------|------------|
| Wrong parallel formula | 1/Rₚ = 1/R₁ + 1/R₂, not Rₚ = R₁ + R₂ |
| Forgetting unit conversion | W to kW for kWh calculation |
| Confusing V-I graph slope | Slope = R for V vs I |
| Wrong Joule's law | H = I²Rt, not IRt |
| Series/parallel confusion | Series: same I, Parallel: same V |
| Power formula | P = VI, not V/I |

---

### 📚 Previous Year Questions (CBSE Pattern)

**Q1 (CBSE 2024):** State Ohm's law.

**Answer:** V ∝ I, V = IR

---

**Q2 (CBSE 2023):** Define 1 volt.

**Answer:** 1 J work in moving 1 C charge

---

**Q3 (CBSE 2023):** What is the SI unit of resistance?

**Answer:** Ohm (Ω)

---

**Q4 (CBSE 2022):** Why is tungsten used for bulb filaments?

**Answer:** High melting point, high resistivity

---

**Q5 (CBSE 2022):** Calculate power if V = 12V, I = 2A.

**Answer:** P = 24 W

---

**Q6 (CBSE 2021):** Draw series circuit diagram.

**Answer:** Resistors end-to-end

---

**Q7 (CBSE 2021):** What is the function of fuse?

**Answer:** Safety device, melts on overload

---

**Q8 (CBSE 2020):** Find R if V = 10V, I = 2A.

**Answer:** R = 5 Ω

---

**Q9 (CBSE 2020):** Why are domestic circuits parallel?

**Answer:** Independent operation, same voltage

---

**Q10 (CBSE 2019):** Define resistivity.

**Answer:** Resistance of unit length and area

---

## 7. Revision Notes

### 📌 Quick Revision Sheet

#### Key Definitions:

| Term | Definition |
|------|------------|
| **Current** | Rate of flow of charge |
| **Potential** | Work done per unit charge |
| **Resistance** | Opposition to current flow |
| **Resistivity** | Property of material |
| **Power** | Rate of energy consumption |
| **Energy** | Total work done |

---

#### Important Formulas:

**Ohm's Law:**
$$ V = IR $$

**Resistance:**
$$ R = \rho \frac{L}{A} $$

**Series:**
$$ R_s = R_1 + R_2 + R_3 $$

**Parallel:**
$$ \frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} $$

**Heating:**
$$ H = I^2Rt $$

**Power:**
$$ P = VI $$

**Energy:**
$$ E = Pt $$

---

#### SI Units:

| Quantity | Unit | Symbol |
|----------|------|--------|
| Current | Ampere | A |
| Voltage | Volt | V |
| Resistance | Ohm | Ω |
| Resistivity | Ohm-meter | Ω·m |
| Power | Watt | W |
| Energy | Joule | J |
| Commercial Energy | kWh | kWh |

---

#### Circuit Symbols:

```
Cell: ─|├─
Battery: ─|├|├─
Switch: ─⚪─
Bulb: ─⊗─
Resistor: ─⚡⚡⚡─
Ammeter: ─Ⓐ─
Voltmeter: ─Ⓥ─
```

---

### 🎓 Final Checklist Before Exam:

- [ ] I know Ohm's law and formula
- [ ] I can calculate series/parallel resistance
- [ ] I understand heating effect
- [ ] I can calculate power and energy
- [ ] I know circuit symbols
- [ ] I can draw circuit diagrams
- [ ] I understand domestic circuits
- [ ] I know safety measures
- [ ] I have practiced all 30 MCQs
- [ ] I have practiced all 20 Short Answer questions
- [ ] I have practiced all 15 Long Answer questions

---

### 📊 Quick Formula Sheet:

**Current:**
$$ I = \frac{Q}{t} $$

**Ohm's Law:**
$$ V = IR $$

**Resistance:**
$$ R = \rho \frac{L}{A} $$

**Series:**
$$ R_s = R_1 + R_2 + R_3 $$

**Parallel:**
$$ \frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} $$

**Heating:**
$$ H = I^2Rt $$

**Power:**
$$ P = VI = I^2R = \frac{V^2}{R} $$

**Energy:**
$$ E = Pt $$
$$ 1 \text{ kWh} = 3.6 \times 10^6 \text{ J} $$

---

**Good luck with your studies! 🌟**

> Remember: Practice numericals and understand circuit connections!

---

**End of Learning Path - Electricity**
