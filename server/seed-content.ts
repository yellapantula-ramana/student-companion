import { query } from './db.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// NCERT Class X Science Chapters
const scienceChapters = [
  {
    title: "Chemical Reactions and Equations",
    subtopics: ["Chemical Equations", "Types of Chemical Reactions", "Oxidation and Reduction", "Effects of Oxidation"],
    difficulty: "Medium"
  },
  {
    title: "Acids, Bases and Salts",
    subtopics: ["Properties of Acids and Bases", "pH Scale", "Salts and their Properties", "Neutralization"],
    difficulty: "Medium"
  },
  {
    title: "Metals and Non-metals",
    subtopics: ["Physical Properties", "Chemical Properties", "Reactivity Series", "Occurrence and Extraction"],
    difficulty: "Medium"
  },
  {
    title: "Carbon and its Compounds",
    subtopics: ["Bonding in Carbon", "Saturated and Unsaturated Compounds", "Nomenclature", "Chemical Properties"],
    difficulty: "Hard"
  },
  {
    title: "Life Processes",
    subtopics: ["Nutrition", "Respiration", "Transportation", "Excretion"],
    difficulty: "Medium"
  },
  {
    title: "Control and Coordination",
    subtopics: ["Nervous System", "Reflex Actions", "Human Brain", "Coordination in Plants"],
    difficulty: "Medium"
  },
  {
    title: "How do Organisms Reproduce",
    subtopics: ["Asexual Reproduction", "Sexual Reproduction", "Reproduction in Humans", "Reproductive Health"],
    difficulty: "Medium"
  },
  {
    title: "Heredity and Evolution",
    subtopics: ["Heredity", "Mendel's Laws", "Sex Determination", "Evolution and Speciation"],
    difficulty: "Hard"
  },
  {
    title: "Light - Reflection and Refraction",
    subtopics: ["Reflection", "Spherical Mirrors", "Refraction", "Lenses"],
    difficulty: "Hard"
  },
  {
    title: "Human Eye and Colourful World",
    subtopics: ["Structure of Eye", "Defects of Vision", "Atmospheric Refraction", "Scattering of Light"],
    difficulty: "Medium"
  },
  {
    title: "Electricity",
    subtopics: ["Electric Current", "Ohm's Law", "Resistance", "Electric Power"],
    difficulty: "Medium"
  },
  {
    title: "Magnetic Effects of Electric Current",
    subtopics: ["Magnetic Field", "Fleming's Rules", "Electric Motor", "Electromagnetic Induction"],
    difficulty: "Hard"
  },
  {
    title: "Sources of Energy",
    subtopics: ["Conventional Sources", "Renewable Sources", "Non-renewable Sources", "Environmental Impact"],
    difficulty: "Easy"
  },
  {
    title: "Our Environment",
    subtopics: ["Ecosystem", "Food Chains and Webs", "Ozone Layer", "Waste Management"],
    difficulty: "Easy"
  },
  {
    title: "Sustainable Management of Natural Resources",
    subtopics: ["Forest Resources", "Water Resources", "Coal and Petroleum", "Conservation"],
    difficulty: "Easy"
  }
];

