import Image from 'next/image';
import Link from 'next/link';


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Hero Section */}
            <section className="space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Wahyu Akhmad Fadillah"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 text-center md:text-left">
                  <h1 className="text-3xl font-serif">Wahyu Akhmad Fadillah</h1>
                  <p className="text-lg text-muted-foreground">Full Stack Developer</p>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="space-y-6">
              <h2 className="font-mono text-sm text-muted-foreground">
                ◆ [ABOUT]
              </h2>
              <div className="prose prose-sm dark:prose-invert">
                <p>
                  I'm a passionate full-stack developer with a focus on creating elegant, 
                  efficient, and user-friendly applications. I love solving complex problems 
                  and building innovative solutions that make a difference.
                </p>
                <p>
                  Currently working at Instagram, previously at Apple. I specialize in 
                  modern web technologies and enjoy exploring new tools and frameworks 
                  to create better digital experiences.
                </p>
              </div>
            </section>

            {/* Skills Section */}
            <section className="space-y-6">
              <h2 className="font-mono text-sm text-muted-foreground">
                ◆ [SKILLS]
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'TypeScript',
                  'React',
                  'Next.js',
                  'Node.js',
                  'Python',
                  'PostgreSQL',
                  'Docker',
                  'AWS',
                  'GraphQL',
                  'Tailwind CSS',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 bg-muted rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section className="space-y-6">
              <h2 className="font-mono text-sm text-muted-foreground">
                ◆ [EXPERIENCE]
              </h2>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Instagram</h3>
                    <span className="text-sm text-muted-foreground">2024 - Present</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Apple</h3>
                    <span className="text-sm text-muted-foreground">2022 - 2024</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="space-y-6">
              <h2 className="font-mono text-sm text-muted-foreground">
                ◆ [CONTACT]
              </h2>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="mailto:hello@fadils.xyz"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@fadils.xyz
                </Link>
                <Link
                  href="https://github.com/fadilsflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/fadilsflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </Link>
              </div>
            </section>avbar
          </div>
        </div>
      </main>
    </div>
  );
} 