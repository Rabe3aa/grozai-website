// data/industries.js

import { FaShoppingCart, FaHeartbeat, FaUserGraduate, FaLandmark, FaIndustry, FaChartLine, FaSearchDollar, FaRobot, FaShieldAlt, FaFileInvoiceDollar, FaBrain, FaBook, FaFlask, FaTruck, FaWarehouse, FaCogs } from 'react-icons/fa';
import { MdScreenSearchDesktop, MdInventory, MdRule, MdSchool, MdAssessment } from 'react-icons/md';

const industries = [
  {
    slug: "retail-ecommerce",
    title: "Retail & E-Commerce",
    icon: FaShoppingCart,
    shortDescription: "Personalized recommendations, demand forecasting, and AI-powered loyalty.",
    details: {
      overview: "AI is revolutionizing retail and e-commerce by enabling hyper-personalized shopping experiences, optimizing inventory, and predicting trends before they happen. We help businesses leverage data to create smarter, more efficient operations.",
      solutions: [
        { 
          title: "Personalized Recommendations",
          description: "Using customer behavior and purchase history to deliver product suggestions that convert.",
          icon: FaBrain
        },
        { 
          title: "Demand Forecasting",
          description: "AI-driven models to optimize stock levels, reduce waste, and ensure product availability.",
          icon: FaChartLine
        },
        { 
          title: "Shelf Monitoring",
          description: "Computer vision for real-time inventory management and planogram compliance.",
          icon: MdInventory
        },
        { 
          title: "Churn Prediction",
          description: "Advanced models to identify at-risk customers and increase retention and loyalty.",
          icon: FaUserGraduate
        }
      ],
      howWePerform: "GrozAI delivers end-to-end AI solutions for retailers, from data integration and model development to seamless platform deployment. We partner with you to identify high-ROI use cases, implement robust AI pipelines, and train your teams for ongoing success."
    }
  },
  {
    slug: "healthcare-diagnostics",
    title: "Healthcare & Diagnostics",
    icon: FaHeartbeat,
    shortDescription: "Medical document digitization, OCR, and AI-driven diagnostics.",
    details: {
      overview: "AI in healthcare streamlines diagnostics, automates paperwork, and enhances patient care with deep learning and NLP. Our solutions are built to be secure, compliant, and impactful.",
      solutions: [
        { 
          title: "Medical Document OCR",
          description: "Digitize and extract critical information from medical documents using advanced OCR.",
          icon: FaFileInvoiceDollar
        },
        { 
          title: "AI-Powered Diagnostics",
          description: "Enhance diagnostic imaging and reporting for faster, more accurate clinical results.",
          icon: MdScreenSearchDesktop
        },
        { 
          title: "Insurance Fraud Detection",
          description: "Anomaly detection models to identify and flag fraudulent insurance claims.",
          icon: FaSearchDollar
        },
        { 
          title: "Real-Time Patient Analysis",
          description: "Continuous patient data analysis for proactive care and early intervention.",
          icon: FaChartLine
        }
      ],
      howWePerform: "GrozAI works with healthcare providers to automate workflows, improve diagnostic accuracy, and ensure compliance with data privacy standards. We tailor AI solutions to your unique needs, integrating seamlessly with existing systems."
    }
  },
  {
    slug: "education-edtech",
    title: "Education & EdTech",
    icon: FaUserGraduate,
    shortDescription: "AI tutors, exam generation, and curriculum-aligned feedback.",
    details: {
      overview: "AI transforms education with personalized learning paths, automated administrative tasks, and interactive feedback systems that engage students like never before.",
      solutions: [
        { 
          title: "AI-Powered Tutors",
          description: "Personalized student support with AI tutors trained on specific curricula.",
          icon: FaRobot
        },
        { 
          title: "Automated Assessments",
          description: "Generate and grade exams automatically to save educators valuable time.",
          icon: MdAssessment
        },
        { 
          title: "Interactive Learning Platforms",
          description: "Engage students with platforms that provide real-time, adaptive feedback.",
          icon: FaBook
        },
        { 
          title: "Curriculum Analytics",
          description: "Actionable insights for teachers and administrators from curriculum-aligned data.",
          icon: MdSchool
        }
      ],
      howWePerform: "GrozAI partners with schools and edtech companies to build adaptive learning platforms and assessment tools, leveraging AI to enhance outcomes for students and educators alike."
    }
  },
  {
    slug: "finance-banking",
    title: "Finance & Banking",
    icon: FaLandmark,
    shortDescription: "AI-driven fraud detection, algorithmic trading, and personalized financial advice.",
    details: {
      overview: "In finance, AI enhances security, automates trading, and provides personalized services, driving efficiency and mitigating risk across the board.",
      solutions: [
        { 
          title: "Real-Time Fraud Detection",
          description: "Protect assets with machine learning models that identify and prevent fraud in real-time.",
          icon: FaShieldAlt
        },
        { 
          title: "Algorithmic Trading",
          description: "Utilize sophisticated models for market analysis and high-speed automated trade execution.",
          icon: FaChartLine
        },
        { 
          title: "AI-Powered Credit Scoring",
          description: "Achieve more accurate risk assessment with dynamic, AI-driven credit scoring.",
          icon: MdRule
        },
        { 
          title: "Robo-Advisory Services",
          description: "Deliver personalized, automated financial advice to a broad range of clients.",
          icon: FaRobot
        }
      ],
      howWePerform: "GrozAI provides secure, compliant AI solutions for financial institutions, focusing on fraud prevention, trading optimization, and customer service automation to deliver a competitive edge."
    }
  },
  {
    slug: "manufacturing-logistics",
    title: "Manufacturing & Logistics",
    icon: FaIndustry,
    shortDescription: "Predictive maintenance, supply chain optimization, and quality control automation.",
    details: {
      overview: "AI optimizes the entire manufacturing and logistics pipeline, from predictive maintenance on the factory floor to route optimization in the supply chain.",
      solutions: [
        { 
          title: "Predictive Maintenance",
          description: "Reduce machinery downtime and lower maintenance costs with AI-powered predictions.",
          icon: FaCogs
        },
        { 
          title: "Automated Quality Control",
          description: "Leverage computer vision to detect product defects with superhuman accuracy.",
          icon: FaFlask
        },
        { 
          title: "Supply Chain Optimization",
          description: "Enhance inventory and logistics management for a more efficient supply chain.",
          icon: FaTruck
        },
        { 
          title: "Robotics Process Automation",
          description: "Automate repetitive manufacturing and warehousing tasks with intelligent RPA.",
          icon: FaWarehouse
        }
      ],
      howWePerform: "GrozAI helps manufacturing and logistics companies integrate AI to improve operational efficiency, reduce costs, and enhance product quality. Our solutions are designed for scalability and seamless integration with existing industrial systems."
    }
  }
];

export default industries;
