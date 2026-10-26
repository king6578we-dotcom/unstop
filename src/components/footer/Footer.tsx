'use client';

import React, { useId, useRef, useState } from 'react';

type FooterLink = {
  label: string;
  href: string;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

const WEBSITE = '#';
const ASSETS =
  'https://d8it4huxumps7.cloudfront.net/uploads/images';

const images = {
  logo: `${ASSETS}/unstop/svg/unstop-logo.svg`,
  hiring: `${ASSETS}/694baa56aab62_we_are_hiring_footer_new_img.svg`,
  googlePlay: `${ASSETS}/690c6771810e0_googleplay.svg`,
  appStore: `${ASSETS}/690c67948ff84_apple_store.svg`,
  payments: `${ASSETS}/692925bc2b20c_unstop_payment_info_footer_imag.png?d=1360x104`,
  gdpr: `${ASSETS}/unstop/gdpr-logo.png?d=150x150`,
  iso27001: `${ASSETS}/6231c2a5bdf94_iso_27001.svg`,
  iso9001: `${ASSETS}/6231c2c0b51ff_iso_9001.svg`,
};

const officialLink = (label: string, _path?: string): FooterLink => ({
  label,
  href: '#',
});

// Existing application section links are preserved.
const sectionLinks = (
  labels: string[],
  href: string,
): FooterLink[] => labels.map((label) => ({ label, href }));

const columns: FooterGroup[][] = [
  [
    {
      title: 'Products',
      links: [
        officialLink('Engage Talent', '/employers/employer-branding'),
        officialLink('AI Sourcing Agent', '/employers/ai-sourcing-agent'),
        officialLink('AI Screening Agent', '/employers/ai-screening-agent'),
        officialLink('AI Assessment Agent', '/employers/ai-assessment-agent'),
        officialLink('AI Interview Agent', '/employers/ai-interview-agent'),
        officialLink('AI Proctoring Agent', '/employers/ai-proctoring-agent'),
      ],
    },
    {
      title: 'Mentorship',
      links: sectionLinks(
        [
          'Be a Mentor',
          'Explore Mentors',
          'Mentorship FAQs',
          'Mentorship Blogs',
        ],
        '#',
      ),
    },
    {
      title: 'Our Properties',
      links: [
        officialLink('Unstop Talent Awards 2026', '/awards/2026'),
        officialLink('Unstop Talent Meet 2026', '/unstop-talent-meet-2026'),
        officialLink('Unstop Talent Report 2026', '/talent-report-2026'),
        officialLink(
          'Education Loan EMI Calculator',
          '/tools/education-loan-emi-calculator',
        ),
        officialLink('Unstop Igniters Club', '/unstop-igniters-club'),
        officialLink('Online Quizzing Festival', '/online-quizzing-festival'),
      ],
    },
    {
      title: 'Legal',
      links: [
        officialLink('Terms & Conditions', '/legal/terms-of-use'),
        officialLink('Privacy Policy', '/legal/privacy-policy'),
        officialLink('Sitemap', '/directory/competitions/a/1'),
      ],
    },
  ],
  [
    {
      title: 'Participate',
      links: [
        { label: 'Competitions & Challenges', href: '#competitions' },
        { label: 'Assessments', href: '#assessments' },
        { label: 'Hackathons', href: '#hackathons' },
        { label: 'Workshops & Webinars', href: '#workshops' },
        { label: 'Conferences', href: '#conferences' },
        { label: 'Cultural Events', href: '#cultural' },
        { label: 'College Festivals', href: '#festivals' },
      ],
    },
    {
      title: 'Apply',
      links: [
        { label: 'Internships', href: '#internships' },
        { label: 'Jobs', href: '#jobs' },
        { label: 'Scholarships', href: '#scholarships' },
        { label: 'Summer Internships', href: '#internships' },
        { label: 'PPO Internships', href: '#internships' },
        { label: 'Government Jobs', href: '#jobs' },
        { label: 'Government Internship', href: '#internships' },
        { label: 'International Internships', href: '#internships' },
      ],
    },
    {
      title: 'For Business',
      links: [
        officialLink('Clientele', '/employers/clients'),
        officialLink('Partner With Us', '/our-partners/become-a-partner'),
        officialLink('Partners', '/our-partners'),
        officialLink('Testimonials', '/employers/testimonials'),
        officialLink('Case Studies', '/employers/case-studies'),
        officialLink('Post now', '/post-now'),
      ],
    },
  ],
  [
    {
      title: 'Learn',
      links: [
        officialLink('Courses', '/courses'),
        officialLink('Articles', '/blog'),
        officialLink('Blog Series', '/blog-series'),
        officialLink('Workshops', '/workshops'),
        officialLink('Resources', '/resources'),
      ],
    },
    {
      title: 'Practice',
      links: [
        officialLink(
          '5 Days Interview Prep',
          '/college-fests/5dayinterviewprep-unstop-254952',
        ),
        officialLink('Code & Ace Hiring Assessments', '/practice/coding'),
        officialLink('100-Day of Coding Sprint', '/practice/100-days-of-code'),
      ],
    },
    {
      title: 'Others',
      links: [
        officialLink('About Us', '/about'),
        officialLink('Careers', '/about/unstop-careers'),
        officialLink('Life at Unstop', '/about/life-at-unstop'),
        officialLink('FAQs', '/faq'),
        officialLink('Branding Guidelines', '/our-partners/branding-guidelines'),
        officialLink('Unstop Rewards Program', '/unstop-rewards-program'),
        officialLink('Unstop on Shark Tank', '/unstoppitchsharktank'),
        {
          label: 'Unstop Campus Champions',
          href: '#',
        },
        { label: 'Request a Feature', href: '#feature' },
        officialLink('Build your Resume', '/resume-builder'),
      ],
    },
  ],
];

const socialLinks = [
  {
    name: 'X',
    href: '#',
    image: `${ASSETS}/65b8ddae44fdd_twitter_logo.svg`,
  },
  {
    name: 'Instagram',
    href: '#',
    image: `${ASSETS}/social-share/instagram-icon.svg`,
  },
  {
    name: 'LinkedIn',
    href: '#',
    image: `${ASSETS}/social-share/linkedin-icon.svg`,
  },
  {
    name: 'Facebook',
    href: '#',
    image: `${ASSETS}/social-share/facebook-icon.svg`,
  },
  {
    name: 'Telegram',
    href: '#',
    image: `${ASSETS}/social-share/telegram-icon.svg`,
  },
  {
    name: 'Discord',
    href: '#',
    image: `${ASSETS}/social-share/discord-icon.svg`,
  },
  {
    name: 'YouTube',
    href: '#',
    image: `${ASSETS}/social-share/youtube-icon.svg`,
  },
];

const cities = [
  ['Hyderabad', '#jobs-hyd'],
  ['Bangalore', '#jobs-blr'],
  ['Mumbai', '#jobs-mum'],
  ['Delhi', '#jobs-del'],
  ['Kolkata', '#jobs-kol'],
  ['Chennai', '#jobs-che'],
  ['Pune', '#jobs-pun'],
  ['Ahmedabad', '#jobs-ahm'],
  ['Jaipur', '#jobs-jai'],
  ['Chandigarh', '#jobs-chd'],
  ['Noida', '#jobs-noi'],
  ['Gurgaon', '#jobs-gur'],
];

const extraGroups: FooterGroup[] = [
  {
    title: 'Skill based jobs',
    links: sectionLinks(
      [
        'Content Writing Jobs',
        'Digital Marketing Jobs',
        'Data Science Jobs',
        'Accounting Jobs',
        'Backend Developer Jobs',
        'Electrical Engineer Jobs',
        'Frontend Developer Jobs',
        'Graphic Designer Jobs',
        'Growth Marketing Jobs',
        'Machine Learning Jobs',
        'Mechanical Engineer Jobs',
        'Civil Engineer Jobs',
      ],
      '#jobs-skill',
    ),
  },
  {
    title: 'Internships by Location',
    links: sectionLinks(
      [
        'Bangalore',
        'Chennai',
        'Pune',
        'Hyderabad',
        'Delhi',
        'Mumbai',
        'Noida',
        'Jaipur',
        'Chandigarh',
        'Coimbatore',
        'Ahmedabad',
        'Kolkata',
      ].map((city) => `Internship in ${city}`),
      '#intern-loc',
    ),
  },
  {
    title: 'Skill based internships',
    links: sectionLinks(
      [
        'Data Analysis Internships',
        'Data Science Internships',
        'Software Development Internships',
        'Digital Marketing Internships',
        'Web Development Internships',
        'UI/UX Internships',
        'HR Internships',
        'Finance Internships',
        'DevOps Internships',
        'AI Internships',
        'Graphic Design Internship',
      ],
      '#intern-skill',
    ),
  },
  {
    title: 'Work from Home Jobs',
    links: sectionLinks(
      [
        'Bangalore',
        'Chennai',
        'Hyderabad',
        'Delhi',
        'Pune',
        'Mumbai',
        'Kolkata',
        'Ahmedabad',
        'Noida',
        'Jaipur',
        'Chandigarh',
        'Coimbatore',
      ].map((city) => `Work from Home Jobs in ${city}`),
      '#wfh',
    ),
  },
  {
    title: 'Mentorship from Industry Experts',
    links: sectionLinks(
      [
        'CV Review',
        'MBA Preparation',
        'Case Competition',
        'Placement Support',
        'Interview Preparation',
        'Career Guidance',
        'Personal Branding',
        'Study Abroad',
        'Coding & Software',
      ],
      '#',
    ),
  },
  {
    title: 'Practice',
    links: sectionLinks(
      [
        'Skill Based Mock Assessments',
        'Company Preparation',
        'Machine Learning Projects',
        'AI-Powered Mock Tests',
        'AI-Powered Mock Interview',
        '100 Days Coding Sprint',
        'AI-Powered Skill-Based Mock Tests',
        'Code Conquest',
      ],
      '#practice',
    ),
  },
];


function ArrowIcon({ direction = 'diagonal' }: { direction?: 'diagonal' | 'down' | 'up' }) {
  const paths = { diagonal: 'M7 17 17 7M7 7h10v10', down: 'm5 9 7 7 7-7', up: 'm5 15 7-7 7 7' };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d={paths[direction]} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}

function FooterLinkGroup({ group, wide = false }: { group: FooterGroup; wide?: boolean }) {
  return (
    <section className={wide ? 'uf-wideGroup' : 'uf-linkGroup'}>
      <h3>{group.title}</h3>
      <ul>
        {group.links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>
              {link.label === 'Education Loan EMI Calculator' ? (
                <>
                  Education Loan
                  <br />
                  EMI Calculator
                </>
              ) : (
                link.label
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Scoped styles matched directly to the user's reference screenshots.
const footerStyles = `
.uf-footer {
  --footer-blue: #f2f8fe;
  --footer-ink: #262626;
  --footer-muted: #737b85;
  width: 100%;
  min-width: 0;
  margin-top: 24px;
  color: var(--footer-ink);
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  text-align: left;
  overflow: hidden;
}
.uf-footer *, .uf-footer *::before, .uf-footer *::after { box-sizing: border-box; }
.uf-footer a { color: inherit; text-decoration: none; transition: color 0.15s ease; }
.uf-footer a:hover { color: #0073e6; text-decoration: underline; }
.uf-footer a:focus-visible, .uf-footer button:focus-visible { outline: 2px solid #245bbb; outline-offset: 4px; }
.uf-footer p, .uf-footer h3, .uf-footer ul { margin: 0; padding: 0; }
.uf-footer ul { list-style: none; }
.uf-footer img { display: block; max-width: 100%; object-fit: contain; }
.uf-container { width: calc(100% - 44px); max-width: 980px; margin-inline: auto; }
.uf-blueSection { position: relative; background: var(--footer-blue); }
.uf-topCutout { position: absolute; inset: 0 0 auto; height: 42px; background: #fff; clip-path: polygon(38% 0, 100% 0, 100% 100%, 42% 100%); pointer-events: none; }
.uf-brandRow { position: relative; display: flex; justify-content: space-between; align-items: flex-end; gap: 20px; padding: 28px 0 32px; }
.uf-brand { display: inline-block; }
.uf-brand img { width: 132px; height: auto; }
.uf-tagline { display: flex; align-items: center; gap: 5px; margin-top: 12px !important; font-size: 14px; line-height: 22px; color: #262626; }
.uf-tagline svg { flex-shrink: 0; transform: rotate(-9deg); width: 20px; height: 20px; }
.uf-socials { display: flex; align-items: center; gap: 16px; padding-bottom: 2px; }
.uf-socials a { display: flex; width: 24px; height: 24px; align-items: center; justify-content: center; opacity: 0.88; transition: transform 0.15s, opacity 0.15s; }
.uf-socials a:hover { opacity: 1; transform: translateY(-1px); }
.uf-socials img { width: 20px; height: 20px; }
.uf-stripe { height: 5px; background: repeating-linear-gradient(128deg,transparent 0 7px,#bfdbff 7px 10px,transparent 10px 15px); }
.uf-mainGrid { display: grid; grid-template-columns: 1fr 1.05fr 0.85fr 1.28fr; gap: 24px; padding: 30px 0 46px; }
.uf-column { display: flex; flex-direction: column; gap: 22px; min-width: 0; }
.uf-linkGroup h3, .uf-newsletter h3 { font-size: 15px; line-height: 21px; font-weight: 600; margin-bottom: 9px; color: #262626; letter-spacing: -0.1px; }
.uf-linkGroup ul { display: flex; flex-direction: column; gap: 8px; }
.uf-linkGroup li { font-size: 13px; line-height: 19px; color: var(--footer-muted); }
.uf-linkGroup a { display: inline-block; max-width: 100%; }
.uf-column:first-child .uf-linkGroup:nth-child(3) li:nth-child(4) a { max-width: 140px; }
.uf-sideColumn { min-width: 0; }
.uf-hiring { display: block; width: 124px; margin-bottom: 20px; }
.uf-hiring img { width: 124px; height: auto; }
.uf-sideColumn > .uf-stripe { margin-bottom: 20px; }
.uf-action { display: flex; align-items: center; gap: 7px; font-size: 14.5px; line-height: 21px; font-weight: 600; margin-bottom: 18px; color: #262626; }
.uf-action:hover { color: #0073e6; }
.uf-newsletter h3 { margin-bottom: 3px; }
.uf-newsletter p { color: var(--footer-muted); font-size: 12.5px; line-height: 18px; }
.uf-subscribe { display: flex; align-items: center; justify-content: space-between; width: 100%; height: 42px; border-radius: 9px; background: #e5e9ec; overflow: hidden; margin-top: 14px; color: #1c4980 !important; font-size: 13px; letter-spacing: 0.15px; }
.uf-subscribe > span:first-child { padding-inline: 12px; }
.uf-send { display: grid; place-items: center; width: 42px; height: 42px; flex-shrink: 0; background: #1c4980; color: #fff; }
.uf-appLinks { display: flex; gap: 8px; padding: 8px; border: 1px solid #e5e9ed; border-radius: 14px; margin-top: 22px; background: #fff; }
.uf-appLinks a { flex: 1; min-width: 0; display: block; }
.uf-appLinks img { width: 100%; height: 38px; object-fit: contain; }
.uf-jobsSection { background: #fff; padding: 26px 0 24px; }
.uf-wideGroup h3 { font-size: 14.5px; font-weight: 600; line-height: 21px; margin-bottom: 12px; color: #262626; }
.uf-wideGroup ul { display: grid; grid-template-columns: repeat(6,minmax(0,1fr)); column-gap: 14px; row-gap: 10px; }
.uf-wideGroup li { font-size: 13px; line-height: 19px; color: var(--footer-muted); }
.uf-viewMore { display: inline-flex; align-items: center; gap: 8px; padding: 0; margin-top: 24px; border: 0; background: transparent; color: #263d52; font: inherit; font-size: 13.5px; font-weight: 500; cursor: pointer; }
.uf-viewMore:hover { color: #0073e6; }
.uf-moreLinks { margin-top: 22px; padding-top: 20px; border-top: 1px solid #e1e1e1; }
.uf-moreLinks > section + section { margin-top: 22px; }
.uf-copyrightSection { border-top: 1px solid #e2e8f0; background: #fff; position: static; }
.uf-copyrightRow { display: flex; justify-content: space-between; align-items: center; gap: 18px; min-height: 64px; padding-block: 16px; font-size: 12px; line-height: 18px; color: var(--footer-muted); }
.uf-copyrightRow > p a { text-decoration: underline; color: #556170; }
.uf-version { text-align: right; }
.uf-paymentSection { border-top: 1px solid #e2e8f0; background: #fff; position: static; }
.uf-paymentRow { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding-block: 16px; min-height: 80px; }
.uf-paymentLogos { width: min(65%, 520px); height: auto; }
.uf-certifications { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
.uf-certifications img { width: 56px; height: 56px; }
@media (max-width: 860px) {
  .uf-mainGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px 18px; }
  .uf-sideColumn { grid-column: 1 / -1; width: 100%; max-width: 340px; }
  .uf-paymentRow { flex-wrap: wrap; gap: 16px; justify-content: center; }
  .uf-paymentLogos { width: 100%; max-width: 480px; }
  .uf-copyrightRow { align-items: flex-start; }
  .uf-wideGroup ul { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
}
@media (max-width: 600px) {
  .uf-container { width: calc(100% - 24px); }
  .uf-brandRow { flex-direction: column; align-items: flex-start; padding: 22px 0 18px; gap: 16px; }
  .uf-brand img { width: 118px; height: auto; }
  .uf-tagline { font-size: 13.5px; gap: 3px; }
  .uf-tagline svg { width: 18px; height: 18px; }
  .uf-socials { gap: 12px; flex-wrap: wrap; }
  .uf-socials a, .uf-socials img { width: 18px; height: 18px; }
  .uf-mainGrid { grid-template-columns: 1fr; gap: 20px; padding: 20px 0 28px; }
  .uf-linkGroup h3, .uf-newsletter h3 { font-size: 14.5px; }
  .uf-linkGroup li { font-size: 12.5px; }
  .uf-wideGroup ul { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
  .uf-wideGroup li { font-size: 12.5px; }
  .uf-copyrightRow { flex-direction: column; gap: 8px; }
  .uf-version { text-align: left; }
  .uf-paymentRow { justify-content: center; }
  .uf-certifications img { width: 48px; height: 48px; }
}
@media (max-width: 440px) {
  .uf-wideGroup ul { grid-template-columns: 1fr; gap: 6px; }
  .uf-paymentLogos { width: 100%; }
  .uf-certifications { gap: 8px; }
  .uf-certifications img { width: 42px; height: 42px; }
}

.uf-footer { flex-shrink: 0; position: static; }
.uf-footer [hidden] { display: none !important; }
`;

export const Footer: React.FC = () => {
  const [isViewMoreOpen, setIsViewMoreOpen] = useState(false);
  const moreLinksId = useId();
  const jobsSectionRef = useRef<HTMLDivElement>(null);

  return (
    <footer className="uf-footer">
      <style>{footerStyles}</style>
      <div className="uf-blueSection">
        <div className="uf-topCutout" aria-hidden="true" />
        <div className="uf-container">
          <div className="uf-brandRow">
            <div>
              <a href="/" aria-label="Home" className="uf-brand">
                <img src={images.logo} alt="Untop" width={174} height={70} />
              </a>
              <p className="uf-tagline">
                Built with
                <svg width="27" height="27" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#ef3c78" d="M12 21 3 12C-3 5 6-2 12 5c6-7 15 0 9 7Z" />
                </svg>
                in India for the world
              </p>
            </div>
            <nav aria-label="Social media" className="uf-socials">
              {socialLinks.map(social => <a key={social.name} href={social.href} aria-label={social.name}>
                <img src={social.image} alt="" width={28} height={28} />
              </a>)}
            </nav>
          </div>
        </div>
        <div className="uf-stripe" aria-hidden="true" />
        <div className="uf-container">
          <div className="uf-mainGrid">
            {columns.map((column, index) => <div key={index} className="uf-column">
              {column.map(group => <FooterLinkGroup key={group.title} group={group} />)}
            </div>)}
            <aside className="uf-sideColumn">
              <a href="#" className="uf-hiring">
                <img src={images.hiring} alt="We're hiring!" width={136} height={72} />
              </a>
              <div className="uf-stripe" aria-hidden="true" />
              <a href="#" className="uf-action">Contact Us <ArrowIcon /></a>
              <a href="#" className="uf-action">Share Your Story Now <ArrowIcon /></a>
              <div className="uf-newsletter">
                <h3>Stay Updated</h3>
                <p>Get regular updates on opportunities/jobs to showcase your talent and get hired.</p>
                <a href="#" className="uf-subscribe">
                  <span>Subscribe to our newsletter!</span>
                  <span className="uf-send"><svg width="27" height="27" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2 3 22 12 2 21V14l13-2L2 10Z" /></svg></span>
                </a>
              </div>
              <div className="uf-appLinks">
                <a href="#" aria-label="Get on Google Play">
                  <img src={images.googlePlay} alt="Get it on Google Play" width={150} height={50} />
                </a>
                <a href="#" aria-label="Available on the App Store">
                  <img src={images.appStore} alt="Available on the App Store" width={150} height={50} />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div ref={jobsSectionRef} className="uf-jobsSection">
        <div className="uf-container">
          <FooterLinkGroup wide group={{ title: 'Jobs by Location', links: cities.map(([city, href]) => ({ label: 'Jobs in ' + city, href })) }} />
          {!isViewMoreOpen && (
            <button
              type="button"
              className="uf-viewMore"
              aria-expanded={false}
              aria-controls={moreLinksId}
              onClick={() => setIsViewMoreOpen(true)}
            >
              View More
              <ArrowIcon direction="down" />
            </button>
          )}
          <div id={moreLinksId} hidden={!isViewMoreOpen} className="uf-moreLinks">
            {extraGroups.map(group => <FooterLinkGroup key={group.title} group={group} wide />)}
            {isViewMoreOpen && (
              <div>
                <button
                  type="button"
                  className="uf-viewMore"
                  aria-expanded={true}
                  aria-controls={moreLinksId}
                  onClick={() => {
                    setIsViewMoreOpen(false);
                    setTimeout(() => {
                      jobsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 50);
                  }}
                >
                  View Less
                  <ArrowIcon direction="up" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="uf-copyrightSection">
        <div className="uf-container uf-copyrightRow">
          <p>Copyright © 2026 FLIVE Consulting Pvt Ltd - All rights reserved.</p>
          <div className="uf-version">
            <p>Unstop Version: 9.28.2026.13.46</p>
            <p>Best Viewed in Latest Versions of Edge, Mozilla, Chrome, Opera &amp; Safari.</p>
          </div>
        </div>
      </div>

      {/* Payment and Certifications row - at the very bottom */}
      <div className="uf-paymentSection">
        <div className="uf-container uf-paymentRow">
          <img className="uf-paymentLogos" src={images.payments} alt="100% safe and secure payment, SSL encryption, Razorpay, Visa, UPI, Mastercard, RuPay and Maestro" width={850} height={65} loading="lazy" />
          <div className="uf-certifications">
            <img src={images.gdpr} alt="GDPR Ready" width={74} height={74} loading="lazy" />
            <img src={images.iso27001} alt="ISO 27001 certified" width={74} height={74} loading="lazy" />
            <img src={images.iso9001} alt="ISO 9001:2015 certified company" width={74} height={74} loading="lazy" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
