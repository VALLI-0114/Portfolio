import { Trophy, Star, Users, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// --- Import your badge images ---
// For PowerBI and ACM (as before)
import powerBiBadge from '@/assets/PB.jpeg';
import acmBadge from '@/assets/ACM.jpg';

// Import individual LeetCode badge images
import leetcode50DaysBadge from '@/assets/50days.png';
import leetcodeDCCJuneBadge from '@/assets/june.png';
import leetcodeDCCJulyBadge from '@/assets/july.png';
import leetcodeSQL50Badge from '@/assets/sql50.png';
import leetcodeDCCMayBadge from '@/assets/may.png';
import leetcode100DaysBadge from '@/assets/100days.png';


interface Achievement {
  title: string;
  description: string;
  type: 'leetcode' | 'powerbi' | 'leadership';
  link?: string;
  imageSrc?: string;
}

const AchievementsSection = () => {
  const achievements: Achievement[] = [
    {
      title: "50 Days Badge",
      description: "Completed 50 consecutive days of coding challenges on LeetCode",
      type: "leetcode",
      imageSrc: leetcode50DaysBadge,
    },
    {
      title: "DCC June 2025 Badge",
      description: "Completed Daily Coding Challenge for June 2025 on LeetCode",
      type: "leetcode",
      imageSrc: leetcodeDCCJuneBadge,
    },
    {
      title: "DCC July 2025 Badge",
      description: "Completed Daily Coding Challenge for July 2025 on LeetCode",
      type: "leetcode",
      imageSrc: leetcodeDCCJulyBadge,
    },
    {
      title: "SQL 50 Badge",
      description: "Completed 50 SQL problems on LeetCode demonstrating database proficiency",
      type: "leetcode",
      imageSrc: leetcodeSQL50Badge,
    },
    {
      title: "DCC May 2025 Badge",
      description: "Completed Daily Coding Challenge for May 2025 on LeetCode",
      type: "leetcode",
      imageSrc: leetcodeDCCMayBadge,
    },
    {
      title: "100 Days Badge",
      description: "Achieved 100 consecutive days of problem solving on LeetCode",
      type: "leetcode",
      imageSrc: leetcode100DaysBadge,
    },
    {
      title: "Co-pilot in Power BI Badge",
      description: "Earned certification badge for Co-pilot functionality in Power BI",
      type: "powerbi",
      link: "https://www.linkedin.com/posts/kundum-pravallika-4a1249296_get-started-with-copilot-in-power-bi-activity-7331313469658411008-7f2C",
      imageSrc: powerBiBadge
    },
    {
      title: "Deputy Secretary - ACM Student Chapter",
      description: "Representing as Deputy Secretary in ACM Student Chapter at JNTU-GV Vizianagaram",
      type: "leadership",
      link: "https://www.linkedin.com/posts/kundum-pravallika-4a1249296_proud-moment-acm-student-chapter-jntugv-cev-activity-7314826486169903104-bFNX",
      imageSrc: acmBadge
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'leetcode':
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 'powerbi':
        return <Star className="h-5 w-5 text-blue-500" />;
      case 'leadership':
        return <Users className="h-5 w-5 text-purple-500" />;
      default:
        return <Trophy className="h-5 w-5 text-cosmic-blue" />;
    }
  };

  const getGradient = (type: string) => {
    switch (type) {
      case 'leetcode':
        return 'from-yellow-500/20 to-orange-500/20';
      case 'powerbi':
        return 'from-blue-500/20 to-indigo-500/20';
      case 'leadership':
        return 'from-purple-500/20 to-pink-500/20';
      default:
        return 'from-space-primary/20 to-cosmic-blue/20';
    }
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* LeetCode Badges */}
          <div className="mb-12">
            <h3 className="text-2xl font-display font-semibold mb-6 text-white text-center">LeetCode Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {achievements.filter(achievement => achievement.type === 'leetcode').map((achievement, index) => (
                <Card key={index} className="space-card group hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] text-center">
                  <CardHeader className="pb-4">
                    <div className={`mx-auto p-2 rounded-full bg-gradient-to-r ${getGradient(achievement.type)} w-fit mb-4`}>
                      {achievement.imageSrc && (
                        <img 
                          src={achievement.imageSrc} 
                          alt={`${achievement.title} badge`}
                          className="h-12 w-12 rounded-full object-cover border-2 border-slate-700/50"
                        />
                      )}
                    </div>
                    <CardTitle className="text-lg font-display group-hover:text-blue-400 transition-colors text-white">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {achievement.description}
                    </p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      {getIcon(achievement.type)}
                      <span className="text-xs font-medium capitalize text-gray-400">LeetCode</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Achievements */}
          <div className="mt-12">
            <h3 className="text-2xl font-display font-semibold mb-6 text-white text-center">Other Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {achievements.filter(achievement => achievement.type !== 'leetcode').map((achievement, index) => (
                <Card key={index} className="space-card group hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] text-center">
                  <CardHeader className="pb-4">
                    <div className={`mx-auto p-2 rounded-full bg-gradient-to-r ${getGradient(achievement.type)} w-fit mb-4`}>
                      {achievement.imageSrc && (
                        <img 
                          src={achievement.imageSrc} 
                          alt={`${achievement.title} badge`}
                          className="h-12 w-12 rounded-full object-cover border-2 border-slate-700/50"
                        />
                      )}
                    </div>
                    <CardTitle className="text-lg font-display group-hover:text-blue-400 transition-colors text-white">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {achievement.description}
                    </p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      {getIcon(achievement.type)}
                      <span className="text-xs font-medium capitalize text-gray-400">
                        {achievement.type === 'powerbi' ? 'Power BI' : 'Leadership'}
                      </span>
                    </div>
                    {achievement.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400"
                        onClick={() => window.open(achievement.link, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              "Continuous learning and achievement in competitive programming and professional development"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;