import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getProjectBySlug } from '@/data/projects';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Case Study | Francis Kanu`;
      const meta = document.querySelector('meta[name="description"]');
      const desc = project.description.slice(0, 155);
      if (meta) {
        meta.setAttribute('content', desc);
      } else {
        const m = document.createElement('meta');
        m.name = 'description';
        m.content = desc;
        document.head.appendChild(m);
      }
    }
  }, [project]);

  const projectJsonLd = project ? {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    url: typeof window !== 'undefined' ? window.location.href : '',
    codeRepository: project.codeUrl,
    programmingLanguage: project.technologies?.slice(0, 6),
    keywords: project.technologies?.join(', '),
  } : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Project not found</h1>
          <p className="text-muted-foreground mb-6">The project you are looking for does not exist.</p>
          <Link to="/" className="text-primary underline">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gradient mb-4">{project.title}</h1>
        <p className="text-muted-foreground mb-8 max-w-3xl">{project.description}</p>

        <div className="mb-8">
          <h2 className="font-semibold mb-2">Core technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="px-3 py-1 rounded bg-muted text-sm">{t}</span>
            ))}
          </div>
        </div>

        {project.metric && (
          <p className="text-sm text-muted-foreground mb-8">{project.metric}</p>
        )}

        <div className="flex gap-4">
          <a className="underline text-primary" href={project.codeUrl} target="_blank" rel="noreferrer">View code</a>
          <a className="underline text-primary" href={project.demoUrl} target="_blank" rel="noreferrer">Live demo</a>
        </div>

        {projectJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;

