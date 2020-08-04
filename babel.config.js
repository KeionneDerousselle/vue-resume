module.exports = {
  'presets': [
    [
      '@babel/preset-env',
      {
        shippedProposals: true,
        useBuiltIns: 'usage',
        targets: '> 0.5%, last 2 versions, firefox ESR, not ie <= 8',
        bugfixes: true,
        corejs: {
          version: 3,
          proposals: true
        }
      }
    ]
  ],
  'plugins': [
    [
 '@babel/plugin-proposal-decorators',
      { 'legacy': true
      }
    ],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-syntax-dynamic-import',
    [
 '@babel/plugin-proposal-object-rest-spread',
      { loose: true, useBuiltIns: true
      }
    ], //
    '@babel/plugin-proposal-logical-assignment-operators',
    [
 '@babel/plugin-proposal-pipeline-operator',
      { 'proposal': 'minimal'
      }
    ],
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-syntax-import-meta',
  ],
  'env': {
    'test': {
      'presets': [
        [
          '@babel/preset-env',
          {
            shippedProposals: true,
            useBuiltIns: 'usage',
            targets: '> 0.5%, last 2 versions, firefox ESR, not ie <= 8',
            bugfixes: true,
            corejs: {
              version: 3,
              proposals: true
            }
          }
        ]
      ],
      'plugins': [
        [
 '@babel/plugin-proposal-decorators',
          { 'legacy': true
          }
        ],
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-function-sent',
        '@babel/plugin-syntax-dynamic-import',
        [
 '@babel/plugin-proposal-object-rest-spread',
          { loose: true, useBuiltIns: true
          }
        ], //
        '@babel/plugin-proposal-logical-assignment-operators',
        [
 '@babel/plugin-proposal-pipeline-operator',
          { 'proposal': 'minimal'
          }
        ],
        '@babel/plugin-proposal-do-expressions',
        '@babel/plugin-proposal-throw-expressions',
        '@babel/plugin-syntax-import-meta',
      ],
    }
  }
}
