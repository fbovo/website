import { IMenuState } from './'

export default (): IMenuState =>
  ({
    main: {
      active: '',
      modal: true,
      items: [
        {
          label: 'Who I am',
          anchor: '#intro',
        },
        {
          label: 'Experience',
          anchor: '#about',
        },
        {
          label: 'Get in contact',
          anchor: '#contact',
        },
      ],
    },
    about: {
      active: '',
      modal: true,
      items: [
        {
          label: 'Skills',
          anchor: '#skills',
          icon: 'Jupiter',
        },
        {
          label: 'Projects',
          anchor: '#projects',
          icon: 'Jupiter',
        },
        {
          label: 'Education and Awards',
          anchor: '#education',
          icon: 'Jupiter',
        },
      ],
    },
    footer: {
      active: '',
      modal: false,
      items: [
        {
          label: 'Privacy',
          anchor: '/privacy-policy',
        },
      ],
    },
  } as IMenuState)
