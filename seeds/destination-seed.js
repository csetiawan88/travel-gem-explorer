// Destination
// Source: https://www.sydney.com/articles/nine-secret-sydney-spots
const { Destination } = require('../models');

const destinationData = [
  {
    name: 'Paddington Reservoir Gardens',
    location: 'Paddington NSW<',
    description:
      'Paddington Reservoir Gardens, in Sydney’s east, is a heritage-listed reservoir that supplied the city’s water from 1878 until 1899. It became a service station with a park overhead, but today its chambers have been opened up to show its bones. Some worldly types say it now reminds them of Rome’s ancient Baths of Caracalla. It’s a surprisingly peaceful haven given its location on busy Oxford Street.',
    image_source:
      'https://www.sydney.com/sites/sydney/files/styles/gallery_no_thumb_large/public/2017-09/149768-56.webp?itok=g1JtIAdW',
  },
  {
    name: 'Eveleigh Treehouse',
    location: 'Eveleigh NSW',
    description:
      'Eveleigh Treehouse is an artist-led architecture project and installation from mononymous Sydney artist Nell in collaboration with design collective Cave Urban. The trees, made from steel from nearby Eveleigh Works (one of the oldest continuing blacksmith sites in the world) and with support from the local community, are designed to resemble the native gum trees in the area.',
    image_source:
      'https://www.sydney.com/sites/sydney/files/styles/gallery_no_thumb_large/public/2022-02/Eveleigh%20Treehouse-By%20Nell%20and%20Cave%20Urban-Image%20Credit%20-%20Mark%20Pokorny_0.webp?itok=JALrgzYZ',
  },
  {
    name: 'Milk Beach',
    location: 'Vaucluse NSW',
    description:
      'Milk Beach is located in ritzy Vaucluse but this multi-million-dollar view is free for all to enjoy. Wander from Nielsen Park’s Shak Beach (climb the stairs tucked away at the western end of the beach) and mosey along the secluded Hermitage Foreshore track to reach this pearler of a beach. On occasions, you’ll have the place completely to yourself.',
    image_source:
      'https://www.sydney.com/sites/sydney/files/styles/gallery_no_thumb_large/public/2021-07/150578%20-%20View%20of%20Shark%20Island%20and%20Sydney%20Harbour%20from%20the%20Hermitage%20Foreshore%20Walking%20Track%20in%20Vaucluse%20-%20DNSW%20-%20sml_0.webp?itok=cVju-EJ_',
  },
  {
    name: 'Wendy Whiteley Secret Garden',
    location: 'North Sydney NSW',
    description:
      'If you asked around, you would find that many people have heard of Wendy Whiteley’s Secret Garden, and some would have already been there and connected with it. It is not really a secret. It is actually one of the worst kept secrets in Sydney',
    image_source:
      'https://www.sydney.com/sites/sydney/files/styles/gallery_no_thumb_large/public/2017-11/151754-2.webp?itok=Oy0o63de',
  },
];

const seedDestination = () => Destination.bulkCreate(destinationData);

module.exports = seedDestination;
