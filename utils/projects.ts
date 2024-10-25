export default function () {
  const myProjects = [
    {
      title: 'Inventory App',
      description: 'An application to view and register stored items.',
      technologies: ['Nuxt3', 'MongoDB', 'TypeScript'],
      url: 'https://github.com/DrakoPOD/storage-app-nuxt',
    },
    {
      title: 'IoT Server',
      description:
        'A server that acts as a broker for IoT devices and provides endpoints.',
      technologies: [
        'NodeJS, Express',
        'MongoDB',
        'MQTT',
        'Arduino (C++)',
        'ESP32',
        'Docker',
        'Aedes (Broker)',
      ],
    },
    {
      title: 'IoT Dashboard',
      description: 'An application to visualize data from MQTT devices.',
      technologies: ['Vue', 'TypeScript'],
      imgUrl: '/project-img/IoT-Dashboard.jpg',
    },
    {
      title: 'Task App',
      description: 'A simple task management application.',
      technologies: ['Vue', 'TypeScript'],
      url: 'https://github.com/DrakoPOD/frontend-development-test',
    },
  ];

  return myProjects;
}
