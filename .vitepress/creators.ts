const creatorNames = ['nyovelt']

export interface UserAvatar {
  name: string
  avatar: string
}

export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creators {
  avatar: string
  name: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const creatorAvatars: Record<string, string> = {}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const users = creatorNames.reduce((acc, name) => {
  creatorAvatars[name] = getAvatarUrl(name)
  acc.push({ name, avatar: creatorAvatars[name] })
  return acc
}, [] as UserAvatar[])

const creators: Creators[] = [
  {
    name: 'Canarypwn',
    avatar: creatorAvatars.nyovelt,
    title: 'Nólëbase 原始创作者',
    desc: '开发者',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/nyovelt' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/nyovelt' },
    ],
    nameAliases: ['nyovelt', 'Canarypwn'],
    emailAliases: ['canarypwn@aosc.io'],
  },
]

export { creators }
