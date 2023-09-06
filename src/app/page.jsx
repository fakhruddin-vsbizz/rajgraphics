import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import { GridPattern } from '@/components/GridPattern'

import nxtjs from '@/images/rajgraphics/nextjs.png'
import twcss from '@/images/rajgraphics/tailwindcss.jpeg'
import jslang from '@/images/rajgraphics/jslang.png'
import django from '@/images/rajgraphics/django.jpeg'
import flutter from '@/images/rajgraphics/flutter.png'
import mongodb from '@/images/rajgraphics/mongodb.webp'
import mysqldb from '@/images/rajgraphics/mysql.png'
import reactlg from '@/images/rajgraphics/reactjs.png'
import postgresql from '@/images/rajgraphics/postgresql.png'
import python from '@/images/rajgraphics/python.webp'
import php from '@/images/rajgraphics/php.png'



const technology = [
  ['NextJS', nxtjs],
  ['TailwindCSS', twcss],
  ['Javascript', jslang],
  ['Django', django],
  ['Flutter', flutter],
  ['MongoDB', mongodb],
  ['MySQL', mysqldb],
  ['ReactJS', reactlg],
  ['PostgreSQL', postgresql],
  ['Python', python],
  ['PHP', php],
]

function Technologies() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40 bg-black p-8 rounded-lg">
      <FadeIn>
        <h2 className="font-display text-4xl font-semibold text-neutral-950 text-white p-4">
          Just lay a finger and we will do it
        </h2>
        <h4 className="font-display text-xl font-semibold text-neutral-950 text-white p-4">
          Our expertise in working with market-dominant technologies enables us to provide you with innovative solutions that leverage the full potential of these cutting-edge tools
        </h4>
      </FadeIn>
      <FadeInStagger className="mt-10 p-4" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {technology.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-4 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(6)]:-mt-px">
                  <Image src={logo} alt={client} unoptimized className='w-14 h-14 rounded-full' />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container >
  )
}




function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="We don't just build platforms and solutions, we build UX and Processes"
        className="mt-24 sm:mt-32 lg:mt-40 text-2xl"
      >
        <p className='text-xl'>
          Everybody in the technology world can build a system, only a few can build a system which can be bent to te client's vision.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <span className="absolute inset-0 rounded-3xl" />
                  <Image
                    src={caseStudy.logo}
                    alt={caseStudy.client}
                    className="h-16 w-16"
                    unoptimized
                  />
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We are not just a service company, we develop services, processes and products empowered by latest technologies.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end" />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Website development">
              We use market-dominant technologies like ReactJS, NextJS, TailwindCSS and much more to build robust, performant and extensible web platforms, upskilling business processes and client needs.
            </ListItem>
            <ListItem title="Mobile Development">
              We use market-dominant technologies like Flutter, Dart, React Native and much more to build highly performant, visually appealing UX and mobile applications improving mobile experience and notching up the client's expectations.
            </ListItem>
            <ListItem title="Product Engineering and Solutions">
              We specialize in developing product engineering done by curated team of engineers, business development professionals and UX designers to deliver highly-performant user experience along with blazingly fast product performance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}


// loading page componenet
export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Unleash Creativity - Your Vision, Our Expertise!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We at Raj Graphics believe that vision can only be brought to life when you make it your vision and thus, we always make sure that our work is your vision.
          </p>
        </FadeIn>
      </Container>

      <CaseStudies caseStudies={caseStudies} />

      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_90%,transparent_60%)]"
        yOffset={-256}
      />
      <Technologies />


      <Services />

      <ContactSection />
    </>
  )
}
