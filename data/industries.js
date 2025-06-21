// data/industries.js

import { FaShoppingCart, FaHeartbeat, FaUserGraduate, FaLandmark, FaIndustry, FaChartLine, FaSearchDollar, FaRobot, FaShieldAlt, FaFileInvoiceDollar, FaBrain, FaBook, FaFlask, FaTruck, FaWarehouse, FaCogs } from 'react-icons/fa';
import { MdScreenSearchDesktop, MdInventory, MdRule, MdSchool, MdAssessment } from 'react-icons/md';

const industries = [
  {
    slug: "retail-ecommerce",
    title: "industries.retail-ecommerce.title",
    icon: FaShoppingCart,
    shortDescription: "industries.retail-ecommerce.shortDescription",
    details: {
      overview: "industries.retail-ecommerce.details.overview",
      solutions: [
        {
          title: "industries.retail-ecommerce.details.solutions.0.title",
          description: "industries.retail-ecommerce.details.solutions.0.description",
          icon: FaBrain
        },
        {
          title: "industries.retail-ecommerce.details.solutions.1.title",
          description: "industries.retail-ecommerce.details.solutions.1.description",
          icon: FaChartLine
        },
        {
          title: "industries.retail-ecommerce.details.solutions.2.title",
          description: "industries.retail-ecommerce.details.solutions.2.description",
          icon: MdInventory
        },
        {
          title: "industries.retail-ecommerce.details.solutions.3.title",
          description: "industries.retail-ecommerce.details.solutions.3.description",
          icon: FaUserGraduate
        }
      ],
      howWePerform: "industries.retail-ecommerce.details.howWePerform"
    }
  },
  {
    slug: "healthcare-diagnostics",
    title: "industries.healthcare-diagnostics.title",
    icon: FaHeartbeat,
    shortDescription: "industries.healthcare-diagnostics.shortDescription",
    details: {
      overview: "industries.healthcare-diagnostics.details.overview",
      solutions: [
        {
          title: "industries.healthcare-diagnostics.details.solutions.0.title",
          description: "industries.healthcare-diagnostics.details.solutions.0.description",
          icon: FaFileInvoiceDollar
        },
        {
          title: "industries.healthcare-diagnostics.details.solutions.1.title",
          description: "industries.healthcare-diagnostics.details.solutions.1.description",
          icon: MdScreenSearchDesktop
        },
        {
          title: "industries.healthcare-diagnostics.details.solutions.2.title",
          description: "industries.healthcare-diagnostics.details.solutions.2.description",
          icon: FaSearchDollar
        },
        {
          title: "industries.healthcare-diagnostics.details.solutions.3.title",
          description: "industries.healthcare-diagnostics.details.solutions.3.description",
          icon: FaChartLine
        }
      ],
      howWePerform: "industries.healthcare-diagnostics.details.howWePerform"
    }
  },
  {
    slug: "education-edtech",
    title: "industries.education-edtech.title",
    icon: FaUserGraduate,
    shortDescription: "industries.education-edtech.shortDescription",
    details: {
      overview: "industries.education-edtech.details.overview",
      solutions: [
        {
          title: "industries.education-edtech.details.solutions.0.title",
          description: "industries.education-edtech.details.solutions.0.description",
          icon: FaRobot
        },
        {
          title: "industries.education-edtech.details.solutions.1.title",
          description: "industries.education-edtech.details.solutions.1.description",
          icon: MdAssessment
        },
        {
          title: "industries.education-edtech.details.solutions.2.title",
          description: "industries.education-edtech.details.solutions.2.description",
          icon: FaBook
        },
        {
          title: "industries.education-edtech.details.solutions.3.title",
          description: "industries.education-edtech.details.solutions.3.description",
          icon: MdSchool
        }
      ],
      howWePerform: "industries.education-edtech.details.howWePerform"
    }
  },
  {
    slug: "finance-banking",
    title: "industries.finance-banking.title",
    icon: FaLandmark,
    shortDescription: "industries.finance-banking.shortDescription",
    details: {
      overview: "industries.finance-banking.details.overview",
      solutions: [
        {
          title: "industries.finance-banking.details.solutions.0.title",
          description: "industries.finance-banking.details.solutions.0.description",
          icon: FaShieldAlt
        },
        {
          title: "industries.finance-banking.details.solutions.1.title",
          description: "industries.finance-banking.details.solutions.1.description",
          icon: FaChartLine
        },
        {
          title: "industries.finance-banking.details.solutions.2.title",
          description: "industries.finance-banking.details.solutions.2.description",
          icon: MdRule
        },
        {
          title: "industries.finance-banking.details.solutions.3.title",
          description: "industries.finance-banking.details.solutions.3.description",
          icon: FaRobot
        }
      ],
      howWePerform: "industries.finance-banking.details.howWePerform"
    }
  },
  {
    slug: "manufacturing-logistics",
    title: "industries.manufacturing-logistics.title",
    icon: FaIndustry,
    shortDescription: "industries.manufacturing-logistics.shortDescription",
    details: {
      overview: "industries.manufacturing-logistics.details.overview",
      solutions: [
        {
          title: "industries.manufacturing-logistics.details.solutions.0.title",
          description: "industries.manufacturing-logistics.details.solutions.0.description",
          icon: FaCogs
        },
        {
          title: "industries.manufacturing-logistics.details.solutions.1.title",
          description: "industries.manufacturing-logistics.details.solutions.1.description",
          icon: FaFlask
        },
        {
          title: "industries.manufacturing-logistics.details.solutions.2.title",
          description: "industries.manufacturing-logistics.details.solutions.2.description",
          icon: FaTruck
        },
        {
          title: "industries.manufacturing-logistics.details.solutions.3.title",
          description: "industries.manufacturing-logistics.details.solutions.3.description",
          icon: FaWarehouse
        }
      ],
      howWePerform: "industries.manufacturing-logistics.details.howWePerform"
    }
  }
];

export default industries;
