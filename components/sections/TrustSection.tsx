import { Container } from '@/components/ui/Container';

const categories = ['AI', 'Automation', 'Bookings', 'Customer Experience', 'Analytics', 'Marketing'];

export function TrustSection() {
  return (
    <section className="py-16">
      <Container>
        <p className="text-center text-sm text-ink-500">
          Technology designed for businesses that value better customer experiences.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {categories.map((category) => (
            <span key={category} className="text-sm font-medium uppercase tracking-widest text-ink-300">
              {category}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
