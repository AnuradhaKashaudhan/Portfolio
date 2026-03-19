import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, Code, Brain } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import bgEducation from '@/assets/bg-education.png';
import bgHighlights from '@/assets/bg-highlights.png';
import bgFocus from '@/assets/bg-focus.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Bio */}
          <div className="glass rounded-2xl p-6 mb-8">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              I am <span className="text-foreground font-semibold">Anuradha Kashaudhan</span>, a Computer Science and Engineering student at Lovely Professional University with a CGPA of 7.89. I am passionate about software development, problem solving, and building scalable applications. I have strong programming skills in Python, C++, JavaScript, Java, and SQL, along with experience in ReactJS, web development, and machine learning.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-4">
              I have solved <span className="text-primary font-semibold">200+ problems on LeetCode</span> and <span className="text-primary font-semibold">250+ problems on GeeksforGeeks</span>, which has strengthened my understanding of data structures, algorithms, and analytical thinking. I also gained practical industry exposure through internships in Software Development and Machine Learning.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-4">
              As a continuous learner and team player, I enjoy exploring new technologies and improving my skills to build efficient and impactful software solutions.
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="w-full grid grid-cols-3 bg-muted/50 backdrop-blur-sm rounded-xl p-1 h-auto">
              <TabsTrigger value="education" className="flex items-center gap-2 py-2.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm">
                <GraduationCap size={16} />
                Education
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex items-center gap-2 py-2.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm">
                <Code size={16} />
                Highlights
              </TabsTrigger>
              <TabsTrigger value="focus" className="flex items-center gap-2 py-2.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm">
                <Brain size={16} />
                Focus Areas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="education" className="mt-4">
              <motion.div
                className="glass rounded-2xl p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <img src={bgEducation} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground">Lovely Professional University</h4>
                    <p className="text-primary font-semibold text-sm">BTech CSE Student</p>
                    
                    <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        2023–2027 (Current)
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        Phagwara, Punjab, India
                      </span>
                      <span className="flex items-center gap-1">
                        <Award size={12} />
                        CGPA: 7.9
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                      Pursuing Bachelor of Technology in Computer Science Engineering with a CGPA of 7.9. Actively involved in technical hackathons, coding competitions, and data science projects. Participated in Virtu Hack hackathon and won. Focused on Data Science, Machine Learning, and Web Development.
                    </p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="skills" className="mt-4">
              <motion.div
                className="glass rounded-2xl p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <img src={bgFocus} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'LeetCode', value: '200+ Problems Solved', icon: '🏆' },
                    { label: 'GeeksforGeeks', value: '250+ Problems Solved', icon: '💻' },
                    { label: 'Hackathon', value: 'Virtu Hack Winner', icon: '🥇' },
                    { label: 'Languages', value: 'Python, C++, Java, JS, SQL', icon: '⚡' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-foreground font-semibold text-sm">{item.label}</p>
                        <p className="text-muted-foreground text-xs">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="focus" className="mt-4">
              <motion.div
                className="glass rounded-2xl p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <img src={bgHighlights} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none" />
                <div className="flex flex-wrap gap-3">
                  {['Data Science', 'Machine Learning', 'Web Development', 'ReactJS', 'Problem Solving', 'DSA', 'Software Development'].map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
