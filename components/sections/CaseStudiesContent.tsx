"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Target, 
  CheckCircle2, 
  TrendingUp,
  DollarSign,
  Users,
  MapPin,
  Lightbulb,
  Recycle,
  GraduationCap,
  Wrench,
  Code
} from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  company: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  icon: typeof Building2;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Company Expansion/Relocation",
    category: "Global IT Company",
    company: "Global IT Company",
    overview: "A rapidly expanding technology company with clients consisting of Fortune Global 1000 has international operations with a concentration in the U.S. The company services technology needs for the manufacturing, logistics, retail, and financial services industries.",
    challenge: "As client acquisition accelerated, capacity could no longer be met within existing operations. There was tremendous stress trying to meet customer demand. There were labor shortages, a lack of available space, and limited capital to expand or relocate existing operations.",
    solution: "Economic Incentives Advisory Group (EIAG) was engaged to identify states with a business-friendly climate and labor force that could meet the client's operational objectives. Instead of concentrating on a specific city and state, EIAG created a competitive environment among a number of states and localities that could meet the expansion requirement. Request for Proposals (RFP) were developed and sent to the various locations.",
    results: "Each locality responded with an incentive package specific to the forecast of jobs being created, capital investment, and proposed training expenditures. Initially, the proposals received were 'generic' in nature. EIAG then sent a follow-up communication demonstrating where each community needed to improve to maintain competition for the expansion. The final rounds of incentive packages consisted of cash, tax credits, utility discounts, property tax abatements, and in certain cases – labor commitments. Through this initiative, EIAG was able to lower the costs associated with opening new facilities. These funds, abatements, credits, and other incentives are instrumental in achieving greater profitability – more rapidly.",
    icon: Building2,
  },
  {
    id: 2,
    title: "Company Expansion/Relocation",
    category: "North American Environmental Solutions Company",
    company: "North American Environmental Solutions Company",
    overview: "The industry leader in North American waste solutions was looking to consolidate operations to efficiently serve its base of 21 million customers. The company's primary objective is to manage more than 20 tons of recyclable material by 2020. This company has North America's largest network of recycling facilities and continues to expand its footprint. To achieve this goal, customer service operations needed to be consolidated from a multi-state footprint into one centralized location to create economies of scale. Hiring, training, programs, and product launches could more easily be managed at one central location.",
    challenge: "As the company was evaluating different localities, it was a challenge for the real estate and operations teams to concentrate on incentives. The primary focus was identifying the optimal labor market and facility to house operations. Incentives had clearly become a 'back-burner' priority due to limited resources and time.",
    solution: "Economic Incentives Advisory Group (EIAG) was engaged to identify the available incentives. EIAG conducted interviews with finance, human resource, operations, and real estate. Once the hiring forecasts, capital investment, and occupancy dates were established, EIAG developed an incentives plan.",
    results: "EIAG developed an incentives plan to secure a combination of cash and tax credits. Once the state awarded an incentives package of nearly $6 million, EIAG then established a process to manage payroll requirements, capital expenditures and training expenses so that the funds could be utilized by the company.",
    icon: Recycle,
  },
  {
    id: 3,
    title: "Training Grant Administration",
    category: "Advanced Manufacturing, CA-ETP",
    company: "Advanced Manufacturing Company",
    overview: "A leading global provider of orthopedic devices related to rehabilitation, pain management, and physical therapy was looking to expand product lines. Additionally, the company manufactures and distributes a broad range of surgical reconstructive implant products. The company has become the largest non-surgical orthopedic rehabilitation device company in the United States and among the largest globally. As new products were being launched, their southern California employment base required training on new product lines.",
    challenge: "The company's business activities resulted in the combination of two companies with broad orthopedic product offerings in the United States and foreign countries. The expenses to train the workforce were substantial; however, the company needed to move forward to meet market demand. Training budgets were limited.",
    solution: "Economic Incentives Advisory Group (EIAG) met with members of human resources and operations to learn about forecasted training needs and expenses. EIAG informed the client they could tap into as much as $750,000 in job training reimbursement funds.",
    results: "The company is now developing a budget knowing the state will reimburse up to $750,000 in job training funds. These funds will help their employees get trained more quickly and the budgets are now in place to deliver the right type of training to meet skill set requirements.",
    icon: GraduationCap,
  },
  {
    id: 4,
    title: "Training Grant Administration",
    category: "Mechanical & Electrical Construction Company",
    company: "Mechanical & Electrical Construction Company",
    overview: "A Fortune 500 company with estimated revenues of approximately $7.5B is a leader in mechanical and electrical construction, industrial and energy infrastructure, and building services. The company is a provider of critical infrastructure systems and maintains those systems. The company has approximately 35,000 skilled employees and growing. The company has an aim to be recognized as a world leader in its field and recognized as one of the world's best-managed and most admired organizations.",
    challenge: "The company was experiencing hypergrowth in specific markets. As new projects were on the horizon, the company needed to ramp up and train employees in specific and critical areas. The costs of onboarding and training new and existing personnel were tremendous. The clients demanded specific training be conducted in their fabrication plants. The costs associated were tremendous.",
    solution: "EIAG conducted a study to determine if the company was eligible for funds at the state and local levels. Because of the study, EIAG submitted multiple applications and received significant state and city-level funding. At the county level, services were offered to provide a job fair, screen applicants, and source a talent pool of applicants that met the skill requirements.",
    results: "The company was able to offset material training costs and sourced more qualified applicants to meet the client's demands.",
    icon: Wrench,
  },
  {
    id: 5,
    title: "Research & Development Tax Credit",
    category: "Technology/Payment Processing Company",
    company: "Technology/Payment Processing Company",
    overview: "The client is a technology company that develops payment solutions for merchants and developers. The company has invested heavily in technology, algorithms, and other intelligence tools. The investments had been made through leveraging existing personnel as well as contracting work through third-party developers and engineers.",
    challenge: "The company's significant investments in technology, personnel, sales, and marketing activity were incremental, and did not have the internal resources to research available government incentives. Every time the company tried to take the time to identify government programs, there were other projects that demanded priority.",
    solution: "Economic Incentives Advisory Group (EIAG) met with the leadership group of the organization. It was quickly determined there were significant figures of tax refunds available to the client. Key personnel were interviewed and prior expenses were identified that qualified for federal and state tax credits.",
    results: "The client was able to receive a very significant refund check. Additionally, a process was created to efficiently track future qualified expenses so that the company could continue to receive the economic benefit from this program. The company's profitability has improved as a result of claiming this credit.",
    icon: Code,
  },
];