// NCERT Class X Mathematics Chapters
const mathematicsChapters = [
  {
    title: "Real Numbers",
    subtopics: ["Euclid's Division Lemma", "Fundamental Theorem", "HCF and LCM", "Irrational Numbers"],
    difficulty: "Medium"
  },
  {
    title: "Polynomials",
    subtopics: ["Geometric Meaning", "Relationship between Zeros", "Division Algorithm"],
    difficulty: "Medium"
  },
  {
    title: "Pair of Linear Equations in Two Variables",
    subtopics: ["Graphical Method", "Algebraic Methods", "Cross-Multiplication", "Word Problems"],
    difficulty: "Medium"
  },
  {
    title: "Quadratic Equations",
    subtopics: ["Standard Form", "Solution by Factorization", "Quadratic Formula", "Nature of Roots"],
    difficulty: "Hard"
  },
  {
    title: "Arithmetic Progressions",
    subtopics: ["nth Term", "Sum of Terms", "Properties of AP", "Applications"],
    difficulty: "Medium"
  },
  {
    title: "Triangles",
    subtopics: ["Similarity", "Criteria for Similarity", "Area of Similar Triangles", "Pythagoras Theorem"],
    difficulty: "Hard"
  },
  {
    title: "Coordinate Geometry",
    subtopics: ["Distance Formula", "Section Formula", "Area of Triangle", "Collinearity"],
    difficulty: "Medium"
  },
  {
    title: "Introduction to Trigonometry",
    subtopics: ["Trigonometric Ratios", "Complementary Angles", "Trigonometric Identities", "Applications"],
    difficulty: "Hard"
  },
  {
    title: "Applications of Trigonometry",
    subtopics: ["Heights and Distances", "Angle of Elevation", "Angle of Depression", "Line of Sight"],
    difficulty: "Hard"
  },
  {
    title: "Circles",
    subtopics: ["Tangent to a Circle", "Properties of Tangents", "Number of Tangents", "Length of Tangents"],
    difficulty: "Medium"
  },
  {
    title: "Constructions",
    subtopics: ["Division of Line Segment", "Similar Triangles", "Tangents to Circle"],
    difficulty: "Medium"
  },
  {
    title: "Areas Related to Circles",
    subtopics: ["Perimeter and Area", "Sector and Segment", "Area of Combination"],
    difficulty: "Medium"
  },
  {
    title: "Surface Areas and Volumes",
    subtopics: ["Solids", "Frustum of a Cone", "Conversion of Solids", "Combination of Solids"],
    difficulty: "Hard"
  },
  {
    title: "Statistics",
    subtopics: ["Mean of Grouped Data", "Mode of Grouped Data", "Median of Grouped Data", "Ogive"],
    difficulty: "Medium"
  },
  {
    title: "Probability",
    subtopics: ["Theoretical Probability", "Experimental Probability", "Complementary Events"],
    difficulty: "Easy"
  }
];

// NCERT Class X English (First Flight) Chapters
const englishChapters = [
  {
    title: "A Letter to God",
    subtopics: ["Theme", "Character Analysis", "Literary Devices"],
    difficulty: "Easy"
  },
  {
    title: "Nelson Mandela: Long Walk to Freedom",
    subtopics: ["Biography", "Struggle for Freedom", "Key Events"],
    difficulty: "Medium"
  },
  {
    title: "Two Stories about Flying",
    subtopics: ["His First Flight", "Black Aeroplane", "Theme and Message"],
    difficulty: "Easy"
  },
  {
    title: "From the Diary of Anne Frank",
    subtopics: ["Autobiographical Account", "Holocaust", "Literary Style"],
    difficulty: "Medium"
  },
  {
    title: "The Hundred Dresses - I",
    subtopics: ["Character Study", "Theme of Bullying", "Setting"],
    difficulty: "Easy"
  },
  {
    title: "The Hundred Dresses - II",
    subtopics: ["Character Transformation", "Moral Lesson", "Conclusion"],
    difficulty: "Easy"
  },
  {
    title: "Glimpses of India",
    subtopics: ["A Baker from Goa", "Coorg", "Tea from Assam"],
    difficulty: "Medium"
  },
  {
    title: "Mijbil the Otter",
    subtopics: ["Bond with Animals", "Narrative Style", "Theme"],
    difficulty: "Easy"
  },
  {
    title: "Madam Rides the Bus",
    subtopics: ["Childhood Curiosity", "Character Sketch", "Theme"],
    difficulty: "Easy"
  },
  {
    title: "The Sermon at Benares",
    subtopics: ["Buddhist Philosophy", "Sermon Analysis", "Moral Values"],
    difficulty: "Medium"
  },
  {
    title: "The Proposal",
    subtopics: ["Drama Analysis", "Characters", "Comedy Elements"],
    difficulty: "Medium"
  }
];

// Computer Science Chapters
const computerScienceChapters = [
  {
    title: "Computer Networks",
    subtopics: ["Types of Networks", "Network Topologies", "Internet", "Network Security"],
    difficulty: "Medium"
  },
  {
    title: "Internet and Web Services",
    subtopics: ["WWW", "Email", "Social Media", "E-commerce"],
    difficulty: "Easy"
  },
  {
    title: "Database Concepts",
    subtopics: ["Introduction to DBMS", "RDBMS Concepts", "SQL Basics", "Tables and Queries"],
    difficulty: "Medium"
  },
  {
    title: "HTML and Web Design",
    subtopics: ["HTML Structure", "Tags and Attributes", "Tables", "Forms"],
    difficulty: "Easy"
  },
  {
    title: "Cyber Safety",
    subtopics: ["Cyber Threats", "Password Security", "Digital Footprint", "Cyber Ethics"],
    difficulty: "Easy"
  }
];

