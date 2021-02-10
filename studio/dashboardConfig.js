export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6023cc9356c8bb1cf40e707c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-3cmei3bu',
                  apiId: 'aea8a944-ad06-4dae-9e98-0947f8760cbb'
                },
                {
                  buildHookId: '6023cc93d4ef072ae1ef1d57',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-wo7o8woe',
                  apiId: '4ee33cd1-5813-4936-a50b-c77fbfd7ae9f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raymondpe/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-wo7o8woe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
