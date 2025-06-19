import Link from "next/link";

export default function Home() {

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
            DecapCMS Admin
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
            Content Management System for Your Blog
          </p>
          <Link
            href="/admin"
            style={{
              display: 'inline-block',
              backgroundColor: '#0066cc',
              color: 'white',
              padding: '12px 24px',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '1.1rem'
            }}
          >
            Open CMS Admin
          </Link>
        </header>

        <main>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid #e9ecef'
          }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>
              Welcome to Your CMS
            </h2>
            <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              This is your content management system. Use the admin panel to create and manage blog posts
              that will be published to your target blog repository.
            </p>

            <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>How it works:</h3>
              <ul style={{ color: '#666', lineHeight: '1.8' }}>
                <li>• Create posts in the admin panel</li>
                <li>• Content is saved to your target blog repository</li>
                <li>• Your blog automatically updates with new content</li>
              </ul>
            </div>

            <Link
              href="/admin"
              style={{
                display: 'inline-block',
                backgroundColor: '#0066cc',
                color: 'white',
                padding: '12px 32px',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '1.1rem'
              }}
            >
              Start Creating Content →
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