function CaseStudyCard({ caseStudy, index }: { caseStudy: CaseStudy; index: number }) {
  const Icon = caseStudy.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="inline-flex p-3 rounded-lg bg-white/10 backdrop-blur-sm">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <span className="text-sm font-semibold bg-accent text-primary px-3 py-1 rounded-full">
            Case Study #{caseStudy.id}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black mb-2 text-white">{caseStudy.title}</h2>
        <p className="text-xl text-white/90">{caseStudy.category}</p>
      </div>

      {/* Content */}
      <div className="p-8 space-y-8">
        {/* Overview */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Target className="h-6 w-6 text-white bg-primary rounded p-1" />
            <h3 className="text-xl font-black text-primary">Overview</h3>
          </div>
          <p className="text-neutral-700 leading-relaxed">{caseStudy.overview}</p>
        </div>

        {/* Challenge */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="h-6 w-6 text-white bg-accent rounded p-1" />
            <h3 className="text-xl font-black text-primary">Challenge</h3>
          </div>
          <p className="text-neutral-700 leading-relaxed">{caseStudy.challenge}</p>
        </div>

        {/* Solution */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Lightbulb className="h-6 w-6 text-white bg-success rounded p-1" />
            <h3 className="text-xl font-black text-primary">Solution</h3>
          </div>
          <p className="text-neutral-700 leading-relaxed">{caseStudy.solution}</p>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-success/10 to-successAlt/10 rounded-xl p-6 border-l-4 border-success">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle2 className="h-6 w-6 text-white bg-success rounded p-1" />
            <h3 className="text-xl font-black text-primary">Results</h3>
          </div>
          <p className="text-neutral-700 leading-relaxed">{caseStudy.results}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudiesContent() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-section-lg bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Real results from real clients. See how EIAG has helped companies secure billions in incentives and make strategic location decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <DollarSign className="h-10 w-10 text-accent mx-auto mb-2" />
              <div className="text-3xl font-black text-primary mb-1">$15B+</div>
              <div className="text-sm text-neutral-600">Secured for Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <Users className="h-10 w-10 text-success mx-auto mb-2" />
              <div className="text-3xl font-black text-primary mb-1">500+</div>
              <div className="text-sm text-neutral-600">Successful Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <MapPin className="h-10 w-10 text-successAlt mx-auto mb-2" />
              <div className="text-3xl font-black text-primary mb-1">50+</div>
              <div className="text-sm text-neutral-600">States Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <CheckCircle2 className="h-10 w-10 text-accent mx-auto mb-2" />
              <div className="text-3xl font-black text-primary mb-1">95%+</div>
              <div className="text-sm text-neutral-600">Client Retention</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-section-lg bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
            ))}
          </div>

          {/* Coming Soon / More Case Studies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-xl p-8 shadow-card border border-neutral-100">
              <h3 className="text-2xl font-black text-primary mb-4">
                More Case Studies Coming Soon
              </h3>
              <p className="text-neutral-600 mb-6">
                We're continuously adding new success stories. Check back soon for more examples of how EIAG has helped businesses achieve their goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

