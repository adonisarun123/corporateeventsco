import { Section, SectionHeading, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading
          eyebrow="404"
          title="We couldn't find that page."
          subtitle="The link may be old, or the page may have moved. Try one of these instead."
          align="center"
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg">Home</Button>
          <Button href="/services" size="lg" variant="secondary">Services</Button>
          <Button href="/contact" size="lg" variant="ghost">Contact</Button>
        </div>
      </div>
    </Section>
  );
}
