'use client'

import { useState, useEffect, useCallback } from 'react'

// Pre-loaded translations to avoid async loading issues
const defaultTranslations = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      staff: "Staff",
      contact: "Contact"
    },
    hero: {
      title: "ALUMETAL",
      subtitle: "Expert Aluminum & Architectural Facades",
      description: "Your trusted partner in aluminum, glass, and metalwork solutions. Delivering excellence in every project with precision and innovation.",
      getStarted: "Get Started",
      learnMore: "Learn More"
    },
    about: {
      title: "About Alumetal",
      subtitle: "Excellence in Aluminum & Glass Solutions",
      description: "At Alumetal, we are dedicated to providing superior aluminum and glass solutions for residential, commercial, and industrial projects. Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner in the industry.",
      whoWeAreTitle: "WHO WE ARE",
      whoWeAreDesc1: "Welcome to Alumetal, your trusted partner in aluminum, glass, and metalwork solutions. With years of experience, we specialize in designing and delivering high-quality aluminum facades, cladding, structural systems, and advanced architectural finishes that combine beauty and durability.",
      whoWeAreDesc2: "At Alumetal, we provide complete solutions in alumetal, glass, steel, and architectural aluminum systems. Our team is dedicated to delivering excellence in everything we do – from concept to execution.",
      ourServices: "OUR SERVICES",
      weManufacture: "WE MANUFACTURE & INSTALL",
      ourCapabilities: "OUR CAPABILITIES INCLUDE",
      servicesList: [
        "Premium aluminum doors and windows",
        "Weather-resistant aluminum window shutters", 
        "Modern architectural facades and curtain walls",
        "Stylish and durable glass balustrades and stair railings",
        "Cladding systems for modern buildings",
        "Custom glass partitions using tempered and securit glass"
      ],
      capabilitiesList: [
        "Alumetal fabrication",
        "Full-service aluminum and glass installation",
        "Tailored cladding and facade systems",
        "Interior and exterior metalwork including iron details",
        "High-precision tempered glass and securit installations"
      ],
      servicesFooter: "Whether you're building a residential villa or a commercial tower, we tailor our aluminum and metal solutions to your specific vision.",
      ceoMessage: "CEO MESSAGE",
      ceoQuote: "We always strive to pioneer in our field and work hard to provide high quality products and services that meet the needs of our customers. We also pay great attention to developing the skills of the work team in order to ensure excellence in performance and maintain the trust of our valued customers with whom we work closely to ensure that we meet their expectations and achieve the best results. We always strive to provide excellent service and innovative solutions to achieve full satisfaction for our customers. Thus, we extend a word of thanks and appreciation to the work team that works diligently every day to achieve the goals of our company and its vision to be the leader in our field.",
      whyChooseUs: "WHY CHOOSE US",
      whyChooseCards: [
        {
          title: "Premium Materials",
          description: "We use premium aluminum and tempered glass (securit) for long-term durability"
        },
        {
          title: "Aesthetic & Functional", 
          description: "Our designs combine aesthetics with functionality"
        },
        {
          title: "Expertise",
          description: "Expertise in doors, windows, facades, cladding, glass, and structural aluminum"
        },
        {
          title: "Quality Installation",
          description: "High-quality installation of balustrades, shutters, and architectural features"
        },
        {
          title: "Strict Standards",
          description: "We follow strict standards in every step of our process"
        },
        {
          title: "Trusted Team",
          description: "We have a strong cadre with practical experience and high qualifications"
        }
      ],
      resources: "RESOURCES",
      resourcesSubtitle: "Understanding the role of aluminum, glass, and architectural facades in shaping modern construction in Saudi Arabia",
      vision2030: "SAUDI VISION 2030",
      vision2030Desc1: "The Kingdom's strategic vision focuses on innovation, sustainability, and smart construction. These principles align closely with Alumetal's commitment to delivering high-performance aluminum facades, glass cladding, and structural curtain wall systems.",
      vision2030Desc2: "Our advanced alumetal and glass solutions contribute to the modernization of cities and iconic architectural landmarks across the Kingdom.",
      glassInnovations: "GLASS INNOVATIONS",
      glassInnovationsDesc1: "Discover the latest and newest advancements in tempered glass (securit), architectural glazing, and eco-friendly glass technologies.",
      glassInnovationsDesc2: "Alumetal integrates these innovations into projects such as cladded facades, glass railings, and energy-efficient windows and doors to meet modern performance and green building design standards.",
      futureVision: "OUR VISION FOR THE FUTURE",
      futureVisionDesc: "We aim to lead the market in aluminum, metal, and glass innovation in the region. Through cutting-edge technologies and a commitment to quality, we help architects and developers bring their projects to life with standout architectural facades, curtain walls, and customized aluminum systems.",
      ctaTitle: "LET'S BUILD SOMETHING REMARKABLE",
      ctaDescription: "Contact us now to request a quote or consultation! Our work stands out across residential and commercial projects, thanks to our solid reputation and commitment to innovation.",
      contactUsNow: "CONTACT US NOW",
      ourServices: "OUR SERVICES",
      trustedByArchitects: "TRUSTED BY LEADING ARCHITECTS",
      trustedByArchitectsDesc: "We've partnered with architects, builders, and engineers to create long-lasting aluminum and glass structures. We have a strong cadre with practical experience and high qualifications."
    },
    services: {
      title: "Our Services",
      subtitle: "Advanced Aluminum, Glass, and Metal Systems",
      description: "Complete solutions for residential, commercial, and industrial projects",
      whyChooseUs: "WHY CHOOSE ALUMETAL",
      overviewDescription: "At Alumetal, we provide complete aluminum and glass solutions for residential, commercial, and industrial projects. Our products combine modern design, durability, and excellent performance, ensuring every client receives the perfect balance of style and function.",
      whatWeOffer: "WHAT WE OFFER",
      windowsSystems: "Windows Systems",
      windowsDesc: "We provide aluminum sliding, hinged, tilt-hinged, and fixed windows — stylish, durable, and energy-efficient for any space.",
      windowsFeatures: [
        "Aluminum sliding windows",
        "Hinged windows",
        "Tilt-hinged windows", 
        "Fixed windows",
        "Energy-efficient designs",
        "Custom sizing available"
      ],
      doorsSystems: "Doors Systems",
      doorsDesc: "We offer a variety of doors to suit every architectural style: Hinged Doors System – Timeless and secure. Bathroom Doors System – Moisture-resistant and stylish. Sliding Doors System – Modern and space-saving. Automatic Doors System – Perfect for commercial spaces. Folding Doors System – Flexible and elegant for large openings.",
      doorsFeatures: [
        "Hinged Doors System – Timeless and secure",
        "Bathroom Doors System – Moisture-resistant and stylish",
        "Sliding Doors System – Modern and space-saving",
        "Automatic Doors System – Perfect for commercial spaces",
        "Folding Doors System – Flexible and elegant for large openings"
      ],
      frontsFacades: "Fronts and Facades",
      frontsDesc: "Create a bold first impression with our facade systems: Structural Fronts System – Sleek and strong. Curtain Wall Fronts System – Modern glass walls for maximum light. Frameless Fronts System – Minimalist design with uninterrupted views.",
      frontsFeatures: [
        "Structural Fronts System – Sleek and strong",
        "Curtain Wall Fronts System – Modern glass walls for maximum light",
        "Frameless Fronts System – Minimalist design with uninterrupted views",
        "Custom architectural solutions",
        "Weather-resistant materials"
      ],
      shutterSystems: "Shutter Systems",
      shutterDesc: "We deliver high-quality shutters for security and comfort: Manual Roller Shutter System – Reliable and easy to use. Electric Roller Shutter System with Switch – Simple wall control. Roller Shutter with Remote Control – Operate from anywhere. Smart Home Roller Shutter System – Full automation integration. Smart Curtain System – Perfect for modern living spaces.",
      shutterFeatures: [
        "Manual Roller Shutter System – Reliable and easy to use",
        "Electric Roller Shutter System with Switch – Simple wall control",
        "Roller Shutter with Remote Control – Operate from anywhere",
        "Smart Home Roller Shutter System – Full automation integration",
        "Smart Curtain System – Perfect for modern living spaces"
      ],
      claddingSystems: "Cladding Systems",
      claddingDesc: "Our fire-resistant cladding panels provide both safety and beauty, perfect for commercial and residential projects.",
      claddingFeatures: [
        "Fire-resistant materials",
        "Weather protection",
        "Aesthetic appeal",
        "Commercial applications",
        "Residential solutions",
        "Custom panel designs"
      ],
      showerSystems: "Shower Systems",
      showerDesc: "Elegant and functional shower designs: Hinged Shower System – Classic glass door. Sliding Shower System – Smooth gliding panels. Fixed Shower System – Minimalist and stylish.",
      showerFeatures: [
        "Hinged Shower System – Classic glass door",
        "Sliding Shower System – Smooth gliding panels",
        "Fixed Shower System – Minimalist and stylish",
        "Tempered glass construction",
        "Custom configurations"
      ],
      handrailSystems: "Handrail Systems",
      handrailDesc: "Safety meets style with our handrails: Suspended Glass Railing System – Transparent elegance. Metal Handrail Systems – Durable and modern.",
      handrailFeatures: [
        "Suspended Glass Railing System – Transparent elegance",
        "Metal Handrail Systems – Durable and modern",
        "Custom designs available",
        "Safety compliance",
        "Modern aesthetics"
      ],
      whyChooseUs: "WHY CHOOSE ALUMETAL",
      whyChooseDesc: "With years of experience in aluminum fabrication, we ensure every project meets the highest quality standards. We work closely with clients to customize each solution, ensuring it fits their needs and budget.",
      orderNow: "ORDER NOW",
      learnMoreAboutUs: "Learn more About Us",
      aboutUs: "ABOUT US",
      contactUsForConsultation: "Contact us for a free consultation",
      freeConsultation: "FREE CONSULTATION",
      exploreOurProjects: "EXPLORE OUR PROJECTS",
      discoverOurLatest: "Discover our latest completed projects and see the quality of our work in action. From residential villas to commercial towers, we deliver excellence in every project.",
      viewProjects: "VIEW PROJECTS",
      contactUs: "CONTACT US"
    },
    projects: {
      title: "Our Projects",
      subtitle: "Showcasing Alumetal Excellence",
      description: "High-performance aluminum, glass, and cladding systems",
      ourPortfolio: "OUR PORTFOLIO",
      portfolioDescription: "At Alumetal, our portfolio of completed projects reflects our mastery in executing high-performance aluminum, glass, and cladding systems. Our expertise spans structural curtain wall, doors, windows, and complex facade solutions that blend aesthetic precision with functional excellence.",
      projectCategories: "PROJECT CATEGORIES",
      allProjects: "All Projects",
      claddingSystems: "Cladding Systems",
      aluminumFacades: "Aluminum Facades",
      windowsSystems: "Windows Systems",
      doorsSystems: "Doors Systems",
      shutterSystems: "Shutter Systems",
      handrailSystems: "Handrail Systems",
      projects: "projects",
      whyTheseProjects: "WHY THESE PROJECTS",
      matter: "Matter",
      leadershipInCurtainWall: "Leadership in Curtain Wall",
      leadershipDescription: "Demonstrate our leadership in curtain wall and aluminum facade systems.",
      advancedIntegration: "Advanced Integration",
      integrationDescription: "Showcase successful integration of advanced aluminum and glass materials.",
      precisionDesign: "Precision Design",
      precisionDescription: "Highlight precision in both cladding and glazed front design.",
      whyChooseAlumetal: "WHY CHOOSE ALUMETAL",
      forYourProject: "for Your Project?",
      provenExperience: "Proven Experience",
      provenExperienceDesc: "Proven experience in large-scale structural systems, façades, glass, and aluminum works.",
      qualityCraftsmanship: "Quality Craftsmanship",
      qualityCraftsmanshipDesc: "High-quality craftsmanship from conceptual design to final installation.",
      advancedTechnology: "Advanced Technology",
      advancedTechnologyDesc: "Capability to handle complex facade challenges using cutting-edge cladding technology.",
      getInTouch: "GET IN TOUCH",
      readyToBring: "Ready to bring your architectural vision to life?",
      callUsNow: "CALL US NOW",
      emailUs: "EMAIL US",
      phone: "PHONE",
      email: "EMAIL",
      // Project data translations
      claddingProject1: "Completed alumetal cladding system project",
      claddingProject1Desc: "Advanced cladding system featuring fire-resistant panels and modern architectural design.",
      claddingProject1Features: ["Fire-resistant materials", "Weather protection", "Modern aesthetics", "Commercial application"],
      windowsProject1: "Completed alumetal aluminum Windows System project",
      windowsProject1Desc: "Energy-efficient aluminum windows with advanced glazing technology.",
      windowsProject1Features: ["Energy efficiency", "Durable construction", "Custom sizing", "Modern design"],
      handrailProject1: "Completed alumetal handrail system project",
      handrailProject1Desc: "Elegant glass and metal handrail systems combining safety with style.",
      handrailProject1Features: ["Safety compliance", "Glass construction", "Modern aesthetics", "Durable materials"],
      doorsProject1: "Completed alumetal doors system project",
      doorsProject1Desc: "Premium aluminum doors with advanced security and weather resistance.",
      doorsProject1Features: ["Security features", "Weather resistance", "Premium materials", "Custom design"],
      facadeProject1: "Completed alumetal aluminum facade project",
      facadeProject1Desc: "Stunning aluminum facade system showcasing modern architectural excellence.",
      facadeProject1Features: ["Architectural design", "Structural integrity", "Weather protection", "Aesthetic appeal"],
      shutterProject1: "Completed alumetal shutter system project",
      shutterProject1Desc: "Advanced shutter systems with smart control and security features.",
      shutterProject1Features: ["Smart controls", "Security features", "Weather resistance", "Automated operation"],
      showerProject1: "Alumetal Windows and Doors Services - Glass Shower",
      showerProject1Desc: "Elegant glass shower systems combining functionality with modern design.",
      showerProject1Features: ["Tempered glass", "Water resistance", "Modern design", "Easy maintenance"],
      saudiArabia: "Saudi Arabia",
      gallery: "Gallery",
      galleryDescription: "Explore our portfolio of completed projects showcasing excellence in aluminum, glass, and architectural solutions",
      viewGallery: "View Gallery",
      projectGallery: "Project Gallery",
      allProjects: "All Projects",
      featuredProjects: "Featured Projects"
    },
    staff: {
      title: "Our Working Staff",
      subtitle: "The Bedrock of Alumetal's Excellence",
      description: "Highly skilled professionals with international experience",
      ourTeam: "OUR TEAM",
      teamDescription: "Alumetal prides itself on a highly skilled working staff whose expertise is foundational to our success. Our team's international experience in aluminum, glass, cladding, curtain wall, structural systems, doors, and windows ensures that each project meets the highest standards of quality and craftsmanship.",
      teamSubtitle: "Alumetal Aluminum and glass facade project designed with leading architects",
      meetTheExperts: "MEET THE EXPERTS",
      expertsSubtitle: "We have brought together a distinguished cadre of professionals, spanning various specialized roles",
      engineeringTitle: "Engineering & Design Experts",
      engineeringDesc: "From conceptualizing curtain wall fronts to detailing doors, windows, and cladding systems, our engineers turn ideas into reality.",
      engineeringFeatures: [
        "Curtain wall design and engineering",
        "Structural system calculations", 
        "Door and window specifications",
        "Cladding system development",
        "Technical drawings and documentation",
        "Quality control standards"
      ],
      productionTitle: "Production Specialists",
      productionDesc: "Our manufacturing team transforms raw aluminum and glass into robust components, including structural systems and stylish facade panels.",
      productionFeatures: [
        "Aluminum fabrication expertise",
        "Glass processing and cutting",
        "Structural component manufacturing",
        "Facade panel production",
        "Precision machining",
        "Quality assurance protocols"
      ],
      installationTitle: "Installation & Fittings Crew",
      installationDesc: "Precision and care define our on-site teams handling assemblies of doors, windows, shutters, and handrails.",
      installationFeatures: [
        "Professional installation services",
        "Door and window assembly",
        "Shutter system installation",
        "Handrail and railing fitting",
        "On-site project management",
        "Safety compliance standards"
      ],
      qualityTitle: "Quality Assurance Team",
      qualityDesc: "Ensuring each product—whether a glass partition or a clad facade—passes rigorous checks before reaching you.",
      qualityFeatures: [
        "Comprehensive quality testing",
        "Material inspection protocols",
        "Performance verification",
        "Safety standard compliance",
        "Final product validation",
        "Continuous improvement processes"
      ],
      logisticsTitle: "Logistics & Delivery Coordinators",
      logisticsDesc: "Skilled in timely dispatch and installation across residential and commercial environments.",
      logisticsFeatures: [
        "Supply chain management",
        "Timely delivery coordination",
        "Installation scheduling",
        "Project timeline management",
        "Client communication",
        "Resource optimization"
      ],
      whyOurPeople: "WHY OUR PEOPLE",
      makeTheDifference: "Make the Difference",
      deepExpertise: "Deep Expertise",
      deepExpertiseDesc: "A blend of local industry knowledge and global best practices in aluminum and glass systems.",
      collaborativeApproach: "Collaborative Approach",
      collaborativeApproachDesc: "Working closely with clients from conceptual stages to final installations of cladding, doors, and windows.",
      relentlessQuality: "Relentless Quality",
      relentlessQualityDesc: "Every facet—from material selection to execution—is meticulously reviewed for durability and design excellence.",
      clientCentricFocus: "Client-Centric Focus",
      clientCentricFocusDesc: "Tailored solutions that adapt to project needs, whether for innovative facades or functional interior systems.",
      quickContact: "QUICK CONTACT",
      needExpertAdvice: "Need expert advice or ready to start your project?",
      getInTouch: "Get in Touch",
      discoverMore: "Discover More from Alumetal",
      curiousAboutOurStory: "Curious about our story or services? Explore:",
      aboutUsLink: "About Us — Learn about our vision and legacy in aluminum and glass",
      servicesLink: "Services — Detailed breakdown of our offerings from cladding and curtains to windows, doors, and more",
      projectsLink: "Projects — See our real-world installations in action"
    },
    contact: {
      title: "Contact Alumetal",
      subtitle: "Get in Touch with Our Experts",
      formDescription: "We're here to help with your aluminum and glass needs",
      phone: "Phone",
      email: "Email",
      address: "Address",
      whatsapp: "WhatsApp",
      addressText: "Dammam, Support Services District, Second Industrial City",
      name: "Name",
      subject: "Subject",
      message: "Message",
      phoneNumber: "Phone Number",
      sendMessage: "Send Message",
      stayInTouch: "Stay in Touch",
      followUs: "Follow Us",
      findUs: "Find Us",
      interactiveMap: "Interactive Map",
      whyChooseUs: "Why Choose Alumetal",
      whyChooseDesc: "Proven experience in large-scale structural systems, façades, glass, and aluminum works. High-quality craftsmanship from conceptual design to final installation.",
      learnMoreAboutUs: "Learn more About Us",
      contactUsForConsultation: "Contact us for a free consultation",
      exploreProjects: "Explore our latest completed projects",
      viewProjects: "View Projects",
      namePlaceholder: "Your full name",
      emailPlaceholder: "Egyptian.heart@hotmail.com",
      subjectPlaceholder: "Subject of your message",
      phonePlaceholder: "Your phone number",
      messagePlaceholder: "Tell us how we can help you...",
      mapLocation1: "Dammam, Support Services District",
      mapLocation2: "Second Industrial City",
      facebook: "Facebook",
      twitter: "Twitter", 
      instagram: "Instagram",
      linkedin: "LinkedIn",
      youtube: "YouTube"
    },
    footer: {
      quickLinks: "Quick Links",
      ourServices: "Our Services",
      stayConnected: "Stay Connected",
      followUs: "Follow Us"
    },
    common: {
      learnMore: "Learn More",
      contactUs: "Contact Us",
      getInTouch: "Get in Touch",
      viewAll: "View All"
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
      errorCode: "ERROR CODE:",
      goHome: "Go to Homepage",
      goBack: "Go Back",
      quickLinks: "Quick Links:",
      tip: "Tip: Make sure the URL is correct, or use the navigation menu to find what you're looking for."
    },
    admin: {
      login: "Admin Login",
      register: "Admin Register",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      loginButton: "Login",
      registerButton: "Register",
      switchToRegister: "Don't have an account? Register",
      switchToLogin: "Already have an account? Login",
      dashboard: "Dashboard",
      welcome: "Welcome to Admin Dashboard",
      logout: "Logout",
      emailPlaceholder: "Enter your email",
      passwordPlaceholder: "Enter your password",
      confirmPasswordPlaceholder: "Confirm your password",
      loginSuccess: "Login successful!",
      registerSuccess: "Registration successful!",
      loginError: "Invalid email or password",
      registerError: "Registration failed",
      adminPanel: "Admin Panel",
      manageContent: "Manage Content",
      viewAnalytics: "View Analytics",
      settings: "Settings",
      manageServices: "Manage Services",
      manageProjects: "Manage Projects",
      manageStaff: "Manage Staff",
      addNew: "Add New",
      edit: "Edit",
      delete: "Delete",
      save: "Save",
      cancel: "Cancel",
      title: "Title",
      description: "Description",
      image: "Image",
      name: "Name",
      position: "Position",
      department: "Department",
      location: "Location",
      features: "Features",
      backToDashboard: "Back to Dashboard",
      noItems: "No items found",
      confirmDelete: "Are you sure you want to delete this item?",
      itemAdded: "Item added successfully!",
      itemUpdated: "Item updated successfully!",
      itemDeleted: "Item deleted successfully!",
      addService: "Add Service",
      editService: "Edit Service",
      addProject: "Add Project",
      editProject: "Edit Project",
      addStaff: "Add Staff Member",
      editStaff: "Edit Staff Member"
    },
    home: {
      aboutUs: "About Us",
      ourVision: "Our Vision",
      ourMission: "Our Mission", 
      ourPromise: "Our Promise",
      visionDescription: "To be the leading provider of innovative aluminum and glass solutions, setting new standards in quality, sustainability, and customer satisfaction across the region.",
      missionDescription: "To deliver exceptional aluminum and glass products and services that exceed customer expectations while maintaining the highest standards of quality, safety, and environmental responsibility.",
      promiseDescription: "We promise to deliver excellence in every project, using premium materials, cutting-edge technology, and unmatched craftsmanship to bring your vision to life.",
      ourTeam: "Our Team",
      teamDescription: "Meet the experts behind our success - a dedicated team of professionals committed to delivering excellence in every project.",
      ourProjects: "Our Projects",
      projectsDescription: "Discover our portfolio of completed projects showcasing our expertise in aluminum, glass, and architectural solutions.",
      clientReviews: "Client Reviews",
      reviewsDescription: "Hear what our clients say about our work and commitment to excellence.",
      getInTouch: "Get in Touch",
      contactDescription: "Ready to start your next project? Contact us today for a consultation and let's bring your vision to life.",
      review1Name: "Ahmed Al-Rashid",
      review1Position: "Project Manager",
      review1Company: "Saudi Construction Co.",
      review1Text: "Alumetal delivered exceptional quality in our curtain wall project. Their attention to detail and professional installation exceeded our expectations. The team's expertise in aluminum and glass systems is unmatched.",
      review1Project: "Commercial Tower Facade",
      review2Name: "Sarah Johnson",
      review2Position: "Architect",
      review2Company: "Modern Design Studio",
      review2Text: "Working with Alumetal was a game-changer for our residential project. Their innovative aluminum solutions and glass systems transformed our design vision into reality. Highly recommended for any architectural project.",
      review2Project: "Residential Villa",
      review3Name: "Mohammed Al-Zahra",
      review3Position: "CEO",
      review3Company: "Al-Zahra Group",
      review3Text: "The quality of work and professionalism shown by Alumetal is outstanding. They completed our office building facade on time and within budget. Their expertise in curtain wall systems is truly impressive.",
      review3Project: "Office Building Facade",
      review4Name: "Fatima Hassan",
      review4Position: "Design Director",
      review4Company: "Urban Architects",
      review4Text: "The aluminum windows and doors provided by Alumetal are of the highest quality. Their energy-efficient designs and modern aesthetics perfectly complemented our architectural vision.",
      review4Project: "Office Building",
      review5Name: "David Chen",
      review5Position: "Construction Manager",
      review5Company: "Global Builders",
      review5Text: "Alumetal's shutter systems exceeded our expectations in both functionality and design. Their installation team was professional, punctual, and delivered outstanding results.",
      review5Project: "Shopping Mall",
      review6Name: "Amina Al-Mansouri",
      review6Position: "Project Coordinator",
      review6Company: "Luxury Developments",
      review6Text: "The handrail systems installed by Alumetal are not only beautiful but also incredibly safe and durable. Their attention to safety standards and aesthetic appeal is remarkable.",
      review6Project: "Luxury Villa"
    }
  },
  ar: {
    navigation: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      projects: "المشاريع",
      staff: "الفريق",
      contact: "اتصل بنا"
    },
    hero: {
      title: "ألوميتال",
      subtitle: "خبراء الألمنيوم والواجهات المعمارية",
      description: "شريكك الموثوق في حلول الألمنيوم والزجاج والأعمال المعدنية. نقدم التميز في كل مشروع بدقة وابتكار.",
      getStarted: "ابدأ الآن",
      learnMore: "اعرف المزيد"
    },
    about: {
      title: "عن ألوميتال",
      subtitle: "التميز في حلول الألمنيوم والزجاج",
      description: "في ألوميتال، نحن ملتزمون بتقديم حلول ألمنيوم وزجاج متميزة للمشاريع السكنية والتجارية والصناعية. التزامنا بالجودة والابتكار ورضا العملاء جعلنا شريكاً موثوقاً في الصناعة.",
      whoWeAreTitle: "من نحن",
      whoWeAreDesc1: "مرحباً بكم في ألوميتال، شريككم الموثوق في حلول الألمنيوم والزجاج والأعمال المعدنية. مع سنوات من الخبرة، نتخصص في تصميم وتقديم واجهات ألمنيوم عالية الجودة والتكسية والأنظمة الهيكلية واللمسات المعمارية المتقدمة التي تجمع بين الجمال والمتانة.",
      whoWeAreDesc2: "في ألوميتال، نقدم حلولاً شاملة في الألمنيوم والزجاج والصلب والأنظمة الألمنيوم المعمارية. فريقنا ملتزم بتقديم التميز في كل ما نقوم به – من المفهوم إلى التنفيذ.",
      ourServices: "خدماتنا",
      weManufacture: "نصنع ونركب",
      ourCapabilities: "قدراتنا تشمل",
      servicesList: [
        "أبواب ونوافذ ألمنيوم متميزة",
        "ستائر نوافذ ألمنيوم مقاومة للطقس", 
        "واجهات معمارية حديثة وستائر حائطية",
        "درابزين زجاجي أنيق ومتين ودرابزين السلالم",
        "أنظمة تكسية للمباني الحديثة",
        "أقسام زجاجية مخصصة باستخدام الزجاج المقسى والسيكوريت"
      ],
      capabilitiesList: [
        "تصنيع الألمنيوم",
        "تركيب الألمنيوم والزجاج بخدمة كاملة",
        "أنظمة تكسية وواجهات مخصصة",
        "الأعمال المعدنية الداخلية والخارجية بما في ذلك تفاصيل الحديد",
        "تركيبات زجاج مقسى وسيكوريت عالية الدقة"
      ],
      servicesFooter: "سواء كنت تبني فيلا سكنية أو برج تجاري، نحن نخصص حلول الألمنيوم والمعدن لرؤيتك المحددة.",
      ceoMessage: "رسالة الرئيس التنفيذي",
      ceoQuote: "نحن نسعى دائماً للريادة في مجالنا ونعمل بجد لتقديم منتجات وخدمات عالية الجودة تلبي احتياجات عملائنا. كما نولي اهتماماً كبيراً لتطوير مهارات فريق العمل لضمان التميز في الأداء والحفاظ على ثقة عملائنا الكرام الذين نعمل معهم عن كثب لضمان أننا نلبي توقعاتهم ونحقق أفضل النتائج. نحن نسعى دائماً لتقديم خدمة ممتازة وحلول مبتكرة لتحقيق الرضا الكامل لعملائنا. وهكذا، نمد كلمة شكر وتقدير لفريق العمل الذي يعمل بجد كل يوم لتحقيق أهداف شركتنا ورؤيتها لتكون الرائدة في مجالنا.",
      whyChooseUs: "لماذا تختارنا",
      whyChooseCards: [
        {
          title: "مواد متميزة",
          description: "نستخدم ألمنيوم متميز وزجاج مقسى (سيكوريت) للمتانة طويلة المدى"
        },
        {
          title: "جمالي ووظيفي", 
          description: "تصاميمنا تجمع بين الجمال والوظيفية"
        },
        {
          title: "الخبرة",
          description: "خبرة في الأبواب والنوافذ والواجهات والتكسية والزجاج والألمنيوم الهيكلي"
        },
        {
          title: "تركيب عالي الجودة",
          description: "تركيب عالي الجودة للدرابزين والستائر والميزات المعمارية"
        },
        {
          title: "معايير صارمة",
          description: "نتبع معايير صارمة في كل خطوة من عملياتنا"
        },
        {
          title: "فريق موثوق",
          description: "لدينا كادر قوي بخبرة عملية ومؤهلات عالية"
        }
      ],
      resources: "الموارد",
      resourcesSubtitle: "فهم دور الألمنيوم والزجاج والواجهات المعمارية في تشكيل البناء الحديث في المملكة العربية السعودية",
      vision2030: "رؤية السعودية 2030",
      vision2030Desc1: "تركز الرؤية الاستراتيجية للمملكة على الابتكار والاستدامة والبناء الذكي. هذه المبادئ تتماشى بشكل وثيق مع التزام ألوميتال بتقديم واجهات ألمنيوم عالية الأداء وتكسية زجاجية وأنظمة ستائر حائطية هيكلية.",
      vision2030Desc2: "حلولنا المتقدمة في الألمنيوم والزجاج تساهم في تحديث المدن والمعالم المعمارية المميزة في جميع أنحاء المملكة.",
      glassInnovations: "ابتكارات الزجاج",
      glassInnovationsDesc1: "اكتشف أحدث التطورات في الزجاج المقسى (سيكوريت) والزجاج المعماري وتقنيات الزجاج الصديقة للبيئة.",
      glassInnovationsDesc2: "ألوميتال تدمج هذه الابتكارات في مشاريع مثل الواجهات المكسوة والدرابزين الزجاجي والنوافذ والأبواب الموفرة للطاقة لتلبية معايير الأداء الحديثة وتصميم المباني الخضراء.",
      futureVision: "رؤيتنا للمستقبل",
      futureVisionDesc: "نهدف لقيادة السوق في ابتكار الألمنيوم والمعدن والزجاج في المنطقة. من خلال التقنيات المتطورة والالتزام بالجودة، نساعد المعماريين والمطورين على إحياء مشاريعهم بواجهات معمارية مميزة وستائر حائطية وأنظمة ألمنيوم مخصصة.",
      ctaTitle: "دعونا نبني شيئاً رائعاً",
      ctaDescription: "اتصل بنا الآن لطلب عرض سعر أو استشارة! عملنا يتميز عبر المشاريع السكنية والتجارية، بفضل سمعتنا القوية والتزامنا بالابتكار.",
      contactUsNow: "اتصل بنا الآن",
      ourServices: "خدماتنا",
      trustedByArchitects: "موثوق من قبل المعماريين الرائدين",
      trustedByArchitectsDesc: "لقد تعاونا مع المعماريين والبنائين والمهندسين لإنشاء هياكل ألمنيوم وزجاج دائمة. لدينا كادر قوي بخبرة عملية ومؤهلات عالية."
    },
    services: {
      title: "خدماتنا",
      subtitle: "أنظمة ألمنيوم وزجاج ومعدن متقدمة",
      description: "حلول شاملة للمشاريع السكنية والتجارية والصناعية",
      whyChooseUs: "لماذا تختار ألوميتال",
      overviewDescription: "في ألوميتال، نقدم حلول ألمنيوم وزجاج شاملة للمشاريع السكنية والتجارية والصناعية. منتجاتنا تجمع بين التصميم الحديث والمتانة والأداء الممتاز، مما يضمن أن كل عميل يحصل على التوازن المثالي بين الأسلوب والوظيفة.",
      whatWeOffer: "ما نقدمه",
      windowsSystems: "أنظمة النوافذ",
      windowsDesc: "نقدم نوافذ ألمنيوم منزلقة ومفصلية ومائلة ومثبتة — أنيقة ومتينة وموفرة للطاقة لأي مساحة.",
      windowsFeatures: [
        "نوافذ ألمنيوم منزلقة",
        "نوافذ مفصلية",
        "نوافذ مائلة", 
        "نوافذ مثبتة",
        "تصاميم موفرة للطاقة",
        "قياس مخصص متاح"
      ],
      doorsSystems: "أنظمة الأبواب",
      doorsDesc: "نقدم مجموعة متنوعة من الأبواب تناسب كل نمط معماري: نظام الأبواب المفصلية – خالدة وآمنة. نظام أبواب الحمام – مقاومة للرطوبة وأنيقة. نظام الأبواب المنزلقة – حديثة وتوفر مساحة. نظام الأبواب التلقائية – مثالية للمساحات التجارية. نظام الأبواب القابلة للطي – مرنة وأنيقة للفتحات الكبيرة.",
      doorsFeatures: [
        "نظام الأبواب المفصلية – خالدة وآمنة",
        "نظام أبواب الحمام – مقاومة للرطوبة وأنيقة",
        "نظام الأبواب المنزلقة – حديثة وتوفر مساحة",
        "نظام الأبواب التلقائية – مثالية للمساحات التجارية",
        "نظام الأبواب القابلة للطي – مرنة وأنيقة للفتحات الكبيرة"
      ],
      frontsFacades: "الواجهات الأمامية",
      frontsDesc: "اصنع انطباعاً أولياً جريئاً مع أنظمة الواجهات: نظام الواجهات الهيكلية – أنيق وقوي. نظام واجهات ستائر الحائط – جدران زجاجية حديثة لأقصى إضاءة. نظام الواجهات بدون إطار – تصميم بسيط مع إطلالات غير منقطعة.",
      frontsFeatures: [
        "نظام الواجهات الهيكلية – أنيق وقوي",
        "نظام واجهات ستائر الحائط – جدران زجاجية حديثة لأقصى إضاءة",
        "نظام الواجهات بدون إطار – تصميم بسيط مع إطلالات غير منقطعة",
        "حلول معمارية مخصصة",
        "مواد مقاومة للطقس"
      ],
      shutterSystems: "أنظمة الستائر",
      shutterDesc: "نقدم ستائر عالية الجودة للأمان والراحة: نظام الستائر اليدوية – موثوق وسهل الاستخدام. نظام الستائر الكهربائية مع المفتاح – تحكم بسيط من الحائط. ستائر مع تحكم عن بعد – تشغيل من أي مكان. نظام الستائر الذكية للمنزل – تكامل كامل للأتمتة. نظام الستائر الذكية – مثالية للمساحات المعيشية الحديثة.",
      shutterFeatures: [
        "نظام الستائر اليدوية – موثوق وسهل الاستخدام",
        "نظام الستائر الكهربائية مع المفتاح – تحكم بسيط من الحائط",
        "ستائر مع تحكم عن بعد – تشغيل من أي مكان",
        "نظام الستائر الذكية للمنزل – تكامل كامل للأتمتة",
        "نظام الستائر الذكية – مثالية للمساحات المعيشية الحديثة"
      ],
      claddingSystems: "أنظمة التكسية",
      claddingDesc: "ألواح التكسية المقاومة للحريق لدينا توفر الأمان والجمال، مثالية للمشاريع التجارية والسكنية.",
      claddingFeatures: [
        "مواد مقاومة للحريق",
        "حماية من الطقس",
        "جاذبية جمالية",
        "تطبيقات تجارية",
        "حلول سكنية",
        "تصاميم ألواح مخصصة"
      ],
      showerSystems: "أنظمة الدش",
      showerDesc: "تصاميم دش أنيقة ووظيفية: نظام الدش المفصلي – باب زجاجي كلاسيكي. نظام الدش المنزلق – ألواح انزلاق سلسة. نظام الدش المثبت – بسيط وأنيق.",
      showerFeatures: [
        "نظام الدش المفصلي – باب زجاجي كلاسيكي",
        "نظام الدش المنزلق – ألواح انزلاق سلسة",
        "نظام الدش المثبت – بسيط وأنيق",
        "بناء زجاج مقسى",
        "تكوينات مخصصة"
      ],
      handrailSystems: "أنظمة الدرابزين",
      handrailDesc: "الأمان يلتقي بالأناقة مع درابزيننا: نظام الدرابزين الزجاجي المعلق – أناقة شفافة. أنظمة الدرابزين المعدنية – متينة وحديثة.",
      handrailFeatures: [
        "نظام الدرابزين الزجاجي المعلق – أناقة شفافة",
        "أنظمة الدرابزين المعدنية – متينة وحديثة",
        "تصاميم مخصصة متاحة",
        "امتثال الأمان",
        "جماليات حديثة"
      ],
      whyChooseUs: "لماذا تختار ألوميتال",
      whyChooseDesc: "مع سنوات من الخبرة في تصنيع الألمنيوم، نضمن أن كل مشروع يلبي أعلى معايير الجودة. نعمل عن كثب مع العملاء لتخصيص كل حل، مما يضمن ملاءمته لاحتياجاتهم وميزانيتهم.",
      orderNow: "اطلب الآن",
      learnMoreAboutUs: "اعرف المزيد عنا",
      aboutUs: "من نحن",
      contactUsForConsultation: "اتصل بنا للحصول على استشارة مجانية",
      freeConsultation: "استشارة مجانية",
      exploreOurProjects: "استكشف مشاريعنا",
      discoverOurLatest: "اكتشف أحدث مشاريعنا المكتملة وشاهد جودة عملنا في الواقع. من الفلل السكنية إلى الأبراج التجارية، نقدم التميز في كل مشروع.",
      viewProjects: "عرض المشاريع",
      contactUs: "اتصل بنا"
    },
    projects: {
      title: "مشاريعنا",
      subtitle: "عرض تميز ألوميتال",
      description: "أنظمة ألمنيوم وزجاج وتكسية عالية الأداء",
      ourPortfolio: "محفظتنا",
      portfolioDescription: "في ألوميتال، تعكس محفظة مشاريعنا المكتملة إتقاننا في تنفيذ أنظمة الألمنيوم والزجاج والتكسية عالية الأداء. خبرتنا تشمل ستائر الحائط الهيكلية والأبواب والنوافذ وحلول الواجهات المعقدة التي تجمع بين الدقة الجمالية والتميز الوظيفي.",
      projectCategories: "فئات المشاريع",
      allProjects: "جميع المشاريع",
      claddingSystems: "أنظمة التكسية",
      aluminumFacades: "الواجهات الألمنيومية",
      windowsSystems: "أنظمة النوافذ",
      doorsSystems: "أنظمة الأبواب",
      shutterSystems: "أنظمة الستائر",
      handrailSystems: "أنظمة الدرابزين",
      projects: "مشاريع",
      whyTheseProjects: "لماذا هذه المشاريع",
      matter: "مهمة",
      leadershipInCurtainWall: "الريادة في ستائر الحائط",
      leadershipDescription: "إظهار ريادتنا في أنظمة ستائر الحائط والواجهات الألمنيومية.",
      advancedIntegration: "التكامل المتقدم",
      integrationDescription: "عرض التكامل الناجح للمواد الألمنيومية والزجاجية المتقدمة.",
      precisionDesign: "التصميم الدقيق",
      precisionDescription: "إبراز الدقة في كل من التكسية وتصميم الواجهات الزجاجية.",
      whyChooseAlumetal: "لماذا تختار ألوميتال",
      forYourProject: "لمشروعك؟",
      provenExperience: "خبرة مثبتة",
      provenExperienceDesc: "خبرة مثبتة في الأنظمة الهيكلية واسعة النطاق والواجهات والزجاج وأعمال الألمنيوم.",
      qualityCraftsmanship: "حرفية عالية الجودة",
      qualityCraftsmanshipDesc: "حرفية عالية الجودة من التصميم المفاهيمي إلى التركيب النهائي.",
      advancedTechnology: "تقنية متقدمة",
      advancedTechnologyDesc: "القدرة على التعامل مع تحديات الواجهات المعقدة باستخدام تقنية التكسية المتطورة.",
      getInTouch: "تواصل معنا",
      readyToBring: "مستعد لإحياء رؤيتك المعمارية؟",
      callUsNow: "اتصل بنا الآن",
      emailUs: "راسلنا",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      // Project data translations
      claddingProject1: "مشروع نظام تكسية ألوميتال مكتمل",
      claddingProject1Desc: "نظام تكسية متقدم يتميز بألواح مقاومة للحريق وتصميم معماري حديث.",
      claddingProject1Features: ["مواد مقاومة للحريق", "حماية من الطقس", "جماليات حديثة", "تطبيق تجاري"],
      windowsProject1: "مشروع نظام نوافذ ألمنيوم ألوميتال مكتمل",
      windowsProject1Desc: "نوافذ ألمنيوم موفرة للطاقة مع تقنية زجاج متقدمة.",
      windowsProject1Features: ["كفاءة الطاقة", "بناء متين", "قياس مخصص", "تصميم حديث"],
      handrailProject1: "مشروع نظام درابزين ألوميتال مكتمل",
      handrailProject1Desc: "أنظمة درابزين زجاجية ومعدنية أنيقة تجمع بين الأمان والأناقة.",
      handrailProject1Features: ["امتثال الأمان", "بناء زجاجي", "جماليات حديثة", "مواد متينة"],
      doorsProject1: "مشروع نظام أبواب ألوميتال مكتمل",
      doorsProject1Desc: "أبواب ألمنيوم متميزة مع أمان متقدم ومقاومة للطقس.",
      doorsProject1Features: ["ميزات أمنية", "مقاومة الطقس", "مواد متميزة", "تصميم مخصص"],
      facadeProject1: "مشروع واجهة ألمنيوم ألوميتال مكتمل",
      facadeProject1Desc: "نظام واجهة ألمنيوم مذهل يعرض التميز المعماري الحديث.",
      facadeProject1Features: ["تصميم معماري", "سلامة هيكلية", "حماية من الطقس", "جاذبية جمالية"],
      shutterProject1: "مشروع نظام ستائر ألوميتال مكتمل",
      shutterProject1Desc: "أنظمة ستائر متقدمة مع تحكم ذكي وميزات أمنية.",
      shutterProject1Features: ["تحكم ذكي", "ميزات أمنية", "مقاومة الطقس", "تشغيل آلي"],
      showerProject1: "خدمات نوافذ وأبواب ألوميتال - دش زجاجي",
      showerProject1Desc: "أنظمة دش زجاجية أنيقة تجمع بين الوظائف والتصميم الحديث.",
      showerProject1Features: ["زجاج مقسى", "مقاومة الماء", "تصميم حديث", "صيانة سهلة"],
      saudiArabia: "المملكة العربية السعودية",
      gallery: "المعرض",
      galleryDescription: "استكشف محفظة مشاريعنا المكتملة التي تعرض التميز في الألمنيوم والزجاج والحلول المعمارية",
      viewGallery: "عرض المعرض",
      projectGallery: "معرض المشاريع",
      allProjects: "جميع المشاريع",
      featuredProjects: "المشاريع المميزة"
    },
    staff: {
      title: "فريق العمل لدينا",
      subtitle: "حجر الأساس لتميز ألوميتال",
      description: "محترفون ذوو مهارات عالية مع خبرة دولية",
      ourTeam: "فريقنا",
      teamDescription: "ألوميتال تفخر بفريق عمل ذو مهارات عالية وخبرة أساسية لنجاحنا. الخبرة الدولية لفريقنا في الألمنيوم والزجاج والتكسية وستائر الحائط والأنظمة الهيكلية والأبواب والنوافذ تضمن أن كل مشروع يلبي أعلى معايير الجودة والحرفية.",
      teamSubtitle: "مشروع واجهة ألمنيوم وزجاج ألوميتال مصمم مع معماريين رائدين",
      meetTheExperts: "تعرف على الخبراء",
      expertsSubtitle: "لقد جمعنا كادراً متميزاً من المحترفين، يمتد عبر أدوار متخصصة متنوعة",
      engineeringTitle: "خبراء الهندسة والتصميم",
      engineeringDesc: "من تصور واجهات ستائر الحائط إلى تفصيل الأبواب والنوافذ وأنظمة التكسية، مهندسونا يحولون الأفكار إلى واقع.",
      engineeringFeatures: [
        "تصميم وهندسة ستائر الحائط",
        "حسابات الأنظمة الهيكلية",
        "مواصفات الأبواب والنوافذ",
        "تطوير أنظمة التكسية",
        "الرسومات التقنية والتوثيق",
        "معايير مراقبة الجودة"
      ],
      productionTitle: "متخصصو الإنتاج",
      productionDesc: "فريق التصنيع لدينا يحول الألمنيوم والزجاج الخام إلى مكونات قوية، بما في ذلك الأنظمة الهيكلية وألواح الواجهات الأنيقة.",
      productionFeatures: [
        "خبرة تصنيع الألمنيوم",
        "معالجة وتقطيع الزجاج",
        "تصنيع المكونات الهيكلية",
        "إنتاج ألواح الواجهات",
        "الآلات الدقيقة",
        "بروتوكولات ضمان الجودة"
      ],
      installationTitle: "طاقم التركيب والتجهيز",
      installationDesc: "الدقة والاهتمام يحددان فرقنا الميدانية التي تتعامل مع تجميع الأبواب والنوافذ والستائر والدرابزين.",
      installationFeatures: [
        "خدمات التركيب المهنية",
        "تجميع الأبواب والنوافذ",
        "تركيب أنظمة الستائر",
        "تركيب الدرابزين والدرابزين",
        "إدارة المشاريع الميدانية",
        "معايير الامتثال للسلامة"
      ],
      qualityTitle: "فريق ضمان الجودة",
      qualityDesc: "ضمان أن كل منتج—سواء كان قسم زجاجي أو واجهة مكسوة—يمر بفحوصات صارمة قبل وصوله إليك.",
      qualityFeatures: [
        "اختبار الجودة الشامل",
        "بروتوكولات فحص المواد",
        "التحقق من الأداء",
        "امتثال معايير السلامة",
        "التحقق النهائي من المنتج",
        "عمليات التحسين المستمر"
      ],
      logisticsTitle: "منسقو اللوجستيات والتسليم",
      logisticsDesc: "مهرة في الإرسال في الوقت المناسب والتركيب عبر البيئات السكنية والتجارية.",
      logisticsFeatures: [
        "إدارة سلسلة التوريد",
        "تنسيق التسليم في الوقت المناسب",
        "جدولة التركيب",
        "إدارة الجدول الزمني للمشروع",
        "التواصل مع العملاء",
        "تحسين الموارد"
      ],
      whyOurPeople: "لماذا فريقنا",
      makeTheDifference: "يصنع الفرق",
      deepExpertise: "خبرة عميقة",
      deepExpertiseDesc: "مزيج من المعرفة المحلية للصناعة وأفضل الممارسات العالمية في أنظمة الألمنيوم والزجاج.",
      collaborativeApproach: "نهج تعاوني",
      collaborativeApproachDesc: "العمل عن كثب مع العملاء من المراحل المفاهيمية إلى التركيبات النهائية للتكسية والأبواب والنوافذ.",
      relentlessQuality: "جودة لا تعرف الكلل",
      relentlessQualityDesc: "كل جانب—من اختيار المواد إلى التنفيذ—يتم مراجعته بدقة للديمومة والتميز في التصميم.",
      clientCentricFocus: "التركيز على العميل",
      clientCentricFocusDesc: "حلول مخصصة تتكيف مع احتياجات المشروع، سواء للواجهات المبتكرة أو الأنظمة الداخلية الوظيفية.",
      quickContact: "اتصال سريع",
      needExpertAdvice: "تحتاج إلى نصيحة خبير أو مستعد لبدء مشروعك؟",
      getInTouch: "تواصل معنا",
      discoverMore: "اكتشف المزيد من ألوميتال",
      curiousAboutOurStory: "فضولي حول قصتنا أو خدماتنا؟ استكشف:",
      aboutUsLink: "من نحن — تعرف على رؤيتنا وإرثنا في الألمنيوم والزجاج",
      servicesLink: "الخدمات — تفصيل مفصل لعروضنا من التكسية والستائر إلى النوافذ والأبواب والمزيد",
      projectsLink: "المشاريع — شاهد تركيباتنا في العالم الحقيقي"
    },
    contact: {
      title: "اتصل بألوميتال",
      subtitle: "تواصل مع خبرائنا",
      formDescription: "نحن هنا لمساعدتك في احتياجاتك من الألمنيوم والزجاج",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      address: "العنوان",
      whatsapp: "واتساب",
      addressText: "الدمام، حي الخدمات المساندة، المدينة الصناعية الثانية",
      name: "الاسم",
      subject: "الموضوع",
      message: "الرسالة",
      phoneNumber: "رقم الهاتف",
      sendMessage: "إرسال الرسالة",
      stayInTouch: "ابق على تواصل",
      followUs: "تابعنا",
      findUs: "اعثر علينا",
      interactiveMap: "خريطة تفاعلية",
      whyChooseUs: "لماذا تختار ألوميتال",
      whyChooseDesc: "خبرة مثبتة في الأنظمة الهيكلية واسعة النطاق والواجهات والزجاج وأعمال الألمنيوم. حرفية عالية الجودة من التصميم المفاهيمي إلى التركيب النهائي.",
      learnMoreAboutUs: "اعرف المزيد عنا",
      contactUsForConsultation: "اتصل بنا للحصول على استشارة مجانية",
      exploreProjects: "استكشف أحدث مشاريعنا المكتملة",
      viewProjects: "عرض المشاريع",
      namePlaceholder: "اسمك الكامل",
      emailPlaceholder: "Egyptian.heart@hotmail.com",
      subjectPlaceholder: "موضوع رسالتك",
      phonePlaceholder: "رقم هاتفك",
      messagePlaceholder: "أخبرنا كيف يمكننا مساعدتك...",
      mapLocation1: "الدمام، حي الخدمات المساندة",
      mapLocation2: "المدينة الصناعية الثانية",
      facebook: "فيسبوك",
      twitter: "تويتر",
      instagram: "إنستغرام", 
      linkedin: "لينكد إن",
      youtube: "يوتيوب"
    },
    footer: {
      quickLinks: "روابط سريعة",
      ourServices: "خدماتنا",
      stayConnected: "ابق على تواصل",
      followUs: "تابعنا"
    },
    common: {
      learnMore: "اعرف المزيد",
      contactUs: "اتصل بنا",
      getInTouch: "تواصل معنا",
      viewAll: "عرض الكل"
    },
    notFound: {
      title: "الصفحة غير موجودة",
      description: "الصفحة التي تبحث عنها قد تكون قد تم إزالتها أو تغيير اسمها أو غير متاحة مؤقتًا.",
      errorCode: "كود الخطأ:",
      goHome: "العودة للرئيسية",
      goBack: "العودة للخلف",
      quickLinks: "روابط سريعة:",
      tip: "نصيحة: تأكد من صحة الرابط، أو استخدم قائمة التنقل للعثور على ما تبحث عنه."
    },
    admin: {
      login: "تسجيل دخول الإدارة",
      register: "تسجيل الإدارة",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      confirmPassword: "تأكيد كلمة المرور",
      loginButton: "تسجيل الدخول",
      registerButton: "التسجيل",
      switchToRegister: "ليس لديك حساب؟ سجل الآن",
      switchToLogin: "لديك حساب بالفعل؟ سجل الدخول",
      dashboard: "لوحة التحكم",
      welcome: "مرحباً بك في لوحة تحكم الإدارة",
      logout: "تسجيل الخروج",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      passwordPlaceholder: "أدخل كلمة المرور",
      confirmPasswordPlaceholder: "أكد كلمة المرور",
      loginSuccess: "تم تسجيل الدخول بنجاح!",
      registerSuccess: "تم التسجيل بنجاح!",
      loginError: "بريد إلكتروني أو كلمة مرور غير صحيحة",
      registerError: "فشل في التسجيل",
      adminPanel: "لوحة الإدارة",
      manageContent: "إدارة المحتوى",
      viewAnalytics: "عرض التحليلات",
      settings: "الإعدادات",
      manageServices: "إدارة الخدمات",
      manageProjects: "إدارة المشاريع",
      manageStaff: "إدارة الموظفين",
      addNew: "إضافة جديد",
      edit: "تعديل",
      delete: "حذف",
      save: "حفظ",
      cancel: "إلغاء",
      title: "العنوان",
      description: "الوصف",
      image: "الصورة",
      name: "الاسم",
      position: "المنصب",
      department: "القسم",
      location: "الموقع",
      features: "المميزات",
      backToDashboard: "العودة للوحة التحكم",
      noItems: "لا توجد عناصر",
      confirmDelete: "هل أنت متأكد من حذف هذا العنصر؟",
      itemAdded: "تم إضافة العنصر بنجاح!",
      itemUpdated: "تم تحديث العنصر بنجاح!",
      itemDeleted: "تم حذف العنصر بنجاح!",
      addService: "إضافة خدمة",
      editService: "تعديل الخدمة",
      addProject: "إضافة مشروع",
      editProject: "تعديل المشروع",
      addStaff: "إضافة موظف",
      editStaff: "تعديل الموظف"
    },
    home: {
      aboutUs: "من نحن",
      ourVision: "رؤيتنا",
      ourMission: "مهمتنا",
      ourPromise: "وعدنا",
      visionDescription: "أن نكون المزود الرائد للحلول المبتكرة في الألمنيوم والزجاج، ووضع معايير جديدة في الجودة والاستدامة ورضا العملاء في جميع أنحاء المنطقة.",
      missionDescription: "تقديم منتجات وخدمات ألمنيوم وزجاج استثنائية تتجاوز توقعات العملاء مع الحفاظ على أعلى معايير الجودة والأمان والمسؤولية البيئية.",
      promiseDescription: "نعد بتقديم التميز في كل مشروع، باستخدام مواد متميزة وتقنية متطورة وحرفية لا مثيل لها لإحياء رؤيتك.",
      ourTeam: "فريقنا",
      teamDescription: "تعرف على الخبراء وراء نجاحنا - فريق مخصص من المحترفين ملتزم بتقديم التميز في كل مشروع.",
      ourProjects: "مشاريعنا",
      projectsDescription: "اكتشف محفظة مشاريعنا المكتملة التي تعرض خبرتنا في الألمنيوم والزجاج والحلول المعمارية.",
      clientReviews: "آراء العملاء",
      reviewsDescription: "اسمع ما يقوله عملاؤنا عن عملنا والتزامنا بالتميز.",
      getInTouch: "تواصل معنا",
      contactDescription: "مستعد لبدء مشروعك القادم؟ اتصل بنا اليوم للحصول على استشارة ودعنا نحقق رؤيتك.",
      review1Name: "أحمد الراشد",
      review1Position: "مدير المشروع",
      review1Company: "شركة البناء السعودية",
      review1Text: "قدمت ألوميتال جودة استثنائية في مشروع ستائر الحائط. اهتمامهم بالتفاصيل والتركيب المهني تجاوز توقعاتنا. خبرة الفريق في أنظمة الألمنيوم والزجاج لا مثيل لها.",
      review1Project: "واجهة برج تجاري",
      review2Name: "سارة جونسون",
      review2Position: "مهندسة معمارية",
      review2Company: "استوديو التصميم الحديث",
      review2Text: "العمل مع ألوميتال كان نقطة تحول لمشروعنا السكني. حلولهم المبتكرة في الألمنيوم وأنظمة الزجاج حولت رؤيتنا التصميمية إلى واقع. أنصح بها بشدة لأي مشروع معماري.",
      review2Project: "فيلا سكنية",
      review3Name: "محمد الزهراء",
      review3Position: "الرئيس التنفيذي",
      review3Company: "مجموعة الزهراء",
      review3Text: "جودة العمل والمهنية التي أظهرتها ألوميتال متميزة. أكملوا واجهة مبنى المكاتب في الوقت المحدد وفي الميزانية. خبرتهم في أنظمة ستائر الحائط مذهلة حقاً.",
      review3Project: "واجهة مبنى مكاتب",
      review4Name: "فاطمة حسن",
      review4Position: "مديرة التصميم",
      review4Company: "المهندسين المعماريين الحضريين",
      review4Text: "النوافذ والأبواب الألمنيومية التي قدمتها ألوميتال من أعلى جودة. تصاميمها الموفرة للطاقة والجماليات الحديثة تكملت بشكل مثالي مع رؤيتنا المعمارية.",
      review4Project: "مبنى مكاتب",
      review5Name: "ديفيد تشين",
      review5Position: "مدير البناء",
      review5Company: "البنائين العالميين",
      review5Text: "أنظمة الستائر من ألوميتال تجاوزت توقعاتنا في كل من الوظائف والتصميم. فريق التركيب كان مهنياً وموثوقاً وقدم نتائج متميزة.",
      review5Project: "مركز تسوق",
      review6Name: "أمينة المنصوري",
      review6Position: "منسقة المشروع",
      review6Company: "التطويرات الفاخرة",
      review6Text: "أنظمة الدرابزين المثبتة من ألوميتال ليست جميلة فحسب، بل آمنة ومتينة بشكل لا يصدق. انتباههم لمعايير السلامة والجاذبية الجمالية رائع.",
      review6Project: "فيلا فاخرة"
    }
  }
}