async function seedSyllabus() {
  try {
    // Seed Science syllabus
    await query(
      `INSERT INTO syllabus (id, subject, chapters) 
       VALUES ($1, $2, $3) 
       ON CONFLICT (id) DO UPDATE SET 
         subject = $2, 
         chapters = $3, 
         updated_at = CURRENT_TIMESTAMP`,
      ['science', 'Science', JSON.stringify(scienceChapters)]
    );
    console.log('✅ Seeded Science syllabus');

    // Seed Mathematics syllabus
    await query(
      `INSERT INTO syllabus (id, subject, chapters) 
       VALUES ($1, $2, $3) 
       ON CONFLICT (id) DO UPDATE SET 
         subject = $2, 
         chapters = $3, 
         updated_at = CURRENT_TIMESTAMP`,
      ['mathematics', 'Mathematics', JSON.stringify(mathematicsChapters)]
    );
    console.log('✅ Seeded Mathematics syllabus');

    // Seed English syllabus
    await query(
      `INSERT INTO syllabus (id, subject, chapters) 
       VALUES ($1, $2, $3) 
       ON CONFLICT (id) DO UPDATE SET 
         subject = $2, 
         chapters = $3, 
         updated_at = CURRENT_TIMESTAMP`,
      ['english', 'English', JSON.stringify(englishChapters)]
    );
    console.log('✅ Seeded English syllabus');

    // Seed Computer Science syllabus
    await query(
      `INSERT INTO syllabus (id, subject, chapters) 
       VALUES ($1, $2, $3) 
       ON CONFLICT (id) DO UPDATE SET 
         subject = $2, 
         chapters = $3, 
         updated_at = CURRENT_TIMESTAMP`,
      ['computer_science', 'Computer Science', JSON.stringify(computerScienceChapters)]
    );
    console.log('✅ Seeded Computer Science syllabus');

  } catch (error) {
    console.error('❌ Error seeding syllabus:', error);
    throw error;
  }
}

