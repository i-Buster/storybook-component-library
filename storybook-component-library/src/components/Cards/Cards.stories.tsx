import { h } from 'preact';
import { Story, Meta } from '@storybook/preact';

import { CardComponent } from './Cards';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Example/CardComponent',
  component: CardComponent,
} as Meta<typeof CardComponent>;

//👇 We create a “template” of how args map to rendering
const Template: Story<typeof CardComponent> = (args) => <CardComponent {...args} />;

export const VACardComponent= Template.bind({});


VACardComponent.args = {
    id: 1,
    carouselURL: 'https://d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/8902/8902-1-results_carousel.jpg?version=44',
    hotelName: 'Westin New York Times Square',
    pricePerPerson: '1555',
    hotelRating: 5,
    hotelDescription: `The Westin New York at Times Square is an exhilarating achievement of art and architecture. Connected to the hotel is a 200,000sq ft multiplex, housing 13 cinema screens. As you would expect from one of the Big Apple's latest gems, all rooms are beautifully furnished with an excellent range of amenities. Not forgetting the luxurious Westin Heavenly.`
};

