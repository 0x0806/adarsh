export type Work = {
  name: string;
  url: string;
  host: string;
  image: string;
  imageAlt: string;
  kind: string;
  place: string;
  summary: string;
};

// Client sites designed and built end to end. Copy taken from each live site's own description.
export const works: Work[] = [
  {
    name: "Energy Hub Cafe",
    url: "https://www.energyhub.cafe/",
    host: "energyhub.cafe",
    image: "/works/energyhub.jpg",
    imageAlt: "Energy Hub Cafe website share image",
    kind: "Cafe",
    place: "Sharjah, UAE",
    summary: "High-protein menu, ordering through WhatsApp and delivery apps, open daily from 5 AM to midnight.",
  },
  {
    name: "New Lifestyle Way Gym",
    url: "https://lifestylegym.fit/",
    host: "lifestylegym.fit",
    image: "/works/lifestylegym.jpg",
    imageAlt: "New Lifestyle Way Gym website share image",
    kind: "Gym",
    place: "Sharjah, UAE",
    summary: "A 24/7 gym with personal training, group classes, online coaching and a free demo booking.",
  },
];
