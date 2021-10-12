export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '6165e5a1af690d151f4c6863',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pif5iitj',
                  apiId: 'cd87c140-43a0-414f-b6e3-411930ffa17b'
                },
                {
                  buildHookId: '6165e5a18b6a5f15b98a5f3a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-81ymv3bp',
                  apiId: '8d60814c-9606-4f15-b9a4-bf9dd0f5ac98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codepic/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-81ymv3bp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
