export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'logo_path',
            title: 'Logo',
            type: 'string',
        },
        {
            name: 'projectDescription',
            title: 'Project Description',
            type: 'string',
        },
        {
            name: 'githubUrl',
            title: 'Github Url',
            type: 'string',
        },
        {
            name: 'hostedUrl',
            title: 'Hosted Url',
            type: 'string',
        },
        {
            name: 'description',
            title: "Description",
            type: 'string'
        },
        {
            title: 'Publish Date',
            name: 'publishDate',
            type: 'date'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },

    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            })
        },
    },
}
