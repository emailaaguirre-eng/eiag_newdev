"use client";

import { motion } from "framer-motion";
import { 
  Play, 
  Video,
  DollarSign,
  MapPin,
  GraduationCap,
  Building2,
  Lightbulb
} from "lucide-react";

interface VideoItem {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  icon: typeof Play;
}

const videos: VideoItem[] = [
  {
    id: 1,
    title: "About EIAG",
    description: "Discover how EIAG helps companies unlock the full value of government incentives—from tax credits to training reimbursements. With deep expertise and a proven track record, EIAG turns complex incentive programs into strategic growth tools for your business.",
    url: "https://eiag.banddservicing.com/videos/",
    category: "About EIAG",
    icon: Play,
  },
  {
    id: 2,
    title: "EIAG introduces SITE Selection",
    description: "EIAG | SITE delivers a comprehensive approach to site selection—one that goes beyond traditional methods. By harnessing data-driven insights, it empowers smarter, more strategic decisions aligned with your business objectives. Conventional strategies often overlook hidden potential, missing the broader picture.",
    url: "https://youtu.be/7Lpl7MtupCQ",
    category: "Site Selection",
    icon: MapPin,
  },
  {
    id: 3,
    title: "Arizona Qualified Facilities Tax Credit",
    description: "Learn how EIAG helps companies secure up to $30 million annually by leveraging capital investment and job creation strategies. Ideal for manufacturers, R&D facilities, and headquarters expansion in Arizona.",
    url: "https://youtu.be/4f63V_tnmvQ",
    category: "Tax Credits",
    icon: DollarSign,
  },
  {
    id: 4,
    title: "California Job Training",
    description: "The California ETP program empowers businesses to define their own training goals while offering financial support to make them happen. Since its inception, ETP has awarded over $1 billion to more than 80,000 California businesses.",
    url: "https://youtu.be/tzJYbJdAjWU",
    category: "Job Training",
    icon: GraduationCap,
  },
  {
    id: 5,
    title: "Maine Job Training",
    description: "Highlight of the employer incentives available in the State of Maine, with a focus on opportunities tailored to the manufacturing sector.",
    url: "https://youtu.be/39iiQFFGeM8",
    category: "Job Training",
    icon: GraduationCap,
  },
  {
    id: 6,
    title: "The EIAG Contact Form",
    description: "Getting started is simple and secure: by filling out our contact form, our team will promptly connect and explore how we can support your business. No hassle, no uncertainty—just expert-driven results.",
    url: "https://youtu.be/PVBkriYLTq0",
    category: "Getting Started",
    icon: Lightbulb,
  },
];

function VideoCard({ video, index }: { video: VideoItem; index: number }) {
  const Icon = video.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100 overflow-hidden group"
    >
      {/* Video Thumbnail Placeholder */}
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-video bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center cursor-pointer"
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
        <div className="relative z-10">
          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-10 w-10 text-primary ml-1" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
            {video.category}
          </span>
        </div>
      </a>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-black text-primary mb-3">{video.title}</h3>
        <p className="text-neutral-700 leading-relaxed mb-4">{video.description}</p>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-accent font-semibold hover:text-accent-dark transition-colors duration-200"
        >
          <span>Watch Video</span>
          <span>→</span>
        </a>
      </div>
    </motion.div>
  );
}

export default function VideosContent() {
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
            <Video className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              Learn More About EIAG
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Learn more about EIAG and the programs we help businesses with everyday.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-section-lg bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-lg bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Watch our videos to learn more, or contact us directly to see how we can help your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Contact Us</span>
                <span>→</span>
              </a>
              <a
                href="https://eiag.banddservicing.com/videos/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-50 transition-colors duration-200 border-2 border-primary"
              >
                <span>View All Videos</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

