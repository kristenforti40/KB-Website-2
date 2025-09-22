
import { Horse, TeamMember, SuccessStory, NavDropdown, NavLink, NewsPost, RacingStats } from './types';

export const NAVIGATION_DROPDOWNS: NavDropdown[] = [
  {
    label: 'About',
    links: [
      { label: 'Meet Keri', href: '/meet-keri' },
      { label: 'Meet the Team', href: '/team' },
      { label: 'Top Horses', href: '/horses' },
      { label: 'Success Stories', href: '/success-stories' },
      { label: 'News', href: '/news' },
    ],
  },
  {
    label: 'Services',
    links: [
      { label: 'Training', href: '/training' },
      { label: 'Bloodstock', href: '/bloodstock' },
      { label: 'Facilities', href: '/facilities' },
      { label: 'Partnerships', href: '/partnerships' },
    ],
  },
];

export const NAVIGATION_LINKS: NavLink[] = [
    { label: 'Contact', href: '/contact' },
];

export const TOP_HORSES: Horse[] = [
  { id: 1, name: 'Historic', bio: 'A champion steeplechaser with a heart of gold.', imageUrl: 'https://picsum.photos/seed/horse1/400/500' },
  { id: 2, name: 'Freddy Frize', bio: 'Known for his incredible speed and agility on the flat track.', imageUrl: 'https://picsum.photos/seed/horse2/400/500' },
  { id: 3, name: 'The Mean Queen', bio: 'A fierce competitor and multiple graded stakes winner.', imageUrl: 'https://picsum.photos/seed/horse3/400/500' },
  { id: 4, name: 'Snap Decision', bio: 'A versatile runner, excelling in both hurdle and chase races.', imageUrl: 'https://picsum.photos/seed/horse4/400/500' },
  { id: 5, name: 'Global Citizen', bio: 'An international star with wins across multiple continents.', imageUrl: 'https://picsum.photos/seed/horse5/400/500' },
  { id: 6, name: 'French Light', bio: 'A promising up-and-comer with a bright future ahead.', imageUrl: 'https://picsum.photos/seed/horse6/400/500' },
  { id: 7, name: 'Boulette', bio: 'A consistent performer, always giving his all on the track.', imageUrl: 'https://picsum.photos/seed/horse7/400/500' },
  { id: 8, name: 'Sa\'ad', bio: 'A fan favorite known for his thrilling come-from-behind victories.', imageUrl: 'https://picsum.photos/seed/horse8/400/500' },
  { id: 9, name: 'Ljay', bio: 'A young talent showing immense potential in his early career.', imageUrl: 'https://picsum.photos/seed/horse9/400/500' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 1, name: 'Rodolphe Green', role: 'Assistant Trainer', bio: 'With over 20 years of experience, Rodolphe is an invaluable part of the team, overseeing daily operations and horse conditioning.', imageUrl: 'https://picsum.photos/seed/team1/400/400' },
  { id: 2, name: 'Jane Smith', role: 'Head Groom', bio: 'Jane\'s meticulous attention to detail and deep love for the horses ensure they are always happy, healthy, and ready to race.', imageUrl: 'https://picsum.photos/seed/team2/400/400' },
  { id: 3, name: 'Michael Chen', role: 'Exercise Rider', bio: 'Michael\'s skill in the saddle helps develop our horses\' strength and stamina, preparing them for the rigors of competition.', imageUrl: 'https://picsum.photos/seed/team3/400/400' },
];

export const SUCCESS_STORIES: SuccessStory[] = [
    { id: 1, title: 'Grade 1 Victory at Saratoga', description: 'A longshot victory that stunned the racing world, showcasing our team\'s ability to prepare a horse for the biggest stage. It was a day of pure joy and validation of our hard work.', imageUrl: 'https://picsum.photos/seed/success1/500/300' },
    { id: 2, 'title': 'Claimer to Champion', description: 'We claimed a horse for a modest sum and developed him into a multiple stakes winner. This story is a testament to our eye for talent and patient training methods.', imageUrl: 'https://picsum.photos/seed/success2/500/300' },
    { id: 3, 'title': 'Yearling Purchase to Classic Contender', description: 'From the sales ring to the starting gate of a classic race, this journey was a dream come true for the ownership group. It highlighted our expertise in bloodstock selection and development.', imageUrl: 'https://picsum.photos/seed/success3/500/300' },
];

export const NEWS_POSTS: NewsPost[] = [
    { id: 1, title: 'Big Win at Belmont!', date: '2024-05-20', content: 'In a thrilling finish, our star mare "Starlight Sprint" captured the Grade 2 Acorn Stakes at Belmont Park. It was a testament to her heart and the team\'s hard work. We are incredibly proud of her performance and look forward to her next start!', imageUrl: 'https://picsum.photos/seed/news1/800/400' },
    // FIX: Removed duplicate 'content' property.
    { id: 2, title: 'Welcome New Additions to the Barn', date: '2024-05-15', content: 'We are excited to welcome two promising yearlings to the Keri Brion Racing family. A colt by "Champion Sire" and a filly by "Speedy Dam" have settled in nicely and are showing great potential. We can\'t wait to see what the future holds for them.' },
    { id: 3, title: 'Fair Hill Training Update', date: '2024-05-10', content: 'The horses are loving the spring weather at Fair Hill. Morning works have been sharp, and the entire string is in excellent condition. We are gearing up for a busy and exciting summer racing season at Saratoga and Monmouth Park.', imageUrl: 'https://picsum.photos/seed/news3/800/400' },
];

export const RACING_STATS: RacingStats = {
    currentYear: {
        starts: 225,
        wins: 32,
        earnings: '$1,715,305'
    },
    career: {
        starts: 1286,
        wins: 159,
        earnings: '$7,638,628'
    }
};
