// Destination
const { Destination } = require('../models');

const destinationData = [
  {
    name: 'Manly Scenic Walkway',
    location: 'Manly NSW',
    description: 'Also known as the Spit Bridge to Manly Walk, Manly Scenic Walkway is among Sydney best walking tracks.',
    image_source: 'https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/sydney-harbour-national-park/manly-scenic-walk/manly-scenic-walkway-01.jpg',
  },
  {
    name: 'Jenolan Caves',
    location: 'Blue Mountains NSW',
    description: 'Jenolan Caves are the largest, most spectacular and most famous caves in Australia. Explore the world oldest caves - one of the most outstanding cave systems in the world.',
    image_source: 'https://www.jenolancaves.org.au/images/sendbinary.asp?path=imagesDB/wysiwyg/grandtour.jpg&maxwidth=1185&maxheight=583',
  },
  {
    name: 'CSIRO Parkes Observatory',
    location: 'Parkes NSW',
    description: 'Parkes Observatory, just outside the central-west NSW town of Parkes, hosts Murriyang, the 64-metre Parkes radio telescope, one of the telescopes comprising CSIRO’s Australia Telescope National Facility.',
    image_source: 'https://www.parkes.atnf.csiro.au/images/PA8685_flip_sml.jpg',
  },
  {
    name: 'Wendy Whiteley Secret Garden',
    location: 'North Sydney NSW',
    description: 'If you asked around, you would find that many people have heard of Wendy Whiteley’s Secret Garden, and some would have already been there and connected with it. It is not really a secret. It is actually one of the worst kept secrets in Sydney',
    image_source: 'https://www.wendyssecretgarden.org.au/wp-content/uploads/2017/01/wendys-garden-overview-bridge-large.jpg',
  },
];

const seedDestination = () => Destination.bulkCreate(destinationData);

module.exports = seedDestination;
