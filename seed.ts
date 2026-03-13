import config from '@payload-config';
import { getPayload } from 'payload';

const categories = [
  {
    title: 'All',
    slug: 'all',
  },
  {
    title: 'Business & Money',
    color: '#FFB347',
    slug: 'business-money',
    subcategories: [
      { title: 'Accounting', slug: 'accounting' },
      {
        title: 'Entrepreneurship',
        slug: 'entrepreneurship',
      },
      { title: 'Gigs & Side Projects', slug: 'gigs-side-projects' },
      { title: 'Investing', slug: 'investing' },
      { title: 'Management & Leadership', slug: 'management-leadership' },
      {
        title: 'Marketing & Sales',
        slug: 'marketing-sales',
      },
      { title: 'Networking, Careers & Jobs', slug: 'networking-careers-jobs' },
      { title: 'Personal Finance', slug: 'personal-finance' },
      { title: 'Real Estate', slug: 'real-estate' },
    ],
  },
  {
    title: 'Software Development',
    color: '#7EC8E3',
    slug: 'software-development',
    subcategories: [
      { title: 'Web Development', slug: 'web-development' },
      { title: 'Mobile Development', slug: 'mobile-development' },
      { title: 'Game Development', slug: 'game-development' },
      { title: 'Programming Languages', slug: 'programming-languages' },
      { title: 'DevOps', slug: 'devops' },
    ],
  },
  {
    title: 'Writing & Publishing',
    color: '#D8B5FF',
    slug: 'writing-publishing',
    subcategories: [
      { title: 'Fiction', slug: 'fiction' },
      { title: 'Non-Fiction', slug: 'non-fiction' },
      { title: 'Blogging', slug: 'blogging' },
      { title: 'Copywriting', slug: 'copywriting' },
      { title: 'Self-Publishing', slug: 'self-publishing' },
    ],
  },
  {
    title: 'Other',
    slug: 'other',
  },
  {
    title: 'Education',
    color: '#FFE066',
    slug: 'education',
    subcategories: [
      { title: 'Online Courses', slug: 'online-courses' },
      { title: 'Tutoring', slug: 'tutoring' },
      { title: 'Test Preparation', slug: 'test-preparation' },
      { title: 'Language Learning', slug: 'language-learning' },
    ],
  },
  {
    title: 'Self Improvement',
    color: '#96E6B3',
    slug: 'self-improvement',
    subcategories: [
      { title: 'Productivity', slug: 'productivity' },
      { title: 'Personal Development', slug: 'personal-development' },
      { title: 'Mindfulness', slug: 'mindfulness' },
      { title: 'Career Growth', slug: 'career-growth' },
    ],
  },
  {
    title: 'Fitness & Health',
    color: '#FF9AA2',
    slug: 'fitness-health',
    subcategories: [
      { title: 'Workout Plans', slug: 'workout-plans' },
      { title: 'Nutrition', slug: 'nutrition' },
      { title: 'Mental Health', slug: 'mental-health' },
      { title: 'Yoga', slug: 'yoga' },
    ],
  },
  {
    title: 'Design',
    color: '#B5B9FF',
    slug: 'design',
    subcategories: [
      { title: 'UI/UX', slug: 'ui-ux' },
      { title: 'Graphic Design', slug: 'graphic-design' },
      { title: '3D Modeling', slug: '3d-modeling' },
      { title: 'Typography', slug: 'typography' },
    ],
  },
  {
    title: 'Drawing & Painting',
    color: '#FFCAB0',
    slug: 'drawing-painting',
    subcategories: [
      { title: 'Watercolor', slug: 'watercolor' },
      { title: 'Acrylic', slug: 'acrylic' },
      { title: 'Oil', slug: 'oil' },
      { title: 'Pastel', slug: 'pastel' },
      { title: 'Charcoal', slug: 'charcoal' },
    ],
  },
  {
    title: 'Music',
    color: '#FFD700',
    slug: 'music',
    subcategories: [
      { title: 'Songwriting', slug: 'songwriting' },
      { title: 'Music Production', slug: 'music-production' },
      { title: 'Music Theory', slug: 'music-theory' },
      { title: 'Music History', slug: 'music-history' },
    ],
  },
  {
    title: 'Photography',
    color: '#FF6B6B',
    slug: 'photography',
    subcategories: [
      { title: 'Portrait', slug: 'portrait' },
      { title: 'Landscape', slug: 'landscape' },
      { title: 'Street Photography', slug: 'street-photography' },
      { title: 'Nature', slug: 'nature' },
      { title: 'Macro', slug: 'macro' },
    ],
  },
];

const seed = async () => {
  const payload = await getPayload({
    config,
  });

  for (const category of categories) {
    const parentCategory = await payload.create({
      collection: 'categories',
      data: {
        title: category.title,
        slug: category.slug,
        color: category.color,
        parent: null,
      },
    });

    for (const subCategory of category.subcategories || []) {
      await payload.create({
        collection: 'categories',
        data: {
          title: subCategory.title,
          slug: subCategory.slug,
          parent: parentCategory.id,
        },
      });
    }
  }
};

try {
  await seed();
  console.log('Seeding success');
  process.exit(0);
} catch (error) {
  console.log('Seeding error');
  process.exit(1);
}
