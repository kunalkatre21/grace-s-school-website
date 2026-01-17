
import { AdmissionStep, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Admissions', href: '#', isActive: true },
  { label: 'Academics', href: '#' },
  { label: 'Student Life', href: '#' },
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Inquiry',
    description: 'Connect with us to receive our digital brochure and learn about our mission, curriculum, and community values.',
    icon: 'mail',
    iconBgColor: 'bg-primary/10',
    iconTextColor: 'text-primary'
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Visit',
    description: 'Experience our community firsthand through a guided tour of our modern facilities and meet our dedicated educators.',
    icon: 'map',
    iconBgColor: 'bg-accent-gold/10',
    iconTextColor: 'text-accent-gold'
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Application',
    description: 'Submit your details through our streamlined portal. Our board reviews each application with careful consideration.',
    icon: 'description',
    iconBgColor: 'bg-primary/10',
    iconTextColor: 'text-primary'
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Enrollment',
    description: 'Welcome to the family—finalize your placement, complete the registration, and begin your exciting academic journey.',
    icon: 'verified',
    iconBgColor: 'bg-accent-gold/10',
    iconTextColor: 'text-accent-gold'
  }
];

export const IMAGES = {
  LOGO: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-SW-PEutNuD9rF2yjiaTP5XjQYGlmWpugZMqcweE_jwfm8SJQi3YVA4liLcKhz8GHJJ3sJVIvAXd4QLvKy7X3AcgbQW54F3xLPOC9rx7DHeJrw7JuCDAri75fpQuXqtdPVDFgRUMABcKjlzEKV14BtmW78FjCJgRi7CG-l9cFWHJRcVSidgyyOJCylIrslCOg8sH9qCIRjwmpAemBFN4jNshqbvVzitB_B_FHgTiaeFUUV2usmaSnxapb9pNtJHfJTTu1IufbuQQw',
  HERO: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCma11IHslxcsI6y-A0XUcJrQXxpSLuR_l1wTv4QE505OD0ou5mTjPGu34HpuEDjdC-qh384FuuhFlFXqP7zQLmqk_NMd67KNiMYPwHZv-JobKAJnPUZH0DwTMXavPDq-B6YJRu0JhRmggp4eIZWi1IpbxI4TTCHSVQsA-jgOefCwDZ2PDodm09oBPs9I8lPtJkg0dWC1_ESKZrDAPag8wZRF5Mwov6HDdVU8FLje9oeMa1isAs2kFTmY26Bc6rxdr8YTpwXOF6-kCV',
  SARAH: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6fmXp5L_Yvw_HRL2YBFk0aM7qswYtbVwa0yIDHbXGNOC2YfXa-y_uYLAoA7gOIaj08F8FqfFQVbVl3LTSQK-sbqoAma4c0_HFnQJ5GxVjdtE60ZZOcjyoWUN_2D-bSDkPLLyqSgQNZwjC5uzH9OUVvZr73aKWeY6kTzT8chipwEiWxQSTt_OMjq9h08T_JxXTPXLO_-_Tab3l9RBkjmC-XZ5YuCMNG2ZDU78gf33DckDFg8wydL2oMAqfV17n90PoHPV7_zDlRvm8',
  MAP: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiFuYwZXweqLda6w0gdcY_e5HAGvT8GB_-xTn66l1tM3udUbZxpl43QhplHiasuDZCDi3Z7FMQYMF1oifvxxBjyA8hF3s8qaAiuOdKmUZM_u-joOgP98dyyRluD1ckXibqOOQYS3Y8pxx-cwCktErTon_B3pGOa25khuiL_N7tOlDl995Z2MA-ISIyxL-9WcSm5-kfeLXTDegVumwqtBpVg77xOY--Du4OISJerXbCx8PKIU5wf_oLgBVuPHuPTOn3XnVBcu-HT11q',
  USER_AVATAR: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-SW-PEutNuD9rF2yjiaTP5XjQYGlmWpugZMqcweE_jwfm8SJQi3YVA4liLcKhz8GHJJ3sJVIvAXd4QLvKy7X3AcgbQW54F3xLPOC9rx7DHeJrw7JuCDAri75fpQuXqtdPVDFgRUMABcKjlzEKV14BtmW78FjCJgRi7CG-l9cFWHJRcVSidgyyOJCylIrslCOg8sH9qCIRjwmpAemBFN4jNshqbvVzitB_B_FHgTiaeFUUV2usmaSnxapb9pNtJHfJTTu1IufbuQQw'
};
