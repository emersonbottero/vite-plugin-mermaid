module.exports = {
	title: 'ServiceNow.Core',
	description: 'Your easy to use REST API integration library',
	base: '/',

	themeConfig: {
		repo: 'emersonbottero/ServiceNow.Core',
		docsDir: 'docs',
		docsBranch: 'main',
		//editLinks: true,
		// editLinkText: 'Edit this page on GitHub',
		// lastUpdated: 'Last Updated',

		algolia: {
			appId: 'xxxxxxxxx',
			apiKey: 'cccccccccc',
			indexName: 'servicenow'
		},

		nav: [
			{
				text: 'Guide',
				link: '/guide/getting-started',
				activeMatch: '^/guide/'
			},
			// { text: 'Home', link: '/index.html', activeMatch: '/index.html' },
			{
				text: 'Config Reference',
				link: '/config/Authentication',
				activeMatch: '^/config/'
			},
			{
				text: 'Release Notes',
				link: 'https://github.com/emersonbottero/ServiceNow.Core/releases'
			}
		],

		sidebar: {
			'/guide/': getGuideSidebar(),
			'/config/': getConfigSidebar(),
			'/': getGuideSidebar()
		}
	}
};

function getGuideSidebar() {
	return [
		{
			text: 'Introduction',
			children: [
				{ text: 'What is ServiceNow.Core?', link: '/' },
				{ text: 'Getting Started', link: '/guide/getting-started' },
				{ text: 'Configuration', link: '/config/Authentication' }
			]
		},
		{
			text: 'Advanced',
			children: [
				{ text: 'Custom Flow', link: '/guide/catalog-item' },
				{ text: 'Import Set', link: '/guide/import-set' }
			]
		}
	];
}

function getConfigSidebar() {
	return [
		{
			text: 'Configurations',
			children: [
				{ text: 'Authentication', link: '/config/Authentication' },
				{ text: 'Serializers', link: '/config/Serializers' }
			]
		}
	];
}