async function seedLearningPaths() {
  try {
    // Seed Science: Chemical Reactions and Equations
    const scienceMdPath = path.join(__dirname, '..', 'seed-content', 'science_01_chemical_reactions.md');

    if (fs.existsSync(scienceMdPath)) {
      const scienceContent = fs.readFileSync(scienceMdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'science_chemical_reactions_and_equations',
          'Science',
          'Chemical Reactions and Equations',
          scienceContent,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Chemical Reactions and Equations');
    } else {
      console.log('⚠️ Science markdown file not found, skipping science learning path seed');
    }

    // Seed Science: Acids, Bases and Salts
    const science02MdPath = path.join(__dirname, '..', 'seed-content', 'science_02_acids_bases_salts.md');

    if (fs.existsSync(science02MdPath)) {
      const science02Content = fs.readFileSync(science02MdPath, 'utf-8').trim();

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'science_acids_bases_salts',
          'Science',
          'Acids, Bases and Salts',
          science02Content,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Acids, Bases and Salts');
    } else {
      console.log('⚠️ Science 02 markdown file not found, skipping acids bases salts learning path seed');
    }

    // Seed Science: Metals and Non-metals
    const science3MdPath = path.join(__dirname, '..', 'seed-content', 'science_03_metals_and_non_metals.md');

    if (fs.existsSync(science3MdPath)) {
      const science3Content = fs.readFileSync(science3MdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'science_metals_and_non_metals',
          'Science',
          'Metals and Non-metals',
          science3Content,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Metals and Non-metals');
    } else {
      console.log('⚠️ Science 03 markdown file not found, skipping metals and non-metals learning path seed');
    }

    // Seed Science: Carbon and its Compounds
    const science4MdPath = path.join(__dirname, '..', 'seed-content', 'science_04_carbon_and_its_compounds.md');

    if (fs.existsSync(science4MdPath)) {
      const science4Content = fs.readFileSync(science4MdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'science_carbon_and_its_compounds',
          'Science',
          'Carbon and its Compounds',
          science4Content,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Carbon and its Compounds');
    } else {
      console.log('⚠️ Science 04 markdown file not found, skipping carbon and its compounds learning path seed');
    }

    // Seed Science: Life Processes
    const science5MdPath = path.join(__dirname, '..', 'seed-content', 'science_05_life_processes.md');

    if (fs.existsSync(science5MdPath)) {
      const science5Content = fs.readFileSync(science5MdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'science_life_processes',
          'Science',
          'Life Processes',
          science5Content,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Life Processes');
    } else {
      console.log('⚠️ Science 05 markdown file not found, skipping life processes learning path seed');
    }

    // Seed Science: Control and Coordination
    const science6MdPath = path.join(__dirname, '..', 'seed-content', 'science_06_control_and_coordination.md');

    if (fs.existsSync(science6MdPath)) {
      const science6Content = fs.readFileSync(science6MdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'science_control_and_coordination',
          'Science',
          'Control and Coordination',
          science6Content,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Control and Coordination');
    } else {
      console.log('⚠️ Science 06 markdown file not found, skipping control and coordination learning path seed');
    }

    // Seed Science: How do Organisms Reproduce
    const science7MdPath = path.join(__dirname, '..', 'seed-content', 'science_07_how_do_organisms_reproduce.md');

    if (fs.existsSync(science7MdPath)) {
      const science7Content = fs.readFileSync(science7MdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'science_how_do_organisms_reproduce',
          'Science',
          'How do Organisms Reproduce',
          science7Content,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: How do Organisms Reproduce');
    } else {
      console.log('⚠️ Science 07 markdown file not found, skipping how do organisms reproduce learning path seed');
    }

    // Seed Science: Heredity and Evolution
    const science8MdPath = path.join(__dirname, '..', 'seed-content', 'science_08_heredity_and_evolution.md');

    if (fs.existsSync(science8MdPath)) {
      const science8Content = fs.readFileSync(science8MdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'science_heredity_and_evolution',
          'Science',
          'Heredity and Evolution',
          science8Content,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Heredity and Evolution');
    } else {
      console.log('⚠️ Science 08 markdown file not found, skipping heredity and evolution learning path seed');
    }

    // Seed Science: Light - Reflection and Refraction
    const science9MdPath = path.join(__dirname, '..', 'seed-content', 'science_09_light_reflection_and_refraction.md');

    if (fs.existsSync(science9MdPath)) {
      const science9Content = fs.readFileSync(science9MdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'science_light_reflection_and_refraction',
          'Science',
          'Light - Reflection and Refraction',
          science9Content,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Light - Reflection and Refraction');
    } else {
      console.log('⚠️ Science 09 markdown file not found, skipping light reflection and refraction learning path seed');
    }

    // Seed Science: The Human Eye and the Colourful World
    const science10MdPath = path.join(__dirname, '..', 'seed-content', 'science_10_human_eye_and_colourful_world.md');

    if (fs.existsSync(science10MdPath)) {
      const science10Content = fs.readFileSync(science10MdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'science_human_eye_and_colourful_world',
          'Science',
          'The Human Eye and the Colourful World',
          science10Content,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: The Human Eye and the Colourful World');
    } else {
      console.log('⚠️ Science 10 markdown file not found, skipping human eye learning path seed');
    }

    // Seed Science: Electricity
    const science11MdPath = path.join(__dirname, '..', 'seed-content', 'science_11_electricity.md');

    if (fs.existsSync(science11MdPath)) {
      const science11Content = fs.readFileSync(science11MdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'science_electricity',
          'Science',
          'Electricity',
          science11Content,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Electricity');
    } else {
      console.log('⚠️ Science 11 markdown file not found, skipping electricity learning path seed');
    }

    // Seed Science: Magnetic Effects of Electric Current (Chapter 12)
    const science12MdPath = path.join(__dirname, '..', 'seed-content', 'science_12_magnetic_effects_electric_current.md');

    if (fs.existsSync(science12MdPath)) {
      const science12Content = fs.readFileSync(science12MdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'science_magnetic_effects_of_electric_current',
          'Science',
          'Magnetic Effects of Electric Current',
          science12Content,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Magnetic Effects of Electric Current');
    } else {
      console.log('⚠️ Science 12 markdown file not found, skipping magnetic effects learning path seed');
    }

    // Seed Mathematics: Real Numbers
    const mathMdPath = path.join(__dirname, '..', 'seed-content', 'mathematics_01_real_numbers.md');

    if (fs.existsSync(mathMdPath)) {
      const mathContent = fs.readFileSync(mathMdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'mathematics_real_numbers',
          'Mathematics',
          'Real Numbers',
          mathContent,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Real Numbers');
    } else {
      console.log('⚠️ Mathematics markdown file not found, skipping mathematics learning path seed');
    }

    // Seed Mathematics: Polynomials
    const mathPolyMdPath = path.join(__dirname, '..', 'seed-content', 'mathematics_02_polynomials.md');

    if (fs.existsSync(mathPolyMdPath)) {
      const mathPolyContent = fs.readFileSync(mathPolyMdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'mathematics_polynomials',
          'Mathematics',
          'Polynomials',
          mathPolyContent,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Polynomials');
    } else {
      console.log('⚠️ Mathematics Polynomials markdown file not found, skipping mathematics polynomials learning path seed');
    }

    // Seed Mathematics: Pair of Linear Equations in Two Variables
    const mathLinearMdPath = path.join(__dirname, '..', 'seed-content', 'mathematics_03_linear_equations_two_variables.md');

    if (fs.existsSync(mathLinearMdPath)) {
      const mathLinearContent = fs.readFileSync(mathLinearMdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'mathematics_pair_of_linear_equations_in_two_variables',
          'Mathematics',
          'Pair of Linear Equations in Two Variables',
          mathLinearContent,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Pair of Linear Equations in Two Variables');
    } else {
      console.log('⚠️ Mathematics Linear Equations markdown file not found, skipping mathematics linear equations learning path seed');
    }

    // Seed Mathematics: Quadratic Equations
    const mathQuadMdPath = path.join(__dirname, '..', 'seed-content', 'mathematics_04_quadratic_equations.md');

    if (fs.existsSync(mathQuadMdPath)) {
      const mathQuadContent = fs.readFileSync(mathQuadMdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'mathematics_quadratic_equations',
          'Mathematics',
          'Quadratic Equations',
          mathQuadContent,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Quadratic Equations');
    } else {
      console.log('⚠️ Mathematics Quadratic Equations markdown file not found, skipping mathematics quadratic equations learning path seed');
    }

    // Seed Mathematics: Arithmetic Progressions
    const mathAPMdPath = path.join(__dirname, '..', 'seed-content', 'mathematics_05_arithmetic_progressions.md');

    if (fs.existsSync(mathAPMdPath)) {
      const mathAPContent = fs.readFileSync(mathAPMdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'mathematics_arithmetic_progressions',
          'Mathematics',
          'Arithmetic Progressions',
          mathAPContent,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Arithmetic Progressions');
    } else {
      console.log('⚠️ Mathematics Arithmetic Progressions markdown file not found, skipping mathematics AP learning path seed');
    }

    // Seed Mathematics: Triangles
    const mathTrianglesMdPath = path.join(__dirname, '..', 'seed-content', 'mathematics_06_triangles.md');

    if (fs.existsSync(mathTrianglesMdPath)) {
      const mathTrianglesContent = fs.readFileSync(mathTrianglesMdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'mathematics_triangles',
          'Mathematics',
          'Triangles',
          mathTrianglesContent,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Triangles');
    } else {
      console.log('⚠️ Mathematics Triangles markdown file not found, skipping mathematics triangles learning path seed');
    }

    // Seed Mathematics: Coordinate Geometry
    const mathCoordGeoMdPath = path.join(__dirname, '..', 'seed-content', 'mathematics_07_coordinate_geometry.md');

    if (fs.existsSync(mathCoordGeoMdPath)) {
      const mathCoordGeoContent = fs.readFileSync(mathCoordGeoMdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'mathematics_coordinate_geometry',
          'Mathematics',
          'Coordinate Geometry',
          mathCoordGeoContent,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Coordinate Geometry');
    } else {
      console.log('⚠️ Mathematics Coordinate Geometry markdown file not found, skipping mathematics coordinate geometry learning path seed');
    }

    // Seed Mathematics: Introduction to Trigonometry (Chapter 8)
    const mathTrigMdPath = path.join(__dirname, '..', 'seed-content', 'mathematics_08_introduction_to_trigonometry.md');

    if (fs.existsSync(mathTrigMdPath)) {
      const mathTrigContent = fs.readFileSync(mathTrigMdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'mathematics_introduction_to_trigonometry',
          'Mathematics',
          'Introduction to Trigonometry',
          mathTrigContent,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Introduction to Trigonometry');
    } else {
      console.log('⚠️ Mathematics Introduction to Trigonometry markdown file not found, skipping mathematics trigonometry learning path seed');
    }

    // Seed Mathematics: Applications of Trigonometry (Chapter 9)
    const mathAppTrigMdPath = path.join(__dirname, '..', 'seed-content', 'mathematics_09_applications_of_trigonometry.md');

    if (fs.existsSync(mathAppTrigMdPath)) {
      const mathAppTrigContent = fs.readFileSync(mathAppTrigMdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'mathematics_applications_of_trigonometry',
          'Mathematics',
          'Applications of Trigonometry',
          mathAppTrigContent,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Applications of Trigonometry');
    } else {
      console.log('⚠️ Mathematics Applications of Trigonometry markdown file not found, skipping mathematics applications of trigonometry learning path seed');
    }

    // Seed Mathematics: Circles (Chapter 10)
    const mathCirclesMdPath = path.join(__dirname, '..', 'seed-content', 'mathematics_10_circles.md');

    if (fs.existsSync(mathCirclesMdPath)) {
      const mathCirclesContent = fs.readFileSync(mathCirclesMdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'mathematics_circles',
          'Mathematics',
          'Circles',
          mathCirclesContent,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Circles');
    } else {
      console.log('⚠️ Mathematics Circles markdown file not found, skipping mathematics circles learning path seed');
    }

    // Seed Mathematics: Constructions (Chapter 11)
    const mathConstructionsMdPath = path.join(__dirname, '..', 'seed-content', 'mathematics_11_constructions.md');

    if (fs.existsSync(mathConstructionsMdPath)) {
      const mathConstructionsContent = fs.readFileSync(mathConstructionsMdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'mathematics_constructions',
          'Mathematics',
          'Constructions',
          mathConstructionsContent,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Constructions');
    } else {
      console.log('⚠️ Mathematics Constructions markdown file not found, skipping mathematics constructions learning path seed');
    }

    // Seed Mathematics: Areas Related to Circles (Chapter 12)
    const mathAreasMdPath = path.join(__dirname, '..', 'seed-content', 'mathematics_12_areas_related_to_circles.md');

    if (fs.existsSync(mathAreasMdPath)) {
      const mathAreasContent = fs.readFileSync(mathAreasMdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'mathematics_areas_related_to_circles',
          'Mathematics',
          'Areas Related to Circles',
          mathAreasContent,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Areas Related to Circles');
    } else {
      console.log('⚠️ Mathematics Areas Related to Circles markdown file not found, skipping mathematics areas learning path seed');
    }

    // Seed Mathematics: Surface Areas and Volumes (Chapter 13)
    const mathVolumesMdPath = path.join(__dirname, '..', 'seed-content', 'mathematics_13_surface_areas_and_volumes.md');

    if (fs.existsSync(mathVolumesMdPath)) {
      const mathVolumesContent = fs.readFileSync(mathVolumesMdPath, 'utf-8');

      await query(
        `INSERT INTO learning_paths (id, subject, chapter, content, pdf_url, is_generated)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (id) DO UPDATE SET
           content = $4,
           is_generated = $6,
           created_at = CURRENT_TIMESTAMP`,
        [
          'mathematics_surface_areas_and_volumes',
          'Mathematics',
          'Surface Areas and Volumes',
          mathVolumesContent,
          '',
          true
        ]
      );
      console.log('✅ Seeded learning path: Surface Areas and Volumes');
    } else {
      console.log('⚠️ Mathematics Surface Areas and Volumes markdown file not found, skipping mathematics volumes learning path seed');
    }
  } catch (error) {
    console.error('❌ Error seeding learning paths:', error);
    throw error;
  }
}

export async function runSeedContent() {
  console.log('\n🌱 Starting database seeding...\n');

  try {
    await seedSyllabus();
    await seedLearningPaths();

    console.log('\n✅ Seeding completed successfully!');
    return true;
  } catch (error) {
    console.error('\n❌ Seeding failed:', error);
    return false;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runSeedContent().then((success) => {
    process.exit(success ? 0 : 1);
  });
}
