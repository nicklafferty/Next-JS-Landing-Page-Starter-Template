import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a></a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a></a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500">
              Real-time SEO Monitoring Platform
            </span>
            {/* {'for busy website owners.'} */}
          </>
        }
        description="Prevent rank decay with proactive alerts to update your content."
        button={
          <Link href="">
            <a>
              <Button xl>Join The Waitlist</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