// Global state for language
let globalLanguage = 'en'
let globalTranslations = defaultTranslations.en
let globalIsRTL = false
let listeners = new Set()

// Function to notify all components of language change
const notifyListeners = () => {
  listeners.forEach(listener => listener())
}

// Function to update global state
const updateGlobalState = (language) => {
  globalLanguage = language
  globalIsRTL = language === 'ar'
  globalTranslations = defaultTranslations[language]
  
  // Update document
  if (typeof window !== 'undefined') {
    document.documentElement.dir = globalIsRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = language
    localStorage.setItem('language', language)
  }
  
  // Notify all listeners
  notifyListeners()
}

export const useTranslations = () => {
  const [, forceUpdate] = useState({})
  
  const forceRerender = useCallback(() => {
    forceUpdate({})
  }, [])

  useEffect(() => {
    // Add this component to listeners
    listeners.add(forceRerender)
    
    // Initialize on first load
    if (typeof window !== 'undefined' && globalLanguage === 'en') {
      const savedLanguage = localStorage.getItem('language') || 'en'
      if (savedLanguage !== globalLanguage) {
        updateGlobalState(savedLanguage)
      }
    }
    
    return () => {
      // Remove this component from listeners
      listeners.delete(forceRerender)
    }
  }, [forceRerender])

  const t = useCallback((key) => {
    const keys = key.split('.')
    let value = globalTranslations
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    // If value is undefined or null, return the key
    if (value === undefined || value === null) {
      return key
    }
    
    return value
  }, [])

  const changeLanguage = useCallback((language) => {
    updateGlobalState(language)
  }, [])

  const toggleLanguage = useCallback(() => {
    const newLanguage = globalLanguage === 'en' ? 'ar' : 'en'
    updateGlobalState(newLanguage)
  }, [])

  return {
    t,
    currentLanguage: globalLanguage,
    isRTL: globalIsRTL,
    isLoading: false,
    changeLanguage,
    toggleLanguage
  }
}
