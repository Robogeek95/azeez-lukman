import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import getAllFilesRecursively from './files'
const root = process.cwd()

export function formatSlug(slug: string) {
    return slug.replace(/\.(mdx|md)/, '')
}

export function dateSortDesc(a: Date, b: Date) {
    if (a > b) return -1
    if (a < b) return 1
    return 0
}

export async function getAllFilesFrontMatter(folder) {
    const prefixPaths = path.join(root, 'data', folder)

    const files = getAllFilesRecursively(prefixPaths)

    const allFrontMatter = []

    files.forEach((file) => {
        // Replace is needed to work on Windows
        const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
        // Remove Unexpected File
        if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
            return
        }
        const source = fs.readFileSync(file, 'utf8')
        const { data: frontmatter } = matter(source)
        if (frontmatter.draft !== true) {
            allFrontMatter.push({
                ...frontmatter,
                slug: formatSlug(fileName),
                date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
            })
        }
    })

    // sort data by date
    return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
}