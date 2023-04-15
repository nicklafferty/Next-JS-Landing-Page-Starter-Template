import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="UpdateMate monitors your website so you don't have to."
    description="That blog post you wrote a year ago? It's time to update it. Get proactive alerts, beautiful charts, and a nice sitemap visualization so you can get back to creating content."
  >
    <VerticalFeatureRow
      title="Automated alerts"
      description="Get notified when it's time to update old content, based on age, traffic decay, and other factors."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
    />
    <VerticalFeatureRow
      title="Beautiful SEO charts"
      description="Let's face it, the charts in Google Search Console suck. UpdateMate displays beautiful and useful charts you can actually send to your boss."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Visual sitemaps"
      description="Easily visualize how your website is structured."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
