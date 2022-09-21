export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '632b6b85515d0423544643f6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-tsz256yr',
                  apiId: 'd4e3258a-4286-4a4a-9fc8-e2fb49f008c4'
                },
                {
                  buildHookId: '632b6b8501287924e2324ade',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hfovg5zj',
                  apiId: '06892e8c-ec94-4dda-92f1-4179587a62d5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Salloom99/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hfovg5zj.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
